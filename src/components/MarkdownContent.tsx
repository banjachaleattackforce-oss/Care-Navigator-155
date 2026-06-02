type Props = {
  content: string;
};

function inlineFormat(value: string) {
  return value
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
}

export function MarkdownContent({ content }: Props) {
  const blocks = content.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="markdown-content">
      {blocks.map((block, index) => {
        if (block.startsWith("### ")) {
          return <h3 key={index}>{block.replace(/^### /, "")}</h3>;
        }
        if (block.startsWith("## ")) {
          return <h2 key={index}>{block.replace(/^## /, "")}</h2>;
        }
        if (block.startsWith("# ")) {
          return <h1 key={index}>{block.replace(/^# /, "")}</h1>;
        }
        if (block.includes("\n- ")) {
          const [lead, ...items] = block.split(/\n-\s+/);
          return (
            <div key={index}>
              {lead ? <p dangerouslySetInnerHTML={{ __html: inlineFormat(lead) }} /> : null}
              <ul>
                {items.map((item) => (
                  <li key={item} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
                ))}
              </ul>
            </div>
          );
        }
        return <p key={index} dangerouslySetInnerHTML={{ __html: inlineFormat(block) }} />;
      })}
    </div>
  );
}
