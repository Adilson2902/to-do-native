import React, {useState} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

interface PropsInputAdd {
  handleAddList: (title: string) => void;
}

const InputAdd: React.FC<PropsInputAdd> = ({handleAddList}) => {
  const [task, setTask] = useState('');

  console.log(task);

  return (
    <View style={styles.body}>
      <TextInput
        placeholder="Descrição da tarefa"
        placeholderTextColor="#808080"
        onChange={e => {
          setTask(e.nativeEvent.text);
        }}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleAddList(task);
        }}>
        <Image
          alt="+"
          source={require('../../assets/plus.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputAdd;
