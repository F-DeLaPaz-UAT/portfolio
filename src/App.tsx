import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./components/Nav";

// pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Objectives from "./pages/Objectives";
import Boards from "./pages/Boards";
import Contact from "./pages/Contact";
import ContactSent from "./pages/ContactSent";
import NotFound from "./pages/NotFound";

// SIP (tabbed)
import SIPLayout from "./pages/SIPLayout";
import SIPOverview from "./pages/SIPOverview";
import SIPVisuals from "./pages/SIPVisuals";
import SIPPriorArt from "./pages/SIPPriorArt";
import SIPEvalGoals from "./pages/SIPEvalGoals";

// SIP Brief (nested tabs)
import SIPBriefLayout from "./pages/brief/SIPBriefLayout";
import SIPBriefTitle from "./pages/brief/SIPBriefTitle";
import SIPBriefField from "./pages/brief/SIPBriefField";
import SIPBriefBackground from "./pages/brief/SIPBriefBackground";
import SIPBriefFigures from "./pages/brief/SIPBriefFigures";
import SIPBriefProject from "./pages/brief/SIPBriefProject";
import SIPBriefInnovation from "./pages/brief/SIPBriefInnovation";
import SIPBriefScenarios from "./pages/brief/SIPBriefScenarios";
import SIPBriefPDF from "./pages/brief/SIPBriefPDF";

export default function App() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/sent" element={<ContactSent />} />

          {/* SIP layout with sticky rail */}
          <Route path="/sip" element={<SIPLayout />}>
            <Route index element={<Navigate to="eval" replace />} />
            <Route path="overview" element={<SIPOverview />} />
            <Route path="visuals" element={<SIPVisuals />} />
            <Route path="prior-art" element={<SIPPriorArt />} />
			<Route path="eval" element={<SIPEvalGoals />} />


            {/* SIP Brief nested tabs */}
            <Route path="brief" element={<SIPBriefLayout />}>
              <Route index element={<Navigate to="title" replace />} />
              <Route path="title" element={<SIPBriefTitle />} />
              <Route path="field" element={<SIPBriefField />} />
              <Route path="background" element={<SIPBriefBackground />} />
              <Route path="figures" element={<SIPBriefFigures />} />
              <Route path="project" element={<SIPBriefProject />} />
              <Route path="innovation" element={<SIPBriefInnovation />} />
              <Route path="scenarios" element={<SIPBriefScenarios />} />
              <Route path="pdf" element={<SIPBriefPDF />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
