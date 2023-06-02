

//sid Bar

$("#mobile").click(function () {
  $('.sideBar').addClass("showMenu");
  $('.sideBar').removeClass("widthChange");
  $('.backdrop').addClass('showBackdrop')
});
$(".cross-icon").click(function () {
  $('.sideBar').removeClass("showMenu");
  $('.backdrop').removeClass('showBackdrop')
});
$(".backdrop").click(function () {
  $('.sideBar').removeClass("showMenu");
  $('.backdrop').removeClass('showBackdrop')
});
$("#desktop").click(function () {
  $('li label').toggleClass("hideMenuList");
  $('.sideBar').toggleClass("widthChange");
});
$('li').click(function () {
  $('li').removeClass();
  $(this).addClass('selected');
  $('.sideBar').removeClass("showMenu");
});


//serch Box

const searchInput = document.querySelector('.search-box input[type="text"]');
const searchButton = document.querySelector('.search-box button');
const searchHistory = document.querySelector('.search-history');
const searchResults = document.querySelector('.search-results');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm !== '') {
    // Display the search term in the body of the page
    searchResults.textContent = `You searched for: ${searchTerm}`;

    // Add the search term to the search history
    const searchItem = document.createElement('li');
    searchItem.textContent = searchTerm;
    searchHistory.appendChild(searchItem);
  }
});

searchButton.addEventListener('click', () => {
  searchHistory.innerHTML = '';
  searchResults.textContent = '';
});


