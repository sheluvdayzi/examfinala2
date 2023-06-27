const articlesPlats = [
    {
    imgSrc: "assets/img/img-01.jpg",
    alt: "photo de plat",
    title: "UN SUPER TITRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae quis deleniti, explicabo obcaecati cumque quibusdam solut perspiciatis earum consectetur eaque beatae ab? Quam et iure asperiores! Ad, asperiores consequatur."
},
{
    imgSrc: "assets/img/img-02.jpg",
    alt: "photo de plat",
    title: "UN SUPER TITRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae quis deleniti, explicabo obcaecati cumque quibusdam solut perspiciatis earum consectetur eaque beatae ab? Quam et iure asperiores! Ad, asperiores consequatur."
},
{
    imgSrc: "assets/img/img-03.jpg",
    alt: "photo de plat",
    title: "UN SUPER TITRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae quis deleniti, explicabo obcaecati cumque quibusdam solut perspiciatis earum consectetur eaque beatae ab? Quam et iure asperiores! Ad, asperiores consequatur."
},
{
    imgSrc: "assets/img/img-04.jpg",
    alt: "photo de plat",
    title: "UN SUPER TITRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae quis deleniti, explicabo obcaecati cumque quibusdam solut perspiciatis earum consectetur eaque beatae ab? Quam et iure asperiores! Ad, asperiores consequatur."
},
{
    imgSrc: "assets/img/img-05.jpg",
    alt: "photo de plat",
    title: "UN SUPER TITRE",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum recusandae quis deleniti, explicabo obcaecati cumque quibusdam solut perspiciatis earum consectetur eaque beatae ab? Quam et iure asperiores! Ad, asperiores consequatur."
}
];

let cartePlats = document.querySelector('#cartePlats');
let articleContain = document.querySelector('#articleContain');

for(let i = 0; i < articlesPlats.length; i++){
    let h3Created = document.createElement("h3");
    let textCreated = document.createElement("p");
    let imgCreated = document.createElement("img");
    let articleCreated = document.createElement("article");
    let divImgContain = document.createElement("div");
    let divPH3Contain = document.createElement("div");
    h3Created.className = 'titleCard';
    textCreated.className = 'textCard';
    imgCreated.className = 'imgCard';
    articleCreated.className = 'containCard';
    divImgContain.className = 'imgContain';
    divPH3Contain.className = 'divPH3Contain';
    imgCreated.setAttribute('src', articlesPlats[i].imgSrc);
    imgCreated.setAttribute('alt', articlesPlats[i].alt);
    h3Created.textContent = articlesPlats[i].title;
    textCreated.textContent = articlesPlats[i].text;
    cartePlats.appendChild(articleCreated);
    articleContain.appendChild(articleCreated);
    articleCreated.appendChild(divImgContain);
    divImgContain.appendChild(imgCreated);
    articleCreated.appendChild(h3Created);
    articleCreated.appendChild(textCreated);
    articleCreated.appendChild(divPH3Contain);
    divPH3Contain.appendChild(h3Created);
    divPH3Contain.appendChild(textCreated);
}


let darkButton = document.querySelector('#darkButton');
let clickDark = document.querySelector('.clickDark');

darkButton.addEventListener('click', () => {
    clickDark.style.display = 'flex';
});