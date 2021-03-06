import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ShareScreenStop20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zm2.65 3.15c.2-.2.5-.2.7 0L10 9.29l2.15-2.14a.5.5 0 01.7.7L10.71 10l2.14 2.15a.5.5 0 01-.7.7L10 10.71l-2.15 2.14a.5.5 0 01-.7-.7L9.29 10 7.15 7.85a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
};

export default ShareScreenStop20Filled;