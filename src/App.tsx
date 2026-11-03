/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RateNotesBanner from './components/RateNotesBanner';
import ProductCatalogSection from './components/ProductCatalogSection';
import DestinationSection from './components/DestinationSection';
import AboutSection from './components/AboutSection';
import ConsultationSection from './components/ConsultationSection';
import ConsultationModal from './components/ConsultationModal';
import PartnerModal from './components/PartnerModal';
import ItineraryModal from './components/ItineraryModal';
import Footer from './components/Footer';
import { GolfDocument } from './data/golfData';
import { MessageCircle, ChevronUp } from 'lucide-react';

export default function App() {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationRegion, setConsultationRegion] = useState<string | undefined>(undefined);
  const [selectedDocument, setSelectedDocument] = useState<GolfDocument | null>(null);

  const handleOpenConsultation = (defaultRegion?: string) => {
    setConsultationRegion(defaultRegion);
    setIsConsultationModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        onOpenConsultationModal={(reg) => handleOpenConsultation(reg)}
      />

      <main className="flex-1">
        {/* Section 0: Hero & Key Benefits */}
        <HeroSection
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
          onOpenConsultationModal={() => handleOpenConsultation()}
        />

        {/* 요금 안내 (Rate Notes Banner) */}
        <RateNotesBanner />

        {/* Section 1, 2, 3: Pattaya Golf Packages & PDF Downloads */}
        <ProductCatalogSection
          onSelectDocument={(doc) => setSelectedDocument(doc)}
          onOpenConsultationModal={(reg) => handleOpenConsultation(reg)}
        />

        {/* Section 5: Destination Selection ("어디에서 라운드할까요?") */}
        <DestinationSection
          onSelectRegionToPlan={(regName) => handleOpenConsultation(regName)}
        />

        {/* Section 6: About BGIT & Services ("필드에서는 골프에, 여행에서는 쉼에.") */}
        <AboutSection />

        {/* Section 7: Consultation Planner CTA ("당신의 다음 라운드를 함께 준비합니다.") */}
        <ConsultationSection
          onOpenConsultationModal={() => handleOpenConsultation()}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button (Quick Contact & Consultation) */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white border border-neutral-300 shadow-md flex items-center justify-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-all cursor-pointer"
          title="맨 위로 이동"
          aria-label="맨 위로 이동"
        >
          <ChevronUp className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleOpenConsultation()}
          className="inline-flex items-center gap-2 px-4 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          title="여행 상담 작성"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
          <span>여행 상담 작성</span>
        </button>
      </aside>

      {/* Modals */}
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        defaultRegion={consultationRegion}
      />

      <ItineraryModal
        document={selectedDocument}
        onClose={() => setSelectedDocument(null)}
        onOpenConsultationModal={(reg) => handleOpenConsultation(reg)}
      />
    </div>
  );
}
