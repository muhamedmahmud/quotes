var quotes = [
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "--ainstien",
  },
  { quote: "“So many books, so little time.”", author: "--Frank Zappa" },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "--Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "--Mae West",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    author: "--Elbert Hubbarda",
  },
  {
    quote: "“و تحسب أنك جِرم صغير و فيك انطوى العالم الأكبر”",
    author: "ابن عربي --",
  },
  {
    quote: "“وتشكي لمين يا جريح والناس كلها مجاريح”",
    author: "حمادة الاسمر--",
  },
  {
    quote: "“الخيل والليل والبيداء تعرفني والسيف والرمح والقرطاس والقلم”",
    author: "المتنبي--",
  },
  {
    quote: "“الزمانُ مكانٌ سائلٌ، والمكانُ زمانٌ متجمِّد.”",
    author: "ابن عربي--",
  },
  {
    quote: "“ما من جريمة كاملة في هذا العصر سوى أن يولد الإنسان عربياً ”",
    author: "محمد تامتغوط--",
  },
];
var y=-1;
function quoteDisplay() {
  var element = document.getElementById("myQuote");
  
  var x=Math.floor(Math.random() * quotes.length);

  if(x!=y)
    {
      var quote = quotes[x];
      element.innerHTML = `
      <p>${quote.quote}</p>
      <p>${quote.author}</p>
        `;
      y=x;
    }
    else{
      quoteDisplay();
    }
  }