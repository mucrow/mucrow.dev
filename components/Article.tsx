export default function Article(props: React.PropsWithChildren<{}>) {
  return (
    <article className="page-type-article">
      {props.children}
    </article>
  );
}
