var princeEl = document.querySelectorAll('.prince-number');
var buyEl = document.querySelectorAll('.buy-button');
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
                }, 3000);
                // return allPrince;
        });
    }
};

getInfo();

