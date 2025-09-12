import Heading from "../components/Heading";
import { team } from "../data/team";
import TeamCard from "../components/TeamCard";
import Marquee from "react-fast-marquee";

export default function Team() {
  return (
    <section id="team" className="w-full relative pt-28 pb-12 z-10">
      {/* Fading top and bottom overlays */}
      <div className="w-full h-[40%] bg-gradient-to-b from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] absolute top-0 left-0 z-0"></div>
      <div className="w-full h-[20%] bg-gradient-to-t from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)] absolute bottom-0 left-0 z-0"></div>

      {/* Main content wrapper */}
      <div className="w-[80%] mx-auto flex flex-col gap-8 relative z-10">
        <Heading heading="Team" />
        <div className="flex items-center justify-center w-full gap-8">
          {team.map(
            (member, index) =>
              member.type === "core" && (
                <TeamCard
                  key={index}
                  name={member.name}
                  img={member.img}
                  designation={member.designation}
                  position={member.position}
                />
              )
          )}
        </div>

        <Heading heading="Research & Development" small />
        <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
          {team.map(
            (member, index) =>
              member.type === "rnd" && (
                <TeamCard
                  key={index}
                  name={member.name}
                  img={member.img}
                  designation={member.designation}
                  small
                />
              )
          )}
        </div>

        <Heading heading="Design Team" small />
        <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
          {team.map(
            (member, index) =>
              member.type === "design" && (
                <TeamCard
                  key={index}
                  name={member.name}
                  img={member.img}
                  designation={member.designation}
                  small
                />
              )
          )}
        </div>

        <Heading heading="Development Team" small />
        <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
          {team.map(
            (member, index) =>
              member.type === "development" && (
                <TeamCard
                  key={index}
                  name={member.name}
                  img={member.img}
                  designation={member.designation}
                  small
                />
              )
          )}
        </div>

        <Heading heading="Animation + VFX" small />
        <div className="flex flex-wrap justify-center items-center w-full md:w-[80%] lg:w-[70%] mx-auto gap-4">
          {team.map(
            (member, index) =>
              member.type === "animation" && (
                <TeamCard
                  key={index}
                  name={member.name}
                  img={member.img}
                  designation={member.designation}
                  small
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
