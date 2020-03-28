import { NextPage } from 'next';
import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { Post, State } from '../../src/redux/types';
import Link from 'next/link';
import { loadPost } from '../../src/redux/UserData/actions';
import { Text, CommentText, Wrapper, Nav, A } from '../../src/pages/styles';

interface PostPageProps {
  posts: { userData: State };
  postData: Post;
  loadPost: (id: number) => { payload: string };
}

const PostPage: NextPage<PostPageProps> = ({ posts, postData, loadPost }) => {
  const router = useRouter();
  const postId: number = +router.query.postid;
  let post: Post = { title: '', body: '', id: null, comments: null };

  if (posts.userData.placeholderData !== null) {
    post = posts.userData.placeholderData.filter(
      (post: Post) => post.id === +postId
    )[0];
  } else {
    loadPost(postId);
    post = postData;
  }
  return (
    <>
      {post === null ? (
        <Text>loading...</Text>
      ) : (
        <>
          <Wrapper>
            <Text>Title: {post.title}</Text>
            <Text>Body: {post.body}</Text>
            {post.comments &&
              post.comments.map(
                (comment: { body?: string; postId: number; id: number }) => {
                  return (
                    <div key={comment.id}>
                      <hr />
                      <CommentText>{comment.body}</CommentText>
                    </div>
                  );
                }
              )}
          </Wrapper>
          <Link href="/">
            <Nav>
              <A>back to the list</A>
            </Nav>
          </Link>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: { userData: State }) => {
  return {
    posts: state,
    postData: state.userData.postData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPost: id => dispatch(loadPost(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
