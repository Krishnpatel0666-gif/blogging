function renderWishlist() {
  const grid=document.getElementById("wishlistGrid"), empty=document.getElementById("emptyWishlist"); if(!grid)return;
  const list=getWishlist();
  if(!list.length){grid.innerHTML="";empty?.classList.remove("hidden");return}
  empty?.classList.add("hidden"); grid.innerHTML=list.map(laptopCard).join("");
}
document.addEventListener("DOMContentLoaded",renderWishlist);
