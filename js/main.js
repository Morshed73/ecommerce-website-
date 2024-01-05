// header news
$('.header-news-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    vertical: true,
  });
  // location button
  const locationButton = document.querySelector('.header-location-button');
  locationButton.addEventListener('click', function(){
    const locationDrop = document.querySelector('locationDropVisible')
    locationDrop.style.display = "";
    console.log("someone enterd");
  })
// banner slider
$('.banner-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  dots: true,
  prevArrow: '<i class="fa-solid fa-chevron-left prev-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-chevron-right next-arrow"></i>',
});
// catagories slider
$('.catagories-slider').slick({
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-left prev-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next-arrow"></i>',
});
// best sells slider
$('.best-sells-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-left prev-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next-arrow"></i>',
});
// best sells progress
let progress = document.querySelector('.progress');
let sold = document.querySelector('.sold');
sold.innerHTML = progress.value;
progress.addEventListener("input", function(){
  sold.innerHTML = this.value;
})