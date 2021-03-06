import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const WeatherMoon16Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.46 2a6 6 0 11-5.41 8.6.5.5 0 01.36-.7C3.7 9.66 5.7 8.96 6.5 6.82c.56-1.5.51-3.01.28-4.22a.5.5 0 01.48-.6h.2z" fill={primaryFill} /></svg>;
};

export default WeatherMoon16Filled;