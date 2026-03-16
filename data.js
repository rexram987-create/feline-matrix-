let currentLang = 'he';

// המילון של דף הבית ומילון המונחים
const content = {
    he: {
        title: `מטריצת <span class="text-amber-500">החתוליים</span>`, 
        sub: `מסע אבולוציוני וזואולוגי לחקר טורפי העל המרתקים ביותר בטבע - משפחת ה-Felidae.`,
        introTitle: `מכונת הציד המושלמת`, 
        p1: `משפחת החתוליים (Felidae) היא המהנדסת המושלמת של הטבע בתחום הציד. החתולים הראשונים הופיעו על פני כדור הארץ לפני כ-25 מיליון שנה, בתקופת האוליגוקן. בניגוד לטורפים אחרים, החתוליים הם "היפר-קרניבורים" (Hypercarnivores) – תזונתם מבוססת כמעט לחלוטין על בשר. גופם עבר אופטימיזציה אבולוציונית קיצונית: שלד גמיש במיוחד, טפרים נשלפים, וראיית לילה המפותחת פי שישה מזו של האדם.`,
        p2: `"החתול הקטן ביותר הוא יצירת מופת." הקביעה המפורסמת של איש האשכולות <span class="text-white font-bold">לאונרדו דה וינצ'י</span> מסכמת היטב את הפלא הביולוגי של משפחה זו. האתר מציג את כל 40 מיני החתוליים החיים כיום בטבע.`,
        catHeader: `קטלוג החתוליים המלא`, 
        topAbout: `אודות`,
        footer: `פרויקט מחקר ייעודי לחקר האבולוציה, האנטומיה וההתנהגות של משפחת החתוליים. האתר נוצר על ידי ג'מיני ועל ידי רם.`,
        navHome: `בית`, 
        navAbout: `אודות`, 
        btn: `EN`, 
        dir: `rtl`,
        searchPlaceholder: `חפש חתול לפי שם...`,
        glossaryTitle: `מילון מונחים זואולוגי`,
        glossaryTerms: [
            { term: "היפר-קרניבור (Hypercarnivore)", def: "בעל חיים שתזונתו מורכבת מלמעלה מ-70% בשר. כל החתוליים, ללא יוצא מן הכלל, הם היפר-קרניבורים התלויים בחלבון מהחי לשרידותם." },
            { term: "אנדמי (Endemic)", def: "מין של בעל חיים המוגבל בתפוצתו לאזור גיאוגרפי מסוים אחד בלבד (כמו אי או רכס הרים) ואינו קיים באופן טבעי בשום מקום אחר בעולם (לדוגמה: החתול הבורנאי)." },
            { term: "מלניזם (Melanism)", def: "מוטציה גנטית הגורמת לייצור מוגבר של פיגמנט המלנין, מה שמעניק לבעל החיים פרווה שחורה לחלוטין. נפוץ מאוד אצל נמרים ויגוארים (פנתר שחור)." },
            { term: "פולימורפיזם (Polymorphism)", def: "קיום של מספר מופעי צבע או צורה שונים לחלוטין באותו מין ביולוגי ובאותה אוכלוסייה (כפי שראינו אצל החתול הזהוב האסיאתי)." },
            { term: "ראייה סטריאוסקופית (Stereoscopic Vision)", def: "ראיית עומק תלת-ממדית הנוצרת ממיקום שתי העיניים בקדמת הראש. תכונה זו חיונית לטורפים כדי לאמוד מרחק במדויק לקראת הזינוק על הטרף." },
            { term: "חתוליים ארבוראליים (Arboreal)", def: "מינים המותאמים במיוחד לחיים ולציד על צמרות עצים. יש להם לרוב זנב ארוך לאיזון וקרסוליים גמישים (לדוגמה: מרגיי וחתול שיש)." }
        ]
    },
    en: {
        title: `The Feline <span class="text-amber-500">Matrix</span>`, 
        sub: `An evolutionary and zoological journey exploring nature's most fascinating apex predators - the Felidae family.`,
        introTitle: `The Perfect Hunting Machine`, 
        p1: `The Felidae family is nature's perfect hunting engineer. The first cats appeared on Earth about 25 million years ago. Unlike other predators, felines are "hypercarnivores" - their diet consists almost entirely of meat. Their bodies underwent extreme evolutionary optimization: a highly flexible skeleton, retractable claws, and night vision six times more developed than humans.`,
        p2: `"The smallest feline is a masterpiece." This famous quote by the polymath <span class="text-white font-bold">Leonardo da Vinci</span> perfectly summarizes the biological marvel of this family. The site showcases all 40 wild feline species currently alive.`,
        catHeader: `Complete Feline Catalog`, 
        topAbout: `About`,
        footer: `A dedicated research project for exploring the evolution, anatomy, and behavior of the Felidae family. The site was created by Gemini and Ram.`,
        navHome: `HOME`, 
        navAbout: `ABOUT`, 
        btn: `HE`, 
        dir: `ltr`,
        searchPlaceholder: `Search for a cat by name...`,
        glossaryTitle: `Zoological Glossary`,
        glossaryTerms: [
            { term: "Hypercarnivore", def: "An animal whose diet consists of more than 70% meat. All felines, without exception, are hypercarnivores depending on animal protein for survival." },
            { term: "Endemic", def: "A species restricted in its distribution to one specific geographical area (like an island or mountain range) and not found naturally anywhere else (e.g., the Bay Cat)." },
            { term: "Melanism", def: "A genetic mutation causing an increased production of the melanin pigment, giving the animal a completely black coat. Very common in leopards and jaguars (Black Panther)." },
            { term: "Polymorphism", def: "The occurrence of several completely different color or form morphs within the same biological species and population (as seen in the Asian Golden Cat)." },
            { term: "Stereoscopic Vision", def: "3D depth perception created by the forward placement of both eyes. This trait is crucial for predators to accurately gauge distance before pouncing on prey." },
            { term: "Arboreal Felines", def: "Species specially adapted for living and hunting in tree canopies. They often have a long tail for balance and flexible ankles (e.g., Margay and Marbled Cat)." }
        ]
    }
};

