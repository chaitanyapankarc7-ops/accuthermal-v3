import { Suspense } from "react";
import SearchResults from "./SearchResults";
import "./page.css";

export const metadata = {
  title: "Search | Accurate Thermal Systems",
  description:
    "Search equipment, applications and technical documentation across Accurate Thermal Systems.",
};

function SearchFallback() {
  return (
    <div className="search-page-fallback" aria-hidden="true">
      <div className="search-page-bar" />
      <div className="search-page-line" />
      <div className="search-page-line short" />
    </div>
  );
}

export default function SearchPage() {
  return (
    <main className="search-page">
      <div className="wrap">
        <div className="eyebrow mono">Search</div>
        <h1>Find equipment, applications and documentation.</h1>

        {/* useSearchParams opts the results out of prerendering. Under
            `output: "export"` the build fails without this boundary. */}
        <Suspense fallback={<SearchFallback />}>
          <SearchResults />
        </Suspense>
      </div>
    </main>
  );
}
