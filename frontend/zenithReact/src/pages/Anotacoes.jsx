import React from 'react'
import BarraLateral from '../components/BarraLateral'
import View from '../components/View'
import BookCinza from '../icons/BookCinza'
import BookVerde from '../icons/BookVerde'


function Anotacoes() {
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const [cor, setCor] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/blocos')
      .then((res) => {
        setFrase(res.data.frase_do_dia);
        setAutor(res.data.autor);
        setCor(res.data.cor);
      });
  }, []);
  return (
    <>
      <div className='text-xl font-bold text-cinzaTexto'>Anotações</div>
      <div className='w-full h-full bg-red-500 flex flex-col flex-wrap 
      content-start'>

      </div>
    </>
  )
}

export default Anotacoes