import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Heading from "../components/Heading";
import { projects } from "../data/project";
import { work } from "../data/work";
import ProjectCard from "../components/ProjectCard";
import ProjectCardBlock from "../components/ProjectCardBlock";
interface Props {
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}
export default function Discover({ activeTab, setActiveTab }: Props) {
  // const [activeTab, setActiveTab] = useState(0);
  const [projectTab, setProjectTab] = useState(0);
  useEffect(() => {
    if (activeTab === 0 || activeTab === 1) {
      setProjectTab(0);
    }
  }, [activeTab]);
  return (
    <div
      className="w-full min-h-fit bg-light_bg flex flex-col gap-8"
      id="focus"
    >
      <Heading heading="Discover" />
      <div className="w-[80%] md:w-[30%]  lg:w-[20%] mx-auto p-2  rounded-full shadow-xl border-[1px] border-[#aeaeae40] text-xs md:text-sm">
        <button
          className={`w-[50%]  h-10 md:h-12 px-4 py-1 font-medium rounded-full ${
            activeTab === 0 && "bg-dark_bg text-white"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Technology
        </button>
        <button
          className={`w-[50%] h-10 md:h-12 px-4 py-1 font-medium rounded-full ${
            activeTab === 1 && "bg-dark_bg text-white"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Focus Area
        </button>
      </div>
      <section className="w-[90%] md:w-[80%] flex flex-col gap-8 md:gap-0 md:flex-row items-start justify-between mx-auto">
        <div
          className={`--menu w-[100%] h-full grid ${
            activeTab === 0
              ? "grid-cols-1 md:grid-cols-4"
              : "grid-cols-2 md:grid-cols-4"
          } gap-6 md:gap-12 px-12 `}
        >
          {work.map(
            (project, index) =>
              project.id === activeTab && (
                <ProjectCard
                  name={project.name}
                  key={index}
                  img={project.img}
                />
              )
          )}
        </div>
      </section>
    </div>
  );
}
