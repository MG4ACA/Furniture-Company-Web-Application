let HomeBody = document.getElementById('homeBody');
HomeBody.style.display='block';

let Footer = document.getElementById('footer');
Footer.style.display='block';

let BedCategory = document.getElementById('bedCategory');
BedCategory.style.display='none';

$('#btnBeds').click(function (){
    HomeBody.style.display='none';
    Footer.style.display='none';
    BedCategory.style.display='block';
});
