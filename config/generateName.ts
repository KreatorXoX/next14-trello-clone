const pronouns: string[] = [
  "Silly",
  "Wacky",
  "Whimsical",
  "Goofy",
  "Zany",
  "Kooky",
  "Hilarious",
  "Absurd",
  "Ridiculous",
  "Outlandish",
  "Eccentric",
  "Quirky",
  "Laughable",
  "Comical",
  "Farcical",
  "Amusing",
  "Mirthful",
  "Jocular",
  "Ludicrous",
  "Chuckling",
  "Giggly",
  "Bizarre",
  "Hysterical",
  "Nonsensical",
  "Hilarious",
  "Zesty",
  "Jolly",
  "Merry",
  "Playful",
  "Flippant",
  "Droll",
  "Far-fetched",
  "Giddy",
  "Gleeful",
  "Hilarious",
  "Ticklish",
  "Hysterical",
  "Lighthearted",
  "Riotous",
  "Surreal",
  "Witty",
  "Absurd",
  "Bonkers",
  "Daffy",
  "Frolicsome",
  "Inane",
  "Kookaburra",
  "Lighthearted",
  "Malarkey",
  "Noodlehead",
  "Oblong",
  "Peculiar",
  "Quixotic",
  "Rambunctious",
  "Sasquatch",
  "Topsy-turvy",
  "Ubiquitous",
  "Vexing",
  "Whirligig",
  "Xenophobe",
  "Yippee",
  "Zigzag",
  "Bamboozle",
  "Cuckoo",
  "Dingbat",
  "Flibbertigibbet",
  "Gobbledygook",
  "Hobnob",
  "Igloo",
  "Jabberwocky",
  "Klutz",
  "Lollygag",
  "Mumbo-jumbo",
  "Nincompoop",
  "Ooey-gooey",
  "Pollywog",
  "Quizzaciously",
  "Razzmatazz",
  "Skedaddle",
  "Tittle-tattle",
  "Umpteen",
  "Vamoose",
  "Whatchamacallit",
  "Xenophobia",
  "Yowza",
  "Zoinks",
  "Brouhaha",
  "Caterwaul",
  "Dunderhead",
  "Fiddle-faddle",
  "Gobbledygook",
  "Hullabaloo",
  "Incogitable",
  "Jiggery-pokery",
  "Kerfuffle",
  "Lollygag",
  "Mollycoddle",
  "Noodledoodle",
  "Okey-dokey",
  "Prestidigitation",
  "Quixotry",
  "Rigamarole",
  "Skedaddle",
  "Tittle-tattle",
  "Umbra",
  "Vorpal",
  "Whizbang",
  "Xenomorphic",
  "Yaffle",
  "Zephyr",
  "Balderdash",
  "Cacophony",
  "Doozy",
  "Ephemeral",
  "Fiddlesticks",
  "Gobbledygook",
  "Helter-skelter",
  "Ineffable",
  "Jabberwock",
  "Kaleidoscope",
  "Lackadaisical",
  "Mollycoddle",
  "Noodle",
  "Oodles",
  "Pandemonium",
  "Quicksilver",
  "Rhubarb",
  "Skullduggery",
  "Thingamajig",
  "Umami",
  "Vortex",
  "Whiz-bang",
  "Xylophone",
  "Yahoo",
  "Zigzagging",
  "Ballyhoo",
  "Cattywampus",
  "Doozie",
  "Ebullient",
  "Fandango",
  "Gobbledygook",
  "Higgledy-piggledy",
  "Inexplicable",
  "Jibber-jabber",
  "Kerplunk",
  "Lollygagger",
  "Mollywhop",
  "Noodle-brain",
  "Oomph",
  "Pandemonium",
  "Quintessential",
  "Rigmarole",
  "Skullduggery",
  "Thingamajig",
  "Umpteen",
  "Voracious",
  "Whatchamacallit",
  "Xylophone",
  "Yabba-dabba-doo",
  "Zigzagged",
];

