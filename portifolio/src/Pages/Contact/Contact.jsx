import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import copy from "copy-to-clipboard";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import "./contact.css";

function Contact() {
    const [emailCopied, setEmailCopied] = useState(false);
    const [emailSpanClass, setEmailSpanClass] = useState('');
    const copyText = 'iagodesouza2012@gmail.com';

    const handleEmailCopy = () => {
        window.navigator.vibrate(300);

        //Função para copiar o texto
        copy(copyText);

        //Adiciona a classe ao <span> ao copiar o e-mail
        setEmailSpanClass('email-copied');

        //Reverte a classe após 0.5 segundos
        setTimeout(() => {
            setEmailSpanClass('');
        }, 500);

        //Atualiza o estado para refletir que o e-mail foi copiado
        setEmailCopied(true);

        //Reverte o estado após 2 segundos
        setTimeout(() => {
            setEmailCopied(false);
        }, 2000);
    };

    const [contact, setContact] = useState({
        subject: "",
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            subject: contact.subject,
            name: contact.name,
            message: contact.message,
            email: contact.email,
        };

        emailjs
            .send(
                "service_6in6hvk",
                "template_s5u64dg",
                templateParams,
                "ICbDvSMLYm4HhMASQ"
            )
            .then((res) => {
                window.navigator.vibrate(300);
                alert("Message sent successfully! I will contact you soon.");

                setContact({
                    subject: "",
                    name: "",
                    email: "",
                    message: "",
                });
            }).catch((err) => {
                alert("Message not sent with successfully! Try again later.");
            });
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact">
            <div className='EmailCopy'>
                <h2><span><MdOutlineAttachEmail /></span><p>Email Me</p></h2>
                <div className="Email">
                    <span className={emailSpanClass}>
                        {copyText}
                    </span>
                    <button
                        onClick={handleEmailCopy}
                        disabled={emailCopied}
                    >
                        {emailCopied ? <FaClipboardCheck size={32} /> : <FaClipboard size={32} />}
                    </button>
                </div>
            </div>

            <div className="title-contact">
                <h2>Contact me</h2>
            </div>

            <form onSubmit={handleSubmit}>

                <div className="form1">
                    <input
                        type="text"
                        required
                        autoComplete="none"
                        placeholder="Name"
                        name="name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        required
                        autoComplete="none"
                        placeholder="Email"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form2">
                    <input
                        type="text"
                        required
                        autoComplete="none"
                        placeholder="Subject"
                        name="subject"
                        value={contact.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form3">
                    <textarea
                        type="text"
                        required
                        autoComplete="none"
                        placeholder="Message"
                        name="message"
                        value={contact.message}
                        onChange={handleChange}
                    />
                </div>
                <button>Send</button>
            </form>
        </section>
    )
}

export default Contact