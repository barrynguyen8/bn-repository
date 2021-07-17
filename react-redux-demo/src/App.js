import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer'
import { Provider } from 'react-redux' 
import store from './redux/cake/store'

//provide redux store to react app

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
