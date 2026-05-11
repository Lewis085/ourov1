
const PRODUCTS = [
  { id:1, name:"Corrente Cuban Link Ice 18K 15mm Cravejada", price:"R$ 14.500", cat:"correntes", badge:"NOVO DROP",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAPMX9UbAowwU-KFUZx9BbWfc8lJpF8aruFYY4F3cFMaMriEe4s1VROnklII3dmseDRqnWOelyh9ou-6eX6-iLWvCnuR6Qd4BCUfux7a_91ays00x3EQpxFHFUbAFaCxCqxisL9opo25idVKAuMUlYqNQ-ORPI45CuHpWTJANkS3tFAkWyOl66CE2Dvr3bUtjm56YsfBfOPiiD9DuKwt1U5YcALS0QSQTf_RsY6cupPKAQHmpvud8RcOEuEM2O4OMfLe0P-UZWViDiv",
    heroImg:"https://lh3.googleusercontent.com/aida-public/AB6AXuCREeYxLjwPv8rsbZjy4a4Dfn1h6leynBtZYaDrnT-X-7QpY1V_WPRle0iJ-uR7GE1z08pEczAKACDzUqBb5OTZD-J_aCwiBRQBedkmY4J-o68TCKVV0eeZHcTk8wZYF9WPIVDfpYIlTaXWrqiLZ2rROGfFLNfk9uOkpOdicOnYxt_EKZsmWutOQp7lqeB39Ow42R-qujzWayDzcVqB7-L2HBH5QfIUGg77HJcw12G3OXj5BCUvha1QJ3eIaIkLa0JZKJcorT19Uyxi",
    material:"Ouro 18k Maciço", peso:"120 Gramas", tamanho:"60 cm / 12mm", entrega:"Seguro Sedex",
    desc:"A verdadeira definição de poder. Esta peça não é para passar despercebida. Forjada para quem domina o ambiente, apresenta elos maciços com acabamento espelhado de alta reflexão." },
  { id:2, name:"Anel Sinete Imperial Maciço Ouro 18K", price:"R$ 8.900", cat:"aneis", badge:"",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAOzW5yJJ76Gto_9IVAogj_aDfcswo-CKI6oZLnR8QWC1SpSx18VLEMaE_NBbEehsR4tOqnLB_u1cYTs-3HaK2sJmYo87G1FvniWEyibOVXFt4fQodtaFBkcpwUlmlGJ8Sjyl1rWv3adi1JkzZ9Vhc47fFOF3QBK9M41ODNg3HZWvJZSGMKagchC44aLMvRwXCY8a3tcWVMY5SsdbTxdm2yi5QLDBu24iMyQaf-I_P_WdrKRN5tneC3Zpd_DFD77Dv8BBOQ40E6jmdS",
    material:"Ouro 18k Maciço", peso:"45 Gramas", tamanho:"Aro 22", entrega:"Seguro Sedex",
    desc:"Imponente e clássico. O Anel Sinete Imperial é forjado em ouro maciço 18K com detalhes heráldicos gravados. Uma peça que comunica poder antes mesmo de uma palavra ser dita." },
  { id:3, name:"Relógio Automático Chronograph Ouro/Aço", price:"R$ 32.000", cat:"relogios", badge:"RARO",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuC2nwl4JVNW0W2iqTF0wFQy6Mq528-pUWIKstR-eaa2pkrSlznC6olewnGvivIO-0pTcudXuqkSF9zv7RzJuWWRhOlr2mGYfjdEMxPJxq7QAmJ94i0VsrI15PO7rx0d90Qq1y-6tUP88MEkRiRkhKDXJchmFV1HcTgUaR21hW5O0Kr1mwLvfuWYMtRZ4k1k7ToX_Jfo4CInbmvihAboShvIP04oZNG5-Fi29pfUo4V6vcLIA-rYDbBIccG72EBZtmtulEZivxPycwBp",
    material:"Ouro/Aço Inox", peso:"185 Gramas", tamanho:"42mm", entrega:"Seguro Sedex",
    desc:"Precisão suíça encontra ostentação urbana. Mostrador negro com bisel em ouro 18K, cristal safira anti-reflexo e mecanismo automático visível. Edição limitada para colecionadores." },
  { id:4, name:"Pulseira Cordão Baiano Duplo Ouro 18K", price:"R$ 6.200", cat:"pulseiras", badge:"",
    img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAB5jZq9g2f3E-nX1qAgNx36SOuT9F_q8LfmWpk84P18QyDNc_6LNQOnqgofpEUyM9ppFR4uIzV6hlffH6YXcLQMuHTWXgg8kgPKNfZ4Vu1-GyeExOFEck1UlIGI-f8TVLeoWLKIOuWV4r8e_AmVPZl8-X2yZ3cof2yZajkkJAvPlm18V8i9zuRrpOn7AHKpwsJJaSjsCi34XfqQ6xg5rYZ1zVPZEZ0Ed-nrHf44c5ASg7LXbhB3xYz-xpk2k6w6_FqzRJemG5_Uzad",
    material:"Ouro 18k", peso:"35 Gramas", tamanho:"21 cm", entrega:"Seguro Sedex",
    desc:"Elegância que envolve. O cordão baiano duplo traz textura e movimento ao pulso, com acabamento polido que captura luz de todos os ângulos." }
];

