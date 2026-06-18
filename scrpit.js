// AGRINHO 2026 - Script principal

// 1. Rolagem suave para links do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// 2. Botão "Saiba Mais"
const botaoSaibaMais = document.querySelector('button');

if (botaoSaibaMais) {
    botaoSaibaMais.addEventListener('click', () => {
        alert('Agronegócio sustentável: tecnologia + preservação ambiental = futuro do planeta!');
    });
}


// 3. Validação simples do formulário
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const mensagem = form.querySelector('textarea').value.trim();

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos!');
            return;
        }

        if (!email.includes('@')) {
            alert('Digite um e-mail válido!');
            return;
        }

        alert('Mensagem enviada com sucesso! 🌱');

        form.reset();
    });
}


// 4. Animação simples ao rolar a página
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (pos < windowHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        } else {
            sec.style.opacity = 0;
            sec.style.transform = 'translateY(20px)';
        }
    });
});
