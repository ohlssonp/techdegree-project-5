const searchInput = document.getElementById('search');
const gallery = document.querySelector('.gallery');
searchInput.addEventListener('keyup', function() {
  const searchValue = this.value.toLowerCase();
  const items = gallery.querySelectorAll('.item');
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const caption = item.querySelector('a').getAttribute('data-caption').toLowerCase();
    if (caption.includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});