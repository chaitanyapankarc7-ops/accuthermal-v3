import { ResourceCard, ResourceHero, ResourceSection } from "../../../components/ResourcePage";

const DOWNLOADS = [
  ["FTBSL6 Fluidized Bath Brochure", "FLUIDIZED BATHS", "Product information for the FTBSL6 system.", "/downloads/FTBSL6-fluidized-bath-brochure.pdf"],
  ["FTBSL15 / FTBSL25 Brochure", "FLUIDIZED BATHS", "Product information for the FTBSL15 and FTBSL25 systems.", "/downloads/FTBSL15-FTBSL25-fluidized-bath-brochure.pdf"],
  ["FTBL12 / FTBL26 / FTBL12W Brochure", "FLUIDIZED BATHS", "Product information for the FTBL12, FTBL26, and FTBL12W systems.", "/downloads/FTBL12-FTBL26-FTBL12W-fluidized-bath-brochure.pdf"],
  ["FTBLL27 / FTBLL47 Brochure", "FLUIDIZED BATHS", "Product information for the FTBLL27 and FTBLL47 systems.", "/downloads/FTBLL27-FTBLL47-fluidized-bath-brochure.pdf"],
  ["System Layout Diagram", "TECHNICAL FILE", "A layout reference for LL12, LL26, and ECU1 systems.", "/downloads/diagram-2-system-layout-LL12-LL26-ECU1.pdf"],
  ["ECU1 Brochure", "HEPA FILTRATION", "Product information for the ECU1 filtration system.", "/downloads/ECU1-brochure-V1-11-2019.pdf"],
  ["ECU2 Brochure", "HEPA FILTRATION", "Product information for the ECU2 filtration system.", "/downloads/ecu2-brochure-v2-11-2023.pdf"],
  ["ECU2 Layout", "TECHNICAL FILE", "A layout reference for the ECU2 system.", "/downloads/ECU2-layout.pdf"],
  ["Fume Ventilation Diagrams", "TECHNICAL FILE", "Ventilation diagrams for thermal cleaning applications.", "/downloads/fume-ventilation-diagrams.pdf"],
  ["Temperature Calibration Services", "CALIBRATION", "Service details for NIST-traceable calibration work.", "/downloads/temperature-calibration-services-brochure.pdf"],
  ["Sample Calibration Certificate", "CALIBRATION", "Example documentation for a completed calibration service.", "/downloads/sample-calibration-certificate.pdf"],
  ["Brown Aluminum Oxide Media", "MEDIA", "Product information for brown aluminum oxide media.", "/downloads/brown-aluminum-oxide.pdf"],
  ["White Activated Alumina Media", "MEDIA", "Product information for white activated alumina media.", "/downloads/white-activated-alumina.pdf"],
];

export default function DocumentationPage() {
  return <main className="resource-page"><ResourceHero title="The information behind the equipment." description="Product brochures, calibration documents, technical files, and media information for Accurate Thermal Systems equipment." showMark={false} /><ResourceSection title="Product information, in one place." intro="Download the documents that match your equipment, process, or calibration workflow."><div className="resource-card-grid">{DOWNLOADS.map(([title, meta, description, href]) => <ResourceCard key={title} title={title} meta={meta} description={description} href={href} label="DOWNLOAD FILE" />)}</div></ResourceSection></main>;
}
