const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

let images = ['https://www.clickorlando.com/resizer/s1r_jwBCBVVvScHIlrig-mTKLLc=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/OEINUP4ZQ5D53OHXFJJGCIHSD4.jpg', 'https://i0.wp.com/loucosporviagem.com/wp-content/uploads/2017/03/DSC_5221-635x422-635x422.jpg', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F07%2F20%2FGettyImages-1022328666-2000.jpg&q=85', 'https://www.girassolviagens.com/wp-content/uploads/2018/07/Gr%C3%A9cia-com-suas-ilhas-Encantadoras.jpg', 'https://i1.wp.com/blog.123milhas.com/wp-content/uploads/2019/05/01-Roma.jpg?fit=1024%2C710&ssl=1'];

for(let i = 0; i < images.length ; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', images[i]);
  thumbBar.appendChild(newImage);

  newImage.onclick = function() {
    let imageScr = newImage.getAttribute('src');
    displayedImage.setAttribute('src', imageScr);
  }
}

btn.onclick = function() {
  if(btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
