import { Button } from 'react-bootstrap';
import './apresentacao.scss'
import fotoDePerfil from '../../assets/avatar.png'
import Typical from 'react-typical';
import 'animate.css';


function mostrarInfo() {
    const apresentacao = document.getElementById('apresentacao')
    const portifolio = document.getElementById('portifolio')
    const resumir = document.getElementById('resumir')
    apresentacao.classList.add("oculta");
    portifolio.classList.remove("oculta");
    resumir.classList.remove("oculta");
    window.scrollTo(0,650)
}

function apagarInfo() {
    const apresentacao = document.getElementById('apresentacao')
    const portifolio = document.getElementById('portifolio')
    const resumir = document.getElementById('resumir')
    apresentacao.classList.remove("oculta");
    portifolio.classList.add("oculta");
    resumir.classList.add("oculta");
}

function Apresentacao (){
    return (
        <section className='apresentacao ocupaTela'>
            <div>
                <img className="img animate__animated animate__bounce" src={fotoDePerfil} alt='foto de perfil'/>
            </div>
            <div>
                <h1 className="texto animate__animated animate__bounce"> Olá, eu sou Bruno. <br></br>Bem-vindo ao meu portifólio!</h1>
                <Typical 
                steps={['Front-End Developer', 2000, 'React Developer', 2000]}
                loop={Infinity}
                wrapper="h2"
                className='subTextoAnimado textoNegrito'
              />
                <Button onClick={mostrarInfo} variant="dark" className='button' id='apresentacao'>VER MAIS</Button>
                <Button onClick={apagarInfo} variant="dark" className='button oculta' id='resumir'>VER MENOS</Button>
            </div>
        </section> 
    ) 
}

export default Apresentacao