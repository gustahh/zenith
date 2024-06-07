import React from 'react'

function TrocaTema() {
  return (
    <div>
        <button 
          className="bg-gray-200 text-black px-4 py-2 m-2 rounded hover:bg-gray-400"
          onClick={() => setTheme('light')}
        >
          Tema Claro
        </button>
        <button 
          className="bg-gray-800 text-white px-4 py-2 m-2 rounded hover:bg-gray-600"
          onClick={() => setTheme('dark')}
        >
          Tema Escuro
        </button>
      </div>
  )
}

export default TrocaTema