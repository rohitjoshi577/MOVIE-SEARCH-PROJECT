import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { store } from './store/store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function Index() {
  return (
    <>
      <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
      </BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Index;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);