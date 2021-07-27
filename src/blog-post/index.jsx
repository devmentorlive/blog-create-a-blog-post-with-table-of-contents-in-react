import { Children } from "react";
import { parameterize } from "../modules/string";
import Section from "./section";
import Heading from "./heading";
export { Section, Heading };

export default function BlogPost({ children, title }) {
  const sections = Children.toArray(children).filter(
    (child) => child.type.displayName === "Section"
  );

  const headings = sections.map((section) =>
    Children.toArray(section.props.children).find(
      (child) => child.type.displayName === "Heading"
    )
  );

  return (
    <article>
      <h1>{title}</h1>

      <ul>
        {headings.map((heading, i) => (
          <li key={i}>
            <a href={`#${parameterize(heading.props.children)}`}>{heading}</a>
          </li>
        ))}
      </ul>

      {children}
    </article>
  );
}
