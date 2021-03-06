import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const ChevronLeft48Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M32.06 8.19a1.5 1.5 0 010 2.12L18.62 23.75l13.44 13.44a1.5 1.5 0 01-2.12 2.12l-14.5-14.5a1.5 1.5 0 010-2.12l14.5-14.5a1.5 1.5 0 012.12 0z" fill={primaryFill} /></svg>;
};

export default ChevronLeft48Filled;