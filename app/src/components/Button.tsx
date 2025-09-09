import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
  leftIcon,
  rightIcon,
  fullWidth = false,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'secondary':
        return {
          backgroundColor: '#6c757d',
          borderColor: '#6c757d',
          textColor: '#fff',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          textColor: '#007bff',
        };
      case 'ghost':
        return {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          textColor: '#007bff',
        };
      default: // primary
        return {
          backgroundColor: '#007bff',
          borderColor: '#007bff',
          textColor: '#fff',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 6,
          fontSize: 14,
          minHeight: 32,
        };
      case 'large':
        return {
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 12,
          fontSize: 18,
          minHeight: 56,
        };
      default: // medium
        return {
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderRadius: 8,
          fontSize: 16,
          minHeight: 44,
        };
    }
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  const isDisabled = disabled || loading;

  const buttonStyles = [
    styles.button,
    sizeStyles,
    {
      backgroundColor: isDisabled ? '#e9ecef' : variantStyles.backgroundColor,
      borderColor: isDisabled ? '#e9ecef' : variantStyles.borderColor,
      borderWidth: variant === 'outline' ? 1 : 0,
      width: fullWidth ? '100%' : undefined,
    },
    style,
  ];

  const textStyles = [
    styles.text,
    {
      color: isDisabled ? '#6c757d' : variantStyles.textColor,
      fontSize: sizeStyles.fontSize,
    },
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {loading ? (
          <ActivityIndicator
            size="small"
            color={isDisabled ? '#6c757d' : variantStyles.textColor}
          />
        ) : (
          <>
            {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
            <Text style={textStyles}>{title}</Text>
            {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});
