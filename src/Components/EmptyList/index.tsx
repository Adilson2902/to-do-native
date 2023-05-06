import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

const EmptyList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          source={require('../../assets/clipboard.png')}
          alt="clipboard"
          style={styles.image}
        />
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.textNormal}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
};

export default EmptyList;
