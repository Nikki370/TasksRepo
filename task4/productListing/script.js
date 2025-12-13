// script.js

const products = [
  {id:1,name:'Aurora Headphones',category:'Audio',price:79, rating:4.6, img:'https://blaupunktaudio.in/cdn/shop/files/bh41-bluetooth-wireless-over-ear-headphone-black-blaupunkt-india-1.webp?v=1754817500'},
  {id:2,name:'Nebula Lamp',category:'Home',price:45, rating:4.2, img:'https://www.dekorcompany.com/cdn/shop/files/t05.png?v=1707198564'},
  {id:3,name:'Pulse Sneakers',category:'Fashion',price:120, rating:4.8, img:'https://d1pdzcnm6xgxlz.cloudfront.net/footwear/8905875426714-18.jpg'},
  {id:4,name:'Lumen Keyboard',category:'Electronics',price:160, rating:4.5, img:'https://www.lapcare.com/cdn/shop/files/1_14b481a1-e43f-4c3d-81b4-2483f5990ec1.webp?v=1757326365&width=2048'},
  {id:5,name:'Orbit Mug',category:'Home',price:18, rating:4.1, img:'https://m.media-amazon.com/images/I/61-cQ8rwLZL._AC_UF894,1000_QL80_.jpg'},
  {id:6,name:'Flux Jacket',category:'Fashion',price:220, rating:4.7, img:'https://i1.adis.ws/i/jpl/go_323981_a?w=638&h=638'},
  {id:7,name:'Echo Smartband',category:'Electronics',price:95, rating:4.3, img:'https://m.media-amazon.com/images/I/61eWuNlH94L.jpg'},
  {id:8,name:'Glow Poster',category:'Decor',price:30, rating:4.0, img:'https://images.squarespace-cdn.com/content/v1/5bab09327046801d529c3e9b/1576518489905-7VN0WFN8DQCNADLBV55R/GLOW.png?format=1500w'},

  /* -------- Added Products -------- */

  {id:9,name:'Skyline Backpack',category:'Fashion',price:55, rating:4.4, img:'https://m.media-amazon.com/images/I/81TmYTDoc+L._AC_UY1100_.jpg'},

  {id:10,name:'Crystal Table Lamp',category:'Home',price:70, rating:4.5, img:'https://www.homesake.in/cdn/shop/files/IH0A093_theme.jpg?v=1747736577'},

  {id:11,name:'Sonic Bluetooth Speaker',category:'Audio',price:40, rating:4.2, img:'https://images.jdmagicbox.com/quickquotes/images_main/tagg-sonic-angle-max-portable-bluetooth-party-speaker-with-microphone-30w-speaker-driver-bass-radiator-sub-woofer-twitter-bluetooth-v-5-0-and-supports-google-assistant-siri-pack-of-1-black-178079070-gvp0x.jpg'},

  {id:12,name:'Viper Gaming Mouse',category:'Electronics',price:49, rating:4.6, img:'https://oasisitstore.in/image/cache/catalog/cdn_images/130,131/2435-2-600x691.jpg'},

  {id:13,name:'Zen Wall Clock',category:'Home',price:28, rating:4.3, img:'https://m.media-amazon.com/images/I/71irHHUS8wL.jpg'},

  {id:14,name:'Galaxy Hoodie',category:'Fashion',price:85, rating:4.7, img:'https://i.etsystatic.com/18628324/r/il/73e2c3/4103198720/il_fullxfull.4103198720_tagk.jpg'},

  {id:15,name:'UltraFit Yoga Mat',category:'Fitness',price:35, rating:4.4, img:'https://gophersport.com/media/catalog/product/g/-/g-69777-rainbow-ultrafit-yoga-grommet-mats_1.jpg?optimize=low&bg-color=255,255,255&fit=bounds&height=744&width=744&canvas=744:744'},

  {id:16,name:'Nightfall Wall Art',category:'Decor',price:60, rating:4.6, img:'https://m.media-amazon.com/images/I/51KKgADiM0L.jpg'},

  {id:17,name:'Blaze Gaming Headset',category:'Audio',price:95, rating:4.5, img:'https://cf-images.ap-southeast-1.prod.boltdns.net/v1/jit/5745608584001/b55f8186-f357-4bf9-b7ea-aeaa8677248c/main/1280x720/9s868ms/match/image.jpg'},

  {id:18,name:'Pixel Smartwatch',category:'Electronics',price:130, rating:4.4, img:'https://www.jiomart.com/images/product/original/494422710/google-pixel-watch-3-45-mm-smartwatch-black-aluminum-case-obsidian-active-band-digital-o494422710-p610684031-1-202511251810.jpeg?im=Resize=(420,420)'},

  {id:19,name:'Marble Flower Vase',category:'Home',price:42, rating:4.1, img:'https://m.media-amazon.com/images/I/61urNj427kL._AC_UF894,1000_QL80_.jpg'},

  {id:20,name:'Aurora LED Strip',category:'Decor',price:25, rating:4.3, img:'https://cdn.ukelectricalsupplies.com/product-images/26355/aurora-lighting-au-st324blu-24v-dc-ip68-single-colour-flexible-high-density-led-strip-light-blue-1-large.jpg'}
];


// DOM refs
const productsGrid = document.getElementById('productsGrid');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');

// init
window.addEventListener('DOMContentLoaded', () => {
  populateCategoryOptions();
  renderProducts(products);
});

// populate categories dynamically
function populateCategoryOptions(){
  const cats = ['all', ...new Set(products.map(p=>p.category))];
  cats.forEach(c=>{
    const opt = document.createElement('option');
    opt.value = c;
    opt.textContent = c.charAt(0).toUpperCase()+c.slice(1);
    categoryFilter.appendChild(opt);
  });
}

// render
function renderProducts(list){
  productsGrid.innerHTML='';
  if(list.length===0){
    productsGrid.innerHTML = `<div class="empty">No products found 😕</div>`;
    return;
  }
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className='card';
    card.innerHTML = `
      <div class="rating">${p.rating}★</div>
      <div class="img"><img src="${p.img}" alt="${p.name}"/></div>
      <div class="tag">${p.category}</div>
      <div class="title">${p.name}</div>
      <div class="meta">
        <div class="kv price">$${p.price}</div>
        <button class="buyBtn">Add</button>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// filtering & sorting
function applyFilters(){
  let result = [...products];

  // search
  const q = searchInput.value.trim().toLowerCase();
  if(q){ result = result.filter(p=> p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)); }

  // category
  const cat = categoryFilter.value;
  if(cat && cat!=='all') result = result.filter(p=>p.category===cat);

  // price
  const priceVal = priceFilter.value;
  if(priceVal && priceVal!=='all'){
    const [min,max] = priceVal.split('-').map(Number);
    result = result.filter(p=>p.price>=min && p.price<=max);
  }

  // sort
  const sortVal = sortSelect.value;
  if(sortVal==='price-asc') result.sort((a,b)=>a.price-b.price);
  else if(sortVal==='price-desc') result.sort((a,b)=>b.price-a.price);
  else if(sortVal==='rating-desc') result.sort((a,b)=>b.rating-a.rating);
  else if(sortVal==='name-asc') result.sort((a,b)=>a.name.localeCompare(b.name));

  renderProducts(result);
}

// events
[categoryFilter, priceFilter, sortSelect, searchInput].forEach(el=>{
  el.addEventListener('change', applyFilters);
  el.addEventListener('input', applyFilters);
});

// small UX: debounce search
let debounceTimer;
searchInput.addEventListener('input', ()=>{
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(applyFilters, 250);
});