function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>

      <form>
        <input type="text" placeholder="Your Name" />
        <br /><br />

        <input type="email" placeholder="Your Email" />
        <br /><br />

        <textarea placeholder="Your Message"></textarea>
        <br /><br />

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;