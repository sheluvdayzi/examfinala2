const articlesPlats = [ // 
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

for(let i = 0; i < articlesPlats.length; i++){
    let h3Created = document.createElement("h3");
    let textCreated = document.createElement("p");
    let imgCreated = document.createElement("img");
    let articleCreated = document.createElement("article");
    let divImgContain = document.createElement("div");
    h3Created.className = 'titleCard';
    textCreated.className = 'textCard';
    imgCreated.className = 'imgCard';
    articleCreated.className = 'containCard';
    divImgContain.className = 'imgContain'
    imgCreated.setAttribute('src', articlesPlats[i].imgSrc);
    imgCreated.setAttribute('alt', articlesPlats[i].alt);
    h3Created.textContent = articlesPlats[i].title;
    textCreated.textContent = articlesPlats[i].text;
    cartePlats.appendChild(articleCreated);
    articleCreated.appendChild(h3Created);
    articleCreated.appendChild(textCreated);
    // articleCreated.appendChild(imgCreated);
    articleCreated.appendChild(divImgContain);
    divImgContain.appendChild(imgCreated);
}