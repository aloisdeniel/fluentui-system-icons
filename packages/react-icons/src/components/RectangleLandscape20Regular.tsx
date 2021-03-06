import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const RectangleLandscape20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7a3 3 0 013-3h10a3 3 0 013 3v6a3 3 0 01-3 3H5a3 3 0 01-3-3V7zm3-2a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5z" fill={primaryFill} /></svg>;
};

export default RectangleLandscape20Regular;