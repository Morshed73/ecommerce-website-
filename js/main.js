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
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: true,
  prevArrow: '<i class="fa-solid fa-arrow-left prev-arrow"></i>',
  nextArrow: '<i class="fa-solid fa-arrow-right next-arrow"></i>',
});
// best sells progress
let progress = document.querySelector('.progress');
let sold = document.querySelector('.sold');
sold.innerHTML = progress.value;
// Deals count down
const days=document.querySelector('.days');
const hours=document.querySelector('.hours');
const minutes=document.querySelector('.minutes');
const seconds=document.querySelector('.seconds');
const OfferYear = new Date().getFullYear();
const offerDate = new Date(`March 9 ${OfferYear} 00:00:00`)
function countdownOfferTime(){
  const presentTime = new Date();
  const offerEnds = offerDate - presentTime;
  const daysLeft = Math.floor(offerEnds / 1000 / 60 / 60 / 24);
  days.innerHTML = daysLeft;
  if(days.innerHTML < 0){
    days.innerHTML = '00';
  }else if(days.innerHTML < 10){
    days.innerHTML = '0' + daysLeft;
  }else{
    daysLeft;
  }
  const hoursLeft = Math.floor(offerEnds / 1000 / 60 / 60) %24;
  hours.innerHTML = hoursLeft;
  if(hours.innerHTML < 0){
    hours.innerHTML = '00';
  }else if(hours.innerHTML < 10){
    hours.innerHTML = '0' + hoursLeft;
  }else{
    hoursLeft;
  }
  const minutesLeft = Math.floor(offerEnds / 1000 / 60) %60;
  minutes.innerHTML = minutesLeft;
  if(minutes.innerHTML < 0){
    minutes.innerHTML = '00';
  }else if(minutes.innerHTML < 10){
    minutes.innerHTML = '0' + minutesLeft;
  }else{
    minutesLeft;
  }
  const secondsLeft = Math.floor(offerEnds / 1000 / 60 / 60) %24;
  seconds.innerHTML = secondsLeft;
  if(seconds.innerHTML < 0){
    seconds.innerHTML = '00';
  }else if(hours.innerHTML < 10){
    seconds.innerHTML = '0' + secondsLeft;
  }else{
    secondsLeft;
  }
}
setInterval(countdownOfferTime);