export interface GolfDocument {
  id: string;
  title: string;
  category: '여행 일정표' | '골프장 안내' | '이용 안내';
  file: string;
  price?: string;
  hotel?: string;
  rounds?: string;
  inclusions?: string[];
  exclusions?: string[];
  itinerarySummary?: {
    day1: string;
    day2: string;
    day3: string;
    day4?: string;
  };
}

export interface GolfCategorySection {
  id: string;
  name: string;
  title: string;
  tagline: string;
  sideImage: string;
  description: string;
  documents: GolfDocument[];
}

export interface RegionInfo {
  id: string;
  title: string;
  english: string;
  description: string;
  dialogDescription: string;
  dialogDetail: string;
  climateTip: string;
  topCourses: string[];
  distanceFromAirport: string;
  badge: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  anchorId: string;
  iconName: string;
  detail: string;
}

export const BRAND_INFO = {
  websiteName: "BGIT - 태국 현지 골프전문",
  brandName: "BGIT Thai",
  slogan: "최고품질과 최저가격의 골프상품",
  introEyebrow: "ABOUT BGIT",
  introTitle: "BGIT Thai",
  introDescription: "태국 파타야 및 방콕을 기반으로\n한국 골프 여행사에 최고품질의 최저가\n골프 상품을 직영 공급하고 있습니다.",
  bannerEyebrow: "한국 여행사가 신뢰하는",
  bannerTitle: "태국 최고품질 · 최저가\n골프 파트너",
  bannerButtonLabel: "지금 BGIT와 상담하세요",
  favicon: "/assets/aistudio/logo_transparent.png",
  logoImage: "/assets/aistudio/logo_transparent.png",
  heroImage: "https://cdn.sixshop.io/sf-gateway/public/stores/bgit-p/website/ewfwfw_1793630236790.jpg",
  contactKakao: "https://pf.kakao.com",
};

export const BENEFITS = [
  {
    number: "01",
    title: "직영 랜드사 최저가 공급",
    description: "중간 유통 단계를 거치지 않는 현지 법인 직영 공급으로 한국 파트너 여행사의 영업 마진과 가격 경쟁력을 극대화해 드립니다."
  },
  {
    number: "02",
    title: "24시간 현지 전문 매니저",
    description: "골프 전문 매니저가 기상 변화, 티타임 조율, 비상 상황을 실시간 카카오톡/전화로 컨트롤하여 안심 여행을 보장합니다."
  },
  {
    number: "03",
    title: "안전검증 여성골퍼 조인",
    description: "태국 정부 발행 신분증과 휴대폰 본인인증을 완료한 매너 회원 및 프로 골퍼만 엄선하여 4~5시간 어색함 없는 팀 플레이를 주선합니다."
  }
];

export const RATE_NOTES = {
  title: "요금 안내",
  line1: "위 요금표는 주중 요금표입니다. 골프장은 주말 및 공휴일에 추가요금이 있습니다 (위 요금표 참조).",
  line2: "호텔 요금은 주중·주말 동일합니다."
};

