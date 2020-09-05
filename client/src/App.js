import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/shoppinglist'
import './App.css';
import { Provider } from 'react-redux';
import store from './store'; 
import {loadUser} from './actions/authactions';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemModal from './components/itemModel';
import {Container} from 'reactstrap';

class App extends Component {
 componentDidMount(){
   store.dispatch(loadUser());
 }
  render() {
    return (
     
      <Provider store={store}>
      <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
      

      </div>
      </Provider>
    );
  }
}

export default App;