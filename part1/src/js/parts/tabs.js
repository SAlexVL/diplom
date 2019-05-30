function tabs() { 
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
}

module.exports = tabs;