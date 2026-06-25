function applyTheme(theme) {

    document.documentElement
        .setAttribute(
            'data-theme',
            theme
        );

    localStorage.setItem(
        'theme',
        theme
    );

    document.getElementById(
        'themeToggle'
    ).textContent =
        theme === 'dark'
            ? '☀️ Light Mode'
            : '🌙 Dark Mode';
}

function toggleTheme() {

    const current =
        document.documentElement
            .getAttribute(
                'data-theme'
            ) || 'light';

    applyTheme(
        current === 'dark'
            ? 'light'
            : 'dark'
    );
}

document.addEventListener(
    'DOMContentLoaded',
    () => {

        const saved =
            localStorage.getItem(
                'theme'
            );

        if (saved) {

            applyTheme(saved);

        } else {

            const prefersDark =
                window.matchMedia(
                    '(prefers-color-scheme: dark)'
                ).matches;

            applyTheme(
                prefersDark
                    ? 'dark'
                    : 'light'
            );
        }

        document
            .getElementById(
                'themeToggle'
            )
            .addEventListener(
                'click',
                toggleTheme
            );
    }
);
