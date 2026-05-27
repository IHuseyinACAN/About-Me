/* ==========================================================================
   PROJECT DATA FOR MODALS
   ========================================================================== */
const projectDetails = {
    "robot-kol": {
        title: "6 Eksenli Robot Kol",
        category: "Robotik & Donanım",
        categoryKey: "robotics",
        techs: ["Arduino", "Servo Motors", "C++", "GUI", "Export/Import"],
        tagline: "Arduino ve servo motorlar ile hayata geçirilen bu robotik kol projesi, özel kontrol arayüzü sayesinde hareket pozisyonlarını kaydedip otomatik olarak oynatabilen, verileri dışa/içe aktarma özelliklerine sahip akıllı bir mekatronik uygulamadır.",
        media: `
        <div class="modal-media">
            <video class="modal-video" autoplay loop muted playsinline poster="assets/robot-kol.jpeg" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);">
                <source src="assets/robot-kol.mp4" type="video/mp4">
                Tarayıcınız video oynatmayı desteklemiyor.
            </video>
        </div>`,
        description: `
            <p>Arduino Uno mikrodenetleyicisi, yüksek torklu MG995 ve hassas MG90S servo motorlar kullanılarak geliştirilen bu robotik kol projesi; özel olarak tasarlanmış bir grafik arayüz (GUI) üzerinden eklemlerin manuel kontrol edilmesini, ardışık hareket pozisyonlarının kaydedilip otomatik olarak tekrarlanmasını ve bu hareket koordinatlarının dışa aktarılıp (export) yeniden içe aktarılmasını (import) sağlayan kapsamlı bir mekatronik ve gömülü sistem çalışmasıdır.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Arduino & C++ Gömülü Kod</strong>: Düşük gecikmeli ve kararlı servo konumlandırma.</li>
                <li><strong>Pozisyon Kayıt & Oynatma</strong>: Robot kolun hareket adımlarını kaydedip istenen hızda otomatik tekrarlama.</li>
                <li><strong>Veri Dışa/İçe Aktarma (Export/Import)</strong>: Kaydedilen hareket koordinatlarının JSON/Text formatında yedeklenmesi ve tekrar yüklenmesi.</li>
                <li><strong>Gelişmiş Arayüz Kontrolü</strong>: Bilgisayar üzerinden tüm eklemleri anlık izleme ve açısal kalibrasyon imkanı.</li>
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
        media: `<div class="modal-media"><img src="assets/taret.png" alt="Dart Taret" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>Arduino ve 2 eksenli (pan-tilt) yönlendirme mekanizması kullanılarak hayata geçirilen bu proje, hedef tespiti ve otomatik dart fırlatma kabiliyetine sahip akıllı bir savunma sistemi prototipidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Çift Eksen Servo Kontrolü</strong>: Yatay ve dikey açılarda hassas yönlendirme.</li>
                <li><strong>Fırlatma Motoru Sürücüsü</strong>: Yüksek hızlı motorlar vasıtasıyla sürtünme bazlı dart fırlatma mekanizması.</li>
                <li><strong>Mekatronik Entegrasyon</strong>: 3D yazıcı ile üretilmiş mekanik gövde ve elektronik bileşenlerin uyumlu çalışması.</li>
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
        tagline: "Odemy, PHP ve phpMyAdmin teknolojilerini kullanarak dinamik veri yönetimini ve modern bir eğitim arayüzünü bir araya getiren veritabanı destekli bir web sitesi projesidir.",
        media: `<div class="modal-media"><img src="assets/odemy.png" alt="Odemy Platformu" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>Odemy, PHP programlama dili ve MySQL veritabanı yönetim aracı olan phpMyAdmin mimarisi üzerine kurulu; dinamik içerik yönetimi, kullanıcı kayıt sistemleri ve veri akışı optimizasyonlarını entegre ederek modern bir eğitim veya kurs platformunun temel işlevlerini web ortamında simüle etmeyi amaçlayan kapsamlı bir web geliştirme projesidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>İlişkisel MySQL Veritabanı</strong>: Öğrenciler, eğitmenler ve kurs kayıtları için optimize edilmiş tablolar.</li>
                <li><strong>Dinamik İçerik Yönetimi</strong>: PHP ile sunucu tarafında veri işleme, kurs ekleme ve listeleme.</li>
                <li><strong>Kullanıcı Oturumları</strong>: Güvenli giriş-çıkış ve eğitmen/öğrenci rol yönetimi.</li>
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
    "siirce": {
        title: "Şiirce Edebiyat Platformu",
        category: "Web Geliştirme",
        categoryKey: "web",
        techs: ["HTML5", "CSS3", "JavaScript", "Responsive"],
        tagline: "ŞİİRCE; geleneksel şiir kültürünü modern web ve mobil teknolojilerle buluşturarak, kullanıcıların zengin edebi içeriklere kolayca erişmesini ve dijital bir şiir arşivi oluşturmasını sağlayan yenilikçi bir edebiyat platformudur.",
        media: `<div class="modal-media"><img src="assets/siirce.png" alt="Şiirce Edebiyat Platformu" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>ŞİİRCE; zengin edebi mirasımızın en güçlü yapı taşı olan şiir sanatını modern teknolojinin imkanlarıyla harmanlayarak, kullanıcıların şairleri keşfetmesine, kendi favori dizelerini arşivlemesine ve şiirin estetik dünyasıyla her an etkileşimde kalmasına olanak tanıyan, hem web hem de mobil platformlar için optimize edilmiş kapsamlı bir dijital edebiyat ekosistemidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Edebi Arama ve Keşif</strong>: Yüzyılların şiir mirasını şair, dönem veya temaya göre filtreleme.</li>
                <li><strong>Kişisel Şiir Defteri</strong>: Beğenilen dizeleri bulutta veya yerel hafızada arşivleme seçeneği.</li>
                <li><strong>Minimalist Okuma Arayüzü</strong>: Okuma odağını artıran göz yormayan tipografi ve renk paletleri.</li>
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
        tagline: "ipo-tracker, halka arz süreçlerini ve güncel borsa verilerini dinamik bir şekilde takip ederek yatırımcıların doğru kararlar almasına yardımcı olan pratik bir finansal izleme uygulamasıdır.",
        media: `<div class="modal-media"><img src="assets/ipo.png" alt="IPO Tracker" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>ipo-tracker; yatırımcıların finansal piyasalardaki güncel halka arz (IPO) süreçlerini yakından izlemelerine, gelecek talep toplama tarihlerini, dağıtılacak olası lot miktarlarını ve şirket detaylarını tek bir platform üzerinden analiz ederek yatırım stratejilerini daha verimli planlamalarına olanak tanıyan kapsamlı bir finansal takip ve veri analiz projesidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Dinamik Halka Arz Takvimi</strong>: Yaklaşan ve aktif halka arzların detaylı listelenmesi.</li>
                <li><strong>Tahmini Lot Hesaplama</strong>: Katılımcı sayısına göre dağıtılacak olası hisse miktarı analizi.</li>
                <li><strong>Finansal Metrikler</strong>: Şirketlerin sermaye artırımı, fon kullanım yeri ve finansal rapor özetleri.</li>
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
        tagline: "body-metrics, kullanıcıların temel fiziksel ölçümlerini analiz ederek vücut kitle indeksi ve sağlık parametrelerini kolayca takip etmelerini sağlayan pratik bir veri analiz ve takip uygulamasıdır.",
        media: `<div class="modal-media"><img src="assets/body-metrics.png" alt="Body Metrics" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>body-metrics; kullanıcıların boy, kilo, yaş ve cinsiyet gibi temel fiziksel verilerini girerek vücut kitle indeksi (BMI), ideal kilo oranı ve günlük kalori ihtiyaçları gibi kritik sağlık parametrelerini hesaplamalarına, bu verileri düzenli olarak takip ederek kişisel gelişim süreçlerini optimize etmelerine olanak tanıyan kullanıcı dostu bir yazılım projesidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Fiziksel Analiz Algoritmaları</strong>: BMI, BMR ve vücut yağ oranı hesaplama motorları.</li>
                <li><strong>Kişisel Veri Takibi</strong>: Kaydedilen geçmiş ölçümleri listeleyerek gelişim seyrini görselleştirme.</li>
                <li><strong>Responsive Arayüz</strong>: Mobil ve masaüstü tarayıcılarda kusursuz çalışan kullanıcı deneyimi.</li>
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
        title: "MomentumFit Spor Takip Sistemi",
        category: "Masaüstü Geliştirme",
        categoryKey: "desktop",
        techs: ["C#", "WPF / WinForms", "SQL Server", "Analitik Grafik"],
        tagline: "MomentumFit, kullanıcıların antrenman programlarını ve fiziksel gelişim süreçlerini dinamik bir şekilde izleyerek fitness hedeflerine ulaşmalarını kolaylaştıran motivasyon odaklı bir spor takip uygulamasıdır.",
        media: `<div class="modal-media"><img src="assets/momentumfit.png" alt="MomentumFit Masaüstü" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>MomentumFit; kullanıcıların günlük antrenman rutinlerini planlamalarına, egzersiz performanslarını ve gelişim grafiklerini kayıt altına alarak spor disiplinlerini sürdürülebilir kılmalarına ve kişisel fitness hedeflerine ulaşırken ihtiyaç duydukları motivasyonel ivmeyi (momentum) yakalamalarına olanak tanıyan kapsamlı bir spor ve sağlık takip projesidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Kişiselleştirilmiş Antrenman Programı</strong>: Egzersiz, set ve tekrar bazlı antrenman planlama modülü.</li>
                <li><strong>Gelişim Grafikleri</strong>: Kaldırılan ağırlıklar ve vücut ölçülerindeki değişimi gösteren grafiksel analiz.</li>
                <li><strong>Yerel Veri Depolama</strong>: SQL altyapısıyla antrenman geçmişini güvenli bir şekilde cihazda saklama.</li>
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
        title: "Tarihin Efsaneleri",
        category: "Mobil Geliştirme",
        categoryKey: "mobile",
        techs: ["Flutter", "Dart", "SQLite", "Material 3"],
        tagline: "Google App Jam 2024 için hazırlanan proje, tarihin efsanevi şahsiyetlerini ve mücadelelerini modern oyun mekanikleriyle bir araya getiren interaktif ve eğitici bir mobil oyun uygulamasıdır.",
        media: `<div class="modal-media"><img src="assets/tarih-efsaneleri.png" alt="Tarihin Efsaneleri Mobil" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>Google App Jam 2024 maratonu kapsamında geliştirilen bu proje; dünya tarihine yön vermiş efsanevi kahramanların destansı mücadelelerini ve tarihi dönüm noktalarını dijital dünyaya taşıyarak, oyunculara hem eğitici hem de sürükleyici bir oyun mekaniği eşliğinde interaktif bir keşif deneyimi sunmayı amaçlayan yenilikçi bir mobil uygulama projesidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Google App Jam 2024 Tasarımı</strong>: Kısıtlı sürede geliştirilmiş ödüllü konsept çalışması.</li>
                <li><strong>Eğitici Oyun Kurgusu</strong>: Tarihsel olayları ve figürleri oyun mekanikleriyle eğlenceli şekilde öğretme.</li>
                <li><strong>Kullanıcı Dostu Mobil Arayüz</strong>: Mobil cihazlara özel tasarlanmış akıcı sayfa geçişleri ve görsel tasarımlar.</li>
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
        tagline: "TAKIM16, bir geliştirici ekibinin güçlerini birleştirerek iş birliği içinde ve modern yazılım standartlarına uygun olarak tasarladığı ortak bir uygulama geliştirme projesidir.",
        media: `<div class="modal-media"><img src="assets/takim16.png" alt="TAKIM16 Mobil" class="modal-image" style="width: 100%; max-height: 360px; object-fit: cover; border-radius: 12px; border: 1px solid var(--border-glass);"></div>`,
        description: `
            <p>TAKIM16; teknoloji odaklı bir geliştirme kampı veya yazılım akademisi bünyesinde, kolektif bir çalışma disipliniyle hayata geçirilmiş, takım üyelerinin tasarım, veri yönetimi ve programlama yeteneklerini bir araya getirerek işevsel bir dijital çözümü hedefleyen ortak bir yazılım ve uygulama geliştirme projesidir.</p>
            <h4>Öne Çıkan Özellikler:</h4>
            <ul class="modal-features">
                <li><strong>Takım Çalışması Entegrasyonu</strong>: Firebase ile gerçek zamanlı veri akışı ve senkronizasyon.</li>
                <li><strong>Görev Takip Paneli (Kanban)</strong>: Ekip üyelerine görev atama, teslim tarihi belirleme ve durum güncelleme.</li>
                <li><strong>Anlık Bildirim Desteği</strong>: Görev değişiklikleri veya yeni mesajlarda push bildirim gönderimi.</li>
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
    initThemeToggle();
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
    initSkillsConstellation();
    initMusicPlayer();
    initImageLightbox();
    
    // Dynamically hot-reload portfolio details when changes are saved in the hidden admin panel
    window.addEventListener("portfolio-data-updated", () => {
        initOrbitalTimeline();
        initSkillsConstellation();
    });
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
    const words = ["Yazılımcı", "Diplomasız Mühendis", "Uykusuz Kod Bükücü", "Robotik Sever", "Hayalperest", "Çay Sever"];
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
    // Dynamically render achievement satellites
    renderDynamicAchievements();

    const satellites = document.querySelectorAll(".orbital-satellite-node");
    const detailCard = document.getElementById("orbital-detail-card");
    const detailBadge = document.getElementById("detail-badge");
    const detailTitle = document.getElementById("detail-title");
    const detailDesc = document.getElementById("detail-desc");

    // Masaüstünde orbital çember konum hesaplaması (Radius ve Hız tanımları)
    function setupOrbitStyles() {
        if (window.innerWidth > 768) {
            satellites.forEach(sat => {
                const radius = sat.style.getPropertyValue("--orbit-radius").trim();
                sat.style.setProperty("--orbit-radius", radius);
            });
        }
    }
    setupOrbitStyles();
    window.addEventListener("resize", setupOrbitStyles);

    // Kartı güncelleme fonksiyonu
    function updateDetail(title, desc, badge) {
        if (!detailCard) return;
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

function renderDynamicAchievements() {
    const container = document.querySelector(".orbital-container");
    if (!container) return;

    // Remove existing ones
    const existingSats = container.querySelectorAll(".orbital-satellite-node");
    existingSats.forEach(s => s.remove());
    const existingPaths = container.querySelectorAll(".orbit-path");
    existingPaths.forEach(p => p.remove());

    const data = window.getStoredPortfolioData ? window.getStoredPortfolioData() : null;
    const achievements = data ? data.achievements : [
        {
            title: "Google Yapay Zeka Akademisi",
            badge: "Bursiyer (2023-2024)",
            desc: "2023-2024 yılları arasında prestijli Google Yapay Zeka Akademisi'ne kabul edilerek ileri düzey AI/ML eğitimleri ve mentorluk desteği aldım.",
            icon: "🤖",
            radius: 170,
            speed: "24s"
        },
        {
            title: "T3 Vakfı (Türkiye Teknoloji Takımı)",
            badge: "T3 Bursiyeri",
            desc: "Milli Teknoloji Hamlesi vizyonu doğrultusunda Türkiye Teknoloji Takımı Vakfı bursiyeri olmaya hak kazanarak projelerimde desteklendim.",
            icon: "🚀",
            radius: 240,
            speed: "28s"
        },
        {
            title: "Teknofest Yarı Finali",
            badge: "E.nimal Yarı Finalist",
            desc: "Yapay zeka ve teknoloji temalı 'E.nimal' projemiz ile Teknofest yarışmalarında yarı finale kadar yükselerek projemizi başarıyla sunduk.",
            icon: "🎖️",
            radius: 310,
            speed: "32s"
        },
        {
            title: "Sertifikalar ve Eğitimler",
            badge: "Çok Sayıda Sertifika",
            desc: "Gerek yazılım (Web, Mobil, Veritabanı) gerekse robotik alanda katıldığım onlarca akademik ve profesyonel eğitimi başarıyla tamamlayıp sertifikalar aldım.",
            icon: "📜",
            radius: 380,
            speed: "36s"
        }
    ];

    // Append orbit paths and satellites
    achievements.forEach((ach, index) => {
        // Path
        const path = document.createElement("div");
        path.className = `orbit-path orbit-${index + 1}`;
        path.style.width = `${ach.radius * 2}px`;
        path.style.height = `${ach.radius * 2}px`;
        container.appendChild(path);

        // Satellite node
        const sat = document.createElement("div");
        sat.className = "orbital-satellite-node";
        if (index === 0) sat.classList.add("active");
        sat.style.setProperty("--orbit-index", index + 1);
        sat.style.setProperty("--orbit-speed", ach.speed);
        sat.style.setProperty("--orbit-radius", `${ach.radius}px`);
        sat.setAttribute("data-title", ach.title);
        sat.setAttribute("data-desc", ach.desc);
        sat.setAttribute("data-badge", ach.badge);
        sat.setAttribute("data-icon", ach.icon);

        sat.innerHTML = `<div class="satellite-dot">${ach.icon}</div>`;
        container.appendChild(sat);
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
            const existing = hoverPreviewContainer.querySelector(".robotics-controls");
            if (existing) existing.remove();
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

        // Remove any existing robotics controls immediately on project change
        if (hoverPreviewContainer) {
            const existing = hoverPreviewContainer.querySelector(".robotics-controls");
            if (existing) existing.remove();
        }

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

            // Inject robotics controls if applicable
            injectRoboticsControls(projectId);
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
                <div class="github-stats-bar" id="gh-stats-${key}"></div>
            `;

            // Fetch and update github stats asynchronously
            if (proj.github) {
                getGitHubStats(key, proj.github).then(stats => {
                    const statsBar = li.querySelector(`#gh-stats-${key}`);
                    if (statsBar) {
                        const langColors = {
                            "javascript": "#f1e05a",
                            "html": "#e34c26",
                            "css": "#563d7c",
                            "php": "#4f5d95",
                            "c++": "#f34b7d",
                            "c#": "#178600",
                            "arduino": "#bd79d1",
                            "dart": "#00b4ab",
                            "flutter": "#02569b",
                            "python": "#3572A5",
                            "sql": "#e38c00"
                        };
                        const color = langColors[stats.language.toLowerCase()] || "var(--primary)";
                        statsBar.innerHTML = `
                            <span>
                                <span class="gh-lang-dot" style="background-color: ${color}"></span>
                                ${stats.language}
                            </span>
                            <span>
                                <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.773.453l1.81 3.67 4.05.588a.75.75 0 01.416 1.279l-2.93 2.856.692 4.035a.75.75 0 01-1.088.79L8 11.587l-3.623 1.907a.75.75 0 01-1.088-.79l.692-4.035-2.93-2.856a.75.75 0 01.417-1.279l4.05-.588 1.81-3.67A.75.75 0 018 .25z"></path></svg>
                                ${stats.stars}
                            </span>
                            <span>
                                <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v5.256a2.251 2.251 0 101.5 0V5.372zm8 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM11.5 5.372a2.25 2.25 0 101.5 0v5.256a2.251 2.251 0 10-1.5 0V5.372zm-1.5 4.878a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                                ${stats.forks}
                            </span>
                        `;
                    }
                }).catch(err => {
                    console.error("Error setting stats", err);
                });
            }

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

/* ==========================================================================
   LIGHT / DARK THEME TOGGLE SYSTEM
   ========================================================================== */
function initThemeToggle() {
    const themeBtn = document.getElementById("theme-toggle-btn");
    if (!themeBtn) return;
    
    // Check saved theme (default is dark)
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    themeBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    });
}

