import "./App.css";
import store from './shared/store';
import { Provider } from 'react-redux';
import AppRouter from './routes'



const App = () => {
  
  return (
    <div>
       <Provider store={store}>
        <AppRouter />
      </Provider>
    
      
          </div>
  );
};

export default App;
