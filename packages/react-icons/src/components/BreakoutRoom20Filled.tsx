import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const BreakoutRoom20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3h-3.35A3.99 3.99 0 0012 14v-2a4 4 0 00-4-4H6c-1.2 0-2.27.52-3 1.35V6z" fill={primaryFill} /><path d="M6 9a3 3 0 00-3 3v2a3 3 0 003 3h2a3 3 0 003-3v-2a3 3 0 00-3-3H6z" fill={primaryFill} /></svg>;
};

export default BreakoutRoom20Filled;