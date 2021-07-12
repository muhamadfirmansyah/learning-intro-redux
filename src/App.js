// Hubungakan redux dan aplikasi
import { Provider } from 'react-redux'

// Import storenya
import store from './store/index'


import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import Form from './components/Form';
import Product from './components/Product';

const App = () => {
  return (
    // Bungkus dengan tag Provider
    <Provider store={store}>
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Belajar Redux</h2>
          <Todos />

          <div>
            <Form />
          </div>

          <div style={ productStyle }>
            <h1>Daftar Barang</h1>

            <Product />
          </div>
      </div>
    </Provider>
  );
}

const productStyle = {
  marginTop: "5rem",
  width: "50%",
  background: "blue",
  padding: "2rem 0",
  color: "#FFF",
}

export default App;
