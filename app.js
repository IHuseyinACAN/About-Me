/* ==========================================================================
   PROJECT DATA FOR MODALS
   ========================================================================== */
const projectDetails = {
    "robot-kol": {
        title: "6 Eksenli Robot Kol",
        category: "Robotik & Donanım",
        media: `<div class="modal-media"><iframe src="https://www.youtube.com/embed/ZEir102PxJ8" allowfullscreen></iframe></div>`,
        description: `
            <p>Arduino tabanlı bu projede, 6 serbestlik derecesine (6-DOF) sahip endüstriyel tip bir robot kolun mekanik montajı, elektronik devre tasarımı ve kontrol yazılımı geliştirilmiştir.</p>
            <p>Hassas servo motorların koordineli kontrolü ile nesneleri taşıma, sıralama ve belirli geometrik şekilleri çizme gibi görevler başarıyla yerine getirilmiştir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>C++ Gömülü Kod</strong> ile optimize edilmiş servo PWM sinyalleri.</li>
                <li>Fiziksel joystick kontrolü ve PC arayüzü üzerinden koordinat bazlı kontrol desteği.</li>
                <li>Eklem açılarını hesaplamak için temel Ters Kinematik (Inverse Kinematics) matematiksel modelleri.</li>
                <li>Yüksek torklu servo motorlar ve 3D yazıcı ile üretilmiş mekanik şasi.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN",
        youtube: "https://www.youtube.com/watch?v=ZEir102PxJ8"
    },
    "taret": {
        title: "Dart Fırlatan Taret",
        category: "Robotik & Donanım",
        media: `<div class="modal-media"><div class="modal-media-placeholder robotics-bg-2">🎯 [Dart Taret Görseli]</div></div>`,
        description: `
            <p>Arduino mikrodenetleyici kullanılarak geliştirilen bu taret sistemi, 2 eksenli (Pan-Tilt) servo motor mekanizması sayesinde hedefleme yapabilmektedir.</p>
            <p>Donanımında yer alan tetik mekanizması ve fırlatıcı motorlar sayesinde belirlenen hedeflere yüksek hassasiyetle dart fırlatabilmektedir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Arduino Uno</strong> tabanlı anakart tasarımı ve gömülü servo kontrolü.</li>
                <li>N20 motorlar ve sürtünmeli fırlatma tekerlekleri ile güçlendirilmiş mekanik atış sistemi.</li>
                <li>Kızılötesi veya Bluetooth kumanda modülü üzerinden manuel kontrol yeteneği.</li>
                <li>Ultrasonik sensörler ile mesafe tespiti ve otomatik tetikleme modu geliştirme altyapısı.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN"
    },
    "odemy": {
        title: "Odemy Eğitim Platformu",
        category: "Web Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder web-bg">🎓 [Odemy Platform Arayüzü]</div></div>`,
        description: `
            <p>Odemy, Udemy platformunun temel özelliklerini barındıran, PHP tabanlı ve veri tabanı yönetiminde PHPMyAdmin (MySQL) kullanılan dinamik bir e-öğrenme web sitesidir.</p>
            <p>Kullanıcılar sisteme öğrenci veya eğitmen olarak kaydolabilir. Eğitmenler yeni kurs yükleyebilir, video dersler ekleyebilir ve kurs fiyatlarını belirleyebilir. Öğrenciler ise bu kursları sepetlerine ekleyip satın alarak izleyebilirler.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>PHPMyAdmin & MySQL</strong> ile tasarlanmış ilişkisel veri tabanı şeması (Kullanıcılar, Kurslar, Satın Alımlar, Sepetler).</li>
                <li>Güvenli kullanıcı oturumu yönetimi (Session handling) ve şifrelenmiş veri tabanı kayıtları.</li>
                <li>Dinamik kurs arama, kategori filtreleme ve detaylı eğitmen paneli (Dashboard).</li>
                <li>Tamamen duyarlı (Responsive) HTML5 ve CSS3 arayüz tasarımı.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/Odemy-Web-Site-with-PHPMyAdmin"
    },
    "iirce": {
        title: "IIRCE Konferans Platformu",
        category: "Web Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder web-bg-2">🌐 [IIRCE Konferans Sitesi]</div></div>`,
        description: `
            <p>International Informatics and Robotics Conference & Exhibition (IIRCE) için özel olarak tasarlanan bu web sitesi, bilimsel bir etkinliğin tüm dijital ihtiyaçlarını karşılamak üzere tasarlanmıştır.</p>
            <p>Katılımcılar konferans programını görebilir, konuşmacı biyografilerini inceleyebilir ve etkinlik biletleri veya kayıt işlemleri için bilgi edinebilirler.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li>Konferans programı ve konuşmacılar için filtreli interaktif zaman akışları.</li>
                <li>İletişim ve kayıt formları için dinamik JavaScript doğrulama (validation) mekanizmaları.</li>
                <li>Karanlık ve aydınlık mod uyumuna sahip, modern cam efektleri içeren arayüz tasarımı.</li>
                <li>SEO uyumlu semantik HTML yapısı ve hızlı sayfa yükleme optimizasyonları.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/-IIRCE"
    },
    "ipo": {
        title: "IPO Tracker (Halka Arz Takip)",
        category: "Web Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder web-bg-3">📈 [IPO Tracker Grafik Paneli]</div></div>`,
        description: `
            <p>Finans dünyasını yakından takip eden kullanıcılar için geliştirilen IPO Tracker, güncel halka arz bilgilerini tek bir ekranda derleyen interaktif bir web izleyicisidir.</p>
            <p>Sistem, talep toplama tarihleri, halka arz fiyatları, dağıtım yöntemleri ve borsa işlem durumları gibi kritik verileri düzenli bir tablo ve zaman çizelgesi formatında sunar.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li>JavaScript Fetch API ile veri tabanından veya harici kaynaklardan dinamik halka arz verisi çekme.</li>
                <li>Kullanıcı dostu arama barı ve 'Aktif', 'Tamamlanmış', 'Bekleyen' durumlarına göre gelişmiş filtreler.</li>
                <li>Halka arz sonuçlarını ve hisse dağılımlarını gösteren görsel infografikler.</li>
                <li>Mobil cihazlarda dikey kaydırma kolaylığı sağlayan akıcı grid tasarımı.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/ipo-tracker"
    },
    "body-metrics": {
        title: "Body Metrics (Vücut Analiz Uygulaması)",
        category: "Web Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder web-bg-4">⚖️ [Body Metrics Arayüzü]</div></div>`,
        description: `
            <p>Sağlıklı yaşam ve fitness hedeflerini takip etmek isteyenler için geliştirilen Body Metrics, vücut analiz ölçümlerini kaydeden ve görselleştiren bir web uygulamasıdır.</p>
            <p>Kullanıcıların boy, kilo, bel, boyun ve kalça çevre ölçümlerini kullanarak Vücut Kitle İndeksi (BMI), Vücut Yağ Oranı ve Günlük Kalori İhtiyacını hesaplar.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Donanma Formülü (US Navy Body Fat Formula)</strong> kullanarak bilimsel yağ oranı hesaplama motoru.</li>
                <li>Kullanıcının geçmiş verilerini tarayıcı hafızasında saklamak için **Local Storage** entegrasyonu.</li>
                <li>Zaman içerisindeki kilo ve yağ oranı değişimlerini gösteren etkileşimli **ChartJS** grafikleri.</li>
                <li>Cam morfizasyonu tarzında minimal ve göz yormayan karanlık tema arayüzü.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/body-metrics"
    },
    "portfolio": {
        title: "Kişisel Portfolyo (Zarif Glassmorphism)",
        category: "Web Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder web-bg-2">✨ [Kişisel Portfolyo Görseli]</div></div>`,
        description: `
            <p>Bu web sitesinin kendisi olan, modern ve etkileşimli bir portfolyo projesidir. Tasarımında cam morfizasyonu (Glassmorphism) estetiği benimsenmiş ve zengin animasyonlarla desteklenmiştir.</p>
            <p>Projeleri, başarıları, bursları ve kişisel yetenekleri sergilemek amacıyla tamamen sıfırdan, saf HTML, CSS ve JavaScript kullanılarak kodlanmıştır.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>3D Tilt Efekti</strong>: Kartların farenin konumuna göre 3D eğilmesi ve yansıma (glare) efekti.</li>
                <li><strong>Yörüngesel (Orbital) Zaman Çizelgesi</strong>: Başarılar ve bursların güneş sistemi modeliyle animasyonlu gösterimi.</li>
                <li><strong>Scroll-Reveal Text</strong>: Sayfa kaydırıldıkça büyüyen ve zıt renklerle vurgulanan dev arka plan başlıkları.</li>
                <li><strong>Mobil Duyarlılık</strong>: Mobil cihazlarda dönen yörüngenin otomatik olarak dikey listeye evrilmesi.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/personal-portfolio"
    },
    "momentumfit": {
        title: "MomentumFit Masaüstü Yazılımı",
        category: "Masaüstü Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder desktop-bg">🖥️ [MomentumFit Masaüstü]</div></div>`,
        description: `
            <p>MomentumFit, spor salonları veya bireysel kullanıcılar için geliştirilmiş, C# programlama dili tabanlı profesyonel bir fitness yönetim ve egzersiz takip masaüstü yazılımıdır.</p>
            <p>Kullanıcılar kişiselleştirilmiş egzersiz programları oluşturabilir, günlük kalori ve makro besin değerlerini girebilir ve antrenman performanslarını veri tabanına kaydedebilirler.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>C# ve .NET Framework / WPF</strong> teknolojileri kullanılarak tasarlanmış modern arayüz bileşenleri.</li>
                <li>SQL Server / SQLite veri tabanı entegrasyonu ile hızlı ve güvenli veri okuma/yazma işlemleri.</li>
                <li>Kullanıcı bazlı egzersiz geçmişi arşivi ve PDF raporlama modülü.</li>
                <li>Gelişmiş veri analitiği paneli ile aylık ağırlık kaldırma grafiklerinin çizilmesi.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/MomentumFit"
    },
    "tarih-efsaneleri": {
        title: "Tarihin Efsaneleri Mobil Uygulaması",
        category: "Mobil Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder mobile-bg">📱 [Tarihin Efsaneleri Uygulaması]</div></div>`,
        description: `
            <p>Tarihe ilgi duyan kullanıcılar için Flutter SDK ve Dart dili kullanılarak geliştirilmiş, Android ve iOS platformlarında çalışan etkileşimli bir tarih ve hikaye uygulamasıdır.</p>
            <p>Fatih Sultan Mehmet, Mustafa Kemal Atatürk, Julius Caesar gibi tarihi figürlerin efsanevi hikayelerini, savaş stratejilerini ve dönemin koşullarını kart tasarımları ve ses efektleriyle sunar.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Flutter (Dart)</strong> ile tek kod tabanından hem Android hem iOS derlemesi.</li>
                <li>Hikayelerin ve kullanıcı puanlarının cihaz içinde saklanması için **SQLite (sqflite)** entegrasyonu.</li>
                <li>Akıcı sayfa geçişleri, kahraman animasyonları (Hero animations) ve sesli hikaye dinleme modu.</li>
                <li>Karanlık mod desteği ve Material 3 tasarım diline uygun estetik arayüz.</li>
            </ul>
        `,
        github: "https://github.com/IHuseyinACAN/Tarihin-Efsaneleri-Mobil-app"
    },
    "takim16": {
        title: "TAKIM16 Mobil Uygulaması",
        category: "Mobil Geliştirme",
        media: `<div class="modal-media"><div class="modal-media-placeholder mobile-bg-2">👥 [TAKIM16 Mobil Arayüzü]</div></div>`,
        description: `
            <p>TAKIM16, ekip çalışması ve ortak proje geliştirme süreçlerinde koordinasyon sağlamak amacıyla geliştirilmiş, gerçek zamanlı iş birliği imkanı sunan bir mobil uygulamadır.</p>
            <p>Kullanıcılar proje takımları oluşturabilir, birbirlerine görev atayabilir, ortak takvim üzerinden teslim tarihlerini yönetebilir ve uygulama içi anlık mesajlaşma ile iletişim kurabilirler.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Flutter</strong> arayüzü ile uyumlu çalışan <strong>Firebase Realtime Database & Firestore</strong> arka planı.</li>
                <li>Google ve e-posta ile giriş imkanı sunan Firebase Authentication altyapısı.</li>
                <li>Uygulama arka planda olsa dahi anlık bildirim gönderen Firebase Cloud Messaging (FCM) entegrasyonu.</li>
                <li>Gelişmiş rol yönetimi (Yönetici, Editör, Üye) ve interaktif görev kontrol paneli (Kanban Board tarzında).</li>
            </ul>
        `,
        github: "https://github.com/HomamAbosaleh/TAKIM16"
    }
};

/* ==========================================================================
   APP INITIALIZATION & EVENTS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initNavbarScroll();
    initMobileMenu();
    initHeroTypewriter();
    init3DTilt();
    initProjectFiltering();
    initOrbitalTimeline();
    initEmailCopy();
    initProjectModals();
    initScrollRevealText();
    initSkillsAnimation();
});

/* ==========================================================================
   NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbarScroll() {
    const header = document.querySelector(".navbar-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/* ==========================================================================
   MOBILE MENU TOGGLE
   ========================================================================== */
function initMobileMenu() {
    const toggleBtn = document.getElementById("mobile-menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-link");

    toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        toggleBtn.classList.toggle("active");
        
        // Hamburgere X efekti
        const spans = toggleBtn.querySelectorAll("span");
        if (navLinks.classList.contains("open")) {
            spans[0].style.transform = "rotate(45deg) translate(6px, 6px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(5px, -6px)";
        } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            const spans = toggleBtn.querySelectorAll("span");
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
        });
    });
}

/* ==========================================================================
   HERO TYPING / TYPEWRITER EFFECT
   ========================================================================== */
function initHeroTypewriter() {
    const target = document.getElementById("dynamic-role");
    const words = ["Software Engineer", "Robotics Maker", "Full-Stack Creator", "Tech Innovator"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            target.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            target.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            // Kelime bitti, bekle silmeye başla
            isDeleting = true;
            typingSpeed = 2000; // Bekleme süresi
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Sonraki kelimeye geçiş beklemesi
        }

        setTimeout(type, typingSpeed);
    }

    // İlk tetikleme
    setTimeout(type, 1000);
}

/* ==========================================================================
   3D CARD TILT & GLARE EFFECT
   ========================================================================== */
function init3DTilt() {
    const cards = document.querySelectorAll(".project-card");

    // Mobil cihazlarda 3D tilt efektini devre dışı bırakıyoruz (performans ve UX)
    if (window.innerWidth <= 768) return;

    cards.forEach(card => {
        const inner = card.querySelector(".project-card-inner");
        
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x coordinate inside the card
            const y = e.clientY - rect.top;  // y coordinate inside the card
            
            // Merkez noktaları
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            // Dönüş dereceleri (Maksimum +-12 derece)
            const rx = -((y - yc) / yc) * 12;
            const ry = ((x - xc) / xc) * 12;
            
            inner.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Glare parıldama efekti konum güncellenmesi
            inner.style.setProperty("--mx", `${x}px`);
            inner.style.setProperty("--my", `${y}px`);
        });

        card.addEventListener("mouseleave", () => {
            inner.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            inner.style.setProperty("--mx", `-200px`);
            inner.style.setProperty("--my", `-200px`);
        });
    });
}

/* ==========================================================================
   PROJECT FILTERING SYSTEM
   ========================================================================== */
function initProjectFiltering() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            // Aktif buton değiştirme
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const category = card.getAttribute("data-category");
                
                if (filter === "all" || category === filter) {
                    card.classList.remove("hide");
                    card.classList.add("fade-in-ani");
                } else {
                    card.classList.add("hide");
                    card.classList.remove("fade-in-ani");
                }
            });
        });
    });
}

/* ==========================================================================
   ORBITAL TIMELINE & ACHIEVEMENTS INTERACTIONS
   ========================================================================== */
function initOrbitalTimeline() {
    const satellites = document.querySelectorAll(".orbital-satellite-node");
    const detailCard = document.getElementById("orbital-detail-card");
    const detailBadge = document.getElementById("detail-badge");
    const detailTitle = document.getElementById("detail-title");
    const detailDesc = document.getElementById("detail-desc");

    // Masaüstünde orbital çember konum hesaplaması (Radius ve Hız tanımları)
    function setupOrbitStyles() {
        if (window.innerWidth > 768) {
            satellites.forEach(sat => {
                const r = sat.getAttribute("style");
                // Style içindeki radius değerlerini CSS değişkenlerine yollayalım
                const radius = sat.style.getPropertyValue("--orbit-radius").trim();
                sat.style.setProperty("--orbit-radius", radius);
            });
        }
    }
    setupOrbitStyles();
    window.addEventListener("resize", setupOrbitStyles);

    // Kartı güncelleme fonksiyonu
    function updateDetail(title, desc, badge) {
        detailCard.classList.remove("show");
        
        setTimeout(() => {
            detailBadge.textContent = badge;
            detailTitle.textContent = title;
            detailDesc.textContent = desc;
            detailCard.classList.add("show");
        }, 200);
    }

    // Varsayılan olarak ilk elementi gösterelim
    const firstSat = satellites[0];
    if (firstSat) {
        updateDetail(
            firstSat.getAttribute("data-title"),
            firstSat.getAttribute("data-desc"),
            firstSat.getAttribute("data-badge")
        );
    }

    // Fare veya tıklama dinleyicileri
    satellites.forEach(sat => {
        // Masaüstü hover etkileşimi
        sat.addEventListener("mouseenter", () => {
            satellites.forEach(s => s.classList.remove("active"));
            sat.classList.add("active");
            
            updateDetail(
                sat.getAttribute("data-title"),
                sat.getAttribute("data-desc"),
                sat.getAttribute("data-badge")
            );
        });

        // Mobil tıklama etkileşimi (Mobil sürümde liste halindeler, tıklayınca modal açabiliriz)
        sat.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                // Mobilde liste elemanına tıklayınca şık bir detay modalı açalım
                const title = sat.getAttribute("data-title");
                const desc = sat.getAttribute("data-desc");
                const badge = sat.getAttribute("data-badge");
                const icon = sat.getAttribute("data-icon");
                
                openAchievementModal(title, desc, badge, icon);
            }
        });
    });
}

function openAchievementModal(title, desc, badge, icon) {
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-dynamic-content");

    content.innerHTML = `
        <div class="modal-header">
            <span class="modal-category">${badge}</span>
            <h3 class="modal-title">${icon} ${title}</h3>
        </div>
        <div class="modal-body">
            <p>${desc}</p>
        </div>
    `;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

/* ==========================================================================
   EMAIL DIRECT COPY TO CLIPBOARD
   ========================================================================== */
function initEmailCopy() {
    const btn = document.getElementById("email-copy-btn");
    const emailSpan = document.getElementById("email-text");
    const emailVal = emailSpan.textContent.trim();

    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(emailVal).then(() => {
            btn.classList.add("copied");
            emailSpan.textContent = "Kopyalandı!";
            
            setTimeout(() => {
                btn.classList.remove("copied");
                emailSpan.textContent = emailVal;
            }, 2000);
        }).catch(err => {
            console.error("Kopyalama başarısız: ", err);
        });
    });
}

/* ==========================================================================
   PROJECT MODALS SYSTEM
   ========================================================================== */
function initProjectModals() {
    const modal = document.getElementById("project-modal");
    const content = document.getElementById("modal-dynamic-content");
    const closeBtn = document.getElementById("modal-close-btn");
    const detailsButtons = document.querySelectorAll(".btn-card-details");

    function openModal(projectId) {
        const data = projectDetails[projectId];
        if (!data) return;

        // Medya kontrolü (Resim placeholder veya Video iframe)
        let mediaHtml = data.media;

        // Github ve YouTube butonları
        let actionsHtml = `<div class="modal-footer">`;
        if (data.github) {
            actionsHtml += `<a href="${data.github}" target="_blank" class="btn btn-primary">GitHub Kodlarını Gör</a>`;
        }
        if (data.youtube) {
            actionsHtml += `<a href="${data.youtube}" target="_blank" class="btn btn-secondary">YouTube Videosu</a>`;
        }
        actionsHtml += `</div>`;

        content.innerHTML = `
            <div class="modal-header">
                <span class="modal-category">${data.category}</span>
                <h3 class="modal-title">${data.title}</h3>
            </div>
            ${mediaHtml}
            <div class="modal-body">
                ${data.description}
            </div>
            ${actionsHtml}
        `;

        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Sayfa kaydırmasını kapat
    }

    function closeModal() {
        modal.classList.remove("show");
        document.body.style.overflow = ""; // Kaydırmayı geri aç
        
        // Modal kapanınca video çalmayı durdurmak için içeriği temizleyelim
        setTimeout(() => {
            content.innerHTML = "";
        }, 300);
    }

    // Proje kartı içindeki butonlara tıklama dinleyicisi
    detailsButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Kart tıklama eventiyle çakışmayı önle
            const card = btn.closest(".project-card");
            const projectId = card.getAttribute("data-project-id");
            openModal(projectId);
        });
    });

    // Kartın kendisine tıklayınca da modalın açılması (Güçlü kullanıcı etkileşimi)
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const projectId = card.getAttribute("data-project-id");
            openModal(projectId);
        });
    });

    closeBtn.addEventListener("click", closeModal);
    
    // Dışarı tıklayınca kapanma
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // ESC ile kapanma
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    });
}

/* ==========================================================================
   SCROLL REVEAL BACKGROUND TEXT EFFECT
   ========================================================================== */
function initScrollRevealText() {
    const projectsBgText = document.getElementById("scroll-projects-text");
    const orbitalBgText = document.getElementById("scroll-orbital-text");
    
    window.addEventListener("scroll", () => {
        // Sayfa kaydırma oranına göre translate kaydırma hesabı yapalım
        const scrollVal = window.scrollY;
        
        if (projectsBgText) {
            // Projeler trigger yakınındayken kaydır
            const trigger = document.getElementById("projects-trigger");
            const rect = trigger.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const shift = (window.innerHeight - rect.top) * 0.15;
                projectsBgText.style.transform = `translateX(${shift - 80}px)`;
            }
        }

        if (orbitalBgText) {
            // Yörünge trigger yakınındayken kaydır
            const trigger = document.getElementById("orbital-trigger");
            const rect = trigger.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const shift = (window.innerHeight - rect.top) * -0.15;
                orbitalBgText.style.transform = `translateX(${shift + 80}px)`;
            }
        }
    });
}

/* ==========================================================================
   SKILLS PROGRESS BAR ANIMATION (ON SCROLL INTO VIEW)
   ========================================================================== */
function initSkillsAnimation() {
    const skillsSection = document.getElementById("skills");
    const progressBars = document.querySelectorAll(".skill-progress");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const percent = bar.getAttribute("style");
                    // Custom Style içindeki --percent değerini alıp genişliğe yaz
                    const widthPercent = bar.style.getPropertyValue("--percent");
                    bar.style.width = widthPercent;
                });
                // Animasyon bir kere çalışsın diye izlemeyi bırakabiliriz
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // Alanın %15'i göründüğünde tetikle
    });

    if (skillsSection) {
        observer.observe(skillsSection);
    }
}
