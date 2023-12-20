const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];const d = new Date();
var dd=d.getDate();
var dm2=d.getMonth();
var dy=d.getFullYear();$('.footer__y').html(dy);
var dm3=dm2-1;var dm=monthNames[dm3];
var dm4=dy-1;dd2=(491+ Number(dm4))*4;

console.log("dd2== " + dd2);
console.log("dm4== " + dm4);
$('#catalogNavbarLink').click(function() {$('.menu-burger').toggleClass('menu-burger--active');$('.j-menu-burger-main').toggleClass('j-menu-active');});
$('.j-search-header-icon').click(function() {$('.menu-burger').toggleClass('menu-burger--active');$('.j-menu-burger-main').toggleClass('j-menu-active');});
$('.nav-element__burger').click(function() {$('.menu-burger').toggleClass('menu-burger--active');$('.j-menu-burger-main').toggleClass('j-menu-active');});
$('.btn_mnu18').click(function() {$('.menu-burger').toggleClass('menu-burger--active');$('.j-menu-burger-main').toggleClass('j-menu-active');});
$('.menu-burger__close2').click(function() {$('.menu-burger').removeClass('menu-burger--active');$('.j-menu-burger-main').removeClass('j-menu-active');});



jQuery(function($){
    $(document).mouseup( function(e){var db221=$(".menu-burger").css('display');
if(db221=='flex'){
var div = $( ".menu-burger" );
var burger = $( "#catalogNavbarLink" );
var burger2 = $( "#nav-element__burger" );
var hooklink = $( ".j-search-header-icon" );
if ( !div.is(e.target) && div.has(e.target).length === 0
&& !burger.is(e.target) && burger.has(e.target).length === 0
&& !burger2.is(e.target) && burger2.has(e.target).length === 0
&& !hooklink.is(e.target) && hooklink.has(e.target).length === 0 ) {
// div.removeClass('db');
$('.menu-burger').removeClass('menu-burger--active');$('.j-menu-burger-main').removeClass('j-menu-active');
}
}
    });
});

$(".lazy07").lazyload({effect:"fadeIn"});
$("img.lazyload").lazyload();
var articleW=$(".main-page__content1 article").width();console.log(articleW);$(".main-page__content2 article").width(articleW-22);



$('.menu-burger__main-list-item').mouseleave(function(event) {$('.menu-burger__main-list-item').removeClass('menu-burger__main-list-item--active');});
$('.menu-burger__main-list-item').mouseenter(function(event) {$('.menu-burger__main-list-item').removeClass('menu-burger__main-list-item--active');$(this).addClass('menu-burger__main-list-item--active');});
// let timerId = setTimeout(function tick() {$(".active_slide2").toggleClass('active_slide');timerId = setTimeout(tick, 3000);}, 3000);
// let timerId1 = setTimeout(function tick1() {$(".active_slide1").toggleClass('active_slide');timerId1 = setTimeout(tick1, 3100);}, 3200);

// -----------------
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(p){var o=/\+/g;function f(e){return m.raw?e:encodeURIComponent(e)}function l(e,n){e=m.raw?e:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),m.json?JSON.parse(e):e}catch(e){}}(e);return p.isFunction(n)?n(e):e}var m=p.cookie=function(e,n,o){var i,t;if(1<arguments.length&&!p.isFunction(n))return"number"==typeof(o=p.extend({},m.defaults,o)).expires&&(t=o.expires,(i=o.expires=new Date).setMilliseconds(i.getMilliseconds()+864e5*t)),document.cookie=[f(e),"=",(t=n,f(m.json?JSON.stringify(t):String(t))),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("");for(var r=e?void 0:{},c=document.cookie?document.cookie.split("; "):[],u=0,s=c.length;u<s;u++){var d=c[u].split("="),a=(a=d.shift(),m.raw?a:decodeURIComponent(a)),d=d.join("=");if(e===a){r=l(d,n);break}e||void 0===(d=l(d))||(r[a]=d)}return r};m.defaults={},p.removeCookie=function(e,n){return p.cookie(e,"",p.extend({},n,{expires:-1})),!p.cookie(e)}});
// -----------------

