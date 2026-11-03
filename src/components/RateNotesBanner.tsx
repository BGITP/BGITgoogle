import { Info } from 'lucide-react';
import { RATE_NOTES } from '../data/golfData';

export default function RateNotesBanner() {
  return (
    <section id="rate-notes" className="bg-neutral-100/80 border-b border-neutral-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-neutral-200">
          <div className="flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-neutral-100 text-neutral-800 shrink-0 mt-0.5">
              <Info className="w-5 h-5 text-neutral-700" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-neutral-900 mb-1">
                {RATE_NOTES.title}
              </h4>
              <div className="space-y-0.5 text-xs sm:text-sm text-neutral-600">
                <p>• {RATE_NOTES.line1}</p>
                <p>• {RATE_NOTES.line2}</p>
              </div>
            </div>
          </div>
          <div className="text-xs text-neutral-500 bg-neutral-50 px-3 py-2 rounded-md border border-neutral-100 w-full md:w-auto text-left md:text-right">
            <span>실시간 티타임 & 주말 추가요금 문의는 카카오톡으로 확인 가능합니다.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
