import { applications } from "../data";

export function generateStaticParams() {
  return applications.map((app) => ({
    slug: app.slug,
  }));
}

export default function ApplicationLayout({ children }) {
  return children;
}