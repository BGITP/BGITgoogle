import { useState, useEffect } from 'react';
import { X, Check, Copy, Download, MessageSquare, AlertCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRegion?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultRegion }: ConsultationModalProps) {
  const [region, setRegion] = useState<string>('아직 정하지 않았어요');
  const [startDate, setStartDate] = useState<string>('');
  const [guests, setGuests] = useState<string>('4명 (1조)');
  const [notes, setNotes] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (defaultRegion) {
      setRegion(defaultRegion);
    }
  }, [defaultRegion, isOpen]);

  if (!isOpen) return null;

  const regions = [
    '아직 정하지 않았어요',
    '방콕',
    '파타야',
    '치앙마이',
    '후아힌'
  ];

  const guestOptions = [
    '1인 (조인 희망)',
    '2인 (커플 / 부부 / 2인 플레이)',
    '3명',
    '4명 (1조)',
    '8명 (2조)',
    '단체 (8명 이상)'
  ];

  const generateMemoText = () => {
    return [
      `[BGIT 골프 여행 상담 메모]`,
      `※ 시안에서 작성한 여행 상담 메모입니다.`,
      `----------------------------------------`,
      `• 희망 지역: ${region}`,
      `• 여행 시작일: ${startDate || '미정 (일정 협의)'}`,
      `• 여행 인원: ${guests}`,
      `----------------------------------------`,
      `[원하는 여행 상세]`,
      notes.trim() || '상세 일정 및 추천 골프장 상담 희망',
      `----------------------------------------`,
      `작성 일시: ${new Date().toLocaleString('ko-KR')}`
    ].join('\n');
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleCopy = async () => {
    const text = generateMemoText();
    try {
      await navigator.clipboard.writeText(text);
      showToast('상담 내용이 클립보드에 복사되었습니다. 카카오톡 상담창에 붙여넣어 문의해 주세요.');
    } catch {
      showToast('복사에 실패했습니다. 아래 내용을 직접 복사해 주세요.');
    }
  };

  const handleDownload = () => {
    const text = generateMemoText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'BGIT_여행상담메모.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('상담 메모(BGIT_여행상담메모.txt)를 저장했습니다.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
              LET’S PLAN YOUR JOURNEY
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900">
              어떤 여행을 생각하시나요?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              여행 계획을 간단히 정리해 보세요.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="창 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice from Original Sixshop Site */}
        <div className="p-3.5 mb-6 bg-neutral-100 rounded-xl text-xs text-neutral-600 leading-relaxed border border-neutral-200/60 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
          <span>
            시안에서는 상담 요청이 전송되지 않습니다. 작성한 내용은 텍스트 파일로 저장하거나 복사하여 BGIT 상담 채널에 전달할 수 있습니다.
          </span>
        </div>

        {/* Form Body */}
        <div className="space-y-5">
          {/* Region */}
          <div>
            <label className="block text-xs font-bold text-neutral-900 mb-2">
              희망 지역
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {regions.map((r) => (
                <button
                  type="button"
                  key={r}
                  onClick={() => setRegion(r)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    region === r
                      ? 'bg-neutral-900 text-white border-neutral-900 font-semibold'
                      : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-2">
                여행 시작일 <span className="text-neutral-400 font-normal">(선택)</span>
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-2">
                여행 인원
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white transition-all cursor-pointer"
              >
                {guestOptions.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-neutral-900 mb-2">
              원하는 여행
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="여행 기간, 라운드 횟수, 선호하는 숙소 등을 적어주세요. (예: 3박 5일 파타야 54홀 라운드, 4성급 시내 호텔, 4인 1팀)"
              className="w-full p-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-6 mt-6 border-t border-neutral-200">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 text-xs sm:text-sm font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors border border-neutral-300 cursor-pointer"
          >
            <Copy className="w-4 h-4 text-neutral-600" />
            <span>상담 내용 복사</span>
          </button>

          <button
            type="button"
            onClick={handleDownload}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>상담 메모 저장 (.txt)</span>
          </button>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="absolute bottom-4 left-6 right-6 p-3 bg-neutral-900 text-white text-xs font-medium rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
}
