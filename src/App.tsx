import React, {useCallback, useState} from 'react';
import {StatusBar, View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import Header from './Components/Header';
import EmptyList from './Components/EmptyList';
import ItemList from './Components/ItemList';

interface List {
  id: number;
  title: string;
  check: boolean;
}

function App(): JSX.Element {
  const [list, setList] = useState<List[]>([]);

  const listCompleted = list.filter(i => i.check).length;

  const handleAddList = useCallback(
    (title: string) => {
      setList([...list, {id: list.length + 1, title, check: false}]);
    },
    [list],
  );

  const handleEdit = useCallback(
    (id: number) => {
      const newlist = [...list];
      const object = newlist.find(i => i.id === id);

      if (object) {
        object.check = !object.check;

        setList(newlist);
      }
    },
    [list],
  );

  const handleDeletedList = useCallback(
    (id: number) => {
      setList(list.filter(i => i.id !== id));
    },
    [list],
  );

  const renderList = useCallback(() => {
    if (list.length > 0) {
      return (
        <ScrollView>
          {list.map(i => {
            return (
              <ItemList
                id={i.id}
                title={i.title}
                check={i.check}
                editList={handleEdit}
                removeList={() => handleDeletedList(i.id)}
              />
            );
          })}
        </ScrollView>
      );
    }

    return <EmptyList />;
  }, [handleDeletedList, handleEdit, list]);

  return (
    <>
      <StatusBar backgroundColor="#0D0D0D" />
      <View style={styles.body}>
        <Header handleAddList={handleAddList} />
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={styles.rowView}>
              <Text style={styles.textCreate}>Criadas</Text>
              <Text style={styles.textNumber}>{list.length}</Text>
            </View>
            <View style={styles.rowView}>
              <Text style={styles.textConcluded}>Concluidas</Text>
              <Text style={styles.textNumber}>{listCompleted}</Text>
            </View>
          </View>
          {renderList()}
        </View>
      </View>
    </>
  );
}

export default App;
