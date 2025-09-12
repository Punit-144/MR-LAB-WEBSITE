import Heading from "../components/Heading";
import ProjectCardBlock from "../components/ProjectCardBlock";
import { projects } from "../data/project";

export default function Projects() {
  return (
    <div
      className="w-full min-h-fit bg-light_bg flex flex-col gap-8"
      id="project"
    >
      <Heading heading="Projects" />
      <section className="w-[90%] md:w-[80%] flex flex-col gap-8 md:gap-0 md:flex-row items-start justify-between mx-auto">
        <div className="--menu w-[100%]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4 ">
          {projects.map((project, index) => (
            <ProjectCardBlock
              category={project.category}
              key={index}
              img={project.img}
              details={project.details}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
