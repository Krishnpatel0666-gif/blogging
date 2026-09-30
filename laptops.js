const laptopData = [
{id:"macbook-air-m3",name:"MacBook Air M3",brand:"Apple",category:"Ultrabook",price:99900,processor:"Apple M3",ram:"8 GB",storage:"256 GB SSD",display:"13.6-inch",rating:"4.8",description:"A thin and lightweight laptop designed for everyday productivity, study and creative work.",use:"Students • Professionals",accent:"🍎"},
{id:"macbook-pro-m3",name:"MacBook Pro 14",brand:"Apple",category:"Creator",price:169900,processor:"Apple M3 Pro",ram:"18 GB",storage:"512 GB SSD",display:"14.2-inch",rating:"4.9",description:"A powerful professional laptop for coding, design, video editing and demanding creative workloads.",use:"Creators • Developers",accent:""},
{id:"asus-rog-strix",name:"ROG Strix G16",brand:"ASUS",category:"Gaming",price:139990,processor:"Intel Core i9",ram:"16 GB",storage:"1 TB SSD",display:"16-inch 165Hz",rating:"4.7",description:"A high-performance gaming laptop with a dedicated GPU, high-refresh display and strong cooling.",use:"Gaming • Performance",accent:"ROG"},
{id:"asus-vivobook",name:"Vivobook 15",brand:"ASUS",category:"Student",price:55990,processor:"Intel Core i5",ram:"16 GB",storage:"512 GB SSD",display:"15.6-inch",rating:"4.5",description:"A practical everyday laptop for students, browsing, office work and entertainment.",use:"Students • Office",accent:"ASUS"},
{id:"lenovo-legion",name:"Legion 5",brand:"Lenovo",category:"Gaming",price:119990,processor:"AMD Ryzen 7",ram:"16 GB",storage:"512 GB SSD",display:"15.6-inch 165Hz",rating:"4.7",description:"A balanced gaming machine combining strong performance with a high-refresh display.",use:"Gaming • Engineering",accent:"LEGION"},
{id:"lenovo-thinkpad",name:"ThinkPad E14",brand:"Lenovo",category:"Business",price:74990,processor:"Intel Core i5",ram:"16 GB",storage:"512 GB SSD",display:"14-inch",rating:"4.6",description:"A business-focused laptop with a productivity-friendly design and practical connectivity.",use:"Business • Students",accent:"TP"},
{id:"dell-xps13",name:"XPS 13",brand:"Dell",category:"Ultrabook",price:124990,processor:"Intel Core Ultra 7",ram:"16 GB",storage:"512 GB SSD",display:"13.4-inch",rating:"4.7",description:"A compact premium laptop aimed at portability, productivity and everyday performance.",use:"Professionals • Students",accent:"XPS"},
{id:"dell-g15",name:"G15 Gaming",brand:"Dell",category:"Gaming",price:89990,processor:"Intel Core i7",ram:"16 GB",storage:"512 GB SSD",display:"15.6-inch 120Hz",rating:"4.5",description:"A gaming-oriented laptop offering dedicated graphics and a performance-focused design.",use:"Gaming • Students",accent:"G15"},
{id:"hp-spectre",name:"Spectre x360",brand:"HP",category:"Ultrabook",price:119990,processor:"Intel Core Ultra 7",ram:"16 GB",storage:"1 TB SSD",display:"14-inch OLED",rating:"4.6",description:"A premium convertible laptop combining a sharp OLED display with a flexible 2-in-1 design.",use:"Creators • Professionals",accent:"HP"},
{id:"hp-pavilion",name:"Pavilion 14",brand:"HP",category:"Student",price:64990,processor:"Intel Core i5",ram:"16 GB",storage:"512 GB SSD",display:"14-inch",rating:"4.4",description:"A versatile everyday notebook suitable for study, office work and entertainment.",use:"Students • Office",accent:"HP"},
{id:"acer-predator",name:"Predator Helios Neo",brand:"Acer",category:"Gaming",price:109990,processor:"Intel Core i7",ram:"16 GB",storage:"1 TB SSD",display:"16-inch 165Hz",rating:"4.6",description:"A performance laptop for gaming and demanding workloads with a high-refresh display.",use:"Gaming • Engineering",accent:"PREDATOR"},
{id:"acer-aspire",name:"Aspire 5",brand:"Acer",category:"Student",price:57990,processor:"AMD Ryzen 5",ram:"16 GB",storage:"512 GB SSD",display:"15.6-inch",rating:"4.3",description:"An affordable all-rounder for students and everyday productivity.",use:"Students • Home",accent:"ACER"},
{id:"msi-stealth",name:"Stealth 16",brand:"MSI",category:"Creator",price:149990,processor:"Intel Core i9",ram:"32 GB",storage:"1 TB SSD",display:"16-inch",rating:"4.7",description:"A powerful creator-focused machine with high-end components for demanding work.",use:"Creators • Gaming",accent:"MSI"},
{id:"msi-katana",name:"Katana 15",brand:"MSI",category:"Gaming",price:94990,processor:"Intel Core i7",ram:"16 GB",storage:"512 GB SSD",display:"15.6-inch 144Hz",rating:"4.4",description:"A gaming laptop built around performance, dedicated graphics and a fast display.",use:"Gaming • Students",accent:"MSI"},
{id:"surface-laptop",name:"Surface Laptop",brand:"Microsoft",category:"Business",price:109990,processor:"Snapdragon X Plus",ram:"16 GB",storage:"512 GB SSD",display:"13.8-inch",rating:"4.5",description:"A modern productivity laptop with a clean design and a focus on portability.",use:"Business • Students",accent:"MS"}
];
window.laptopData = laptopData;

