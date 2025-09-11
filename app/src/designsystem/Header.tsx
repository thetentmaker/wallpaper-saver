import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface HeaderProps {
  children?: React.ReactNode;
}

interface HeaderTitleProps {
  children: React.ReactNode;
}

interface HeaderIconProps {
  name: string;
  onPress?: () => void;
}

export const Header: React.FC<HeaderProps> & {
  Title: React.FC<HeaderTitleProps>;
  Icon: React.FC<HeaderIconProps>;
} = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>{children}</View>
    </SafeAreaView>
  );
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const HeaderIcon: React.FC<HeaderIconProps> = ({ name, onPress }) => {
  const getIconSymbol = (iconName: string): string => {
    const icons: { [key: string]: string } = {
      'arrow-left': '←',
      'arrow-right': '→',
      'arrow-up': '↑',
      'arrow-down': '↓',
      'close': '×',
      'menu': '☰',
      'search': '🔍',
      'settings': '⚙',
    };
    return icons[iconName] || '?';
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.iconButton}>
      <Text style={styles.icon}>{getIconSymbol(name)}</Text>
    </TouchableOpacity>
  );
};

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#e0e0e0",
    width: "100%",
  },
  headerContainer: {
    borderBottomColor: "#e0e0e0",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingLeft: 20,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  iconButton: {
    marginRight: 8,
  },
  icon: {
    fontSize: 20,
    color: "#333",
  },
});
