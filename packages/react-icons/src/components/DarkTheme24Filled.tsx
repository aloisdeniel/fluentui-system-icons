import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DarkTheme24Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm0-2V4a8 8 0 110 16z" fill={primaryFill} /></svg>;
};

export default DarkTheme24Filled;