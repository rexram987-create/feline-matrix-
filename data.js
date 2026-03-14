let currentLang = 'he';

// המילון של דף הבית
const content = {
    he: {
        title: `מטריצת <span class="text-amber-500">החתוליים</span>`, 
        sub: `מסע אבולוציוני וזואולוגי לחקר טורפי העל המרתקים ביותר בטבע - משפחת ה-Felidae.`,
        introTitle: `מכונת הציד המושלמת`, 
        p1: `משפחת החתוליים (Felidae) היא המהנדסת המושלמת של הטבע בתחום הציד. החתולים הראשונים הופיעו על פני כדור הארץ לפני כ-25 מיליון שנה, בתקופת האוליגוקן. בניגוד לטורפים אחרים, החתוליים הם "היפר-קרניבורים" (Hypercarnivores) – תזונתם מבוססת כמעט לחלוטין על בשר. גופם עבר אופטימיזציה אבולוציונית קיצונית: שלד גמיש במיוחד, טפרים נשלפים, וראיית לילה המפותחת פי שישה מזו של האדם, תכונות המאפשרות להם להפוך לטורפי-העל (Apex Predators) כמעט בכל סביבה אקולוגית בה הם חיים.`,
        p2: `"החתול הקטן ביותר הוא יצירת מופת." הקביעה המפורסמת של איש האשכולות <span class="text-white font-bold">לאונרדו דה וינצ'י</span> מסכמת היטב את הפלא הביולוגי של משפחה זו. מבחינה אנטומית, קיים דמיון עצום בין חתול הבית הקטן לבין הטיגריס העצום. ההבדלים העיקריים מתבטאים בעיקר בגודל ובכוח, אך המכניקה הבסיסית של התנועה, מבנה הלסתות ושיטות הציד נותרו זהות כמעט לחלוטין לאורך שושלת אבולוציונית שלמה.`,
        catHeader: `קטלוג החתוליים המלא`, 
        topAbout: `אודות`,
        footer: `פרויקט מחקר ייעודי לחקר האבולוציה, האנטומיה וההתנהגות של משפחת החתוליים. האתר נוצר על ידי ג'מיני ועל ידי רם.`,
        navHome: `בית`, 
        navAbout: `אודות`, 
        btn: `EN`, 
        dir: `rtl`
    },
    en: {
        title: `The Feline <span class="text-amber-500">Matrix</span>`, 
        sub: `An evolutionary and zoological journey exploring nature's most fascinating apex predators - the Felidae family.`,
        introTitle: `The Perfect Hunting Machine`, 
        p1: `The Felidae family is nature's perfect hunting engineer. The first cats appeared on Earth about 25 million years ago during the Oligocene epoch. Unlike other predators, felines are "hypercarnivores" - their diet consists almost entirely of meat. Their bodies underwent extreme evolutionary optimization: a highly flexible skeleton, retractable claws, and night vision six times more developed than humans, allowing them to become apex predators in almost every ecological environment they inhabit.`,
        p2: `"The smallest feline is a masterpiece." This famous quote by the polymath <span class="text-white font-bold">Leonardo da Vinci</span> perfectly summarizes the biological marvel of this family. Anatomically speaking, there is a tremendous similarity between a small domestic cat and a massive tiger. The main differences manifest in size and strength, but the fundamental mechanics of movement, jaw structure, and hunting methods have remained almost identical across an entire evolutionary lineage.`,
        catHeader: `Complete Feline Catalog`, 
        topAbout: `About`,
        footer: `A dedicated research project for exploring the evolution, anatomy, and behavior of the Felidae family. The site was created by Gemini and Ram.`,
        navHome: `HOME`, 
        navAbout: `ABOUT`, 
        btn: `HE`, 
        dir: `ltr`
    }
};

