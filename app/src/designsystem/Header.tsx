import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  children?: React.ReactNode;
}

interface HeaderTitleProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> & {
  Title: React.FC<HeaderTitleProps>;
} = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

Header.Title = HeaderTitle;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#e0e0e0',
    width: '100%',
  },
  title: {
    marginHorizontal: 16,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
});