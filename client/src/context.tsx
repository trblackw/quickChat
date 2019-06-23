import { baseUrl } from './FetchWrapper';
import React, { createContext, ReactNode } from 'react';
const SocketClient = require('socket.io-client')(baseUrl);

interface ContextProps {
   state: any;
   dispatch: ({ type }: { type: string }) => void;
   io: any;
   on: (event: string, callback: any) => any;
   emit: (event: string, callback: any) => any;
}

export const SocketContext = createContext({ io: SocketClient } as ContextProps);
export const SocketProvider: React.FC<{ children: ReactNode }> = ({ children }): JSX.Element => {
   const { Provider } = SocketContext;
   return <Provider value={SocketClient}>{children}</Provider>;
};
