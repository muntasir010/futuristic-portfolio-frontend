/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual IDs from EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message, please try again.");
        },
      );
  };

  return (
    <section id="contact" className="relative mx-auto mt-10 md:mt-20 w-[94%] max-w-6xl overflow-hidden">
      {/* Scroll Animation with Framer Motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid gap-12 rounded-3xl border border-white/15 bg-glass p-8 md:p-14 backdrop-blur-xl shadow-xl shadow-black/40 md:grid-cols-2"
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            className="mb-4 text-3xl font-bold text-neon tracking-tight"
          >
            Let's <span className="text-white">Connect</span>
          </motion.h2>
          <p className="max-w-md text-sm leading-relaxed text-white/70">
            Have a project idea or just want to chat? Send me a message and I'll
            get back to you within 24 hours. You can also reach me directly via
            my social links.
          </p>

          {/* Quick Contact Info */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4 text-white/60">
              <span className="p-2 rounded-lg bg-neon/10 text-neon">📧</span>
              <span className="text-sm">naeemtasir03@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <span className="p-2 rounded-lg bg-neon/10 text-neon">📞</span>
              <span className="text-sm">+880 1302037958</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              name="user_name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm text-white placeholder-white/30 backdrop-blur-md outline-none transition focus:border-neon/60"
            />
          </motion.div>

          <motion.div whileFocus={{ scale: 1.02 }}>
            <input
              name="user_email"
              type="email"
              required
              placeholder="Your Email Address"
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm text-white placeholder-white/30 backdrop-blur-md outline-none transition focus:border-neon/60"
            />
          </motion.div>

          <motion.textarea
            name="message"
            required
            placeholder="Describe your project or message..."
            rows="4"
            className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-4 text-sm text-white placeholder-white/30 backdrop-blur-md outline-none transition focus:border-neon/60"
          />

          {/* Submit Button with Loading State */}
          <button
            type="submit"
            disabled={loading}
            className={`relative w-full rounded-2xl py-4 text-sm font-bold tracking-widest uppercase transition-all overflow-hidden ${
              sent
                ? "bg-green-500 text-white"
                : "bg-neon/20 text-neon border border-neon/30 hover:bg-neon hover:text-black shadow-neon"
            }`}
          >
            {loading
              ? "Sending..."
              : sent
                ? "Message Sent! ✓"
                : "Launch Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
