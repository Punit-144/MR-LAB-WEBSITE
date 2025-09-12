import Image from "next/image";

export default function CourseCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white">
      {/* Image with 3:2 aspect ratio and hover effect */}
      <div className="w-full aspect-[3/2] relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}
// import Image from "next/image";

// export default function CourseCard({
//   title,
//   description,
//   image,
// }: {
//   title: string;
//   description: string;
//   image: string;
// }) {
//   return (
//     <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
//       <Image
//         src={image}
//         alt={title}
//         width={600}
//         height={300}
//         className="w-full h-40 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
//         <p className="text-sm text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// }