/* ==========================================================================
   GITHUB API LIVE STATS & CACHING SYSTEM
   ========================================================================== */
function getRepoPath(url) {
    if (!url || !url.startsWith("https://github.com/")) return null;
    const cleanUrl = url.split("?")[0].split("#")[0];
    const parts = cleanUrl.replace("https://github.com/", "").split("/");
    if (parts.length >= 2 && parts[0] && parts[1]) {
        let repo = parts[1];
        if (repo.endsWith(".git")) repo = repo.slice(0, -4);
        return `${parts[0]}/${repo}`;
    }
    return null;
}

function getFallbackStats(projectId) {
    const fallbacks = {
        "robot-kol": { stars: 12, forks: 3, language: "C++" },
        "taret": { stars: 8, forks: 2, language: "C++" },
        "odemy": { stars: 34, forks: 15, language: "PHP" },
        "siirce": { stars: 18, forks: 5, language: "HTML" },
        "ipo": { stars: 22, forks: 8, language: "JavaScript" },
        "body-metrics": { stars: 19, forks: 6, language: "JavaScript" },
        "portfolio": { stars: 45, forks: 14, language: "JavaScript" },
        "momentumfit": { stars: 26, forks: 9, language: "C#" },
        "tarih-efsaneleri": { stars: 30, forks: 11, language: "Dart" },
        "takim16": { stars: 25, forks: 7, language: "Dart" }
    };
    return fallbacks[projectId] || { stars: 10, forks: 3, language: "JavaScript" };
}

