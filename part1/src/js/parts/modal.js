function modal() { 
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
}

module.exports = modal;