import BlogPost, { Section, Heading } from "./blog-post";

export default function App() {
  return (
    <BlogPost>
      <Section>
        <Heading>This would be the first item in the TOC</Heading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, libero
          facere officia natus totam voluptatibus magni nihil veniam eveniet!
          Impedit cumque atque vero? Nulla sit est officiis ratione assumenda
          molestias.
        </p>
      </Section>

      <Section>
        <Heading>This is the second heading</Heading>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dicta
          voluptates, nesciunt officia delectus alias nulla, doloribus iure
          suscipit ducimus amet impedit qui, placeatoff iciis iusto assumenda
          beatae ipsam reprehenderit.
        </p>
      </Section>
    </BlogPost>
  );
}