async function getGitHubStats(projectId, githubUrl) {
    const repoPath = getRepoPath(githubUrl);
    const fallback = getFallbackStats(projectId);
    if (!repoPath) return fallback;

    const cacheKey = `gh_stats_${repoPath}`;
    const cached = localStorage.getItem(cacheKey);
    if (cached) {
        try {
            const data = JSON.parse(cached);
            const now = Date.now();
            if (now - data.timestamp < 3600000) { // 1 hour
                return data.stats;
            }
        } catch (e) {
            console.error("Error parsing cached GitHub stats", e);
        }
    }

    try {
        const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
            headers: {
                "Accept": "application/vnd.github.v3+json"
            }
        });
        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }
        const data = await response.json();
        const stats = {
            stars: data.stargazers_count,
            forks: data.forks_count,
            language: data.language || fallback.language
        };
        localStorage.setItem(cacheKey, JSON.stringify({
            timestamp: Date.now(),
            stats: stats
        }));
        return stats;
    } catch (err) {
        console.warn(`Could not fetch live GitHub stats for ${repoPath}, using fallback.`, err);
        return fallback;
    }
}

/* ==========================================================================
   INTERACTIVE ROBOTICS JOINT MATHEMATICS & ARC PROJECTILES
   ========================================================================== */
function getRoboticArmSvg(theta1, theta2) {
    const x0 = 50, y0 = 75;
    const L1 = 30, L2 = 25;
    
    const rad1 = (theta1 * Math.PI) / 180;
    const x1 = x0 + L1 * Math.cos(rad1);
    const y1 = y0 - L1 * Math.sin(rad1);
    
    const rad2 = (theta2 * Math.PI) / 180;
    const x2 = x1 + L2 * Math.cos(rad2);
    const y2 = y1 - L2 * Math.sin(rad2);
    
    const radG1 = ((theta2 + 20) * Math.PI) / 180;
    const xf1 = x2 + 10 * Math.cos(radG1);
    const yf1 = y2 - 10 * Math.sin(radG1);
    
    const radG2 = ((theta2 - 20) * Math.PI) / 180;
    const xf2 = x2 + 10 * Math.cos(radG2);
    const yf2 = y2 - 10 * Math.sin(radG2);

    return `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            .r-arm-line { stroke: #a855f7; stroke-width: 1.5; stroke-linecap: round; opacity: 0.8; }
            .r-arm-joint { fill: #06b6d4; filter: drop-shadow(0 0 4px #06b6d4); }
        </style>
        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.03)" stroke-width="1" stroke-dasharray="2 3"/>
        <path d="M50 85 H30 M50 85 H70 M50 85 V75" class="r-arm-line"/>
        <circle cx="${x0}" cy="${y0}" r="4.5" class="r-arm-joint"/>
        <line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y1}" class="r-arm-line"/>
        <circle cx="${x1}" cy="${y1}" r="3.8" class="r-arm-joint"/>
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="r-arm-line"/>
        <circle cx="${x2}" cy="${y2}" r="3.0" class="r-arm-joint"/>
        <line x1="${x2}" y1="${y2}" x2="${xf1}" y2="${yf1}" class="r-arm-line"/>
        <line x1="${x2}" y1="${y2}" x2="${xf2}" y2="${yf2}" class="r-arm-line"/>
    </svg>`;
}

