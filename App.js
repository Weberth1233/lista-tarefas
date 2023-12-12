import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import Tarefa from './src/Tarefa';

export default function App() {

  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([
    {
      key: '1',
      item: 'doce'
    },
    {
      key: '2',
      item: 'pão'
    },
  ]);


  function handleTarefas(){
    alert(tarefa);
  }

  return (
    <View style={styles.container}>
      <View style={styles.area}>
        <Text style= {styles.text}>Minhas tarefas</Text>
        <View style={styles.areaInput}>
          <TextInput style={styles.inputText} placeholder='Digite uma tarefa...' value={tarefa} onChangeText={(text) => setTarefa(text)}/>
          <TouchableOpacity style={styles.button} onPress={handleTarefas}>
            <FontAwesome name='plus' size={20} color={'#000'}></FontAwesome>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList style={styles.list}
        data={tarefas}
        keyExtractor={(item) => item.key}
        renderItem={ ({ item }) => <Tarefa data={item}/> } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  area:{
    marginTop:'12%',
    marginBottom:'12%',
    marginHorizontal:'5%',
  },
  text:{
    color:'#fff',
    fontSize:32,
    marginBottom:12,
  },
  inputText:{
    width:'75%',
    backgroundColor: '#FBFBFB',
    height:44,
    borderRadius:8,
    paddingHorizontal: 5
  },
  button:{
    width:'15%',
    backgroundColor:'#FFF',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8,
    marginLeft:5
  },
  areaInput:{
    flexDirection:'row',
  }, 
  list:{
    flex:1,
    backgroundColor:'#FFF',
    paddingHorizontal:'5%',
    paddingVertical:'2%'
  }
  
});
