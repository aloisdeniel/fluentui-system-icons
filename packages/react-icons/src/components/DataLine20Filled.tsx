import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const DataLine20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 16.25c0 .41-.34.75-.75.75H4.75C3.78 17 3 16.22 3 15.25V3.75a.75.75 0 011.5 0v11.5c0 .14.11.25.25.25h11.5c.41 0 .75.34.75.75z" fill={primaryFill} /><path d="M12 5.75c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0V7.56l-3.97 3.97a.75.75 0 01-1.06 0L9 10.06l-2.22 2.22a.75.75 0 01-1.06-1.06l2.75-2.75a.75.75 0 011.06 0L11 9.94l3.44-3.44h-1.69a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
};

export default DataLine20Filled;