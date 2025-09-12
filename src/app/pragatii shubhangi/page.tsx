"use client";

import PragatiiContent from "./PragatiiContent";
import PragatiiNavbar from "./PragatiiNavbar";

export default function PragatiiPage() {
  return (
    <main className="w-full">
      {/* You can replace this with your content later */}
      <PragatiiContent/>
      <PragatiiNavbar/>
      <h1 className="text-center text-4xl font-bold mt-20">PRAGATII Page</h1>
      <p className="text-center mt-4">This is a placeholder for PRAGATII activities.</p>
    </main>
  );
}


// "use client";

// import PragatiiContent from "./PragatiiContent";
// import PragatiiNavbar from "./PragatiiNavbar";

// export default function PragatiiPage() {
//   return (
//     <main className="w-full pt-32"> {/* Added padding-top to avoid navbar overlap */}
//       <PragatiiNavbar />
//       <PragatiiContent />
//       <h1 className="text-center text-4xl font-bold mt-20">PRAGATII Page</h1>
//       <p className="text-center mt-4">This is a placeholder for PRAGATII activities.</p>
//     </main>
//   );
// }
