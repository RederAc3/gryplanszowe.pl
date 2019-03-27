var en = document.getElementById('en');

en.addEventListener('click', function () {
    $("#loader-wrapper").fadeIn('fast');

    setTimeout(function () {
        // ####-SECTION--NAV-####

        document.getElementById('nav-title-1').innerHTML = 'BOARD';
        document.getElementById('nav-title-2').innerHTML = 'games.eu';
        document.getElementById('nav-home').innerHTML = 'Home';
        document.getElementById('nav-shop').innerHTML = 'Shop';
        document.getElementById('nav-quiz').innerHTML = 'Quiz';
        document.getElementById('nav-project').innerHTML = 'About us';
        pl.style.color = '#000';
        en.style.color = '#fff';
        // dopisać funkcję aby tylko raz zmieniać język i żeby był nma stałe  

        // ####-SECTION-TOP-####

        document.getElementById('top-title').innerHTML = 'Board games';
        document.getElementById('top-text').innerHTML = 'Learn the stories of board games and discover the ones you have not known yet';
        document.getElementById('top-button-text').innerHTML = "Let's start";


        // ####-SECTION-HISORY-####

         document.getElementById('history-header').innerHTML = 'How did it begin ?';
         document.getElementById('history-title-article-1').innerHTML = 'Some history';
         document.getElementById('history-contents-article-1').innerHTML = 'The oldest elements of board games are over 5000 years old. It is a series of 49 small carved painted stones which was found in southeast Turkey. Similar pieces have been found in Syria and Iraq and seem to point to board games having originated in the Fertile Crescent.';

         document.getElementById('history-title-article-2').innerHTML = 'First game ?';
         document.getElementById('history-contents-article-2').innerHTML = 'Many researchers think that one of the first board games was dice. That game has changed for ages. Not only was it made of bones but also of teeth, antlers and tusks. Since ancient times people had looked for godlike element in it. In Rome they believed that Lady Luck, Fortuna can move the needle on results. People often accept a roll of the dice clearly reflect Gods volition.';

         document.getElementById('history-title-article-3').innerHTML = 'Senet';
         document.getElementById('history-contents-article-3').innerHTML = "Senet is one of the oldest known board games. Fragmentary boards that could be senet have been found in First Dynasty burials in Egypt. A hieroglyph resembling a senet board appears in the tomb of Merknera (3300–2700 BC). The first unequivocal painting of this ancient game is from the Third Dynasty tomb of Hesy. People are depicted playing senet in a painting in the tomb of Rashepes, as well as from other tombs of the Fifth and Sixth Dynasties.";

         document.getElementById('history-title-article-4').innerHTML = 'Other games';
         document.getElementById('history-contents-article-4').innerHTML = "The Romans, in turn, had so-called Ludus duodecim scriptorum, a game considered to be the ancestor of Backgammon, known in Poland under the name Tryktrak. Some believe that it was to this game that Julius Caesar referred to the famous words: 'The bones were thrown.' In addition, the Romans also played in Tabula Rusolia. The game took place on a round board, and the goal of each player was to set three of his risers in one line.";

         document.getElementById('history-title-article-5').innerHTML = "Nine Men's Morris";
         document.getElementById('history-contents-article-5').innerHTML = "Nine men's morris is a strategy board game for two players dating at least to the Roman Empire. The game is also known as nine-man morris, mill, mills, the mill game, merels, merrills, merelles, marelles, morelles and ninepenny marl in English. The game has also been called cowboy checkers and is sometimes printed on the back of checkerboards. Nine men's morris is a solved game – one in which either player can force the game into a draw. Its name derives from the Latin word merellus, 'gamepiece'. Three main alternative variations of the game are three, six, and twelve men's morris.";


         document.getElementById('history-title-article-6').innerHTML = 'Monopoly';
         document.getElementById('history-contents-article-6').innerHTML = "Monopoly is a board game that is currently published by Hasbro. In the game, players roll two six-sided dice to move around the game board, buying and trading properties, and developing them with houses and hotels. Players collect rent from their opponents, with the goal being to drive them into bankruptcy. Money can also be gained or lost through Chance and Community Chest cards, and tax squares; players can end up in jail, which they cannot move from until they have met one of several conditions. The game has numerous house rules, and hundreds of different editions exist, as well as many spin-offs and related media. Monopoly has become a part of international popular culture, having been licensed locally in more than 103 countries and printed in more than 37 languages.";

        // ####-SECTIONS-GAMES-####

        document.getElementById('game-title-1').innerHTML = 'Chess';
        document.getElementById('game-contents-1').innerHTML = 'Chess is a two-player strategy board game played on a chessboard, a checkered gameboard with 64 squares arranged in an 8×8 grid. The game is played by millions of people worldwide. Chess is believed to be derived from the Indian game chaturanga some time before the 7th century. Chaturanga is also the likely ancestor of the Eastern strategy games xiangqi, janggi, and shogi. Chess reached Europe by the 9th century, due to the Umayyad conquest of Hispania.';

        document.getElementById('game-title-2').innerHTML = 'Scrable';
        document.getElementById('game-contents-2').innerHTML = 'Scrabble is a word game in which two to four players score points by placing tiles bearing a single letter onto a board divided into a 15×15 grid of squares. The tiles must form words that, in crossword fashion, read left to right in rows or downward in columns, and be included in a standard dictionary or lexicon.';

        document.getElementById('game-title-3').innerHTML = 'Ludo';
        document.getElementById('game-contents-3').innerHTML = "Ludo (from Latin ludo, meaning 'I play') is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die. Like other cross and circle games, Ludo is derived from the Indian game Pachisi, but simpler. The game and its variations are popular in many countries and under various names.";

        document.getElementById('game-title-4').innerHTML = 'Dixit';
        document.getElementById('game-contents-4').innerHTML = "Dixit is a card game created by Jean-Louis Roubira, illustrated by Marie Cardouat, and published by Libellud. Using a deck of cards illustrated with dreamlike images, players select cards that match a title suggested by the 'storyteller', and attempt to guess which card the 'storyteller' selected. The game was introduced in 2008. Dixit won the 2010 Spiel des Jahres award.";

        document.getElementById('game-title-5').innerHTML = 'Rummikub';
        document.getElementById('game-contents-5').innerHTML = "Rummikub is a tile-based game for two to 4 players, combining elements of the card game rummy and mahjong. There are 104 number tiles in the game (valued 1 to 13 in four different colors, two copies of each) and two jokers. Players have 14 or 16 tiles initially and take turns putting down tiles from their racks into sets (groups or runs) of at least three, drawing a tile if they cannot play.";

        document.getElementById('game-title-6').innerHTML = 'Draughts';
        document.getElementById('game-contents-6').innerHTML = "Draughts (British English) or checkers (American English) is a group of strategy board games for two players which involve diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces. Draughts developed from alquerque. The name derives from the verb to draw or to move.";

        document.getElementById('game-title-7').innerHTML = 'The Settlers of Catan';
        document.getElementById('game-contents-7').innerHTML = 'The Settlers of Catan is a multiplayer board game designed by Klaus Teuber and first published in 1995 in Germany by Franckh-Kosmos Verlag (Kosmos) as Die Siedler von Catan. Players assume the roles of settlers, each attempting to build and develop holdings while trading and acquiring resources. Players gain points as their settlements grow.';

        document.getElementById('game-title-8').innerHTML = 'Ticket to Ride';
        document.getElementById('game-contents-8').innerHTML = "Ticket to Ride is a railway-themed German-style board game designed by Alan R. Moon, Illustrated by Julien Delval and Cyrille Daujean, published in 2004 by Days of Wonder. The game is also known as Zug um Zug (German), Les Aventuriers du Rail (French), Aventureros al Tren (Spanish), Wsiąść do pociągu (Polish), and Menolippu (Finnish).";

        // ####-SECTION-CURIOSITES-####

        document.getElementById('curiosities-title').innerHTML = 'Curiosities';

        document.getElementById('curiosities-contents-1').innerHTML = 'The Guinness World record for the longest board marathon in history lasted as many as 61 hours and 2 minutes!';
        document.getElementById('curiosities-contents-2').innerHTML = 'The most expensive game sold is the Jewel Royale chess set, made of gold and platinum. It was sold for 9.8 million dollars!';
        document.getElementById('curiosities-contents-3').innerHTML = "On November 30, 2016, the Dutch created the world's largest Monopoly game board! Its surface is up to 900 m²";
        document.getElementById('curiosities-contents-4').innerHTML = 'One of the people who created the most board games is Dr. Reiner Knizia. He is the author of over 200 board games! He designed his first game when he was 8 years old.';
        document.getElementById('curiosities-contents-5').innerHTML = 'In 1924, the International Chess Federation was established in Paris. The first Chess Olympiad dates from the same year.';

        // ####-SECTION-QUIZ-####

        document.getElementById('quiz-title').innerHTML = 'Check your knowledge! <br> Take part in a quiz of 20 questions.';
        document.getElementById('quiz-button').innerHTML = "Ok, let's try!";

        // ####-SECTION-GO-GAME-####

        document.getElementById('go-game-contents').innerHTML = 'Hungry for board games? <br> You say, and you have! <br> We invite you to our store, <br> where you can get different games';
        document.getElementById('to-shop').innerHTML = 'Click to go';
        //document.getElementById('go-game-text').innerHTML = 'Dlaczego wyjątkową? Przekonaj się sam ;)';
        //document.getElementById('go-game-button').innerHTML = 'Zagraj!';



        // ####-SETION-BOTTOM-####

        document.getElementById('bottom-title-1').innerHTML = 'About us';
        document.getElementById('bottom-text-1').innerHTML = 'The goal is to win, but it is the goal that is important, not the winning.';
        document.getElementById('bottom-title-2').innerHTML = 'Collaboration';
        document.getElementById('bottom-text-2').innerHTML = 'Contact';
        document.getElementById('bottom-text-3').innerHTML = 'About authors';
        document.getElementById('bottom-text-4').innerHTML = 'Donation';
        document.getElementById('bottom-title-3').innerHTML = 'Navigation';
        document.getElementById('bottom-text-5').innerHTML = 'Home';
        document.getElementById('bottom-text-6').innerHTML = 'Shop';
        document.getElementById('bottom-text-7').innerHTML = 'Quiz';
        document.getElementById('bottom-social-media').innerHTML = 'social media';

        // ####-SECTION-FOOTER-####

        document.getElementById('footer-text').innerHTML = '&copy; 2019 zszarki.pl All rights reserved';
        $("#loader-wrapper").fadeOut();
    }, 500);
});
