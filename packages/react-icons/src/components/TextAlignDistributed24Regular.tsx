import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextAlignDistributed24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.75c0-.41.34-.75.75-.75h18.5a.75.75 0 010 1.5H2.75A.75.75 0 012 5.75z" fill={primaryFill} /><path d="M5.28 20.22l-.72-.72h14.88l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H4.56l.72-.72a.75.75 0 10-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 001.06-1.06z" fill={primaryFill} /><path d="M2.75 11.5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /></svg>;
};

export default TextAlignDistributed24Regular;