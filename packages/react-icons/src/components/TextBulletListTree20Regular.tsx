import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextBulletListTree20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M6 5.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M6 9.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M10.5 13a.5.5 0 000 1h7a.5.5 0 000-1h-7z" fill={primaryFill} /><path d="M8 13.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M3 10.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
};

export default TextBulletListTree20Regular;