const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFrr4dY46SxVav67-8lBptAhM0CAumUnUu7Z9ZX5TYV-LlKom0EiGizzmL2Pzom2MB136gn7Fz-2PZVuvxHqLD1uHH6qXuJw6hG_tkXAvhq8WLh6uvXWMky6eCkIlqstzwjAAJBtnYgvioUwM7BB8oF3BtD_HVtFiFEhPV6hdbN3D9NLVJ0BSnZGZc_b2vi9kn3_5Z9OvL_61Xk0J-r2jTdxOJzwuKVF2jWPM6wQdS_vEC62Ldduv2JiWxLE7Zozv75TBkg8_9gudd",
  topStatus1: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcUMujJN70Y0UWJU7qDybTmcyszxPMfHQVkzFBvD0lP06Z2ZQOj6jA1pP8pu8NjxQ3kYmWIhK1G8cqU9-Yof-xjDRlaI2efXZUDOAFPtxX1v97qKOzhz-ebbZuxdEgmbXnFCNiyHLZ1uIRlWTuzCK1ZQ5R8rWFcWR_4LRoUJ-WoDjGIVmLOfwGgXHMHTYeVBGU1E-vXsT2eP7mtVr6-zGSCskym6ORWBDqV-mIe50fHsS0N0rwxncP_7qwhGYDb9_Cg87C5wX0cTTJ",
  topStatus2: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQlieAH__9Ua5rE80si0yhfOVWx12q9kJMYOCKKcFt8ep0luDLYWuDZ6aJQywPAop5_0x3HgYfIg4LGcnQ9T61HTkCiZ0MZgRQc4OicWKvPMvx_0vidlr0hCXTG6vLt_T0lKXaEyAK-UvzQxHQjDljg2b65xrt29_KqmQCuvsGPyyPr2K3Q9n-H2gebpOHKvg3GRQEcmu3uZGMOKwd7_TTLxxAWw2laDziv8HQE5uoOYoRv0KGhJdaITteZpFRp4Z2vp2c9zDaquAN",
  bento1: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh4QboFC2YvQ6CHk9APiwTeXYr7xXMG3icPHLOSg76niDBzf55E6ZezbIDn31yWbg0_bC5c8D7hC0KlypmeWYZWjff2c5xqSoqLjKQhEWI0mo4C-Bae0vHR86okHqBueDCm8xrUjyUMVxsrU-64gYi0dU5rhKGMjdDrV6HLgltfDeVBzbLvtOlwlN4TwikCLxh70kXNZnxrG0R0Cy18Y90jGp0gnpM1zKM_s1tg0yGaHRjVgYrMIFtq-uhPHAP9ZThxQiUTZ5xPaZD",
  bento2: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMdS59Jv9kiwYBpbSCOE_0jU0WtWk4Q9-1x4zAG8qD-UkG9wVBIQ0ujIWQQDIOvSY73e6BSDkD67aPGinDgqTjuUMieC2iIhi_4sqhpCeYZC-T0i_N9rDo_iSpLhZzv28qxabCa1-hGtnolm2FvEOOkWddetXtnR7WIsgPNsPG7a_EIQfHAPAOiCOupPmgHl0dk5t6tTXYgBHL029oEjL3vo_DkNO31h7XYpFf98zKYVUfom0Tg5HmgCio8bMABGKzHQTqYi2H7ncH",
  bento3: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI590Xj7PomSiwfYhdcqMqxaabmAGh0sU9gKIvoGPmn6fwPCdVTph_KguTfMENO6rRVWScpnuL8fbhQn9IsE5A2UZAcXIasRJPHcuFTQx9LoXU8sLlc-548rQhgE_7Wn8k01wGAyjXmHyD9vUN-mgrhppzLBgkvJcWE4I0PstQTm7Oote0Y2t2aKFadW7NFUIB61e3vITjhfT6dof9DwK36sMDRO0m5QBrEEAOI-Vk83f4jcH_0WaVOBS2cq3tkv5LbPes-qw4DFzF",
  showroom: "showroom.jpg",
  rel1: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyaN1qeATCnwB0o6AwWz0ATFxgn6WsxptmIMsnc50scrr-d3UKJJYCugHoZN1R7AAddFYxYc6DcjMJVd6CdENLqr5N4IMi8HeefmwAj3xmr2tg8VVZSrc8pq3Hb3rdiy9TmMf_vkiubJyOpLkwreGIWroIKpYFPsuoKBLnyTHMKgdKChEjeM-QGZvJsAFmTGC6FXBzR-NOB6xiDBPFtvS1XuPiT0gMQxWNqhKqeDzjhkiVHY24yyOgLkQA_Yx0zitnQAwzFQ7uYrje",
  rel2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHr0Xyk6PjPjsiRb3QbTd4VFhg8fKByYjNLTdCzR_wP6NJ2mgmGDiGUKCQcTU_SERdU7v1IVesPbjWLwCZieJmFFZHlZpJitRv119owOlmpkRZJ1qgMGo6eSjvwFpUd--sbsNihmuBW8e97YrGI7hPpW8aSVSS1tK4rqSZLSB15878zNnMFtUwb6WsM29EURSGJNZ73bkwDSkH01vnZ-hR001MMXFYmHFwYgzh5CGdedYi6N-jNijbvMOOTYI3LawB4dV8T9d4QGxY",
  rel3: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVQMM1F1PPNAQI08rHgOXna9zs4_9QyvzY7Av2sZIQBbG8kZT42Evx0ur8VbrQ-bwUwH4sSn0mr6biBQ1GZqDLCoW9ONdXjVQ3wFNxaUkhjGQgmpvVMApKAvkJsy2opFYeS0NYImUgV_bU-Zbo-AZi67S580bsJj8_7va4tAi8QywkRs9KhsiNcdRptz0dTfrb4_PYACbo-G856SsYAUcE9LYsryoMcUzGBgBG2Mp9M-yvW8rQga4MafYOSKVmN78jOKzVIEjVvhbX"
};

