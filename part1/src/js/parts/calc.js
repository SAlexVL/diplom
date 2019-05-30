function calc() {
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



  }
  
  module.exports = calc;