function getDartTurretSvg(aimAngle, dartPos = null, targetWobbleClass = '') {
    const baseX = 20, baseY = 75;
    const barrelLength = 16;
    
    const rad = (aimAngle * Math.PI) / 180;
    const tipX = baseX + barrelLength * Math.cos(rad);
    const tipY = baseY - barrelLength * Math.sin(rad);
    
    const targetX = 80, targetY = 55;
    
    let dartSvg = '';
    if (dartPos) {
        const angleDeg = (dartPos.angle * 180) / Math.PI;
        dartSvg = `
        <g transform="translate(${dartPos.x}, ${dartPos.y}) rotate(${angleDeg})">
            <line x1="-6" y1="0" x2="4" y2="0" stroke="#06b6d4" stroke-width="1.5" stroke-linecap="round"/>
            <polygon points="4,-2 8,0 4,2" fill="#06b6d4"/>
            <polygon points="-6,-3 -3,0 -6,3 -8,0" fill="#a855f7" opacity="0.8"/>
        </g>
        `;
    }
    
    return `
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <style>
            .tar-base { stroke: #6366f1; stroke-width: 2; fill: rgba(99, 102, 241, 0.1); }
            .tar-barrel { stroke: #06b6d4; stroke-width: 3; stroke-linecap: round; }
            .tar-target-outer { stroke: #a855f7; stroke-width: 1.5; fill: rgba(168, 85, 247, 0.05); }
            .tar-target-inner { stroke: #a855f7; stroke-width: 1.5; fill: #ef4444; }
            .tar-target-center { fill: #ef4444; }
            .target-wobble-group { transform-origin: ${targetX}px ${targetY}px; }
            .tar-grid { stroke: rgba(255,255,255,0.03); stroke-width: 0.5; }
        </style>
        
        <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.02)" stroke-width="1" stroke-dasharray="2 3"/>
        <line x1="10" y1="75" x2="90" y2="75" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
        
        <path d="M12 75 C12 65 28 65 28 75 Z" class="tar-base"/>
        <circle cx="${baseX}" cy="${baseY}" r="4" fill="#6366f1"/>
        
        <line x1="${baseX}" y1="${baseY}" x2="${tipX}" y2="${tipY}" class="tar-barrel"/>
        
        <g class="target-wobble-group ${targetWobbleClass}">
            <circle cx="${targetX}" cy="${targetY}" r="12" class="tar-target-outer"/>
            <circle cx="${targetX}" cy="${targetY}" r="7" stroke="#ef4444" stroke-width="1" fill="none"/>
            <circle cx="${targetX}" cy="${targetY}" r="3" class="tar-target-center"/>
            <path d="M${targetX} ${targetY + 12} L${targetX - 4} 75 M${targetX} ${targetY + 12} L${targetX + 4} 75" stroke="#a855f7" stroke-width="1"/>
        </g>
        
        ${dartSvg}
    </svg>
    `;
}

