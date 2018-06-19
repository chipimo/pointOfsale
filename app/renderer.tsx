import React = require('react');
import ReactDom = require('react-dom');
import Accapp from './app';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
import UserReducer from '../app/Reducers/User/User';
import DetialsReducer from './Reducers/CompanyDetials/detials';

// installExtension(REDUX_DEVTOOLS)
//   .then(name => console.log(`Added Extension:  ${name}`))
//   .catch(err => console.log('An error occurred: ', err));

const AllReducers = combineReducers({
  user: UserReducer,
  company: DetialsReducer,
});

const store = createStore(AllReducers, applyMiddleware(thunk));

export default store;

const action = type => store.dispatch(type);

class Main extends React.Component {
  render() {
    return (
      <div>
        <Accapp />
      </div>
    );
  }
}

ReactDom.render(
  <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
  </BrowserRouter>,
  document.querySelector('main')
);
