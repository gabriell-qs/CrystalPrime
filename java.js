// Scroll suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efeito de opacidade no navbar ao rolar a página
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    window.scrollY > 50
        ? navbar.style.backgroundColor = 'linear-gradient(135deg,#fbf5b700, rgba(48, 48, 48, 1))'
        : navbar.style.backgroundColor = '#444444ff;';
});
   document.addEventListener('DOMContentLoaded', function() {
            // Configurações da animação
            const duration = 2000; // 2 segundos
            const frameRate = 60; // 60 FPS
            const interval = 1000 / frameRate;
            const counters = document.querySelectorAll('.counter');
            
            // Função para animar os contadores
            function animateCounter(counterElement, targetValue, hasPlusSign = false) {
                let currentValue = 0;
                const totalFrames = Math.round(duration / interval);
                const increment = targetValue / totalFrames;
                let currentFrame = 0;
                
                const updateCounter = () => {
                    currentFrame++;
                    currentValue += increment;
                    
                    if (currentValue < targetValue) {
                        if (hasPlusSign) {
                            counterElement.innerHTML = '<span class="plus-sign">+</span>' + Math.round(currentValue);
                        } else {
                            counterElement.textContent = Math.round(currentValue);
                        }
                        setTimeout(updateCounter, interval);
                    } else {
                        if (hasPlusSign) {
                            counterElement.innerHTML = '<span class="plus-sign">+</span>' + targetValue;
                        } else {
                            counterElement.textContent = targetValue;
                        }
                    }
                };
                
                updateCounter();
            }
            
            // Iniciar animação quando o elemento estiver visível na tela
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        const targetValue = parseInt(target.getAttribute('data-target')) || 1000;
                        const hasPlusSign = target.innerHTML.includes('plus-sign');
                        
                        animateCounter(target, targetValue, hasPlusSign);
                        observer.unobserve(target);
                    }
                });
            }, { threshold: 0.5 });
            
            // Observar cada contador
            counters.forEach(counter => {
                observer.observe(counter);
            });
        });
        //carrosel
         document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.carousel');
            const items = document.querySelectorAll('.carousel-item');
            const dots = document.querySelectorAll('.carousel-dot');
            const prevBtn = document.querySelector('.carousel-arrow.prev');
            const nextBtn = document.querySelector('.carousel-arrow.next');
            
            let currentIndex = 0;
            const totalItems = items.length;
            
            // Função para atualizar o carrossel
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Atualizar dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Event listeners para os botões de navegação
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            });
            
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            });
            
            // Event listeners para os dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateCarousel();
                });
            });
            
            // Auto-play (opcional)
            let autoPlay = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            }, 5000);
            
            // Pausar auto-play quando o mouse estiver sobre o carrossel
            carousel.parentElement.addEventListener('mouseenter', () => {
                clearInterval(autoPlay);
            });
            
            carousel.parentElement.addEventListener('mouseleave', () => {
                autoPlay = setInterval(() => {
                    currentIndex = (currentIndex + 1) % totalItems;
                    updateCarousel();
                }, 5000);
            });
            
            // Suporte a touch para dispositivos móveis
            let startX = 0;
            let endX = 0;
            
            carousel.parentElement.addEventListener('touchstart', e => {
                startX = e.touches[0].clientX;
            });
            
            carousel.parentElement.addEventListener('touchend', e => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
            
            function handleSwipe() {
                if (startX - endX > 50) {
                    // Swipe para a esquerda - próximo
                    currentIndex = (currentIndex + 1) % totalItems;
                } else if (endX - startX > 50) {
                    // Swipe para a direita - anterior
                    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                }
                updateCarousel();
            }
        
        });
        //carrosel 2
         document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.caro');
            const items = document.querySelectorAll('.caro-item');
            const dots = document.querySelectorAll('.caro-dot');
            const prevBtn = document.querySelector('.caro-arrow.prev');
            const nextBtn = document.querySelector('.caro-arrow.next');
            
            let currentIndex = 0;
            const totalItems = items.length;
            
            // Função para atualizar o carrossel
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Atualizar dots
                dots.forEach((dot, index) => {
                    dot.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Event listeners para os botões de navegação
            nextBtn.addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            });
            
            prevBtn.addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            });
            
            // Event listeners para os dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    currentIndex = parseInt(this.getAttribute('data-index'));
                    updateCarousel();
                });
            });
            
            // Auto-play (opcional)
            let autoPlay = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            }, 5000);
            
            // Pausar auto-play quando o mouse estiver sobre o carrossel
            carousel.parentElement.addEventListener('mouseenter', () => {
                clearInterval(autoPlay);
            });
            
            carousel.parentElement.addEventListener('mouseleave', () => {
                autoPlay = setInterval(() => {
                    currentIndex = (currentIndex + 1) % totalItems;
                    updateCarousel();
                }, 5000);
            });
            
            // Suporte a touch para dispositivos móveis
            let startX = 0;
            let endX = 0;
            
            carousel.parentElement.addEventListener('touchstart', e => {
                startX = e.touches[0].clientX;
            });
            
            carousel.parentElement.addEventListener('touchend', e => {
                endX = e.changedTouches[0].clientX;
                handleSwipe();
            });
            
            function handleSwipe() {
                if (startX - endX > 50) {
                    // Swipe para a esquerda - próximo
                    currentIndex = (currentIndex + 1) % totalItems;
                } else if (endX - startX > 50) {
                    // Swipe para a direita - anterior
                    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                }
                updateCarousel();
            }
        
        });