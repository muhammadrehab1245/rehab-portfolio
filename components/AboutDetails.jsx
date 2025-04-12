import { Button } from "@headlessui/react";
import React from "react";

const AboutDetails = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-8 px-4">
      {/* Image Container */}
      <div className="relative z-10 bg-gray-900 w-72 h-72 md:w-[32%] md:h-[400px] rounded-t-full overflow-hidden flex justify-center items-center">
        <img
          width={400}
          height={400}
          className="object-cover w-full h-full"
          src="mypic.png"
          alt="Muhammad Rehab"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-[50%] space-y-4 text-gray-400 text-sm sm:text-base">
        <p>
          I am a dedicated and detail-oriented MERN Stack Developer, passionate
          about creating efficient, scalable, and user-centric digital
          solutions. With hands-on experience in MongoDB, Express.js, React, and
          Node.js, I craft dynamic web applications that deliver seamless user
          experiences. My expertise extends to modern frameworks such as
          Next.js, enabling me to build performant, SEO-friendly, and responsive
          applications.
        </p>
        <p>
          Throughout my professional journey, I have contributed to diverse
          industry projects, developing interactive websites and robust web
          applications tailored to business objectives and end-user
          expectations. I utilize best practices, clean coding standards, and
          data-driven methodologies to ensure every project is efficient,
          maintainable, and impactful.
        </p>
        <p>
          My skills include frontend and backend development, RESTful API
          integration, state management, and database optimization—all ensuring
          smooth functionality and enhanced usability. I believe effective
          development is not just about code; it involves solving real-world
          problems, improving performance, and creating meaningful user
          interactions.
        </p>
        <Button className="px-6 py-3 bg-[#5a31a6] text-white rounded-lg">
          <a
            href="https://www.linkedin.com/in/muhammad-rehab-167b90216/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline"
          >
            Let’s Connect
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AboutDetails;
