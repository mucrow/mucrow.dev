export default function UnderConstruction(props: React.PropsWithChildren<{}>) {
  return (
    <section>
      <p>(Under construction.)</p>
      <p>{props.children}</p>
    </section>
  );
}
