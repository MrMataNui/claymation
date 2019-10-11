interface AllDates {
  y2019: { id: string; name: string; selected?: boolean }[];
  y2020?: { id: string; name: string; selected?: boolean }[];
}

interface MonthFind {
  date: string;
  desc: string;
  src: string;
  srcId: string;
  desc2?: string;
  src2?: string;
  src2Id?: string;
}

interface GetMonths {
  jan2019: MonthFind[];
  mar2019: MonthFind[];
  may2019: MonthFind[];
  aug2019: MonthFind[];
  sep2019: MonthFind[];
}

export const datesId: AllDates = {
  y2019: [
    { id: '2019jan', name: 'January', selected: true },
    { id: '2019mar', name: 'March' },
    { id: '2019may', name: 'May' },
    { id: '2019aug', name: 'August' },
    { id: '2019sep', name: 'September' }
  ]
};

const baseSrc = (name: string) => `assets/images/${name}.jpg`;

export const getMonths: GetMonths = {
  jan2019: [
    {
      date: 'January 28',
      desc:
        'This is my attempt at <q>Popo</q> from the game <q>Ice Climbers</q>.',
      src: baseSrc('Ice Climbers/ice-climber'),
      srcId: 'ice-climbers'
    }
  ],
  mar2019: [
    {
      date: 'March 15',
      desc: 'First draft of a pineapple man',
      src: baseSrc('pineapple-man'),
      srcId: 'pineapple-man'
    }
  ],
  may2019: [
    {
      date: 'May 2',
      desc: 'Updated arms of the pineapple man',
      src: baseSrc('pineapple-man2'),
      srcId: 'pineapple-man2',
      desc2: 'Made a pine tree',
      src2: baseSrc('sir-pine'),
      src2Id: 'sir-pine'
    },
    {
      date: 'May 29',
      desc: 'Started testing with four-armed characters',
      src: baseSrc('four-arm-progress'),
      srcId: 'four-armed-test'
    }
  ],
  aug2019: [
    {
      date: 'August 5',
      desc: 'Finished the four-armed test character',
      src: baseSrc('four-arms'),
      srcId: 'four-armed-test2'
    },
    {
      date: 'August 25',
      desc: 'Created a sea creature character',
      src: baseSrc('sea-creature'),
      srcId: 'sea-creature',
      desc2: 'The sea creature character next to the initial draft',
      src2: baseSrc('sea-creature-initial'),
      src2Id: 'sea-creature-initial'
    }
  ],
  sep2019: [
    {
      date: 'September 3',
      desc: 'Added a character with a liquid underside (Morgan)',
      src: baseSrc('Morgan'),
      srcId: 'morgan'
    },
    {
      date: 'September 26',
      desc: 'Redid Morgan with oven-bake clay',
      src: baseSrc('improved-Morgan'),
      srcId: 'improved-morgan'
    }
  ]
};
