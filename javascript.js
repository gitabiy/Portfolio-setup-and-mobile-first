const hamburger = document.querySelector('.hamburger');
const navMenu1 = document.querySelector('.nav-menu1');
const close = document.querySelector('.close');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu1.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu1.classList.remove('active');
}));
close.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu1.classList.toggle('active');
});

/// //////////Popup-Window////AllCardsMobile/////AllCardsDesktop/////
const work = document.querySelector('.works');
const allCardsMobile = [
  {
    id: 'one1',
    img: 'images/Snapshoot2.png',
    alt: 'tonic project',
    Name: 'Tonic',
    block1: '',
    block2: '',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
    language: {
      li1: 'HTML',
      li2: 'CSS',
      li3: 'JavaScript',
    },
  },

  {
    id: 'two2',
    img: 'images/Snapshoot1.png',
    alt: 'Multipost project',
    Name: 'Multi-Post Stories',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
    language: {
      li1: 'HTML',
      li2: 'CSS',
      li3: 'JavaScript',
    },
  },

  {
    id: 'three3',
    img: 'images/Snapshoot4.png',
    alt: 'Tonic project',
    Name: 'Tonic',
    block1: '',
    block2: '',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
    language: {
      li1: 'HTML',
      li2: 'CSS',
      li3: 'JavaScript',
    },
  },

  {
    id: 'four4',
    img: 'images/Snapshoot3.png',
    alt: 'Multipost project',
    Name: 'Multi-Post Stories',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },
    para: ` A daily selection of privately personalized reads; no accounts or
       sign-ups required.`,
    language: {
      li1: 'HTML',
      li2: 'Css',
      li3: 'JavaScript',
    },
  },
];
const allCardsDesktop = [
  {
    id: 'one1',
    img: 'images/Snapshoot5.png',
    alt: 'tonic project',
    Name: 'Tonic',
    block1: '',
    block2: '',
    frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2015' },
    para: ` A daily selection of privately personalized reads; no accounts or
         sign-ups required.`,
    language: {
      li1: 'html',
      li2: 'css',
      li3: 'javascript',
      li4: 'Ruby on rails',
    },
  },

  {
    id: 'two2',
    img: 'images/Snapshoot3.png',
    alt: 'Multipost project',
    Name: 'Multi-Post Stories',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'FACEBOOK', li2: 'Full Stack Dev', li3: '2015' },
    para: ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    language: {
      li1: 'html',
      li2: 'Ruby on rails',
      li3: 'css',
      li4: 'javascript',
    },
  },

  {
    id: 'three3',
    img: 'images/Snapshoot2.png',
    alt: 'Facebook project',
    Name: 'Facebook 360',
    block1: '',
    block2: '',
    frame: { li1: 'FACEBOOK', li2: 'Full Stack Dev', li3: '2015' },
    para: ' Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    language: {
      li1: 'html',
      li2: 'Ruby on rails',
      li3: 'css',
      li4: 'javascript',
    },
  },

  {
    id: 'four4',
    img: 'images/Snapshoot1.png',
    alt: 'Uber-navigation project',
    Name: 'Uber Navigation',
    block1: 'Aa',
    block2: 'Bb',
    frame: { li1: 'Uber', li2: 'Lead Developer', li3: '2018' },
    para: ' A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    language: {
      li1: 'html',
      li2: 'Ruby on rails',
      li3: 'css',
      li4: 'javascript',
    },
  },
];

allCardsMobile.forEach((value) => {
  const cardd = document.createElement('div');
  cardd.classList.add('cards');
  cardd.id = value.id;

  cardd.innerHTML = `
     <div class="block1 ${value.block1}">
            <img
              class="img-1"
              src=${value.img}
              alt=${value.alt}
            />
          </div>
          <div class="block2  ${value.block2}">
          <h2 class="title">${value.Name}</h2>
            <div class="canopy-backend">
              
              <ul class="frame1">
                <li class="canopy">${value.frame.li1}</li>
                <li class="counter"><img src="images/Counter.png" alt="Counter"></li>
                <li class="backend">${value.frame.li2}</li>
                <li class="counter"><img src="images/Counter.png" alt="Counter"></li>
                <li class="date"> ${value.frame.li3}</li>
              </ul>
            </div>
  
            
              <p class="daily-read">
              ${value.para}
              </p>
              <div class="dev-lang">              
              <ul>
                <li class="lang">${value.language.li1}</li>
                <li class="lang">${value.language.li2}</li>
                <li class="lang">${value.language.li3}</li>
              </ul>
              </div>
              <button class="see-pr">See project</button>
            
          </div>
        </div> 
        
        
     `;
  work.append(cardd);
});
allCardsDesktop.forEach((value) => {
  const cardd = document.createElement('div');
  cardd.classList.add('card');
  cardd.id = value.id;

  cardd.innerHTML = `
     <div class="block1 ${value.block1}">
            <img
              class="img-2"
              src=${value.img}
              alt=${value.alt}
            />
          </div>
          <div class="block2  ${value.block2}">
          <h2 class="title">${value.Name}</h2>
            <div class="canopy-backend">
              
              <ul class="frame1">
                <li class="canopy">${value.frame.li1}</li>
                <li class="counter"><img src="images/Counter.png" alt="Counter"></li>
                <li class="backend">${value.frame.li2}</li>
                <li class="counter"><img src="images/Counter.png" alt="Counter"></li>
                <li class="date"> ${value.frame.li3}</li>
              </ul>
            </div>
  
            
              <p class="daily-read">
              ${value.para}
              </p>
              <div class="dev-lang">              
              <ul>
                <li class="lang">${value.language.li1}</li>
                <li class="lang">${value.language.li2}</li>
                <li class="lang">${value.language.li3}</li>
                <li class="lang">${value.language.li4}</li>
              </ul>
              </div>
              <button class="see-pr">See project</button>
            
          </div>
        </div> 
        
        
     `;
  work.append(cardd);
});

