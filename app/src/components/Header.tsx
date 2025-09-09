import React from 'react';
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
  backgroundColor = '#fff',
  textColor = '#000',
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
      <SafeAreaView style={[styles.container, { backgroundColor }]}>
        <View style={styles.content}>
          <View style={styles.leftSection}>
            {showBackButton && (
              <TouchableOpacity onPress={onBackPress} style={styles.iconButton}>
                <Text style={[styles.backIcon, { color: textColor }]}>←</Text>
              </TouchableOpacity>
            )}
            {leftIcon && (
              <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
                {leftIcon}
              </TouchableOpacity>
            )}
          </View>

          {title && (
            <View style={styles.titleSection}>
              <Text style={[styles.title, { color: textColor }]} numberOfLines={1}>
                {title}
              </Text>
            </View>
          )}

          <View style={styles.rightSection}>
            {rightIcon && (
              <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
                {rightIcon}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 56,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleSection: {
    flex: 2,
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  iconButton: {
    padding: 8,
    marginHorizontal: 4,
  },
  backIcon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
