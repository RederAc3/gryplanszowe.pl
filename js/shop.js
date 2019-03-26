var princeEl = document.querySelectorAll('.prince-number');
<<<<<<< HEAD
var buyEl = document.querySelectorAll('.shop-item-button');
=======
var buyEl = document.querySelectorAll('.buy-button');
>>>>>>> 6e0ad57f2338768cd7fbb375a5924335fe8c0bfe
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
<<<<<<< HEAD
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
=======
            var Prince = this.previousElementSibling.innerText.replace('zł', '');
            var Title = this.nextElementSibling.innerText.trim();
            var parsePrince = parseInt(Prince);
            var allPrince = parsePrince ;

            allPrince = allPrince + parsePrince ; 
            
            // console.log(typeof(allPrince), allPrince);
            console.log(this.previousElementSibling.innerText.replace('zł', ''));
            console.log(this.nextElementSibling.innerText.trim());

            modal.classList.remove('modal-none');
            modal.innerHTML = '<div id="exit"></div>' + '<p>Dodano do koszyka: ' + Title + '</p>' + Prince + '<p>Razem: ' + allPrince + 'zł </p>';

            var exitModal = document.getElementById('exit');

            exitModal.addEventListener('click', function() {
                modal.classList.add('modal-none');
            });

            // console.log(!modal.classList.contains('modal-none'));

                setTimeout(function() {
                    modal.classList.add('modal-none');
                    console.log(window.navigator.languages);
                    console.log(window.navigator.userLanguage);
                }, 3000);
                // return allPrince;
>>>>>>> 6e0ad57f2338768cd7fbb375a5924335fe8c0bfe
        });
    }
};

getInfo();

<<<<<<< HEAD


=======
>>>>>>> 6e0ad57f2338768cd7fbb375a5924335fe8c0bfe
