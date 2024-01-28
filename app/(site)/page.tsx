"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./contact/contact";
import { PortableText } from "@portabletext/react";
import { getProjects } from "@/sanity/sanity-utils";

interface Project {
  _id: string;
  name: string;
  url: string;
  image: string;
  content: any;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectData = await getProjects();
      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  const goToNextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
          Amir
        </span>
        !
        <img
          className="-mt-8 w-36 h-36 float-right rounded-full"
          src="../images/IMG_0909.JPG"
          alt="Medium avatar"
        />
      </h1>

      <p className="mt-3 text-xl text-gray-600">
        Accomplished and dynamic professional with a proven track record of
        innovative web development, strategic business operations, and advanced
        problem-solving. Expert in translating complex business requirements
        into technical solutions, delivering high-quality projects that enhance
        organizational performance. Renowned for driving operational excellence,
        leveraging extensive experience in API integration, and cultivating
        user-centric experiences that propel leading organizations to the
        forefront of their industries. A collaborative leader and mentor
        committed to fostering team growth and championing agile methodologies
        to accelerate project delivery and achieve exceptional results.
      </p>

      <h2 id="projects" className="mt-24 font-bold text-gray-700 text-3xl">
        My Projects
      </h2>

      <div className="mt-5 relative">
        <div className="relative flex items-center justify-between">
          <div
            className="cursor-pointer text-xl font-bold"
            onClick={goToPrevProject}
          >
            &lt;
          </div>
          <div className="flex-grow">
            <Link
              href={`${projects[currentIndex]?.url}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {projects[currentIndex]?.image && (
                <Image
                  src={projects[currentIndex]?.image}
                  alt={projects[currentIndex]?.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}

              <div className="flex items-center justify-center mt-2 font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                {projects[currentIndex]?.name}
              </div>
              <div className="text-lg text-gray-700 mt-5">
                <PortableText value={projects[currentIndex]?.content} />
              </div>
            </Link>
          </div>
          <div
            className="cursor-pointer text-xl font-bold"
            onClick={goToNextProject}
          >
            &gt;
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
