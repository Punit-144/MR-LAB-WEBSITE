import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Carousel from "../components/Carousel";
import { news } from "../data/news";
import Image from "next/image";
export default function News() {
  const [selectedNews, setSelectedNews] = useState(0);

  return (
    <div
      className="w-full min-h-[70vh] h-fit bg-light_bg flex flex-col gap-8"
      id="events"
    >
      <Heading heading="News" />
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row justify-center h-fit gap-8 md:gap-0">
        <section className="flex flex-col w-full lg:w-[35%]  pr-4">
          <h1 className="text-primary text-lg md:text-xl lg:text-2xl font-medium">
            News
          </h1>
          <ul className="flex flex-col gap-4 mt-4">
            {news.map((news, index) => (
              <li
                className={`text-xs md:text-sm border-l-[2px] border-primary pl-2  cursor-pointer hover:bg-black/10 hover:text-black py-2 transition-all duration-100 ease-linear font-medium ${
                  selectedNews === index && "bg-primary text-white"
                }`}
                key={index}
                onClick={() => setSelectedNews(index)}
              >
                {news.title}
              </li>
            ))}
          </ul>
        </section>
        <section className="w-full md:w-[50%] h-full flex items-center justify-end">
          <div className="w-full md:w-[80%] h-full rounded-xl shadow-lg border-2 border-primary/40 overflow-hidden">
            <Image
              src={`/${news[selectedNews].img}`}
              alt=""
              width={700}
              height={700}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
