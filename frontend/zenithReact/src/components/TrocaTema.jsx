import React from 'react'

function TrocaTema() {

  function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => {
    setIsDarkMode(lisDarkMode);
    };
    return
    <div classname={isDarkMode ? "dark" : ''}>
      <button onclick={toggleDarkmode}>
      {isDarkMode ? "Switch to light Mode" : 'Switch to Dark Mode'}
      </button>
    </div>
    


  return (isDarkMode 
    <select name="trocatema" className='p-0 flex w-28 h-8 bg-preto/10 rounded mb-3 placeholder:text-cinzaTexto text-cinzaTexto'>
      <option value="">Modo Claro</option>
      <option value="M">Modo Escuro</option>
    </select>
  )
}

export default TrocaTema