import { motion } from "framer-motion";
export default function Heading({
  heading,
  small,
}: {
  heading: string;
  small?: boolean;
}) {
  return (
    <motion.div
      className="w-full flex items-center justify-center gap-4 lg:my-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div
        className={`--line bg-primary h-[2px] ${
          small ? "w-0 md:w-8 lg:w-12" : "w-8 md:w-16 lg:w-32"
        }`}
      ></div>
      <h1
        className={`${
          small
            ? "text-lg md:text-xl lg:text-2xl text-primary"
            : "text-2xl md:text-3xl lg:text-4xl"
        } font-bold`}
      >
        {heading}
      </h1>
      <div
        className={`--line bg-primary h-[2px] ${
          small ? "w-0 md:w-8 lg:w-12" : "w-8 md:w-16 lg:w-32"
        }`}
      ></div>
    </motion.div>
  );
}