// רשימת 40 החתולים המלאה (ללא קיצורי דרך)
const catsData = [
    { id: "lion", nameHe: "חתולים גדולים (אריה)", nameEn: "Big Cats (Lion)", scientific: "Panthera leo", img: "assets/lion.png", link: "cats/lion.html", color: "#f59e0b" },
    { id: "tiger", nameHe: "חתולים גדולים (טיגריס)", nameEn: "Big Cats (Tiger)", scientific: "Panthera tigris", img: "assets/tiger.png", link: "cats/tiger.html", color: "#f97316" },
    { id: "leopard", nameHe: "חתולים גדולים (נמר)", nameEn: "Big Cats (Leopard)", scientific: "Panthera pardus", img: "assets/leopard.png", link: "cats/leopard.html", color: "#eab308" },
    { id: "jaguar", nameHe: "חתולים גדולים (יגואר)", nameEn: "Big Cats (Jaguar)", scientific: "Panthera onca", img: "assets/jaguar.png", link: "cats/jaguar.html", color: "#fbbf24" },
    { id: "cheetah", nameHe: "חתולים קטנים (ברדלס)", nameEn: "Small Cats (Cheetah)", scientific: "Acinonyx jubatus", img: "assets/cheetah.png", link: "cats/cheetah.html", color: "#facc15" },
    { id: "puma", nameHe: "חתולים קטנים (פומה)", nameEn: "Small Cats (Puma/Cougar)", scientific: "Puma concolor", img: "assets/puma.png", link: "cats/puma.html", color: "#d97706" },
    { id: "caracal", nameHe: "חתולים קטנים (קרקל)", nameEn: "Small Cats (Caracal)", scientific: "Caracal caracal", img: "assets/caracal.png", link: "cats/caracal.html", color: "#d97706" },
    { id: "snowleopard", nameHe: "חתולים גדולים (נמר השלג)", nameEn: "Big Cats (Snow Leopard)", scientific: "Panthera uncia", img: "assets/snowleopard.png", link: "cats/snowleopard.html", color: "#94a3b8" },
    { id: "canadianlynx", nameHe: "חתולים קטנים (שונר קנדי)", nameEn: "Small Cats (Canadian Lynx)", scientific: "Lynx canadensis", img: "assets/canadianlynx.png", link: "cats/canadianlynx.html", color: "#93c5fd" },
    { id: "serval", nameHe: "חתולים קטנים (סרוואל)", nameEn: "Small Cats (Serval)", scientific: "Leptailurus serval", img: "assets/serval.png", link: "cats/serval.html", color: "#ca8a04" },
    { id: "iberianlynx", nameHe: "חתולים קטנים (שונר איברי)", nameEn: "Small Cats (Iberian Lynx)", scientific: "Lynx pardinus", img: "assets/iberianlynx.png", link: "cats/iberianlynx.html", color: "#ea580c" },
    { id: "blackpanther", nameHe: "מוטציה (פנתר שחור)", nameEn: "Mutation (Black Panther)", scientific: "Melanistic Panthera", img: "assets/blackpanther.png", link: "cats/blackpanther.html", color: "#64748b" },
    { id: "ocelot", nameHe: "חתולים קטנים (אוצלוט)", nameEn: "Small Cats (Ocelot)", scientific: "Leopardus pardalis", img: "assets/ocelot.png", link: "cats/ocelot.html", color: "#d97706" },
    { id: "bobcat", nameHe: "חתולים קטנים (בובקט)", nameEn: "Small Cats (Bobcat)", scientific: "Lynx rufus", img: "assets/bobcat.png", link: "cats/bobcat.html", color: "#9a3412" },
    { id: "lynx", nameHe: "חתולים קטנים (שונר אירואסייתי)", nameEn: "Small Cats (Eurasian Lynx)", scientific: "Lynx lynx", img: "assets/lynx.png", link: "cats/lynx.html", color: "#a8a29e" },
    { id: "cloudedleopard", nameHe: "חתולים גדולים (נמר הערפלי)", nameEn: "Big Cats (Clouded Leopard)", scientific: "Neofelis nebulosa", img: "assets/cloudedleopard.png", link: "cats/cloudedleopard.html", color: "#6b7280" },
    { id: "sandcat", nameHe: "חתולים קטנים (חתול חולות)", nameEn: "Small Cats (Sand Cat)", scientific: "Felis margarita", img: "assets/sandcat.png", link: "cats/sandcat.html", color: "#fde047" },
    { id: "jaguarundi", nameHe: "חתולים קטנים (יגוארונדי)", nameEn: "Small Cats (Jaguarundi)", scientific: "Herpailurus yagouaroundi", img: "assets/jaguarundi.png", link: "cats/jaguarundi.html", color: "#573516" },
    { id: "sundacloudedleopard", nameHe: "חתולים גדולים (נמר ערפלי של איי סונדה)", nameEn: "Big Cats (Sunda Clouded Leopard)", scientific: "Neofelis diardi", img: "assets/sundacloudedleopard.png", link: "cats/sundacloudedleopard.html", color: "#4b5563" },
    { id: "colocolo", nameHe: "חתולים קטנים (קולוקולו)", nameEn: "Small Cats (Colocolo / Pampas Cat)", scientific: "Leopardus colocola", img: "assets/colocolo.png", link: "cats/colocolo.html", color: "#b45309" },
    { id: "pantanalcat", nameHe: "חתולים קטנים (חתול פנטנל)", nameEn: "Small Cats (Pantanal Cat)", scientific: "Leopardus braccatus", img: "assets/pantanalcat.png", link: "cats/pantanalcat.html", color: "#a16207" },
    { id: "blackfootedCat", nameHe: "חתולים קטנים (חתול שחור-רגל)", nameEn: "Small Cats (Black-footed Cat)", scientific: "Felis nigripes", img: "assets/blackfootedCat.png", link: "cats/blackfootedCat.html", color: "#57534e" },
    { id: "wildcat", nameHe: "חתולים קטנים (חתול בר)", nameEn: "Small Cats (Wildcat)", scientific: "Felis silvestris", img: "assets/wildcat.png", link: "cats/wildcat.html", color: "#65a30d" },
    { id: "junglecat", nameHe: "חתולים קטנים (חתול ביצות)", nameEn: "Small Cats (Jungle Cat)", scientific: "Felis chaus", img: "assets/junglecat.png", link: "cats/junglecat.html", color: "#4d7c0f" },
    { id: "margay", nameHe: "חתולים קטנים (מרגיי)", nameEn: "Small Cats (Margay)", scientific: "Leopardus wiedii", img: "assets/margay.png", link: "cats/margay.html", color: "#c2410c" },
    { id: "domesticcat", nameHe: "חתולים קטנים (חתול בית)", nameEn: "Small Cats (Domestic Cat)", scientific: "Felis catus", img: "assets/domesticcat.png", link: "cats/domesticcat.html", color: "#8b5cf6" },
    { id: "andeanmountaincat", nameHe: "חתולים קטנים (חתול הרים אנדיי)", nameEn: "Small Cats (Andean Mountain Cat)", scientific: "Leopardus jacobita", img: "assets/andeanmountaincat.png", link: "cats/andeanmountaincat.html", color: "#9ca3af" },
    { id: "kodkod", nameHe: "חתולים קטנים (קודקוד)", nameEn: "Small Cats (Kodkod)", scientific: "Leopardus guigna", img: "assets/kodkod.png", link: "cats/kodkod.html", color: "#78350f" },
    { id: "geoffroyscat", nameHe: "חתולים קטנים (חתול ג'ופרואה)", nameEn: "Small Cats (Geoffroy's Cat)", scientific: "Leopardus geoffroyi", img: "assets/geoffroy'scat.png", link: "cats/geoffroyscat.html", color: "#a8a29e" },
    { id: "oncilla", nameHe: "חתולים קטנים (אונצילה)", nameEn: "Small Cats (Oncilla)", scientific: "Leopardus tigrinus", img: "assets/oncilla.png", link: "cats/oncilla.html", color: "#d97706" },
    { id: "flatheadedcat", nameHe: "חתולים קטנים (חתול שטוח-ראש)", nameEn: "Small Cats (Flat-headed Cat)", scientific: "Prionailurus planiceps", img: "assets/flatheadedcat.png", link: "cats/flatheadedcat.html", color: "#b45309" },
    { id: "fishingcat", nameHe: "חתולים קטנים (חתול דייגים)", nameEn: "Small Cats (Fishing Cat)", scientific: "Prionailurus viverrinus", img: "assets/fishingcat.png", link: "cats/fishingcat.html", color: "#0284c7" },
    { id: "marbledcat", nameHe: "חתולים קטנים (חתול שיש)", nameEn: "Small Cats (Marbled Cat)", scientific: "Pardofelis marmorata", img: "assets/marbledcat.png", link: "cats/marbledcat.html", color: "#a16207" },
    { id: "leopardcat", nameHe: "חתולים קטנים (חתול נמרי בנגלי)", nameEn: "Small Cats (Leopard Cat)", scientific: "Prionailurus bengalensis", img: "assets/leopardcat.png", link: "cats/leopardcat.html", color: "#ca8a04" },
    { id: "asiangoldencat", nameHe: "חתולים קטנים (חתול זהוב אסיאתי)", nameEn: "Small Cats (Asian Golden Cat)", scientific: "Catopuma temminckii", img: "assets/asiangoldencat.png", link: "cats/asiangoldencat.html", color: "#b45309" },
    { id: "africangoldencat", nameHe: "חתולים קטנים (חתול זהוב אפריקני)", nameEn: "Small Cats (African Golden Cat)", scientific: "Caracal aurata", img: "assets/africangoldencat.png", link: "cats/africangoldencat.html", color: "#9a3412" },
    { id: "pallascat", nameHe: "חתולים קטנים (חתול פאלאס)", nameEn: "Small Cats (Pallas's Cat)", scientific: "Otocolobus manul", img: "assets/pallas'scat.png", link: "cats/pallascat.html", color: "#64748b" },
    { id: "rustyspottedcat", nameHe: "חתולים קטנים (חתול אדמדם)", nameEn: "Small Cats (Rusty-spotted Cat)", scientific: "Prionailurus rubiginosus", img: "assets/rustyspottedcat.png", link: "cats/rustyspottedcat.html", color: "#b45309" },
    { id: "baycat", nameHe: "חתולים קטנים (חתול בורנאי)", nameEn: "Small Cats (Bay Cat)", scientific: "Catopuma badia", img: "assets/baycat.png", link: "cats/baycat.html", color: "#7f1d1d" },
    { id: "chinesemountaincat", nameHe: "חתולים קטנים (חתול הרים סיני)", nameEn: "Small Cats (Chinese Mountain Cat)", scientific: "Felis bieti", img: "assets/chinesemountaincat.png", link: "cats/chinesemountaincat.html", color: "#d4d4d8" }
];

