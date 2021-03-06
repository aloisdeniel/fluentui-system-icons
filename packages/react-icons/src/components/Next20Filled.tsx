import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Next20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3.75a.75.75 0 00-1.5 0v12.5a.75.75 0 001.5 0V3.75z" fill={primaryFill} /><path d="M3 4.4c0-1 1.11-1.6 1.94-1.04l8.4 5.6c.74.5.74 1.59 0 2.08l-8.4 5.6A1.25 1.25 0 013 15.6V4.4z" fill={primaryFill} /></svg>;
};

export default Next20Filled;