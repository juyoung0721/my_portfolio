export interface ProjectType {
    title: string;
    category: string[];
    description: string;
    imageUrl?: string;
    overview?: string;
    technology?: string[];
    role?: string;
    gitLink?: string;
    files?: {
        name: string;
        url: string;
    }[];
}


export const projects: ProjectType[] = [
    {
        title: "Personalized Cat AI Service",
        category: ["LLM", "WEB"],
        description: "고양이 특징과 대화 기록을 반영한 맞춤형 대화 서비스",
        imageUrl: "/images/cat_project.png",
        overview: "이 프로젝트는 사용자가 설정한 고양이의 특징과 대화 기록을 반영하여 맞춤형 대화 서비스를 제공하는 웹 기반 AI 시스템입니다. 프론트엔드는 React와 JavaScript로 구현되었으며, 사용자 인터페이스는 직관적이고 감성적인 대화를 유도할 수 있도록 설계되었습니다. 백엔드에서는 OpenAI API를 활용하여 LLM을 기반으로 개인화된 대화를 구현했으며, 사용자 설정과 대화 로그를 바탕으로 자연스러운 상호작용을 지원합니다.\n\n배포 후 이틀 만에 3,000회 이상의 조회수와 평균 세션 시간 6분을 기록하며 사용자 몰입도를 증명하였습니다. 기존 챗봇과 달리 사용자 맞춤형 대화가 가능하다는 점에서 차별화되었고, 고양이와 감성적인 교감을 원하는 고객층에게 긍정적인 피드백을 받았습니다.",
        technology: ["React", "TypeScript", "OpenAI API", "LLM", "Firebase"],
        role: "프론트엔드 개발 및 LLM 기반 개인화 대화 기능 구현",
        gitLink: "https://github.com/taykim01/becoming_zipsa"
    },
    {
        title: "Customer Service Agent",
        category: ["LLM"],
        description: "RAG와 파인튜닝을 적용해 상담사 업무를 돕는 AI 서비스",
        imageUrl: "/images/customer_service.png",
        overview: "이 프로젝트는 상담사와 고객 간의 대화를 실시간으로 분석하고, 정확한 답변을 제공하는 LLM 기반 AI 지원 시스템입니다. 기획부터 UI 디자인, 프론트엔드 구현, 데이터셋 및 데이터베이스 구축, LLM 개발까지 전반적인 개발 과정을 담당했습니다.\n\nSTT(Speech-to-Text) 모델을 통해 상담 중 음성을 텍스트로 변환한 뒤, 필터링과 전처리를 수행하였습니다. 기업 전용 데이터를 바탕으로 RAG(Retrieval-Augmented Generation)를 위한 문서 DB를 구축하고, OpenAI 모델 파인튜닝을 위한 QA 기반 데이터셋을 생성했습니다.\n\n대화 내용을 실시간으로 분석하여 관련 문서의 상위 3~4개를 추천하고, 상담사의 말투를 반영한 응답을 자동 생성함으로써 업무 효율성과 자연스러움을 동시에 향상시켰습니다. 결과적으로, 기존 OpenAI 모델 사용 시 평균 10초가 소요되던 응답 시간이 파인튜닝 모델에서는 평균 2~5초로 줄어들었으며, 문서 추천 정확도는 약 92%로 기업 맞춤형 데이터를 제공했습니다.",
        technology: ["OpenAI API", "RAG", "STT", "Python", "Streamlit", "Finetuning"],
        role: "기획, UI 디자인, 프론트엔드 개발, 데이터셋 및 DB 구축, LLM 개발",
        files: [
            {
                name: "기술설명서.pdf",
                url: "/files/customer_service_techmanual.pdf"
            },
        ]
    },
    {
        title: "Pixel-Based Promotion Platform",
        category: ["WEB"],
        description: "픽셀 단위로 이미지를 구매하고 메시지를 등록하는 디지털 광고 플랫폼",
        imageUrl: "/images/pixel_service.png",
        overview: "이 프로젝트는 사용자가 원하는 위치에 이미지를 업로드하고 특정 영역의 픽셀을 구매하여 개인 메시지 또는 브랜드 광고를 남길 수 있는 디지털 광고 서비스입니다. 픽셀 단위로 광고를 구매할 수 있도록 설계된 인터페이스를 제공하며, 사용자는 단순한 클릭만으로 광고 공간을 선택하고 이미지를 등록할 수 있습니다.\n\n전체 시스템은 프론트엔드와 백엔드 모두에서 구현되었으며, 사용자 등록, 이미지 업로드 및 픽셀 좌표 저장, 구매 정보 연동 등의 기능을 포함합니다. 프론트엔드는 직관적인 UI/UX를 제공하여 누구나 쉽게 접근 가능하며, 백엔드에서는 사용자 요청 처리, 이미지 저장, DB 연동 및 서버 사이드 로직을 구축하였습니다.\n\n광고와 메시지를 결합한 새로운 형태의 참여형 플랫폼으로서, 소규모 브랜드와 일반 사용자 모두가 쉽게 디지털 공간에 흔적을 남기고 공유할 수 있는 서비스를 목표로 설계되었습니다.",
        technology: ["React", "TypeScript", "Next.js", "Supabase"],
        role: "시스템 설계, 프론트엔드 및 백엔드 개발, 전체 통합 구현",
        gitLink: "https://github.com/jabara2/kairos_team2.git"
    },
    {
        title: "Assistant AI : Fine-tuning",
        category: ["LLM"],
        description: "기초 파이썬 강의 조교 역할을 수행하는 AI Agent",
        overview: "이 프로젝트는 고려대학교 신입생 대상 기초 프로그래밍 강의에서 조교(TA)의 반복적 질문 응답 부담을 줄이고, 학생들에게 신속하고 정확한 피드백을 제공하기 위해 개발된 AI 기반 조교 시스템입니다. \n\nLLM을 활용하여 단순한 Q&A를 넘어, 학생들이 작성한 코드의 오류를 분석하고 그에 대한 설명 및 해결 방안을 제공할 수 있도록 설계되었습니다. 시스템은 질문 유형에 따라 다른 작업을 수행하는 멀티 에이전트 구조로 이루어져 있으며, 특히 코드 설명 및 디버깅에 특화된 모델을 중심으로 구성되었습니다.\n\n강의자료와 과제 기반 데이터를 수집·정제하여 맞춤형 데이터셋을 구축하고, 다양한 오픈소스 LLM을 파인튜닝하여 성능을 비교했습니다. 파인튜닝 모델은 GPT 모델에 근접하거나 뛰어넘는 성능을 보였으며, 학습자가 이해할 수 있도록 쉬운 설명 중심의 답변을 생성하도록 설계되었습니다.\n\n해당 시스템은 현재 실제 수업에 적용되어 운영 중이며, 웹 기반 인터페이스를 통해 학생들이 실시간으로 오류 해결과 피드백을 받을 수 있도록 구현되어 있습니다.",
        technology: ["Python", "Solar", "OpenAI", "Llama", "Open Source LLM", "Fine-tuning"],
        role: "도메인 맞춤 데이터셋 구축, 오픈소스 LLM 모델 파인튜닝 및 성능 비교, 코드 설명/디버깅 모델 개발"
    },      
    {
        title: "NWDAF Implementation Using Open Source",
        category: ["AI/DATA", "NETWORK"],
        description: "5G 네트워크 자동화를 위한 NWDAF 오픈소스 구현 및 성능 분석 프로젝트",
        overview: "이 프로젝트는 5G Core Network 환경에서 NWDAF(Network Data Analytics Function)를 OpenAirInterface(OAI) 오픈소스를 기반으로 구현하고, 이를 통해 네트워크 성능과 사용자 경험을 실시간으로 분석하여 네트워크 자동화 가능성을 검증한 연구입니다.\n\nNWDAF는 가입자 수, 세션 성공률, 사용자 통신 통계, 이동성 정보 등 핵심 네트워크 데이터를 수집하고 AI/ML 기술을 통해 분석함으로써 네트워크 최적화와 운영 효율성을 향상시키는 기능을 합니다. 프로젝트에서는 OAI 기반 테스트베드를 구축하고, Docker 환경에서 AMF, SMF 등의 네트워크 기능을 연동하여 NWDAF 기능을 테스트했습니다.\n\n또한, 이벤트 구독 API와 분석 정보 API를 통해 실시간으로 데이터를 조회하고, '비정상 트래픽 탐지', '모빌리티 예측', '세션 성공률 분석' 등 다양한 분석을 수행했습니다. 특히 AutoEncoder 기반의 이상 탐지 모델을 통해 비정상 트래픽을 감지하고, 실시간 대응 가능성을 평가했습니다.\n\n결과적으로 NWDAF의 도입이 네트워크 상태 모니터링, 서비스 품질 향상, 운영 비용 절감에 기여할 수 있음을 확인하였고, 본 구현 및 분석 결과는 향후 실환경 적용 전 검증 단계로서 중요한 참고 자료로 활용될 수 있습니다.",
        technology: ["OpenAirInterface", "Docker", "Linux", "Python", "Go", "AI/ML"],
        files: [
            {
                name: "논문.pdf",
                url: "/files/졸업논문.pdf"
            },
        ]
    },
    {
        title: "Portfolio Website with Chatbot",
        category: ["WEB"],
        description: "LLM 기반 챗봇이 탑재된 개인 포트폴리오 웹사이트",
        imageUrl: "/images/portfolio.png",
        overview: "이 프로젝트는 ㄴ프로젝트, 기술 스택, 경력 및 활동들을 체계적으로 소개하기 위한 포트폴리오 웹사이트입니다. 전체 구조는 Next.js와 React를 기반으로 설계되었으며, TypeScript와 TailwindCSS를 활용하여 깔끔하고 반응형으로 구현하였습니다.\n\n특히, 웹사이트에는 개인 데이터베이스와 연결된 AI 챗봇이 내장되어 있어 방문자가  궁금한 점을 질문하면 실시간으로 응답하는 인터랙티브 기능을 제공합니다. 챗봇은 OpenAI의 GPT API를 기반으로 구현되었으며, 프롬프트 튜닝을 통해 경력과 경험을 반영한 응답을 생성하도록 설계되었습니다.\n\n이 웹사이트는 단순한 자기소개를 넘어, 사용자와 능동적으로 소통하며 개발자 개인 브랜딩을 강화하는 목적을 가지고 있습니다.",
        technology: ["Next.js", "React", "TypeScript", "TailwindCSS", "OpenAI API", "LLM", "Firebase"],
        role: "단독 개발 - 전체 UI/UX 설계 및 개발, LLM 기반 챗봇 구현, 개인 DB 연동 및 배포",
        gitLink: "https://github.com/juyoung0721/my_portfolio"
    },
    {
        title: "Analysis of CU/DU Split in OAI",
        category: ["NETWORK"],
        description: "OAI 기반의 CU/DU 분리 및 CU CUPS 구조 분석 스터디",
        overview: "이 프로젝트는 MNC LAB 인턴의 일환으로 OpenAirInterface(OAI)에서 구현된 5G RAN 구조 중 CU(Control Unit)와 DU(Distributed Unit)의 분리 구조와 CU 내부의 CUPS(Control and User Plane Separation) 구조에 대한 심도 있는 분석을 수행하였습니다. 발표자는 CU/DU의 도커 기반 구성 방식, configuration 파일 설정, 그리고 CUCP, CUUP, DU 컨테이너의 구동 원리까지 분석하고 발표하였습니다.\n\nOAI는 gNB 이미지를 기반으로 하나의 이미지에서 다양한 역할을 수행하며, config 파일에 따라 CUCP, CUUP, DU 등으로 역할을 분리할 수 있습니다. 각 기능은 ITTI(Inter-Task Thread Interface)를 기반으로 독립적인 task로 구성되어 있으며, `itti_create_task`와 `itti_receive_msg` 함수 등을 통해 메시지 기반 통신이 이루어집니다. 발표자는 F1AP_CU_task를 예시로 각 task의 실행 흐름을 분석하였고, 전체 실행 구조를 바탕으로 CU/DU 간 메시지 흐름과 시스템 작동 원리를 설명했습니다.\n\n이 연구는 기존 OAI의 CU 중심 CUPS 구조를 넘어, 향후 DU에서도 유사한 분리 구조(CUPS)를 구현하기 위한 기반 분석이었습니다. 연구 과정에서 발표자는 실제 코드 수준까지 분석하며 도커 환경에서의 설정 및 실행 원리, OAI 구조 전반에 대한 깊은 이해를 바탕으로 발표를 구성하였습니다.",
        technology: ["OpenAirInterface", "Docker", "Linux", "C", "ITTI Framework"],
    },
    {
        title: "Fine-Tuning LLMs for News Summarization",
        category: ["LLM", "AI/DATA"],
        description: "Llama 모델을 기반으로 CNN/DailyMail 요약 성능 개선을 위한 파인튜닝 프로젝트",
        overview: "이 프로젝트는 Llama 3.2 1B-Instruct 모델을 활용해 CNN/DailyMail 3.0.0 데이터셋을 요약하는 성능을 개선하고, 다양한 프롬프트 및 하이퍼파라미터 전략을 통해 Rouge Score 향상을 실험한 연구입니다.\n\n초기 분석에서는 요약문의 길이 분포와 토큰 수를 기반으로 전체 데이터셋 특성을 파악했고, max/min token 설정에 따른 Rouge score의 경향성을 평가했습니다. 프롬프트 엔지니어링에서는 반복 문구 제거와 few-shot 예제 삽입이 성능에 미치는 영향을 실험했으며, 결과적으로 반복 표현 제거가 F1 Score를 향상시키고, few-shot 예제는 성능을 저하시킨다는 사실을 도출했습니다.\n\nFine-tuning은 다양한 데이터셋 크기(1K~30K)와 epoch 수(1~3)를 조합해 실험하였고, 최적 결과는 Epoch 3, Dataset 20K 조합에서 나왔습니다. 이 설정에서의 Rouge-1 F1 score는 0.4113, Rouge-L F1 score는 0.3829를 기록했으며, 기존 베이스라인보다 명확한 개선이 관측되었습니다. \n\n모델 성능은 학습량이 증가함에 따라 개선되었으나, 일정 수준 이상에서는 과적합 경향이 나타났으며, 소형 LLM은 요약보다는 분류 등 단순 태스크에 적합하다는 결론도 함께 도출하였습니다. \n\n이 프로젝트는 제한된 리소스 환경에서 최대한의 성능을 끌어내기 위한 전략을 설계하고 검증한 사례로, 실제 도메인 요약 시스템 개발 시 중요한 기초 실험으로 활용될 수 있습니다.",
        technology: ["Python", "Transformers", "Hugging Face", "Llama-3.2-1B-Instruct", "ROUGE Metric", "Prompt Engineering", "Finetuning"],
        role: "데이터셋 분석, 프롬프트 설계, 모델 파인튜닝 실험 및 결과 평가",
        files: [
            {
                name: "발표 자료.pdf",
                url: "/files/LLM 파인튜닝.pdf"
            },
        ]
    },
    {
        title: "Personalized Health Care Chatbot",
        category: ["LLM"],
        description: "사용자 정보를 바탕으로 건강 정보를 대화 형식으로 제공하는 챗봇",
        overview: "이 프로젝트는 사용자의 건강 관련 입력 정보를 기반으로 맞춤형 건강 정보를 제공하는 LLM 기반 헬스케어 챗봇 개발을 목표로 진행되었습니다. 사용자의 생활 습관, 수면, 운동, 식사 등 다양한 데이터를 입력받아 자연스러운 대화 형식으로 필요한 건강 정보를 안내하는 기능을 갖추고 있습니다.\n\nLLM 기반 자연어 생성 능력을 활용하여 사용자의 입력을 이해하고, 적절한 피드백과 조언을 제공하는 것이 핵심이며, 단순한 응답이 아닌 상담 형태의 응답을 설계하기 위해 프롬프트를 최적화했습니다. 또한, 사용자별 데이터를 저장하고 관리할 수 있도록 데이터베이스를 연동하였고, UI/UX는 Streamlit을 사용하여 구현하였습니다.",
        technology: ["Python", "OpenAI API", "LLM", "RAG", "Pinecone"],
    },
    {
        title: "Multimodal AI Narration Generator for Videos",
        category: ["AI/DATA"],
        description: "영상에 대한 정보를 바탕으로 자동 나레이션을 생성하는 멀티모달 AI 프로젝트",
        overview: "이 프로젝트는 영상을 시청하기 어려운 사용자나, 영상의 핵심 내용을 빠르게 파악하려는 사용자를 위한 나레이션 생성 서비스를 개발한 것입니다. 영상, 이미지, 오디오 등 다양한 형태의 멀티모달 데이터를 활용하여, 영상에 대한 핵심 정보를 AI가 분석하고 자연스러운 음성 나레이션으로 변환하는 기능을 구현했습니다.\n\n영상 내 시각적 요소는 이미지 분석 모델을 통해 처리하고, 음성 및 자막 데이터는 자연어 처리 모델과 결합하여, 전체적인 흐름을 이해한 후 사람이 들었을 때 자연스럽고 의미 있는 문장으로 변환되도록 설계했습니다. 생성된 텍스트는 TTS(Text-to-Speech)를 활용해 실제 나레이션 오디오로 변환되어 영상에 삽입됩니다.\n\n프로젝트는 고객의 문제 정의 단계부터 시작하여, '영상 시청이 어려운 환경에서도 내용을 전달받고 싶다'는 니즈를 해결하기 위한 목적에서 출발했습니다. 다양한 멀티모달 AI 모델을 비교·활용하며 기술적인 역량을 강화했고, 사용자 경험을 고려한 콘텐츠 요약 및 음성 생성 흐름도 함께 설계했습니다. 팀원들과의 협업을 통해 아이디어를 구체화하고 실현 가능성을 높인 창의적인 프로젝트였습니다.",
        technology: ["Python", "OpenAI Whisper", "TTS", "Hugging Face Transformers", "Multimodal AI"],
        role: "문제 정의, 멀티모달 모델 리서치 및 적용, AI 나레이션 생성 파이프라인 설계 및 구현"
    },
]; 