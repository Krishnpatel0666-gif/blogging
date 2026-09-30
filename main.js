document.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("lvTheme");
  if (theme === "dark") document.body.classList.add("dark");

  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("lvTheme", document.body.classList.contains("dark") ? "dark" : "light");
    themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
  });

  const menu = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  if (menu && nav) menu.addEventListener("click", () => nav.classList.toggle("open"));

  updateWishlistCount();
});

function getWishlist() {
  return JSON.parse(localStorage.getItem("lvWishlist") || "[]");
}
function updateWishlistCount() {
  const count = getWishlist().length;
  document.querySelectorAll("#wishlistCount").forEach(el => el.textContent = count);
}
function isSaved(id) {
  return getWishlist().some(item => item.id === id);
}
function toggleWishlist(id) {
  let list = getWishlist();
  const index = list.findIndex(item => item.id === id);
  if (index >= 0) {
    list.splice(index, 1);
    showToast("Removed from wishlist");
  } else {
    const laptop = (window.laptopData || []).find(item => item.id === id);
    if (laptop) {
      list.push(laptop);
      showToast("Added to wishlist ♥");
    }
  }
  localStorage.setItem("lvWishlist", JSON.stringify(list));
  updateWishlistCount();
  document.querySelectorAll(`[data-heart="${id}"]`).forEach(btn => {
    btn.classList.toggle("saved", isSaved(id));
    btn.textContent = isSaved(id) ? "♥" : "♡";
  });
  if (typeof renderWishlist === "function") renderWishlist();
}
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.style.cssText = "position:fixed;bottom:25px;right:25px;background:#15171d;color:#fff;padding:12px 18px;border-radius:12px;z-index:100;box-shadow:0 12px 30px rgba(0,0,0,.2);font-weight:700;font-size:.88rem";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.style.opacity = "1";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.style.opacity = "0", 1800);
}
