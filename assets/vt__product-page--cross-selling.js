class crossSelling extends HTMLElement {
    constructor() {
        super();
        this.openPopupButtons = this.querySelectorAll('.js-open-popup');
        this.closePopupButtons = this.querySelectorAll('.js-close-popup');
        this.radioChecks = this.querySelectorAll('.js-radio');
        this.productQuantitys = this.querySelectorAll('.js-quantity');
        this.productVariantIds = Number(this.querySelectorAll('.js-input'));
        this.formData = {'items': []};
        this.init();
    }
  
    init() {
        this.style.display = 'none';
        window.addEventListener('customily-app-will-load', function (e) {
            this.style.display = 'block';
        }.bind(this));

        this.openPopupButtons.forEach(function(openPopupButton) {
            openPopupButton.addEventListener('click', this.initOpen.bind(openPopupButton));
        }.bind(this));

        this.closePopupButtons.forEach(function(closePopupButton) {
            closePopupButton.addEventListener('click', this.initClose.bind(closePopupButton));
        }.bind(this));

        this.radioChecks.forEach(function(radioCheck) {
            let valueInput = radioCheck.querySelector('input').value;
            let quantity = radioCheck.closest('.cross-selling__controller').querySelector('.product-quantity');
            if (valueInput != '') {
                quantity.style.display = 'block';
            } else {
                quantity.style.display = 'none';
            }
            radioCheck.addEventListener('click', this.initRadioCheck.bind(this, radioCheck));
        }.bind(this));

        this.productQuantitys.forEach(function(productQuantity) {
            productQuantity.addEventListener('change', this.initUpdateQuantity.bind(this, productQuantity));
        }.bind(this));

        window.addEventListener('customily-properties-generated', function (e) {
            e.preventDefault();
            if(this.formData.items.length > 0) {
                fetch(window.Shopify.routes.root + 'cart/add.js', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.formData)
                })
                .then(response => {
                    console.log('Success:', response);
                    return response.json();
                  })
                .then(data => {
                    console.log('Success:', data);
                    // Process the data
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
            }
        }.bind(this));
    }
  
    initOpen() {
        let cross_selling_item = this.parentElement.parentElement;
        let cross_selling_item_preview = cross_selling_item.querySelector('.cross-selling__preview-product')
        cross_selling_item_preview.classList.add('active');
        document.body.classList.add('overflow-hidden');
        document.querySelector('main').classList.add('opening-cross-selling-modal');
        document.querySelector('.container__top-part').classList.add('opening-cross-selling-modal');
    }
  
    initClose() {
        let cross_selling_item_preview = this.parentElement.parentElement;
        if (this.classList.contains('cross-selling__modal-background')) {
            cross_selling_item_preview = this.parentElement;
            cross_selling_item_preview.classList.remove('active');
        } else {
            cross_selling_item_preview.classList.remove('active');
        }
        document.body.classList.remove('overflow-hidden');
        document.querySelector('main').classList.remove('opening-cross-selling-modal');
        document.querySelector('.container__top-part').classList.remove('opening-cross-selling-modal');
    }

    initRadioCheck($this) {
        let controller = $this.parentElement.parentElement;
        let quantity = controller.querySelector('.product-quantity');
        let quantityValue = 0;
        let valueInput = $this.querySelector('input').value
        if (valueInput != '') {
            quantity.style.display = 'block';
            quantityValue = Number(quantity.querySelector('select').value);
            const result = this.formData.items.find(({ id }) => id === valueInput);
            if (result === undefined) {
                this.formData.items.push({'id': valueInput, 'quantity': quantityValue});
            }
        } else {
            quantity.style.display = 'none';
            this.formData.items.splice(this.formData.items.findIndex(a => a.id === valueInput) , 1)
        }
    }

    initUpdateQuantity($this) {
        let quantity = Number($this.value);
        let variantId = $this.dataset.variantId
        this.formData.items.find(function(entry) {
            if (entry.id === variantId) {
              entry.quantity = quantity;
            }
        });
    }
}
  
customElements.define('cross-selling', crossSelling);