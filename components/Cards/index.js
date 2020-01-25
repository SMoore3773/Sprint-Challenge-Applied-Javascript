// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((result) => {
    
        console.log(result.data);
        console.log(result.data.articles);

        Object.keys(result.data.articles).forEach(key =>{

            const articlesByKey = result.data.articles[key]
            console.log(key,articlesByKey);
            
            articlesByKey.forEach(item =>{
                cardContainer.appendChild(cardMaker(item))
            })
        })
        
        })
 
    
    .catch((err) => {
        console.log('Error:',err);
    });

function cardMaker(cardSrc) {

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorCont = document.createElement('div');
    const imgCont = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(authorCont);
    authorCont.appendChild(imgCont);
    imgCont.appendChild(img);
    authorCont.appendChild(author);

    card.classList.add('card');
    headline.classList.add('headline');
    authorCont.classList.add('author');
    imgCont.classList.add('img-container');

    headline.textContent = cardSrc.headline;
    img.src = cardSrc.authorPhoto;
    author.textContent = cardSrc.authorName;
    
    return card;
}