export const PRODUCT_SECTIONS: GolfCategorySection[] = [
  {
    id: "budget",
    name: "파타야 가성비",
    title: "파타야 가성비 골프상품",
    tagline: "실속과 퀄리티를 모두 잡은 파타야 베스트셀러",
    sideImage: "https://cdn.sixshop.io/sf-gateway/public/stores/bgit-p/themes/203555789_4562827920394893_6474521329497473652_n_1793603569908.jpg",
    description: "시내 접근성이 우수한 엄선된 4성급 호텔과 합리적인 그린피를 결합해 높은 만족도를 자랑하는 일정입니다.",
    documents: [
      {
        id: "proud-3color",
        title: "프라우드 3색골프",
        category: "여행 일정표",
        price: "520,000원~",
        hotel: "4성급 프라우드 호텔 (Proud Hotel Pattaya)",
        rounds: "18홀 3회 라운드 (총 54홀)",
        file: "https://cdn.sixshop.io/public/11/stores/bgit-p/d1083786-ee8b-4fd0-a7e3-d1942c00fe9d/520%2C000%EC%9B%90%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EA%B0%80%EC%84%B1%EB%B9%84%20-%204%EC%84%B1%EA%B8%89%20%ED%94%84%EB%9D%BC%EC%9A%B0%EB%93%9C%203%EC%83%89%EA%B3%A8%ED%94%84.pdf",
        inclusions: ["프라우드 호텔 숙박 (2인 1실)", "전 일정 호텔 조식", "그린피 18홀 3회 (총 54홀)", "골프장 및 공항 단독 송영 차량"],
        exclusions: ["항공료", "캐디피 (약 350~400바트/18홀)", "캐디팁 (약 300~400바트/18홀)", "전동카트 (약 600~800바트/18홀)", "중/석식"],
        itinerarySummary: {
          day1: "방콕 수완나품/돈므앙 공항 도착 후 전용 차량 미팅 → 파타야 이동 후 프라우드 호텔 체크인 및 휴식",
          day2: "호텔 조식 후 골프장 이동 → 18홀 라운드 진행 → 호텔 귀환 및 자유시간 (시내 야시장 투어 등)",
          day3: "호텔 조식 후 제2골프장 이동 → 18홀 라운드 진행 → 마사지 또는 파타야 비치 로드 휴식",
          day4: "호텔 체크아웃 후 제3골프장 이동 → 18홀 라운드 진행 → 공항 송영 및 귀국편 탑승"
        }
      },
      {
        id: "mpattaya-3color",
        title: "엠파타야 3색골프",
        category: "여행 일정표",
        price: "565,000원~",
        hotel: "4성급 엠파타야 호텔 (M Pattaya Hotel)",
        rounds: "18홀 3회 라운드 (총 54홀)",
        file: "https://cdn.sixshop.io/public/11/stores/bgit-p/b261eb8e-e8b9-45b8-aaf4-b9ef9faa9f79/565%2C000%EC%9B%90%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EA%B0%80%EC%84%B1%EB%B9%84%20-%204%EC%84%B1%EA%B8%89%20%EC%97%A0%ED%8C%8C%ED%83%80%EC%95%BC%203%EC%83%89%EA%B3%A8%ED%94%84.pdf",
        inclusions: ["엠파타야 호텔 숙박 (2인 1실, 쾌적한 신축급 컨디션)", "전 일정 호텔 조식", "그린피 18홀 3회 (총 54홀)", "전용 기사 배정 단독 차량"],
        exclusions: ["항공료", "캐디피, 캐디팁, 전동카트", "식사(중/석식), 개인 경비"],
        itinerarySummary: {
          day1: "수완나품 공항 미팅 → 파타야 엠파타야 호텔 체크인",
          day2: "조식 후 파타야 근교 골프장 18홀 라운드 → 라운드 후 자유일정",
          day3: "조식 후 파타야 인기 골프장 18홀 라운드 → 시내 마사지 및 맛집 투어",
          day4: "체크아웃 후 18홀 라운드 → 샤워 후 공항 이동 및 출국"
        }
      }
    ]
  },
  {
    id: "premium",
    name: "파타야 고품격",
    title: "파타야 고품격 골프상품",
    tagline: "바다 전망 5성급 리조트와 상급 골프 코스의 여유로운 조화",
    sideImage: "https://cdn.sixshop.io/sf-gateway/public/stores/bgit-p/themes/238443516_4737495546261462_8561454675410566813_n_1793608520962.jpg",
    description: "파타야 중심가 5성급 미트비치 호텔과 명문 코스를 엄선하여 품격 높은 휴식과 라운드를 제공합니다.",
    documents: [
      {
        id: "mytt-beach-3color",
        title: "홀리데이 인 파타야 / 미트비치 3색골프",
        category: "여행 일정표",
        price: "927,000원~",
        hotel: "5성급 미트비치 호텔 (Mytt Beach Hotel) / 홀리데이 인 파타야",
        rounds: "18홀 3회 라운드 (상급 골프장 엄선)",
        file: "https://cdn.sixshop.io/public/11/stores/bgit-p/e7e64717-b91b-46c0-9979-41c20059a75c/927%2C000%EC%9B%90%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EA%B3%A0%ED%92%88%EA%B2%A9%20-%205%EC%84%B1%EA%B8%89%20%EB%AF%B8%ED%8A%B8%EB%B9%84%EC%B9%98%203%EC%83%89%EA%B3%A8%ED%94%84.pdf",
        inclusions: ["5성급 미트비치 디럭스룸 숙박", "풍성한 5성급 호텔 조식 뷔페", "상급 명문 골프장 18홀 3회 그린피", "VIP 전용 밴 차량 및 전담 기사"],
        exclusions: ["국제선 항공권", "캐디피, 캐디팁, 전동카트", "중/석식"],
        itinerarySummary: {
          day1: "공항 도착 → VIP 전용 리무진 밴 탑승 → 파타야 5성급 미트비치 호텔 체크인",
          day2: "조식 뷔페 → 람차방 또는 파타나 18홀 고품격 라운드 → 호텔 휴식 및 루프탑 바",
          day3: "조식 후 시암CC 또는 치찬CC 18홀 라운드 → 해변 디너 및 자유일정",
          day4: "호텔 체크아웃 후 18홀 라운드 → 전용 차량으로 방콕 공항 이동"
        }
      },
      {
        id: "course-guide",
        title: "태국 골프장 안내 가이드",
        category: "골프장 안내",
        price: "상세 안내서",
        hotel: "시암CC, 람차방, 치찬, 파타나, 부라파 등 10개 코스",
        rounds: "코스별 난이도 및 레이아웃 제원",
        file: "https://example.org/thailand-golf-course-guide.pdf",
        inclusions: ["골프장별 홀 수, 코스 잔디 종류(버뮤다/파스팔룸)", "클럽하우스 시설 및 락커룸 수준", "시즌별 그린 스피드 및 코스 관리 상태", "이동 소요시간 가이드"],
        exclusions: [],
        itinerarySummary: {
          day1: "시암 컨트리클럽: Old, Plantation, Rolling Hills, Waterside 4개 코스 총 72홀 명문",
          day2: "치찬 골프 리조트: 황금절벽사원을 조망하며 라운드하는 최고급 신흥 명문 코스",
          day3: "람차방 인터내셔널: 잭 니클라우스 설계의 27홀 챔피언십 골프장"
        }
      },
      {
        id: "travel-prep-guide",
        title: "골프 여행 준비 및 이용 안내",
        category: "이용 안내",
        price: "무료 배포 안내서",
        hotel: "태국 골프 여행 필수 팁 & 매뉴얼",
        rounds: "캐디 팁, 복장 규정, 수하물",
        file: "https://example.org/travel-preparation-guide.pdf",
        inclusions: ["골프백 항공 수하물 위탁 팁 및 파손 방지 요령", "태국 1인 1캐디 문화 및 에티켓 가이드", "우천 시 레인체크(Rain Check) 처리 규정", "현지 통화(바트) 환전 및 매너 팁 기준"],
        exclusions: [],
        itinerarySummary: {
          day1: "복장 규정: 깃 있는 상의(카라티), 단정한 골프 바지, 소프트 스파이크 골프화 필수",
          day2: "캐디 매너: 라운드 전 인사 및 친절한 소통, 티오프 시간 30분 전 클럽하우스 도착",
          day3: "기상 안내: 태국 스콜성 소나기는 보통 30분~1시간 내 그치므로 잠시 대기 후 라운드 속개 가능"
        }
      }
    ]
  },
  {
    id: "luxury",
    name: "파타야 럭셔리",
    title: "파타야 럭셔리 골프상품",
    tagline: "LPGA 개최지 시암CC 풀코스와 최고급 5성급 리조트의 궁극의 골프 투어",
    sideImage: "https://cdn.sixshop.io/sf-gateway/public/stores/bgit-p/themes/238443516_4737495546261462_8561454675410566813_n_1793608520962.jpg",
    description: "태국 최고의 명문 코스 시암CC 4개 코스와 치찬 골프장을 그랜드 센터 포인트 스페이스 / 케이프다라 럭셔리 리조트와 함께 만나는 VIP 일정입니다.",
    documents: [
      {
        id: "luxury-siam-special",
        title: "시암CC 4대 코스 & 5성급 스페이스 럭셔리",
        category: "여행 일정표",
        price: "1,280,000원~",
        hotel: "5성급 그랜드 센터 포인트 스페이스 / 케이프다라 리조트",
        rounds: "시암CC (Old / Plantation / Waterside) 18홀 3회",
        file: "https://cdn.sixshop.io/public/11/stores/bgit-p/e7e64717-b91b-46c0-9979-41c20059a75c/927%2C000%EC%9B%90%20%ED%8C%8C%ED%83%80%EC%95%BC%20%EA%B3%A0%ED%92%88%EA%B2%A9%20-%205%EC%84%B1%EA%B8%89%20%EB%AF%B8%ED%8A%B8%EB%B9%84%EC%B9%98%203%EC%83%89%EA%B3%A8%ED%94%84.pdf",
        inclusions: ["최상급 5성급 리조트 숙박 (디럭스 오션뷰)", "시암 컨트리클럽 18홀 3회 명문 그린피", "전 일정 단독 VIP 하이루프 리무진 밴 차량", "공항 의전 패스트트랙 연계 상담 가능"],
        exclusions: ["항공료", "캐디피, 캐디팁, 전동카트", "개인 식비"],
        itinerarySummary: {
          day1: "방콕 수완나품 공항 VIP 밴 미팅 → 파타야 최고급 리조트 체크인",
          day2: "LPGA 혼다 타일랜드 개최지 '시암CC 올드 코스' 18홀 라운드",
          day3: "천혜의 레이아웃 '시암CC 플랜테이션 코스' 18홀 라운드",
          day4: "아름다운 수변 풍경의 '시암CC 워터사이드' 18홀 라운드 → 샤워 후 공항 이동"
        }
      }
    ]
  }
];

