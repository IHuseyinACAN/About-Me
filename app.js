/* ==========================================================================
   PROJECT DATA FOR MODALS
   ========================================================================== */
const projectDetails = {
    "robot-kol": {
        title: "6 Eksenli Robot Kol",
        category: "Robotik & Donanım",
        categoryKey: "robotics",
        techs: ["Arduino", "Servo Motors", "C++", "Ters Kinematik"],
        tagline: "Arduino tabanlı, 6 serbestlik derecesine (6-DOF) sahip endüstriyel robotik kol sistemi.",
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
        youtube: "https://www.youtube.com/watch?v=ZEir102PxJ8",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .r-arm-line { stroke: #a855f7; stroke-width: 1.5; stroke-linecap: round; opacity: 0.8; }
                .r-arm-joint { fill: #06b6d4; filter: drop-shadow(0 0 4px #06b6d4); }
            </style>
            <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.03)" stroke-width="1" stroke-dasharray="2 3"/>
            <path d="M50 85 H30 M50 85 H70 M50 85 V75" class="r-arm-line"/>
            <circle cx="50" cy="75" r="4.5" class="r-arm-joint"/>
            <line x1="50" y1="75" x2="35" y2="48" class="r-arm-line svg-blueprint-line"/>
            <circle cx="35" cy="48" r="3.8" class="r-arm-joint"/>
            <line x1="35" y1="48" x2="62" y2="32" class="r-arm-line svg-blueprint-line" style="animation-delay: 0.8s;"/>
            <circle cx="62" cy="32" r="3" class="r-arm-joint"/>
            <path d="M62 32 L70 22 M62 32 L72 38 M70 22 H74 M72 38 V34" class="r-arm-line" style="animation-delay: 1.6s;"/>
        </svg>`
    },
    "taret": {
        title: "Dart Fırlatan Taret",
        category: "Robotik & Donanım",
        categoryKey: "robotics",
        techs: ["Arduino", "Servo", "Sensörler", "Tetik Motoru"],
        tagline: "2 eksenli yönlenebilen ve uzaktan tetiklenebilen elektro-mekanik dart taret fırlatıcısı.",
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
        github: "https://github.com/IHuseyinACAN",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .tar-line { stroke: #a855f7; stroke-width: 1.2; opacity: 0.7; }
                .tar-sweep { fill: url(#sweep-g); }
            </style>
            <defs>
                <linearGradient id="sweep-g" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#a855f7" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="40" class="tar-line" stroke-dasharray="2 3"/>
            <circle cx="50" cy="50" r="26" class="tar-line"/>
            <circle cx="50" cy="50" r="10" class="tar-line"/>
            <line x1="8" y1="50" x2="92" y2="50" class="tar-line" stroke-dasharray="4 4"/>
            <line x1="50" y1="8" x2="50" y2="92" class="tar-line" stroke-dasharray="4 4"/>
            <path d="M50 50 L78 22 A 40 40 0 0 0 50 10 Z" class="tar-sweep svg-rotate-grid"/>
            <circle cx="68" cy="35" r="2" fill="#06b6d4" class="svg-glow-circle"/>
            <circle cx="34" cy="62" r="2.5" fill="#06b6d4" class="svg-glow-circle" style="animation-delay: 0.8s;"/>
        </svg>`
    },
    "odemy": {
        title: "Odemy Eğitim Platformu",
        category: "Web Geliştirme",
        categoryKey: "web",
        techs: ["PHP", "MySQL", "PHPMyAdmin", "HTML/CSS"],
        tagline: "PHP ve ilişkisel veritabanı altyapılı, eğitmen ve öğrenci sekmelerine sahip e-öğrenme klonu.",
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
        github: "https://github.com/IHuseyinACAN/Odemy-Web-Site-with-PHPMyAdmin",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .web-line { stroke: #6366f1; stroke-width: 1.5; opacity: 0.8; }
            </style>
            <rect x="10" y="20" width="80" height="60" rx="6" class="web-line"/>
            <line x1="10" y1="34" x2="90" y2="34" class="web-line"/>
            <circle cx="16" cy="27" r="1.5" fill="#ef4444"/>
            <circle cx="22" cy="27" r="1.5" fill="#f59e0b"/>
            <circle cx="28" cy="27" r="1.5" fill="#10b981"/>
            <rect x="18" y="42" width="28" height="24" rx="2" class="web-line" stroke-dasharray="200" stroke-dashoffset="200" class="svg-blueprint-line"/>
            <rect x="54" y="42" width="28" height="24" rx="2" class="web-line" stroke-dasharray="200" stroke-dashoffset="200" class="svg-blueprint-line" style="animation-delay: 0.5s;"/>
            <line x1="22" y1="58" x2="38" y2="58" class="web-line" stroke-width="1" stroke-dasharray="2 2"/>
            <line x1="58" y1="58" x2="74" y2="58" class="web-line" stroke-width="1" stroke-dasharray="2 2"/>
            <polygon points="66,49 66,55 71,52" fill="#06b6d4"/>
        </svg>`
    },
    "iirce": {
        title: "IIRCE Konferans Platformu",
        category: "Web Geliştirme",
        categoryKey: "web",
        techs: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        tagline: "Uluslararası Bilişim ve Robotik Konferansı için tasarlanan etkinlik yönetim ve kayıt sitesi.",
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
        github: "https://github.com/IHuseyinACAN/-IIRCE",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .conf-line { stroke: #6366f1; stroke-width: 1.2; opacity: 0.6; }
                .conf-node { fill: #06b6d4; }
            </style>
            <circle cx="50" cy="50" r="35" class="conf-line" stroke-dasharray="3 3"/>
            <circle cx="50" cy="50" r="14" class="conf-line"/>
            <line x1="50" y1="15" x2="50" y2="36" class="conf-line svg-blueprint-line"/>
            <line x1="50" y1="50" x2="80" y2="32" class="conf-line svg-blueprint-line" style="animation-delay: 0.4s;"/>
            <line x1="50" y1="50" x2="20" y2="32" class="conf-line svg-blueprint-line" style="animation-delay: 0.8s;"/>
            <line x1="50" y1="50" x2="32" y2="76" class="conf-line svg-blueprint-line" style="animation-delay: 1.2s;"/>
            <line x1="50" y1="50" x2="68" y2="76" class="conf-line svg-blueprint-line" style="animation-delay: 1.6s;"/>
            <path d="M50 15 L80 32 L68 76 L32 76 L20 32 Z" class="conf-line" stroke-dasharray="2 3"/>
            <circle cx="50" cy="15" r="3.5" class="conf-node svg-glow-circle"/>
            <circle cx="80" cy="32" r="3.5" class="conf-node svg-glow-circle" style="animation-delay: 0.4s;"/>
            <circle cx="68" cy="76" r="3.5" class="conf-node svg-glow-circle" style="animation-delay: 0.8s;"/>
            <circle cx="32" cy="76" r="3.5" class="conf-node svg-glow-circle" style="animation-delay: 1.2s;"/>
            <circle cx="20" cy="32" r="3.5" class="conf-node svg-glow-circle" style="animation-delay: 1.6s;"/>
        </svg>`
    },
    "ipo": {
        title: "IPO Tracker (Halka Arz Takip)",
        category: "Web Geliştirme",
        categoryKey: "web",
        techs: ["JavaScript", "Fetch API", "JSON Data", "CSS Grid"],
        tagline: "Borsadaki en son halka arz takvimlerini ve hisse dağılımlarını listeleyen takipçi.",
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
        github: "https://github.com/IHuseyinACAN/ipo-tracker",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .chart-axis { stroke: #6366f1; stroke-width: 1.5; opacity: 0.7; }
                .chart-grid { stroke: rgba(255,255,255,0.04); stroke-width: 0.8; }
                .chart-line { stroke: #06b6d4; stroke-width: 2.2; filter: drop-shadow(0 0 4px #06b6d4); }
            </style>
            <line x1="10" y1="20" x2="90" y2="20" class="chart-grid"/>
            <line x1="10" y1="40" x2="90" y2="40" class="chart-grid"/>
            <line x1="10" y1="60" x2="90" y2="60" class="chart-grid"/>
            <line x1="10" y1="80" x2="90" y2="80" class="chart-grid"/>
            <line x1="30" y1="10" x2="30" y2="90" class="chart-grid"/>
            <line x1="60" y1="10" x2="60" y2="90" class="chart-grid"/>
            <line x1="10" y1="10" x2="10" y2="90" class="chart-axis"/>
            <line x1="10" y1="80" x2="90" y2="80" class="chart-axis"/>
            <rect x="22" y="55" width="7" height="25" fill="#ef4444" opacity="0.5"/>
            <rect x="42" y="38" width="7" height="42" fill="#10b981" opacity="0.5"/>
            <rect x="62" y="24" width="7" height="56" fill="#10b981" opacity="0.5"/>
            <path d="M10 74 L30 64 L60 38 L90 20" class="chart-line svg-blueprint-line"/>
            <circle cx="90" cy="20" r="3" fill="#06b6d4" class="svg-glow-circle"/>
        </svg>`
    },
    "body-metrics": {
        title: "Body Metrics (Vücut Analizi)",
        category: "Web Geliştirme",
        categoryKey: "web",
        techs: ["JavaScript", "US Navy Formülü", "ChartJS", "Local Storage"],
        tagline: "Vücut kitle indeksini, yağ oranını hesaplayan ve ChartJS ile takip sunan fitness hesaplayıcı.",
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
        github: "https://github.com/IHuseyinACAN/body-metrics",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .met-track { stroke: rgba(255,255,255,0.03); stroke-width: 6; }
                .met-ring-1 { stroke: #6366f1; stroke-width: 6; stroke-linecap: round; }
                .met-ring-2 { stroke: #06b6d4; stroke-width: 6; stroke-linecap: round; }
            </style>
            <circle cx="50" cy="50" r="35" class="met-track"/>
            <circle cx="50" cy="50" r="35" class="met-ring-1" stroke-dasharray="220" stroke-dashoffset="65" transform="rotate(-90 50 50)"/>
            <circle cx="50" cy="50" r="23" class="met-track"/>
            <circle cx="50" cy="50" r="23" class="met-ring-2" stroke-dasharray="145" stroke-dashoffset="35" transform="rotate(-90 50 50)"/>
            <path d="M38 50 H44 L47 43 L51 57 L54 48 L56 50 H62" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svg-blueprint-line"/>
        </svg>`
    },
    "portfolio": {
        title: "Kişisel Portfolyo",
        category: "Web Geliştirme",
        categoryKey: "web",
        techs: ["HTML5/CSS3", "Vanilla JS", "Glassmorphism", "3D Tilt"],
        tagline: "Bu web sitesinin kendisi. Modern cam görünümü, 3D animasyonlar ve interaktif yörüngesel zaman tüneli.",
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
        github: "https://github.com/IHuseyinACAN/personal-portfolio",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .port-line { stroke: #6366f1; stroke-width: 1.5; }
                .port-acc { stroke: #06b6d4; stroke-width: 1.5; }
            </style>
            <rect x="15" y="15" width="70" height="70" rx="8" class="port-line" stroke-dasharray="2 3"/>
            <path d="M25 45 H38 L43 37 H75 V70 H25 Z" class="port-line"/>
            <path d="M25 45 L20 68 H70 L75 45 Z" class="port-acc" fill="rgba(6,182,212,0.05)"/>
            <rect x="35" y="28" width="30" height="25" rx="2" class="port-line" stroke-width="1" fill="rgba(255,255,255,0.02)"/>
            <line x1="40" y1="34" x2="60" y2="34" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
            <line x1="40" y1="40" x2="52" y2="40" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
        </svg>`
    },
    "momentumfit": {
        title: "MomentumFit Masaüstü Yazılımı",
        category: "Masaüstü Geliştirme",
        categoryKey: "desktop",
        techs: ["C#", "WPF / WinForms", "SQL Server", "Analitik Grafik"],
        tagline: "C# WPF tabanlı, spor salonları ve bireysel sporcular için fitness takip ve veri analiz uygulaması.",
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
        github: "https://github.com/IHuseyinACAN/MomentumFit",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .desk-line { stroke: #10b981; stroke-width: 1.5; }
                .desk-wave { stroke: #ec4899; stroke-width: 1.5; }
            </style>
            <rect x="10" y="15" width="80" height="60" rx="4" class="desk-line"/>
            <line x1="10" y1="28" x2="90" y2="28" class="desk-line"/>
            <line x1="28" y1="28" x2="28" y2="75" class="desk-line"/>
            <rect x="42" y="38" width="4" height="12" rx="1" fill="#10b981" transform="rotate(45 44 44)"/>
            <rect x="36" y="35" width="3" height="8" rx="1" fill="#10b981" transform="rotate(45 37.5 39)"/>
            <rect x="48" y="47" width="3" height="8" rx="1" fill="#10b981" transform="rotate(45 49.5 51)"/>
            <path d="M35 65 L48 55 L65 60 L80 44" class="desk-wave svg-blueprint-line"/>
            <circle cx="80" cy="44" r="2.5" fill="#ec4899" class="svg-glow-circle"/>
        </svg>`
    },
    "tarih-efsaneleri": {
        title: "Tarihin Efsaneleri Mobil",
        category: "Mobil Geliştirme",
        categoryKey: "mobile",
        techs: ["Flutter", "Dart", "SQLite", "Material 3"],
        tagline: "Tarihi şahsiyetleri ve efsaneleri SQLite veritabanı ile cihazda saklayan mobil rehber uygulaması.",
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
        github: "https://github.com/IHuseyinACAN/Tarihin-Efsaneleri-Mobil-app",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .shld-line { stroke: #06b6d4; stroke-width: 1.5; }
                .shld-acc { stroke: #10b981; stroke-width: 1.2; }
            </style>
            <path d="M50 20 C65 20 75 25 75 45 C75 65 50 82 50 82 C50 82 25 65 25 45 C25 25 35 20 50 20 Z" class="shld-line"/>
            <line x1="20" y1="80" x2="80" y2="20" class="shld-acc" stroke-dasharray="2 4"/>
            <line x1="80" y1="80" x2="20" y2="20" class="shld-acc" stroke-dasharray="2 4"/>
            <path d="M50 20 V82" class="shld-line" stroke-width="1" stroke-dasharray="3 3"/>
            <circle cx="50" cy="46" r="6" class="shld-line"/>
            <polygon points="50,42 53,49 47,49" fill="#10b981"/>
        </svg>`
    },
    "takim16": {
        title: "TAKIM16 Mobil Uygulaması",
        category: "Mobil Geliştirme",
        categoryKey: "mobile",
        techs: ["Flutter", "Firebase", "Realtime DB", "Push Notifications"],
        tagline: "Firebase entegrasyonlu, ekipler arası gerçek zamanlı iş birliği ve görev takip uygulaması.",
        media: `<div class="modal-media"><div class="modal-media-placeholder mobile-bg-2">👥 [TAKIM16 Mobil Arayüzü]</div></div>`,
        description: `
            <p>TAKIM16, ekip çalışması ve ortak proje geliştirme süreçlerinde koordinasyon sağlamak amacıyla geliştirilmiş, gerçek zamanlı iş birliği imkanı sunan bir mobil uygulamadır.</p>
            <p>Kullanıcılar proje takımları oluşturabilir, birbirlerine görev atayabilir, ortak takvim üzerinden teslim tarihlerini yönetebilirer ve uygulama içi anlık mesajlaşma ile iletişim kurabilirler.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Flutter</strong> arayüzü ile uyumlu çalışan <strong>Firebase Realtime Database & Firestore</strong> arka planı.</li>
                <li>Google ve e-posta ile giriş imkanı sunan Firebase Authentication altyapısı.</li>
                <li>Uygulama arka planda olsa dahi anlık bildirim gönderen Firebase Cloud Messaging (FCM) entegrasyonu.</li>
                <li>Gelişmiş rol yönetimi (Yönetici, Editör, Üye) ve interaktif görev kontrol paneli (Kanban Board tarzında).</li>
            </ul>
        `,
        github: "https://github.com/HomamAbosaleh/TAKIM16",
        svg: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <style>
                .t16-line { stroke: #06b6d4; stroke-width: 1.2; }
                .t16-node { fill: #10b981; }
            </style>
            <circle cx="50" cy="30" r="5" class="t16-node svg-glow-circle"/>
            <circle cx="30" cy="62" r="5" class="t16-node svg-glow-circle" style="animation-delay: 0.5s;"/>
            <circle cx="70" cy="62" r="5" class="t16-node svg-glow-circle" style="animation-delay: 1s;"/>
            <circle cx="50" cy="52" r="8" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="2 2"/>
            <line x1="50" y1="30" x2="50" y2="44" class="t16-line svg-blueprint-line"/>
            <line x1="30" y1="62" x2="44" y2="55" class="t16-line svg-blueprint-line" style="animation-delay: 0.5s;"/>
            <line x1="70" y1="62" x2="56" y2="55" class="t16-line svg-blueprint-line" style="animation-delay: 1s;"/>
            <line x1="50" y1="30" x2="30" y2="62" class="t16-line" stroke-dasharray="3 3" opacity="0.3"/>
            <line x1="50" y1="30" x2="70" y2="62" class="t16-line" stroke-dasharray="3 3" opacity="0.3"/>
            <line x1="30" y1="62" x2="70" y2="62" class="t16-line" stroke-dasharray="3 3" opacity="0.3"/>
        </svg>`
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
    initOrbitalTimeline();
    initEmailCopy();
    initProjectModals();
    initScrollRevealText();
    initSkillsAnimation();
    initFolderClickEvents();
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
   3D FOLDER TILT EFFECT
   ========================================================================== */
function init3DTilt() {
    const folders = document.querySelectorAll(".folder-wrapper");

    // Mobil cihazlarda 3D tilt efektini devre dışı bırakıyoruz (performans ve UX)
    if (window.innerWidth <= 768) return;

    folders.forEach(wrapper => {
        const folder3d = wrapper.querySelector(".folder-3d");
        if (!folder3d) return;
        
        wrapper.addEventListener("mousemove", (e) => {
            const rect = wrapper.getBoundingClientRect();
            const x = e.clientX - rect.left; // x coordinate inside the wrapper
            const y = e.clientY - rect.top;  // y coordinate inside the wrapper
            
            // Merkez noktaları
            const xc = rect.width / 2;
            const yc = rect.height / 2;
            
            // Dönüş dereceleri (Maksimum +-10 derece)
            const rx = -((y - yc) / yc) * 10;
            const ry = ((x - xc) / xc) * 10;
            
            folder3d.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        wrapper.addEventListener("mouseleave", () => {
            folder3d.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
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

    // Klasör içindeki fırlayan proje kartlarına tıklama dinleyicisi
    const cards = document.querySelectorAll(".folder-project-card");
    cards.forEach(card => {
        card.addEventListener("click", (e) => {
            e.stopPropagation(); // Klasörün kendi klik eventleriyle çakışmayı önle
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

    window.openProjectModal = openModal;
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

/* ==========================================================================
   3D FOLDER INTERACTIVE DETAIL PANEL & DYNAMIC PREVIEW
   ========================================================================== */
function initFolderClickEvents() {
    const folders = document.querySelectorAll(".folder-wrapper");
    const panel = document.getElementById("folder-details-panel");
    const panelCloseBtn = document.getElementById("panel-close-btn");
    const panelTitle = document.getElementById("panel-category-title");
    const panelIcon = document.getElementById("panel-icon");
    const panelList = document.getElementById("panel-project-list");
    const previewTitle = document.getElementById("preview-proj-title");
    const previewDesc = document.getElementById("preview-proj-desc");
    const previewVisualBox = document.getElementById("preview-visual-box");
    const hoverPreviewContainer = document.getElementById("project-hover-preview");

    if (!panel) return;

    const categoryColors = {
        robotics: { name: "Robotik & Gömülü Donanım", icon: "🤖", accent: '#a855f7', glow: 'rgba(168, 85, 247, 0.25)' },
        web: { name: "Web Geliştirme", icon: "🌐", accent: '#6366f1', glow: 'rgba(99, 102, 241, 0.25)' },
        mobile: { name: "Mobil Geliştirme", icon: "📱", accent: '#06b6d4', glow: 'rgba(6, 182, 212, 0.25)' },
        desktop: { name: "Masaüstü Geliştirme", icon: "💻", accent: '#10b981', glow: 'rgba(16, 185, 129, 0.25)' }
    };

    function closeDetailsPanel() {
        folders.forEach(f => f.classList.remove("active"));
        panel.classList.remove("open");
        if (hoverPreviewContainer) {
            hoverPreviewContainer.classList.remove("active-border");
        }
    }

    // Set transition styles for dynamic preview elements
    if (previewVisualBox) {
        previewVisualBox.style.transition = 'opacity 0.25s ease-in-out, transform 0.4s ease';
    }
    if (previewTitle) {
        previewTitle.style.transition = 'opacity 0.25s ease-in-out';
    }
    if (previewDesc) {
        previewDesc.style.transition = 'opacity 0.25s ease-in-out';
    }

    function updatePreviewCard(projectId) {
        const proj = projectDetails[projectId];
        if (!proj) return;

        // Fade out
        if (previewVisualBox) previewVisualBox.style.opacity = '0';
        if (previewTitle) previewTitle.style.opacity = '0';
        if (previewDesc) previewDesc.style.opacity = '0';

        setTimeout(() => {
            // Update contents
            if (previewVisualBox) {
                previewVisualBox.innerHTML = proj.svg || '';
            }
            if (previewTitle) {
                previewTitle.textContent = proj.title;
            }
            if (previewDesc) {
                previewDesc.textContent = proj.tagline;
            }

            // Fade back in
            if (previewVisualBox) previewVisualBox.style.opacity = '1';
            if (previewTitle) previewTitle.style.opacity = '1';
            if (previewDesc) previewDesc.style.opacity = '1';
        }, 150);
    }

    function renderProjectList(category) {
        if (!panelList) return;
        panelList.innerHTML = "";

        const filtered = Object.entries(projectDetails).filter(([key, val]) => val.categoryKey === category);
        
        filtered.forEach(([key, proj]) => {
            const li = document.createElement("li");
            li.className = "panel-project-item";
            li.setAttribute("data-project-id", key);

            const techsHtml = proj.techs ? proj.techs.map(t => `<span>${t}</span>`).join('') : '';

            li.innerHTML = `
                <div class="item-header">
                    <h5 class="item-title">${proj.title}</h5>
                </div>
                <p class="item-summary">${proj.tagline || ''}</p>
                <div class="item-tags">
                    ${techsHtml}
                </div>
            `;

            // Hover event
            li.addEventListener("mouseenter", () => {
                const items = panelList.querySelectorAll(".panel-project-item");
                items.forEach(item => item.classList.remove("active"));
                li.classList.add("active");
                updatePreviewCard(key);
            });

            // Click event -> Open project details modal
            li.addEventListener("click", () => {
                if (window.openProjectModal) {
                    window.openProjectModal(key);
                }
            });

            panelList.appendChild(li);
        });

        // Auto-select and preview the first item
        const items = panelList.querySelectorAll(".panel-project-item");
        if (items.length > 0) {
            const firstItem = items[0];
            firstItem.classList.add("active");
            const firstKey = firstItem.getAttribute("data-project-id");
            updatePreviewCard(firstKey);
            if (hoverPreviewContainer) {
                hoverPreviewContainer.classList.add("active-border");
            }
        } else {
            // Clear preview if empty
            if (previewVisualBox) {
                previewVisualBox.innerHTML = `
                    <div class="preview-placeholder">
                        <svg class="preview-placeholder-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-3.447-3.446.57 2.225-2.51-5.072-1.358m10.218 4.592L19.638 12m-6.864 2.378L18 8.25M12 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Detayları görmek için listedeki projelerin üzerine gelin</span>
                    </div>
                `;
            }
            if (previewTitle) previewTitle.textContent = "Proje Önizleme";
            if (previewDesc) previewDesc.textContent = "Bir projeyi incelemek için fareyi üzerine getirin, tam detaylar için tıklayın.";
            if (hoverPreviewContainer) {
                hoverPreviewContainer.classList.remove("active-border");
            }
        }
    }

    folders.forEach(folder => {
        folder.addEventListener("click", (e) => {
            // Check if user clicked inside card to prevent overriding card click modal opening
            if (e.target.closest('.folder-project-card')) {
                return; 
            }

            const category = folder.getAttribute("data-category");
            const isActive = folder.classList.contains("active");

            if (isActive) {
                // If already active, toggle/close the panel
                closeDetailsPanel();
            } else {
                // Deactivate others
                folders.forEach(f => f.classList.remove("active"));
                // Activate this folder
                folder.classList.add("active");

                // Set style variables on the panel
                const categoryData = categoryColors[category];
                if (categoryData) {
                    panel.style.setProperty('--active-accent', categoryData.accent);
                    panel.style.setProperty('--active-glow', categoryData.glow);
                    
                    if (panelTitle) panelTitle.textContent = categoryData.name;
                    if (panelIcon) panelIcon.textContent = categoryData.icon;
                }

                // Render list
                renderProjectList(category);

                // Open the panel
                panel.classList.add("open");

                // Scroll to the panel smoothly
                setTimeout(() => {
                    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 350);
            }
        });
    });

    if (panelCloseBtn) {
        panelCloseBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeDetailsPanel();
        });
    }
}
