"use client";
import Navbar from "@/components/Navbar";
import { motion } from 'framer-motion'
import Bio from "@/components/Bio";
import Services from "@/components/Services";
import About from "@/components/About";
import AboutDetails from "@/components/AboutDetails";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {


  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <Bio />
        {/* Services */}

        <motion.div
          className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 100, x: 90 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <Services />

        </motion.div>

        {/* About Section */}

        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 100, x: 90 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <About />

        </motion.div>

        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 100, x: 90 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <AboutDetails />
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 100, x: 90 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >


          <Stack />
        </motion.div>

        <motion.section
          className="mt-10"
          initial={{ opacity: 0, y: 100, x: 90 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>

          <Projects />
        </motion.section>

        <motion.div
          className="max-w-[70%] mx-auto mt-14 space-y-4"
          initial={{ opacity: 0, y: 100, x: 90 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >

          <div className="text-center mt-4  space-y-3">
            <h2 className="text-4xl font-bold ">Contact Me</h2>
            <p className="text-gray-400">Reach Out and Connect with Me!</p>
          </div>
          <ContactForm />
        </motion.div>

        <motion.footer className="flex flex-col justify-center bg-gray-900 mt-16 pt-12 pb-4">
    <Footer/>
          <div className="border-t text-center pt-4 mt-8">
            <p className="text-gray-400 text-sm">
              Designed By Muhammad Rehab | React/Mern Stack Developer
            </p>
          </div>
        </motion.footer>
      </div>
      {/* </div> */}

    </>
  );
}
