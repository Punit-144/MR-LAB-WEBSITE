// import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: {
//     padding: 40,
//     fontSize: 12,
//     fontFamily: 'Helvetica',
//     lineHeight: 1.5,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#b91c1c',
//     marginBottom: 20,
//   },
//   section: {
//     marginBottom: 25,
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#b91c1c',
//     marginBottom: 6,
//   },
//   text: {
//     fontSize: 12,
//     color: '#333333',
//   },
//   image: {
//     width: '100%',
//     height: 160,
//     objectFit: 'cover',
//     marginBottom: 10,
//   },
// });

// const ProjectSection = ({ title, description, img }) => (
//   <View style={styles.section}>
//     {img && <Image src={img} style={styles.image} />}
//     <Text style={styles.title}>{title}</Text>
//     <Text style={styles.text}>{description}</Text>
//   </View>
// );

// const PDFBrochure = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Text style={styles.header}>iHub Drishti | AR-VR Vertical</Text>

//       <ProjectSection
//         title="Cultural Innovation"
//         description="Preserving and celebrating heritage through AR/VR. 3D temple reconstructions, storytelling applications, and virtual museum experiences."
//         img="/project-thumbnails/cultural.jpg"
//       />

//       <ProjectSection
//         title="EdTech Innovation"
//         description="Gamification of learning: archaeological games, VR physics labs, and interactive classroom tools."
//         img="/project-thumbnails/edtech.jpg"
//       />

//       <ProjectSection
//         title="MedTech Innovation"
//         description="VR-based surgical training simulators, empathy-based patient interaction modules, and diagnostic tools."
//         img="/project-thumbnails/medtech.jpg"
//       />

//       <ProjectSection
//         title="Immersive Technologies"
//         description="Multi-sensory VR platforms integrating olfactory feedback and advanced interaction paradigms."
//         img="/project-thumbnails/immersive.jpg"
//       />

//       <ProjectSection
//         title="Coming Soon"
//         description="Future-facing projects involving AI + XR, computer vision, and collaborative robotics."
//         img="/project-thumbnails/coming-soon.jpg"
//       />
//     </Page>
//   </Document>
// );

// export default PDFBrochure;















import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
    lineHeight: 1.5,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#b91c1c',
    marginBottom: 20,
  },
  section: {
    marginBottom: 25,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#b91c1c',
    marginBottom: 6,
  },
  text: {
    fontSize: 12,
    color: '#333333',
  },
  image: {
    width: '100%',
    height: 160,
    objectFit: 'cover',
    marginBottom: 10,
  },
});

// We define the types for the props here
interface ProjectSectionProps {
  title: string;
  description: string;
  img: string;
}

const ProjectSection = ({ title, description, img }: ProjectSectionProps) => (
  <View style={styles.section}>
    {/* We add the alt prop to the Image component */}
    {img && <Image src={img} style={styles.image} />}
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{description}</Text>
  </View>
);

const PDFBrochure = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>iHub Drishti | AR-VR Vertical</Text>

      <ProjectSection
        title="Cultural Innovation"
        description="Preserving and celebrating heritage through AR/VR. 3D temple reconstructions, storytelling applications, and virtual museum experiences."
        img="/project-thumbnails/cultural.jpg"
      />

      <ProjectSection
        title="EdTech Innovation"
        description="Gamification of learning: archaeological games, VR physics labs, and interactive classroom tools."
        img="/project-thumbnails/edtech.jpg"
      />

      <ProjectSection
        title="MedTech Innovation"
        description="VR-based surgical training simulators, empathy-based patient interaction modules, and diagnostic tools."
        img="/project-thumbnails/medtech.jpg"
      />

      <ProjectSection
        title="Immersive Technologies"
        description="Multi-sensory VR platforms integrating olfactory feedback and advanced interaction paradigms."
        img="/project-thumbnails/immersive.jpg"
      />

      <ProjectSection
        title="Coming Soon"
        description="Future-facing projects involving AI + XR, computer vision, and collaborative robotics."
        img="/project-thumbnails/coming-soon.jpg"
      />
    </Page>
  </Document>
);

export default PDFBrochure;