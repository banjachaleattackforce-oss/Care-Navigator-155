import fs from "node:fs";
import path from "node:path";

export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  ctaBlocks: NewsCtaBlock[];
  body: string;
  published: boolean;
};

export type NewsCtaBlock = {
  type: "consultation" | "professional-referral" | "newsletter" | "custom-link";
  heading: string;
  text: string;
  buttonLabel: string;
  buttonUrl: string;
};

export type NewsTag = {
  slug: string;
  title: string;
  description: string;
  featured: boolean;
};

const newsDirectory = path.join(process.cwd(), "content", "news");
const tagsDirectory = path.join(process.cwd(), "content", "tags");

function parseValue(value: string) {
  const trimmed = value.trim();
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(file: string) {
  const match = file.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {} as Record<string, unknown>, body: file.trim() };

  const data: Record<string, unknown> = {};
  const lines = match[1].split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (!line.trim()) continue;

    const keyValue = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyValue) continue;

    const [, key, rawValue] = keyValue;
    if (rawValue === "") {
      const list: Array<string | Record<string, unknown>> = [];
      while (lines[index + 1]?.match(/^\s+-\s+/)) {
        index += 1;
        const itemLine = lines[index].replace(/^\s+-\s+/, "");
        const objectStart = itemLine.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);

        if (objectStart) {
          const item: Record<string, unknown> = {
            [objectStart[1]]: parseValue(objectStart[2])
          };

          while (lines[index + 1]?.match(/^\s{4,}[A-Za-z0-9_-]+:\s*/)) {
            index += 1;
            const nested = lines[index].trim().match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
            if (nested) item[nested[1]] = parseValue(nested[2]);
          }

          list.push(item);
        } else {
          list.push(itemLine.trim());
        }
      }
      data[key] = list;
    } else {
      data[key] = parseValue(rawValue);
    }
  }

  return { data, body: match[2].trim() };
}

export function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAllNewsPosts({ includeDrafts = false } = {}) {
  if (!fs.existsSync(newsDirectory)) return [];

  return fs
    .readdirSync(newsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(newsDirectory, file), "utf8");
      const { data, body } = parseFrontmatter(raw);

      const ctaBlocks = Array.isArray(data.ctaBlocks)
        ? data.ctaBlocks
            .filter((item): item is Record<string, unknown> => typeof item === "object" && item !== null)
            .map((item) => ({
              type: String(item.type || "consultation") as NewsCtaBlock["type"],
              heading: String(item.heading || ""),
              text: String(item.text || ""),
              buttonLabel: String(item.buttonLabel || "Learn more"),
              buttonUrl: String(item.buttonUrl || "/contact#consultation")
            }))
        : [];

      return {
        slug: String(data.slug || file.replace(/\.md$/, "")),
        title: String(data.title || "Untitled resource"),
        date: String(data.date || ""),
        author: String(data.author || "Yvonne Brown"),
        category: String(data.category || "Family guidance"),
        summary: String(data.summary || ""),
        featuredImage: String(data.featuredImage || ""),
        featuredImageAlt: String(data.featuredImageAlt || ""),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        seoTitle: String(data.seoTitle || data.title || ""),
        seoDescription: String(data.seoDescription || data.summary || ""),
        ctaBlocks,
        body,
        published: data.published !== false
      } satisfies NewsPost;
    })
    .filter((post) => includeDrafts || post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsPost(slug: string) {
  return getAllNewsPosts().find((post) => post.slug === slug);
}

export function getAllNewsTags() {
  if (!fs.existsSync(tagsDirectory)) return [];

  return fs
    .readdirSync(tagsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(tagsDirectory, file), "utf8");
      const { data } = parseFrontmatter(raw);
      const title = String(data.title || file.replace(/\.md$/, ""));

      return {
        slug: String(data.slug || slugify(title)),
        title,
        description: String(data.description || ""),
        featured: data.featured !== false
      } satisfies NewsTag;
    })
    .filter((tag) => tag.featured)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getNewsTagBySlug(tagSlug: string) {
  return getAllNewsTags().find((tag) => tag.slug === tagSlug);
}

export function getNewsPostsByTag(tagSlug: string) {
  return getAllNewsPosts().filter((post) => post.tags.some((tag) => tag === tagSlug || slugify(tag) === tagSlug));
}

export function resolveNewsPostTags(post: NewsPost) {
  const tags = getAllNewsTags();
  return post.tags
    .map((tag) => tags.find((managedTag) => managedTag.slug === tag || managedTag.title === tag))
    .filter((tag): tag is NewsTag => Boolean(tag));
}

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));
}