if($.cookie('name') == "undefined"){console.log("2. Кука undefined!");$.removeCookie('name', { path: '/' });}
if ( $.cookie('name') == null ) {
console.log("1. Кука не была установлена!");
}else{
var cookie_basket_id=$.cookie('id');
var cookie_basket_name=$.cookie('name');console.log("1. $.cookie('name')== "+$.cookie('name'));
var cookie_basket_price1=$.cookie('price1');
var cookie_basket_price2=$.cookie('price2');
$('.b-top__count').html('<span>Товары, 2 шт.</span><span class="b-right">951&nbsp;₽</span>');
$('.b-top__total').html('<span>Итого</span><span><span>951&nbsp;₽</span></span>');
$('.navbar-mobile__notify').html('2');
$('.b-btn-do-order').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_'+cookie_basket_id+'.html _Добрый день хочу заказать сайт '+cookie_basket_id+'.');

$('.wr_list12').html(
`<div id="`+cookie_basket_id+`" class="basket-form__content j-basket-form__content j_basket`+cookie_basket_id+`"><div class="basket-form__basket-section basket-section"><div class="basket-section__basket-list basket-list"><div class="basket-list__accordion accordion"><div class="accordion__body j-b-list-content"><div class="accordion__list"><div><div class="accordion__list-item list-item j-b-basket-item"><div class="list-item__wrap"><div class="list-item__good">
<a href="https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_`+cookie_basket_id+`.html _Добрый день хочу заказать сайт `+cookie_basket_id+`" class="img-plug list-item__good-img j-product-popup" title="`+cookie_basket_name+`">
<img class="lazy07" src="https://envatomarket.ru/baza-img-small/`+cookie_basket_id+`.webp" data-src="https://envatomarket.ru/baza-img-small/`+cookie_basket_id+`.webp" alt="`+cookie_basket_name+`" width="705" height="394" style="object-fit: cover;height:100%;"></a>
<div class="list-item__good-info good-info"><div class="list-item__price">
<div class="list-item__price-new">`+cookie_basket_price2+`&nbsp;₽</div><div class="list-item__price-old">`+cookie_basket_price1+`&nbsp;₽</div>
<div class="list-item__btn btn">
<button class="btn__del11 btn__del j-basket-item-del btn__del`+cookie_basket_id+`" type="button" data-btn-id="`+cookie_basket_id+`"><span>Удалить</span></button></div>
</div><a href="#" class="good-info__title j-product-popup"><span class="good-info__good-name">№ `+cookie_basket_id+` | `+cookie_basket_name+`</span>
</a>
<div class="good-info__properties "><p class="good-info__color"><span class="good-info__item">Дизайн сайтов</span></p></div><div class="good-info__seller seller j-suppliers-info hide-mobile"></div>
</div></div></div></div></div></div></div></div></div></div></div>
<scr`+`ipt>$(".btn__del`+cookie_basket_id+`").click(function(){$(".j_basket`+cookie_basket_id+`").remove();$('.b-top__count').html('<span>Товары, 1 шт.</span><span class="b-right">1&nbsp;₽</span>');$('.b-top__total').html('<span>Итого</span><span><span>1&nbsp;₽</span></span>');$('.b-btn-do-order').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/ _Добрый день хочу заказать сайт.');$('.navbar-mobile__notify').html('1');$.removeCookie('name', { path: '/' });console.log("55. $.cookie('name')== "+$.cookie('name'));});</scr`+`ipt>
`
);
}
// $.removeCookie('name');


