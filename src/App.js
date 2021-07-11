// Hubungakan redux dan aplikasi
import { Provider } from 'react-redux'

// Import storenya
import store from './store/index'


import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

const App = () => {
  return (
    // Bungkus dengan tag Provider
    <Provider store={store}>
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Belajar Redux</h2>
          <Todos />
      </div>
    </Provider>
  );
}

export default App;
