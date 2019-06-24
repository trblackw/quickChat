import React, { useContext, Fragment } from 'react';
import { render } from 'react-dom';
import { APIService } from './FetchWrapper';
import { SocketProvider, MainSocket, AdminSocket } from './context';
import ChatBox from './components/ChatBox';
import { Router } from '@reach/router';
import SideNav from './components/NavBar';

const App: React.FC = (): JSX.Element => {
   const mainSocket = useContext(MainSocket.context);
   const adminSocket = useContext(AdminSocket.context)
   const getStuff = async () => {
      const test = await new APIService().init('api/test');
      let json = await test.json();
   };
   return (
      <Fragment>
         <SideNav />
         <Router>
            <ChatBox socket={mainSocket} path='/' />
         </Router>
      </Fragment>
   );
};

export default App;

render(
   <SocketProvider client={MainSocket.client} context={MainSocket.context}>
      <App />
   </SocketProvider>,
   document.getElementById('root')
);
