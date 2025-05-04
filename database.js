//Temporary Database

let Book = [
    {
        ISBN:"12345ONE",
        title: "Getting started with MERN",
        authors: [1,2],
        language: "en",
        pubDate: "2021-07-07",
        numofPage: 225,
        category:["fiction", "programming", "tech", "web dev"],
        publication: 1,
    },
    {
        ISBN:"12345TWO",
        title: "Getting started with Python",
        authors: [1,2],
        language: "en",
        pubDate: "2021-07-07",
        numofPage: 225,
        category:["fiction", "programming", "tech", "web dev"],
        publication: 1,
    },
];

let Author = [
    {
        id: 1,
        name: "Pavan",
        books: ["12345ONE", "12345TWO"]
    },
    {
        id: 2,
        name: "Deepak",
        books: ["12345ONE"]
    },
];

let Publication = [
    {
        id: 1,
        name: "Chakra",
        books: ["12345ONE"]
    },
    {
        id: 2,
        name: "Thakur Publications",
        books: []
    }
];

