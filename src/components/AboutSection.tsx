import { SERVICES } from '../data/golfData';
import { Flag, Compass, Hotel, Car, MessageCircle, Sparkles } from 'lucide-react';

export default function AboutSection() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flag':
        return <Flag className="w-5 h-5 text-neutral-900" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-neutral-900" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-neutral-900" />;
      case 'Car':
        return <Car className="w-5 h-5 text-neutral-900" />;
      default:
        return <Sparkles className="w-5 h-5 text-neutral-900" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              ABOUT BGIT
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight whitespace-pre-line">
              필드에서는 골프에,{'\n'}여행에서는 쉼에.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              BGIT는 태국 현지 골프 전문 여행사입니다. 여행의 중심에 골프를 두고, 일정과 숙소, 이동까지 함께 살펴봅니다. 함께하는 사람과 원하는 여행의 모습을 들려주세요.
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs font-medium text-neutral-500">
              <span>태국 파타야 & 방콕 직영 법인</span>
              <span aria-hidden="true">·</span>
              <span>한국 파트너 여행사 B2B 공급</span>
              <span aria-hidden="true">·</span>
              <span>현지 24시간 실시간 케어</span>
            </div>
          </div>
        </div>

        {/* 4 Services Grid */}
        <div id="services" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-neutral-50 rounded-xl p-6 border border-neutral-200/80 hover:border-neutral-300 transition-all hover:shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-2xs">
                {getServiceIcon(service.iconName)}
              </div>
              <h3 className="text-base font-bold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
                {service.description}
              </p>
              <p className="text-xs text-neutral-500 pt-3 border-t border-neutral-200/60 leading-normal">
                {service.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Review Note from Original Site */}
        <div className="bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg bg-white border border-neutral-200 text-neutral-700 shrink-0">
              <MessageCircle className="w-5 h-5 text-neutral-800" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-1">
                여행자의 이야기 & 후기
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                여행자의 이야기를 담을 공간입니다. BGIT는 파트너 여행사의 신뢰와 고객 여러분의 만족을 바탕으로 성장하고 있습니다.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <a
              href="#consultation"
              className="inline-flex items-center px-4 py-2 text-xs font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-md border border-neutral-300 transition-colors shadow-2xs"
            >
              상담 요청하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
