import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MoreHorizontal16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M9.25 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M12 9.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /></svg>;
};

export default MoreHorizontal16Filled;