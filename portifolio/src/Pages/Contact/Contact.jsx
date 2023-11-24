import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
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

                console.log("SUCCESS!", res.status, res.text);

                setContact({
                    subject: "",
                    name: "",
                    email: "",
                    message: "",
                });
            }).catch((err) => {
                console.log("ERRO:", err);
            });
    };

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact">
            <form onSubmit={handleSubmit}>
                <p>Contact</p>

                <input
                    type="text"
                    required
                    autoComplete="none"
                    placeholder="Subject"
                    name="subject"
                    value={contact.subject}
                    onChange={handleChange}
                />
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
                <input
                    type="text"
                    required
                    autoComplete="none"
                    placeholder="Message"
                    name="message"
                    value={contact.message}
                    onChange={handleChange}
                />
                <button>Send</button>
            </form>
        </section>
    )
}

export default Contact