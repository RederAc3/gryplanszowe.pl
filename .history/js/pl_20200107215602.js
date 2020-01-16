var pl = document.getElementById('pl');

pl.addEventListener('click', function () {
    $("#loader-wrapper").fadeIn('fast');

    // ####-SECTION--NAV-####
    setTimeout(function () {
        document.getElementById('nav-title-1').innerHTML = 'GRY';
        document.getElementById('nav-title-2').innerHTML = 'planszowe.pl';
        document.getElementById('nav-home').innerHTML = 'Strona główna';
        document.getElementById('nav-shop').innerHTML = 'Sklep';
        document.getElementById('nav-quiz').innerHTML = 'Quiz';
        document.getElementById('nav-project').innerHTML = 'O Projekcie';
        pl.style.color = '#fff';
        en.style.color = '#000';

        // ####-SECTION-TOP-####

        document.getElementById('top-title').innerHTML = 'Gry planszowe';
        document.getElementById('top-text').innerHTML = 'Poznaj historie gier planszowych i odkryj te, których jeszcze nie znałeś';
        document.getElementById('top-button-text').innerHTML = 'Zaczynamy';

        // ####-SECTION-HISORY-####

        document.getElementById('history-header').innerHTML = 'Jak to się zaczęło?  ';
        document.getElementById('history-title-article-1').innerHTML = 'Trochę historii';
        document.getElementById('history-contents-article-1').innerHTML = 'Najstarsze elementy do gier planszowych liczą sobie ponad 5000lat! Chodzi tutaj o 49 ociosanych i pomalowanych kamyczków,które znalezione zostały na terenach południowo - wschodniejTurcji.Podobne zostały znalezione również w Iraku i Syrii, copozwala wyciągnąć wniosek, że gry planszowe wywodzą sięz terenówtzw. Żyznego Półksiężca';

        document.getElementById('history-title-article-2').innerHTML = 'Jednak nie pierwsza?';
        document.getElementById('history-contents-article-2').innerHTML = 'Inną popularną wtedy grą był tzw. Senet. Pochodził on z krainypiramid, czyli ze starożytnego Egiptu.Senetbył znany już w 3 tys. p.n.e. i cieszył się popularnościązarówno wśród wyższych jak i niższych warstw społecznych. Zracji tego, że w swoim założeniu w dużej mierze opierał się naelemencie szczęścia, zaczęto przypisywać mu wyższe znaczenie iczęsto kończył on jako wyposażenie grobowców.';

        document.getElementById('history-title-article-3').innerHTML = 'Jednak nie pierwsza?';
        document.getElementById('history-contents-article-3').innerHTML = 'Inną popularną wtedy grą był tzw. Senet. Pochodził on z krainypiramid, czyli ze starożytnego Egiptu.Senetbył znany już w 3 tys. p.n.e. i cieszył się popularnościązarówno wśród wyższych jak i niższych warstw społecznych. Zracji tego, że w swoim założeniu w dużej mierze opierał się naelemencie szczęścia, zaczęto przypisywać mu wyższe znaczenie i często kończył on jako wyposażenie grobowców.';

        document.getElementById('history-title-article-4').innerHTML = 'Inne gry';
        document.getElementById('history-contents-article-4').innerHTML = 'Rzymianie z kolei mieli tzw. Ludus duodecim scriptorum, gręuznawaną za przodka Backgammona, znanego w Polsce pod nazwąTryktrak. Niektórzy uważają, że to właśnie do tej gry odnosiłsię Juliusz Cezar wypowiadając słynne słowa: „Kości zostałyrzucone”. Oprócz tego Rzymianie grali również w Tabula Rusolia.Rozgrywka miała miejsce na okrągłej planszy, a celem każdegogracza było ustawienie trzech swoich pionów w jednej linii.';

        document.getElementById('history-title-article-5').innerHTML = 'Młynek';
        document.getElementById('history-contents-article-5').innerHTML = "Wracając jeszcze do czasów średniowiecza i początków czasównowożytnych to ogólnie rzecz biorąc wiele gier, w którezagrywano się w Europie miało starożytne korzenie. Jedną z takich gier jest młynek, a wspominał o niej sam Szekspir. Gra,której angielska nazwa brzmi Nine Nen's Norris wywodzi swoje korzenie ze starożytnego Rzymu, a możliwe, że nawet z Egiptu. Wiadomo jednak, że jak wielu innym grom starożytnym przypisywano jej wyższe znaczenie, a sama plansza pełniła nawet rolę amuletu. Założenia gry przypominają te znane z Rzymskiej Tabula Rusolia. Dzięki ustawieniu 3 pionów w 1 linii możemy zdjąć z planszy pionprzeciwnika. Przegrywa osoba, która zostanie jedynie z 2 pionamiz początkowych 9.";

        // ####-SECTIONS-GAMES-####

        document.getElementById('game-title-1').innerHTML = 'Szachy';
        document.getElementById('game-contents-1').innerHTML = 'Szachy powstały w VI w. n.e. w Indiach. Do Europy trafiły w okolicach VIII/IX w. n.e. i osiadły tu na dobre, chociaż na ich fenomen trzeba było jeszcze sporo poczekać. Aż do XVIw. Wtedy to wprowadzony kilka istotnych zmian w rozgrywce, które uatrakcyjniły całość. Wprowaszono wtedy m.in. roszadę.';

        document.getElementById('game-title-2').innerHTML = 'Scrable';
        document.getElementById('game-contents-2').innerHTML = 'To właśnie Indiom zawdzięczamy powstanie tej gry. W grę tę grano stulecio w Indiach, po czym "przyszła" ona do Anglii. Poza aspektem rozgrywkowym gra posiadała również walory edukacyjne. Drabiny symbolizowały cnotę dzięki, którym można zajść daleko. Węże były zaś reprezentacją grzechów, które mogą sprowadzić ludzi na samo dno.';

        document.getElementById('game-title-3').innerHTML = 'Chińczyk';
        document.getElementById('game-contents-3').innerHTML = 'Stara hinduska gra planszowa pachisi jest znana i uprawiana w Indiach do dziś. Oparte na niej gry znane są szeroko w Azji, a także na terenie obydwu Ameryk. Josef Friedrich Schmidt upraszczając znacznie tę grę stworzył chińczyka znanego nam we współczesnej postaci. Począwszy od pierwszego wydania w 1914 roku, na całym świecie sprzedano ponad 70 milionów egzemplarzy, a jej zasady pozostają niezmienione.';

        document.getElementById('game-title-4').innerHTML = 'Monopoly';
        document.getElementById('game-contents-4').innerHTML = 'To klasyczna gra planszowa, która polega na handlu nieruchomościami, gdzie gracze okrążają planszę, kupując i sprzedając nieruchomości, budując domy i hotele, a sukces zależy od trafnych spekulacji, udanych inwestycji i mądrze przeprowadzonych transakcji.';

        document.getElementById('game-title-5').innerHTML = '';
        document.getElementById('game-contents-5').innerHTML = 'To klasyczna gra planszowa, która polega na handlu nieruchomościami, gdzie gracze okrążają planszę, kupując i sprzedając nieruchomości, budując domy i hotele, a sukces zależy od trafnych spekulacji, udanych inwestycji i mądrze przeprowadzonych transakcji.';

        document.getElementById('game-title-6').innerHTML = 'Twister';
        document.getElementById('game-contents-6').innerHTML = 'To klasyczna gra planszowa, która polega na handlu nieruchomościami, gdzie gracze okrążają planszę, kupując i sprzedając nieruchomości, budując domy i hotele, a sukces zależy od trafnych spekulacji, udanych inwestycji i mądrze przeprowadzonych transakcji.';

        document.getElementById('game-title-7').innerHTML = 'Osadnicy z Catanu';
        document.getElementById('game-contents-7').innerHTML = 'To klasyczna gra planszowa, która polega na handlu nieruchomościami, gdzie gracze okrążają planszę, kupując i sprzedając nieruchomości, budując domy i hotele, a sukces zależy od trafnych spekulacji, udanych inwestycji i mądrze przeprowadzonych transakcji.';

        document.getElementById('game-title-8').innerHTML = 'Bierki';
        document.getElementById('game-contents-8').innerHTML = 'To klasyczna gra planszowa, która polega na handlu nieruchomościami, gdzie gracze okrążają planszę, kupując i sprzedając nieruchomości, budując domy i hotele, a sukces zależy od trafnych spekulacji, udanych inwestycji i mądrze przeprowadzonych transakcji.';

        // ####-SECTION-CURIOSITES-####

        document.getElementById('curiosities-title').innerHTML = 'Ciekawostki';

        document.getElementById('curiosities-contents-1').innerHTML = 'Rekord Guinessa na najdłuższy maraton planszówek w historii trwał aż 61godzin i 2 minuty!';
        document.getElementById('curiosities-contents-2').innerHTML = '30. listopada 2016 roku Holendrzy stworzyli największą na świecie planszę do gry w Monopoly! Jej powierzchnia wynosi aż 900 m²';
        document.getElementById('curiosities-contents-3').innerHTML = '30. listopada 2016 roku Holendrzy stworzyli największą na świecie planszę do gry w Monopoly! Jej powierzchnia wynosi aż 900 m²';
        document.getElementById('curiosities-contents-4').innerHTML = '30. listopada 2016 roku Holendrzy stworzyli największą na świecie planszę do gry w Monopoly! Jej powierzchnia wynosi aż 900 m²';
        document.getElementById('curiosities-contents-5').innerHTML = '30. listopada 2016 roku Holendrzy stworzyli największą na świecie planszę do gry w Monopoly! Jej powierzchnia wynosi aż 900 m²';

        // ####-SECTION-QUIZ-####

        document.getElementById('quiz-title').innerHTML = 'Sprawdź swoją wiedzę! <br /> Weź udział w quizie składającym się z 20 pytań.';
        document.getElementById('quiz-button').innerHTML = 'Biorę udział';

        // ####-SETION-BOTTOM-####

        document.getElementById('bottom-title-1').innerHTML = 'O projekcie';
        document.getElementById('bottom-text-1').innerHTML = 'Projekt współfinansowany z Europejskiego Funduszu "Ciekawe skąd wziął na to pieniązki"';
        document.getElementById('bottom-title-2').innerHTML = 'Współpraca';
        document.getElementById('bottom-text-2').innerHTML = 'Sprzedarz';
        document.getElementById('bottom-text-3').innerHTML = 'Reklama';
        document.getElementById('bottom-text-4').innerHTML = 'Coś się wymyśli';
        document.getElementById('bottom-title-3').innerHTML = 'Nawigacja';
        document.getElementById('bottom-text-5').innerHTML = 'Naprzód';
        document.getElementById('bottom-text-6').innerHTML = 'W tył';
        document.getElementById('bottom-text-7').innerHTML = 'Obróć się ';
        document.getElementById('bottom-social-media').innerHTML = 'social media';

        // ####-SECTION-FOOTER-####

        document.getElementById('footer-text').innerHTML = '&copy; 2019 zszarki.pl Wszelkie prawa zastrzeżone';
        $("#loader-wrapper").fadeOut();
    }, 500);
});
