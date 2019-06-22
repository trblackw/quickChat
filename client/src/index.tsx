import React from 'react'
import { render } from 'react-dom';
const App = () => {
   return (
      <div>
         Hello world
      </div>
   )
}

export default App;

render(<App />, document.getElementById('root'));