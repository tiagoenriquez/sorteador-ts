import './App.css';
import GlobalContext from './context';
import { Formulario, Resultado } from './pages';

function App() {
  return (
    <GlobalContext>
      <Formulario />
      <Resultado />
    </GlobalContext>
  );
}

export default App;
