import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import { AppProvider } from './Contaxt/Context';



const Index=()=>
{
  return(
    <>
     <AppProvider>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
    </AppProvider>
    </>
  )
}

ReactDOM.render(<Index/>,document.getElementById('root'))


   
    