let currentPage = 'home';
let currentFilter = 'todos';
let currentProduct = null;

function navigate(page, productId) {
  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active'); });
  const el = document.getElementById('page-' + page);
  if (el) { el.classList.add('active'); el.scrollTop = 0; }
  window.scrollTo(0, 0);

  // Nav highlight
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navMap = { home:0, catalog:1, contact:2, detail:-1 };
  const idx = navMap[page];
  if (idx >= 0) document.querySelectorAll('.nav-item')[idx]?.classList.add('active');

  // Header back button
  const header = document.querySelector('.app-header');
  const backBtn = document.getElementById('back-btn');
  const searchBtn = document.getElementById('search-btn');
  if (page === 'detail') {
    backBtn.style.display = 'flex';
    searchBtn.style.display = 'none';
    document.getElementById('fixed-cta').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'none';
  } else {
    backBtn.style.display = 'none';
    searchBtn.style.display = 'flex';
    document.getElementById('fixed-cta').style.display = 'none';
    document.querySelector('.bottom-nav').style.display = 'flex';
  }

  if (page === 'detail' && productId) {
    currentProduct = PRODUCTS.find(p => p.id === productId);
    renderDetail();
  }
  currentPage = page;
}

function renderDetail() {
  const p = currentProduct;
  if (!p) return;
  const c = document.getElementById('detail-content');
  c.innerHTML = `
    <div class="detail-image">
      <img src="${p.heroImg || p.img}" alt="${p.name}">
      <div class="overlay"></div>
      ${p.badge ? `<div class="badge"><span class="font-label" style="color:var(--primary-container)">${p.badge}</span></div>` : ''}
    </div>
    <div class="detail-info">
      <h2 class="font-headline-mobile title">${p.name}</h2>
      <div class="price">${p.price}</div>
      <p class="installments">Ou 12x sem juros</p>
      <div class="detail-desc">
        <h4>Brilho que impõe.</h4>
        <p>${p.desc}</p>
      </div>
      <div class="specs-grid">
        <div class="spec-item">
          <div class="spec-label"><span class="material-symbols-outlined" style="font-size:20px">diamond</span><span class="font-label">Material</span></div>
          <p class="spec-value">${p.material}</p>
        </div>
        <div class="spec-item">
          <div class="spec-label"><span class="material-symbols-outlined" style="font-size:20px">scale</span><span class="font-label">Peso</span></div>
          <p class="spec-value">${p.peso}</p>
        </div>
        <div class="spec-item">
          <div class="spec-label"><span class="material-symbols-outlined" style="font-size:20px">straighten</span><span class="font-label">Tamanho</span></div>
          <p class="spec-value">${p.tamanho}</p>
        </div>
        <div class="spec-item">
          <div class="spec-label"><span class="material-symbols-outlined" style="font-size:20px">local_shipping</span><span class="font-label">Entrega</span></div>
          <p class="spec-value">${p.entrega}</p>
        </div>
      </div>
    </div>
    <div class="related-section">
      <h3 class="font-headline-mobile uppercase mb-8">Outros Pesos</h3>
      <div class="grid-2">
        <a class="related-item" onclick="navigate('detail',${PRODUCTS.filter(x=>x.id!==p.id)[0].id})">
          <div class="rel-img"><img src="${IMAGES.rel1}" alt=""><div class="gradient"></div></div>
          <div class="rel-info"><h4 class="font-label">Grume Duplo</h4><p>150g - R$ 18K</p></div>
        </a>
        <a class="related-item" onclick="navigate('detail',${PRODUCTS.filter(x=>x.id!==p.id)[1].id})">
          <div class="rel-img"><img src="${IMAGES.rel2}" alt=""><div class="gradient"></div></div>
          <div class="rel-info"><h4 class="font-label">Cartier Maciça</h4><p>80g - R$ 9.8K</p></div>
        </a>
        <a class="related-item" onclick="navigate('detail',${PRODUCTS.filter(x=>x.id!==p.id)[2]?.id || 1})">
          <div class="rel-img"><img src="${IMAGES.rel3}" alt=""><div class="gradient"></div></div>
          <div class="rel-info"><h4 class="font-label">Piastrine King</h4><p>200g - R$ 24K</p></div>
        </a>
        <a class="related-item" onclick="navigate('catalog')" style="display:flex;align-items:center;justify-content:center;background:var(--surface-container)">
          <div style="text-align:center;padding:20px"><span class="material-symbols-outlined" style="font-size:48px;color:var(--outline)">arrow_forward</span><p class="font-label" style="color:var(--primary-container);margin-top:8px">Ver Catálogo</p></div>
        </a>
      </div>
    </div>`;
}

function filterProducts(cat) {
  currentFilter = cat;
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  const filtered = cat === 'todos' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  const grid = document.getElementById('catalog-grid');
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-product-id="${p.id}">
      <div class="card-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        ${p.badge ? `<div class="badge"><span class="font-label" style="color:var(--primary-container)">${p.badge}</span></div>` : ''}
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,transparent,rgba(255,255,255,0.03),transparent);pointer-events:none"></div>
      </div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <button class="card-cta" data-action="chat"><span class="material-symbols-outlined" style="font-size:18px">chat</span>CHAMAR</button>
      </div>
    </div>`).join('');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  filterProducts('todos');
  navigate('home');

  // Event delegation for catalog product cards
  document.getElementById('catalog-grid').addEventListener('click', (e) => {
    if (e.target.closest('[data-action="chat"]')) return; // skip chat button
    const card = e.target.closest('.product-card');
    if (card && card.dataset.productId) {
      navigate('detail', parseInt(card.dataset.productId));
    }
  });

  // Event delegation for home page product cards
  document.getElementById('page-home').addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    if (card && card.dataset.productId) {
      navigate('detail', parseInt(card.dataset.productId));
    }
  });
});
