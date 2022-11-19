import { CONFIG } from './config'

export const ORTHOGRAPHY = [
"a",
"e",
"i",
"ï",
"o",
"u",
"p",
"p'",
"t",
"t'",
"k",
"k'",
"ku",
"k'u",
"ts",
"ts'",
"ch",
"ch'",
"x",
"m",
"n",
"nh",
"w",
"y",
"j",
"r",
"rh",
"s",
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
