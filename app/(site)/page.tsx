import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div>
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
      Accomplished and dynamic professional with a proven track record of innovative web development, strategic business operations, and advanced problem-solving. Expert in translating complex business requirements into technical solutions, delivering high-quality projects that enhance organizational performance. Renowned for driving operational excellence, leveraging extensive experience in API integration, and cultivating user-centric experiences that propel leading organizations to the forefront of their industries. A collaborative leader and mentor committed to fostering team growth and championing agile methodologies to accelerate project delivery and achieve exceptional results.
      </p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl"> My Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            // needs to be changed
            href={`${project.url}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}

            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
