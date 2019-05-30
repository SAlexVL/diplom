function image() { 
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
        // console.log(div);
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
  }
  
  module.exports = image;