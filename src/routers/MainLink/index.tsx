import { Link } from 'react-router'
import * as React from "react";

type MainLinkProps = {children: React.ReactNode, href: string} & React.ComponentProps<'a'>;

export function MainLink({href, children, ...props}: MainLinkProps) {
    return (
        <>
            <Link to={href} {...props}>
                {children}
            </Link>
        </>
    )
}