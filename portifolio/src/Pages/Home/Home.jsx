import { saveAs } from "file-saver";
import CV_Iago from "../../../public/Iago_CV.pdf";
import { RiGithubFill, RiLinkedinBoxFill, RiFileList3Line } from "react-icons/ri";
import "./home.css";

function Home() {
    const handleDownload = () => {
        saveAs(CV_Iago, "Iago_CV.pdf");
    };

    return (
        <section id="home">
            <div className="container">
                <div className="container-info">
                    <div className="hi"><span>Oi 👋 eu sou o iago</span></div>
                    <div className="infos">
                        <div className="infos-txt">
                            <span>react</span>
                        </div>
                        <div className="infos-link">
                            <a href="https://www.linkedin.com/in/iago-souza-lopes/" target="_BLANK"><RiLinkedinBoxFill size={40} />
                            </a>
                            <a href="https://github.com/iagoslopes" target="_BLANK"><RiGithubFill size={40} />
                            </a>
                            <a onClick={handleDownload}><RiFileList3Line size={40} />
                            </a>
                        </div>
                    </div>
                    <div className="infos2">
                        <span>developer</span>
                    </div>
                </div>
                <div className="container-text">
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tenho 22 anos sou desenvolvedor Front-End
                        caminhando para o Full-Stack
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Home