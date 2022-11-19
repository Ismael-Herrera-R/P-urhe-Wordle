import { CONFIG } from './config'

export const WORDS = [
  "apopu",
  "tumpi",
  "iuiri",
  "ukata", //lleva tilde
  "kuimu", //lleva tilde
  "uichu", //lleva tilde
  "mistu", //lleva tilde
  "auani",
  "axuni",
  "kuinu", //lleva tilde
  "taati", //lleva tilde
  "uampa", //lleva tilde
  "tempa", //lleva tilde
  "atache", //lleva tilde
  "jaasï", //lleva tilde
  "xakua", //lleva tilde
  "k'ekua", //lleva tilde
  "tekua", //lleva tilde
  "urape",
  "ireta",
  "pakua", //lleva tilde
  "iuini",
  "exeni",
  "atani",
  "jucha",
  "mánta", //lleva tilde
  "t'anta",
  "notki", //lleva tilde
  "iosti", //lleva tilde
  "kosti" //lleva tilde
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
