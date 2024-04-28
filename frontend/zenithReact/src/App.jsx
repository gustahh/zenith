import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
