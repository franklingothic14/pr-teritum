// Unregelmäßige Verben — Präteritum & Perfekt
// Gruppen nach Vokalwechsel-Muster

const verben = [

  // 1. Gruppe: ei → ie
  { infinitiv: "bleiben",    praeteritum: "blieb",     perfekt: "ist geblieben",    gruppe: "ei → ie" },
  { infinitiv: "schreiben",  praeteritum: "schrieb",   perfekt: "hat geschrieben",  gruppe: "ei → ie" },
  { infinitiv: "scheinen",   praeteritum: "schien",    perfekt: "hat geschienen",   gruppe: "ei → ie" },
  { infinitiv: "steigen",    praeteritum: "stieg",     perfekt: "ist gestiegen",    gruppe: "ei → ie" },

  // 2. Gruppe: i → a
  { infinitiv: "finden",     praeteritum: "fand",      perfekt: "hat gefunden",     gruppe: "i → a" },
  { infinitiv: "trinken",    praeteritum: "trank",     perfekt: "hat getrunken",    gruppe: "i → a" },
  { infinitiv: "singen",     praeteritum: "sang",      perfekt: "hat gesungen",     gruppe: "i → a" },
  { infinitiv: "beginnen",   praeteritum: "begann",    perfekt: "hat begonnen",     gruppe: "i → a" },
  { infinitiv: "gewinnen",   praeteritum: "gewann",    perfekt: "hat gewonnen",     gruppe: "i → a" },

  // 3. Gruppe: ie → o
  { infinitiv: "fliegen",    praeteritum: "flog",      perfekt: "ist geflogen",     gruppe: "ie → o" },
  { infinitiv: "ziehen",     praeteritum: "zog",       perfekt: "hat gezogen",      gruppe: "ie → o" },
  { infinitiv: "verlieren",  praeteritum: "verlor",    perfekt: "hat verloren",     gruppe: "ie → o" },
  { infinitiv: "frieren",    praeteritum: "fror",      perfekt: "ist gefroren",     gruppe: "ie → o" },

  // 4. Gruppe: e → a
  { infinitiv: "essen",      praeteritum: "aß",        perfekt: "hat gegessen",     gruppe: "e → a" },
  { infinitiv: "geben",      praeteritum: "gab",       perfekt: "hat gegeben",      gruppe: "e → a" },
  { infinitiv: "lesen",      praeteritum: "las",       perfekt: "hat gelesen",      gruppe: "e → a" },
  { infinitiv: "sehen",      praeteritum: "sah",       perfekt: "hat gesehen",      gruppe: "e → a" },
  { infinitiv: "nehmen",     praeteritum: "nahm",      perfekt: "hat genommen",     gruppe: "e → a" },
  { infinitiv: "sprechen",   praeteritum: "sprach",    perfekt: "hat gesprochen",   gruppe: "e → a" },
  { infinitiv: "treffen",    praeteritum: "traf",      perfekt: "hat getroffen",    gruppe: "e → a" },

  // 5. Gruppe: a → u
  { infinitiv: "fahren",     praeteritum: "fuhr",      perfekt: "ist gefahren",     gruppe: "a → u" },
  { infinitiv: "tragen",     praeteritum: "trug",      perfekt: "hat getragen",     gruppe: "a → u" },
  { infinitiv: "schlagen",   praeteritum: "schlug",    perfekt: "hat geschlagen",   gruppe: "a → u" },
  { infinitiv: "einladen",   praeteritum: "lud ein",   perfekt: "hat eingeladen",   gruppe: "a → u" },

  // 6. Gruppe: a → ie
  { infinitiv: "lassen",     praeteritum: "ließ",      perfekt: "hat gelassen",     gruppe: "a → ie" },
  { infinitiv: "raten",      praeteritum: "riet",      perfekt: "hat geraten",      gruppe: "a → ie" },
  { infinitiv: "schlafen",   praeteritum: "schlief",   perfekt: "hat geschlafen",   gruppe: "a → ie" },

  // 7. Gruppe: e → o
  { infinitiv: "helfen",     praeteritum: "half",      perfekt: "hat geholfen",     gruppe: "e → o" },
  { infinitiv: "sterben",    praeteritum: "starb",     perfekt: "ist gestorben",    gruppe: "e → o" },
  { infinitiv: "werfen",     praeteritum: "warf",      perfekt: "hat geworfen",     gruppe: "e → o" },

  // 8. Besondere Verben
  { infinitiv: "gehen",      praeteritum: "ging",      perfekt: "ist gegangen",     gruppe: "Besondere" },
  { infinitiv: "stehen",     praeteritum: "stand",     perfekt: "hat/ist gestanden",gruppe: "Besondere" },
  { infinitiv: "kommen",     praeteritum: "kam",       perfekt: "ist gekommen",     gruppe: "Besondere" },
  { infinitiv: "tun",        praeteritum: "tat",       perfekt: "hat getan",        gruppe: "Besondere" },
  { infinitiv: "sein",       praeteritum: "war",       perfekt: "ist gewesen",      gruppe: "Besondere" },
  { infinitiv: "werden",     praeteritum: "wurde",     perfekt: "ist geworden",     gruppe: "Besondere" },

  // 9. Mischverben
  { infinitiv: "wissen",     praeteritum: "wusste",    perfekt: "hat gewusst",      gruppe: "Mischverben" },
  { infinitiv: "kennen",     praeteritum: "kannte",    perfekt: "hat gekannt",      gruppe: "Mischverben" },
  { infinitiv: "nennen",     praeteritum: "nannte",    perfekt: "hat genannt",      gruppe: "Mischverben" },
  { infinitiv: "denken",     praeteritum: "dachte",    perfekt: "hat gedacht",      gruppe: "Mischverben" },
  { infinitiv: "bringen",    praeteritum: "brachte",   perfekt: "hat gebracht",     gruppe: "Mischverben" },
  { infinitiv: "verbringen", praeteritum: "verbrachte",perfekt: "hat verbracht",    gruppe: "Mischverben" },
];
