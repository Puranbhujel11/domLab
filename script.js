//  // Menu data structure

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  
const mainEl = document.querySelector("main");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI ROCKS!<h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

menuLinks.forEach(function(linkObj){
    const newE = document.createElement("a");
    newE.setAttribute('href', linkObj.href);
    newE.textContent = linkObj.text;
    topMenuEl.appendChild(newE);
})

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around")
subMenuEl.classList.position = "absolute";
subMenuEl.classList.top = "0";

let topMenuLinks = document.querySelectorAll('#top-menu a');
let showingSubMenu = false;
topMenuEl.addEventListener('click', function(et) {
    et.preventDefault();
    let link = et.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent)
    if (link.classList.contains('active')) {
      link.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = '0';
     return
    }
    topMenuLinks.forEach(function(a) {
      a.classList.remove('active');
    });
    link.classList.add('active');
    let linkObj = menuLinks.find(function(obj) {
      return obj.text === link.textContent;
    });
    showingSubMenu = linkObj.hasOwnProperty('subLinks');
    if (!showingSubMenu) mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
    if (showingSubMenu) {
      buildSubMenu(linkObj.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      subMenuEl.style.top = '0';
    }
  });
  function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(function(link) {
      let newA = document.createElement('a');
      newA.setAttribute('href', link.href);
      newA.textContent = link.text;
      subMenuEl.appendChild(newA);
    });
  }
  subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    let link = event.target;
    if (link.tagName !== 'A') return;
    console.log(link.textContent);
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    topMenuLinks.forEach(function(a) {
      a.classList.remove('active');
    });
   mainEl.innerHTML = `<h1>${link.textContent}</h1>`;
  });



