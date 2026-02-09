// BioLux Built - Global JavaScript

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Product Image Gallery
  const thumbnails = document.querySelectorAll('.product-thumbnail');
  const mainImage = document.querySelector('.product-main-image');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const newImage = this.dataset.image;
      if (mainImage && newImage) {
        mainImage.style.backgroundImage = `url(${newImage})`;
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Color Swatch Selection
  const colorSwatches = document.querySelectorAll('.color-swatch');
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      colorSwatches.forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Size Button Selection
  const sizeButtons = document.querySelectorAll('.size-button');
  sizeButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.closest('.variant-selector');
      if (parent) {
        parent.querySelectorAll('.size-button').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Quantity Selector
  const quantityBtns = document.querySelectorAll('.quantity-btn');
  quantityBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const input = this.parentElement.querySelector('.quantity-input');
      if (input) {
        let value = parseInt(input.value) || 1;
        if (this.dataset.action === 'increase') {
          value++;
        } else if (this.dataset.action === 'decrease' && value > 1) {
          value--;
        }
        input.value = value;
      }
    });
  });

});

// Format money helper
function formatMoney(cents) {
  return '$' + (cents / 100).toFixed(2);
}
