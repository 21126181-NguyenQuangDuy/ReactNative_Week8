import React, {useState} from 'react';
import {SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,Image,TouchableOpacity }
from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.paragraph}>
          MANAGE YOUR 
        </Text>
        <Text style={styles.paragraph}>
          TASK
        </Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center', top:300}}>
        <TextInput style={styles.textInput} placeholder='Enter your name'/>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center', top:400}}>
        <TouchableOpacity
          style={styles.getStartButton}>
          <Text style={styles.doneButtonText}>GET STARTED -></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const HomeScreen2 = () => {
  var updateTital = function(id){
    fetch(`https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh/${id}`,{
      method:'PUT',
      body: JSON.stringify({
        title:'update',
      }),
      headers:{
        'Content-type': 'application/json; charset = UTF-8',
      },
    })
  }
  const [dt,setDt] = useState([]);
  var fn = fetch('https://645315b2e9ac46cedf1d03f3.mockapi.io/hocSinh')
  fn.then(res=>res.json()).then(data=>setDt(data));
  const Item = ({tital}: ItemProps) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image 
          source={require('./2.png')}
          style={{height:20,width:20}}
        />
      </TouchableOpacity>
      <Text style={styles.tital}>{tital}</Text>
      <TouchableOpacity onPress = {() => updateTital(tital.id)}>
        <Image 
          source={require('./1.png')}
          style={{height:20,width:20}}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection:'row', justifyContent:'space-between', margin:20}}>
        <View>
          <TouchableOpacity style={{top:5}}>
          <Image 
            source={require('./Frame.png')}
            style={{height:20,width:20}}
          />
        </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
          <Image 
            source={require('./avt.jpg')}
            style={{height:40,width:40}}
          />
          <View>
            <Text style={{fontSize:18, fontWeight:'bold'}}>
              Hi...
            </Text>
            <Text style={{fontSize:12}}>
              Have agrate day a head
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection:'row', justifyContent:'center'}}>
        <TextInput style={styles.textInput} placeholder='Search'/>
      </View>
      <FlatList
        data={dt}
         renderItem={({ item }) => <Item tital={item.tital}/>}
        keyExtractor={item => item.id}
      />
      <View style={{flexDirection:'row', justifyContent:'center',top:20}}>
        <TouchableOpacity
          style={styles.getStartButton2}>
          <Text style={{fontSize:40, color:'white'}}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  header:{
    top:200,
  },
  paragraph: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#8353E2'
  },
  textInput:{
    width:280,
    height:43,
    borderWidth:1,
    borderRadius:10,
    paddingHorizontal:10
  },
  getStartButton:{
    justifyContent:'center',
    alignItems:'center',
    width:190,
    height:44,
    backgroundColor:'#00BDD6',
    borderRadius:10
  },
  getStartButton2:{
    justifyContent:'center',
    alignItems:'center',
    width:50,
    height:50,
    backgroundColor:'#00BDD6',
    borderRadius:30
  },
  doneButtonText:{
    color:'white'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'white',
    borderWidth:1,
    borderColor:'#c4c4c4',
    borderRadius:8,
    height:48
  },
  tital: {
    fontSize: 14,
  },
});

export default HomeScreen2;
