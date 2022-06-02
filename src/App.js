
import Apresentacao from 'componentes/apresentacao';
import Conhecimentos from 'componentes/conhecimentos';
import Footer from 'componentes/footer';
import Sobre from 'componentes/sobre';
import './App.scss';
import Header from './componentes/header';
import Projetos from './componentes/projetos';

function App() {
  return (
    <section>
      <Header/>
      <Apresentacao/>
      <section className='portifolio oculta' id='portifolio'>
        <Sobre/>
        <Projetos/>
        <Conhecimentos/>
        <Footer/>
      </section>
    </section>
  );
}

export default App;
