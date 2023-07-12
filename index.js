const quotes = document.querySelector('#quote');
const author = document.querySelector('#author');
const newQuote = document.querySelector("#newQuote");
const tweetMe = document.querySelector('#tweetMe')


  let realData="";
  let quotesData="";
 
  const tweetNow = ()=>{
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}${quotesData.author}`;
    window.open(tweetPost);

  }
  const getNewQuotes = () => {
  const rnum = Math.floor(Math.random() * 20);
  quotesData =  realData[rnum]
  quotes.innerHTML = `${quotesData.text}`;
  quotesData.author === null
    ? (author.innerHTML = 'Unknown')
    : (author.innerHTML = `--${quotesData.author}`);
  
};
const getQuotes = async () => {
  try{
    const api = "https://type.fit/api/quotes";
    let  data = await fetch(api);
    realData = await data.json();
    getNewQuotes();
  } catch {

  }
};
tweetMe.addEventListener('click',tweetNow)
newQuote.addEventListener("click",getNewQuotes);
getQuotes();
