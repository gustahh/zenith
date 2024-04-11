import Header from "../components/Header"

function Index() {
  return (
    <>
        <Header />

        <header>
          <div>
            <div>
              <img src="" alt="" />
            </div>

            <div className='flex'>
            <nav>
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Anotações</a></li>
                <li><a href="">Relatório</a></li>
                <li><a href="">Home</a></li>

              </ul>
            </nav>
            </div>
          </div>

          <nav>
            <ul>
              <li><a href="">Entrar</a></li>
              <li><a href="">Comece a usar gratuitamente</a></li>  
            </ul>
          </nav>
        </header>
        <div>
            <h1>Organize a sua vida.</h1>
            <h3>Organize seus pensamentos, sentimentos, rotina e estipule suas metas</h3>
        </div>

        <button><a href="">Comece a usar gratuitamente</a></button> <button><a href="">Já tenho uma conta</a></button>

        <section>
          <div>
            <h3>Registre seus momentos...</h3>

          </div>
          <div>
            <img src=""></img>
            </div>
          <div>
          <h2>"Anote seus pensamentos"</h2>
          </div>
        </section>

        <section>
          <div>
            <h2>"Monitore seu humor"</h2>
          </div>

          <div>
            <img src=""></img>
          </div>
        </section>

        <section>
          <div>
            <img src="" alt="" />
          </div>

          <div>
            <h2>"Estipule suas metas"</h2>
          </div>
        </section>

        <footer>
          <p>Footer</p>
        </footer>
    </>
  )
}

export default Index