export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Me</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
        <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
}
