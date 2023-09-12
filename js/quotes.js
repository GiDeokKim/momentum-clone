const quotes = [
    {
    quote: "It is the facts that matter, not the proofs. Physics can progress without the proofs, but we can’t go on without the facts.",
    author: "Richard P. Feynman.",
    },
    {
        quote: "It doesn’t matter how beautiful your theory is, it doesn’t matter how smart you are. If it doesn't agree with experiment, it’s wrong.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "A great deal more is known than has been proved.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "There is nothing that living things do that cannot be understood from the point of view that they are made of atoms acting according to the laws of physics.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "If science is to progress, what we need is the ability to experiment.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "Poets say science takes away from the beauty of the stars—mere globs of gas atoms. Nothing is 'mere.' I too can see the stars on a desert night, and feel them.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "You’re unlikely to discover something new without a lot of practice on old stuff, but further, you should get a heck of a lot of fun out of working out funny relations and interesting things.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "Scientific knowledge is an enabling power to do either good or bad — but it does not carry instructions on how to use it.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "Is science of any value? I think a power to do something is of value.",
        author: "Richard P. Feynman.",
    },
    {
        quote: "If there is something very slightly wrong in our definition of the theories, then the full mathematical rigor may convert these errors into ridiculous conclusions.",
        author: "Richard P. Feynman.",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;