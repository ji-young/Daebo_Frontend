import React from 'react';
// import { BrowserRouter as Route,Router } from 'react-router-dom';
// import Main from 'pages/Main';
import Routes from 'routers/Routes'
import store from 'store/store';
import { Provider } from 'react-redux'

function App() {
        return (
          <Provider store={store}>
                <Routes></Routes>
          </Provider>
        );
}

export default App;