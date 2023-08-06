import {AnchorHTMLAttributes} from 'react';

import UnstyledLink from '@/app/UnstyledLink';

export default function Link(props: React.PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return <UnstyledLink className="text-blue-600 underline" {...props}>{props.children}</UnstyledLink>;
}
