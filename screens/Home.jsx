import { 
    View,
    Text,
    Alert,
    FlatList,
    ActivityIndicator,
    RefreshControl,
    TouchableOpacity } from 'react-native';
  import { Post } from '../components/Post';
  import axios from 'axios';
  import React, { useEffect, useState } from 'react';
  
  export const HomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
  
    const fetchPosts = () => {
      setIsLoading(true);
      axios.get('https://643d7013f0ec48ce905c6219.mockapi.io/api/project/articles').
      then((data)=> {
        setItems(data.data);
        setIsLoading(false);
      }).
      catch(()=>Alert.alert('Ошибка', 'Произошла ошибка при загрузке данных')).
      finally(()=>setIsLoading(false));
    }
    
    useEffect(()=>fetchPosts(),[])
  
    if (isLoading) {
      return(
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ActivityIndicator size="large" color="#0000ff"/>
        <Text style={{
          marginTop: 10
        }}>
          Загрузка...
        </Text>
      </View>
    );
  }
  
    return (
      <View>
        <FlatList
          refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
          data={items}
          renderItem={({item}) => 
            <TouchableOpacity onPress={()=> navigation.navigate('FullPost', item)}>
              <Post onPress={()=>console.log("Hallo")} createdAt={item.createdAt} imageUrl={item.imgUrl}>
                {item.title}
            </Post>
            </TouchableOpacity>
            }
        />
      </View>
    );
  }
  
  