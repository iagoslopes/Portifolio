import { Quadradinhos } from '../../Components/Malha/Quadradinhos'
import './projects.css'
import noteAgro from './Images/Mac_SF.png';
import celularAgro from './Images/Celu_SF.png';
import tabletAgro from './Images/Tablet_SF.png';
import tabletDI from './Images/Tablet_EmBreve_SF.png';
import celularDI from './Images/Celu_EmManut_SF.png';

function Projects() {
    return (
        <section id="projects">
            <div className='quadradrinhos-projects'>
                <Quadradinhos />
            </div>
            <div className='container-projects'>
                <div className='project1'>
                    <div className='img1'>
                        <a href="https://eduagroofficial.vercel.app" target="_BLANK" className='note'>
                            <img src={noteAgro} alt="" id='note' />
                        </a>
                        <a href="https://drive.google.com/drive/folders/12cfZqdD-9Iy5CDW76P2hVWsb-ov3umqa?usp=drive_link" target="_BLANK" className='celular'>
                            <img src={celularAgro} alt="" id='celular' />
                        </a>
                        <a href="https://eduagroofficial.vercel.app" target="_BLANK" className='tablet'>
                            <img src={tabletAgro} alt="" id='tablet' />
                        </a>
                    </div>
                    <div className='design'>
                        <p>Create design by <a href="https://www.linkedin.com/in/rafael-a-freitas-4a41b2264/" target='_BLANK'>
                            @rafa
                        </a>.
                        </p>
                    </div>
                    <div className='title-project'>
                        <h2>Projeto Faculdade</h2>
                        <h3>EducationAgro</h3>
                    </div>
                    <div>
                        <span>
                            Site educacional relacionado ao AGro desenvolvido em React,
                            Nodejs e Firebase.
                            <p>Aplicativo Mobile desenvolvido em Kotlin,
                                Nodejs e Firebase
                            </p>
                        </span>
                    </div>
                </div>
                <div className='project2'>
                    <div className='img2'>
                        <a href="#projects" className='tablet'>
                            <img src={tabletDI} alt="" id='tablet' />
                        </a>
                        <a href="#projects" className='celular'>
                            <img src={celularDI} alt="" id='celular' />
                        </a>
                    </div>
                    <div className='design'>
                        <p>Create design by <a href="https://www.linkedin.com/in/rafael-a-freitas-4a41b2264/" target='_BLANK'>
                            @rafa
                        </a>.
                        </p>
                    </div>
                    <div className='title-project'>
                        <h2>EM BREVE</h2>
                        <h3>DinheiroInteligente</h3>
                    </div>
                    <div>
                        <span>
                            Será uma aplicação web desenvolvida em React.
                            <p>
                                Responsiva para o uso no celular
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects