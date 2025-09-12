import Image from "next/image";
import { motion } from "framer-motion";
interface Props {
  img: string;
  name: string;
}
export default function ProjectCard({ img, name }: Props) {
  return (
    <div className="w-full">
      <motion.section
        className="w-full aspect-[500/333] bg-dark_bg rounded-[6px] md:rounded-[22px] overflow-hidden "
        initial={{ opacity: 0, translateX: -30 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={`/${img}`}
          alt={name}
          width={400}
          height={300}
          className="w-full h-full"
          priority
        />
      </motion.section>
      <h1 className="font-medium text-xs md:text-sm w-full mx-auto text-center mt-4">
        {name}
      </h1>
    </div>
  );
}
