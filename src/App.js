import React from 'react';
import 'bulma/css/bulma.css';
import Navbar from './navbar/Navbar.js'
import Form from'./form/form.js'
import CoolButton from './CoolButton/CoolButton.js'


const App = () => {
  return(
    <div>
      <Navbar />
      <Form />
      <CoolButton isSmall isDanger className="is-rounded my-class" />
      <CoolButton isSmall isSuccess className=""/>
    </div>
    
  )
};

export default App;
