import {Card, Button } from 'react-bootstrap';
import './projetos.scss'
import brafood from 'assets/projetos/brafood.png'
import eventsCalendar from 'assets/projetos/eventsCalendar.png'
import aBenditaItalia from 'assets/projetos/a-bendita-italia.png'
import typerGame from 'assets/projetos/typerGame.png'


const projetos = [
    {titulo: 'BraFood',
     descricao: 'Um e-commerce de vegetais orgânicos com React, styled-compoments, context-api e material-ui ',
    img: brafood,
    link:'https://brafoods.vercel.app/',
    linkGitHub:'https://github.com/brunom764/braFood'},
    {titulo: 'Events calendar',
     descricao: 'Um calendário atualizado com eventos com uso de React e a biblioeteca recoil',
    img: eventsCalendar,
    link:'https://events-calendar-lovat.vercel.app/',
    linkGitHub:'https://github.com/brunom764/events-calendar'},
    {titulo: 'A Bendita Italia',
     descricao: 'Site de um restaurante italiano com React, TypeScript, Saas e Bootstrap.',
    img: aBenditaItalia,
    link:'https://a-bendita-italia.vercel.app/',
    linkGitHub:'https://github.com/brunom764/A-Bendita-Italia'},
    {titulo: 'TyperGame',
     descricao: 'Um jogo de digitação de frases rapidas com o uso do jQuery',
    img: typerGame,
    link:' https://typer-game.vercel.app/',
    linkGitHub:'https://github.com/brunom764/TyperGame'},
]

function Projetos (){
   return (
    <div className='projetos'>
        <h1 className='titulo destaquePrimeiraLetra'>Meus projetos</h1>
        <section className='cardsProjetos'>
        {projetos.map(projeto => {
            return (
                <Card className='card'>
                <Card.Img variant="top" src={projeto.img} className='cardImg' />
                <Card.Body>
                <Card.Title className='textoDestaque'>{projeto.titulo}</Card.Title>
                <Card.Text>
                    {projeto.descricao}
                </Card.Text>
                </Card.Body>
                <Card.Body className='Buttonlinks'>
                <Card.Link href={projeto.link} target="_blank" ><Button variant="dark" className='textoDestaque'>Acessar o site</Button></Card.Link>
                <Card.Link href={projeto.linkGitHub} target="_blank" ><Button variant="secondary">Acessar código</Button></Card.Link>
                </Card.Body>
            </Card>
            )
            })};
        </section>
    </div>
        )
}

export default Projetos;
