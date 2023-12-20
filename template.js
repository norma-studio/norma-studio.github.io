$("[data-remodal-target=modal]").click(function(){var data_id2=$(this).attr('data--id');
$('.remodal-img').attr('src','https://envatomarket.ru/baza-img-big/'+data_id2+'.webp');
$('.remodal-btn').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_'+data_id2+'.html Добрый день хочу заказать сайт '+data_id2+'.');
$('.remodal-btn').html('Заказать сайт № '+data_id2+'');
$('.sp_id1').html('№ '+data_id2+'');
});
$('.article11').html('');
for (let i = 0; i < 10; i++) {
var dateNow = new Date();

function randomIntFromInterval24(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}const rndInt24 = randomIntFromInterval24(10, 23);
function randomIntFromInterval60(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}const rndInt60 = randomIntFromInterval60(10, 60);
function randomIntFromInterval31(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}const rndInt31 = randomIntFromInterval31(0, 90);
function randomIntFromInterval05(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}const rndInt05 = randomIntFromInterval05(4, 5);

var star5=rndInt05;var items=['Александр','Дмитрий','Максим','Сергей','Андрей','Алексей','Артём','Илья','Кирилл','Михаил','Никита','Матвей','Роман','Егор','Арсений','Иван','Денис','Евгений','Тимофей','Владислав','Игорь','Владимир','Павел','Руслан','Марк','Константин','Тимур','Олег','Ярослав','Антон','Николай','Данил','Анастасия','Мария','Анна','Виктория','Екатерина','Наталья','Марина','Полина','София','Дарья','Алиса','Ксения','Александра','Елена','Алиса','Алина','Виктория','Вероника','Елена','Марина','Жанна','Снежана','Светлана','Ольга','Полина','Рената','Кристина','Наталья','Эльвира','Мария',];
var items1=[
'Работаем с 2006 г. Сейчас они нам наполнили уже второй сайт по строительной тематике. Рекомендуем',
'Премного благодарен за помощь…! ',
' Молодцы мы довольны и рады что есть такие компании',
'Супер👍👍👍 ',
'👍👍👍👍👍👍👍👍👍 ',

'Вы даже не представляете, насколько Вы хороши — в сравнении с другими фирмачками! Всем рекомендую.'
];
var item = items[Math.floor(Math.random()*items.length)];
var item1 = items1[Math.floor(Math.random()*items1.length)];

var numberOfDaysToAdd = -(rndInt31);
var resultDate = dateNow.setDate(dateNow.getDate() + numberOfDaysToAdd);
var dateNow0 = new Date(resultDate);
var hours = rndInt24;
var minutes = rndInt60;
var month = dateNow0.getMonth()+1;

var time0 = dateNow0.getDate() + '.' +month + '.' +dateNow0.getFullYear() + ', ' +hours + ":" + minutes;
$('.comment-card__date').eq(0).html();
$('.comment-card__date').eq(10).html(dateNow.setDate(dateNow.getDate() + 10));
var eq12=$('.comment-card__date').eq(11).html();


$('.article11').append(`

<div class="swiper-slide comment-card j-feedback-slide swiper-slide-active"><div class="comment-card__header"><div class="comment-card__img-wrap"><div class="comment-card__avatar img-plug"><img class="comment-card__img j-user-profile lazy07" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAMCAQAAADB7vUKAAAAEUlEQVR42mNkIAAYRxXQSwEAC5oADbo22BYAAAAASUVORK5CYII=" data-src="../PersonalPhoto.png" width="40" height="40" alt="User avatar"></div><span class="comment-card__flag flag-ru"></span></div><div class="comment-card__wrap"><div class="comment-card__main"><p class="comment-card__name j-user-profile">`+item+`</p><p class="comment-card__date">`+time0+`</p></div><div class="comment-card__side"><span class="comment-card__stars stars-line star`+star5+`"></span><div class="comment-card__parameters"><span class="comment-card__param"></span></div></div></div></div><div class="comment-card__content"><p class="comment-card__message j-feedback-text">`+item1+`<span class="comment-card__message-more hide j-show-more-btn"><span class="comment-card__more">ещё</span></span></p></div></div>

`);

}
$(".lazy07").lazyload({effect:"fadeIn"});


