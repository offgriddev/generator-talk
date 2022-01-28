/**
 * Alternatives to Generators
 */

// any looping construct is an alternative to generators
// generators are just another way to construct loops

const opinionatedListOfGreatArtists = [
  { name: 'boards-of-canada', genre: 'idm' },
  { name: 'aphex-twin', genre: 'braindance' },
  { name: 'jogging-house', genre: 'ambient' },
  { name: 'hainbach', genre: 'experimental' },
  { name: 'hotel-pools', genre: 'vaporwave' },
  { name: 'tangerine-dream', genre: 'progressive' },
];

// always runs to completion
const mapExample = opinionatedListOfGreatArtists.map(({ genre }) => genre);

// will 'yield' a result for every genre
function * getAllGenre() {
  let i = 0;
  while (i < opinionatedListOfGreatArtists.length) {
    // even while looping or spreading the iterator
    // the break in execution still occurs
    yield opinionatedListOfGreatArtists[i].genre;
    i += 1;
  }
  // you cannot      : yield opinionatedListOfGreatArtists.map(({ genre }) => yield genre);
  // neither can you : yield opinionatedListOfGreatArtists.map(function * ({ genre }) { yield genre });
}

const generatorExample = [...getAllGenre()];
