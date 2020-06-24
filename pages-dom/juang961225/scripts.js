const myUser = {
    displayName: "Juan Guillermo Galvez Valencia",
    userName: "@juang961225",
    image: "../juang961225/89352587_10220126186412259_8108744250205667328_n.jpg",
    role: "developer",
    socialMedia: [
    {
        name: "Github",
        icon: "fa-github",
        link: "https://github.com/juang961225"
    },
    {
        name: "Twitter",
        icon: "fa-twitter-square",
        link: "https://twitter.com/Juan73445582"
    },
    {
        name: "Instagram",
        icon: "fa-instagram",
        link: "https://www.instagram.com/juang961225/?hl=es-la"
    },
    ],
};

//Funcion que me cree elementos de tipo texto, y elementos de tipo link
function newElement(type, classes, content, config = {}) {
    let oneElement = document.createElement(type)
    oneElement.innerText = content
    if (config.href) {
        oneElement.href = config.href
    }else if (config.src) {
        oneElement.src = config.src
    };
    classes.forEach(className => {
        oneElement.classList.add(className)
        
    });
    return oneElement
}

function socialMedia(socialWeb) {
    // socialweb = {
    //     name: "Github",
    //     icon: "",
    //     link: "https://github.com/juang961225"
    // }
    //primer paso:crar un link como contenedor general
    let socialElement = newElement('a', ['socialweb'], '', {href:socialWeb.link});
    socialElement.setAttribute('target','_blank')
    socialElement.setAttribute('rel','noopener')
    //segundo paso: crar el nodo de texto
    let socialText = newElement('p', ['socialweb__text'], socialWeb.name);
    //tercer paso: crear el icono
    console.log(socialWeb.icon)
    let socialIcon = newElement('i', ['fa', socialWeb.icon, 'fa-3x'],'');
    //agregar los componentes
    socialElement.appendChild(socialIcon);
    socialElement.appendChild(socialText);
    return socialElement;
}

//contenedor principal
let profile = document.getElementById('profile');
//contenedor de la imagen
let blockPicture = newElement('div', ['block-picture'], null);
let img = newElement('img', ['block-picture__image'], 1, {src:'../juang961225/89352587_10220126186412259_8108744250205667328_n.jpg'})
let tag = newElement('div', ['block-picture__tag'], myUser.role)
//contenedor de la card
let blockCard = newElement('div', ['block-card'], null)
let cardTitle = newElement('h1', ['block-card__title'], myUser.displayName)
let userName = newElement('p', ['block-card__user-name'], myUser.userName);
//contenedor de las redes sociales dentro de la card
let containerSocial = newElement('div',['socialwebs'],null)
let socialNodes =  myUser.socialMedia.map(element => {
    return socialMedia(element)
});
let buttonCard = newElement('button', ['block-card__button'], 'SEND MESSAGE')
//eventListener
buttonCard.addEventListener('click',function () {
    buttonCard.classList.toggle(['block-card__button--style']);
    blockCard.classList.toggle(['block-card--style']);
});
// contenedor derecha
//redes sociales
socialNodes.forEach(element => {
    containerSocial.appendChild(element)
});
//informacion
blockCard.appendChild(cardTitle)
blockCard.appendChild(userName)
blockCard.appendChild(containerSocial)
blockCard.appendChild(buttonCard)
// contenedor izquierdo
blockPicture.appendChild(tag)
blockPicture.appendChild(img)
//principal
profile.appendChild(blockPicture)
profile.appendChild(blockCard)