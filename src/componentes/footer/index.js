import './footer.scss'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer">
            <div className='footerText'>
                <p>Email para contato: <span className="textoDestaque">Brunom764@gmail.com</span><br></br>
                Feito por <span className="textoDestaque">Bruno Moreira</span></p>
            </div>
            <li className='iconFooter'><a href='https://github.com/brunom764'><FaGithub color="#00d2df"/></a></li>
            <li className='iconFooter'><a href='https://www.linkedin.com/in/bruno-miguel-a08022239/'><FaLinkedin color="#00d2df"/></a></li>

       </footer>
    )
}

export default Footer;