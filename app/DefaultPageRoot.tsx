import { HTMLAttributes } from "react";

const DEFAULT_CLASS_NAME = 'bg-white max-w-screen-md px-6 py-10 rounded-lg';

export default function DefaultPageRoot(props: React.PropsWithChildren<HTMLAttributes<HTMLElement>>) {
  return (
    <section className={DEFAULT_CLASS_NAME} {...props}>
      {props.children}
    </section>
  );
}

DefaultPageRoot.DEFAULT_CLASS_NAME = DEFAULT_CLASS_NAME;
