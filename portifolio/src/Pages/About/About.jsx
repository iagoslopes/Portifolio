import { saveAs } from "file-saver";
import CV_Iago from "../../../public/Iago_CV.pdf";
import { Quadradinhos, QuadradinhosInverse } from '../../Components/Malha/Quadradinhos'
import { RiGithubLine, RiLinkedinFill, RiFileList3Line } from "react-icons/ri";
import './about.css'

function About() {
    const handleDownload = () => {
        saveAs(CV_Iago, "Iago_CV.pdf");
    };
    return (
        <section id="about">
            <div className='quadradrinhos-about'>
                <Quadradinhos />
            </div>
            <div className="container-about">
                <div className='about'>
                    <h1 className="title-about">About me</h1>
                    <p className='information'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eu sou Iago e atualmente moro em São Paulo. Cursando Desenvolvimento de Software Multiplataforma na FATEC Mauá, depois de
                        muitas tecnologias nas quais eu obtive conhecimento, escolhi a carreira para programação e desenvolvimento frontend. Nos ultimos
                        meses, venho estudando cada vez mais garantindo uma ampla variedade de tecnologias.
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Em 2023, com apenas alguns meses, venho construindo projetos web e mobile robustos e bonitos, nos quais sou apaixonado. Minha
                        experiência nas diversas tecnologias frontend são: Ract, HTML, CSS, JavaScript, NodeJS e MongoDB, sempre busco qualidade em tudo o que faço.
                        <br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Você pode me encontrar no GitHub, onde gosto de desenvolver projetos pessoais com React, ou no LinkedIn, onde estou aumento
                        minha frequência por la. Atualmente estou aprimorando em algumas outras como: TypeScript, SASS e Bootstrap.
                    </p>
                    <div className="about-link">
                        <a href="https://www.linkedin.com/in/iago-souza-lopes/" target="_BLANK"><RiLinkedinFill size={50} />
                        </a>
                        <a href="https://github.com/iagoslopes" target="_BLANK"><RiGithubLine size={50} />
                        </a>
                        <a onClick={handleDownload}><RiFileList3Line size={50} />
                        </a>
                    </div>
                </div>
                <div className="about-image">

                </div>
            </div>
            <div className='quadradrinhosInverse-about'>
                <QuadradinhosInverse />
            </div>
        </section>
    )
}

export default About