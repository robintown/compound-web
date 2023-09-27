/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { forwardRef, PropsWithChildren } from "react";
import styles from "./Link.module.css";
import classNames from "classnames";

type LinkProps = {
  /**
   * The HTML element to use
   */
  as: "a" | "button";
  /**
   * The CSS class name.
   */
  className?: string;
  /**
   * The type of link.
   */
  kind?: "primary" | "critical";
} & Omit<React.HTMLProps<HTMLAnchorElement>, "rel">;

/**
 * A link component.
 */
export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  function Link({ children, as, className, kind = "primary", ...props }, ref) {
    return React.createElement(
      as,
      {
        ref,
        ...props,
        rel: "noreferrer noopener",
        className: classNames(styles.link, className),
        "data-kind": kind,
      },
      children,
    );
  },
);
