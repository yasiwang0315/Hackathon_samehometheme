import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import Header from "./common/header";
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/home/index";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import Quiz_page from "./pages/quiz/Quiz";
import Search from "./pages/search";

import "./App.css";

// import { GlobalStyleFont } from "./statics/iconfont/iconfont";
// import { GlobalStyle } from "./style";
import store from "./store";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    {/* <GlobalStyle />
                    <GlobalStyleFont /> */}
                    <BrowserRouter>
                        <div className="App">
                            <Header />
                            <Route path='/login' exact component={Login}></Route>
                            <Route path='/write' exact component={Write}></Route>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/main' exact component={Home}></Route>
                            <Route path='/search' exact component={Search}></Route>
                            <Route path='/detail/:id' exact component={Detail}></Route>
                            <Route path='/quiz' exact component={Quiz_page}></Route>
                        </div>
                    </BrowserRouter>
                </Provider>
            </React.Fragment>
        );
    }
}

export default App;
