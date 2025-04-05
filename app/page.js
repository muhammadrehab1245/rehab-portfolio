"use client";
import Navbar from "@/components/Navbar";
import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Description,
  Field,
  Input,
  Label,
  Textarea,
} from "@headlessui/react";
import { FaStackExchange, FaSquareGithub } from "react-icons/fa6";
import {
  FaPiedPiper,
  FaDatabase,
  FaDemocrat,
  FaLinkedin,
} from "react-icons/fa";
import { CiCircleChevDown, CiMail, CiFileOn } from "react-icons/ci";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { SiFrontendmentor } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Home() {
  const techStack = [
    {
      name: "Javascript",
      image: "js.png",
    },
    {
      name: "React JS",
      image: "react.png",
    },
    {
      name: "Next JS",
      image: "next.png",
    },
    {
      name: "Tailwind CSS",
      image: "tailwind.png",
    },
    {
      name: "Vanilla CSS",
      image: "css.png",
    },
    {
      name: "HTML",
      image: "html.png",
    },
    {
      name: "Express JS",
      image: "express.png",
    },
    {
      name: "Node JS",
      image: "node.png",
    },
    {
      name: "Mongo DB",
      image: "mongo.png",
    },
  ];

  const projects = [
    {
      title: "Food App Made By Chakra UI",
      description:
        "FoodApp – A sleek React-based food ordering app with Chakra UI, allowing users to add items to cart and checkout seamlessly.",
      image: "foodapppic.png",
      github: "https://github.com/muhammadrehab1245/Food-App/tree/master",
      demo: "https://foodorderappui.netlify.app/",
    },
    {
      title: "Netflix Clone",
      description:
        "Netflix Clone – A React + MUI based streaming UI clone with category-wise movie listings, separate tabs for TV shows, and favorite-marking functionality.",
      image: "netflix.png",
      github: "https://github.com/muhammadrehab1245/Netflix-clone",
      demo: "https://foodorderappui.netlify.app/",
    },

    {
      title: "Spotify Clone",
      description:
        "Spotify Clone – A fully functional HTML/CSS/JS music player with dynamic playlist rendering, real-time song progress tracking, play/pause controls, and next/prev song navigation.",
      image: "spotify.png",
      github: "  https://github.com/muhammadrehab1245/Spotify-Clone",
      demo: "https://myownspotifyclone.netlify.app/clone",
    },
    {
      title: "Expense Tracker",
      description:
        "Expense Tracker – A React + MUI based personal finance tracker to monitor income and expenses with a clean, responsive UI.",
      image: "expense.png",
      github: "https://github.com/muhammadrehab1245/Expense-Tracker",
      demo: "https://ownexpensetracker.netlify.app/",
    },

    {
      title: "Shortly UI",
      description:
        "Built from scratch without any framework, featuring a hamburger menu, responsive design, and section-based layout for features and stats.",
      image: "shortly.png",
      github: "https://github.com/muhammadrehab1245/Shortly.github.io",
      demo: "   https://fylolandpg.netlify.app/landingpage",
    },

    {
      title: "Digital Clock",
      description:
        "Digital Clock – A real-time HTML/CSS/JS clock with toggle support between 12-hour and 24-hour formats, updating every second.",
      image: "digitalclock.png",
      github:
        "https://github.com/muhammadrehab1245/Digital-Clock-Using-HTML-CSS-and-JS",
      demo: "       https://digitalclokk.netlify.app/clock",
    },
  ];
  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Navbar />
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 p-12  ">
          <div className="flex flex-col order-2  lg:order-1 justify-center text-[#5b22c5] ">
            <h1 className="text-xl font-semibold text-gray-400">
              <div>Hi I am</div> Muhammad Rehab
            </h1>
            <p className="text-4xl font-bold mt-2">MERN Stack Developer</p>
            <p className="mt-4 text-lg">
              Creating Flawless and Immersive Experiences
            </p>
            <div className="flex mt-6 gap-4">
              <Button className="px-6 cursor-pointer py-3 bg-[#5a31a6] text-white rounded-lg">
                Let’s Connect
              </Button>
              <Button className="px-6 py-3 cursor-pointer border border-[#5a31a6] text-[#5b22c5] rounded-lg">
                Download CV
              </Button>
            </div>
            <div className="mt-8 w-full grid grid-cols-3 gap-6 border text-[#5b22c5] border-[#5a31a6] bg-gray-900 text-md">
              <div className="flex flex-col items-center justify-center border-r border-[#5a31a6] py-3">
                <p className="font-bold">1+ Year</p>
                <p className="text-white">Experience</p>
              </div>
              <div className="flex flex-col justify-center items-center border-r border-[#5a31a6] py-2">
                <p className="font-bold text-center text-sm">
                  Multiple Successful
                </p>
                <p className="text-white text-center text-sm">
                  Software Projects
                </p>
              </div>
              <div className="flex flex-col justify-center items-center py-2">
                <p className="font-bold text-center text-sm">
                  Collaboration with
                </p>
                <p className="text-white text-center text-sm">
                  Cross-Functional Teams
                </p>
              </div>
            </div>
          </div>

          <div className="border z-10 order-1 lg:order-2 bg-gray-900 mx-auto w-[450px] h-[430px] rounded-full overflow-hidden flex justify-center items-center">
            <img
              width={500} // Even if large
              height={500}
              className="object-cover"
              src="mypic.png"
              alt="Zahoor Ahmad"
            />
          </div>
        </div>

        {/* Services */}

        <div className="grid grid-cols-1 p-12 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Full Stack Web Development */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <FaStackExchange className="mx-auto" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Full Stack Development
            </h3>
            <p className="text-gray-400">
              Building scalable, end-to-end web applications using MERN stack
              with clean architecture.
            </p>
          </div>

          {/* API Development */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <FaPiedPiper className="mx-auto" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              API Development
            </h3>
            <p className="text-gray-400">
              Designing efficient REST APIs & integrating third-party services
              for seamless functionality.
            </p>
          </div>

          {/* Database Design */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <FaDatabase className="mx-auto" />
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Database Management
            </h3>
            <p className="text-gray-400">
              Creating optimized MongoDB schemas and handling large datasets
              efficiently.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <SiFrontendmentor className="mx-auto" /> {/* React icon */}
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-400">
              Building dynamic, responsive UIs using React.js with focus on UX &
              performance.
            </p>
          </div>

          {/* Deployment */}
          <div className="bg-gray-900 rounded-lg p-6 text-center hover:shadow-lg transition">
            <div className="text-[#5b22c5] mb-4 text-4xl">
              <AiOutlineDeploymentUnit className="mx-auto" />
              {/* Cloud icon */}
            </div>
            <h3 className="text-white font-bold text-xl mb-3">
              Deployment & Hosting
            </h3>
            <p className="text-gray-400">
              Deploying applications on Heroku, Vercel, Netlify & integrating
              CI/CD workflows.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="text-center space-y-4">
          <h1 className="font-bold text-4xl">About Me</h1>
          <p className="text-gray-400">
            React/Next JS Developer and MERN Stack Developer
          </p>
        </div>

        <div className="flex mt-8">
          <div className="border z-10 grid-cols-6 bg-gray-900 mx-auto w-[32%] h-[400px] rounded-t-full overflow-hidden  flex justify-center items-center">
            <img
              width={400} // Even if large
              height={400}
              className="object-cover"
              src="mypic.png"
              alt="Zahoor Ahmad"
            />
          </div>
          <div className="w-[50%] space-y-4 text-gray-400">
            <p>
              I am a dedicated and detail-oriented MERN Stack Developer,
              passionate about creating efficient, scalable, and user-centric
              digital solutions. With hands-on experience in MongoDB,
              Express.js, React, and Node.js, I craft dynamic web applications
              that deliver seamless user experiences. My expertise extends to
              modern frameworks such as Next.js, enabling me to build
              performant, SEO-friendly, and responsive applications.
            </p>
            <p>
              Throughout my professional journey, I have contributed to diverse
              industry projects, developing interactive websites and robust web
              applications tailored to business objectives and end-user
              expectations. I utilize best practices, clean coding standards,
              and data-driven methodologies to ensure every project is
              efficient, maintainable, and impactful.
            </p>
            <p>
              My skills include frontend and backend development, RESTful API
              integration, state management, and database optimization—all
              ensuring smooth functionality and enhanced usability. I believe
              effective development is not just about code; it involves solving
              real-world problems, improving performance, and creating
              meaningful user interactions.
            </p>
            <Button className="px-6 cursor-pointer py-3 bg-[#5a31a6] text-white rounded-lg">
              Let’s Connect
            </Button>
          </div>
        </div>

        <div className="mt-10">
          <Swiper
            spaceBetween={4}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            direction="horizontal"
            className="mySwiper"
          >
            {techStack.map((tech, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="flex flex-col gap-y-3 rounded-lg shadow-lg shadow-[#5b22c5] h-[190px] w-[80%] bg-gray-900 border-2 border-[#5a31a6] items-center justify-center">
                  <img
                    className="w-[140px] aspect-6/4"
                    src={tech.image}
                    alt={tech.name}
                  />
                  <h1
                    style={{ textShadow: "3px 2px #5709e8" }}
                    className="text-white text-xl  "
                  >
                    {tech.name}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <section className="mt-10">
            <h2 className="text-4xl font-bold mb-4 text-center">My Projects</h2>

            <div className="max-w-[80%] mx-auto mt-14 space-y-4">
              {projects.map((project, index) => (
                <Disclosure key={index} as="div">
                  {({ open }) => (
                    <div
                      className={`rounded-xl p-4 transition-colors duration-300 ${
                        open ? "bg-[#5a31a6]" : "bg-gray-900"
                      }`}
                    >
                      <DisclosureButton className="group flex w-full items-center justify-between">
                        <span className="text-lg font-medium text-white group-hover:text-white/80">
                          {project.title}
                        </span>
                        <CiCircleChevDown
                          className={`size-6 transition-transform duration-300 ${
                            open ? "rotate-180" : ""
                          } fill-white/60 group-hover:fill-white/50`}
                        />
                      </DisclosureButton>

                      <DisclosurePanel className="mt-4">
                        <div className="bg-gray-900 text-white p-4 rounded-xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="rounded-md mb-3 w-full h-[500px]"
                          />
                          <p className="text-white text-sm mb-3">
                            {project.description}
                          </p>
                          <div className="mt-2 flex gap-4 items-center">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="flex items-center gap-2 px-3 py-2 bg-[#5a31a6] text-white rounded-lg">
                                Github Repository <FaSquareGithub size={20} />
                              </Button>
                            </a>
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="flex items-center gap-2 px-3 py-2 bg-[#5a31a6] text-white rounded-lg">
                                Demo Link <FaDemocrat size={20} />
                              </Button>
                            </a>
                          </div>
                        </div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </section>

          <div className="max-w-[70%] mx-auto mt-14 space-y-4">
            <div className="text-center mt-4  space-y-3">
              <h2 className="text-4xl font-bold ">Contact Me</h2>
              <p className="text-gray-400">Reach Out and Connect with Me!</p>
            </div>
            <div className="grid grid-cols-2 mt-3 gap-y-2.5 gap-x-5">
              <Field>
                <Input
                  placeholder="First Name"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900  px-3 py-3 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
                />
              </Field>
              <Field>
                <Input
                  placeholder="Last Name"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900  px-3 py-3 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
                />
              </Field>
              <Field>
                <Input
                  placeholder="Enter Email"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900  px-3 py-3 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 "
                />
              </Field>
              <Field className="row-span-2">
                <Textarea
                  className={
                    "mt-3 block w-full resize-none rounded-lg border-none bg-gray-900 py-3 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  }
                  rows={5}
                  placeholder="Project Details"
                />
              </Field>
              <Field>
                <Input
                  placeholder="Phone Number"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900 py-3 px-3 text-sm/6 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                />
              </Field>
              <Field>
                <Input
                  placeholder="Enter Address"
                  className="mt-3 block w-full rounded-lg border-none bg-gray-900 py-3 px-3 text-sm/6 text-white
                  focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                />
              </Field>
              <div className=" flex mt-3 justify-end">
                <Button className="px-1 cursor-pointer w-[17%] py-1 bg-[#5a31a6] text-white rounded-lg">
                  Send
                </Button>
              </div>
            </div>
          </div>

          <footer className="tracking-wide flex flex-col justify-center bg-gray-900 mt-16 pt-12 pb-4">
            <div className="flex justify-center gap-x-5">
              <a
                href="https://www.linkedin.com/in/muhammad-rehab-167b90216/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
              <a
                href="https://github.com/muhammadrehab1245?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaSquareGithub size={32} />
              </a>
              <a href="mailto:rehab123335@gmail.com">
                <CiMail size={32} />
              </a>
              <a href="Muhammad Rehab_Resume.pdf" download>
                <CiFileOn size={32} />
              </a>
            </div>

            <div className="border-t text-center pt-4 mt-8">
              <p className="text-gray-400 text-sm">
                Designed By Muhammad Rehab | React/Mern Stack Developer
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
