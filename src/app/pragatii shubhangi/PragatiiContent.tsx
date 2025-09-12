// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// // Add this interface outside the component
// interface FAQItem {
//   question: string;
//   answer: string;
// }

// // Add this FAQ data outside the component
// const faqData: FAQItem[] = [
//   {
//     question: "What is Hackathon PRAGATII?",
//     answer: "It Is The Program For Acceleration And Growth In AI And XR Fusion Technology Development For Innovative Ideas - organised by iHub Drishti Foundation, IIT Jodhpur, in association with Technology Innovation and Start-up Center (TISC), IIT Jodhpur. The Hackathon was launched on 1st August 2023 by Meity Secretary Shri Aklesh Kumar Sharma and IIT Jodhpur Director and Chairman, iHub Drishti Prof. Sanatnu Chaudhury."
//   },
//   {
//     question: "Who can participate in this event?",
//     answer: "The Hackathon Is open to early-stage or growth-stage startups that are focused on developing solutions in the mentioned area or groups of students/innovators (Minimum Team Size - 2) who are intended towards startups/entrepreneurship."
//   },
//   {
//     question: "What are the Themes of Hackathon?",
//     answer: "The Submitted Proposal should be aligned with at least one application domain and one technology domain. The Application domains are: Digital Pathology, Tele-Diagnosis, Experiential Marketing, Literature and Culture. The Technology areas are: Generative AI, Dependable AI, Xtended Reality, AI and XR Fusion."
//   },
//   {
//     question: "What benefits can I get from participating?",
//     answer: "The winners of the Hackathon will receive a total prize money of INR 10 Lakh. First prize will be INR 5 Lakh, Second prize will be INR 3 Lakh and third prize will be INR 2 Lakh. Additionally, winners may be considered for preincubation/Incubation, seed support, CHANAKYA fellowship, and PRAYAS program."
//   },
//   {
//     question: "What are the important dates and timelines?",
//     answer: "Registration started on August 8, 2023. The registration deadline is September 22, 2023. Primary screening results will be announced on September 29, 2023. First round evaluation (pitch deck) will be held on October 9-10, 2023. The final evaluation and prototype demonstration will be on December 13-14, 2023."
//   }
// ];

// const PragatiiContent = () => {
//   const [openFAQ, setOpenFAQ] = useState<number | null>(null);

//   // Add this inside your component
//   const toggleFAQ = (index: number) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   return (
//     <main className="flex-grow pt-24 min-h-screen bg-white text-black">
//       {/* Hero Section with Background Image */}
//       <section id="home" className="relative min-h-screen flex items-center justify-center py-16">
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 bg-[url('/hackathon-bg.jpg')] bg-cover bg-center bg-no-repeat"
//           style={{ filter: 'brightness(0.7)' }} // Darkens the background image for better text visibility
//         />
        
//         {/* Content Overlay */}
//         <div className="relative z-10 container mx-auto px-4 text-center text-white">
//           <div className="mb-8">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">iHub DRISHTI FOUNDATION, IIT Jodhpur</h2>
//           </div>

//           <div className="mb-12">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">LAUNCHES HACKATHON</h1>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">PRAGATII Hackathon</h2>
//             <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8">10 March,2025</h2>
//             <h3 className="text-2xl md:text-3xl mb-6">Lighting the Way to Technological Advancement</h3>
//             <p className="text-xl md:text-2xl">PROGRAM FOR ACCELERATION AND GROWTH IN AI AND XR FUSION TECHNOLOGY DEVELOPMENT FOR INNOVATIVE IDEAS</p>
//           </div>

