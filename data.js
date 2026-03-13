let currentLang = 'he';

// המילון של דף הבית (מוגן משבירת שורות באמצעות Backticks)
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

// רשימת החתולים המלאה
const catsData = [
    {
        id: "lion",
        nameHe: "חתולים גדולים (אריה)",
        nameEn: "Big Cats (Lion)",
        scientific: "Panthera leo",
        img: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=200",
        link: "cats/lion.html",
        color: "#f59e0b" // זהב
    },
    {
        id: "tiger",
        nameHe: "חתולים גדולים (טיגריס)",
        nameEn: "Big Cats (Tiger)",
        scientific: "Panthera tigris",
        img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=200",
        link: "cats/tiger.html",
        color: "#f97316" // כתום
    },
    {
        id: "leopard",
        nameHe: "חתולים גדולים (נמר)",
        nameEn: "Big Cats (Leopard)",
        scientific: "Panthera pardus",
        img: "https://images.unsplash.com/photo-1517028481483-346765cb1cb8?q=80&w=200",
        link: "cats/leopard.html",
        color: "#eab308" // צהוב
    },
    {
        id: "jaguar",
        nameHe: "חתולים גדולים (יגואר)",
        nameEn: "Big Cats (Jaguar)",
        scientific: "Panthera onca",
        img: "https://images.unsplash.com/photo-1602491453631-e2a56e4173a7?q=80&w=200",
        link: "cats/jaguar.html",
        color: "#fbbf24" // ענבר בהיר
    },
    {
        id: "cheetah",
        nameHe: "חתולים קטנים (ברדלס)",
        nameEn: "Small Cats (Cheetah)",
        scientific: "Acinonyx jubatus",
        img: "https://images.unsplash.com/photo-1551927336-09d50efd69cd?q=80&w=200",
        link: "cats/cheetah.html",
        color: "#facc15" // צהוב מהיר
    },
    {
        id: "puma",
        nameHe: "חתולים קטנים (פומה)",
        nameEn: "Small Cats (Puma/Cougar)",
        scientific: "Puma concolor",
        img: "https://images.unsplash.com/photo-1596791242398-3bf211d293f0?q=80&w=200",
        link: "cats/puma.html",
        color: "#d97706" // נחושת
    },
    {
        id: "caracal",
        nameHe: "חתולים קטנים (קרקל)",
        nameEn: "Small Cats (Caracal)",
        scientific: "Caracal caracal",
        img: "https://images.unsplash.com/photo-1615822646671-6ce93561a7a0?q=80&w=200",
        link: "cats/caracal.html",
        color: "#d97706" // צבע חול/אדמה
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
}

window.onload = () => {
    currentLang = 'en'; // set opposite to trigger correct load
    toggleLanguage();
};