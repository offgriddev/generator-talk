/**
 * Use Case: Complex or expensive Generation of Arrays
 */

const opinionatedListOfGreatArtists = [
  { name: 'boards-of-canada', genre: 'idm' },
  { name: 'aphex-twin', genre: 'braindance' },
  { name: 'jogging-house', genre: 'ambient' },
  { name: 'hainbach', genre: 'experimental' },
  { name: 'hotel-pools', genre: 'vaporwave' },
  { name: 'tangerine-dream', genre: 'progressive' },
];

const longRunningTask = () => new Promise((res) => {
  setTimeout(() => res('it took me some time to do this'), 1000)
});

// get data from different sources
const getOurData = () => (
  Promise.all(
    [
      longRunningTask(),
      longRunningTask(),
      longRunningTask(),
    ]
  )
);

getOurData()
  .then(([data1, data2, data3]) => {

  })
