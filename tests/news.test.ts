import { describe, expect, it } from "vitest";
import { getAllNewsPosts, getAllNewsTags } from "@/lib/news";

describe("news content", () => {
  it("loads published posts and managed tags from markdown", () => {
    const posts = getAllNewsPosts();
    const tags = getAllNewsTags();

    expect(posts.length).toBeGreaterThanOrEqual(3);
    expect(tags.map((tag) => tag.slug)).toEqual(
      expect.arrayContaining(["nhs-chc", "care-funding", "complex-care"])
    );
  });

  it("loads optional article CTA blocks from markdown", () => {
    const posts = getAllNewsPosts();
    const postWithBlocks = posts.find((post) => post.ctaBlocks.length > 0);

    expect(postWithBlocks).toBeTruthy();
    expect(postWithBlocks?.ctaBlocks[0]).toMatchObject({
      type: "consultation",
      heading: expect.any(String),
      buttonLabel: expect.any(String)
    });
  });
});
