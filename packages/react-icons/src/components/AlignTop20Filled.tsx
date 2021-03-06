import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const AlignTop20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM11 7c0-1.1.9-2 2-2h1a2 2 0 012 2v5a2 2 0 01-2 2h-1a2 2 0 01-2-2V7zM6 5a2 2 0 00-2 2v8c0 1.1.9 2 2 2h1a2 2 0 002-2V7a2 2 0 00-2-2H6z" fill={primaryFill} /></svg>;
};

export default AlignTop20Filled;