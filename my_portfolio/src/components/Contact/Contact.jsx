import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaGithub, FaPaperPlane, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

const contactInfo = [
  {
    icon: <FaEnvelope className="text-purple-400" size={16} />,
    label: "Email",
    value: "shahbaj00786@gmail.com",
    href: "mailto:shahbaj00786@gmail.com",
  },
  {
    icon: <FaLinkedin className="text-purple-400" size={16} />,
    label: "LinkedIn",
    value: "Shahbaj Hussain",
    href: "https://www.linkedin.com/in/shahbaj-hussain-9160443a8",
  },
  {
    icon: <FaGithub className="text-purple-400" size={16} />,
    label: "GitHub",
    value: "shahbaj00786",
    href: "https://github.com/shahbaj00786",
  },
  {
    icon: <HiOutlineLocationMarker className="text-purple-400" size={18} />,
    label: "Location",
    value: "Kolkata, West Bengal, India",
    href: null,
  },
];

export const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_19x3aky",
        "template_66duxj8",
        form.current,
        "fxWrlB_AZH4t5LRGx"
      )
      .then(() => {
        form.current.reset();
        toast.success("Message sent! I'll get back to you soon. ✅", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
          style: { background: "#0d0b1f", border: "1px solid rgba(124,58,237,0.3)" },
        });
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again. ❌", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      })
      .finally(() => setLoading(false));
  };

  const inputClass = (field) =>
    `w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-gray-500
     bg-white/[0.04] border transition-all duration-200 outline-none
     ${focused === field
       ? "border-purple-500/60 bg-white/[0.06] shadow-[0_0_0_3px_rgba(124,58,237,0.12)]"
       : "border-white/[0.08] hover:border-white/[0.15]"
     }`;

  return (
    <section
      id="contact"
      className="py-28 px-[7vw] lg:px-[12vw] bg-[#050414] overflow-hidden"
    >
      <ToastContainer />

      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</p>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-5">
          Contact Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-[#7c3aed] to-[#c084fc] mx-auto rounded-full mb-6" />
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Have an opportunity or just want to connect? I'd love to hear from you.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT — Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Let's Work Together</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              I'm currently open to full-time roles, freelance projects, and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.
            </p>
          </div>

          <div className="space-y-3">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl
                bg-white/[0.03] border border-white/[0.07]
                hover:border-purple-500/25 hover:bg-white/[0.05]
                transition-all duration-300 group">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer"
                      className="text-sm text-gray-300 hover:text-purple-300 transition-colors duration-200 font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/5 border border-green-500/15">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 flex-shrink-0 shadow-[0_0_8px_#4ade80]" style={{ animation: "pulse 2s infinite" }} />
            <p className="text-sm text-green-300 font-medium">Available for opportunities — Response within 24h</p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="rounded-2xl p-8
          border border-white/[0.08]
          bg-gradient-to-br from-white/[0.04] to-white/[0.01]
          shadow-[0_0_50px_rgba(124,58,237,0.08)]">

          <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text" name="name"
                placeholder="Your Name"
                required
                className={inputClass("name")}
                onFocus={() => setFocused("name")}
                onBlur={() => setFocused(null)}
              />
              <input
                type="email" name="email"
                placeholder="Your Email"
                required
                className={inputClass("email")}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused(null)}
              />
            </div>
            <input
              type="text" name="subject"
              placeholder="Subject"
              required
              className={inputClass("subject")}
              onFocus={() => setFocused("subject")}
              onBlur={() => setFocused(null)}
            />
            <textarea
              name="message"
              placeholder="Tell me about your project or opportunity..."
              rows="5"
              required
              className={`${inputClass("message")} resize-none`}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
            />
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-semibold text-white text-sm
                bg-gradient-to-r from-[#7c3aed] to-[#9b6dff]
                hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-[1.01]
                disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100
                transition-all duration-300"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <FaPaperPlane size={14} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};