export const REGIONS: RegionInfo[] = [
  {
    id: "bangkok",
    title: "방콕",
    english: "BANGKOK",
    badge: "도심 & 명문",
    description: "도시의 즐거움과 라운드를 함께 담고 싶은 여행.",
    dialogDescription: "도시 여행과 골프를 함께 계획하기 좋은 지역입니다. 숙소와 코스 사이의 이동 시간을 고려해 일정을 구성해 보세요.",
    dialogDetail: "골프장 선택은 여행 날짜, 숙소 위치, 희망 티오프 시간과 함께 살펴보는 것이 좋습니다. 상세 코스와 예약 가능 여부는 일정에 따라 확인이 필요합니다.",
    climateTip: "연중 라운드 가능하며, 오전 6시~8시 티오프 시 가장 쾌적하게 18홀을 마칠 수 있습니다.",
    topCourses: ["타이 컨트리클럽", "알파인 골프클럽", "나바타니 골프코스", "로얄 방파인"],
    distanceFromAirport: "수완나품 공항에서 30~50분 소요"
  },
  {
    id: "pattaya",
    title: "파타야",
    english: "PATTAYA",
    badge: "해변 & 골프천국",
    description: "바다 가까이 머물며 여유롭게 즐기는 골프.",
    dialogDescription: "해변에서의 휴식과 라운드를 함께 생각하는 여행입니다. 원하는 숙소 위치와 골프장 동선을 먼저 살펴보세요.",
    dialogDetail: "골프장 선택은 여행 날짜, 숙소 위치, 희망 티오프 시간과 함께 살펴보는 것이 좋습니다. 상세 코스와 예약 가능 여부는 일정에 따라 확인이 필요합니다.",
    climateTip: "해변에서 불어오는 시원한 바닷바람과 함께 20여 개 골프장이 밀집해 있어 이동 피로가 적습니다.",
    topCourses: ["시암CC (4개 코스)", "치찬 골프 리조트", "람차방 인터내셔널", "파타나 스포츠클럽"],
    distanceFromAirport: "수완나품 공항에서 고속도로로 약 1시간 20분"
  },
  {
    id: "chiangmai",
    title: "치앙마이",
    english: "CHIANG MAI",
    badge: "고산 & 힐링",
    description: "산과 초록을 곁에 두고 나만의 속도로 보내는 시간.",
    dialogDescription: "북부의 풍경을 즐기며 라운드와 휴식의 균형을 찾아보세요. 여행 시기의 날씨도 함께 확인하는 것이 좋습니다.",
    dialogDetail: "골프장 선택은 여행 날짜, 숙소 위치, 희망 티오프 시간과 함께 살펴보는 것이 좋습니다. 상세 코스와 예약 가능 여부는 일정에 따라 확인이 필요합니다.",
    climateTip: "11월~2월은 아침/저녁 15~20도로 한국의 쾌적한 초가을 날씨처럼 선선합니다.",
    topCourses: ["치앙마이 하이랜드", "알파인 골프 리조트 치앙마이", "가산 레거시", "서밋 그린밸리"],
    distanceFromAirport: "치앙마이 국제공항에서 20~40분 소요"
  },
  {
    id: "huahin",
    title: "후아힌",
    english: "HUA HIN",
    badge: "왕실 휴양 & 프라이빗",
    description: "차분한 해변의 분위기와 골프에 집중하는 휴식.",
    dialogDescription: "해변의 차분한 분위기 속에서 골프를 중심으로 여행을 그려보세요. 공항에서의 이동과 체류 기간을 함께 고려해 보세요.",
    dialogDetail: "골프장 선택은 여행 날짜, 숙소 위치, 희망 티오프 시간과 함께 살펴보는 것이 좋습니다. 상세 코스와 예약 가능 여부는 일정에 따라 확인이 필요합니다.",
    climateTip: "태국 왕실의 전통 여름 휴양지로 평온하고 품격 있는 분위기에서 골프에만 집중할 수 있습니다.",
    topCourses: ["블랙 마운틴 골프클럽", "파인애플 밸리 (구 반얀)", "스프링필드 로얄", "팜힐스"],
    distanceFromAirport: "방콕 공항에서 단독 전용차량으로 약 2시간 30분"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "journeys",
    title: "골프 여행",
    description: "희망 지역과 라운드 횟수에 맞춰 여행을 계획합니다.",
    anchorId: "journeys",
    iconName: "Flag",
    detail: "방콕, 파타야, 치앙마이, 후아힌 등 여행자의 실력과 예산, 선호하는 코스 성향에 최적화된 그린피 및 티타임을 예약해 드립니다."
  },
  {
    id: "custom",
    title: "맞춤 여행",
    description: "동반 인원과 여행 기간, 원하는 속도를 함께 고려합니다.",
    anchorId: "custom",
    iconName: "Compass",
    detail: "단 1팀만을 위한 프라이빗 단독 일정부터 동호회/기업 단체 투어, 2인 조인까지 세심한 맞춤 일정표를 설계합니다."
  },
  {
    id: "stay",
    title: "호텔·리조트",
    description: "코스까지의 이동과 휴식 시간을 생각하며 숙소를 살펴봅니다.",
    anchorId: "stay",
    iconName: "Hotel",
    detail: "가성비 4성급 시내 호텔부터 오션뷰 5성급 럭셔리 리조트까지, 골프장 이동 동선을 최소화하는 숙소를 최저가 공급합니다."
  },
  {
    id: "transfer",
    title: "차량 서비스",
    description: "공항과 숙소, 골프장을 잇는 이동 계획을 상담합니다.",
    anchorId: "transfer",
    iconName: "Car",
    detail: "베테랑 현지 드라이버가 운전하는 깨끗하고 안락한 VIP 전용 밴으로 골프백 보관과 편안한 휴식을 보장합니다."
  }
];
