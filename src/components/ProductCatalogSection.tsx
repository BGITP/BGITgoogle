import { useState } from 'react';
import { PRODUCT_SECTIONS, GolfDocument, GolfCategorySection } from '../data/golfData';
import { FileText, Download, Eye, Search, ExternalLink, Calendar, MapPin, Building2 } from 'lucide-react';

interface ProductCatalogSectionProps {
  onSelectDocument: (doc: GolfDocument) => void;
  onOpenConsultationModal: (defaultRegion?: string) => void;
}

export default function ProductCatalogSection({ onSelectDocument, onOpenConsultationModal }: ProductCatalogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Collect all documents
  const allDocs = PRODUCT_SECTIONS.flatMap(section => 
    section.documents.map(doc => ({ ...doc, sectionName: section.name, sectionId: section.id }))
  );

  const filterTabs = [
    { id: 'all', label: '전체 자료' },
    { id: 'budget', label: '파타야 가성비' },
    { id: 'premium', label: '파타야 고품격' },
    { id: 'luxury', label: '파타야 럭셔리' },
    { id: 'guide', label: '골프장 & 이용안내' }
  ];

  const filteredDocs = allDocs.filter(doc => {
    // Category check
    let matchesCategory = true;
    if (activeCategory === 'budget') matchesCategory = doc.sectionId === 'budget';
    else if (activeCategory === 'premium') matchesCategory = doc.sectionId === 'premium';
    else if (activeCategory === 'luxury') matchesCategory = doc.sectionId === 'luxury';
    else if (activeCategory === 'guide') matchesCategory = doc.category === '골프장 안내' || doc.category === '이용 안내';

    // Search query check
    const matchesSearch = searchQuery === '' || 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (doc.hotel && doc.hotel.toLowerCase().includes(searchQuery.toLowerCase())) ||
      doc.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const activeSectionData: GolfCategorySection = 
    PRODUCT_SECTIONS.find(s => s.id === activeCategory) || PRODUCT_SECTIONS[0];

  return (
    <section id="packages" className="py-20 lg:py-28 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                PATTAYA GOLF PACKAGES & GUIDES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              파타야 골프상품 및 일정표
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
              실속형 가성비 4성급 호텔부터 5성급 럭셔리 리조트까지, 현지 직영 최저가로 공급하는 검증된 3색 골프 상품입니다.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="호텔명, 패키지 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-100 rounded-xl mb-10 w-fit">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-white text-neutral-950 shadow-xs font-semibold'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content Grid: Documents List + Side Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Documents Table / List (7 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {filteredDocs.length === 0 ? (
              <div className="p-12 text-center bg-neutral-50 rounded-2xl border border-dashed border-neutral-300">
                <FileText className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
                <p className="text-sm font-medium text-neutral-600">
                  조건에 맞는 자료가 없습니다.
                </p>
                <button
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                  className="mt-3 text-xs font-semibold text-neutral-900 underline"
                >
                  전체 목록으로 돌아가기
                </button>
              </div>
            ) : (
              filteredDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="bg-white border border-neutral-200 hover:border-neutral-300 rounded-xl p-5 sm:p-6 transition-all hover:shadow-sm group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 text-red-600 group-hover:scale-105 transition-transform">
                      <FileText className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                        <span className="font-semibold text-neutral-700">{doc.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{doc.sectionName}</span>
                        {doc.price && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="font-semibold text-neutral-900">{doc.price}</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                        {doc.title}
                      </h3>

                      {doc.hotel && (
                        <p className="text-xs text-neutral-600 mt-1 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                          <span>{doc.hotel}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Document Actions */}
                  <div className="flex items-center gap-2 pt-3 sm:pt-0 border-t sm:border-t-0 border-neutral-100 shrink-0">
                    <button
                      onClick={() => onSelectDocument(doc)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors cursor-pointer"
                      title="일정표 상세 보기"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>일정 상세</span>
                    </button>

                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors shadow-xs cursor-pointer"
                      title="PDF 파일 다운로드"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF 다운로드</span>
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Side Showcase Card (5 cols) */}
          <div className="lg:col-span-4 bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
            <div className="overflow-hidden rounded-xl mb-5 aspect-[4/3] bg-neutral-200 relative group">
              <img
                src={activeSectionData.sideImage}
                alt={activeSectionData.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent flex items-end p-5">
                <div>
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                    {activeSectionData.name}
                  </span>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    {activeSectionData.title}
                  </h4>
                </div>
              </div>
            </div>

            <h4 className="text-base font-bold text-neutral-900 mb-2">
              {activeSectionData.tagline}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6">
              {activeSectionData.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-neutral-200 text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>파타야 명문 20여 개 코스 티타임 확보</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-neutral-400 shrink-0" />
                <span>주중/주말 원하는 일정으로 3박 5일 / 4박 6일 구성 가능</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultationModal('파타야')}
              className="mt-6 w-full py-3 text-xs sm:text-sm font-semibold text-neutral-900 bg-white hover:bg-neutral-100 rounded-lg border border-neutral-300 transition-colors shadow-xs cursor-pointer text-center"
            >
              파타야 맞춤 골프 상담 신청
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
