import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import ContactParticles from "../components/ContactParticles";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "service_hbktuwo",
      "template_h3ukei5",
      formRef.current,
      "Pn8NzUPJFGgbnZyFW"
    )
      .then(
        () => {
          alert("Message successfully sent!");
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section className="relative w-full bg-[#030014] py-24 px-6 overflow-hidden min-h-screen flex flex-col items-center">
      <ContactParticles />
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#23D3EE] blur-[150px] rounded-full opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#23D3EE] blur-[150px] rounded-full opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full">
        {/* Title Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Get In <span className="text-[#23D3EE] drop-shadow-[0_0_15px_rgba(35,211,238,0.4)]">Touch</span>
          </motion.h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Have a question or want to work together? Send me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/*MAIN CONTAINER*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/*Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-md border border-[#23D3EE]/50 p-10 rounded-3xl flex flex-col justify-between hover:border-[#23D3EE]/80 hover:shadow-[0_0_30px_rgba(35,211,238,0.3)] transition-all duration-500"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <ContactInfo icon={<FiMapPin className="text-[#23D3EE]" />} title="Location" details="India, West Bengal, Kolkata,743503" />
                <ContactInfo icon={<FiMail className="text-[#23D3EE]" />} title="Email" details="rafikakhatun607@gmail.com" />
                <ContactInfo icon={<FiPhone className="text-[#23D3EE]" />} title="Phone" details="(+91) 9330381471" />
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-white font-semibold mb-6">Connect With Me</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<FaLinkedin />} link="#" />
                <SocialIcon icon={<FaFacebook />} link="#" />
                <SocialIcon icon={<FaGithub />} link="#" />
                <SocialIcon icon={<FaYoutube />} link="#" />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative h-full"
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="h-full bg-white/5 backdrop-blur-md border border-[#23D3EE]/50 p-10 rounded-3xl space-y-6 hover:border-[#23D3EE]/80 transition-all duration-500 hover:shadow-[0_0_40px_rgba(35,211,238,0.3)] group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <InputField label="Name" name="user_name" type="text" placeholder="Your Name" />
                  <InputField label="Email" name="user_email" type="email" placeholder="Your Email" />
                </div>


                <div className="flex flex-col gap-2">
                  <label className="text-gray-400 text-sm ml-1 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Your Message"
                    className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#23D3EE] focus:ring-1 focus:ring-[#23D3EE] transition-all duration-300 placeholder:text-gray-600 resize-none shadow-inner"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                disabled={loading}
                className="w-full py-4 mt-4 bg-[#23D3EE] text-[#030014] font-black rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(35,211,238,0.4)] hover:shadow-[0_0_35px_rgba(35,211,238,0.6)] hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50  tracking-wide"
              >
                {loading ? "Sending..." : "Send Message"} <FiSend className="stroke-[3px]" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Sub-components
const ContactInfo = ({ icon, title, details }) => (
  <div className="flex items-center gap-5 group/info">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl border border-white/10 group-hover/info:border-[#23D3EE]/50 group-hover/info:shadow-[0_0_15px_rgba(35,211,238,0.2)] transition-all duration-300">
      {icon}
    </div>
    <div>
      <p className="text-white font-bold text-lg leading-tight">{title}</p>
      <p className="text-gray-400 text-sm mt-1">{details}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon, link }) => (
  <a href={link} className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white text-xl border border-white/10 hover:bg-[#23D3EE] hover:text-black hover:border-[#23D3EE] transition-all duration-300 hover:shadow-[0_0_20px_rgba(35,211,238,0.4)]">
    {icon}
  </a>
);

const InputField = ({ label, name, type, placeholder }) => (
  <div className="flex flex-col gap-2 w-full">
    <label className="text-gray-400 text-sm ml-1 font-medium">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-[#23D3EE] focus:ring-1 focus:ring-[#23D3EE] transition-all duration-300 placeholder:text-gray-600 shadow-inner w-full"
      required
    />
  </div>
);

export default Contact;