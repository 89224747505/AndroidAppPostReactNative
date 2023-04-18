import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import {View} from 'react-native';

const PostImage = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const PostText = styled.Text`
  font-size: 18px;
  line-height:24px;
`;

export const FullPostScreen = ({ route, navigation }) => {
  const {title, text, imgUrl} = route.params;

  useEffect(()=>{
    navigation.setOptions({title})
  },[]);

    return (
    <View style={{ padding:20}}>
        <PostImage source={{uri: imgUrl}}/>   
        <PostText>
          {text}
        </PostText>
    </View>
    );
};