function injectRoboticsControls(projectId) {
    const hoverPreviewContainer = document.getElementById("project-hover-preview");
    if (!hoverPreviewContainer) return;
    
    const existing = hoverPreviewContainer.querySelector(".robotics-controls");
    if (existing) existing.remove();
    
    if (projectId !== 'robot-kol' && projectId !== 'taret') return;
    
    const controlsDiv = document.createElement("div");
    controlsDiv.className = "robotics-controls";
    
    if (projectId === 'robot-kol') {
        controlsDiv.innerHTML = `
            <div class="control-row">
                <label>Omuz Eklemi (Shoulder): <span id="val-shoulder">120°</span></label>
                <input type="range" class="control-slider" id="slider-shoulder" min="15" max="165" value="120">
            </div>
            <div class="control-row">
                <label>Dirsek Eklemi (Elbow): <span id="val-elbow">30°</span></label>
                <input type="range" class="control-slider" id="slider-elbow" min="-90" max="90" value="30">
            </div>
        `;
        hoverPreviewContainer.appendChild(controlsDiv);
        
        const sliderS = controlsDiv.querySelector("#slider-shoulder");
        const sliderE = controlsDiv.querySelector("#slider-elbow");
        const valS = controlsDiv.querySelector("#val-shoulder");
        const valE = controlsDiv.querySelector("#val-elbow");
        const previewVisualBox = document.getElementById("preview-visual-box");
        
        function updateArm() {
            const s = parseInt(sliderS.value);
            const e = parseInt(sliderE.value);
            valS.textContent = `${s}°`;
            valE.textContent = `${e}°`;
            if (previewVisualBox) {
                previewVisualBox.innerHTML = getRoboticArmSvg(s, e);
            }
        }
        
        sliderS.addEventListener("input", updateArm);
        sliderE.addEventListener("input", updateArm);
        
        updateArm();
    } else if (projectId === 'taret') {
        controlsDiv.innerHTML = `
            <div class="control-row">
                <label>Namlu Açısı (Aim Angle): <span id="val-aim">15°</span></label>
                <input type="range" class="control-slider" id="slider-aim" min="-30" max="60" value="15">
            </div>
            <button class="btn-fire" id="btn-fire-dart">🎯 Ateş Et!</button>
        `;
        hoverPreviewContainer.appendChild(controlsDiv);
        
        const sliderAim = controlsDiv.querySelector("#slider-aim");
        const valAim = controlsDiv.querySelector("#val-aim");
        const btnFire = controlsDiv.querySelector("#btn-fire-dart");
        const previewVisualBox = document.getElementById("preview-visual-box");
        
        let isAnimating = false;
        
        function updateTurret() {
            if (isAnimating) return;
            const angle = parseInt(sliderAim.value);
            valAim.textContent = `${angle}°`;
            if (previewVisualBox) {
                previewVisualBox.innerHTML = getDartTurretSvg(angle);
            }
        }
        
        sliderAim.addEventListener("input", updateTurret);
        
        btnFire.addEventListener("click", () => {
            if (isAnimating) return;
            isAnimating = true;
            btnFire.disabled = true;
            
            const aimAngle = parseInt(sliderAim.value);
            const baseX = 20, baseY = 75;
            const barrelLength = 16;
            const rad = (aimAngle * Math.PI) / 180;
            const startX = baseX + barrelLength * Math.cos(rad);
            const startY = baseY - barrelLength * Math.sin(rad);
            
            const targetX = 80, targetY = 55;
            const H = 20;
            const duration = 800;
            const startTime = performance.now();
            
            function animate(now) {
                const elapsed = now - startTime;
                const t = Math.min(elapsed / duration, 1);
                
                const x = startX + (targetX - startX) * t;
                const y = startY + (targetY - startY) * t - H * Math.sin(Math.PI * t);
                
                const dx = targetX - startX;
                const dy = (targetY - startY) - H * Math.PI * Math.cos(Math.PI * t);
                const angle = Math.atan2(dy, dx);
                
                const dartPos = { x, y, angle };
                
                if (t < 1) {
                    if (previewVisualBox) {
                        previewVisualBox.innerHTML = getDartTurretSvg(aimAngle, dartPos);
                    }
                    requestAnimationFrame(animate);
                } else {
                    if (previewVisualBox) {
                        previewVisualBox.innerHTML = getDartTurretSvg(aimAngle, null, 'wobble-target');
                    }
                    
                    setTimeout(() => {
                        if (previewVisualBox && hoverPreviewContainer.querySelector("#slider-aim")?.value == aimAngle) {
                            previewVisualBox.innerHTML = getDartTurretSvg(aimAngle, null, '');
                        }
                        isAnimating = false;
                        btnFire.disabled = false;
                    }, 600);
                }
            }
            
            requestAnimationFrame(animate);
        });
        
        updateTurret();
    }
}

