export function initializeTheme() {
    // You can add theme initialization logic here if needed
    // For example, checking localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export function useAppearance() {
    const setTheme = (theme: 'light' | 'dark') => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    };

    const getTheme = () => {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };

    return {
        setTheme,
        toggleTheme,
        getTheme
    };
}