import { NextPage } from 'next';
import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
import Router from 'next/router';
import Link from 'next/link';
import { addPost } from '../../src/redux/UserData/actions';
import {
  StyledForm,
  StyledLabel,
  Button,
  Input,
  Nav,
  A,
} from '../../src/pages/styles';

interface NewPageProps {
  addPost: ({ title, body: string }) => { payload: { id: number } };
}

const NewPage: NextPage<NewPageProps> = ({ addPost }) => {
  const { error, placeholderData } = useSelector((state: any) => ({
    error: state.userData.error,
    placeholderData: state.userData.placeholderData,
  }));
  useEffect(() => {
    placeholderData === null && Router.push('/');
  }, []);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setTitle('');
    setBody('');
    addPost({ title, body });
  };
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Title:
          <Input
            type="text"
            value={title}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setTitle(e.target.value)}
          />
        </StyledLabel>
        <StyledLabel>
          Body:
          <Input
            type="text"
            value={body}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => setBody(e.target.value)}
          />
        </StyledLabel>
        {title.length !== 0 && body.length !== 0 && (
          <Button type="submit" value="Submit" />
        )}
      </StyledForm>
      <Link href="/">
        <Nav>
          <A>back to the list</A>
        </Nav>
      </Link>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: formData => dispatch(addPost(formData)),
  };
};

export default connect(null, mapDispatchToProps)(NewPage);
