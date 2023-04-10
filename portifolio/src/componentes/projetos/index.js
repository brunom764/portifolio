import {Card, Button } from 'react-bootstrap';
import './projetos.scss'
import brafood from 'assets/projetos/brafood.png'
import eventsCalendar from 'assets/projetos/eventsCalendar.png'
import aBenditaItalia from 'assets/projetos/a-bendita-italia.png'
import organo from 'assets/projetos/organo.png'
import typerGame from 'assets/projetos/typerGame.png'
import dashboard from 'assets/projetos/dashboard.png'
import analise from 'assets/projetos/analise2.png'
import visao from 'assets/projetos/visao.png'


const projetos = [{
     titulo: 'Events calendar',
     descricao: 'Um calendário atualizado com eventos com uso de React e a biblioeteca recoil.',
     img: eventsCalendar,
     link:'https://events-calendar-lovat.vercel.app/',
     linkGitHub:'https://github.com/brunom764/events-calendar'
    },{
     titulo: 'A Bendita Italia',
     descricao: 'Site de um restaurante italiano com React, TypeScript, Saas e Bootstrap.',
     img: aBenditaItalia,
     link:'https://a-bendita-italia.vercel.app/',
     linkGitHub:'https://github.com/brunom764/A-Bendita-Italia'
    },{
        titulo: 'BraFood',
        descricao: 'Um e-commerce de vegetais orgânicos com React, styled-compoments, context-api e material-ui.',
        img: brafood,
        link:'https://brafoods.vercel.app/',
        linkGitHub:'https://github.com/brunom764/braFood'
    },{
        titulo: 'Organo',
        descricao: 'Aplicação web com cadastro de funcionários e criação dinâmica de cards de funcionários utilizando React.',
        img: organo,
        link:'https://organa-brunom764.vercel.app/',
        linkGitHub:'https://github.com/brunom764/organo'
    },{
        titulo: 'Analise de dados vacinação',
        descricao: 'Projeto de visualização de dados com a utilização do python e as bibliotecas pandas, matplotlib e seaborn.',
        img: analise,
        link:'https://github.com/brunom764/analiseDadosVacinados',
        linkGitHub:'https://github.com/brunom764/analiseDadosVacinados'
    },{
        titulo: 'Visão computacional',
        descricao: 'Projeto de machine learning, no qual a máquina preve se uma foto é de um gato ou não.',
        img: visao,
        link:'https://colab.research.google.com/github/brunom764/machineLearning/blob/main/MachineLearningPicture.ipynb',
        linkGitHub:'https://github.com/brunom764/machineLearning/blob/main/MachineLearningPicture.ipynb'
    }]

function Projetos (){
   return (
    <div className='projetos'>
        <h1 className='titulo destaquePrimeiraLetra'>Meus principais projetos</h1>
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
                <Card.Link href={projeto.link} target="_blank" ><Button variant="dark" className='textoDestaque'>Acessar o deploy</Button></Card.Link>
                <Card.Link href={projeto.linkGitHub} target="_blank" ><Button variant="secondary">Ver mais</Button></Card.Link>
                </Card.Body>
            </Card>
            )
            })}
        </section>
    </div>
        )
}

export default Projetos;