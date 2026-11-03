import { useState } from 'react';
import { REGIONS, RegionInfo } from '../data/golfData';
import { ArrowRight, MapPin, X, Sun, Navigation, Flag, Check } from 'lucide-react';

interface DestinationSectionProps {
  onSelectRegionToPlan: (regionName: string) => void;
}

export default function DestinationSection({ onSelectRegionToPlan }: DestinationSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo | null>(null);

  return (
    <section id="destinations" className="py-20 lg:py-28 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-2">
            FIND YOUR DESTINATION
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-4">
            어디에서 라운드할까요?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed whitespace-pre-line">
            도시의 편리함부터 한적한 휴식까지.{'\n'}
            취향에 맞는 지역부터 여행을 그려보세요.
          </p>
        </div>

        {/* 4 Regions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REGIONS.map((region) => (
            <div
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 hover:border-neutral-400 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {region.english}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {region.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:translate-x-1 transition-transform">
                  {region.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed whitespace-pre-line mb-6">
                  {region.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-900 group-hover:text-neutral-950">
                <span>지역 상세 보기</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Region Detail Modal */}
      {selectedRegion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedRegion(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-mono font-bold text-neutral-400 tracking-widest">
                {selectedRegion.english} 골프 여행
              </span>
              <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                {selectedRegion.title}
              </h3>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6 bg-neutral-50 p-4 rounded-xl border border-neutral-100">
              {selectedRegion.dialogDescription}
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Flag className="w-3.5 h-3.5 text-neutral-700" />
                  대표 명문 골프장
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRegion.topCourses.map((course) => (
                    <span
                      key={course}
                      className="text-xs text-neutral-700 bg-neutral-100 px-2.5 py-1 rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{selectedRegion.distanceFromAirport}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Sun className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                  <span>{selectedRegion.climateTip}</span>
                </div>
              </div>

              <p className="text-xs text-neutral-500 leading-relaxed italic">
                {selectedRegion.dialogDetail}
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
              <button
                onClick={() => {
                  const regName = selectedRegion.title;
                  setSelectedRegion(null);
                  onSelectRegionToPlan(regName);
                }}
                className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-colors cursor-pointer text-center"
              >
                {selectedRegion.title}으로 여행 계획하기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
