// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const navMenu = document.querySelector('nav ul');
    
    if (menuMobile) {
        menuMobile.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Formulário de Contato
    const form = document.getElementById('contatoForm');
    const formMessage = document.getElementById('formMessage');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simular envio do formulário
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome && email && mensagem) {
                formMessage.className = 'form-message success';
                formMessage.innerHTML = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                form.reset();
                
                // Limpar mensagem após 5 segundos
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.innerHTML = '';
                }, 5000);
            } else {
                formMessage.className = 'form-message error';
                formMessage.innerHTML = 'Por favor, preencha todos os campos obrigatórios.';
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                    formMessage.innerHTML = '';
                }, 5000);
            }
        });
    }
    
    // Smooth Scroll para links internos (se houver)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Elementos para animar
    const animatedElements = document.querySelectorAll('.servico-card, .team-member, .info-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
    
    // Máscara para telefone
    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        telefoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length <= 11) {
                value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
                value = value.replace(/(\d{5})(\d)/, '$1-$2');
                e.target.value = value;
            }
        });
    }
});