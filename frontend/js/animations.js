
        document.addEventListener('DOMContentLoaded', () => {
            // Hover lift effect
            const cards = document.querySelectorAll('.hover-lift');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
                    const rotateY = ((x - centerX) / centerX) * 5;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) translateZ(20px)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                });
            });

            // Scroll reveal animation
            const reveals = document.querySelectorAll('.reveal');

            function reveal() {
                const windowHeight = window.innerHeight;
                const elementVisible = 150;

                reveals.forEach(reveal => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            }

            window.addEventListener('scroll', reveal);
            reveal(); // Trigger on load
        });