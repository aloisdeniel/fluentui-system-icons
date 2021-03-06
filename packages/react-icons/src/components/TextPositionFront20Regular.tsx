import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextPositionFront20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /><path d="M6.5 11h1v2.5a.5.5 0 01-1 0V11z" fill={primaryFill} /><path d="M13.5 11h-1v2.5a.5.5 0 001 0V11z" fill={primaryFill} /><path d="M16.5 9a.5.5 0 010 1h-13a.5.5 0 010-1h13z" fill={primaryFill} /><path d="M10 5a3.5 3.5 0 013.46 3h-1.01a2.5 2.5 0 00-4.9 0H6.54c.24-1.7 1.7-3 3.46-3z" fill={primaryFill} /><path d="M3.5 15a.5.5 0 000 1h13a.5.5 0 000-1h-13z" fill={primaryFill} /></svg>;
};

export default TextPositionFront20Regular;