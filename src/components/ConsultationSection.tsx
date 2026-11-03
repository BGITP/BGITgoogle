import { MessageSquareText, Calendar, Users, MapPin, ArrowRight } from 'lucide-react';

interface ConsultationSectionProps {
  onOpenConsultationModal: () => void;
}

export default function ConsultationSection({ onOpenConsultationModal }: ConsultationSectionProps) {
  return (
    <section id="consultation" className="py-20 lg:py-28 bg-neutral-100 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 lg:p-16 border border-neutral-200/90 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-500 mb-2">
              LET’S PLAN YOUR JOURNEY
            </p>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight mb-4">
              당신의 다음 라운드를 함께 준비합니다.
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
              지역, 일정, 인원만 정해도 충분합니다. 나머지는 하나씩 살펴보세요.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-neutral-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                희망 지역 선택
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                일정 조율
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-neutral-400" />
                인원별 맞춤 견적
              </span>
            </div>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultationModal}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm sm:text-base font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer w-full sm:w-auto"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>상담 내용 작성</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
