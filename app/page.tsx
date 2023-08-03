import {AnchorHTMLAttributes} from 'react';

function Heading1() {
  return <h1 className="text-6xl">mucrow.dev</h1>;
}

function Link(props: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <a className="text-blue-600 underline" {...props}>{props.children}</a>;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Heading1 />
      <section className="max-w-screen-md text-center">
        <p>Hello! I&apos;m a teacher, programmer, and composer from the United States.</p>
        <p>This website hosts my <Link href="https://www.google.com">web and game development C.V.</Link>.</p>
        <p>You can also learn more about my work as a musician on my <Link href="https://www.google.com">music page</Link>.</p>
        <p>If you&apos;d like more information about taking lessons with me, commissioning music from me, or hiring me for software contracting, please take a look at my <Link href="https://www.google.com">services</Link> page.</p>
      </section>
    </main>
  )
}
