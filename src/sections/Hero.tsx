import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { Link } from "react-scroll";
import Button from "../components/Button";
import hero_img from "../image/hero_img.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute top-20 -left-32 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-70 animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-32 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-70 animate-pulse-slow"></div>

      <div className="section-container">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-accent mb-2">
                Hello, I'm
              </h2>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Zohaib Ali
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
           Front-End Developer
            </motion.h2>

            <motion.p
              className="text-gray-400 text-lg mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Passionate about building responsive, user-focused applications with React and modern front-end tools — now expanding into full-stack development to deliver complete web solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/cv.pdf";
                  link.download = "Zohaib_Ali_CV.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download CV
              </Button>
              <Button variant="secondary">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                >
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="md:col-span-2 flex justify-center">
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <img
                src={hero_img}
                alt="Zohaib Ali"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
            <ArrowDownCircle size={36} className="text-accent" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
