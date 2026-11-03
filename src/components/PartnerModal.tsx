import { useState } from 'react';
import { X, Check, Copy, Building, User, Phone, MessageSquare, AlertCircle } from 'lucide-react';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const [agency, setAgency] = useState('');
  const [manager, setManager] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedText = [
      '[BGIT 파트너 상담]',
      `여행사명: ${agency.trim() || '미입력'}`,
      `담당자명: ${manager.trim() || '미입력'}`,
      `연락처: ${contact.trim() || '미입력'}`,
      '',
      '상담 내용:',
      message.trim() || '태국 현지 골프 상품 공급 및 파트너십 문의'
    ].join('\n');

    try {
      await navigator.clipboard.writeText(formattedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch {
      alert('클립보드 복사 권한이 없습니다. 내용을 직접 복사해 주세요.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
              B2B PARTNER INQUIRY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
              BGIT 파트너 상담
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="창 닫기"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed">
          상담 내용을 작성한 뒤 복사해 이용 중인 BGIT 상담 채널로 전달해 주세요. 이 화면에서는 상담 신청이 직접 전송되지 않습니다.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-neutral-900 mb-1.5 flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-neutral-400" />
              여행사명 <span className="text-neutral-400 font-normal">(필수)</span>
            </label>
            <input
              type="text"
              required
              value={agency}
              onChange={(e) => setAgency(e.target.value)}
              placeholder="예: 대한골프투어"
              className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-neutral-400" />
                담당자명 <span className="text-neutral-400 font-normal">(필수)</span>
              </label>
              <input
                type="text"
                required
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                placeholder="예: 홍길동 팀장"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-900 mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                연락처 <span className="text-neutral-400 font-normal">(필수)</span>
              </label>
              <input
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="010-0000-0000 또는 카톡ID"
                className="w-full px-3.5 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-neutral-900 mb-1.5 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-neutral-400" />
              상담 내용 <span className="text-neutral-400 font-normal">(필수)</span>
            </label>
            <textarea
              required
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="공급을 희망하는 지역, 일정표 요청, 객실 및 티타임 블록 수량, 특별 요청사항 등을 입력해 주세요."
              className="w-full p-3 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white resize-none"
            />
          </div>

          <div className="p-3 bg-neutral-50 rounded-lg text-xs text-neutral-500 flex items-start gap-2 border border-neutral-100">
            <AlertCircle className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
            <span>입력 내용은 서버로 전송하거나 별도로 저장하지 않습니다.</span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-4 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            <Copy className="w-4 h-4" />
            <span>상담 내용 복사</span>
          </button>
        </form>

        {copied && (
          <div className="absolute bottom-4 left-6 right-6 p-3 bg-neutral-900 text-white text-xs font-medium rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>복사되었습니다. BGIT 상담 채널에 붙여넣어 전달해 주세요.</span>
          </div>
        )}
      </div>
    </div>
  );
}
