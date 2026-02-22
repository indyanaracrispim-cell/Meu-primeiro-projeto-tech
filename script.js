// 1. Efeito de Revelação (Scroll Reveal)
const observerOptions = {
    threshold: 0.15
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Aplicando animação de entrada em todas as seções
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    revealOnScroll.observe(section);
});

// CSS dinâmico para a animação disparada pelo JS
const style = document.createElement('style');
style.textContent = `
    section.active {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// 2. Smooth Scroll para os links internos
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 3. Efeito de Digitação Simples no Terminal SQL
const codeElement = document.querySelector('.terminal-body code');
const originalText = codeElement.innerHTML;

const observerSQL = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
        codeElement.innerHTML = '';
        let i = 0;
        // Função para simular digitação (opcional - simples)
        codeElement.innerHTML = originalText; 
        observerSQL.unobserve(entries[0].target);
    }
});

observerSQL.observe(document.querySelector('.project-showcase'));