import { useDispatch, useSelector } from 'react-redux';
import { setOffDarkMode, setOnDarkMode } from './redux/actions/themeActions';

const App = () => {
  const darkMode = useSelector((state) => state.darkMode); // state = store global
  const dispatch = useDispatch();
  return (
    <>
      <h1>{darkMode.status ? 'DarkMode ON' : 'DarkMode OFF'}</h1>
      <button onClick={() => dispatch(setOnDarkMode())}>
        Habilitar DarkMode
      </button>
      <button onClick={() => dispatch(setOffDarkMode())}>
        Deshabilitar DarkMode
      </button>
    </>
  );
};

export default App;
