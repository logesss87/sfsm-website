/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import JobApplication from './pages/JobApplication';
import JobApplicationForm from './pages/JobApplicationForm';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-body text-gray-900 bg-white relative">
        {/* Watermark Logo */}
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-0 overflow-hidden">
          <Logo className="w-[120vw] h-[120vw] max-w-[1000px] max-h-[1000px] opacity-[0.03]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/job-application" element={<JobApplication />} />
              <Route path="/job-application/form" element={<JobApplicationForm />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}
