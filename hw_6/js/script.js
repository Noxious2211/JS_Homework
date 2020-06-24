document.querySelector('.header__mobile-ico').onclick = function () {
   document.querySelector('.mobile-ico').classList.toggle('mobile-ico-active');
   document.querySelector('.header__mobile-menu').classList.toggle('header__mobile-menu-active');
}
document.querySelector('.fa-search').onclick = function () {
   document.querySelector('.header__input').classList.toggle('header__input-active');
   document.querySelector('.header_user').classList.toggle('header__user-active');
}

