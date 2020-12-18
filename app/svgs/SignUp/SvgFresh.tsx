import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent() {
  return (
    <Svg width={56} height={57} viewBox="0 0 56 57" fill="none">
        </Svg>
  );
}

const SvgFresh = React.memo(SvgComponent);
export default SvgFresh;
