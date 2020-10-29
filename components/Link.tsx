/* eslint-disable jsx-a11y/anchor-has-content */
import React, {
  HTMLProps,
  forwardRef,
  MutableRefObject,
  ReactNode,
} from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink, { LinkProps } from "next/link";
import MuiLink, { LinkProps as MuiLinkProps } from "@material-ui/core/Link";

const NextComposed = forwardRef(function NextComposed(
  props: LinkProps & { children: ReactNode },
  ref: MutableRefObject<any>
) {
  const { as, children, href, ...other } = props;

  return (
    <NextLink href={href} as={as}>
      <a ref={ref} {...other}>
        {children}
      </a>
    </NextLink>
  );
});

function Link(
  props: MuiLinkProps & {
    activeClassName: string;
    children: ReactNode;
  }
) {
  const {
    href,
    activeClassName = "active",
    className: classNameProps,
    innerRef,
    children,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  return (
    <MuiLink
      component={NextComposed}
      className={className}
      ref={innerRef}
      href={href}
      {...other}
    >
      {children}
    </MuiLink>
  );
}

export default forwardRef((props, ref) => <Link {...props} innerRef={ref} />);
