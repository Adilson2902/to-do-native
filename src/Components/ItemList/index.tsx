import React, {useCallback} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface PropsItemList {
  id: number;
  title: string;
  check: boolean;
  removeList: (id: number) => void;
  editList: (id: number) => void;
}

const ItemList: React.FC<PropsItemList> = ({
  id,
  title,
  check,
  removeList,
  editList,
}) => {
  const renderCheck = useCallback(() => {
    if (check) {
      return (
        <>
          <TouchableOpacity onPress={() => editList(id)}>
            <Image source={require('../../assets/checkok.png')} />
          </TouchableOpacity>
          <Text
            style={{...styles.textList, textDecorationLine: 'line-through'}}>
            {title}
          </Text>
        </>
      );
    }

    return (
      <>
        <TouchableOpacity onPress={() => editList(id)}>
          <Image source={require('../../assets/check.png')} />
        </TouchableOpacity>
        <Text style={styles.textList}>{title}</Text>
      </>
    );
  }, [check, editList, id, title]);

  return (
    <View style={styles.body}>
      {renderCheck()}

      <TouchableOpacity
        onPress={() => {
          removeList(id);
        }}>
        <Image source={require('../../assets/trash.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemList;
