import { saveAs } from "file-saver";
import CV_Iago from "../../../public/Iago_CV.pdf";

function Home() {
    const handleDownload = () => {
        saveAs(CV_Iago, "Iago_CV.pdf");
    };

    return (
        <section id="home">
            <div>
                <h1>Home</h1>
                <button onClick={handleDownload}>Download CV
                </button>
            </div>
        </section>
    )
}

export default Home