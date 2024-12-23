function setTheme(theme) {
    document.body.className = theme;
    const table = document.getElementById('theme-table');
    table.className = theme;

    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    const quoteButton = document.querySelector('#random-interactables button');

    if (theme === 'default-theme') {
        nav.style.backgroundColor = '#333';
        footer.style.backgroundColor = '#333';
        quoteButton.className = 'default';
        quoteButton.style.backgroundColor = '#ccc';
        quoteButton.style.color = '#000';
    } else if (theme === 'neon-theme') {
        nav.style.backgroundColor = '#0ff';
        footer.style.backgroundColor = '#0ff';
        quoteButton.className = 'neon';
        quoteButton.style.backgroundColor = '#0ff';
        quoteButton.style.color = '#000';
    } else if (theme === 'rich-theme') {
        nav.style.backgroundColor = '#ffd700';
        footer.style.backgroundColor = '#ffd700';
        quoteButton.className = 'rich';
        quoteButton.style.backgroundColor = '#ffd700';
        quoteButton.style.color = '#2b2b2b';
    } else if (theme === 'pastel-theme') {
        nav.style.backgroundColor = '#ffb6c1';
        footer.style.backgroundColor = '#ffb6c1';
        quoteButton.className = 'pastel';
        quoteButton.style.backgroundColor = '#ffb6c1';
        quoteButton.style.color = '#4682b4';
    } else if (theme === 'forest-theme') {
        nav.style.backgroundColor = '#228b22';
        footer.style.backgroundColor = '#228b22';
        quoteButton.className = 'forest';
        quoteButton.style.backgroundColor = '#228b22';
        quoteButton.style.color = '#013220';
    }

    updateQuoteColor();
}

function updateQuoteColor() {
    const quoteContainer = document.getElementById('quote-container');
    const theme = document.body.className;

    if (theme === 'default-theme') {
        quoteContainer.style.color = '#333';
    } else if (theme === 'neon-theme') {
        quoteContainer.style.color = '#0ff';
    } else if (theme === 'rich-theme') {
        quoteContainer.style.color = '#ffd700';
    } else if (theme === 'pastel-theme') {
        quoteContainer.style.color = '#4682b4';
    } else if (theme === 'forest-theme') {
        quoteContainer.style.color = '#98fb98';
    }
}

function generateQuote() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
        "In the middle of difficulty lies opportunity. – Albert Einstein",
        "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
        "Believe you can and you're halfway there. – Theodore Roosevelt"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex];
    document.getElementById('quote-container').innerText = quoteText;
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