//           <div className="flex justify-center gap-4 flex-wrap">
//             <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">#PRAGATII</span>
//             <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">#Hackathon</span>
//             <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">#10 LAKH PRIZE MONEY</span>
//             <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">#Game</span>
//             <span className="bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">#ihub-Drishti</span>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8">Welcome to iHub Drishti Foundation</h2>
//           <div className="space-y-6 text-lg">
//             <p>
//               iHub Drishti Foundation, the Technology Innovation Hub (TIH) at IIT Jodhpur focused on "Computer Vision (CV), 
//               Augmented Reality (AR), and Virtual Reality (VR)"  Technology Innovation and 
//               Start-up Center (TISC) is initiating a HACKATHON for a group of students, researchers, budding entrepreneurs 
//               and startups.
//             </p>
//             <p>
//               iHub Drishti Foundation is a Section-8, Not-for-Profit Organisation, promoted by and at the Indian Institute 
//               of Technology, Jodhpur under a National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) of the 
//               Government of India.
//             </p>
//             <p>
//               TISC is a Section-8 Company promoted by IITJ and a Govt. of India-recognized Technology Business Incubator (TBI).
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Event/Technology Areas Section */}
//       <section id="event" className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 text-center">Technology Areas</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="p-6 bg-white shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold mb-4">Artificial Intelligence</h3>
//             </div>
//             <div className="p-6 bg-white shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold mb-4">Extended Reality (XR)</h3>
//             </div>
//             <div className="p-6 bg-white shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold mb-4">Generative AI</h3>
//             </div>
//             <div className="p-6 bg-white shadow-lg rounded-lg">
//               <h3 className="text-xl font-bold mb-4">Dependable AI</h3>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Awards Section */}
//       <section id="awards" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           {/* ... awards content ... */}
//           <h2 className="text-3xl font-bold mb-8 text-center justify-center">AWARDS </h2>
//           <p className="text-center ">Prize money of Rs. 10 Lakh will be awarded based on the demonstrated prototype’s merit. </p>
//           <p className="text-center">The allocation of the prize money will be in the following manner-</p>
         
//           <div className="flex justify-center mb-8  mt-10">
//       <Image 
//         src="/awards.png" // Replace with your image path
//         alt="Awards Banner"
//         width={600} // Adjust width as needed
//         height={200} // Adjust height as needed
//         className="object-contain"
//       />
//     </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
//           <div className="max-w-3xl mx-auto space-y-4">
//             {faqData.map((faq, index) => (
//               <div 
//                 key={index}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <button
//                   className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <span className="font-semibold text-lg">{faq.question}</span>
//                   <span className={`transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}>
//                     <svg 
//                       className="w-6 h-6 text-gray-500" 
//                       fill="none" 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth="2" 
//                       viewBox="0 0 24 24" 
//                       stroke="currentColor"
//                     >
//                       <path d="M19 9l-7 7-7-7"></path>
//                     </svg>
//                   </span>
//                 </button>
//                 <div 
//                   className={`px-6 overflow-hidden transition-all duration-300 ${
//                     openFAQ === index ? 'max-h-96 py-4' : 'max-h-0'
//                   }`}
//                 >
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline Section */}
//       <section id="timeline" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-12 text-center">TIMELINE</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {timelineData.map((item, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//                 <div className="text-sm text-gray-600 mb-2">{item.date}</div>
//                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                 <p className="text-gray-700">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
//           {/* ... contact content ... */
//           <div className="flex justify-center"> 
//            <ul className="flex space-x-8 justify-center">
//            <li>
//              <a href="https://www.facebook.com/IHub-Drishti-107489811622386" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
//                </svg>
//              </a>
//            </li>
//            <li>
//              <a href="https://twitter.com/TIHihubDrishti" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
//                </svg>
//              </a>
//            </li>
//            <li>
//   <a href="mailto:arvrinfo@ihub-drishti.ai" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M1 4c0-1.104.896-2 2-2h18c1.104 0 2 .896 2 2v16c0 1.104-.896 2-2 2h-18c-1.104 0-2-.896-2-2v-16zm2 0v.511l9 6.666 9-6.666v-.511h-18zm18 2.489l-9 6.667-9-6.667v11.511h18v-11.511z"/>
//     </svg>
//   </a>
// </li>

//            <li>
//              <a href="https://www.linkedin.com/company/ihub-drishti/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
//                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
//                </svg>
//              </a>
//            </li>
//          </ul>
//          </div>
//           }
//         </div>
//       </section>
//     </main>
//   );
// };

// const timelineData = [
//   {
//     date: "1 Aug 2023",
//     title: "LAUNCH DATE",
//     description: "Official launch of PRAGATII Hackathon"
//   },
//   {
//     date: "8 Aug 2023",
//     title: "REGISTRATION START",
//     description: "Submit your registration"
//   },
//   {
//     date: "22 Sept 2023",
//     title: "REGISTRATION END",
//     description: "Registration and Final Application Submission Ends"
//   },
//   {
//     date: "29 Sept 2023",
//     title: "SCREENING RESULT",
//     description: "Primary Screening Result Declaration"
//   },
//   {
//     date: "9-10 Oct 2023",
//     title: "PITCH DECK",
//     description: "1st Round Evaluation"
//   },
//   {
//     date: "13-14 Dec 2023",
//     title: "FINAL EVALUATION",
//     description: "Demonstration of Advance Stage Prototype and Final Evaluation"
//   }
// ];