var table={1999880909:{id:"80909",name2:"electronika",price1:"2000",price2:"950",name:" Сеть компьютерных магазинов "},
1999781050:{id:"81050",name2:"electronika",price1:"2000",price2:"950",name:" система безопасности, видеонаблюдения, сигнализация "},
1999681225:{id:"81225",name2:"mebel",price1:"2000",price2:"950",name:" Мебель на заказ "},
1999581303:{id:"81303",name2:"mebel",price1:"2000",price2:"950",name:" Мебель для дома "},
1999481377:{id:"81377",name2:"electronika",price1:"2000",price2:"950",name:" Системы вентилирования, кондиционирования "},
1999381407:{id:"81407",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Ювелирные изделия "},
1999281461:{id:"81461",name2:"stroitelstvo_stroimaterialy",price1:"2000",price2:"950",name:" Кованые изделия "},
1999181529:{id:"81529",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Продажа СВЕТОДИОДНОГО ОБОРУДОВАНИЯ "},
1999081605:{id:"81605",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Светотехника "},
1998981610:{id:"81610",name2:"mebel",price1:"2000",price2:"950",name:" Ковры "},
1998881685:{id:"81685",name2:"mebel",price1:"2000",price2:"950",name:" Ремонт мебели, реставрация "},
1998781722:{id:"81722",name2:"electronika",price1:"2000",price2:"950",name:" Системы безопасности, видеонаблюдения "},
1998681907:{id:"81907",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Посадочный материал, семена "},
1998581976:{id:"81976",name2:"electronika",price1:"2000",price2:"950",name:" Компьютеры, комплектующие "},
1998482086:{id:"82086",name2:"mebel",price1:"2000",price2:"950",name:" Мебель для дома и офиса "},
1998382107:{id:"82107",name2:"odezhda_obuv_sumki_bele_tkani",price1:"2000",price2:"950",name:" Женская одежда "},
1998282111:{id:"82111",name2:"bytovye_uslugi_dosug_turizm",price1:"2000",price2:"950",name:" Продажа и обслуживание лифтов и эскалаторов "},
1998182123:{id:"82123",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Кафе с настольными играми "},
1998082197:{id:"82197",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт и установка бытовой техники "},
1997982200:{id:"82200",name2:"detskie_tovari",price1:"2000",price2:"950",name:" Детская одежда и обувь "},
1997882229:{id:"82229",name2:"detskie_tovari",price1:"2000",price2:"950",name:" Детская одежда и обувь "},
1997782246:{id:"82246",name2:"mebel",price1:"2000",price2:"950",name:" Шторы "},
1997682265:{id:"82265",name2:"mebel",price1:"2000",price2:"950",name:" Мебель для офиса "},
1997582297:{id:"82297",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Каталог цветов "},
1997482298:{id:"82298",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Семена и посадочный материал "},
1997382301:{id:"82301",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт и установка бытовой техники "},
1997282325:{id:"82325",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Садово-огородный инвентарь "},
1997182371:{id:"82371",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Сайт писателя "},
1997082428:{id:"82428",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Праздничное оформление "},
1996982493:{id:"82493",name2:"odezhda_obuv_sumki_bele_tkani",price1:"2000",price2:"950",name:" Товары текстильной промышленности "},
1996882501:{id:"82501",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Товары для праздника "},
1996782543:{id:"82543",name2:"detskie_tovari",price1:"2000",price2:"950",name:" Детская одежда и обувь "},
1996682547:{id:"82547",name2:"detskie_tovari",price1:"2000",price2:"950",name:" Товары для новорожденных "},
1996582822:{id:"82822",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт бытовой техники "},
1996483005:{id:"83005",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Пиротехника, Салюты "},
1996383009:{id:"83009",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Натуральные камни "},
1996283126:{id:"83126",name2:"mebel",price1:"2000",price2:"950",name:" Постельное белье "},
1996183139:{id:"83139",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт компьютерной техники "},
1996083232:{id:"83232",name2:"mebel",price1:"2000",price2:"950",name:" Мебель для дома и офиса "},
1995983274:{id:"83274",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Посадочный материал, семена "},
1995883289:{id:"83289",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт компьютерной техники "},
1995783314:{id:"83314",name2:"odezhda_obuv_sumki_bele_tkani",price1:"2000",price2:"950",name:" Сумки, кожгалантерея "},
1995683391:{id:"83391",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Приюты для животных "},
1995583393:{id:"83393",name2:"mebel",price1:"2000",price2:"950",name:" Мебель для дома "},
1995483399:{id:"83399",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Все для офиса, школы, детского творчества "},
1995383402:{id:"83402",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Программное обеспечение "},
1995283417:{id:"83417",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт компьютеров "},
1995183532:{id:"83532",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт компьютерной техники "},
1995083564:{id:"83564",name2:"mebel",price1:"2000",price2:"950",name:" Постельное бельё и текстиль для дома "},
1994983567:{id:"83567",name2:"mebel",price1:"2000",price2:"950",name:" Домашний текстиль "},
1994883583:{id:"83583",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Люстры "},
1994783598:{id:"83598",name2:"electronika",price1:"2000",price2:"950",name:" Системы вентилирования, кондиционирования. "},
1994683681:{id:"83681",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт компьютерной техники "},
1994583732:{id:"83732",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт компьютеров "},
1994483889:{id:"83889",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Ветеринарные аптеки "},
1994383892:{id:"83892",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Посуда "},
1994283899:{id:"83899",name2:"mebel",price1:"2000",price2:"950",name:" Матрасы "},
1994183908:{id:"83908",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Бижутерия "},
1994083942:{id:"83942",name2:"odezhda_obuv_sumki_bele_tkani",price1:"2000",price2:"950",name:" Трикотажные изделия "},
1993983989:{id:"83989",name2:"mebel",price1:"2000",price2:"950",name:" Пошив штор "},
1993884017:{id:"84017",name2:"electronika",price1:"2000",price2:"950",name:" Ремонт и установка бытовой техники "},
1993784024:{id:"84024",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Ювелирная мастерская "},
1993684054:{id:"84054",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Цветы. Студия флористики. Оформление цветами. "},
1993584169:{id:"84169",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Удобрения и агрохимические продукты "},
1993484181:{id:"84181",name2:"detskie_tovari",price1:"2000",price2:"950",name:" Игрушки "},
1993384183:{id:"84183",name2:"electronika",price1:"2000",price2:"950",name:" Системы безопасности, видеонаблюдения, сигнализации "},
1993284188:{id:"84188",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Керамические изделия "},
1993184197:{id:"84197",name2:"electronika",price1:"2000",price2:"950",name:" Часы "},
1993084290:{id:"84290",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Бижутерия "},
1992984296:{id:"84296",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Офисная техника, товары для офиса "},
1992884304:{id:"84304",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Сувениры, подарки "},
1992784314:{id:"84314",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Текстиль и предметы интерьера "},
1992684321:{id:"84321",name2:"bytovye_tovary_elektronika_tovary_dlya_ofisa",price1:"2000",price2:"950",name:" Приют для кошек "},
1992584322:{id:"84322",name2:"mebel",price1:"2000",price2:"950",name:" Текстиль для дома "},
1992484331:{id:"84331",name2:"odezhda_obuv_sumki_bele_tkani",price1:"2000",price2:"950",name:" Нижнее бельё "},
1992384359:{id:"84359",name2:"odezhda_obuv_sumki_bele_tkani",price1:"2000",price2:"950",name:" Спецодежда, спецобувь, СИЗ "},
};


setTimeout(function(){

function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2101=randomIntFromInterval(1,75);console.log("rndInt2101 --- "+rndInt2101);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2102=randomIntFromInterval(1,75);console.log("rndInt2102 --- "+rndInt2102);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2103=randomIntFromInterval(1,75);console.log("rndInt2103 --- "+rndInt2103);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2104=randomIntFromInterval(1,75);console.log("rndInt2104 --- "+rndInt2104);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2105=randomIntFromInterval(1,75);console.log("rndInt2105 --- "+rndInt2105);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2106=randomIntFromInterval(1,75);console.log("rndInt2106 --- "+rndInt2106);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2107=randomIntFromInterval(1,75);console.log("rndInt2107 --- "+rndInt2107);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2108=randomIntFromInterval(1,75);console.log("rndInt2108 --- "+rndInt2108);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2109=randomIntFromInterval(1,75);console.log("rndInt2109 --- "+rndInt2109);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2110=randomIntFromInterval(1,75);console.log("rndInt2110 --- "+rndInt2110);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2111=randomIntFromInterval(1,75);console.log("rndInt2111 --- "+rndInt2111);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2112=randomIntFromInterval(1,75);console.log("rndInt2112 --- "+rndInt2112);

function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2113=randomIntFromInterval(1,75);console.log("rndInt2113 --- "+rndInt2113);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2114=randomIntFromInterval(1,75);console.log("rndInt2114 --- "+rndInt2114);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2115=randomIntFromInterval(1,75);console.log("rndInt2115 --- "+rndInt2115);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2116=randomIntFromInterval(1,75);console.log("rndInt2116 --- "+rndInt2116);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2117=randomIntFromInterval(1,75);console.log("rndInt2117 --- "+rndInt2117);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2118=randomIntFromInterval(1,75);console.log("rndInt2118 --- "+rndInt2118);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2119=randomIntFromInterval(1,75);console.log("rndInt2119 --- "+rndInt2119);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2120=randomIntFromInterval(1,75);console.log("rndInt2120 --- "+rndInt2120);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2121=randomIntFromInterval(1,75);console.log("rndInt2121 --- "+rndInt2121);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2122=randomIntFromInterval(1,75);console.log("rndInt2122 --- "+rndInt2122);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2123=randomIntFromInterval(1,75);console.log("rndInt2123 --- "+rndInt2123);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2124=randomIntFromInterval(1,75);console.log("rndInt2124 --- "+rndInt2124);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2125=randomIntFromInterval(1,75);console.log("rndInt2125 --- "+rndInt2125);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2126=randomIntFromInterval(1,75);console.log("rndInt2126 --- "+rndInt2126);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2127=randomIntFromInterval(1,75);console.log("rndInt2127 --- "+rndInt2127);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2128=randomIntFromInterval(1,75);console.log("rndInt2128 --- "+rndInt2128);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2129=randomIntFromInterval(1,75);console.log("rndInt2129 --- "+rndInt2129);
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt2130=randomIntFromInterval(1,75);console.log("rndInt2130 --- "+rndInt2130);
var i=0;$('.content10').html('');
for(var key in table){i++;

if(i!=rndInt2101&&i!=rndInt2102&&i!=rndInt2103&&i!=rndInt2104&&i!=rndInt2105&&i!=rndInt2106&&i!=rndInt2107&&i!=rndInt2108&&i!=rndInt2109&&i!=rndInt2110&&i!=rndInt2111
&&i!=rndInt2112
&&i!=rndInt2113
&&i!=rndInt2114
&&i!=rndInt2115
&&i!=rndInt2116
&&i!=rndInt2117
&&i!=rndInt2118
&&i!=rndInt2119
&&i!=rndInt2120
&&i!=rndInt2121
&&i!=rndInt2122
&&i!=rndInt2123
&&i!=rndInt2124
&&i!=rndInt2125
&&i!=rndInt2126
&&i!=rndInt2127
&&i!=rndInt2128
&&i!=rndInt2129
&&i!=rndInt2130
){}else{
var gdfd1=table[key];var id=gdfd1["id"];var name2=gdfd1["name2"];var price1=gdfd1["price1"];var price2=gdfd1["price2"];var name=gdfd1["name"];
function randomIntFromInterval(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt=randomIntFromInterval(8,9);
function randomIntFromInterval1(min,max){return Math.floor(Math.random()*(max-min+1)+min)}const rndInt1=randomIntFromInterval1(5011,9988);
var money=price2;var tallage=price1;var percent1=Math.round(money*100/tallage);var percent2=Math.round(100-(money*100/tallage));var _name2="#"+name2;
$('.content10').append(
`<article id="`+id+`" class="main-page__product product-card j-product-item product-card--hoverable j-content-item"><div class="product-card__wrapper"><a draggable="false" class="product-card__link j-card-link j-open-full-product-card" href="#" data-remodal-target="modal" data--id="`+id+`"></a><div class="product-card__top-wrap"><button class="product-card__heart j-add-to-postpone" type="button" aria-label="Добавить в избранное"></button><div class="product-card__tips product-card__tips--top"></div>
<div class="product-card__img-wrap img-plug j-thumbnail-wrap"><img class="j-thumbnail lazy07" width="516" height="688" src="https://envatomarket.ru/baza-img-small/`+id+`.webp" alt="`+name+` / Лендинг с админкой `+price2+` ₽ / № `+id+`"></div><div class="product-card__tips product-card__tips--bottom">
<p class="product-card__tip product-card__tip--sale">-48%</p>
<p class="product-card__tip product-card__tip--action">№ `+id+`</p><p class="product-card__tip product-card__tip--good-price">Хорошая цена</p></div><button class="product-card__fast-view hide-mobile j-open-product-popup" type="button">Быстрый просмотр</button><p class="product-card__adults">`+name+` / Лендинг с админкой `+price2+` ₽ / № `+id+`</p></div><div class="product-card__middle-wrap"><p class="product-card__price price"><span class="price__wrap"><ins class="price__lower-price">`+price2+` ₽</ins><del>`+price1+` ₽</del></span></p><h2 class="product-card__brand-wrap product-card__brand-wrap--no-wrap">
<span class="product-card__name product-card__id">№ `+id+`</span>
<span class="product-card__brand">`+name+` / Лендинг с админкой `+price2+` ₽ / № `+id+`</span>
<span class="product-card__name product-card__name2">/ Tilda | Шаблоны сайтов от `+price2+` ₽</span></h2></div><div class="product-card__bottom-wrap"><p class="product-card__rating-wrap">
<span class="address-rate-mini address-rate-mini--sm">4.`+rndInt+`</span><span class="product-card__count">`+rndInt1+` оценки</span></p>
<p class="product-card__order-wrap"><a class="product-card__add-basket j-add-to-basket btn-main-sm" href="#" data-remodal-target="modal" data--id="`+id+`">Посмотреть</a></p></div></div>
</article>`
);
}
};
$("[data-remodal-target=modal]").click(function(){var data_id2=$(this).attr('data--id');
$('.remodal-img').attr('src','https://envatomarket.ru/baza-img-big/'+data_id2+'.webp');
$('.remodal-btn').attr('href','https://wa.me/79603570433?text=https://norma-studio.github.io/templates/template_'+data_id2+'.html Добрый день хочу заказать сайт '+data_id2+'.');
$('.remodal-btn').html('Заказать сайт № '+data_id2+'');
$('.sp_id1').html('№ '+data_id2+'');
});
}, 2500);

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