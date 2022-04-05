const quotes = [
  { quote: "Always remember that you are absolutely unique. Just like everyone else.",
    author: "-Margaret Mead",
  },
  { quote: "Whoever is happy will make others happy too.",
    author: "-Anne Frank",
  },
  { quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "-Benjamin Franklin",
  },
  { quote: "The purpose of our lives is to be happy.",
    author: "-Dalai Lama",
  },
  { quote: "You only live once, but if you do it right, once is enough.",
    author: "-Mae West",
  },
  { quote: "Life is ours to be spent, not to be saved.",
    author: "-D. H. Lawrence",
  },
  { quote: "Life is a long lesson in humility.",
    author: "-James M. Barrie",
  },
  { quote: "Love the life you live. Live the life you love.",
    author: "-Bob Marley",
  },
  { quote: "If you really look closely, most overnight successes took a long time.",
    author: "-Steve Jobs",
  },
  { quote: "I find that the harder I work, the more luck I seem to have. ",
    author: "-Thomas Jefferson",
  }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;