const prevImageButtonDesktop = setInterval(() => {
  if(document.querySelectorAll('.customily-modal-preview-only').length){
    clearInterval(prevImageButtonDesktop);
    const action = document.createElement('div');
    const button = document.createElement('div');
    const button_close = document.createElement('div');
    const container = document.createElement('div');
    const heading = document.createElement('div')
    const title = document.createElement('div')
    const content = document.createElement('div')

    const control_mobile = document.createElement('div')
    const control_mobile_image = document.createElement('div')
    const control_mobile_content = document.createElement('div')

    action.classList.add('preview-action')

    container.style.background = '#ffffff';
    container.style.padding = '20px';
    container.style.width = '94vw';
    container.style.maxWidth = '470px';
    container.style.borderRadius = '16px';
    container.style.position = 'relative';

    title.classList.add('preview-headline')
    title.innerHTML = `Please check the preview carefully`
    content.classList.add('preview-bodyline')
    content.innerHTML = `Make sure the below customization is correct to receive your item faster`
    heading.append(title);
    heading.append(content)

    button.style.overflow = 'hidden';
    button.classList.add('button');
    button.classList.add('button--primary');
    button.classList.add('button--filled');
    button.classList.add('button--primary__filled');
    button.classList.add('ld-over-inverse');
    button.innerHTML = `<span>ADD TO CART</span>
      <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve" style="display: none; position: absolute; inset: 0; width: 44px; height: auto; margin: auto; z-index: 9;">
          <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
    `;
    
    button.style.height = 'max-content';
    button.style.inset = '0';
    button.style.bottom = '0';
    button.style.padding = '20px';
    button.style.background = 'none 0% 0% / auto repeat scroll padding-box border-box rgb(110, 122, 20)';
    button.style.color = '#FFFFFF';
    button.style.borderRadius = '5px';
    button.style.lineHeight = '1';

    button_close.style.overflow = 'hidden';
    button_close.classList.add('button');
    button_close.classList.add('button--primary');
    button_close.classList.add('button--filled');
    button_close.classList.add('button--primary__filled');
    button_close.classList.add('ld-over-inverse');
    button_close.innerHTML = `<span>CLOSE</span>`;
    button_close.style.height = 'max-content';
    button_close.style.inset = '0';
    button_close.style.bottom = '0';
    button_close.style.padding = '20px';
    button_close.style.background = 'none 0% 0% / auto repeat scroll padding-box border-box #ccc';
    button_close.style.color = '#fff';
    button_close.style.borderRadius = '5px';
    button_close.style.lineHeight = '1';
    
    action.append(button);
    action.append(button_close);

    control_mobile.classList.add('control-mobile');
    // control_mobile_image.classList.add('control-mobile-image');
    control_mobile_content.classList.add('control-mobile-content');
    control_mobile_content.innerHTML = `<p>Resizing your photo with buttons above. Your product will be exactly as the preview. Re-upload if needed.</p>`;
    // control_mobile.append(control_mobile_image);
    control_mobile.append(control_mobile_content);



    if(window.innerWidth < 1150){
      action.style.marginTop = '10px';
    }else {
      action.style.marginTop = '15px';
    }


    button.addEventListener('click', function(){
      button.classList.add('active');
      const loader = setInterval(() => {
        document.querySelector('.customily-modal-preview-only').setAttribute('style', 'padding: 10px 0px; justify-content: center;'); 
      });
      button.querySelector('svg').style.display = 'block';
      document.getElementById('customily-cart-btn').click();
      document.querySelector('.customily-close-button').click();

      setTimeout(function(){
        clearInterval(loader);
        button.querySelector('svg').style.display = 'none';
      }, 1000)
    });

    button_close.addEventListener('click', function(){
      document.querySelector('.customily-close-button').click();
    });

    document.querySelector('.customily-modal-preview-only').style.padding = '10px 0';
    document.querySelector('.customily-modal-preview-only').style.justifyContent = 'center';
    // document.querySelector('.customily-modal-preview-only').querySelector('.main').style.marginBottom = '10px';
    document.querySelector('.customily-modal-preview-only').querySelector('.main').prepend(heading);
    document.querySelector('.customily-modal-preview-only').querySelector('.main').appendChild(control_mobile);
    document.querySelector('.customily-modal-preview-only').querySelector('.main').appendChild(action);
    container.appendChild(document.querySelector('.customily-modal-preview-only').querySelector('.main'));
    document.querySelector('.customily-modal-preview-only').appendChild(container)
  }
});
