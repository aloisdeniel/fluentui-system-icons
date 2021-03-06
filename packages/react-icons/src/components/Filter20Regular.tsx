import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Filter20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 13h5a.5.5 0 01.09 1H7.5a.5.5 0 01-.09-1h5.09-5zm-2-4h9a.5.5 0 01.09 1H5.5a.5.5 0 01-.09-1h9.09-9zm-2-4h13a.5.5 0 01.09 1H3.5a.5.5 0 01-.09-1H16.5h-13z" fill={primaryFill} /></svg>;
};

export default Filter20Regular;