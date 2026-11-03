import { BRAND_INFO, BENEFITS } from '../data/golfData';
import { ArrowDown, CheckCircle2, ShieldCheck, Clock, Layers, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenPartnerModal: () => void;
  onOpenConsultationModal: () => void;
}

export default function HeroSection({ onOpenPartnerModal, onOpenConsultationModal }: HeroSectionProps) {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-neutral-900" />;
      case 1:
        return <Clock className="w-5 h-5 text-neutral-900" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-neutral-900" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section className="relative overflow-hidden bg-neutral-50/70 border-b border-neutral-200 pt-16 pb-20 lg:pt-24 lg:pb-28">
      {/* Subtle Ambient Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#181818_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">


          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-600">
              {BRAND_INFO.bannerEyebrow}
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.18] sm:leading-[1.15] whitespace-pre-line mb-6">
            {BRAND_INFO.bannerTitle}
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed whitespace-pre-line mb-8 max-w-2xl font-normal">
            {BRAND_INFO.introDescription}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-16">
            <button
              onClick={onOpenPartnerModal}
              className="inline-flex justify-center items-center px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              {BRAND_INFO.bannerButtonLabel}
            </button>
            <a
              href="#packages"
              className="inline-flex justify-center items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-neutral-800 bg-white hover:bg-neutral-100 rounded-lg border border-neutral-300 transition-colors shadow-sm"
            >
              <ArrowDown className="w-4 h-4 text-neutral-600" />
              골프 패키지 일정표 보기
            </a>
          </div>
        </div>

        {/* 3 Core Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
          {BENEFITS.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-neutral-200/80 shadow-xs hover:border-neutral-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center">
                  {getIcon(index)}
                </div>
                <span className="text-xs font-mono font-bold text-neutral-400">
                  {item.number}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
