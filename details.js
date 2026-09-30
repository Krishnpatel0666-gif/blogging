document.addEventListener("DOMContentLoaded",()=>{
  const root=document.getElementById("detailsPage"); if(!root)return;
  const id=new URLSearchParams(location.search).get("id");
  const item=laptopData.find(x=>x.id===id);
  if(!item){root.innerHTML='<section class="empty-state"><div>404</div><h3>Laptop not found</h3><a class="btn primary" href="laptops.html">Back to laptops</a></section>';return}
  root.innerHTML=`<section class="detail-wrap"><a class="back-link" href="laptops.html">← Back to collection</a><div class="detail-grid">
  <div class="detail-visual"><div class="mini-laptop">${item.accent}</div></div>
  <div class="detail-content"><span class="tag">${item.category}</span><h1>${item.name}</h1><p class="brand">${item.brand} • ★ ${item.rating}</p><p>${item.description}</p><div class="detail-price">₹${item.price.toLocaleString("en-IN")}</div>
  <div class="detail-actions"><button class="btn primary" onclick="toggleWishlist('${item.id}')">${isSaved(item.id)?"♥ Saved":"♡ Add to wishlist"}</button><button class="btn secondary" onclick="downloadWallpaper('${item.id}')">↓ Wallpaper</button></div>
  <div class="spec-table"><div>Processor</div><div>${item.processor}</div><div>Memory</div><div>${item.ram}</div><div>Storage</div><div>${item.storage}</div><div>Display</div><div>${item.display}</div><div>Ideal for</div><div>${item.use}</div></div></div></div>
  </section><section class="section muted"><div class="section-heading"><div><p class="eyebrow">WHY CONSIDER IT</p><h2>Quick highlights</h2></div></div><div class="feature-grid"><div><b>01</b><h3>Performance</h3><p>${item.processor} provides the main processing platform for this model.</p></div><div><b>02</b><h3>Memory</h3><p>${item.ram} is included for multitasking and everyday workloads.</p></div><div><b>03</b><h3>Storage</h3><p>${item.storage} gives fast local storage for apps and files.</p></div><div><b>04</b><h3>Purpose</h3><p>This model is listed under ${item.category} and is suited to ${item.use.toLowerCase()}.</p></div></div></section>`;
});
