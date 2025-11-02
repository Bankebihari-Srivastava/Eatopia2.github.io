// CART COUNT
let cartCount = 0;
const cartCountSpan = document.getElementById("cart-count");
document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.innerText.includes("Cart")) {
      cartCount++;
      if(cartCountSpan) cartCountSpan.textContent = cartCount;
    }
  });
});

// GALLERY SLIDER
let currentIndex = 0;
function showSlide(index) {
  const gallery = document.querySelector(".gallery-images");
  const total = document.querySelectorAll(".gallery-images img").length;
  if (index >= total) currentIndex = 0;
  else if (index < 0) currentIndex = total - 1;
  else currentIndex = index;
  gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }
