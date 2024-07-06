import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current)
    emailjs
      .sendForm("service_0yyowvj", "template_1la5xqe", form.current, {
        publicKey: "-lLj0s9W14i7KtBXo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
        <input
          type="text"
          name="from_name"
          className="w-full text-xl border-0 border-b-2 bg-transparent border-theme-primary py-1 px-1 focus:outline-none text-gray-300"
          placeholder="Name"
        />
        <input
          type="email"
          name="from_email"
          className="w-full text-xl border-0 border-b-2 bg-transparent border-theme-primary py-1 px-1 focus:outline-none text-gray-300"
          placeholder="Email"
        />

        <textarea
          type="text"
          name="message"
          rows={5}
          className="w-full text-xl border-0 border-b-2 bg-transparent border-theme-primary py-1 px-1 focus:outline-none text-gray-300"
          placeholder="Message"
        />

        <input
          type="submit"
          value="Send Message"
          className="btn bg-theme-primary text-off-white border-2 border-theme-bg px-7 rounded-full hover:bg-custom_Dark hover:border-2 hover:border-theme-primary transition-all duration-300 ease-in-out transform hover:scale-100"
        />
      </form>
    </div>
  );
};

export default ContactForm;