$(".j-add-to-basket").click(function(){
var data_basket_id=$(this).attr('data-basket-id');console.log('data_basket_id== '+data_basket_id);
var data_basket_name=$(this).attr('data-basket-name');console.log('data_basket_name== '+data_basket_name);
var data_basket_price1=$(this).attr('data-basket-price1');console.log('data_basket_price1== '+data_basket_price1);
var data_basket_price2=$(this).attr('data-basket-price2');console.log('data_basket_price2== '+data_basket_price2);
$('.b-top__count').html('<span>Товары, 2 шт.</span><span class="b-right">951&nbsp;₽</span>');
$('.b-top__total').html('<span>Итого</span><span><span>951&nbsp;₽</span></span>');
$('.navbar-mobile__notify').html('2');
$('.b-btn-do-order').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_'+data_basket_id+'.html _Добрый день хочу заказать сайт '+data_basket_id+'.');

if ( $.cookie('name') == null ) {
console.log("2. Кука не была установлена!");
}
else{
$.removeCookie('id');
$.removeCookie('name', { path: '/' });
$.removeCookie('price1');
$.removeCookie('price2');
console.log("1. $.cookie('name')== "+$.cookie('name'));
}

$.cookie('id', data_basket_id, { expires: 365, path: '/' });
$.cookie('name', data_basket_name, { expires: 365, path: '/' });
$.cookie('price1', data_basket_price1, { expires: 365, path: '/' });
$.cookie('price2', data_basket_price2, { expires: 365, path: '/' });
console.log("2. $.cookie('name')== "+$.cookie('name'));

$('.wr_list12').html(
`<div id="`+data_basket_id+`" class="basket-form__content j-basket-form__content j_basket`+data_basket_id+`"><div class="basket-form__basket-section basket-section"><div class="basket-section__basket-list basket-list"><div class="basket-list__accordion accordion"><div class="accordion__body j-b-list-content"><div class="accordion__list"><div><div class="accordion__list-item list-item j-b-basket-item"><div class="list-item__wrap"><div class="list-item__good">
<a href="https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_`+data_basket_id+`.html Добрый день хочу заказать сайт `+data_basket_id+`" class="img-plug list-item__good-img j-product-popup" title="`+data_basket_name+`">
<img class="lazy07" src="https://envatomarket.ru/baza-img-small/`+data_basket_id+`.webp" data-src="https://envatomarket.ru/baza-img-small/`+data_basket_id+`.webp" alt="`+data_basket_name+`" width="705" height="394" style="object-fit: cover;height:100%;"></a>
<div class="list-item__good-info good-info"><div class="list-item__price">
<div class="list-item__price-new">`+data_basket_price2+`&nbsp;₽</div><div class="list-item__price-old">`+data_basket_price1+`&nbsp;₽</div>
<div class="list-item__btn btn">
<button class="btn__del11 btn__del j-basket-item-del btn__del`+data_basket_id+`" type="button" data-btn-id="`+data_basket_id+`"><span>Удалить</span></button></div>
</div><a href="#" class="good-info__title j-product-popup"><span class="good-info__good-name">№ `+data_basket_id+` | `+data_basket_name+`</span>
</a>
<div class="good-info__properties "><p class="good-info__color"><span class="good-info__item">Дизайн сайтов</span></p></div><div class="good-info__seller seller j-suppliers-info hide-mobile"></div>
</div></div></div></div></div></div></div></div></div></div></div>
<scr`+`ipt>$(".btn__del`+data_basket_id+`").click(function(){$(".j_basket`+data_basket_id+`").remove();$('.b-top__count').html('<span>Товары, 1 шт.</span><span class="b-right">1&nbsp;₽</span>');$('.b-top__total').html('<span>Итого</span><span><span>1&nbsp;₽</span></span>');$('.b-btn-do-order').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/ _Добрый день хочу заказать сайт.');$('.navbar-mobile__notify').html('1');$.removeCookie('name', { path: '/' });console.log("56. $.cookie('name')== "+$.cookie('name'));});</scr`+`ipt>
`
);
});
$("[data-remodal-target=modal]").click(function(){var data_id2=$(this).attr('data--id');
$('.remodal-img').attr('src','https://envatomarket.ru/baza-img-big/'+data_id2+'.webp');
$('.remodal-btn').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_'+data_id2+'.html Добрый день хочу заказать сайт '+data_id2+'.');
$('.remodal-btn').html('Заказать сайт № '+data_id2+'');
$('.sp_id1').html('№ '+data_id2+'');
});



$(".btn__del").click(function(){
// $.removeCookie('name', { path: '/' });
console.log("57. $.cookie('name')== "+$.cookie('name'));
console.log($.cookie());});


$(".j-add-to-postpone").click(function(){$(".j-product-item").removeClass("j-product-item12");
var like1=$(this).parents('.j-product-item').addClass('j-product-item12');var like3=$(".j-product-item12 .product-card__count").html().slice(0,-7);var like4=Number(like3)+1;
var like5=$(".j-product-item12 .product-card__count span").html();
console.log(like5);
if(like5==undefined){
    $(".j-product-item12 .product-card__count").html('<span class="act_span__count">'+like4+'</span> оценки');
setTimeout(function(){$(".j-product-item12 .product-card__count span").removeClass('act_span__count');},500);
}else{var like6=$(".j-product-item12 .product-card__count span").html();like6=Number(like6)-1;$(".j-product-item12 .product-card__count").html(''+like6+' оценки');setTimeout(function(){$(".j-product-item12 .product-card__count span").removeClass('act_span__count');},500);}
});

$(".product-card__heart").click(function(){$(this).toggleClass("product-card__heart_active");});