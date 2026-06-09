import { CheckCircle2, XCircle } from "lucide-react";

type MisconceptionItem = {
  title: string;
  content: string;
};

export function MisconceptionComparison({ items }: { items: MisconceptionItem[] }) {
  return (
    <div className="misconception-compare-list">
      {items.map((item) => (
        <article className="misconception-compare-row" key={item.title}>
          <div className="misconception-belief">
            <XCircle size={28} aria-hidden />
            <div>
              <h3>{item.title}</h3>
              <p>Common belief</p>
            </div>
          </div>
          <div className="misconception-rule" aria-hidden />
          <div className="misconception-reality">
            <CheckCircle2 size={28} aria-hidden />
            <div>
              <h3>The reality</h3>
              <p>{item.content}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
