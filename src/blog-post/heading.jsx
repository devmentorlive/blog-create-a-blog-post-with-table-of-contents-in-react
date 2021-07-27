import { parameterize } from "../modules/string";

export default function Heading({ children }) {
  return (
    <>
      <a name={parameterize(children)} />
      <h2>{children}</h2>
    </>
  );
}

Heading.displayName = "Heading";