const nouns: string[] = [
  "Banana",
  "Penguin",
  "Spatula",
  "Giraffe",
  "Pajamas",
  "Toaster",
  "Platypus",
  "Unicorn",
  "Pickle",
  "Noodle",
  "Llama",
  "Narwhal",
  "Trombone",
  "Pancake",
  "Flamingo",
  "Kangaroo",
  "Sausage",
  "Pirate",
  "Squirrel",
  "Cucumber",
  "Hippopotamus",
  "Octopus",
  "Marshmallow",
  "Bumblebee",
  "Pineapple",
  "Wombat",
  "Gazelle",
  "Accordion",
  "Kazoo",
  "Toucan",
  "Koala",
  "Lobster",
  "Sasquatch",
  "Walrus",
  "Yeti",
  "Leprechaun",
  "Tornado",
  "Zebra",
  "Robot",
  "Bulldozer",
  "Gorilla",
  "Panda",
  "Kettle",
  "Mermaid",
  "Rainbow",
  "Tiger",
  "Rocket",
  "Elephant",
  "Donut",
  "Ninja",
  "Vampire",
  "Wizard",
  "Pegasus",
  "Dinosaur",
  "Dragon",
  "Alien",
  "Lighthouse",
  "Caterpillar",
  "Jellyfish",
  "Zombie",
  "Sphinx",
  "Kraken",
  "Sorcerer",
  "Phoenix",
  "Valkyrie",
  "Werewolf",
  "Thunderstorm",
  "Hedgehog",
  "Salamander",
  "Goblin",
  "Mummy",
  "Chimera",
  "Hydra",
  "Cyclops",
  "Siren",
  "Minotaur",
  "Griffin",
  "Yeti",
  "Chupacabra",
  "Banshee",
  "Poltergeist",
  "Witch",
  "Fairy",
  "Troll",
  "Ghost",
  "Voodoo",
  "Sasquatch",
  "Gnome",
  "Bigfoot",
  "Pumpkin",
  "Marshmallow",
  "Chocolate",
  "Gummybear",
  "Lollipop",
  "Cotton candy",
  "Caramel",
  "Bubblegum",
  "Licorice",
  "Peanut",
  "Jellybean",
  "Cheesecake",
  "Popcorn",
  "Soda",
  "Pretzel",
  "Muffin",
  "Cupcake",
  "Brownie",
  "Cookie",
  "Pudding",
  "Sundae",
  "Waffle",
  "Pancake",
  "Syrup",
  "Milkshake",
  "Smoothie",
  "Ice cream",
  "Caramel",
  "Donut",
  "Candy cane",
  "Gingerbread",
  "Fudge",
  "Rock candy",
  "Tootsie roll",
  "Candy corn",
  "Sherbet",
  "Sherlock Holmes",
  "Dracula",
  "Frankenstein",
  "Marilyn Monroe",
  "Charlie Chaplin",
  "Albert Einstein",
  "Cleopatra",
  "Mona Lisa",
  "Leonardo da Vinci",
  "Vincent van Gogh",
  "Pablo Picasso",
  "Isaac Newton",
  "Wolfgang Mozart",
  "Elvis Presley",
  "John Lennon",
  "Marilyn Manson",
  "Frida Kahlo",
  "Salvador Dali",
  "Amelia Earhart",
  "J.K. Rowling",
  "William Shakespeare",
  "Homer Simpson",
  "Darth Vader",
  "Indiana Jones",
  "Sherlock Holmes",
  "Gandalf",
  "Harry Potter",
  "Luke Skywalker",
  "Yoda",
  "Dumbledore",
  "Wolverine",
  "Spider-Man",
  "Superman",
  "Batman",
  "Wonder Woman",
  "The Hulk",
  "Thor",
  "Captain America",
  "Black Widow",
];

export const generateFunnyName = () => {
  const pronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${pronoun} ${noun}`;
};