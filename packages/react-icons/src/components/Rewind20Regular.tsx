import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const Rewind20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4.5a.5.5 0 00-.8-.4l-7 5.5a.5.5 0 000 .8l7 5.5a.5.5 0 00.8-.4v-4.47l6.2 4.86a.5.5 0 00.8-.39v-11a.5.5 0 00-.8-.4L10 8.98V4.5zM9 5.53v8.94L3.3 10 9 5.53zm7 8.94L10.3 10 16 5.53v8.94z" fill={primaryFill} /></svg>;
};

export default Rewind20Regular;