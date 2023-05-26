import logo from './logo.svg';
import './App.css';
import AppRoutes from './Utility/AppRoutes';

import ContextApi from "./Utility/ContextStore/ContextApi"

function App() {
  return (
    <div>
      
      
      <ContextApi>
      <AppRoutes/>
      </ContextApi>


    </div>
  );
}

export default App;
