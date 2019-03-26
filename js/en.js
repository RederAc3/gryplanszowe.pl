var en = document.getElementById('en');

en.addEventListener('click', function () {
    $("#loader-wrapper").fadeIn('fast');

    setTimeout(function () {
        // ####-SECTION--NAV-####

        document.getElementById('nav-title-1').innerHTML = 'BOARD';
        document.getElementById('nav-title-2').innerHTML = 'games.eu';
        document.getElementById('nav-home').innerHTML = 'Home Page ew Home';
        document.getElementById('nav-shop').innerHTML = 'Shop';
        document.getElementById('nav-quiz').innerHTML = 'Quiz';
        document.getElementById('nav-author').innerHTML = 'About us';
        pl.style.color = '#000';
        en.style.color = '#fff';
        // dopisać funkcję aby tylko raz zmieniać język i żeby był nma stałe  

        // ####-SECTION-TOP-####

        document.getElementById('top-title').innerHTML = 'Board games';
        document.getElementById('top-text').innerHTML = 'Learn the stories of board games and discover the ones you have not known yet';
        document.getElementById('top-button-text').innerHTML = "Let's start";


        // ####-SECTION-HISORY-####

        // document.getElementById('history-header').innerHTML = 'How did it begin ?';
        // document.getElementById('history-title-article-1').innerHTML = 'Some history';
        // document.getElementById('history-contents-article-1').innerHTML = 'The oldest elements of board games are over 5000 years old. It is a series of 49 small carved painted stones which was found in southeast Turkey. Similar pieces have been found in Syria and Iraq and seem to point to board games having originated in the Fertile Crescent.';

        // document.getElementById('history-title-article-2').innerHTML = 'First game ?';
        // document.getElementById('history-contents-article-2').innerHTML = 'Many researchers think that one of the first board games was dice. That game has changed for ages. Not only was it made of bones but also of teeth, antlers and tusks. Since ancient times people had looked for godlike element in it. In Rome they believed that Lady Luck, Fortuna can move the needle on results. People often accept a roll of the dice clearly reflect Gods volition.';

        // document.getElementById('history-title-article-3').innerHTML = 'Senet';
        // document.getElementById('history-contents-article-3').innerHTML = 'Inną starodawną grą był tzw. <b>Senet</b>. Pochodził on z krainy piramid, czyli ze starożytnego <b>Egiptu</b>. Senet znany był już w <b>3 tys. p.n.e.</b> i cieszył się popularnością zarówno wśród niższych jak i wyższych warstw społecznych. Z racji tego, że w swoim założeniu w dużej mierze opierał się na elemencie szczęścia, zaczęto przypisywać mu <b>wyższe znaczenie</b>, przez co często kończył on jako wyposażenie grobowców.';

        // document.getElementById('history-title-article-4').innerHTML = 'Inne gry';
        // document.getElementById('history-contents-article-4').innerHTML = 'Rzymianie z kolei mieli tzw. <b>Ludus duodecim scriptorum</b>, grę uznawaną za przodka Backgammona, znanego w Polsce pod nazwą Tryktrak. Niektórzy uważają, że to właśnie do tej gry odnosił się Juliusz Cezar wypowiadając słynne słowa: <i>„Kości zostały rzucone”</i>. Oprócz tego Rzymianie grali również w <b>Tabula Rusolia</b>. Rozgrywka miała miejsce na okrągłej planszy, a celem każdego gracza było ustawienie trzech swoich pionów w jednej linii.';

        // document.getElementById('history-title-article-5').innerHTML = 'Młynek';
        // document.getElementById('history-contents-article-5').innerHTML = "Biorąc pod uwagę czasy średniowiecza i początki czasów nowożytnych, ogólnie rzecz biorąc można powiedzieć, że wiele gier, w które zagrywano się w Europie miało starożytne korzenie. Jedną z takich gier jest chociażby młynek; o grze tej wspominał nawet sam <b>Szekspir.</b> Pochodzenie tej gry nie jest jednak dokładnie znane, choć wiele badaczy sądzi, że wywodzi się ona ze <b>starożytnego Egiptu.</b> Wiadomo też, że planszę do gry bardzo często wykonywano z torfu.  Jak wielu innym grom starożytnym, nierzadko przypisywano  jej wyższe znaczenie, a sama plansza często pełniła nawet <b>rolę amuletu.</b> Założenia gry przypominają te znane z rzymskiej Tabula Rusolia. Dzięki ustawieniu 3 pionów w 1 linii można było zdjąć z planszy pion przeciwnika. Przegrywała osoba zostająca jedynie z 2 pionami z początkowych 9.";


        // document.getElementById('history-title-article-6').innerHTML = 'Monopoly';
        // document.getElementById('history-contents-article-6').innerHTML = "Jeśli chodzi o współczesne tytuły to na pewno trzeba wspomnieć o tzw. <b>„The Landlord's Game”.</b> W grze tej poruszamy się po planszy o kształcie kwadratu, wykupujemy posiadłości, dworce, a ponadto możemy trafić do więzienia. Brzmi znajomo? Oczywiście mowa tutaj o kultowym Monopoly. Gra ta została wymyślona przez <b>Lizzie Magie,</b> jedną z pierwszych projektantek gier plaszowych z USA. Początkowo Monopoly nosiło wcześniej już wspomniany odmienny tytuł. The Landlord's Game w swoim założeniu miało być grą z przekazem. Lizzie była feministką i przeciwniczką różnych praktyk biznesowych. Jej gra miała być materializacją sprzeciwu wobec kapitalizmu. W grze tej można było wcielić się w monopolistę lub antymonopolistę. Monopoly z czasem zyskało na popularności i zaczęło przyciągać uwagę społeczeństwa. Niestety pomysł gry z przekazem zgapił <b>Charles Darrow.</b> Delikatnie zmodyfikował go, po czym sprzedał do <b>Parker Brothers</b> (dzisiejsze Hasbro) w 1935 roku. Gra ta od lat 30-tych stała się prawdziwym fenomenem, który trwa aż do dziś. Jest ona jedną z najbardziej rozpoznawalnych gier planszowych na świecie. Monopoly skończyło jednak tylko jako gra czysto rozrywkowa i obecnie pozbawiona jest swojego pierwotnego przekazu, który dla samej Lizzie Magie miał tak duże znaczenie jak metaforyczny odbiór gier przez starożytnych.";

        // ####-SECTIONS-GAMES-####

        document.getElementById('game-title-1').innerHTML = 'Chess';
        document.getElementById('game-contents-1').innerHTML = 'Chess is a two-player strategy board game played on a chessboard, a checkered gameboard with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga some time before the 7th century. Chaturanga is also the likely ancestor of the Eastern strategy games xiangqi, janggi, and shogi. Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania. The pieces assumed their current powers in Spain in the late 15th century with the introduction of "Mad Queen Chess"; the modern rules were standardized in the 19th century.';

        document.getElementById('game-title-2').innerHTML = 'Scrable';
        document.getElementById('game-contents-2').innerHTML = 'Scrabble is a word game in which two to four players score points by placing tiles bearing a single letter onto a board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon.';

        document.getElementById('game-title-3').innerHTML = 'Chińczyk';
        document.getElementById('game-contents-3').innerHTML = 'Stara hinduska gra planszowa pachisi jest znana w Indiach do dziś. Josef Schmidt upraszczając znacznie tę grę stworzył chińczyka znanego nam we współczesnej postaci. Rozgrywka polega na dojściu wszystkimi pionkami do tzw. „domku”. Począwszy od pierwszego wydania w 1914r. na całym świecie zostało sprzedane jakieś 70 mln egzemplarzy.';

        document.getElementById('game-title-4').innerHTML = 'Dixit';
        document.getElementById('game-contents-4').innerHTML = ' Stosunkowa nowa gra wydana w 2008 roku przez wydawnictwo Libellud.  Szczególną sławę zdobyła ona w 2010 roku kiedy to wygrała nagrodę „Spiel des Jahres” (gra roku). W założeniu Dixit jest grą w skojarzenia. Punkt zdobywamy wtedy gdy przynajmniej jedna osoba nie zgadnie, o który obrazek z karty nam chodzi.';

        document.getElementById('game-title-5').innerHTML = 'Rummikub';
        document.getElementById('game-contents-5').innerHTML = 'Historia Rummikuba sięga jakieś 70 lat wstecz. Została ona zaprojektowana przez Efraima Hertzano. Mężczyzna wymyślił, aby zastąpić tradycyjne karty używane w popularnej grze, kolorowymi płytkami. Gra ta w krótkim czasie stała się wielkim hitem. Celem gry jest jak najszybsze wyłożenie wszystkich kostek z tablicy na stół.';

        document.getElementById('game-title-6').innerHTML = 'Warcaby';
        document.getElementById('game-contents-6').innerHTML = 'Warcaby historią swoją sięgają starożytnego Egiptu, lecz znane nam w obecnej formie powstały na Półwyspie Iberyjskim na przełomie XV/XVI w. Podobnie jak w szachach mamy tutaj planszę posiadającą 64 pola. Wygrywa osoba, która pierwsza zbije wszystkie 12 pionów przeciwnika.';

        document.getElementById('game-title-7').innerHTML = 'Osadnicy z Catanu';
        document.getElementById('game-contents-7').innerHTML = 'Przełomowa gra wydana niespełna 25 lat temu. Została ona zaprojektowana przez Klausa Teubera. Polega na pozyskiwaniu surowców, zakładaniu osad i miast oraz umiejętnym handlu z innymi graczami. Zwycięzcą jest osoba, która zdobędzie 10 pkt. dzięki wyżej wymienionym czynnościom.';

        document.getElementById('game-title-8').innerHTML = 'Wsiąść do pociągu';
        document.getElementById('game-contents-8').innerHTML = 'Gra została zaprojektowana i wydana przez Alana R. Moona w 2004r. W tym samym roku otrzymała tytuł „Najlepszej gry planszowej”. Polega ona na łączeniu tras kolejowych na mapie Stanów Zjednoczonych. Wygrywa osoba, która wyczerpie wszystkie pionki którymi dysponuje.';

        // ####-SECTION-CURIOSITES-####

        document.getElementById('curiosities-title').innerHTML = 'Ciekawostki';

        document.getElementById('curiosities-contents-1').innerHTML = 'Rekord Guinessa na najdłuższy maraton planszówek w historii trwał aż 61godzin i 2 minuty!';
        document.getElementById('curiosities-contents-2').innerHTML = 'Najdroższą sprzedaną grą jest zestaw szachowy firmy Jewel Royale, wykonany on został ze złota oraz platyny. Sprzedano go za 9.8 mln dolarów!';
        document.getElementById('curiosities-contents-3').innerHTML = '30. listopada 2016 roku Holendrzy stworzyli największą na świecie planszę do gry w Monopoly! Jej powierzchnia wynosi aż 900 m²';
        document.getElementById('curiosities-contents-4').innerHTML = 'Jedną z osób, która stworzyła najwięcej gier planszowych jest Dr Reiner Knizia. Jest autorem przeszło 200 planszówek! Swoją pierwszą grę zaprojektował gdy miał 8 lat.';
        document.getElementById('curiosities-contents-5').innerHTML = 'W 1924 roku w Paryżu powstała Międzynarodowa Federacja Szachowa. Na ten sam rok datuje się pierwszą olimpiadę szachową.';

        // ####-SECTION-QUIZ-####

        document.getElementById('quiz-title').innerHTML = 'Sprawdź swoją wiedzę! <br /> Weź udział w quizie składającym się z 20 pytań.';
        document.getElementById('quiz-button').innerHTML = 'Biorę udział';

        // ####-SECTION-GO-GAME-####

        document.getElementById('go-game-contents').innerHTML = 'A może myślisz, że grałeś już w sporo <br /> gier planszowych i już Ci wystarczy? <br /> Ha! My mamy coś ekstra. Prezentujemy naszą wyjątkową, <br /> grę planszową.';
        document.getElementById('go-game-text').innerHTML = 'Dlaczego wyjątkową? Przekonaj się sam ;)';
        document.getElementById('go-game-button').innerHTML = 'Zagraj!';

        // ####-SETION-BOTTOM-####

        document.getElementById('bottom-title-1').innerHTML = 'O projekcie';
        document.getElementById('bottom-text-1').innerHTML = 'The goal is to win, but it is the goal that is important, not the winning.';
        document.getElementById('bottom-title-2').innerHTML = 'Współpraca';
        document.getElementById('bottom-text-2').innerHTML = 'Kontakt';
        document.getElementById('bottom-text-3').innerHTML = 'O autorach';
        document.getElementById('bottom-text-4').innerHTML = 'Donacje';
        document.getElementById('bottom-title-3').innerHTML = 'Nawigacja';
        document.getElementById('bottom-text-5').innerHTML = 'Strona główna';
        document.getElementById('bottom-text-6').innerHTML = 'Sklep';
        document.getElementById('bottom-text-7').innerHTML = 'Quiz';
        document.getElementById('bottom-social-media').innerHTML = 'social media';

        // ####-SECTION-FOOTER-####

        document.getElementById('footer-text').innerHTML = '&copy; 2019 zszarki.pl Wszelkie prawa zastrzeżone';
        $("#loader-wrapper").fadeOut();
    }, 500);
});
