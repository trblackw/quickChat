import { createContext } from 'react';

export const generateTimeStamp = (): string => {
   let date: Date = new Date();
   let hours: number = date.getHours();
   let minutes: number = date.getMinutes();
   let seconds: number = date.getSeconds();
   return `${hours}:${minutes}:${seconds}`;
};

export const generateSocketContext = (baseUrl: string, nameSpace: string = '/'): { client: any; context: any } => {
   interface ContextProps {
      state: any;
      dispatch: ({ type }: { type: string }) => void;
      io: any;
      on: (event: string, callback: any) => any;
      emit: (event: string, callback: any) => any;
   }
   const client = require('socket.io-client')(baseUrl.concat(nameSpace));
   const context = createContext({ io: client } as ContextProps);
   return { client, context };
};
