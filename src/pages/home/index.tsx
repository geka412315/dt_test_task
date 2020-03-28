import * as React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { Post } from '../../redux/types';
import { loadPosts } from '../../redux/UserData/actions';
import { Text, CommentText, Wrapper, Nav, A } from './styles';

interface Props {
  error?: any;
  placeholderData?: null | Array<Post>;
}

const Home: React.FC<Props> = () => {
  const { error, placeholderData } = useSelector((state: any) => ({
    error: state.userData.error,
    placeholderData: state.userData.placeholderData,
  }));

  return (
    <div>
      <Link href="/post/new">
        <Nav>
          <A>Add New Post</A>
        </Nav>
      </Link>
      {placeholderData === null || placeholderData === undefined ? (
        <p>loading...</p>
      ) : (
        placeholderData.map((data: Post) => {
          return (
            <Wrapper key={data.id}>
              <Text>{data.title}</Text>
              <hr />
              <Text>{data.body}</Text>
              <hr />
              <CommentText>{data.comments && `no `}comments</CommentText>
              {data.comments &&
                data.comments.map(comment => {
                  return (
                    <div key={comment.id}>
                      <hr />
                      <CommentText
                        style={{
                          marginLeft: `40px`,
                        }}
                      >
                        {comment.body}
                      </CommentText>
                    </div>
                  );
                })}
              <Link href="/post/[postid]" as={`/post/${data.id}`}>
                <Nav>
                  <A>check post</A>
                </Nav>
              </Link>
            </Wrapper>
          );
        })
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: dispatch(loadPosts()),
  };
};

export default connect(null, mapDispatchToProps)(Home);
