import { GolfDocument } from '../data/golfData';
import { X, Download, CheckCircle2, XCircle, Calendar, Building, MessageSquare, ExternalLink } from 'lucide-react';

interface ItineraryModalProps {
  document: GolfDocument | null;
  onClose: () => void;
  onOpenConsultationModal: (defaultRegion?: string) => void;
}

export default function ItineraryModal({ document, onClose, onOpenConsultationModal }: ItineraryModalProps) {
  if (!document) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500 mb-1">
              <span>{document.category}</span>
              {document.price && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="text-neutral-900 font-bold">{document.price}</span>
                </>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              {document.title}
            </h3>
            {document.hotel && (
              <p className="text-xs sm:text-sm text-neutral-600 mt-1 flex items-center gap-1.5">
                <Building className="w-4 h-4 text-neutral-400" />
                <span>{document.hotel}</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-6">
          {/* Day by Day schedule */}
          {document.itinerarySummary && (
            <div>
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                추천 일정 개요
              </h4>
              <div className="space-y-2.5">
                {Object.entries(document.itinerarySummary).map(([dayKey, dayText]) => (
                  <div key={dayKey} className="p-3 bg-neutral-50 rounded-lg border border-neutral-100 text-xs sm:text-sm">
                    <span className="font-bold text-neutral-900 mr-2 uppercase">
                      {dayKey.replace('day', 'Day ')}
                    </span>
                    <span className="text-neutral-700">{dayText}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {document.inclusions && document.inclusions.length > 0 && (
              <div className="bg-emerald-50/40 border border-emerald-200/60 p-4 rounded-xl">
                <h5 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  포함 사항
                </h5>
                <ul className="space-y-1.5 text-xs text-neutral-700">
                  {document.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {document.exclusions && document.exclusions.length > 0 && (
              <div className="bg-neutral-50 border border-neutral-200 p-4 rounded-xl">
                <h5 className="text-xs font-bold text-neutral-800 flex items-center gap-1.5 mb-2.5">
                  <XCircle className="w-4 h-4 text-neutral-400" />
                  불포함 사항
                </h5>
                <ul className="space-y-1.5 text-xs text-neutral-600">
                  {document.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-neutral-400">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-neutral-200">
          <a
            href={document.file}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors border border-neutral-300"
          >
            <Download className="w-4 h-4 text-neutral-600" />
            <span>PDF 원본 다운로드</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenConsultationModal('파타야');
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>이 상품으로 견적 상담</span>
          </button>
        </div>
      </div>
    </div>
  );
}
