import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import HeaderNav from "./components/HeaderNav/HeaderNav";

import './styles/App.sass';

function App() {
  return (
    <BrowserRouter>
        <div className="container">
            <HeaderNav />
            <AppRouter />
        </div>
    </BrowserRouter>
  );
}

export default App;
