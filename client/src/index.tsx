import React, { useContext, Fragment } from 'react';
import { render } from 'react-dom';
import { APIService } from './FetchWrapper';
import { SocketProvider, SocketContext } from './context';
import ChatBox from './components/ChatBox';
import { Router } from '@reach/router';
import SideNav from './components/NavBar';

const App: React.FC = (): JSX.Element => {
   const socket = useContext(SocketContext);
   const getStuff = async () => {
      const test = await new APIService().init('api/test');
      let json = await test.json();
   };
   return (
      <Fragment>
            <SideNav />
         <Router>
            <ChatBox socket={socket} path='/' />
         </Router>
      </Fragment>
   );
};

export default App;

render(
   <SocketProvider>
      <App />
   </SocketProvider>,
   document.getElementById('root')
);
