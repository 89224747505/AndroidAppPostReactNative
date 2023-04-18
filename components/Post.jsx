import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 30px;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 2px;
`;

const PostDetails = styled.View`
    flex: 1;
    justify-content: center;
`;

export const Post = ({createdAt, imageUrl, children}) => {
    return <PostView>
    <PostImage source={{uri: imageUrl}}/>
    <PostDetails>
      <PostTitle>{children}</PostTitle>
      <PostDate>{createdAt}</PostDate>
    </PostDetails>
  </PostView>
}