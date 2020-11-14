// $(function() {

//     // $('.header.header-right a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');

//         var url = window.location;
//         console.log(url)
//     // Will only work if string in href matches with location
//         $(' a[href="+url+"]').parent().addClass("active");

// });

// $(function() {
//     $('.header.header-right a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
//   });

$(document).ready(function () {
//     var url = window.location;
// // Will only work if string in href matches with location
//     $('div.header.header-right a[href="' + url + '"]').addClass('active');

// // Will also work for relative and absolute hrefs
//     $('div.header.header-right a').filter(function () {
//         return this.href == url;
//     }).parent().addClass('active').parent().parent().addClass('active');
console.log(location.pathname.split("/")[location.pathname.split("/").length-1]);
$('.header.header-right a[href="'+location.pathname.split("/")[location.pathname.split("/").length-1]+'"]').addClass('active');
});