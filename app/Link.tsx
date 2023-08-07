import {AnchorHTMLAttributes} from 'react';

import UnstyledLink from '@/app/UnstyledLink';

export default function Link(props: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <UnstyledLink className="text-blue-800 font-bold hover:text-teal-800" {...props}>{props.children}</UnstyledLink>;
}
