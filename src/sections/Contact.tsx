import React, { useState, useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    setIsSubmitting(true);

    // EmailJS send
    emailjs
      .send(
        serviceID,
        templateID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setIsSubmitting(false);
        alert("Failed to send message. Please try again.");
      });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "mianzohaibali123@gmail.com",
      link: "mailto:mianzohaibali123@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+92 312 7848251",
      link: "tel:+923127848251",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "Islamabad, Pakistan",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      url: "https://github.com/Zohaib251",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/Muhammad-Zohaib-Ali-/",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-darker">
      <div className="section-container">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to contact me!"
        />

        <div className="grid md:grid-cols-5 gap-12 mt-12">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1 text-accent">{info.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-accent transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-300">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-darkgray hover:bg-accent p-3 rounded-full transition-all duration-300 text-white flex items-center justify-center"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              {submitSuccess && (
                <motion.div
                  className="bg-success/20 border border-success text-success p-4 rounded-md mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-dark border border-darkgray focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md bg-dark border border-darkgray focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md bg-dark border border-darkgray focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md bg-dark border border-darkgray focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-white"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="relative scale-[0.85] origin-top-left h-[65px]">
                    <ReCAPTCHA
                      sitekey={siteKey}
                      ref={recaptchaRef}
                      theme="dark"
                      className="w-1"
                      onChange={(token) => setCaptchaToken(token)}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="flex items-center justify-center w-full sm:w-auto"
                  variant="primary"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