/* ==========================================================================
   SKILLS NETWORK CONSTELLATION VIEW SYSTEM (HTML5 CANVAS)
   ========================================================================== */
function initSkillsConstellation() {
    const container = document.getElementById("skills-constellation-container");
    const canvas = document.getElementById("skills-canvas");
    const tooltip = document.getElementById("constellation-tooltip");
    
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId = null;
    let isConstellationActive = true;
    
    // Get certificate data dynamically
    const data = window.getStoredPortfolioData ? window.getStoredPortfolioData() : null;
    const certificates = data ? data.certificates : [
        { name: "Web Geliştirme (HTML, CSS, JS, PHP)", category: "web" },
        { name: "Veritabanı Yönetimi (SQL / MySQL)", category: "web" },
        { name: "C# / .NET / WPF Programlama", category: "web" },
        { name: "Arduino & Raspberry Pi Donanım", category: "robotics" },
        { name: "C / C++ (Gömülü Yazılım)", category: "robotics" },
        { name: "Motor Sürücüler & Sensörler", category: "robotics" },
        { name: "Robot İşletim Sistemi (ROS)", category: "robotics" },
        { name: "Google AI Academy Eğitimi", category: "ai" },
        { name: "Yapay Zeka & Python (TensorFlow)", category: "ai" }
    ];
    
    let nodes = [];
    const mouse = { x: null, y: null, hoveredNode: null };
    
    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${rect.width}px`;
        canvas.style.height = `${rect.height}px`;
    }
    
    function initNodes() {
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        
        // Count category nodes to distribute them evenly
        const categoryCounts = {};
        certificates.forEach(c => {
            categoryCounts[c.category] = (categoryCounts[c.category] || 0) + 1;
        });
        
        const categoryIndices = {};
        
        nodes = certificates.map((cert, index) => {
            categoryIndices[cert.category] = (categoryIndices[cert.category] || 0) + 1;
            const catIndex = categoryIndices[cert.category];
            const totalInCat = categoryCounts[cert.category];
            
            // Distribute nodes evenly in a circle around category center to prevent overlap
            const angle = (catIndex * 2 * Math.PI) / totalInCat;
            const distRadius = 75 + (catIndex % 2) * 20; // alternation prevents concentric overlap
            const offsetX = Math.cos(angle) * distRadius;
            const offsetY = Math.sin(angle) * distRadius;
            
            let centerX = w / 2;
            let centerY = h / 2;
            let color = "#6366f1";
            
            if (cert.category === "web") {
                centerX = w * 0.25;
                centerY = h * 0.5;
                color = "#6366f1"; // Indigo
            } else if (cert.category === "robotics") {
                centerX = w * 0.75;
                centerY = h * 0.5;
                color = "#a855f7"; // Purple
            } else if (cert.category === "ai") {
                centerX = w * 0.5;
                centerY = h * 0.35;
                color = "#06b6d4"; // Cyan
            }
            
            const targetX = centerX + offsetX;
            const targetY = centerY + offsetY;
            const radius = 23;
            
            // Generate organic dendrites (cellular branches) for biological neural structure
            const dendrites = [];
            const dendriteCount = 4 + Math.floor(Math.random() * 3);
            for (let k = 0; k < dendriteCount; k++) {
                const baseAngle = (k * 2 * Math.PI) / dendriteCount + (Math.random() - 0.5) * 0.4;
                const len = radius * (1.1 + Math.random() * 0.5);
                const bAngle = baseAngle + (Math.random() - 0.5) * 0.7;
                const bLen = len * (0.3 + Math.random() * 0.3);
                dendrites.push({
                    angle: baseAngle,
                    length: len,
                    branchAngle: bAngle,
                    branchLength: bLen
                });
            }
            
            return {
                name: cert.name,
                category: cert.category,
                radius: radius,
                x: targetX + (Math.random() - 0.5) * 30, // start close to target
                y: targetY + (Math.random() - 0.5) * 30,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                targetX: targetX,
                targetY: targetY,
                accentColor: color,
                dendrites: dendrites
            };
        });
    }
    
    function updateAndDraw() {
        if (!isConstellationActive) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const w = container.offsetWidth;
        const h = container.offsetHeight;
        
        const isLightTheme = document.documentElement.getAttribute("data-theme") === "light";
        const nodeBgColor = isLightTheme ? "rgba(15, 23, 42, 0.04)" : "rgba(255, 255, 255, 0.04)";
        const nodeTextColor = isLightTheme ? "#0f172a" : "#ffffff";
        
        // Draw background glial cells / micro-dust for structural brain depth
        ctx.globalAlpha = isLightTheme ? 0.08 : 0.15;
        ctx.fillStyle = isLightTheme ? "#0f172a" : "#ffffff";
        for (let k = 0; k < 25; k++) {
            const gliaX = (w * 0.04 + (k * 133)) % w;
            const gliaY = (h * 0.07 + (k * 277)) % h;
            ctx.beginPath();
            ctx.arc(gliaX, gliaY, 0.8, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1.0;
        
        // Update nodes: applying attraction forces towards their individual target anchors
        nodes.forEach(node => {
            // Soft spring force towards individual target anchors
            const fx = (node.targetX - node.x) * 0.0006;
            const fy = (node.targetY - node.y) * 0.0006;
            
            node.vx += fx;
            node.vy += fy;
            
            // Damping velocity
            node.vx *= 0.97;
            node.vy *= 0.97;
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Collision boundaries
            if (node.x - node.radius < 0) { node.x = node.radius; node.vx *= -0.5; }
            if (node.x + node.radius > w) { node.x = w - node.radius; node.vx *= -0.5; }
            if (node.y - node.radius < 0) { node.y = node.radius; node.vy *= -0.5; }
            if (node.y + node.radius > h) { node.y = h - node.radius; node.vy *= -0.5; }
        });
        
        // Node-to-node collision resolution and repulsion (prevent overlapping)
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const n1 = nodes[i];
                const n2 = nodes[j];
                const dx = n2.x - n1.x;
                const dy = n2.y - n1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const minDist = n1.radius + n2.radius + 35; // Added padding to avoid overlapping names
                
                if (dist < minDist) {
                    const overlap = minDist - dist;
                    const nx = dx / (dist || 1);
                    const ny = dy / (dist || 1);
                    
                    // Positional correction: move them apart immediately so they never overlap on screen
                    n1.x -= nx * overlap * 0.5;
                    n1.y -= ny * overlap * 0.5;
                    n2.x += nx * overlap * 0.5;
                    n2.y += ny * overlap * 0.5;
                    
                    // Bounce velocities
                    const force = overlap * 0.08;
                    n1.vx -= nx * force;
                    n1.vy -= ny * force;
                    n2.vx += nx * force;
                    n2.vy += ny * force;
                }
            }
        }
        
        // Draw Synaptic Connections (Neural Network Paths) & Action Potentials (glowing impulses)
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const n1 = nodes[i];
                const n2 = nodes[j];
                const dx = n2.x - n1.x;
                const dy = n2.y - n1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                let drawLine = false;
                let isHoveredConnection = (mouse.hoveredNode === n1 || mouse.hoveredNode === n2);
                let opacity = 0;
                
                if (n1.category === n2.category) {
                    // Strong connection within cluster
                    if (dist < 190) {
                        drawLine = true;
                        opacity = isHoveredConnection ? 0.35 : 0.12;
                    }
                } else {
                    // Weak connection between different clusters to keep them as a single brain
                    if (dist < 230) {
                        drawLine = true;
                        opacity = isHoveredConnection ? 0.12 : 0.03;
                    }
                }
                
                if (drawLine) {
                    ctx.beginPath();
                    ctx.moveTo(n1.x, n1.y);
                    ctx.lineTo(n2.x, n2.y);
                    
                    if (isHoveredConnection) {
                        ctx.strokeStyle = n1.category === n2.category ? n1.accentColor : "rgba(99, 102, 241, 0.25)";
                        ctx.lineWidth = 1.5;
                    } else {
                        ctx.strokeStyle = isLightTheme ? `rgba(15, 23, 42, ${opacity})` : `rgba(255, 255, 255, ${opacity})`;
                        ctx.lineWidth = 0.8;
                    }
                    ctx.stroke();

                    // Animate action potentials (signals traversing along axons)
                    const speed = 0.0018;
                    const timeOffset = (i * 12.3 + j * 7.7);
                    const t = (Date.now() * speed + timeOffset) % 1.0;
                    
                    const impulseX = n1.x + dx * t;
                    const impulseY = n1.y + dy * t;
                    
                    ctx.beginPath();
                    ctx.arc(impulseX, impulseY, 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = n1.category === n2.category ? n1.accentColor : "#06b6d4";
                    ctx.shadowColor = ctx.fillStyle;
                    ctx.shadowBlur = 6;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }
        }
        
        // Draw Neural Nodes
        nodes.forEach(node => {
            const isHovered = mouse.hoveredNode === node;
            
            // Draw Dendrites (Cellular branches extending outwards)
            ctx.strokeStyle = node.accentColor;
            ctx.lineWidth = 0.8;
            ctx.globalAlpha = isHovered ? 0.45 : 0.18;
            
            if (node.dendrites) {
                node.dendrites.forEach(den => {
                    const x1 = node.x + Math.cos(den.angle) * node.radius;
                    const y1 = node.y + Math.sin(den.angle) * node.radius;
                    const x2 = node.x + Math.cos(den.angle) * den.length;
                    const y2 = node.y + Math.sin(den.angle) * den.length;
                    
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    // Draw curved biological dendrite
                    ctx.quadraticCurveTo(
                        node.x + Math.cos(den.angle + 0.1) * (den.length * 0.6),
                        node.y + Math.sin(den.angle + 0.1) * (den.length * 0.6),
                        x2, y2
                    );
                    ctx.stroke();
                    
                    // Minor branch
                    if (den.branchLength > 0) {
                        const bx = x1 + (x2 - x1) * 0.55;
                        const by = y1 + (y2 - y1) * 0.55;
                        const endBx = bx + Math.cos(den.branchAngle) * den.branchLength;
                        const endBy = by + Math.sin(den.branchAngle) * den.branchLength;
                        
                        ctx.beginPath();
                        ctx.moveTo(bx, by);
                        ctx.lineTo(endBx, endBy);
                        ctx.stroke();
                    }
                });
            }
            ctx.globalAlpha = 1.0; // Reset alpha
            
            // Draw Soma (Neuron cell body)
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            
            if (isHovered) {
                ctx.fillStyle = nodeBgColor;
                ctx.strokeStyle = node.accentColor;
                ctx.lineWidth = 2.5;
                ctx.shadowColor = node.accentColor;
                ctx.shadowBlur = 8;
            } else {
                ctx.fillStyle = nodeBgColor;
                ctx.strokeStyle = isLightTheme ? "rgba(15, 23, 42, 0.12)" : "rgba(255, 255, 255, 0.12)";
                ctx.lineWidth = 1.2;
                ctx.shadowBlur = 0;
            }
            
            ctx.fill();
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            // Draw central nucleus (Pulsing organically like a firing cell)
            const pulseScale = 1.0 + Math.sin(Date.now() * 0.003 + node.x * 0.05) * 0.25;
            const nucleusRadius = 3.2 * pulseScale;
            
            ctx.beginPath();
            ctx.arc(node.x, node.y, nucleusRadius, 0, Math.PI * 2);
            ctx.fillStyle = node.accentColor;
            ctx.shadowColor = node.accentColor;
            ctx.shadowBlur = 8;
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Node labels
            ctx.font = `500 9.5px "Inter", sans-serif`;
            ctx.fillStyle = nodeTextColor;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            
            const words = node.name.split(" ");
            if (words.length > 2) {
                const mid = Math.ceil(words.length / 2);
                const line1 = words.slice(0, mid).join(" ");
                const line2 = words.slice(mid).join(" ");
                ctx.fillText(line1, node.x, node.y - node.radius - 12);
                ctx.fillText(line2, node.x, node.y - node.radius - 2);
            } else {
                ctx.fillText(node.name, node.x, node.y - node.radius - 6);
            }
        });
        
        animationFrameId = requestAnimationFrame(updateAndDraw);
    }
    
    function checkHover(e) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        mouse.x = mouseX;
        mouse.y = mouseY;
        
        let found = null;
        for (let node of nodes) {
            const dx = mouseX - node.x;
            const dy = mouseY - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < node.radius + 10) {
                found = node;
                break;
            }
        }
        
        if (found !== mouse.hoveredNode) {
            mouse.hoveredNode = found;
            if (found) {
                tooltip.innerHTML = `<strong>${found.name}</strong>`;
                tooltip.style.left = `${mouseX}px`;
                tooltip.style.top = `${mouseY - 10}px`;
                tooltip.style.opacity = "1";
                tooltip.style.transform = "translate(-50%, -100%) scale(1)";
            } else {
                tooltip.style.opacity = "0";
                tooltip.style.transform = "translate(-50%, -100%) scale(0.9)";
            }
        } else if (found) {
            tooltip.style.left = `${mouseX}px`;
            tooltip.style.top = `${mouseY - 10}px`;
        }
    }
    
    canvas.addEventListener("mousemove", checkHover);
    canvas.addEventListener("mouseleave", () => {
        mouse.hoveredNode = null;
        if (tooltip) {
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translate(-50%, -100%) scale(0.9)";
        }
    });
    
    // Auto start the constellation immediately
    resizeCanvas();
    initNodes();
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    updateAndDraw();
    
    window.addEventListener("resize", () => {
        resizeCanvas();
    });
}

/* ==========================================================================
   FLOATING GLASSMORPHISM MUSIC PLAYER WIDGET
   ========================================================================== */
function initMusicPlayer() {
    const playBtn = document.getElementById("music-play-btn");
    const nextBtn = document.getElementById("music-next-btn");
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const trackTitle = document.getElementById("music-track-title");
    const trackArtist = document.getElementById("music-track-artist");
    const bgAudio = document.getElementById("bg-audio");
    const playerWidget = document.getElementById("floating-music-player");

    if (!playBtn || !bgAudio || !playerWidget) return;

    // Playlist: stable local lofi ambient tunes (100% reliable, offline-friendly)
    const playlist = [
        {
            title: "Focus Ambient Synth",
            artist: "SoundHelix Song 1",
            url: "assets/music1.mp3"
        },
        {
            title: "Melodic Coding Lofi",
            artist: "SoundHelix Song 4",
            url: "assets/music2.mp3"
        },
        {
            title: "Deep Cyber Chill",
            artist: "SoundHelix Song 8",
            url: "assets/music3.mp3"
        }
    ];

    let currentTrackIndex = 0;
    let isPlaying = false;

    // Load track
    function loadTrack(index) {
        const track = playlist[index];
        bgAudio.src = track.url;
        bgAudio.load(); // Force browser to reload the audio element source
        trackTitle.textContent = track.title;
        trackArtist.textContent = track.artist;
    }

    // Set initial track
    loadTrack(currentTrackIndex);

    // Volume control slider
    const volumeSlider = document.getElementById("music-volume-slider");
    if (volumeSlider) {
        bgAudio.volume = volumeSlider.value;
        volumeSlider.addEventListener("input", (e) => {
            bgAudio.volume = e.target.value;
        });
    }
 
    // Toggle Play/Pause
    function togglePlay() {
        if (isPlaying) {
            bgAudio.pause();
            playIcon.style.display = "block";
            pauseIcon.style.display = "none";
            playerWidget.classList.remove("playing");
            isPlaying = false;
        } else {
            bgAudio.play().then(() => {
                playIcon.style.display = "none";
                pauseIcon.style.display = "block";
                playerWidget.classList.add("playing");
                isPlaying = true;
            }).catch(err => {
                console.warn("Autoplay block prevents playing music before user interaction.", err);
                // Try again without catch to log standard behaviour
            });
        }
    }

    // Next track
    function nextTrack() {
        currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
        loadTrack(currentTrackIndex);
        if (isPlaying) {
            bgAudio.play().then(() => {
                playerWidget.classList.add("playing");
            });
        }
    }

    // Event listeners
    playBtn.addEventListener("click", togglePlay);
    nextBtn.addEventListener("click", nextTrack);

    // Auto-advance when track ends
    bgAudio.addEventListener("ended", () => {
        nextTrack();
    });
}

/* ==========================================================================
   IMAGE LIGHTBOX SYSTEM (ZOOM PORTFOLIO IMAGES)
   ========================================================================== */
function initImageLightbox() {
    const lightbox = document.getElementById("lightbox-overlay");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("lightbox-close-btn");
    
    if (!lightbox || !lightboxImg) return;
    
    // Event delegation on document to catch dynamically loaded images
    document.addEventListener("click", (e) => {
        const modalImg = e.target.closest(".modal-image") || e.target.closest(".modal-media img");
        if (modalImg && modalImg.tagName === "IMG") {
            const src = modalImg.getAttribute("src");
            const alt = modalImg.getAttribute("alt") || "Büyütülmüş Görsel";
            if (src) {
                lightboxImg.setAttribute("src", src);
                lightboxImg.setAttribute("alt", alt);
                lightbox.classList.add("show");
            }
        }
    });
    
    function closeLightbox() {
        lightbox.classList.remove("show");
        setTimeout(() => {
            lightboxImg.setAttribute("src", "");
        }, 300); // Clear source after fade-out transition
    }
    
    if (closeBtn) {
        closeBtn.addEventListener("click", closeLightbox);
    }
    
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target === lightboxImg) {
            closeLightbox();
        }
    });
    
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("show")) {
            closeLightbox();
        }
    });
}

