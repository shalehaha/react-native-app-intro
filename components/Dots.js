import React from 'react'
import {
  Text,
  View
} from 'react-native';

export const Dot = ({
  styles, dotColor, activeDotColor, active
}) => {
  if (active) {
    return (
      <View
        style={[styles.dotStyle, styles.activeDotStyle, { 
          backgroundColor: '#947433'
        }]}
      />
    );
  } else {
    return (
      <View 
        style={[styles.dotStyle, { 
          backgroundColor: '#CCCCCC'
        }]} />
    );
  }
}

export const RenderDots = (index, total, props) => {
  let dots = [];
  for (let i = 0; i < total; i++) {
    dots.push(React.createElement(Dot, { 
      ...props,
      key: i,
      active: i <= index
    }));
  }
  return dots;
}

export default RenderDots;