// פונקציית החיפוש (סינון כרטיסיות בזמן אמת)
function filterCats() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    catsData.forEach((cat, index) => {
        const nameHe = cat.nameHe.toLowerCase();
        const nameEn = cat.nameEn.toLowerCase();
        const scientific = cat.scientific.toLowerCase();
        
        // נניח שכל כרטיסיה קיבלה id בפורמט 'cat-card-0', 'cat-card-1' וכו'
        const card = document.getElementById(`cat-card-${index}`);
        
        if (card) {
            // מסנן לפי שם עברי, אנגלי או מדעי
            if (nameHe.includes(query) || nameEn.includes(query) || scientific.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// פונקציה לרינדור מילון המונחים אל תוך ה-HTML
function renderGlossary() {
    const container = document.getElementById('glossaryContainer');
    if (!container) return;
    
    const data = content[currentLang];
    container.innerHTML = ''; // ניקוי הקיים
    
    data.glossaryTerms.forEach(item => {
        const termElement = document.createElement('div');
        termElement.className = 'bg-slate-900 p-4 rounded-xl border border-slate-800 shadow-md mb-3 text-start';
        termElement.innerHTML = `
            <h4 class="text-amber-500 font-bold text-md mb-1">${item.term}</h4>
            <p class="text-slate-300 text-sm leading-relaxed">${item.def}</p>
        `;
        container.appendChild(termElement);
    });
}

// פונקציית החלפת שפה (כולל עדכון המילון ושורת החיפוש)
function toggleLanguage() {
    currentLang = currentLang === 'he' ? 'en' : 'he';
    const data = content[currentLang];
    
    const el = (id) => document.getElementById(id);
    if(el('mainTitle')) el('mainTitle').innerHTML = data.title;
    if(el('mainSub')) el('mainSub').innerText = data.sub;
    if(el('introTitle')) el('introTitle').innerText = data.introTitle;
    if(el('p1')) el('p1').innerHTML = data.p1;
    if(el('p2')) el('p2').innerHTML = data.p2;
    if(el('catHeader')) el('catHeader').innerText = data.catHeader;
    if(el('topAboutBtn')) el('topAboutBtn').innerText = data.topAbout;
    
    if(el('footerText')) el('footerText').innerText = data.footer;
    if(el('navHome')) el('navHome').innerText = data.navHome;
    if(el('navAbout')) el('navAbout').innerText = data.navAbout;
    if(el('langBtn')) el('langBtn').innerText = data.btn;
    
    // עדכון שורת החיפוש וכותרת המילון
    if(el('searchInput')) el('searchInput').placeholder = data.searchPlaceholder;
    if(el('glossaryHeader')) el('glossaryHeader').innerText = data.glossaryTitle;
    
    document.documentElement.dir = data.dir;
    document.documentElement.lang = currentLang;

    // רענון טקסטים של כרטיסיות החיות
    const cards = document.querySelectorAll('.cat-card');
    if(cards.length > 0) {
        catsData.forEach((cat, index) => {
            const nameEl = document.getElementById(`cat-name-${index}`);
            if(nameEl) {
                nameEl.innerText = currentLang === 'he' ? cat.nameHe : cat.nameEn;
            }
        });
    }
    
    // רענון מילון המונחים בשפה החדשה
    renderGlossary();
}

window.onload = () => {
    currentLang = 'en'; // כפתור ה-toggle יהפוך את זה לעברית בטעינה, ויפעיל את רינדור המילון
    toggleLanguage();
};
