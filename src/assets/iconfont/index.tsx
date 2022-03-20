/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconShouye from './IconShouye';
import IconGouwuche from './IconGouwuche';
import IconWode from './IconWode';
import IconGrouping from './IconGrouping';
export { default as IconShouye } from './IconShouye';
export { default as IconGouwuche } from './IconGouwuche';
export { default as IconWode } from './IconWode';
export { default as IconGrouping } from './IconGrouping';

export type IconNames = 'icon-shouye' | 'icon-gouwuche' | 'icon-wode' | 'icon-grouping';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-shouye':
      return <IconShouye key="1" {...rest} />;
    case 'icon-gouwuche':
      return <IconGouwuche key="2" {...rest} />;
    case 'icon-wode':
      return <IconWode key="3" {...rest} />;
    case 'icon-grouping':
      return <IconGrouping key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
