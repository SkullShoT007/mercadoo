import './App.css';

import {Header} from './components/Header'

import { AllRoutes } from './routes/AllRoutes';
function App() {
  return (
        <div className="App max-w-7xl m-auto p-0">
            <Header/>
            <AllRoutes />
         </div>
    
  );
}

export default App;
