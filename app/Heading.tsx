import UnstyledLink from '@/app/UnstyledLink';
import { HTMLAttributes } from 'react';

export function Heading1(props: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 className="text-6xl pb-8" {...props}><UnstyledLink href="/">mucrow.dev</UnstyledLink></h1>;
}

export function Heading2(props: React.PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return <h2 className="text-4xl mb-4 bg-blue-100 [&:not(:first-child)]:mt-12" {...props}>{props.children}</h2>;
}

export function Heading3(props: React.PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return <h3 className="text-2xl font-bold mt-4" {...props}>{props.children}</h3>;
}

export function Heading4(props: React.PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>) {
  return <h4 className="text-1xl" {...props}>{props.children}</h4>;
}
