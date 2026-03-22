import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(() => {
        alert("Message sen!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops, something went wrong. Please try again later."),
      );
  };

  return (
    // <section
    //   id="contact"
    //   className="min-h-screen flex items-center justify-center py-20"
    // >
    //   <RevealOnScroll>
    //     <div className="px-4 w-150 max-w-3xl mx-auto">
    //       <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
    //         Get in Touch
    //       </h2>

    //       <form className="space-y-6" onSubmit={handleSubmit}>
    //         <div className="relative">
    //           <input
    //             type="text"
    //             id="name"
    //             name="name"
    //             required
    //             value={formData.name}
    //             onChange={(e) =>
    //               setFormData({ ...formData, name: e.target.value })
    //             }
    //             className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
    //                       focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
    //             placeholder="Name"
    //           />
    //         </div>

    //         <div className="relative">
    //           <input
    //             type="email"
    //             id="email"
    //             name="email"
    //             required
    //             value={formData.email}
    //             onChange={(e) =>
    //               setFormData({ ...formData, email: e.target.value })
    //             }
    //             className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
    //                       focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
    //             placeholder="Example@gmail.com"
    //           />
    //         </div>

    //         <div className="relative">
    //           <textarea
    //             id="message"
    //             name="message"
    //             required
    //             value={formData.message}
    //             onChange={(e) =>
    //               setFormData({ ...formData, message: e.target.value })
    //             }
    //             rows={5}
    //             className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition
    //                       focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
    //             placeholder="Your message here..."
    //           />
    //         </div>

    //         <button
    //           type="submit"
    //           className="w-full  text-white font-medium py-3 px-6 rounded transition relative overflow-hidden bg-blue-500
    //                     hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5 )] "
    //         >
    //           Send Message
    //         </button>
    //       </form>
    //     </div>
    //   </RevealOnScroll>
    // </section>

    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20"
    >
      <RevealOnScroll>
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-0 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 bg-linear-to-r from-blue-500 to-cyan-400 text-center bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 sm:py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 sm:py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Example@gmail.com"
            />

            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 sm:py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Your message here..."
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium py-3 sm:py-4 px-6 rounded transition 
          hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
