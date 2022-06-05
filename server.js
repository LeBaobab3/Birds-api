const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const birds = {
  robin: {
    speciesName: "Robin",
    family: "Thrushes",
    habitat:
      "Cities, towns, lawns, farmland, forests; in winter, berry bearing trees.",
    interestingFact:
      "The American Robin is a known carrier for the West Nile virus. The Robin is able to hold the virus longer than other species, hence spreading it to more mosquitoes",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/3248_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  bluebird: {
    speciesName: "Bluebird",
    family: "Thrushes",
    habitat: "Open country with scattered trees; farms, roadsides.",
    interestingFact:
      "Male Eastern bluebirds do not open their beaks widely when they sing, unlike some other songbirds like a Meadowlark.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/038_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  cardinal: {
    speciesName: "Cardinal",
    family: "Cardinals, Grosbeak and Buntings",
    habitat:
      "Woodland edges, thickets, suburban gardens, towns and desert washes.",
    interestingFact:
      "Unlike most birds, both sexes of the cardinal are excellent songbirds. It is one of the few birds that not only mate for life but stays with its mate all year. ",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/4387_Sibl_9780307957900_art_r1.jpg?tok=1626941160",
  },
  swallow: {
    speciesName: "Swallow",
    family: "Swallow",
    habitat: "Near water, fields, marshes, streams, and lakes",
    interestingFact:
      "Swallows are capable of walking and even running, but they do so with a shuffling, waddling gait.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/2955_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  finch: {
    speciesName: "Goldfinch",
    family: "Finch",
    habitat: "Patches of thistles and weeds, roadsides, open woods, edges",
    interestingFact:
      "American Goldfinches use a four-syllable call when they’re ready to take flight. If you listen closely, it sounds like the birds are saying “po-ta-to-chip”. Both male and female Goldfinches use that call. ",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/4995_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  woodpecker: {
    speciesName: "Woodpecker",
    family: "Woodpeckers",
    habitat:
      "Groves, farm country, orchards, shade trees in towns, large scattered trees",
    interestingFact:
      "Woodpeckers have a special bone in their head called the hyoid bone. This special bone unique to woodpeckers wraps around their entire skull inside their heads and adds a sort of shock protection.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/1994_Sibl_9780307957900_art_r1_0.jpg?tok=1651732317",
  },
  dove: {
    speciesName: "Dove",
    family: "Pigeons and Doves",
    habitat: "Farms, towns, open woods, roadsides, grasslands",
    interestingFact:
      "Mourning doves have been clocked at 55 mph during flight.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/2829_Sibl_9780307957900_art_r1.jpg?tok=1648708358",
  },
  bluejay: {
    speciesName: "Blue Jay",
    family: "Crows, Magpies, Jay",
    habitat: "Oak and pine woods, suburban gardens, groves, towns",
    interestingFact:
      "Female and make blue jays look the same. This is a rare characteristic among birds, and it is called sexual monomorphism, meaning the males and females look the same. ",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/5504_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  sparrow: {
    speciesName: "Sparrow",
    family: "New World Sparrows",
    habitat:
      "Thickets, brush, marshes, roadsides, gardens. Habitat varies over its wide range.",
    interestingFact:
      "These North American birds are largely solitary in nature. This means that the song sparrows generally live alone and cannot be seen gathering in large groups or flocks. They can however be seen pairing up during the mating season.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/6532_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  blackbird: {
    speciesName: "Blackbird",
    family: "Blackbirds and Orioles",
    habitat:
      "Breeds in marshes, brushy swamps, hayfields, forages also in cultivated land and along edges of water",
    interestingFact:
      "Blackbirds are highly territorial. Up to a quarter of a blackbirds day is spent monitoring area boundaries and accosting intruders.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/5398_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  crow: {
    speciesName: "Crow",
    family: "Crows, Magpies, Jays",
    habitat: "Woodlands, farms, fields, and rivers, groves, shores, towns.",
    interestingFact:
      "Crows have huge brains! They have the largest brain to body ratio of any bird. Their brain to body ration is even bigger than humans.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/4534_Sibl_9780307957900_art_r1.jpg?tok=1654151736",
  },
  goose: {
    speciesName: "Goose",
    family: "Ducks and Geese",
    habitat: "Lakes, ponds, bays, marshes, fields",
    interestingFact:
      "Canada geese usually fly in a large V-shaped formation, with one bird in the lead and the others trailing behind it in two diverging lines. This shapes makes the flock more energetically effiecient and makes visual contact and communication easier",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/660_Sibl_9780307957900_art_r1.jpg?tok=1651732317",
  },
  starling: {
    speciesName: "Starling",
    family: "Starling and Mynas",
    habitat: "Cities, parks, farms, open groves, fields",
    interestingFact:
      "Starlings can create a “murmuration” when huge groups of these birds gather together, moving in one large mass across the sky. They do not simply fly in a flock. They twist and turn into all different shapes.",
    image:
      "https://nas-national-prod.s3.amazonaws.com/styles/api_bird_illustration_with_crop_193_200/public/birds/illustration/3047_Sibl_9780307957900_art_r1.jpg?tok=1626941160",
  },
};

app.get("/", (request, response) => {
  //Above is a lovely callback. looks like an event listener. It fires a function below
  response.sendFile(__dirname + "/index.html"); // we have to tell the server where to start looking for the index.html. _dirname is the root.
});

app.get("/api/:birdName", (request, response) => {
  const birdsName = request.params.birdName.toLowerCase();
  if (birds[birdsName]) {
    response.json(birds[birdsName]);
  } else {
    response.json(birds["robin"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on port ${PORT}! You better go catch it!`);
});
