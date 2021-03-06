import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Text20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3.75c0-.41.34-.75.75-.75h10c.41 0 .75.34.75.75v1.5a.75.75 0 01-1.5 0V4.5h-3.5v11h1.25a.75.75 0 010 1.5h-4a.75.75 0 010-1.5H9v-11H5.5v.75a.75.75 0 01-1.5 0v-1.5z" fill={primaryFill} /></svg>;
};

export default Text20Filled;