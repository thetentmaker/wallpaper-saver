import React from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
  children?: React.ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  style,
}) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    // 기본 스타일 없음 - style prop으로 모든 스타일링 처리
  },
});