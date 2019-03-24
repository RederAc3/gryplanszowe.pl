var prince = document.querySelectorAll('.prince-number');
var buy = document.querySelectorAll('.buy-button');
var title = document.querySelectorAll('.title-product');
var modal = document.getElementById('modal');

// WYWALA NON STOP NaN NWM CO Z TYM ZROBIĆ
// var allPrince = 0;
var getInfo = function() {
    for ( var i = 0; i <= buy.length; i++) {
        var i = i;
        buy[i].addEventListener('click', function() {
            // console.log(title[i].innerText);
            var addPrince = this.previousElementSibling.innerText.replace('zł', '');
            var addTitle = this.nextElementSibling.innerText.trim();
            // var parsePrince = parseInt(addPrince, allPrince);
            // var allPrince = parsePrince ;

            // allPrince = allPrince + parsePrince ; 
            
            // console.log(typeof(allPrince), allPrince);
            console.log(this.previousElementSibling.innerText.replace('zł', ''));
            console.log(this.nextElementSibling.innerText.trim());

            modal.classList.remove('none');
            modal.innerHTML = '<div id="exit"></div>' + '<p>Dodano do koszyka: ' + addTitle + '</p>' + addPrince + '<p>Razem: ' + typeof(allPrince) +'zł </p>';
            
            var exitModal = document.getElementById('exit');

            exitModal.addEventListener('click', function() {
                modal.classList.add('none');
            });
            // return allPrince;
        });
    }
};

getInfo();

