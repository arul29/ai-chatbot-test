import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {wp} from '../lib/responsive-screen';

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('./../assets/chatgpt.png')}
          style={styles.avatar}
        />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
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
    flexDirection: 'row',
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    fontSize: wp(3.5),
    color: '#666666',
  },
  avatarContainer: {
    marginRight: wp(2.5),
    alignSelf: 'center',
    padding: wp(1),
  },
  avatar: {
    width: wp(10),
    height: wp(10),
    // borderRadius: wp(5),
    // tintColor: COLOR.PRIMARY,
  },
});

export default Header;
