import "@/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { sikka, type SikkaPage } from "@/sikka/config";
import Changelog from "@/sikka/pages/Changelog";
import DeleteAccount from "@/sikka/pages/DeleteAccount";
import Overview from "@/sikka/pages/Overview";
import Privacy from "@/sikka/pages/Privacy";
import Terms from "@/sikka/pages/Terms";
import SikkaLayout from "@/sikka/SikkaLayout";

/** Entry for every page under /sikka/: each HTML file names its page in <body data-page="…">. */
const pages: Record<SikkaPage, () => React.JSX.Element> = {
  overview: Overview,
  changelog: Changelog,
  privacy: Privacy,
  terms: Terms,
  "delete-account": DeleteAccount,
};

const requested = document.body.dataset.page as SikkaPage | undefined;
const page = requested && requested in pages ? requested : sikka.pages[0].id;
const Page = pages[page];

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SikkaLayout page={page}>
      <Page />
    </SikkaLayout>
  </StrictMode>,
);
