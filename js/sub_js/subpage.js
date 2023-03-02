// DOM 셀렉터
const categoryBtn = document.querySelector(".gnb__item.category");
// 모바일 DOM 셀렉터
const mobileMenu = document.querySelector(".gnb__drop-mobile");
const mobileDimmed = document.querySelector(".gnb__dimmed");
const mobileCategory = document.querySelector(".gnb__link__item.category");
const mobileContactBtn = document.querySelector(".gnb__link__item.contact");
// 이벤트 핸들러
function handleToggleBtn() {
    // 카테고리 리스트 열기
    categoryBtn.classList.toggle("-active");
    // 모바일 카테고리 리스트 열기
    mobileCategory.classList.toggle("-active");
}
function handleOpenMenu() { 
    // 모바일 메뉴 열기
    mobileMenu.classList.add("-active");
    // 모바일 오버레이 활성
    mobileDimmed.classList.add("-active");
}
function handleCloseMenu() {
    // 모바일 메뉴 닫기
    mobileMenu.classList.remove("-active");
    // 모바일 오버레이 비활성
    mobileDimmed.classList.remove("-active");
    // 모바일 카테고리 닫기
    mobileCategory.classList.remove("-active");
}
function handleGoTopBtn() {
    // 고 탑 스크롤
    var startPosition = window.pageYOffset;
    if (startPosition > 0) {
        window.scrollTo(0, 0)
    }
}
// 이벤트 리스너
function eventListener() {
    categoryBtn.addEventListener("click", handleToggleBtn);
    mobileDimmed.addEventListener("click", handleCloseMenu);
    mobileCategory.addEventListener("click", handleToggleBtn);
}
// 인잇
function init() { 
    eventListener();
}
init();