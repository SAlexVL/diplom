window.addEventListener('DOMContentLoaded', function() {

'use strict';

  // табы с окнами (п.5)
  let tab = document.querySelectorAll('.glazing_block'),
      blockLink = document.querySelectorAll('.glazing_block-link'),
      tabCon = document.querySelectorAll('.glazing_block-content'),
      tabConLink = document.querySelectorAll('.glazing_block-link'),
      info = document.querySelector('.glazing_slider'),
      tabContent = document.querySelectorAll('.glazing_content'),
      param1 = ['glazing_block', 'glazing_block-content', 'glazing_block-link'],
      param2 = [tab, tabCon, tabConLink];

    let hideTabC = (a) => {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }   
    };
    hideTabC(1);

    let showTabC = (b) => {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }   
    };

    let activeTabClass = (d) => {
      if (!blockLink[d].classList.contains('active')) {        
        blockLink[d].classList.add('active');
      }
    };

    let noActiveTabClass = () => {
        for (let i = 0; i < blockLink.length; i++) {
          blockLink[i].classList.remove('active');
        }                
    };
    
    for (let j = 0; j< param1.length; j++) {
      info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains(param1[j]) ) {
          for (let i = 0; i < param2[j].length; i++) {
            if (target == param2[j][i]) {
              hideTabC(0);
              showTabC(i);
              noActiveTabClass(i);
              activeTabClass(i);
              break;
            }
          }
        }
      });
    }
    // конец табы с окнами (п.5)
    // ---------------------------------
    // табы с отделкой (п.7)
    let tabOtd = document.querySelectorAll('.decoration_item-block'),
        tabOtdLink = document.querySelectorAll('.decoration_item-link'),
        infoOtd = document.querySelector('.decoration_slider'),
        tabContentOtd = document.querySelectorAll('.decoration_content-item'),
        massElemDom = ['decoration_item-block', 'decoration_item-link'],
        massVariable = [tabOtd, tabOtdLink];


    let hideTabCOtd = (a) => {
      for (let i = a; i < tabContentOtd.length; i++) {
        tabContentOtd[i].classList.remove('show');
        tabContentOtd[i].classList.add('hide');
      }   
    };
    hideTabCOtd(1);

    let showTabCOtd = (b) => {
      if (tabContentOtd[b].classList.contains('hide')) {
        tabContentOtd[b].classList.remove('hide');
        tabContentOtd[b].classList.add('show');
      }   
    };

    let afterClickTabClass = (d) => {
      if (!tabOtd[d].classList.contains('after_click')) {        
        tabOtd[d].classList.add('after_click');
      }
    };

    let noAfterClickTabClass = () => {
        for (let i = 0; i < tabOtd.length; i++) {
          tabOtd[i].classList.remove('after_click');
        }                
    };

    for (let l = 0; l < massElemDom.length; l++) {
      infoOtd.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains(massElemDom[l]) ) {
          for (let i = 0; i < massVariable[l].length; i++) {
            if (target == massVariable[l][i]) {
              hideTabCOtd(0);
              showTabCOtd(i);
              noAfterClickTabClass();
              afterClickTabClass(i);
              break;
            }
          }
        }
        });
    }

  // конец табов с отделкой (п.7)
  //---------------------------
  // modal
  let overlay = document.querySelector('.popup'),// modal (п.2)
      overlayCalc = document.querySelector('.popup_calc'),// modal (п.6)
      overlayEngineer = document.querySelector('.popup_engineer');// modal (п.1)

  let bindModal = (overlayStatus, overlayCalcStatus, overlayEngineerStatus, overflowStatus) => {
      overlay.style.display = overlayStatus;
      overlayCalc.style.display = overlayCalcStatus;
      overlayEngineer.style.display = overlayEngineerStatus;
      document.body.style.overflow = overflowStatus;
  };

  document.body.addEventListener('click', (e) => {
    let target = e.target;

    if (target.classList.contains('phone_link')) {
      bindModal('flex', 'hidden' ,'hidden', target);
    } else if (target.classList.contains('popup_calc_btn')) {
      bindModal('hidden', 'flex' ,'hidden', target);
      } else if (target.classList.contains('popup_engineer_btn')) {
        bindModal('hidden', 'hidden' , 'flex' , target);
        }

    if (target.classList.contains('popup_close') || target.classList.contains('popup_calc_close') || 
        target.classList.contains('popup') || target.classList.contains('popup_calc') || 
        target.classList.contains('popup_engineer')) {
      bindModal('none', 'none', 'none', '');
    }
  });
  //end modal
  //--------------------------------
  // Вызов popup через 60 сек (п.10)
  setTimeout(() => {overlay.style.display = 'flex';}, 60000);
  //--------------------------------
  //timer
  let deadline = '2019-06-05';
  let getTimeR = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    zero = 0;

    if (`${t}` > `${zero}`) {
    //функция для добавления 0 в одиночные цифры
      let zeroStr = (a) => {
        if (a.toString().length <= 1) {
          a = `${zero}${a}`;
        }
        return a;        
      };

      let seconds = Math.floor((t/1000) % 60);
      seconds = zeroStr(seconds);
      
      let minutes = Math.floor((t/1000/60) % 60);
      minutes = zeroStr(minutes);

      let hours = Math.floor((t/(1000/60/60) % 24));
      hours = zeroStr(hours);

      let days = Math.floor((t/(1000*60*60*24)));
      days = zeroStr(days);

        return {
          'total' : `${t}`,
          'days' : `${days}`,
          'hours' : `${hours}`,
          'minutes' : `${minutes}`,
          'seconds' : `${seconds}`
          };
    } else {

        return {
          'total' : `${t}`,
          'days' : '00',          
          'hours' : '00',
          'minutes' : '00',
          'seconds' : '00'
        };
      }   
  };

  let setClockF = (id, endtime) => {
    let timer = document.getElementById(id),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');       

        let updateClockF = () => {
          let t = getTimeR(endtime);
          days.textContent = t.days;
          hours.textContent = t.hours;
          minutes.textContent = t.minutes;
          seconds.textContent = t.seconds;

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }          
        };

        let timeInterval = setInterval(updateClockF, 1000);    
  };
  setClockF('timer', `${deadline}`);
  //end timer
  //------------------------------------------------------------
  // image
  let classImg = document.querySelectorAll('.works_click');
  // нажатие на фотку
  for (let i = 0; i < classImg.length; i++) {
    classImg[i].addEventListener('click', (e) => {
      let target = e.target;
      if (target.classList.contains('works_click')) {
        let div = document.createElement('div'),
            divImg = document.createElement('img'); 
        div.appendChild(divImg);
        div.classList.add('overlayImg');    
        divImg.classList.add('myimage');     
        divImg.src = 'img/our_works/big_img/'+(i+1)+'.png';     
        console.log(div);
        document.body.appendChild(div);
        // нажатие на подложку
        div.addEventListener('click', (e) => {
          let target = e.target;
          if (target.classList.contains('overlayImg')) {
            div.classList.add('hidden');
          }  
        });// overlayImg
      }  //
    });// classImg
  }


  //-------------------------------------------------------------------
  // Form
  //обработчик input tel
  document.body.addEventListener('input', e => {
    let target = e.target;
      if(target.matches(`input[type$='tel']`)) {
        target.value = '+' +target.value.replace(/[^\d]/g, '').slice(0, 11);  
              
        if (target.value.length == 1) {target.value = '';}
      }
  });
  // объект выводимых сообщений
  let message = {
    loading: 'Идет отправка...',
    success: 'Отправлено!',
    failure: 'Ошибка!'
  },    // остальные переменные
      form = document.querySelectorAll('.form'),
      inputForm = [];
      for (let j = 0; j < form.length; j++) {
      let input = form[j].querySelector('form_input');
          inputForm[j] = input;
      }
      
      let statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

      // обработка submit 
      let sendForm = (elemF) => {

        elemF.addEventListener('submit', (event) => {
          event.preventDefault();
          elemF.appendChild(statusMessage);
          let formData = new FormData(elemF);

          let postData = (data) => {
            return new Promise(function(resolve,reject) {
              let request = new XMLHttpRequest();
              request.open('POST', 'server.php');
              request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      
              let obj = {};
              formData.forEach(function(value, key) {
                obj[key] = value;
              });
              let json = JSON.stringify(obj);
              
              request.send(json);           

              // текст в классе
              request.addEventListener('readystatechange', () => {
                if (request.readyState < 4) {
                resolve(); // loading;
                } else if (request.readyState === 4 && request.status == 200) {
                  resolve();// success;
                } else {
                  reject();// failure;
                }
              });//readystatechange

            });//Promise
          }; //postData
      
              // обнуление input'ов
              let clearInput = () => {
                for (let i = 0; i < inputForm.length; i++) {
                  inputForm[i].value = ' ';
                }                  
              };

              postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(this.clearInput);

        }); //sumbit

      };//sendForm

      for (let k = 0; k < form.length; k++) {
        sendForm(form[k]);
      } 

      // calc

      //     popCalcCont0 = document.querySelector('.popup_calc_content #type1'),
      //     popCalcCont1 = document.querySelector('.popup_calc_content #type2'),
      //     popCalcCont2 = document.querySelector('.popup_calc_content #type3'),
      //     popCalcCont3 = document.querySelector('.popup_calc_content #type4');      

      //     for (let i = 0; i < calcItem.length; i++) {
      //       (function(i) {
      //         let item = calcItem[i];
      //         item.onclick = function () {
      //           for (let j = 0; j < calcContent.length; j++) {
      //             let opacity = window.getComputedStyle(calcContent[j]).opacity;
      //             let display = window.getComputedStyle(popCalcCont[j]).display;
      //             // popCalcCont.style.display = 'none';
      //             // popCalcCont2.style.display = 'inline-block';
      //             if (opacity == "1") {
      //               calcContent[j].style.opacity = "0";
      //               popCalcCont[j].style.display = "none";
      //             }
      //           }
      //           calcContent[i].style.opacity = "1";
      //           // popCalcCont[i].style.display = "inline-block";
      //         }
      //       })(i);
      //     }

      
          // let afterClickTabClass = (d) => {
          //   if (!tabOtd[d].classList.contains('after_click')) {        
          //     tabOtd[d].classList.add('after_click');
          //   }
          // };
      
          // let noAfterClickTabClass = () => {
          //     for (let i = 0; i < tabOtd.length; i++) {
          //       tabOtd[i].classList.remove('after_click');
          //     }                
          // };

          let calcItem = document.querySelectorAll('.balcon_item'),
              calcContent = document.querySelectorAll('.balcon_content'),
              calcIcons = document.querySelector('.balcon_icons');     

          let hideCalcCont = (a) => {
            for (let i = a; i < calcContent.length; i++) {
              calcContent[i].classList.remove('show');
              calcContent[i].classList.add('hide');
            }   
          };
          hideCalcCont(1);
      
          let showCalcCont = (b) => {
            if (calcContent[b].classList.contains('hide')) {
              calcContent[b].classList.remove('hide');
              calcContent[b].classList.add('show');
            }   
          };

            calcIcons.addEventListener('click', (event) => {
              let target = event.target;
              if (target && target.classList.contains('balcon_item') ) {
                for (let i = 0; i < calcItem.length; i++) {
                  if (target == calcItem[i]) {
                    hideCalcCont(0);
                    showCalcCont(i);
                    // noAfterClickTabClass();
                    // afterClickTabClass(i);
                    break;
                  }
                }
              }
              });



});