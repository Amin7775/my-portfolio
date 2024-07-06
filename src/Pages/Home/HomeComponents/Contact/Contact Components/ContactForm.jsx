const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    console.log(name, email, message);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <input
          type="text"
          name="name"
          className="w-full text-xl border-0 border-b-2 bg-transparent border-theme-primary py-1 px-1 focus:outline-none text-gray-300"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
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
