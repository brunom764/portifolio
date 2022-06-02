import './conhecimentos.scss'

const skills =  [{
    id: '0',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg",
    titulo:'HTML 5',
    descricao: 'É uma linguagem usada para a publicação de conteúdo (texto, imagens, vídeos, áudio etc.) na web'
},
{
    id: '1',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg",
    titulo:'CSS 3',
    descricao: 'É um mecanismo para dar estilo a um código criado por linguagens como HTML, XML ou XHTML'
},{
    id: '2',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
    titulo:'Bootstrap',
    descricao: 'É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples'
},{
    id: '3',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    titulo:'Sass',
    descricao: 'É uma linguagem de extensão do CSS, ou seja, adiciona recursos especiais como variáveis, mixins e funções'
},{
    id: '4',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    titulo:'javaScript',
    descricao: 'É uma linguagem de programação criada, a princípio, para ser executada em navegadores e manipular comportamentos de páginas web'
},{
    id: '5',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
    titulo:'typeScript',
    descricao: 'É um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem'
},{
    id: '6',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    titulo:'React',
    descricao: 'É uma biblioteca do javaScript para a criação de interfaces de usuário, podendo ser usada com outras bibliotecas ou frameworks de JavaScript'
},{
    id: '7',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg",
    titulo:'jQuery',
    descricao: 'É a biblioteca do JavaScript que torna essa linguagem de programação mais concisa e simples de escrever e compreender'
},{
    id: '8',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    titulo:'Next js',
    descricao: 'É um framework para React, isto é, adiciona várias funcionalidades em cima do React'
},{
    id: '9',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
    titulo:'Vue js',
    descricao: 'É um framework JavaScript open source para a criação de aplicações web'
},{
    id: '10',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    titulo:'Git',
    descricao: 'É um sistema de controle de versão open-source'
},{
    id: '11',
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    titulo:'Python',
    descricao: 'É uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte'
}]

function mostrarDescricao(id){
    const titulo = document.querySelector('#tituloConhecimento')
    const descricao = document.querySelector('#descricaoConhecimento')
    titulo.textContent = skills[id].titulo
    descricao.textContent = skills[id].descricao
}

function Conhecimentos(){
   return (
    <section className="conhecimentos">
        <h1 className="titulo destaquePrimeiraLetra">Linguagens e ferramentas</h1> 
        <section className='blocoSessoes'>
            <div className="conhecimentosImgBloco">
            {skills.map(skill => {
                const id = skill.id
                return (
                <img src={skill.img} alt={skill.titulo} onClick={() => mostrarDescricao(id)} className="conhecimentoImg"/>
                )})}
            </div>
            <div className='blocoDescricaoConhecimento' id='blocoDescricaoConhecimento'>
                <h3 className='subtitulo textoDestaque textoNegrito' id='tituloConhecimento'>Clique em um conhecimento</h3>
                <p className='descricaoConhecimento' id='descricaoConhecimento'></p>
            </div>
        </section>
     </section>        
   )
}

export default Conhecimentos