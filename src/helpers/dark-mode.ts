const initializeDarkMode = () => {
    const darkMode = localStorage.getItem('darkMode');
    const isDark = darkMode
        ? JSON.parse(darkMode)
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
};

export default initializeDarkMode;
