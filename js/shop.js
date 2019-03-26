var princeEl = document.querySelectorAll('.prince-number');
var buyEl = document.querySelectorAll('.shop-item-button');
var titleEl = document.querySelectorAll('.title-product');
var modal = document.getElementById('modal');
var scrollTop = document.documentElement.scrollTop;
console.log(scrollTop);
// WYWALA NON STOP NaN NWM CO Z TYM ZROBIĆ
// var allPrince = 0;
var getInfo = function() {
    for ( var i = 0; i <= buyEl.length; i++) {
        var i = i;
        buyEl[i].addEventListener('click', function() {
            // console.log(title[i].innerText);
            var Prince = this.getAttribute('data-price');
            var Title = this.getAttribute('data-name');
            // var parsePrince = parseInt(Prince);
            // var allPrince = parsePrince ;

            // allPrince = allPrince + parsePrince ; 
            
            // console.log(typeof(allPrince), allPrince);
            console.log('price: ' , Prince);
            console.log(Title);

            modal.classList.remove('modal-none');
            modal.innerHTML = '<div id="exit"></div>' + '<p>Dodano do koszyka: ' + Title + '</p>' + 'Cena: '  + Prince + 'zł';

            // var exitModal = document.getElementById('exit');

            modal.addEventListener('click', function() {
                modal.classList.add('modal-none');
            });

            console.log('modal: ', modal.classList.contains('modal-none'));
            if (modal.classList.contains('modal-none') == false) {///
                setTimeout(function() {
                    modal.classList.add('modal-none');
                    console.log(window.navigator.languages);
                }, 3000);
                // return allPrince;
            }
        });
    }
};

getInfo();



