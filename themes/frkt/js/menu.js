document.addEventListener('DOMContentLoaded', () => {
   document.querySelector('.btn-menu').onclick = openMenu;
   document.querySelector('.panel-overlay').onclick = openMenu;
 });


 function openMenu() {
   		document.querySelector('.panel-overlay').classList.toggle("active");
      document.querySelector('.asidel').classList.toggle("open");
 }
