// ── Nav: scroll-based active link highlight ──────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

// ── Career duration ───────────────────────────────────────────────────────────
(function () {
    const start = { year: 2009, month: 2 };
    const now = new Date();
    const curYear = now.getFullYear();
    const curMonth = now.getMonth() + 1;

    let years = curYear - start.year;
    let months = curMonth - start.month;
    if (months < 0) { years--; months += 12; }

    const text = months > 0 ? `${years}년 ${months}개월` : `${years}년`;
    document.getElementById('careerDuration').textContent = text;
})();

// ── Projects ─────────────────────────────────────────────────────────────────
const projects = [
    {
        title: 'AI 활용 테스트 단말 관리 시스템',
        period: '2025.06 ~ 현재',
        role: '리더',
        org: '카카오 서비스QA파트',
        summary: '기존 Jira에서 산발 관리되던 테스트 단말을 통합 관리하는 웹 시스템 개발',
        tags: ['Claude AI', 'Python Django', 'MySQL', 'LDAP', 'GitHub', 'VS Code'],
        achievements: [
            '단말 관리 서버 구축 및 LDAP·RDBMS 연동',
            '대시보드(디바이스 목록·상세·수정/삭제·데이터 관리) 개발',
            '디바이스 등록·수정·삭제·변경이력 관리 기능 구현',
            '사용성 강화, 데이터 무결성, 권한 관리, 성능 최적화 적용',
        ],
    },
    {
        title: '광고플랫폼 QA 도구 모음',
        period: '2025.06 ~ 현재',
        role: '리더',
        org: '카카오 서비스QA파트',
        summary: '깃허브·파이썬 코드에 분산된 테스트 도구를 단일 웹페이지로 통합',
        tags: ['Claude AI', 'Python Django', 'GitHub'],
        achievements: [
            '픽셀·SDK 모수 생성 — 카카오 픽셀 이벤트 생성 도구',
            '카탈로그 상품 목록 파일 생성 도구',
            '친구그룹 타게팅 — 테스트 전화번호 그룹 생성',
            '앱유저아이디 타게팅 — 카카오로그인 모수 생성',
            '카탈로그 상품 조회 — 상품 연동 비교 및 상태 조회',
            '메시지 로그 추적 — 메시지 광고 ID 기반 로그 추적',
        ],
    },
    {
        title: '카카오모먼트 QA 프로세스 개선',
        period: '2025.06 ~ 2025.12',
        role: '리더',
        org: '카카오 서비스QA파트',
        summary: '스쿼드 운영 및 시기 적절한 QA 대응을 위한 모먼트 QA 운영 전략 수립 및 리소스 조율',
        tags: ['프로세스 설계', 'QA 스케줄링'],
        achievements: [
            'QA 일정 산정 시 여유 확보 및 과제 리뷰와 QA 일정 분리',
            '기획 문서 일원화 및 실시간 업데이트 체계 구축',
            '스쿼드 간 협의 체계 및 실시간 커뮤니케이션 강화',
            '정기배포 알림 자동화 개발',
            '정기/비정기/상시 배포 가이드 수립',
        ],
    },
    {
        title: '메시지광고 신규 동선 QA',
        period: '2024.10 ~ 2025.02',
        role: 'QA 리더',
        org: '카카오 서비스QA파트',
        summary: 'DA/메시지 통합 광고구조 개선 대응 — 신규 메시지 백엔드 시스템 도입',
        tags: ['Spreadsheet', 'Postman', 'Pairwise'],
        achievements: [
            '메시지광고 Full TC 5,500여개 설계 (전체의 70%)',
            '광고계정에 따른 DSP 구조 변경 대응 TC 설계',
            '메시지 유형변경 Case Matrix 설계',
            'Open API 리스크 점검 및 TC화 진행',
        ],
        stat: 'QA 2명 · TE 8명 투입',
    },
    {
        title: '카카오 오픈 프로세스 수립',
        period: '2022.06 ~ 2024.08',
        role: '팀원',
        org: '카카오 서비스QA파트',
        summary: '카카오 서비스의 신규 오픈·전체 개편·변경 배포에 필요한 절차 수립',
        tags: ['프로세스 설계', '품질 SignOff'],
        achievements: [
            '신규 오픈·전체 개편·변경 배포 절차 수립',
            '품질 SignOff 가이드 및 평가 방법 정립',
            'QA Exit Criteria Level 수립',
            'TC 예상 개수 및 QA 일정 산정 방법 정의',
            '정보보안·오픈소스·인프라 검수 항목 가이드 작성',
        ],
    },
    {
        title: 'Test Assign 문서 일원화',
        period: '2023.06 ~ 2023.10',
        role: '1인 진행',
        org: '카카오 서비스QA파트',
        summary: '양분화된 어싸인 문서를 일원화하여 TE 리소스 분배 업무 효율화',
        tags: ['Spreadsheet', '프로세스 설계'],
        achievements: [
            '설문조사 및 의견 취합 결과 분석 후 샘플 초안 생성',
            '크루 인터뷰 기반 문서 업데이트 및 가이드 제공',
            '파일럿 적용 후 리뷰 및 V2.0 배포',
        ],
    },
    {
        title: '카카오모먼트 BAT 자동화 도입',
        period: '2020.12 ~ 2021.10',
        role: '리더',
        org: '카카오 QE파트',
        summary: '과제 외 범위 리그레션 테스트 효율화를 위한 자동화 적용 및 BAT 프로세스 도입',
        tags: ['Python', 'Selenium', 'Jenkins', 'GitHub'],
        achievements: [
            '자동화 툴·언어·코드 관리 방법 논의 및 스크립트 생성',
            '파일럿 진행 후 기획·개발 협의로 BAT 프로세스 정립',
            '대시보드 개편 이후 코드 유지보수',
            '2021.10 정식 프로세스 도입 완료',
        ],
    },
    {
        title: 'Open API 테스트 프로세스 구축',
        period: '2020.10 ~ 2020.12',
        role: '리더',
        org: '카카오 QE파트',
        summary: '카카오모먼트 Open API 테스트 절차 및 방법 수립, 테스트케이스 설계',
        tags: ['Postman', 'API 테스트'],
        achievements: [
            'Postman 사용법 숙지 및 스크립트 설계 방법 정의·가이드 제공',
            'Full TC 약 1,500개 설계',
            '2020.12 프로세스 수립 완료',
            '2022.07 API 스크립트 고도화',
        ],
    },
    {
        title: 'Google Nexus 검증 프로세스 정립',
        period: '2013.02 ~ 2013.08',
        role: '팀원',
        org: 'LG전자 SW인정1팀',
        summary: 'LG-Google 협업 신규 검증 프로세스 수립 (SWOT·MECE 기법 활용)',
        tags: ['SWOT', 'MECE', 'Pairwise'],
        achievements: [
            'Nexus 모델 특성 Ice-Breaking 분석',
            '검증 일정·범위·지역별 R&R 분석을 통한 국가별 검증 항목 정리',
            'LG-Google 검증 프로세스 간 SWOT·MECE 기법으로 효율화',
            '40여개국 검증 조직 중복 업무 및 불필요 항목 제거',
        ],
        stat: '이슈 수정률 25.1% → 45.2% · 중복이슈 35.4% → 3.2%',
    },
    {
        title: 'SW 모델 리더 — 신모델 품질보증',
        period: '2012.12 ~ 2018.05',
        role: '모델 리더',
        org: 'LG전자 SW인정1팀',
        summary: '북미향 스마트폰 신모델 SW 품질보증 모델 리더로서 테스팅 기획·리스크 평가·SW 승인 전반 담당',
        tags: ['Risk Assessment', 'Agile Testing', 'Pairwise', 'TRIZ'],
        achievements: [
            '신모델 SW품질보증 모델 리더 담당 — G6, Nexus4, Nexus5x, G Watch 등',
            '북미향 스마트폰 SW 테스팅 기획 및 Risk Assessment 도출',
            '변경점·이슈 발생 시 Agile Testing 기반 신규 시험법 도출 및 실행',
            'UI·성능·호환성·신뢰성 등 유관부서 검증 산출물 검토 및 SW 승인',
            '시장불량 예측을 위한 품질평가 Tool 개발',
        ],
    },
    {
        title: 'SW 테크니컬 엔지니어 — 검증 체계 수립',
        period: '2009.02 ~ 2012.11',
        role: '팀원',
        org: 'LG전자 SW인정1팀',
        summary: 'Technical Engineer로서 Android Smartphone 검증 체계 수립 및 글로벌 검증 조직 역량 강화',
        tags: ['Android', 'Checklist', 'Testbed', '글로벌 교육'],
        achievements: [
            'Android Smartphone Call/PIM Checklist 신규 개발 및 유지보수',
            'Testbed Emergency Call 검증 환경 개선 및 프로세스 구축',
            '검증원 역량 강화를 위한 Test Master 교육 강사 활동',
            '미국·인도 현지 검증원 대상 스마트폰 교육 및 이스라엘 신규 검증 조직 구축',
            '미국 출시 모델 현지 검증 지원·산출물 보고·Follow-up',
        ],
    },
];

