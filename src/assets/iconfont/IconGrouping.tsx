/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconGrouping: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M992 512c0-12-6-24-18-30l-108-60 108-60c12 0 18-12 18-30 0-12-6-24-18-30L530 68c-12-6-24-6-30 0L50 302c-12 6-18 18-18 30s6 24 18 30l108 60-108 60c-12 6-18 18-18 30s6 24 18 30l108 60-108 60c-12 0-18 12-18 30 0 12 6 24 18 30l444 234c6 0 12 6 18 6 6 0 12 0 18-6l444-234c12-6 18-18 18-30s-6-24-18-30l-108-60 108-60c12-6 18-18 18-30zM140 332L512 140 884 332 512 530 140 332z m744 360L512 884 140 692l90-48 264 138c6 0 12 6 18 6 6 0 12 0 18-6l264-138 90 48z m-372 18L140 512l90-48 264 138c6 0 12 6 18 6 6 0 12 0 18-6l264-138 90 48L512 710z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGrouping.defaultProps = {
  size: 18,
};

IconGrouping = React.memo ? React.memo(IconGrouping) : IconGrouping;

export default IconGrouping;
