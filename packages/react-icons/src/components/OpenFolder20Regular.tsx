import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const OpenFolder20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v8a3 3 0 003 3h4.5a.5.5 0 000-1H6a2 2 0 01-2-2V6c0-1.1.9-2 2-2h8a2 2 0 012 2v2.5a.5.5 0 001 0V6a3 3 0 00-3-3H6z" fill={primaryFill} /><path d="M8.15 8.15A.5.5 0 018.5 8h4.99a.5.5 0 010 1H9.7l6.15 6.15a.5.5 0 01-.7.7L9 9.71v3.79a.5.5 0 11-1 0v-5a.5.5 0 01.15-.35z" fill={primaryFill} /></svg>;
};

export default OpenFolder20Regular;