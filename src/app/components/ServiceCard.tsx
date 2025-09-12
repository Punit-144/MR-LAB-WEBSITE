import Image from "next/image";

export default function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 flex flex-col items-center gap-4 text-center">
       <Image src={icon} alt={title} width={64} height={64} />
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}










































