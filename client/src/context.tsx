import { baseUrl } from './FetchWrapper';
import React, { ReactNode } from 'react';
import { generateSocketContext } from './utils';
import { RouteComponentProps } from '@reach/router';

export const MainSocket = generateSocketContext(baseUrl);
export const AdminSocket = generateSocketContext(baseUrl, 'admin');

interface Props extends RouteComponentProps {
   children: ReactNode;
   client: any;
   context: any;
}

export const SocketProvider: React.FC<Props> = ({ children, client, context: { Provider } }): JSX.Element => (
   <Provider value={client}>{children}</Provider>
);