// רשימת 17 החתולים המלאה
const catsData = [
    {
        id: "lion",
        nameHe: "חתולים גדולים (אריה)",
        nameEn: "Big Cats (Lion)",
        scientific: "Panthera leo",
        img: "assets/lion.png",
        link: "cats/lion.html",
        color: "#f59e0b"
    },
    {
        id: "tiger",
        nameHe: "חתולים גדולים (טיגריס)",
        nameEn: "Big Cats (Tiger)",
        scientific: "Panthera tigris",
        img: "assets/tiger.png",
        link: "cats/tiger.html",
        color: "#f97316"
    },
    {
        id: "leopard",
        nameHe: "חתולים גדולים (נמר)",
        nameEn: "Big Cats (Leopard)",
        scientific: "Panthera pardus",
        img: "assets/leopard.png",
        link: "cats/leopard.html",
        color: "#eab308"
    },
    {
        id: "jaguar",
        nameHe: "חתולים גדולים (יגואר)",
        nameEn: "Big Cats (Jaguar)",
        scientific: "Panthera onca",
        img: "assets/jaguar.png",
        link: "cats/jaguar.html",
        color: "#fbbf24"
    },
    {
        id: "cheetah",
        nameHe: "חתולים קטנים (ברדלס)",
        nameEn: "Small Cats (Cheetah)",
        scientific: "Acinonyx jubatus",
        img: "assets/cheetah.png",
        link: "cats/cheetah.html",
        color: "#facc15"
    },
    {
        id: "puma",
        nameHe: "חתולים קטנים (פומה)",
        nameEn: "Small Cats (Puma/Cougar)",
        scientific: "Puma concolor",
        img: "assets/puma.png",
        link: "cats/puma.html",
        color: "#d97706"
    },
    {
        id: "caracal",
        nameHe: "חתולים קטנים (קרקל)",
        nameEn: "Small Cats (Caracal)",
        scientific: "Caracal caracal",
        img: "assets/caracal.png",
        link: "cats/caracal.html",
        color: "#d97706"
    },
    {
        id: "snowleopard",
        nameHe: "חתולים גדולים (נמר השלג)",
        nameEn: "Big Cats (Snow Leopard)",
        scientific: "Panthera uncia",
        img: "assets/snowleopard.png",
        link: "cats/snowleopard.html",
        color: "#94a3b8"
    },
    {
        id: "canadianlynx",
        nameHe: "חתולים קטנים (שונר קנדי)",
        nameEn: "Small Cats (Canadian Lynx)",
        scientific: "Lynx canadensis",
        img: "assets/canadianlynx.png",
        link: "cats/canadianlynx.html",
        color: "#93c5fd"
    },
    {
        id: "serval",
        nameHe: "חתולים קטנים (סרוואל)",
        nameEn: "Small Cats (Serval)",
        scientific: "Leptailurus serval",
        img: "assets/serval.png",
        link: "cats/serval.html",
        color: "#ca8a04"
    },
    {
        id: "iberianlynx",
        nameHe: "חתולים קטנים (שונר איברי)",
        nameEn: "Small Cats (Iberian Lynx)",
        scientific: "Lynx pardinus",
        img: "assets/iberianlynx.png",
        link: "cats/iberianlynx.html",
        color: "#ea580c"
    },
    {
        id: "blackpanther",
        nameHe: "מוטציה (פנתר שחור)",
        nameEn: "Mutation (Black Panther)",
        scientific: "Melanistic Panthera",
        img: "assets/blackpanther.png",
        link: "cats/blackpanther.html",
        color: "#64748b"
    },
    {
        id: "ocelot",
        nameHe: "חתולים קטנים (אוצלוט)",
        nameEn: "Small Cats (Ocelot)",
        scientific: "Leopardus pardalis",
        img: "assets/ocelot.png",
        link: "cats/ocelot.html",
        color: "#d97706"
    },
    {
        id: "bobcat",
        nameHe: "חתולים קטנים (בובקט)",
        nameEn: "Small Cats (Bobcat)",
        scientific: "Lynx rufus",
        img: "assets/bobcat.png",
        link: "cats/bobcat.html",
        color: "#9a3412"
    },
    {
        id: "lynx",
        nameHe: "חתולים קטנים (שונר אירואסייתי)",
        nameEn: "Small Cats (Eurasian Lynx)",
        scientific: "Lynx lynx",
        img: "assets/lynx.png",
        link: "cats/lynx.html",
        color: "#a8a29e"
    },
    {
        id: "cloudedleopard",
        nameHe: "חתולים גדולים (נמר ערפלי)",
        nameEn: "Big Cats (Clouded Leopard)",
        scientific: "Neofelis nebulosa",
        img: "assets/cloudedleopard.png",
        link: "cats/cloudedleopard.html",
        color: "#6b7280"
    },
    {
        id: "sandcat",
        nameHe: "חתולים קטנים (חתול חולות)",
        nameEn: "Small Cats (Sand Cat)",
        scientific: "Felis margarita",
        img: "assets/sandcat.png",
        link: "cats/sandcat.html",
        color: "#fde047"
    }
];

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
    
    document.documentElement.dir = data.dir;
    document.documentElement.lang = currentLang;

    // רענון טקסטים של כרטיסיות החיות אם הן קיימות בדף
    const cards = document.querySelectorAll('.cat-card');
    if(cards.length > 0) {
        catsData.forEach((cat, index) => {
            const nameEl = document.getElementById(`cat-name-${index}`);
            if(nameEl) {
                nameEl.innerText = currentLang === 'he' ? cat.nameHe : cat.nameEn;
            }
        });
    }
}

window.onload = () => {
    currentLang = 'en'; 
    toggleLanguage();
};