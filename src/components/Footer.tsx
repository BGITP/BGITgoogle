import { useState } from 'react';
import { BRAND_INFO } from '../data/golfData';
import { MessageSquare, Shield, FileText, ChevronRight, X } from 'lucide-react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/logo_transparent.png"
                alt="BGIT Thai"
                className="h-10 w-auto object-contain bg-transparent"
              />
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              태국 파타야 및 방콕을 기반으로 한국 골프 여행사에 최고품질의 최저가 골프 상품을 공급하는 현지 전문 여행 파트너입니다.
            </p>
            <div className="pt-2 text-xs text-neutral-500 space-y-1">
              <p>• 태국 현지 직영 법인 운영 (방콕 & 파타야)</p>
              <p>• 24시간 실시간 티타임 조율 및 현지 비상 케어</p>
              <p>• 국내 주요 골프 전문 여행사 B2B 공급</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              골프 상품
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  파타야 가성비 3색
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  파타야 고품격 3색
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  파타야 럭셔리 VIP
                </a>
              </li>
              <li>
                <a href="#rate-notes" className="hover:text-white transition-colors">
                  주중/주말 요금 안내
                </a>
              </li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              태국 추천 지역
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  방콕 (Bangkok)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  파타야 (Pattaya)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  치앙마이 (Chiang Mai)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors">
                  후아힌 (Hua Hin)
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              고객 및 파트너 상담
            </h4>
            <p className="text-xs text-neutral-400 mb-3 leading-relaxed">
              상담 작성 후 카카오톡으로 전달 주시면 실시간 견적과 티타임을 안내해 드립니다.
            </p>
            <a
              href="#consultation"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors w-full justify-center"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>상담 신청하기</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar & Legal */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} BGIT Thai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModal('terms')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              이용약관
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveModal('privacy')}
              className="hover:text-neutral-300 transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
          </div>
        </div>
      </div>

      {/* Terms / Privacy Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-xs">
          <div className="bg-white text-neutral-900 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <h3 className="text-lg font-bold">
                {activeModal === 'terms' ? '이용약관' : '개인정보처리방침'}
              </h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 overflow-y-auto text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-4">
              {activeModal === 'terms' ? (
                <>
                  <p className="font-semibold text-neutral-900">제1조 (목적)</p>
                  <p>본 약관은 BGIT Thai(이하 “회사”)가 제공하는 골프 여행 정보 제공 및 상담 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
                  <p className="font-semibold text-neutral-900">제2조 (정보의 제공)</p>
                  <p>회사는 태국 현지 골프장 일정표, 숙소 정보, 부대 서비스 안내를 정확하게 제공하기 위해 노력하며, 현지 사정에 따라 티타임 및 골프장 상황이 변동될 수 있습니다.</p>
                  <p className="font-semibold text-neutral-900">제3조 (상담 및 견적)</p>
                  <p>웹사이트에서 작성된 상담 메모는 이용자의 편의를 위한 텍스트 저장 기능이며, 최종 예약 및 계약은 상담 채널을 통한 확인 절차 후 확정됩니다.</p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-neutral-900">1. 개인정보의 처리 목적</p>
                  <p>BGIT Thai는 원활한 골프 여행 상담 및 견적 안내를 위해 최소한의 정보만을 처리하며, 목적 외 용도로는 이용되지 않습니다.</p>
                  <p className="font-semibold text-neutral-900">2. 개인정보 수집 및 저장</p>
                  <p>본 웹사이트의 상담 메모 작성 기능은 사용자의 로컬 환경(클립보드 및 텍스트 파일 저장)에서 동작하며 서버로 개인정보를 무단 수집하거나 외부로 전송하지 않습니다.</p>
                  <p className="font-semibold text-neutral-900">3. 정보주체의 권리</p>
                  <p>이용자는 언제든지 회사 상담 채널을 통해 본인의 개인정보 열람, 정정 및 삭제를 요청할 수 있습니다.</p>
                </>
              )}
            </div>
            <div className="pt-4 border-t border-neutral-200 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-neutral-900 rounded-lg hover:bg-neutral-800"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
