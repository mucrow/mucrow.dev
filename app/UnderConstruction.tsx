export default function UnderConstruction(props: React.PropsWithChildren<{}>) {
  return (
    <section className="max-w-screen-md text-center">
      <p className="text-red-500">(Under construction.)</p>
      <p>{props.children}</p>
    </section>
  );
}
