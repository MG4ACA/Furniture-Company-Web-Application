/*-----------------Home Page--------------------------*/

let HomeBody = document.getElementById('homeBody');
HomeBody.style.display='block';

let Footer = document.getElementById('footer');
Footer.style.display='block';

let BedCategory = document.getElementById('bedCategory');
BedCategory.style.display='none';

let ProductInfo = document.getElementById('productInfo');
ProductInfo.style.display='none';

$('#btnBeds').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='block';
    ProductInfo.style.display='none';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

var btnProductDetails1 = document.getElementById("btnProductDetails1");
var btnProductDetails2 = document.getElementById("btnProductDetails2");
var btnProductDetails3 = document.getElementById("btnProductDetails3");


btnProductDetails1.addEventListener('click',function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='block';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

btnProductDetails2.addEventListener('click',function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='block';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

btnProductDetails3.addEventListener('click',function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='block';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});


/*-------------------------------Product Info Page---------------------------*/

var ProductImg =document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
var ProductHomeImg = document.getElementsByClassName("ProductHomeImg");

SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}

ProductHomeImg[0].onclick = function () {
    ProductImg.src = ProductHomeImg[0].src;
    SmallImg[0].src = ProductHomeImg[0].src;
    SmallImg[1].src =  'assets/img/cart 1.1.jpg';
    SmallImg[2].src =  ProductHomeImg[0].src;
    SmallImg[3].src =  'assets/img/cart 1.1.jpg';

}
ProductHomeImg[1].onclick = function () {
    ProductImg.src = ProductHomeImg[1].src;
    SmallImg[0].src = ProductHomeImg[1].src;
    SmallImg[1].src = '';
    console.log("AWA")
}
ProductHomeImg[2].onclick = function () {
    ProductImg.src = ProductHomeImg[2].src;
    SmallImg[0].src = ProductHomeImg[2].src;
    SmallImg[1].src = '';
}

/*---------------------------------About Us-----------------------------------*/
let AbutUs = document.getElementById('aboutUs');
AbutUs.style.display='none';

$('#btnAboutUs').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='none';
    AbutUs.style.display='block';
    ContactUs.style.display='none';
});

/*---------------------------------Contact Us-------------------------------------*/

let ContactUs = document.getElementById('contactUs');
ContactUs.style.display='none';

$('#btnContactUs').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='none';
    AbutUs.style.display='none';
    ContactUs.style.display='block';
});

/*---------------------------------Mobile Version-------------------------------------*/

$('#btnBedsNav').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='block';
    ProductInfo.style.display='none';
    AbutUs.style.display='none';
    ContactUs.style.display='none';
});

var show = document.getElementById("nav-links");
function showMenu(){
    show.style.display="block";
    show.style.visibility="visible";
    show.style.right = "0";
}
function closeMenu(){
    show.style.right = "-200px";
    show.style.display="none";
}

var show2=document.getElementById("main-nav-links")
var contactUs=document.getElementById("contactUsForm")
function showMain() {
    show2.style.display="block";
    show2.style.left="0";
    contactUs.className=" ";
}
function closeMainMenu(){
    show2.style.display="none";
    show2.style.right= "157px";
}

$('#btnMAbout').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='none';
    AbutUs.style.display='block';
    ContactUs.style.display='none';
});


$('#btnMContact').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='block';
    BedCategory.style.display='none';
    ProductInfo.style.display='none';
    AbutUs.style.display='none';
    ContactUs.style.display='block';
});
