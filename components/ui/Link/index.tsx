import Link from "next/link";
import React, { FunctionComponent, ReactElement } from "react";
import { useRouter } from "next/router";

type LinkProps = {
  href: string;
  children: any;
  activeClass?: string;
  className?: string;
};

const ActiveLink: FunctionComponent<LinkProps> = ({ children, ...props }) => {
  const { pathname } = useRouter();

  const isActive = pathname === props.href ? props.activeClass : "";

  let className = props.className || "";
  let _defaultClass = `${className} ${isActive}`;

  return (
    <Link {...props} className={_defaultClass}>
      {children}
    </Link>
  );
};

export default ActiveLink;
