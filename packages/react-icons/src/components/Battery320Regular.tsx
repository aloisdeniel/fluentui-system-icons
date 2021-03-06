import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Battery320Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 5.05a2.5 2.5 0 012.5 2.5v.84h1.17a.83.83 0 01.83.83v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-9a2.5 2.5 0 01-2.5-2.5v-5a2.5 2.5 0 012.5-2.5h9zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.24h9.63c.65 0 1.18-.49 1.24-1.12l.01-.12v-5.5c0-.65-.5-1.18-1.12-1.24L13.75 6zM4.83 7h1.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83l-.1.01H4.82a.84.84 0 01-.82-.73l-.01-.1V7.83c0-.43.32-.78.73-.83H6.16 4.83z" fill={primaryFill} /></svg>;
};

export default Battery320Regular;