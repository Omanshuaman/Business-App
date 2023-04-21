import React, {useState, useContext} from 'react';

import {AuthContext, AuthProvider} from './context/AuthContext';
import AppNav from './navigation/AppNav';

const App = () => {
  // const {userToken} = useContext(AuthContext);
  const [test, setTest] = useState('Test Value');

  return (
    <AuthProvider value={{test}}>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
