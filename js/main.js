/*
document.addEventListener("DOMContentLoaded", function(event){
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');  
  const switchModal = () => {
    modal.classList.toggle('modal--visible')
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    };
  };
  document.addEventListener('keydown', (event) => { 
      if (event.code == 'Escape') {      
      modal.classList.toggle('modal--visible');
    };
  });

  

  

  // document.addEventListener('click', function(event) {
  //   var e=document.getElementsByClassName('modal');
  //   if (!e.contains(event.target)) switchModal;
  // });
  
  

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $('').click(function(){
    modal.toggleClass('modal--visible');
  });

  $(window).on('click', function (e) {
    if (modal.is(e.target)) {
      modal.toggleClass('modal--visible');
    };
  });

  $(document).on('keydown', function (e) {
    if (e.code == 'Escape' && modal.hasClass('modal--visible')) {       
      modal.toggleClass('modal--visible');                              
    };    
  });

  // $(document).keyup(function(e) {
  //   console.log(e);
  // });


  
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 1   
    
  });

  

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets =$('.swiper-pagination')

  next.css('left', prev.width() + 25 + bullets.width() + 10 )
  bullets.css('left', prev.width() + 25 )


  // инициализация библиотеки wow
  new WOW().init();


  // появление стрелки наверх при прокрутки страницы
  var button = $('#button-up');	
  $(window).scroll (function () {
    if ($(this).scrollTop () > 300) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function(){
    $('body, html').animate({
    scrollTop: 0
    }, 800);
    return false;
  }); 


  // Запуск анимации при скроллинге "ДОДЕЛАТЬ"
  var block_show = false;
 
  function scrollTracking(){
    if (block_show) {
      return false;
    }
  
    var wt = $(window).scrollTop();
    var wh = $(window).height();
    var et = $('.active').offset().top;
    var eh = $('.active').outerHeight();
    var dh = $(document).height();   
  
    if (wt + wh >= et || wh + wt == dh || eh + et < wh){
      block_show = true;
    }
  }
  
  $(window).scroll(function(){
    scrollTracking();
  });
    
  $(document).ready(function(){ 
    scrollTracking();
  });
  

  // Валидация формы
  $('.modal__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17        
      },
      policyCheckbox: "required",
      // правило-объект
      userEmail: {
        required: true,
        email: true
      }
    }, // сообщения 
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиннее 15 символов" 
      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Укажите телефон полностью"          
      },
      policyCheckbox: "Отметьте поле",
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  $('.control__form').validate({
    errorElement: "div",
    errorClass: "invalid invalid-control",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17        
      },
      policyCheckbox: "required",      
    }, // сообщения 
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиннее 15 символов" 
      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Укажите телефон полностью"          
      },
      policyCheckbox: "Отметьте поле"     
    }
  });

  $('.footer__form').validate({
    errorElement: "div",
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17        
      },
      policyCheckbox: "required",
      userQuestion: {
        required: true,
        minlength: 5
      },      
    }, // сообщения 
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не длиннее 15 символов"  
      }, 
      userPhone: {
        required: "Заполните поле",
        minlength: "Укажите телефон полностью"          
      },
      policyCheckbox: "Отметьте поле",
      userQuestion: {
        required: "Заполните поле",
        minlength: "сообщение не короче пяти букв" 
      }
    }
  });

  
  // маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.786786, 49.142331],
            zoom: 9,
            scroll: false
           
        }, {
            searchControlProvider: 'yandex#search'
            
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'вход со стороны суда'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        })
        myMap.geoObjects
            .add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
              

});

});