function renderProjectList() {
    const list = document.getElementById('projectList');
    list.innerHTML = projects.map((p, i) => `
        <li class="project-list-item" data-index="${i}">
            <span class="project-list-period">${p.period.split(' ~ ')[0]}</span>
            <span class="project-list-title">${p.title}</span>
        </li>
    `).join('');

    list.querySelectorAll('.project-list-item').forEach(item => {
        item.addEventListener('click', () => {
            list.querySelectorAll('.project-list-item').forEach(el => el.classList.remove('active'));
            item.classList.add('active');
            renderProjectDetail(projects[+item.dataset.index]);
        });
    });

    // 첫 번째 항목 기본 선택
    list.querySelector('.project-list-item').click();
}

function renderProjectDetail(p) {
    const detail = document.getElementById('projectDetail');
    detail.innerHTML = `
        <div class="project-detail-inner">
            <div class="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
                <h5 class="project-detail-title mb-0">${p.title}</h5>
                <span class="badge bg-info text-dark">${p.role}</span>
            </div>
            <div class="project-detail-meta mb-3">
                <span><i class="bi bi-calendar3 me-1"></i>${p.period}</span>
                <span><i class="bi bi-building me-1"></i>${p.org}</span>
            </div>
            <p class="project-detail-summary">${p.summary}</p>
            <hr>
            <h6 class="fw-semibold mb-2">주요 업적</h6>
            <ul class="project-detail-achievements mb-3">
                ${p.achievements.map(a => `<li>${a}</li>`).join('')}
            </ul>
            ${p.stat ? `<div class="project-stat"><i class="bi bi-graph-up-arrow me-1"></i>${p.stat}</div>` : ''}
            <div class="d-flex flex-wrap gap-2 mt-3">
                ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>
        </div>
    `;
}

renderProjectList();
