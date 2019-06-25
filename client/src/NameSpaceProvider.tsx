import React, { createContext, ReactNode, FC } from 'react';
import { baseUrl } from './FetchWrapper';

interface ContextProps {
   state: any;
   dispatch: ({ type }: { type: string }) => void;
   io: any;
   on: (event: string, callback: any) => any;
   emit: (event: string, callback: any) => any;
}

interface Props {
   room: string;
   children: ReactNode;
}
export let SocketContext: any;
const NameSpaceProvider: FC<Props> = ({ room = '/', children }): JSX.Element => {
   const SocketClient = require('socket.io-client')(baseUrl.concat(room));
   SocketContext = createContext({ io: SocketClient } as ContextProps);
   const { Provider } = SocketContext;
   return <Provider value={SocketClient}>{children}</Provider>;
};

export default NameSpaceProvider;
