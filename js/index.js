// DOM 셀렉터
const categoryBtn = document.querySelector(".gnb__item.category");
const contactBtn = document.querySelector(".gnb__item.contact");
// 모바일 DOM 셀렉터
const mobileMenu = document.querySelector(".gnb__drop-mobile");
const mobileDimmed = document.querySelector(".gnb__dimmed");
const mobileCategory = document.querySelector(".gnb__link__item.category");
const mobileContactBtn = document.querySelector(".gnb__link__item.contact");
// 다이얼로그 DOM 셀렉터
const modalReserve = document.querySelector(".reservation");
const modalDimmed = document.querySelector(".reservation__dimmed");
const modalInner = document.querySelector(".reservation__inner");
const modalExtendBox = document.querySelector(".clause__box");
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
function handleModalOpen() {
    //  모달 창 활성
    modalReserve.classList.add("-active");
    //  모달 이너 활성
    modalInner.classList.add("-active");
}
function handleModalClose() {
    // 모달 창 비활성
    modalReserve.classList.remove("-active")
    //  모달 이너 비활성
    modalInner.classList.remove("-active");
}
function handleAgreeExtend() {
    // 개인정보 수집 및 이용 상세보기 확장
    modalExtendBox.classList.toggle("-active")
}
function handleScrollMove(target, dur) {
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    // 스크롤 값
    function scrollAnimation(currentTime) {
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, dur);
        window.scrollTo(0, run);
        if (timeElapsed < dur) requestAnimationFrame(scrollAnimation);
    }
    // ease 값
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(scrollAnimation);
}
// 이벤트 리스너
function eventListener() {
    categoryBtn.addEventListener("click", handleToggleBtn);
    contactBtn.addEventListener("click", function(){
        // 스크롤
        handleScrollMove("#company-contact", 500);
    });
    mobileContactBtn.addEventListener("click", function(){
    // 모바일 메뉴 닫기
    mobileMenu.classList.remove("-active");
    // 모바일 오버레이 비활성
    mobileDimmed.classList.remove("-active");
    // 스크롤
        handleScrollMove("#company-contact", 500);
    });
    mobileDimmed.addEventListener("click", handleCloseMenu);
    mobileCategory.addEventListener("click", handleToggleBtn);
    modalDimmed.addEventListener("click", handleModalClose);
}
// 인잇
function init() { 
    eventListener();
}
init();
