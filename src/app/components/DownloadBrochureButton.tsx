"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFBrochure from "./PDFBrochure";

export default function DownloadBrochureButton() {
  return (
    <PDFDownloadLink
      document={<PDFBrochure />}
      fileName="iHub-Drishti-ARVR-Brochure.pdf"
      className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition font-medium"
    >
      {({ loading }) => (loading ? "Preparing brochure..." : "📄 Download Brochure")}
    </PDFDownloadLink>
  );
}
