document.addEventListener("DOMContentLoaded", function () {
    if (typeof fullpage_api === "undefined") {
        console.warn("⚠ fullPage.js가 로드되지 않았습니다.");
        return;
    }

    new fullpage("#fullpage", {
        autoScrolling: true, // ✅ fullPage.js의 부드러운 스크롤 활성화
        fitToSection: true, // ✅ 자동 섹션 맞춤 활성화
        fitToSectionDelay: 500, // ✅ 섹션 맞춤 애니메이션 지연
        scrollingSpeed: 1200, // ✅ 부드러운 스크롤 속도 조정 (기본 700 → 1200)
        easingcss3: "cubic-bezier(0.25, 1, 0.5, 1)", // ✅ 더욱 부드러운 가속도 적용
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: false,
        scrollOverflow: true,
        navigation: true,
        navigationPosition: "right",
        anchors: ["mains", "news", "story", "enjoy"],
        menu: ".nav-box",
    });

    // ✅ 네비게이션 클릭 시 부드러운 이동 적용
    document.querySelectorAll(".nav-box a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").replace("#", "");

            // ✅ 현재 섹션이 아닐 때만 이동 (애니메이션 적용)
            if (fullpage_api.getActiveSection()?.anchor !== targetId) {
                setTimeout(() => {
                    fullpage_api.moveTo(targetId);
                }, 200); // ✅ 약간의 딜레이 추가하여 부드러운 이동 유도
            }
        });
    });
});