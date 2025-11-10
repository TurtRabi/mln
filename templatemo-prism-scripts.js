// JavaScript Document

/*

TemplateMo 600 Prism Flux

https://templatemo.com/tm-600-prism-flux

*/


// Portfolio data for carousel

        const portfolioData = [
            {
                id: 1,
                title: 'Giới thiệu đề tài',
                description:
                'Trong lịch sử phát triển xã hội loài người, con người luôn hướng tới cuộc sống tốt đẹp hơn; mọi xã hội đều phải đối diện với câu hỏi về cách thức phân phối của cải vật chất. Chủ nghĩa Mác – Lênin khẳng định: để đạt mục tiêu “hưởng theo nhu cầu” phải trải qua giai đoạn “làm theo năng lực, hưởng theo lao động”.',
                image: 'images/intro.jpg',
                tech: ['Bối cảnh', 'Mục tiêu', 'Mác–Lênin']
            },
            {
                id: 2,
                title: 'Hướng theo năng lực',
                description:
                'Nguyên tắc phân phối trong giai đoạn quá độ: làm theo năng lực, hưởng theo lao động. Tạo động lực, kỷ luật và công bằng tương đối; có thể chênh lệch thu nhập có kiểm soát; Nhà nước giữ vai trò điều tiết an sinh và cơ hội phát triển.',
                image: 'images/nangluc.jpg',
                tech: ['Quá độ', 'Công bằng tương đối', 'Điều tiết Nhà nước']
            },
            {
                id: 3,
                title: 'Hướng theo nhu cầu',
                description:
                'Mục tiêu cao nhất của xã hội cộng sản khi lực lượng sản xuất phát triển cao, công hữu vững chắc và ý thức xã hội nâng cao: phân phối theo nhu cầu chính đáng, xóa bỏ phân hóa, lao động trở thành nhu cầu tự thân.',
                image: 'images/nhucau.jpg',
                tech: ['Mục tiêu', 'Công hữu', 'Phát triển con người']
            },
            {
                id: 4,
                title: 'Vì sao phải qua “hướng theo năng lực”',
                description:
                'Hai nấc thang phát triển: (1) xây nền tảng vật chất – kỹ thuật, nâng năng suất, rèn ý thức trách nhiệm; (2) khi của cải dồi dào mới có thể “hưởng theo nhu cầu”. Không thể nhảy cóc từ xã hội cũ lên giai đoạn lý tưởng.',
                image: 'images/visao.jpg',
                tech: ['Nền tảng vật chất', 'Năng suất', 'Ý thức xã hội']
            },
            {
                id: 5,
                title: 'Kết luận & liên hệ thực tiễn',
                description:
                'Hiện tại: phát huy phân phối theo lao động, kết hợp phúc lợi xã hội. Bước đi: phát triển lực lượng sản xuất, hoàn thiện thể chế, tăng cường an sinh, phát triển con người toàn diện — hướng tới điều kiện để thực hiện “hưởng theo nhu cầu”.',
                image: 'images/ketluan.jpg',
                tech: ['Thực tiễn Việt Nam', 'An sinh', 'Phát triển bền vững']
            }
        ];

        


        // Skills data
        const skillsData = [
            { name: 'React.js', icon: '⚛️', level: 95, category: 'frontend' },
            { name: 'Node.js', icon: '🟢', level: 90, category: 'backend' },
            { name: 'TypeScript', icon: '📘', level: 88, category: 'frontend' },
            { name: 'AWS', icon: '☁️', level: 92, category: 'cloud' },
            { name: 'Docker', icon: '🐳', level: 85, category: 'cloud' },
            { name: 'Python', icon: '🐍', level: 93, category: 'backend' },
            { name: 'Kubernetes', icon: '☸️', level: 82, category: 'cloud' },
            { name: 'GraphQL', icon: '◈', level: 87, category: 'backend' },
            { name: 'TensorFlow', icon: '🤖', level: 78, category: 'emerging' },
            { name: 'Blockchain', icon: '🔗', level: 75, category: 'emerging' },
            { name: 'Vue.js', icon: '💚', level: 85, category: 'frontend' },
            { name: 'MongoDB', icon: '🍃', level: 90, category: 'backend' }
        ];

        // Scroll to section function
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            const header = document.getElementById('header');
            if (section) {
                const headerHeight = header.offsetHeight;
                const targetPosition = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }

        // Initialize particles for philosophy section
        function initParticles() {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) {
                return;
            }
            const particleCount = 15;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random horizontal position
                particle.style.left = Math.random() * 100 + '%';
                
                // Start particles at random vertical positions throughout the section
                particle.style.top = Math.random() * 100 + '%';
                
                // Random animation delay for natural movement
                particle.style.animationDelay = Math.random() * 20 + 's';
                
                // Random animation duration for variety
                particle.style.animationDuration = (18 + Math.random() * 8) + 's';
                
                particlesContainer.appendChild(particle);
            }
        }

        // Initialize carousel
        let currentIndex = 0;
        const carousel = document.getElementById('carousel');
        const indicatorsContainer = document.getElementById('indicators');

        function createCarouselItem(data, index) {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.dataset.index = index;
            
            const techBadges = data.tech.map(tech => 
                `<span class="tech-badge">${tech}</span>`
            ).join('');
            
            item.innerHTML = `
                <div class="card">
                    <div class="card-number">0${data.id}</div>
                    <div class="card-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <h3 class="card-title">${data.title}</h3>
                    <p class="card-description">${data.description}</p>
                    <div class="card-tech">${techBadges}</div>
                    <button class="card-cta" onclick="scrollToSection('about')">Khám</button>
                </div>
            `;
            
            return item;
        }

        function initCarousel() {
            if (!carousel || !indicatorsContainer) {
                return;
            }
            // Create carousel items
            portfolioData.forEach((data, index) => {
                const item = createCarouselItem(data, index);
                carousel.appendChild(item);
                
                // Create indicator
                const indicator = document.createElement('div');
                indicator.className = 'indicator';
                if (index === 0) indicator.classList.add('active');
                indicator.dataset.index = index;
                indicator.addEventListener('click', () => goToSlide(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            updateCarousel();
        }

        function updateCarousel() {
            const items = document.querySelectorAll('.carousel-item');
            const indicators = document.querySelectorAll('.indicator');
            const totalItems = items.length;
            const isMobile = window.innerWidth <= 768;
            const isTablet = window.innerWidth <= 1024;
            
            items.forEach((item, index) => {
                // Calculate relative position
                let offset = index - currentIndex;
                
                // Wrap around for continuous rotation
                if (offset > totalItems / 2) {
                    offset -= totalItems;
                } else if (offset < -totalItems / 2) {
                    offset += totalItems;
                }
                
                const absOffset = Math.abs(offset);
                const sign = offset < 0 ? -1 : 1;
                
                // Reset transform
                item.style.transform = '';
                item.style.opacity = '';
                item.style.zIndex = '';
                item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
                
                // Adjust spacing based on screen size
                let spacing1 = 400;
                let spacing2 = 600;
                let spacing3 = 750;
                
                if (isMobile) {
                    spacing1 = 280;  // Was 400, now 100px closer
                    spacing2 = 420;  // Was 600, now 180px closer
                    spacing3 = 550;  // Was 750, now 200px closer
                } else if (isTablet) {
                    spacing1 = 340;
                    spacing2 = 520;
                    spacing3 = 650;
                }
                
                if (absOffset === 0) {
                    // Center item
                    item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
                    item.style.opacity = '1';
                    item.style.zIndex = '10';
                } else if (absOffset === 1) {
                    // Side items
                    const translateX = sign * spacing1;
                    const rotation = isMobile ? 25 : 30;
                    const scale = isMobile ? 0.88 : 0.85;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.8';
                    item.style.zIndex = '5';
                } else if (absOffset === 2) {
                    // Further side items
                    const translateX = sign * spacing2;
                    const rotation = isMobile ? 35 : 40;
                    const scale = isMobile ? 0.75 : 0.7;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.5';
                    item.style.zIndex = '3';
                } else if (absOffset === 3) {
                    // Even further items
                    const translateX = sign * spacing3;
                    const rotation = isMobile ? 40 : 45;
                    const scale = isMobile ? 0.65 : 0.6;
                    item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                    item.style.opacity = '0.3';
                    item.style.zIndex = '2';
                } else {
                    // Hidden items (behind)
                    item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                    item.style.opacity = '0';
                    item.style.zIndex = '1';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % portfolioData.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
            updateCarousel();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        // Initialize hexagonal skills grid
        function initSkillsGrid() {
            const skillsGrid = document.getElementById('skillsGrid');
            
            if (!skillsGrid) {
                return; // Exit if the skills grid isn't on the current page
            }

            const categoryTabs = document.querySelectorAll('.category-tab');
            
            function displaySkills(category = 'all') {
                skillsGrid.innerHTML = '';
                
                const filteredSkills = category === 'all' 
                    ? skillsData 
                    : skillsData.filter(skill => skill.category === category);
                
                filteredSkills.forEach((skill, index) => {
                    const hexagon = document.createElement('div');
                    hexagon.className = 'skill-hexagon';
                    hexagon.style.animationDelay = `${index * 0.1}s`;
                    
                    hexagon.innerHTML = `
                        <div class="hexagon-inner">
                            <div class="hexagon-content">
                                <div class="skill-icon-hex">${skill.icon}</div>
                                <div class="skill-name-hex">${skill.name}</div>
                                <div class="skill-level">
                                    <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                                </div>
                                <div class="skill-percentage-hex">${skill.level}%</div>
                            </div>
                        </div>
                    `;
                    
                    skillsGrid.appendChild(hexagon);
                });
            }
            
            categoryTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    categoryTabs.forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    displaySkills(tab.dataset.category);
                });
            });
            
            displaySkills();
        }

        // Event listeners
        const nextBtn = document.getElementById('nextBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        const prevBtn = document.getElementById('prevBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        // Auto-rotate carousel
        setInterval(nextSlide, 5000);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });

        // Update carousel on window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                updateCarousel();
            }, 250);
        });

        // Initialize on load
        initCarousel();
        initSkillsGrid();
        initParticles();

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');

        if (menuToggle) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }

        // Header scroll effect
        const header = document.getElementById('header');
        if(header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Smooth scrolling and active navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    if (targetSection) {
                        const headerHeight = header ? header.offsetHeight : 0;
                        const targetPosition = targetSection.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navMenu && menuToggle) {
                            navMenu.classList.remove('active');
                            menuToggle.classList.remove('active');
                        }
                    }
                }
                // For links that don't start with '#', do nothing and let the browser navigate.
            });
        });

        // Update active navigation on scroll
        function updateActiveNav() {
            const scrollPosition = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        const href = link.getAttribute('href').substring(1);
                        if (href === sectionId) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        window.addEventListener('scroll', updateActiveNav);

        // Animated counter for stats
        function animateCounter(element) {
            const target = parseInt(element.dataset.target);
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += step;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(counter);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 16);
        }

        // Intersection Observer for stats animation
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(/** @param {IntersectionObserverEntry[]} entries */(entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    statNumbers.forEach(number => {
                        if (!number.classList.contains('animated')) {
                            number.classList.add('animated');
                            animateCounter(number);
                        }
                    });
                }
            });
        }, observerOptions);

        const statsSection = document.querySelector('.stats-section');
        if (statsSection) {
            observer.observe(statsSection);
        }

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(contactForm);
                const data = Object.fromEntries(formData);
                
                // Show success message
                alert(`Thank you ${data.name}! Your message has been transmitted successfully. We'll respond within 24 hours.`);
                
                // Reset form
                contactForm.reset();
            });
        }

        // Loading screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
            }, 1500);
        });

        // Add parallax effect to hero section
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.hero');
            if (parallax) {
                parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

/* === TRIETHOC 3D & PARALLAX === */

/**
 * @param {HTMLElement} el
 * @param {MouseEvent} ev
 */
function handleTilt(el, ev){
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const dx = (ev.clientX - cx) / rect.width;
  const dy = (ev.clientY - cy) / rect.height;
  const tiltX = dy * -10;
  const tiltY = dx *  10;
  el.style.setProperty('--mx', ((ev.clientX - rect.left)/rect.width*100) + '%');
  el.style.setProperty('--my', ((ev.clientY - rect.top)/rect.height*100) + '%');
  el.style.transform = 'rotateX(' + tiltX + 'deg) rotateY(' + tiltY + 'deg) translateZ(10px)';
}
/**
 * @param {HTMLElement} el
 */
function resetTilt(el){
  el.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
}

/** @type {NodeListOf<HTMLElement>} */
const tiltCards = document.querySelectorAll('[data-tilt]');
tiltCards.forEach(function(card){
  card.addEventListener('mousemove', function(ev){ handleTilt(card, ev); });
  card.addEventListener('mouseleave', function(){ resetTilt(card); });
});

// Set background images + parallax layers
/** @type {NodeListOf<HTMLElement>} */
const scenes = document.querySelectorAll('.tm-3dscene');
scenes.forEach(function(sc){
  var bg = sc.getAttribute('data-bg');
  if(bg){
    sc.style.backgroundImage = 'url(' + bg + ')';
    var l1 = sc.querySelector('.tm-depth1');
    var l2 = sc.querySelector('.tm-depth2');
    if(l1) l1.style.backgroundImage = 'url(' + bg + ')';
    if(l2) l2.style.backgroundImage = 'url(' + bg + ')';
  }
});

// Basic scroll-based parallax
window.addEventListener('scroll', function(){
  var scTop = window.pageYOffset || document.documentElement.scrollTop;
  scenes.forEach(function(sc){
    var rect = sc.getBoundingClientRect();
    var offset = rect.top + scTop;
    var progress = (scTop - offset + window.innerHeight) / (window.innerHeight + rect.height);
    var p = Math.max(0, Math.min(1, progress));
    var d1 = sc.querySelector('.tm-depth1');
    var d2 = sc.querySelector('.tm-depth2');
    if(d1){ d1.style.transform = 'translate3d(0,' + (-40 * p) + 'px, -80px) scale(1.15)'; }
    if(d2){ d2.style.transform = 'translate3d(0,' + (-80 * p) + 'px, -160px) scale(1.3)'; }
  });
});

// Intersection reveal
/**
 * @param {IntersectionObserverEntry[]} entries
 */
var revealObserver = new IntersectionObserver(function(entries){
  entries.forEach(function(entry){
    if(entry.isIntersecting){
      entry.target.classList.add('tm-reveal-in');
    }
  });
}, { threshold: .25 });

document.querySelectorAll('.tm-card').forEach(function(el){ revealObserver.observe(el); });
