import { Quadradinhos } from '../../Components/Malha/Quadradinhos'
import './projects.css'

function Projects() {
    return (
        <section id="projects">
            <div className='quadradrinhos-projects'>
                <Quadradinhos />
            </div>
            <div className='container-projects'>
                <div className='project1'>
                    <div className='img1'>
                    </div>
                    <div className='title-project1'>
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
                    </div>
                    <div className='title-project1'>
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