/// //////Popup-Window//////Mobile/////////Desktop/////
const popup = document.querySelectorAll('.see-pr');

const doc = document.createElement('div');
doc.setAttribute('id', 'popup_window');

const header = document.querySelector('.header');
const mainSection = document.querySelector('.main-section');
const works = document.querySelector('.works');
const about = document.querySelector('#about');
const contact = document.querySelector('#contact');

for (let i = 0; i < popup.length; i += 1) {
  popup[i].addEventListener('click', () => {
    const cardid = document.querySelectorAll('.cards')[i].id;
    // const cardDid = document.querySelectorAll('.card')[i].id;
    header.classList.add('all');
    mainSection.classList.add('all');
    works.classList.add('all');
    about.classList.add('all');
    contact.classList.add('all');

    const projects = [
      {
        id: 1,
        key: 'one1',
        heading: 'Tonic',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot2.png',
        alt: 'Tonic project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'CSS',
          li3: 'JavaScript',

        },

        link: 'https://gitabiy.github.io/Portfolio-setup-and-mobile-first/',
        code: 'https://github.com/gitabiy/Portfolio-setup-and-mobile-first',
      },

      {
        id: 2,
        key: 'two2',
        heading: 'Multipost',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot1.png',
        alt: 'Multipost project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'CSS',
          li3: 'JavaScript',

        },

        link: 'https://gitabiy.github.io/Portfolio-setup-and-mobile-first/',
        code: 'https://github.com/gitabiy/Portfolio-setup-and-mobile-first',
      },

      {
        id: 3,
        key: 'three3',
        heading: 'Tonic',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot4.png',
        alt: 'Tonic project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'CSS',
          li3: 'JavaScript',

        },

        link: 'https://gitabiy.github.io/Portfolio-setup-and-mobile-first/',
        code: 'https://github.com/gitabiy/Portfolio-setup-and-mobile-first',
      },

      {
        id: 4,
        key: 'four4',
        heading: 'Multi-Post Stories',

        frame: { li1: 'CANOPY', li2: 'Back End Dev', li3: '2019' },

        img: 'images/Snapshoot3.png',
        alt: 'gateway project',
        para1:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        para2:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",

        language: {
          li1: 'HTML',
          li2: 'CSS',
          li3: 'JavaScript',
        },

        link: 'https://gitabiy.github.io/Portfolio-setup-and-mobile-first/',
        code: 'https://github.com/gitabiy/Portfolio-setup-and-mobile-first',
      },
    ];

    projects.forEach((value, index) => {
      if (value.key === cardid) {
        doc.innerHTML = `<div class="popup">
        <button id="pop-close">&times;</button>
        <div class="">
          <h2 class="title1"> ${projects[index].heading}</h2>
          <div class="canopy-backend">
          <ul class="frame1" id="pop-frame">
            <li class="A Li">${projects[index].frame.li1}</li>
            <li class="counter"><img src="images/Counter.png" alt="Counter"></li>
            <li class="BC Li"> ${projects[index].frame.li2}</li>
            <li class="counter"><img src="images/Counter.png" alt="Counter"></li>
            <li class="BC Li"> ${projects[index].frame.li3}</li>
          </ul>
          </div>
          <img
            class="card-img"
            id="pop-img"
            src=${projects[index].img}
            alt=${projects[index].alt}
          />
        </div>
        <div class="par-lang">
          <p class="pop-para">
          ${projects[index].para1}
          <br>
          <br>
          ${projects[index].para1}
          </p>
          <div class="lang-btn">
          <div class="dev-lang">
            <ul >
              <li class="lang">${projects[index].language.li1}</li>
              <li class="lang">${projects[index].language.li2}</li>
              <li class="lang">${projects[index].language.li3}</li>
              </div>
            </ul>
            <div class="pop-buttons">
            <a href=${value.link}><button class="see-pr btn_btn pop-btn">See Live <img src="images/Icon.png"/> </button></a>
            <a href=${value.code}> <button class="see-pr btn_btn pop-btn">See source  <img src="images/Vector.png"/> </button></a>
            </div>
          </div>
        </div>
        </div>`;
      }
    });

    document.body.prepend(doc);

    const popclose = document.body.querySelector('#pop-close');
    popclose.addEventListener('click', () => {
      header.classList.remove('all');
      mainSection.classList.remove('all');
      works.classList.remove('all');
      about.classList.remove('all');
      contact.classList.remove('all');
      doc.remove();
    });
  });
}

// form validation
const form = document.querySelector('form');
const submit = document.querySelector('.get-in');
const errordiv = document.getElementById('error-div');

submit.addEventListener('click', (event) => {
  if (form.email.value !== form.email.value.toLowerCase()) {
    errordiv.innerHTML = '  <p class="error-message">! error: email must be in lower case for the form to be sent</p>';
    event.preventDefault();
  } else {
    errordiv.innerHTML = '';
  }
});

