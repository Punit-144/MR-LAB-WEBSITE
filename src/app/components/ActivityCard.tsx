import Image from "next/image";
export default function ActivityCard({
  activity,
  index,
  projectCard,
}: {
  activity: { img: string; name: string; description?: string };
  index: number;
  projectCard?: boolean;
}) {
  return (
    <div className="flex flex-col w-full md:w-[33%] gap-2 md:gap-6 h-full bg-white  card">
      <div className={` w-full rounded-xl overflow-hidden `}>
        <Image
          src={`/${activity.img}`}
          alt={activity.name}
          height={500}
          width={600}
          className="w-full aspect-[500/333]"
        />
      </div>
      <section className={`w-full md:h-full`}>
        <div className={`w-full`}>
          <h1
            className={`text-xl md:text-lg lg:text-2xl font-primary font-bold text-primary mb-4 md:mb-2 ${
              projectCard && "text-center"
            }`}
          >
            {activity.name}
          </h1>
          {!projectCard && (
            <p className="text-xs md:text-xs -mt-4 md:mt-0 text-black md:leading-6 md:text-justify">
              {activity.description}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
