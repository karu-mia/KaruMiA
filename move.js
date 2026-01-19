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

document.addEventListener('DOMContentLoaded', () => {
    // --- 既存のコード（IntersectionObserverなど）はそのまま ---

    const backToTopBtn = document.getElementById('back-to-top');

    // スクロールを監視してボタンを出す
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // 300px以上スクロールしたら
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }
    });

    // ボタンを押したら一番上までスルスル戻る
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// move.jsの最後に追加
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});