document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carouselImages = document.querySelectorAll('.book-carousel img');
    let currentIndex = 0;

    function showNextImage() {
        if (carouselImages.length === 0) return;
        carouselImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselImages.length;
        carouselImages[currentIndex].classList.add('active');
    }

    if (carouselImages.length > 0) {
        setInterval(showNextImage, 3000);
    }

    // Featured content
    const featuredList = document.getElementById('featured-list');
    const featuredItems = [
        'Poem : Colors of Life',
        'Article 1: Importance of Science and Technology',
        'Article 2: Changes in Society'
    ];

    if (featuredList) {
        featuredItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            featuredList.appendChild(listItem);
        });
    }

    // Scroll animations
    const scrollElements = document.querySelectorAll('.scroll-in');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const hideScrollElement = (element) => {
        element.classList.remove('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Call once on load

    // Search functionality
    function searchContent() {
        const searchBar = document.getElementById('search-bar');
        if (!searchBar) return;
        const query = searchBar.value.toLowerCase();
        const contentItems = document.querySelectorAll('.content-item');

        contentItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    window.searchContent = searchContent;

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name')?.value || 'User';
            const email = document.getElementById('contact-email')?.value || '';
            // You may want to add email validation here
            // const message = document.getElementById('contact-message')?.value || '';
            alert(`Thank you for reaching out, ${name}! We will get back to you at ${email}.`);
            contactForm.reset();
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            let theme = 'light';
            if (document.body.classList.contains('dark-mode')) {
                theme = 'dark-mode';
            }
            localStorage.setItem('theme', theme);
        });
    }
});
