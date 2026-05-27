/* ==========================================================================
   HIDDEN ADMIN PANEL & LOCAL STORAGE MANAGEMENT
   ========================================================================= */

(function() {
    // Secret password
    const ADMIN_PASSWORD = "admin";
    const ALT_PASSWORD = "huseyin-admin";

    // Key buffers for secret trigger
    let keyBuffer = "";
    const SECRET_KEYWORD = "admin16";

    // HTML elements
    let modalOverlay = null;
    let loginBox = null;
    let dashboardBox = null;
    let pwdInput = null;
    let btnSubmitPwd = null;

    // Initialize Admin Module
    document.addEventListener("DOMContentLoaded", () => {
        createAdminModalHTML();
        setupSecretTriggers();
    });

    // Create Modal HTML Dynamically
    function createAdminModalHTML() {
        modalOverlay = document.createElement("div");
        modalOverlay.className = "admin-modal-overlay";
        modalOverlay.id = "admin-panel-modal";

        modalOverlay.innerHTML = `
            <div class="admin-modal-container">
                <!-- Login Box -->
                <div class="admin-login-box" id="admin-login-box">
                    <h3>Yönetici Girişi</h3>
                    <p style="font-size: 0.85rem; color: #94a3b8;">Lütfen yönetim paneline erişmek için şifreyi giriniz.</p>
                    <input type="password" id="admin-pwd-input" placeholder="••••">
                    <button class="admin-btn admin-btn-primary" id="admin-btn-login">Giriş Yap</button>
                    <button class="admin-btn admin-btn-danger" id="admin-login-close" style="width: 100%;">Kapat</button>
                </div>

                <!-- Dashboard (Initially Hidden) -->
                <div class="admin-dashboard" id="admin-dashboard" style="display: none;">
                    <div class="admin-header">
                        <h3>Dinamik Yönetim Paneli</h3>
                        <button class="admin-close-btn" id="admin-close-x">&times;</button>
                    </div>

                    <div class="admin-tabs">
                        <button class="admin-tab-btn active" data-tab="tab-achievements">Başarılar & Burslar</button>
                        <button class="admin-tab-btn" data-tab="tab-certificates">Sertifikalarım</button>
                        <button class="admin-tab-btn" data-tab="tab-export">Kod Çıktısı Al</button>
                    </div>

                    <!-- Tab 1: Achievements -->
                    <div class="admin-tab-content active" id="tab-achievements">
                        <h4 style="font-size: 0.95rem; color: var(--accent-cyan);">Yeni Başarı / Burs Ekle</h4>
                        <form class="admin-form" id="form-add-achievement" onsubmit="event.preventDefault();">
                            <div class="admin-input-group">
                                <label for="ach-title">Başlık (Title)</label>
                                <input type="text" id="ach-title" placeholder="Google Yapay Zeka Akademisi" required>
                            </div>
                            <div class="admin-input-group">
                                <label for="ach-badge">Etiket (Badge)</label>
                                <input type="text" id="ach-badge" placeholder="Bursiyer (2023-2024)" required>
                            </div>
                            <div class="admin-input-group">
                                <label for="ach-icon">Emoji İkon</label>
                                <input type="text" id="ach-icon" placeholder="🤖" value="🤖" required>
                            </div>
                            <div class="admin-input-group">
                                <label for="ach-radius">Yörünge Yarıçapı (150px - 400px)</label>
                                <input type="number" id="ach-radius" min="150" max="400" value="170" required>
                            </div>
                            <div class="admin-input-group" style="grid-column: 1 / -1;">
                                <label for="ach-desc">Açıklama (Description)</label>
                                <textarea id="ach-desc" rows="3" placeholder="Başarı detayı..." required></textarea>
                            </div>
                            <button class="admin-btn admin-btn-primary" id="btn-add-ach">Başarı Ekle</button>
                        </form>

                        <h4 style="font-size: 0.95rem; color: var(--accent-cyan); margin-top: 1rem;">Mevcut Başarılar</h4>
                        <div class="admin-items-list" id="list-achievements">
                            <!-- JS ile dolacak -->
                        </div>
                    </div>

                    <!-- Tab 2: Certificates -->
                    <div class="admin-tab-content" id="tab-certificates">
                        <h4 style="font-size: 0.95rem; color: var(--accent-cyan);">Yeni Sertifika Ekle (Sinir Ağı Düğümü)</h4>
                        <form class="admin-form" id="form-add-certificate" onsubmit="event.preventDefault();">
                            <div class="admin-input-group">
                                <label for="cert-name">Sertifika Adı / Konusu</label>
                                <input type="text" id="cert-name" placeholder="Google AI Academy Başarı Belgesi" required>
                            </div>
                            <div class="admin-input-group">
                                <label for="cert-category">Küme (Sinir Ağı Grubu)</label>
                                <select id="cert-category">
                                    <option value="web">Web & Yazılım Geliştirme</option>
                                    <option value="robotics">Robotik & Gömülü Donanım</option>
                                    <option value="ai">Yapay Zeka (AI/ML)</option>
                                </select>
                             </div>
                            <button class="admin-btn admin-btn-primary" id="btn-add-cert">Sertifika Ekle</button>
                        </form>

                        <h4 style="font-size: 0.95rem; color: var(--accent-cyan); margin-top: 1rem;">Mevcut Sertifikalar</h4>
                        <div class="admin-items-list" id="list-certificates">
                            <!-- JS ile dolacak -->
                        </div>
                    </div>

                    <!-- Tab 3: Export Code -->
                    <div class="admin-tab-content" id="tab-export">
                        <p style="font-size: 0.82rem; color: #94a3b8;">
                            Eklediğiniz/düzenlediğiniz veriler şu anda tarayıcınızda canlı olarak kaydedilmiştir. Portfolyonuzun kaynak kodunu kalıcı olarak güncellemek için aşağıdaki kod bloğunu kopyalayıp <strong>app.js</strong> dosyasının en üstündeki veri tanımları ile değiştirebilirsiniz.
                        </p>
                        <textarea class="admin-code-box" id="admin-export-textarea" readonly></textarea>
                        <button class="admin-btn admin-btn-primary" id="btn-copy-code">Kodu Kopyala</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modalOverlay);

        loginBox = document.getElementById("admin-login-box");
        dashboardBox = document.getElementById("admin-dashboard");
        pwdInput = document.getElementById("admin-pwd-input");
        btnSubmitPwd = document.getElementById("admin-btn-login");

        // Event listeners
        btnSubmitPwd.addEventListener("click", handleLogin);
        pwdInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") handleLogin();
        });

        document.getElementById("admin-login-close").addEventListener("click", hideAdminPanel);
        document.getElementById("admin-close-x").addEventListener("click", hideAdminPanel);

        // Tab switching
        const tabs = modalOverlay.querySelectorAll(".admin-tab-btn");
        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");

                const contentId = tab.getAttribute("data-tab");
                const contents = modalOverlay.querySelectorAll(".admin-tab-content");
                contents.forEach(c => c.classList.remove("active"));
                document.getElementById(contentId).classList.add("active");

                if (contentId === "tab-export") {
                    generateCodeExport();
                }
            });
        });

        // Form handlers
        document.getElementById("btn-add-ach").addEventListener("click", addAchievement);
        document.getElementById("btn-add-cert").addEventListener("click", addCertificate);
        document.getElementById("btn-copy-code").addEventListener("click", copyExportedCode);
    }

    // Key buffers and logo click triggers
    function setupSecretTriggers() {
        // Keyboard sequence listener
        window.addEventListener("keydown", (e) => {
            keyBuffer += e.key.toLowerCase();
            if (keyBuffer.length > SECRET_KEYWORD.length * 2) {
                keyBuffer = keyBuffer.slice(-SECRET_KEYWORD.length);
            }
            if (keyBuffer === SECRET_KEYWORD) {
                showAdminPanel();
                keyBuffer = ""; // Reset
            }
        });

        // Logo Ctrl + click trigger
        setTimeout(() => {
            const logo = document.querySelector(".nav-logo a");
            if (logo) {
                let clickCount = 0;
                let lastClickTime = 0;

                logo.addEventListener("click", (e) => {
                    if (e.ctrlKey) {
                        e.preventDefault();
                        const now = Date.now();
                        if (now - lastClickTime < 1000) {
                            clickCount++;
                        } else {
                            clickCount = 1;
                        }
                        lastClickTime = now;

                        if (clickCount >= 3) {
                            showAdminPanel();
                            clickCount = 0; // Reset
                        }
                    }
                });
            }
        }, 1000);
    }

    // Modal Control
    function showAdminPanel() {
        modalOverlay.classList.add("show");
        pwdInput.value = "";
        pwdInput.focus();
        loginBox.style.display = "flex";
        dashboardBox.style.display = "none";
        document.body.style.overflow = "hidden";
    }

    function hideAdminPanel() {
        modalOverlay.classList.remove("show");
        document.body.style.overflow = "";
    }

    // Login logic
    function handleLogin() {
        const passwordInput = pwdInput.value;
        if (passwordInput === ADMIN_PASSWORD || passwordInput === ALT_PASSWORD) {
            loginBox.style.display = "none";
            dashboardBox.style.display = "flex";
            loadAdminLists();
        } else {
            alert("Hatalı şifre! Lütfen tekrar deneyiniz.");
            pwdInput.value = "";
            pwdInput.focus();
        }
    }

    // Local Storage Data Retrieval
    function getStoredData() {
        let achievements = localStorage.getItem("portfolio_achievements");
        let certificates = localStorage.getItem("portfolio_certificates");

        const defaultAchievements = [
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

        const defaultCertificates = [
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

        return {
            achievements: achievements ? JSON.parse(achievements) : defaultAchievements,
            certificates: certificates ? JSON.parse(certificates) : defaultCertificates
        };
    }

    // Load Admin Lists
    function loadAdminLists() {
        const data = getStoredData();

        // 1. Render Achievements List
        const achList = document.getElementById("list-achievements");
        achList.innerHTML = "";
        data.achievements.forEach((ach, index) => {
            const row = document.createElement("div");
            row.className = "admin-item-row";
            row.innerHTML = `
                <div class="admin-item-info">
                    <span class="admin-item-name">${ach.icon} ${ach.title}</span>
                    <span class="admin-item-sub">${ach.badge} | Yarıçap: ${ach.radius}px | Hız: ${ach.speed}</span>
                </div>
                <button class="admin-btn admin-btn-danger btn-delete-ach" data-index="${index}">Sil</button>
            `;
            achList.appendChild(row);
        });

        // 2. Render Certificates List
        const certList = document.getElementById("list-certificates");
        certList.innerHTML = "";
        data.certificates.forEach((cert, index) => {
            const row = document.createElement("div");
            row.className = "admin-item-row";
            row.innerHTML = `
                <div class="admin-item-info">
                    <span class="admin-item-name">${cert.name}</span>
                    <span class="admin-item-sub">Küme: ${cert.category.toUpperCase()}</span>
                </div>
                <button class="admin-btn admin-btn-danger btn-delete-cert" data-index="${index}">Sil</button>
            `;
            certList.appendChild(row);
        });

        // Bind delete listeners
        document.querySelectorAll(".btn-delete-ach").forEach(btn => {
            btn.addEventListener("click", () => {
                deleteAchievement(parseInt(btn.getAttribute("data-index")));
            });
        });

        document.querySelectorAll(".btn-delete-cert").forEach(btn => {
            btn.addEventListener("click", () => {
                deleteCertificate(parseInt(btn.getAttribute("data-index")));
            });
        });
    }

    // Add Achievement
    function addAchievement() {
        const title = document.getElementById("ach-title").value.trim();
        const badge = document.getElementById("ach-badge").value.trim();
        const icon = document.getElementById("ach-icon").value.trim();
        const radius = parseInt(document.getElementById("ach-radius").value);
        const desc = document.getElementById("ach-desc").value.trim();

        if (!title || !badge || !icon || !radius || !desc) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        const data = getStoredData();
        
        // Calculate orbit speed based on radius automatically to keep it synchronized (larger orbits rotate slightly slower)
        const speedVal = Math.round(20 + (radius - 150) * 0.08);
        const speed = `${speedVal}s`;

        data.achievements.push({ title, badge, icon, radius, speed, desc });
        localStorage.setItem("portfolio_achievements", JSON.stringify(data.achievements));

        // Reset inputs
        document.getElementById("ach-title").value = "";
        document.getElementById("ach-badge").value = "";
        document.getElementById("ach-desc").value = "";

        loadAdminLists();
        notifyDataUpdate();
    }

    // Delete Achievement
    function deleteAchievement(index) {
        if (!confirm("Bu başarıyı silmek istediğinize emin misiniz?")) return;
        const data = getStoredData();
        data.achievements.splice(index, 1);
        localStorage.setItem("portfolio_achievements", JSON.stringify(data.achievements));
        loadAdminLists();
        notifyDataUpdate();
    }

    // Add Certificate
    function addCertificate() {
        const name = document.getElementById("cert-name").value.trim();
        const category = document.getElementById("cert-category").value;

        if (!name) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        const data = getStoredData();
        data.certificates.push({ name, category });
        localStorage.setItem("portfolio_certificates", JSON.stringify(data.certificates));

        // Reset input
        document.getElementById("cert-name").value = "";

        loadAdminLists();
        notifyDataUpdate();
    }

    // Delete Certificate
    function deleteCertificate(index) {
        if (!confirm("Bu sertifikayı silmek istediğinize emin misiniz?")) return;
        const data = getStoredData();
        data.certificates.splice(index, 1);
        localStorage.setItem("portfolio_certificates", JSON.stringify(data.certificates));
        loadAdminLists();
        notifyDataUpdate();
    }

    // Generate Code Export
    function generateCodeExport() {
        const data = getStoredData();
        const exportArea = document.getElementById("admin-export-textarea");
        
        const code = `/* ==========================================================================
   PERMANENT COPIED DATA
   Copy and paste this into the top of app.js to bake them in permanently!
   ========================================================================== */

// 1. Dynamic Achievements Data
const bakedAchievements = ${JSON.stringify(data.achievements, null, 4)};

// 2. Dynamic Certificates Data
const bakedCertificates = ${JSON.stringify(data.certificates, null, 4)};
`;
        exportArea.value = code;
    }

    // Copy code to clipboard
    function copyExportedCode() {
        const exportArea = document.getElementById("admin-export-textarea");
        navigator.clipboard.writeText(exportArea.value).then(() => {
            const btn = document.getElementById("btn-copy-code");
            const originalText = btn.textContent;
            btn.textContent = "Kopyalandı! ✓";
            btn.style.background = "#10b981";
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = "";
            }, 2000);
        }).catch(err => {
            console.error("Kopyalama hatası: ", err);
        });
    }

    // Dispatch update notification to app.js
    function notifyDataUpdate() {
        const event = new CustomEvent("portfolio-data-updated");
        window.dispatchEvent(event);
    }

    // Expose utility globally in case needed
    window.getStoredPortfolioData = getStoredData;
})();