function laptopCard(item) {
  const saved = isSaved(item.id);
  return `<article class="laptop-card">
    <div class="laptop-image"><div class="mini-laptop">${item.accent}</div><button class="heart ${saved ? "saved":""}" data-heart="${item.id}" onclick="toggleWishlist('${item.id}')" aria-label="Wishlist">${saved ? "♥":"♡"}</button></div>
    <div class="card-body"><span class="tag">${item.category}</span><h3>${item.name}</h3><p class="brand">${item.brand} • ★ ${item.rating}</p>
    <div class="spec-line"><span>${item.processor}</span><span>•</span><span>${item.ram}</span><span>•</span><span>${item.storage}</span></div>
    <div class="price">₹${item.price.toLocaleString("en-IN")}</div>
    <div class="card-actions"><a class="small-btn primary-small" href="laptop-details.html?id=${item.id}">View details</a><button class="small-btn" onclick="downloadWallpaper('${item.id}')">Wallpaper</button></div></div>
  </article>`;
}
function downloadWallpaper(id) {
  const item = laptopData.find(x => x.id === id);
  const canvas = document.createElement("canvas"); canvas.width=1920; canvas.height=1080;
  const ctx=canvas.getContext("2d");
  const g=ctx.createLinearGradient(0,0,1920,1080); g.addColorStop(0,"#17192a"); g.addColorStop(1,"#635bff"); ctx.fillStyle=g; ctx.fillRect(0,0,1920,1080);
  ctx.fillStyle="rgba(255,255,255,.08)"; ctx.beginPath(); ctx.arc(1550,250,300,0,Math.PI*2); ctx.fill();
  ctx.fillStyle="#fff"; ctx.textAlign="center"; ctx.font="bold 105px Arial"; ctx.fillText(item.name,960,500);
  ctx.font="42px Arial"; ctx.fillStyle="rgba(255,255,255,.8)"; ctx.fillText(`${item.brand} • ${item.category}`,960,575);
  ctx.font="bold 30px Arial"; ctx.fillStyle="rgba(255,255,255,.6)"; ctx.fillText("LAPTOPVERSE",960,980);
  const a=document.createElement("a"); a.download=`${item.name.replace(/\s+/g,"-")}-wallpaper.png`; a.href=canvas.toDataURL("image/png"); a.click(); showToast("Wallpaper created and downloaded");
}
function renderLaptopGrid(items, targetId="laptopGrid") {
  const grid=document.getElementById(targetId); if(!grid)return;
  grid.innerHTML=items.map(laptopCard).join("");
}
function applyFilters() {
  const q=(document.getElementById("searchInput")?.value||"").toLowerCase().trim();
  const brand=document.getElementById("brandFilter")?.value||"all";
  const category=document.getElementById("categoryFilter")?.value||"all";
  const sort=document.getElementById("sortFilter")?.value||"default";
  let list=laptopData.filter(x=>(brand==="all"||x.brand===brand)&&(category==="all"||x.category===category)&&(!q||`${x.name} ${x.brand} ${x.processor} ${x.category}`.toLowerCase().includes(q)));
  if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price); if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  renderLaptopGrid(list); const count=document.getElementById("resultCount"); if(count)count.textContent=`${list.length} laptop${list.length!==1?"s":""}`;
  document.getElementById("noResults")?.classList.toggle("hidden",list.length!==0);
}
document.addEventListener("DOMContentLoaded",()=>{
  if(document.getElementById("featuredGrid")) renderLaptopGrid(laptopData.slice(0,4),"featuredGrid");
  if(document.getElementById("laptopGrid")){
    const params=new URLSearchParams(location.search); const cat=params.get("category");
    if(cat){document.getElementById("categoryFilter").value=cat}
    ["searchInput","brandFilter","categoryFilter","sortFilter"].forEach(id=>document.getElementById(id)?.addEventListener("input",applyFilters));
    document.getElementById("clearFilters")?.addEventListener("click",()=>{document.getElementById("searchInput").value="";document.getElementById("brandFilter").value="all";document.getElementById("categoryFilter").value="all";document.getElementById("sortFilter").value="default";applyFilters()});
    applyFilters();
  }
});
