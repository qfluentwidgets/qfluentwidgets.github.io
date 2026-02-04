(function () {
    const addProBadges = () => {
        const contentArea = document.querySelector('.theme-reco-default-content') ||
            document.querySelector('.page') ||
            document.querySelector('main') ||
            document.body;
        const headings = contentArea.querySelectorAll('h1, h2, h3, h4, h5, h6');

        headings.forEach((heading) => {
            if (heading.querySelector('.pro-badge')) return;

            const links = heading.querySelectorAll('a');
            links.forEach((link) => {
                const href = link.getAttribute('href');
                if (!href) return;

                const pricePattern = /(^|\/)(zh\/)?price(\/|$|\?|#)/;
            if (pricePattern.test(href)) {
                const nextSibling = link.nextSibling;
                if (nextSibling?.classList?.contains('pro-badge')) return;

                const badge = document.createElement('span');
                badge.className = 'pro-badge';
                badge.textContent = 'Pro';
                link.parentNode.insertBefore(badge, link.nextSibling);
            }
        });
    });
};

const initBadges = () => {
    const tryAddBadges = () => setTimeout(addProBadges, 500);

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', tryAddBadges);
    } else {
        tryAddBadges();
    }

    const observer = new MutationObserver(() => setTimeout(addProBadges, 100));
    if (document.body) {
        observer.observe(document.body, { childList: true, subtree: true });
    }
};

if (typeof window !== 'undefined') {
    initBadges();
}
}) ();