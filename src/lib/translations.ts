export type Lang = "SK" | "EN" | "GA";

export const translations = {
  nav: {
    home: { SK: "Úvodná stránka", EN: "Home", GA: "Home" },
    services: { SK: "Služby", EN: "Services", GA: "Services" },
    about: { SK: "O mne", EN: "About", GA: "About" },
    partners: { SK: "S kým sme pracovali", EN: "Partners", GA: "Partners" },
    cases: { SK: "Prípadové štúdie", EN: "Case Studies", GA: "Case Studies" },
    blog: { SK: "Blog", EN: "Blog", GA: "Blog" },
    contact: { SK: "Kontakt", EN: "Contact", GA: "Contact" },
  },
  hero: {
    title: {
      SK: "Osobný prístup experta, nie anonymita veľkej agentúry.",
      EN: "Expert personal approach, not big agency anonymity.",
      GA: "Cur chuige pearsanta saineolach."
    },
    growth_metric: {
      SK: "80 % naších klientov s nami rastie už vyše 3 rokov.",
      EN: "80% of our clients have been growing with us for over 3 years.",
      GA: "Tá 80% dár gcliaint ag fás linn."
    },
    subtitle: {
      SK: "Špecializujeme sa výhradne na malých a stredných podnikateľov. Okrem marketingu pre vás programujeme nové e-shopy, weby a predajné lieviky, ktoré skutočne konvertujú.",
      EN: "We specialize exclusively in SMEs. Beyond marketing, we build e-shops and sales funnels.",
      GA: "Speisialtóireacht againn i SMEanna."
    },
    cta: { SK: "Naše služby", EN: "Our Services", GA: "Seirbhísí" },
    secondary_cta: { SK: "Prípadové štúdie", EN: "Case Studies", GA: "Staidéir Cháis" }
  },
  stats: {
    title: { SK: "BELIANSKY a spol. v číslach", EN: "Beliansky & Co. in numbers", GA: "I uimhreacha" },
    items: [
      { val: "7", label: { SK: "skúsených špecialistov", EN: "experienced specialists", GA: "speisialtóirí" } },
      { val: "250", label: { SK: "online kampaní", EN: "online campaigns", GA: "feachtais" } },
      { val: "30+", label: { SK: "úspešných spoluprácí", EN: "successful collaborations", GA: "comhoibrithe" } },
      { val: "1M€", label: { SK: "v spendoch", EN: "in spends", GA: "caiteachas" } }
    ]
  },
  process: {
    title: { SK: "Už žiadne zložité procesy. S nami idete priamo za ziskom.", EN: "No more complex processes. Drive straight to profit.", GA: "Brabús díreach." },
    subtitle: { SK: "V štyroch jasných krokoch", EN: "In four clear steps", GA: "I gceithre chéim" },
    steps: [
      { id: "1", title: { SK: "Diagnostika problému", EN: "Problem Diagnosis", GA: "Diagnóis" }, text: { SK: "Zistíme, čo skutočne potrebujete. Nezačíname, kým nepoznáme fakty.", EN: "Finding what you truly need.", GA: "Fíricí." } },
      { id: "2", title: { SK: "Analýza Projektu", EN: "Project Analysis", GA: "Anailís" }, text: { SK: "Poznáme vášho zákazníka dokonale. Detailne preveríme trh a konkurenciu.", EN: "Knowing your customer perfectly.", GA: "Custaiméir." } },
      { id: "3", title: { SK: "Nastavenie Stratégie", EN: "Strategy Setup", GA: "Straitéis" }, text: { SK: "Vytvoríme plán, ktorý predáva. Navrhujeme architektúru webu pre konverzie.", EN: "Creating a plan that sells.", GA: "Plean." } },
      { id: "4", title: { SK: "Spustenie a optimalizovanie", EN: "Launch & Optimize", GA: "Seoladh" }, text: { SK: "Spustíme, meriame, zarábame. Neustále testovanie a rast marže.", EN: "Launch, measure, profit.", GA: "Fás." } }
    ]
  },
  services: {
    title: { SK: "Naše služby", EN: "Our Services", GA: "Seirbhísí" },
    items: [
      {
        id: "ppc",
        SK: "PPC reklama / Online reklama",
        EN: "PPC & Performance",
        price: "500€+",
        bullets: [
          "Facebook reklama", "Instagram reklama", "TikTok reklama", "Google reklama", "YouTube reklama", "Cenové porovnávače", "High-Risk Marketing"
        ],
        desc: { SK: "Strategický výkonnostný marketing s dôrazom na ROI.", EN: "Strategic marketing focused on ROI.", GA: "ROI." }
      },
      {
        id: "aoe",
        SK: "AOE / GEO Targeting",
        EN: "AI & Search Domination",
        price: "350€+",
        bullets: [
          "Zobrazenie značky v AI nástrojoch (ChatGPT, Perplexity)", "Získavanie zákazníkov s vysokým nákupným úmyslom", "Vytváranie odpovedí na nákupné otázky", "Dlhodobá viditeľnosť bez závislosti od reklám"
        ],
        desc: { SK: "Budúcnosť vyhľadávania je v odpovediach, nie odkazoch.", EN: "The future is answers, not links.", GA: "AI." }
      },
      {
        id: "web",
        SK: "Usmerňovacia konzultácia & audit",
        EN: "Consultation & Audit",
        price: "1500€+",
        bullets: [
          "Okamžité riešenie pálčivého problému", "Blesková analýza dát a modelu", "Odhalenie únikov marže", "Audit analytiky (GA4, GTM, Meta Pixel)", "Zvyšovanie AOV"
        ],
        desc: { SK: "Programujeme predajné lieviky a e-shopy na Shoptete.", EN: "Custom sales funnels.", GA: "Funnel." }
      }
    ]
  },
  about: {
    tag: { SK: "O MNE / ZAKLADATEĽ", EN: "ABOUT ME / FOUNDER", GA: "FÚM" },
    title: { SK: "Marketingom som doslova vyrastal", EN: "I literally grew up with marketing", GA: "Margadh." },
    description: {
      SK: `V online svete sa pohybujem od svojich 17 rokov. Nezačínal som teóriou v škole, ale tým, že som investoval vlastné peniaze do prvých e-shopov a digitálnych projektov. Táto „škola života“ ma naučila to najdôležitejšie: vidieť online svet očami majiteľa firmy, nie len ako sériu čísel v tabuľke.

      V našej spolupráci hľadajte skúsenosti z prvej ligy – pôsobil som v špičkových PPC agentúrach v Prahe a Brne ako Meta Ads špecialista a projektový manažér. Dnes, ako digitálny architekt s expertízou z viac ako 150 firiem, dokážem takmer okamžite identifikovať váš problém v online prostredí.

      Nie sme najlepšia agentúra na svete. Sme ale rozumný partner pre váš rozpočet. Ak hľadáte stovky ľudí v oblekoch a sklenené kancelárie, ktoré zaplatíte v našej faktúre, nie sme pre vás. Sme tu na to, aby sme váš online biznis chránili pred neefektívnym míňaním. Táto úprimnosť je našou najväčšou konkurenčnou výhodou.`,
      EN: `Active in the online world since 17. I didn't start with theory, but by investing my own capital into e-shops. This "school of life" taught me to see digital through an owner's eyes, not just as numbers in a table.

      Look for top-tier experience – I worked in elite PPC agencies in Prague & Brno as a Meta Ads specialist and PM. Today, as a digital architect with insights from 150+ companies, I can identify your online bottlenecks almost instantly.

      We aren't the biggest agency, but we are a smart partner for your budget. If you want glass offices and suits paid for by your invoices, we aren't for you. We protect your business from inefficient spending. Our honesty is our ultimate competitive advantage.`,
      GA: "ROI."
    },
    philosophy: {
      SK: "Sme dobrý v tom, aby sme vám povedali pravdu, aj keď sa vám nepáči. Naša osobná zodpovednosť za váš rast je to, čo AI nikdy nenahradí.",
      EN: "We tell you the truth, even if it hurts. Personal responsibility for your growth is something AI can never replace.",
      GA: "Páirtí cliste."
    }
  },
  portfolio: {
    title: { SK: "Prípadové štúdie", EN: "Case Studies", GA: "Staidéir Cháis" },
    clients: [
      {
        name: "Protein.sk",
        tag: "European Search Awards Shortlist",
        desc: {
          SK: "Kompletný Performance management. Expandovali sme do CZ s rekordným PNO.",
          EN: "Expanded to CZ with record PNO.",
          GA: "Protein."
        }
      }
    ]
  },
  newsletter: {
    title: { SK: "Odoberajte naše novinky", EN: "Subscribe to news", GA: "Nuachtlitir" },
    text: { SK: "Budeme vám posielať len to podstatné zo sveta marketingu. Zabudnite na spam.", EN: "Only essential marketing news. No spam.", GA: "Gan spam." },
    cta: { SK: "Odoberať", EN: "Subscribe", GA: "Liostáil" }
  },
  contact: {
    title: { SK: "KONTAKTUJTE NÁS", EN: "CONTACT US", GA: "TEAGMHÁIL" },
    subtitle: { SK: "Radi vám pripravíme cenovú ponuku.", EN: "We'll prepare a custom quote.", GA: "Athfhriotail." },
    fields: {
      name: { SK: "Meno", EN: "Name", GA: "Ainm" },
      phone: { SK: "Telefónne číslo", EN: "Phone", GA: "Fón" },
      email: { SK: "E-mail", EN: "Email", GA: "Ríomhphost" },
      service: { SK: "Vybrať službu", EN: "Select Service", GA: "Seirbhís" },
      note: { SK: "Vaša požiadavka", EN: "Your Request", GA: "Iarratas" }
    },
    cta: { SK: "Odoslať dopyt", EN: "Send Inquiry", GA: "Seol" },
    info: {
      call: { SK: "Zavolajte nám:", EN: "Call us:", GA: "Glaoigh" },
      write: { SK: "Napíšte nám:", EN: "Write us:", GA: "Scríobh" },
      legal: { SK: "Spoločnosť: IČO:57509808", EN: "ID: 57509808", GA: "IČO" }
    }
  }
};
