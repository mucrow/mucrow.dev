import {AnchorHTMLAttributes} from 'react';

export default function UnstyledLink(props: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <a {...props}>{props.children}</a>;
}
