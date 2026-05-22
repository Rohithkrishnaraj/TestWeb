import React from 'react'
import { Navbar}  from './components/Navbar';
import {Footer} from './components/Footer'
import { Home } from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { Contact } from './pages/ContactUs';
import { RevenueRevolution } from './pages/RevenueRevolution';  
import { RoyalIndicators } from './pages/RoyalIndicators';
import { CrownMembership } from './pages/CrownMembership';
import { AboutUs } from './pages/AboutUs';
import { ScrollToTop } from "./components/ScrollToTop";
import{Events} from './pages/Events';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { FAQ } from './pages/Faq';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { RefundPolicy } from './pages/RefundPolicy';
import { ShippingPolicy } from './pages/ShippingPolicy';
import {OneOnOne} from './pages/OneOnOne';
import AdminEntry from './pages/AdminEntry';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
// create placeholder pages (you can replace later)
const EliteMembership = () => <h1>Elite Membership</h1>;
const GoldMembership = () => <h1>Gold Membership</h1>;
const App = () => {
  return (
    <>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/revenueRevolution" element={<RevenueRevolution />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eliteMembership" element={<EliteMembership />} />
        <Route path="/goldMembership" element={<GoldMembership />} />
        <Route path="/crownMembership" element={<CrownMembership />} />
        <Route path="/royalindicators" element={<RoyalIndicators />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termsAndConditions" element={<TermsAndConditions />} />
        <Route path="/refundPolicy" element={<RefundPolicy />} />
        <Route path="/shippingPolicy" element={<ShippingPolicy />} />
        <Route path="/oneOnOne" element={<ProtectedRoute><OneOnOne /></ProtectedRoute>} />
        <Route path="/admin" element={<AdminRoute><AdminEntry /></AdminRoute>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App