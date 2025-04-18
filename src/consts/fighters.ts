import type { Fighters } from '@/types/fighters'

export const FIGHTERS: Fighters[] = [
  {
    // https://www.biografia.de/peereira/
    id: 'peereira',
    name: 'Peereira',
    realName: 'Pablo Pereira Ramos',
    gender: 'masculino',
    birthDate: new Date(1998, 11, 21),
    height: 1.67,
    age: 26,
    weight: 63,
    country: 'es',
    versus: 'rivaldios',
    socials: {
      twitch: 'https://www.twitch.tv/peereira7',
      youtube: 'https://www.youtube.com/channel/UCOBtOqxsioUI-fFykO2I4BQ',
      tiktok: 'https://www.tiktok.com/@peereira7',
      x: 'https://x.com/Peereira7',
    },
    clips: [],
  },
  {
    // https://laletrade.com/biografias/twitch/18087-perxitaa
    id: 'perxitaa',
    name: 'Perxitaa',
    realName: 'Jaume Cremades',
    gender: 'masculino',
    birthDate: new Date(1991, 6, 9),
    height: 1.86,
    age: 33,
    weight: 80,
    country: 'es',
    versus: 'gaspi',
    socials: {
      instagram: 'https://www.instagram.com/perxitaa',
      tiktok: 'https://www.tiktok.com/@srperxitaa',
      twitch: 'https://www.twitch.tv/perxitaa',
      x: 'https://x.com/perxitaa',
      youtube: 'https://www.youtube.com/@perxitaa',
    },
    clips: [],
  },
  {
    id: 'abby',
    name: 'Abby',
    realName: 'Abril Gené Capriles',
    gender: 'femenino',
    birthDate: new Date(2000, 11, 28),
    height: 1.72,
    age: 24,
    weight: 53,
    country: 'es',
    versus: 'roro',
    socials: {
      instagram: 'https://www.instagram.com/abbyimu/',
      twitch: 'https://www.twitch.tv/abby_',
      youtube: 'https://www.youtube.com/@abbyimu',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/roro/
    id: 'roro',
    name: 'Roro',
    realName: 'Rocío López Bueno',
    gender: 'femenino',
    birthDate: new Date(2002, 2, 1),
    height: 1.49,
    age: 23,
    weight: 50,
    country: 'es',
    versus: 'abby',
    socials: {
      instagram: 'https://www.instagram.com/whoisroro/',
      tiktok: 'https://www.tiktok.com/@roro.bueno',
      youtube: 'https://www.youtube.com/@roroobuenoo',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/gaspi/
    id: 'gaspi',
    name: 'Gaspi',
    realName: 'Gaspar Prim Díaz',
    gender: 'masculino',
    birthDate: new Date(2002, 11, 28),
    height: 1.87,
    age: 22,
    weight: 76,
    country: 'ar',
    versus: 'perxitaa',
    socials: {
      instagram: 'https://www.instagram.com/gaspipd/',
      x: 'https://x.com/gaspipd',
      youtube: 'https://www.youtube.com/GaspiPD',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/rivaldios/
    id: 'rivaldios',
    name: 'Rivaldios',
    realName: 'Rivaldo Reatiga Ojeda',
    gender: 'masculino',
    birthDate: new Date(2001, 1, 6),
    height: 1.7,
    age: 24,
    weight: 67,
    country: 'mx',
    versus: 'peereira',
    socials: {
      instagram: 'https://www.instagram.com/rivaldios10/',
      tiktok: 'https://www.tiktok.com/@rivaldios10',
      youtube: 'https://www.youtube.com/@Rivaldios-lacabra',
    },
    clips: [],
  },
  {
    id: 'andoni',
    name: 'Andoni',
    realName: 'Andoni Talledo Gutiérrez',
    gender: 'masculino',
    birthDate: new Date(2003, 0, 3),
    height: 1.87,
    age: 22,
    weight: 120,
    country: 'es',
    versus: 'carlos',
    socials: {
      instagram: 'https://www.instagram.com/andonifitness/',
      tiktok: 'https://www.tiktok.com/@andoonig',
      youtube: 'https://www.youtube.com/@AndoniFitness',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/viruzz/
    id: 'viruzz',
    name: 'Viruzz',
    realName: 'Víctor Mélida Cambra',
    gender: 'masculino',
    birthDate: new Date(1992, 4, 1),
    height: 1.82,
    age: 32,
    weight: 78,
    country: 'es',
    versus: 'tomas',
    socials: {
      instagram: 'https://www.instagram.com/victormelida/',
      tiktok: 'https://www.tiktok.com/@victormelida',
      twitch: 'https://www.twitch.tv/byViruZz',
      x: 'https://x.com/byViruZz',
      youtube: 'https://www.youtube.com/user/byViruZz',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/alana-flores/
    id: 'alana',
    name: 'Alana',
    realName: 'Alana Scarlett Flores',
    gender: 'femenino',
    birthDate: new Date(2000, 11, 15),
    height: 1.7,
    age: 24,
    weight: 55,
    country: 'mx',
    versus: 'arigeli',
    socials: {
      instagram: 'https://www.instagram.com/alanafloresf',
      twitch: 'https://www.twitch.tv/alanalarana',
      x: 'https://x.com/alanafloresf',
      youtube: 'https://www.youtube.com/@alanafloresf',
    },
    clips: [],
  },
  {
    // https://laletrade.com/biografias/youtuber/espanol/22589-thegrefg
    id: 'grefg',
    name: 'Grefg',
    realName: 'David Cánovas Martínez',
    gender: 'masculino',
    birthDate: new Date(1997, 3, 24),
    height: 1.8,
    age: 27,
    weight: 75,
    country: 'es',
    versus: 'westcol',
    socials: {
      instagram: 'https://www.instagram.com/TheGrefg/',
      tiktok: 'https://www.tiktok.com/@thegrefg?_t=8ffeaGxV7Lt&_r=1',
      twitch: 'https://www.twitch.tv/thegrefg',
      x: 'https://x.com/TheGrefg',
      youtube: 'https://www.youtube.com/@TheGrefg',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/westcol/
    id: 'westcol',
    name: 'Westcol',
    realName: 'Luis Fernando Villa Álvarez',
    gender: 'masculino',
    birthDate: new Date(2000, 11, 24),
    height: 1.65,
    age: 24,
    weight: 66,
    country: 'co',
    versus: 'grefg',
    socials: {
      instagram: 'https://www.instagram.com/westcol/',
      x: 'https://x.com/WestCOL',
      youtube: 'https://www.youtube.com/channel/UCEg_iK8FKwZfpRMn4-AnnnQ',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/ari-geli/
    id: 'arigeli',
    name: 'Arigeli',
    realName: 'Ariadna Geli',
    gender: 'femenino',
    birthDate: new Date(2002, 9, 11),
    height: 1.6,
    age: 22,
    weight: 52,
    country: 'es',
    versus: 'alana',
    socials: {
      instagram: 'https://www.instagram.com/arigelii/',
      tiktok: 'https://www.tiktok.com/@arigeli',
      youtube: 'https://www.youtube.com/@AriGeli',
    },
    clips: [],
  },
  {
    // https://www.biografia.de/tomas-mazza/
    id: 'tomas',
    name: 'Tomas',
    realName: 'Tomás Francisco Pérez Mazza',
    gender: 'masculino',
    birthDate: new Date(2000, 3, 16),
    height: 1.76,
    age: 25,
    weight: 84,
    country: 'ar',
    versus: 'viruzz',
    socials: {
      instagram: 'https://www.instagram.com/mazzatomas/',
      youtube: 'https://www.youtube.com/@tomasmazza',
    },
    clips: [],
  },
  {
    // https://laletrade.com/biografias/youtuber/19752-carlos-belcast
    id: 'carlos',
    name: 'Carlos',
    realName: 'Carlos Belcast',
    gender: 'masculino',
    birthDate: new Date(1998, 9, 5),
    height: 1.77,
    age: 26,
    weight: 78,
    country: 'mx',
    versus: 'andoni',
    socials: {
      instagram: 'https://www.instagram.com/carlosbelcast/',
    },
    clips: [],
  },
] as const
