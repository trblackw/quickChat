import React, { FormEvent, useEffect, FC, useRef, useState, Fragment } from 'react';
import styled from 'styled-components';
import useInputValue from '../hooks/useInputValue';
import { messageEmittedFromServer, newMessageToServer, Message } from '../types';
import { generateTimeStamp } from '../utils';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
   socket: any;
}
const ChatBox: FC<Props> = ({ socket }): JSX.Element => {
   const newMessage = useInputValue('');
   const [messages, setMessages] = useState<Message[]>([]);
   const inputRef = useRef<HTMLInputElement>(null);

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      socket.emit(newMessageToServer, { message: newMessage.value });
   };
   const clearInput = () => inputRef && inputRef.current && (inputRef.current.value = '');

   useEffect(
      () => {
         socket.on(messageEmittedFromServer, (text: string): void => {
            setMessages((prevMessages: Message[]) => [...prevMessages, new Message(text)]);
            clearInput();
         });
      },
      [socket]
   );

   useEffect(
      () => {
         console.log(messages);
      },
      [messages]
   );

   return (
      <Container>
         <MessageListContainer>
            {!!messages.length && (
               <MessageList>
                  {messages.map(({ text, _timeStamp }: Message, i: number): JSX.Element => (
                     <Fragment key={i}>
                        <li>{text}</li>
                        <br />
                        <TimeStamp>{_timeStamp}</TimeStamp>
                        <Hr />
                     </Fragment>
                  ))}
               </MessageList>
            )}
         </MessageListContainer>
         <Form onSubmit={handleSubmit}>
            <Input {...newMessage} ref={inputRef} />
            <Button>Send</Button>
         </Form>
      </Container>
   );
};

export default ChatBox;

const Container = styled.div`
   margin: 5em auto;
   padding: 1.5em;
   min-height: 500px;
   width: 900px;
   background-color: #dcdcdc;
   border-radius: 5px;
   box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
   position: relative;
`;

const TimeStamp = styled.span`
   color: hsl(0, 0%, 41%);
   font-size: smaller;
   display: inline-block;
   margin-bottom: 1em;
`;

const Hr = styled.hr`
   height: 1px;
   border: none;
   color: #b5b5b5;
   background-color: #b5b5b5;
   margin-bottom: .5em;
`;

const Form = styled.form.attrs(({ ref }) => ref)`
   padding: 1em;
   margin: 1.5em;
   position: absolute;
   bottom: 0;
   left: 0;
   background: transparent;
   display: flex;
   align-content: center;
   align-items: center;
   flex-direction: row;
   justify-content: center;
   width: 80%;
`;

const Input = styled.input.attrs(({ ref }) => ({ type: 'text', ref }))`
  padding: 0.5em;
  color: #2d2d2d;
  background: whitesmoke;
  width: 100%;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button.attrs(() => ({ type: 'submit' }))`
   margin-left: .5em;
   padding: 4px 5px;
   border-radius: 4px;
   width: 70px;
   border: none;
   height: 35px;
   box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
   background-color: hsl(0, 0%, 45%);
   color: whitesmoke;
   &:hover {
      cursor: pointer;
   }
`;

const MessageListContainer = styled.div`
   margin: 1em 1.3em 0 1.3em;
   padding: 1em;
   border-radius: 5px;
   text-align: left;
   background: white;
   min-height: 300px;
   max-height: 300px;
   overflow-y: scroll;
`;

const MessageList = styled.ul`list-style: none;`;
