import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const MicOff16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.8 11.52l3.35 3.33a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L5.5 6.21V8a2.5 2.5 0 003.88 2.09l.72.71A3.5 3.5 0 014.5 8a.5.5 0 10-1 0 4.5 4.5 0 004 4.47v1.03a.5.5 0 101 0v-1.03c.87-.1 1.66-.44 2.3-.95z" fill={primaryFill} /><path d="M12.06 9.94l-.76-.76c.13-.37.2-.77.2-1.18a.5.5 0 011 0c0 .7-.16 1.35-.44 1.94z" fill={primaryFill} /><path d="M10.48 8.35l-4.8-4.79a2.5 2.5 0 014.82.94V8c0 .12 0 .24-.02.35z" fill={primaryFill} /></svg>;
};

export default MicOff16Filled;