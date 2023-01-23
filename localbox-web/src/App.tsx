import { ToastContainer } from 'react-toastify';
import RoutesApp from './routes';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default App;
