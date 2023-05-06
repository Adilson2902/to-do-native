import React from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import InputAdd from '../InputAdd';

interface PropsHeader {
  handleAddList: (title: string) => void;
}

const Header: React.FC<PropsHeader> = ({handleAddList}) => {
  return (
    <View style={styles.body}>
      <Image
        alt="logo"
        style={styles.image}
        source={require('../../assets/logo.png')}
      />
      <InputAdd handleAddList={handleAddList} />
    </View>
  );
};

export default Header;
