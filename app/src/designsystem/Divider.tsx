import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  thickness?: number;
  color?: string;
  margin?: number;
  style?: ViewStyle;
  dashed?: boolean;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  thickness = 1,
  color = '#e0e0e0',
  margin = 0,
  style,
  dashed = false,
}) => {
  const getDividerStyles = () => {
    const baseStyles = {
      backgroundColor: color,
    };

    if (orientation === 'horizontal') {
      return {
        ...baseStyles,
        height: thickness,
        width: '100%',
        marginVertical: margin,
      };
    } else {
      return {
        ...baseStyles,
        width: thickness,
        height: '100%',
        marginHorizontal: margin,
      };
    }
  };

  const dividerStyles = getDividerStyles();

  if (dashed) {
    // For dashed dividers, we'll use a simple solid line
    // In a real implementation, you might want to use a more complex approach
    return (
      <View
        style={[
          styles.divider,
          dividerStyles,
          { borderStyle: 'dashed' },
          style,
        ]}
      />
    );
  }

  return (
    <View
      style={[
        styles.divider,
        dividerStyles,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'stretch',
  },
});