// export default PragatiiContent; 


'use client';
import { useState } from 'react';
import Image from 'next/image';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Hackathon PRAGATII?",
    answer: "It Is The Program For Acceleration And Growth In AI And XR Fusion Technology Development For Innovative Ideas - organised by iHub Drishti Foundation, IIT Jodhpur..."
  },
  {
    question: "Who can participate in this event?",
    answer: "The Hackathon is open to early-stage or growth-stage startups... Minimum Team Size - 2..."
  },
  {
    question: "What are the Themes of Hackathon?",
    answer: "Application domains: Digital Pathology, Tele-Diagnosis... Technology areas: Generative AI, Dependable AI, XR..."
  },
  {
    question: "What benefits can I get from participating?",
    answer: "Winners receive INR 10 Lakh in total prize money... Also considered for incubation, seed support, etc."
  },
  {
    question: "What are the important dates and timelines?",
    answer: "Registration: Aug 8 – Sept 22, 2023. Final eval: Dec 13–14, 2023."
  }
];

const timelineData = [
  { date: "1 Aug 2023", title: "LAUNCH DATE", description: "Official launch of PRAGATII Hackathon" },
  { date: "8 Aug 2023", title: "REGISTRATION START", description: "Submit your registration" },
  { date: "22 Sept 2023", title: "REGISTRATION END", description: "Final application submission ends" },
  { date: "29 Sept 2023", title: "SCREENING RESULT", description: "Primary screening result declaration" },
  { date: "9-10 Oct 2023", title: "PITCH DECK", description: "1st round evaluation" },
  { date: "13-14 Dec 2023", title: "FINAL EVALUATION", description: "Prototype demonstration & final evaluation" },
];

const PragatiiContent = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (index: number) => setOpenFAQ(openFAQ === index ? null : index);

  return (
    <main className="flex-grow pt-24 min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center py-16">
        <div className="absolute inset-0 bg-[url('/hackathon-bg.jpg')] bg-cover bg-center bg-no-repeat" style={{ filter: 'brightness(0.7)' }} />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">iHub DRISHTI FOUNDATION, IIT Jodhpur</h2>
          <h1 className="text-6xl font-bold mb-6">LAUNCHES HACKATHON</h1>
          <h2 className="text-5xl font-bold text-blue-400 mb-8">PRAGATII Hackathon</h2>
          <h2 className="text-5xl font-bold text-blue-400 mb-8">10 March, 2025</h2>
          <h3 className="text-3xl mb-6">Lighting the Way to Technological Advancement</h3>
          <p className="text-2xl">PROGRAM FOR ACCELERATION AND GROWTH IN AI AND XR...</p>
          <div className="flex justify-center gap-4 flex-wrap mt-6">
            {["#PRAGATII", "#Hackathon", "#10 LAKH PRIZE MONEY", "#Game", "#ihub-Drishti"].map(tag => (
              <span key={tag} className="bg-white/10 text-white px-6 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Welcome to iHub Drishti Foundation</h2>
          <div className="space-y-6 text-lg">
            <p>iHub Drishti Foundation is initiating a HACKATHON.</p>
            <p>iHub Drishti is a Section-8 Not-for-Profit Organisation at IIT Jodhpur.</p>
            <p>TISC is a Govt. of India-recognized Technology Business Incubator.</p>
          </div>
        </div>
      </section>

      {/* Technology Areas */}
      <section id="event" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {["Artificial Intelligence", "Extended Reality (XR)", "Generative AI", "Dependable AI"].map((tech) => (
              <div key={tech} className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-xl font-bold mb-4">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">AWARDS</h2>
          <p>Prize money of Rs. 10 Lakh will be awarded...</p>
          <Image src="/awards.png" alt="Awards Banner" width={600} height={200} className="mx-auto mt-10 object-contain" />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`px-6 transition-all duration-300 overflow-hidden ${openFAQ === index ? 'max-h-96 py-4' : 'max-h-0'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">TIMELINE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineData.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-sm text-gray-600 mb-2">{item.date}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">For any queries, reach out to us at: info@ihubdrishti.ai</p>
        </div>
      </section>
    </main>
  );
};

export default PragatiiContent;

