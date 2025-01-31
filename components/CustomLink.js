import Link from 'next/link';

export default function CustomLink({ as, href, ...otherProps }) {
  return <>
    <Link legacyBehavior  as={as} href={href} {...otherProps}>

    </Link>
  </>;
}
