import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp} from '../lib/responsive-screen';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: wp(4),
    // borderBottomColor: '#E5E5E5',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1,
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: wp(1),
  },
  subtitle: {
    fontSize: wp(3.5),
    color: '#666666',
  },
});

export default Header;
