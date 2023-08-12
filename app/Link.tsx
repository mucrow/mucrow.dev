import {AnchorHTMLAttributes} from 'react';

import UnstyledLink from '@/app/UnstyledLink';

export default function Link(props: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <UnstyledLink {...props}>{props.children}</UnstyledLink>;
}
