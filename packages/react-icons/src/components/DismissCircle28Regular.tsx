import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DismissCircle28Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.28 9.72c.3.3.3.77 0 1.06L15.06 14l3.22 3.22a.75.75 0 11-1.06 1.06L14 15.06l-3.22 3.22a.75.75 0 11-1.06-1.06L12.94 14l-3.22-3.22a.75.75 0 111.06-1.06L14 12.94l3.22-3.22c.3-.3.77-.3 1.06 0z" fill={primaryFill} /><path d="M26 14a12 12 0 10-24 0 12 12 0 0024 0zM3.5 14a10.5 10.5 0 1121 0 10.5 10.5 0 01-21 0z" fill={primaryFill} /></svg>;
};

export default DismissCircle28Regular;