import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAddSpaceAfter20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.75z" fill={primaryFill} /><path d="M3 9.75c0-.41.34-.75.75-.75h12.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75z" fill={primaryFill} /><path d="M12.03 15.78c.3-.3.3-.77 0-1.06l-1.5-1.5a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 101.06 1.06l.97-.97.97.97c.3.3.77.3 1.06 0z" fill={primaryFill} /></svg>;
};

export default TextAddSpaceAfter20Filled;