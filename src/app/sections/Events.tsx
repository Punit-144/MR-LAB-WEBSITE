import ActivityCard from "../components/ActivityCard";
import Heading from "../components/Heading";
import { events } from "../data/events";
import Image from "next/image";
export default function Events() {
  return (
    <div
      className="w-[90%] md:w-[80%] mx-auto flex flex-col gap-8"
      id="activity"
    >
      <Heading heading="Events" />
      <section className="flex flex-col gap-10 md:gap-16 lg:gap-20">
        <div className="scrolling-wrapper-flexbox gap-8">
          {events.map((activity, index) => (
            <ActivityCard
              key={index}
              index={index}
              activity={activity}
              projectCard={true}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
