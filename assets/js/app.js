// assets/js/app.js
(function () {
  // ====== DATA ======
  const portfolioData = [
    { id:1, page:'gioi-thieu', title:'Giới thiệu đề tài', description:'Giới thiệu về nguyên tắc "làm theo năng lực, hưởng theo lao động" trong giai đoạn quá độ lên chủ nghĩa xã hội.', image:'images/intro.jpg',   tech:['Bối cảnh','Mục tiêu','Mác–Lênin'] },
    { id:2, page:'nang-luc', title:'Hướng theo năng lực', description:'Phân tích nguyên tắc phân phối theo lao động, coi lao động là thước đo chính để hưởng thụ thành quả.', image:'images/nangluc.jpg', tech:['Quá độ','Công bằng','Điều tiết Nhà nước'] },
    { id:3, page:'nhu-cau', title:'Hướng theo nhu cầu',  description:'Phân tích mục tiêu cuối cùng của chủ nghĩa cộng sản, nơi của cải dồi dào và con người phát triển toàn diện.', image:'images/nhucau.jpg',  tech:['Mục tiêu','Công hữu','Phát triển con người'] },
    { id:4, page:'vi-sao', title:'Vì sao phải qua?',    description:'Lý giải tính tất yếu của thời kỳ quá độ, khi nền sản xuất và ý thức xã hội chưa đủ phát triển.', image:'images/visao.jpg',    tech:['Nền tảng','Năng suất','Ý thức xã hội'] },
    { id:5, page:'ket-luan', title:'Kết luận',             description:'Tổng kết vai trò của nguyên tắc phân phối theo lao động và ý nghĩa của nó trong thực tiễn xây dựng xã hội.', image:'images/ketluan.jpg', tech:['Thực tiễn','An sinh','Bền vững'] },
  ];

  // ====== STATE/UTIL ======
  let currentIndex = 0;
  let autoTimer = null;

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  function bindHeaderScroll() {
    const header = $('#header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (scrollY > 100) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    }, {passive:true});
  }

  function bindMenuToggle() {
    const toggle = $('#menuToggle');
    const menu = $('#navMenu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
    });
  }

  // ====== CAROUSEL ======
  function createCarouselItem(data, index) {
    const el = document.createElement('div');
    el.className = 'carousel-item';
    el.dataset.index = index;
    el.innerHTML = `
      <div class="card">
        <div class="card-number">0${data.id}</div>
        <div class="card-image"><img src="${data.image}" alt="${data.title}"></div>
        <h3 class="card-title">${data.title}</h3>
        <p class="card-description">${data.description}</p>
        <div class="card-tech">${data.tech.map(t=>`<span class="tech-badge">${t}</span>`).join('')}</div>
        <button class="card-cta">Khám phá</button>
      </div>`;
    
    el.querySelector('.card-cta').addEventListener('click', () => {
      window.location.href = `index.html?page=${data.page}`;
    });
    
    return el;
  }

  function updateCarousel() {
    const items = $$('.carousel-item');
    const indicators = $$('.indicator');
    const total = items.length;
    const isMobile = innerWidth <= 768;
    const isTablet = innerWidth <= 1024;
    let s1=400,s2=600,s3=750;
    if (isMobile) { s1=280; s2=420; s3=550; }
    else if (isTablet) { s1=340; s2=520; s3=650; }

    items.forEach((item, i) => {
      let off = i - currentIndex;
      if (off > total/2) off -= total;
      if (off < -total/2) off += total;

      const abs = Math.abs(off);
      const sign = off < 0 ? -1 : 1;

      item.style.transition = 'all .8s cubic-bezier(.4,0,.2,1)';
      if (abs === 0) {
        item.style.transform = 'translate(-50%,-50%) translateZ(0) scale(1)';
        item.style.opacity = '1'; item.style.zIndex = '10';
      } else if (abs === 1) {
        const rot = isMobile ? 25 : 30, sc = isMobile ? .88 : .85;
        item.style.transform = `translate(-50%,-50%) translateX(${sign*s1}px) translateZ(-200px) rotateY(${-sign*rot}deg) scale(${sc})`;
        item.style.opacity = '.8'; item.style.zIndex = '5';
      } else if (abs === 2) {
        const rot = isMobile ? 35 : 40, sc = isMobile ? .75 : .7;
        item.style.transform = `translate(-50%,-50%) translateX(${sign*s2}px) translateZ(-350px) rotateY(${-sign*rot}deg) scale(${sc})`;
        item.style.opacity = '.5'; item.style.zIndex = '3';
      } else if (abs === 3) {
        const rot = isMobile ? 40 : 45, sc = isMobile ? .65 : .6;
        item.style.transform = `translate(-50%,-50%) translateX(${sign*s3}px) translateZ(-450px) rotateY(${-sign*rot}deg) scale(${sc})`;
        item.style.opacity = '.3'; item.style.zIndex = '2';
      } else {
        item.style.transform = 'translate(-50%,-50%) translateZ(-500px) scale(.5)';
        item.style.opacity = '0'; item.style.zIndex = '1';
      }
    });

    indicators.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
  }

  function nextSlide() { currentIndex = (currentIndex + 1) % portfolioData.length; updateCarousel(); }
  function prevSlide() { currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length; updateCarousel(); }

  function initCarouselIfExists() {
    const wrap = $('#carousel');
    const dots = $('#indicators');
    const prev = $('#prevBtn');
    const next = $('#nextBtn');

    if (!wrap || !dots) {
      // Không có carousel trong trang này → hủy auto-rotate nếu đang chạy
      if (autoTimer) { clearInterval(autoTimer); autoTimer = null; }
      return;
    }

    // reset
    wrap.innerHTML = ''; dots.innerHTML = ''; currentIndex = 0;

    portfolioData.forEach((d, i) => {
      wrap.appendChild(createCarouselItem(d, i));
      const dot = document.createElement('div');
      dot.className = 'indicator' + (i===0?' active':'');
      dot.addEventListener('click', () => { currentIndex = i; updateCarousel(); });
      dots.appendChild(dot);
    });

    if (prev) prev.onclick = prevSlide;
    if (next) next.onclick = nextSlide;

    updateCarousel();

    // Auto rotate (clear trước khi set)
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(nextSlide, 5000);

    // Resize
    let t; window.addEventListener('resize', () => { clearTimeout(t); t=setTimeout(updateCarousel, 200); });
  }

  function initRevealAnimation() {
    const revealElements = $$('.reveal');
    if (!revealElements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });
  }

  function initParallaxEffect() {
    const handleScroll = () => {
        const parallaxImages = $$('.content-row .image-col img');
        if (!parallaxImages.length) return;
        
        const windowHeight = window.innerHeight;
        parallaxImages.forEach(img => {
            const el = img.parentElement; // The container
            const rect = el.getBoundingClientRect();
            
            if (rect.top < windowHeight && rect.bottom > 0) {
                const scrollPercent = (rect.top + rect.height / 2) / windowHeight;
                const moveDistance = (scrollPercent - 0.5) * -70;
                
                img.style.transform = `translateY(${moveDistance}px) scale(1.15)`;
            }
        });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  function initLightbox() {
    if ($('#image-lightbox')) return;

    const lightbox = document.createElement('div');
    lightbox.id = 'image-lightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
        <button class="lightbox-close">&times;</button>
        <div class="lightbox-content">
            <img src="" alt="Lightbox image">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('img');
    const hideLightbox = () => lightbox.classList.remove('visible');

    lightbox.querySelector('.lightbox-close').addEventListener('click', hideLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) hideLightbox();
    });

    document.addEventListener('click', (e) => {
        const img = e.target.closest('.content-row .image-col');
        if (img) {
            const imgSrc = img.querySelector('img')?.src;
            if (imgSrc) {
              e.preventDefault();
              lightboxImage.src = imgSrc;
              lightbox.classList.add('visible');
            }
        }
    });
  }

  // ====== INITIALIZE GLOBAL HANDLERS ======
  initLightbox();
  initParallaxEffect();

  // ====== PUBLIC API ======
  window.App = {
    onPageLoaded(page) {
      // Gắn active nav
      $$('.nav-link').forEach(a => {
        const u = new URL(a.href, location.origin);
        const p = new URLSearchParams(u.search).get('page') || 'gioi-thieu';
        a.classList.toggle('active', p === page);
      });

      // Khởi tạo các tính năng tùy theo DOM đang có
      bindHeaderScroll();
      bindMenuToggle();
      initCarouselIfExists();
      initRevealAnimation();
    }
  };

  // Nếu index load xong nhưng trang chưa đổ, cứ để `onPageLoaded` được gọi sau fetch trong index.html
})();
