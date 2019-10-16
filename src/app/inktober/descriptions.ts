const baseSrc = (day: number, name: string): string =>
  `assets/images/Inktober/2019_Inktober_Day_${day}_${name}.jpg`;
const img1 = (day: number, name: string): string =>
  `assets/images/Inktober/2019_Inktober_Day_${day}_${name}_1.jpg`;
const img2 = (day: number, name: string): string =>
  `assets/images/Inktober/2019_Inktober_Day_${day}_${name}_2.jpg`;

interface PromptDays {
  prompt: string;
  description: string;
  imgSrc: string;
  imgSrc2?: string;
}

interface AllPrompts {
  [propName: string]: PromptDays;
}

export const prompts: AllPrompts = {
  day1: {
    prompt: 'Ring',
    description:
      'I had used this to improve sculpting hands (and wrists to an extent) and trying to add smaller details.',
    imgSrc: baseSrc(1, 'Ring')
  },
  day2: {
    prompt: 'Mindless',
    description:
      'I had used this to improve sculpting heads and trying different eye shapes.',
    imgSrc: baseSrc(2, 'Mindless')
  },
  day3: {
    prompt: 'Bait',
    description:
      'I tried to play off the phrase <q>bait and switch</q> byhaving a Nintendo Switch as bait.',
    imgSrc: baseSrc(3, 'Bait')
  },
  day4: {
    prompt: 'Freeze',
    description: 'I tried doing a stopwatch.',
    imgSrc: baseSrc(4, 'Freeze')
  },
  day5: {
    prompt: 'Build',
    description:
      'I just went with Mario Maker because I couldn\'t think of anything else that I could do at my skill level.',
    imgSrc: baseSrc(5, 'Build')
  },
  day6: {
    prompt: 'Husky',
    description:
      'I couldn\'t think of a convincing way to do Husky, so I just did these two.',
    imgSrc: img1(6, 'Husky'),
    imgSrc2: img2(6, 'Husky')
  },
  day7: {
    prompt: 'Enchanted',
    description:
      'I decided to do a Spellbook as a practice for books and having them be propped up.',
    imgSrc: baseSrc(7, 'Enchanted')
  },
  day8: {
    prompt: 'Frail',
    description: 'I tried do a broken heart.',
    imgSrc: baseSrc(8, 'Frail')
  },
  day9: {
    prompt: 'Swing',
    description: 'I wanted to do my instrument, the trombone.',
    imgSrc: baseSrc(9, 'Swing')
  },
  day10: {
    prompt: 'Pattern',
    description: 'I was going for a plaid design',
    imgSrc: baseSrc(10, 'Pattern')
  },
  day11: {
    prompt: 'Snow',
    description: 'This is a simple snowflake',
    imgSrc: baseSrc(11, 'Snow')
  },
  day12: {
    prompt: 'Dragon',
    description: 'This allowed me to test crafting wings',
    imgSrc: baseSrc(12, 'Dragon')
  },
  day13: {
    prompt: 'Ash',
    description: 'I was trying for a decaying hand',
    imgSrc: baseSrc(13, 'Ash')
  },
  day14: {
    prompt: 'Overgrown',
    description: 'I was using day 13\'s prompt and adding plant-like additions',
    imgSrc: baseSrc(14, 'Overgrown')
  },
  day15: {
    prompt: 'Legend',
    description: 'I was going for Soul Eater\'s <q>excalibur</q>',
    imgSrc: baseSrc(15, 'Legend')
  },
  day16: {
    prompt: 'Wild',
    description: '',
    imgSrc: baseSrc(16, 'Wild')
  },
  day17: {
    prompt: 'Ornament',
    description: '',
    imgSrc: baseSrc(17, 'Ornament')
  },
  day18: {
    prompt: 'Misfit',
    description: '',
    imgSrc: baseSrc(18, 'Misfit')
  },
  day19: {
    prompt: 'Sling',
    description: '',
    imgSrc: baseSrc(19, 'Sling')
  },
  day20: {
    prompt: 'Tread',
    description: '',
    imgSrc: baseSrc(20, 'Tread')
  },
  day21: {
    prompt: 'Treasure',
    description: '',
    imgSrc: baseSrc(21, 'Treasure')
  },
  day22: {
    prompt: 'Ghost',
    description: '',
    imgSrc: baseSrc(22, 'Ghost')
  },
  day23: {
    prompt: 'Ancient',
    description: '',
    imgSrc: baseSrc(23, 'Ancient')
  },
  day24: {
    prompt: 'Dizzy',
    description: '',
    imgSrc: baseSrc(24, 'Dizzy')
  },
  day25: {
    prompt: 'Tasty',
    description: '',
    imgSrc: baseSrc(25, 'Tasty')
  },
  day26: {
    prompt: 'Dark',
    description: '',
    imgSrc: baseSrc(26, 'Dark')
  },
  day27: {
    prompt: 'Coat',
    description: '',
    imgSrc: baseSrc(27, 'Coat')
  },
  day28: {
    prompt: 'Ride',
    description: '',
    imgSrc: baseSrc(28, 'Ride')
  },
  day29: {
    prompt: 'Injured',
    description: '',
    imgSrc: baseSrc(29, 'Injured')
  },
  day30: {
    prompt: 'Catch',
    description: '',
    imgSrc: baseSrc(30, 'Catch')
  },
  day31: {
    prompt: 'Ripe',
    description: '',
    imgSrc: baseSrc(31, 'Ripe')
  }
};
