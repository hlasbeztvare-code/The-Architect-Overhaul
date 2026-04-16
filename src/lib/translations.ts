export type Lang = "SK" | "EN" | "GA";

export const translations = {
  nav: {
    services: { SK: "Služby", EN: "Services", GA: "Seirbhísí" },
    about: { SK: "O mne", EN: "About", GA: "Fúm" },
    portfolio: { SK: "Portfolio", EN: "Portfolio", GA: "Punann" },
    references: { SK: "Referencie", EN: "References", GA: "Tagairtí" },
    contact: { SK: "Kontakt", EN: "Contact", GA: "Teagmháil" },
  },
  hero: {
    title: {
      SK: "Sme ONLINE partnerom, na ktorého sa nezabúda.",
      EN: "We are the ONLINE partner you won't forget.",
      GA: "Is sinne an comhpháirtí AR LÍNE nach ndéanfaidh tú dearmad air."
    },
    subtitle: {
      SK: "Špecializujeme sa na malých a stredných podnikateľov. Pomáhame zbierať kvalitné leady a zvyšovať konverzie cez systematickú reklamu.",
      EN: "We specialize in SMEs. We help collect high-quality leads and increase conversions through systematic advertising.",
      GA: "Speisialtóireacht againn i SMEanna. Cabhraímid le treoraí ardchaighdeáin a bhailiú agus tiontuithe a mhéadú."
    },
    cta: { SK: "Naše služby", EN: "Our Services", GA: "Ár Seirbhísí" },
    secondary_cta: { SK: "Prípadové štúdie", EN: "Case Studies", GA: "Staidéir Cháis" }
  },
  about: {
    tag: { SK: "DIGITÁLNY ARCHITEKT", EN: "DIGITAL ARCHITECT", GA: "AILTIRE DIGITEACH" },
    title: { SK: "Marketingom som doslova vyrastal", EN: "I literally grew up with marketing", GA: "D'fhás mé aníos le margaíocht" },
    description: {
      SK: "Juraj Beliansky. V digitálnom biznise aktívny od 17 rokov. Bývalý špecialista v top PPC agentúrach. Zameriavam sa na 'pohľad majiteľa' - ROI a maržu.",
      EN: "Juraj Beliansky. Active in digital business since 17. Former specialist at top PPC agencies. I focus on ROI and margins.",
      GA: "Juraj Beliansky. Gníomhach i ngnó digiteach ó bhí sé 17 mbliana d'aois."
    },
    philosophy: {
      SK: "Nie sme najlepšia agentúra na svete. Sme ale rozumný partner pre váš rozpočet.",
      EN: "We aren't the best agency in the world. But we are a smart partner for your budget.",
      GA: "Ní muid an ghníomhaireacht is fearr ar domhan."
    }
  },
  services: {
    title: { SK: "Naše služby", EN: "Our Services", GA: "Ár Seirbhísí" },
    items: [
      { id: "ppc", SK: "PPC Reklama", EN: "PPC Advertising", GA: "Fógraíocht PPC", price: "500€+", desc: { SK: "FB, IG, TikTok, Google, YouTube.", EN: "FB, IG, TikTok, Google, YouTube.", GA: "FB, IG, TikTok, Google, YouTube." } },
      { id: "aoe", SK: "AOE / GEO Targeting", EN: "AOE / GEO Targeting", GA: "Spriocdhíriú AOE / GEO", price: "350€+", desc: { SK: "Viditeľnosť v AI vyhľadávačoch.", EN: "Visibility in AI search engines.", GA: "Infheictheacht in innill chuardaigh AI." } },
      { id: "web", SK: "E-shop & Web Dev", EN: "E-shop & Web Dev", GA: "Forbairt Ríomhthráchtála", price: "1500€+", desc: { SK: "Shoptet experti, čistý kód.", EN: "Shoptet experts, clean code.", GA: "Saineolaithe Shoptet." } }
    ]
  },
  portfolio: {
    title: { SK: "Prípadové štúdie", EN: "Case Studies", GA: "Staidéir Cháis" },
    clients: [
      { 
        name: "Protein.sk", 
        tag: "Market Leader / European Search Awards", 
        desc: { 
          SK: "Slovenský fit-shop exportovaný do CZ. Shortlist European Search Awards.",
          EN: "Slovak fit-shop exported to CZ. Shortlisted for European Search Awards.",
          GA: "Siopa aclaíochta Slóvacach onnmhairithe go CZ."
        },
        metrics: {
          SK: "Nominácia na European Search Awards 2026",
          EN: "European Search Awards 2026 Nominee",
          GA: "Ainmnithe do European Search Awards 2026"
        }
      }
    ]
  },
  contact: {
    title: { SK: "Poďme to postaviť", EN: "Let's build it", GA: "Tógfaimid é" },
    legal: { SK: "IČO: 57509808", EN: "ID: 57509808", GA: "IČO: 57509808" }
  }
};
