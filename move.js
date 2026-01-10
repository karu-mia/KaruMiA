document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10%見えたら実行
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 画面に入った時：ふわっと出す
                entry.target.classList.add('is-show');
            } else {
                // 画面から消えた時：クラスを外して次に備える
                entry.target.classList.remove('is-show');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    console.log("自己紹介サイト：スクロール連動アニメーション動作中");
});