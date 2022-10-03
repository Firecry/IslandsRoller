roll = document.getElementById('roll')


function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

function rolled(){
    document.getElementById('result').innerHTML = `${getMultipleRandom(warr, 10)}<br><br><br>${getMultipleRandom(rarr, 2)}<br><br><br>${getMultipleRandom(parr, 5)}`
}

var wyspystr = ' Grenlandia, Islandia, W-py Owcze, Szetlandy, Orkady, Hebrydy, Wlk. Brytania, Irlandia, Nowa Fundlandia, Bahamy, Bermudy, Wielkie Antyle, Małe Antyle, Kuba, Haiti, Puerto Rico, Jamajka, Falklandy, Baleary, Sardynia, Korsyka, Sycylia, Kreta, Cypr, Kanaryjskie, Azory, Madera, Zielonego Przylądka, Tristan da Cunha, Wyspa Wniebowstąpienia, Wyspa Świętej Heleny, Georgia Południowa, Sandwich Południowy, Wyspa Świętego Tomasza, Aleuty, Sachalin, Japońskie, Hokkaido, Honsiu, Kiusiu, Sikoku, Riukiu, Kuryle, Tajwan, Filipiny, Sumatra, Jawa, Borneo, Celebes, Melanezja, Nowa Gwinea, Nowa Kaledonia, Fidżi, W-py Salomona, Nowa Zelandia, Tasmania, Mikronezja, Polinezja(Hawaje), Galapagos, Wielkanocna, Andamany, Nikobary, Cejlon, Malediwy, Seszele, Madagaskar, Maskareny, W. Bożego Narodzenia, W-py Kokosowe, Sokotra, Lakszadiwy, Zanzibar, Wyspy Księcia Edwarda, Wyspy Crozeta, Archipelag Arktyczny, W-py Królowej Elżbiety, Ziemia Baffina, Wiktorii, Banksa, Wrangla, Ziemia Franciszka Józefa, Ziemia Północna, Nowa Ziemia, Svalbard, W-py Nowosyberyjskie, Orkady, Szetlandy Południowe'
var warr = wyspystr.split(',')
console.log(getMultipleRandom(warr, 10))


var rowystr = ' Portorykański(Puerto Rico), Sandwich Południowy, Kajmański, Aleucki, Kurylski, Bonin(Izu-Ogasawara), Japoński, Filipiński, Banda, Mariański, Kermadec, Tonga, Atakamski(Peruwiańsko-Chilijski), Kurylsko-Kamczacki, Torresa(Rów Północnonowohebrydzki), Środkowoamerykański, Meksykański, Gwatemalski, Nowogwinejski, Sundajski, Jawajski, Diamantiny, Wschodnioindyjski, strefa spękań (Nansena)'
var rarr = rowystr.split(',')
console.log(getMultipleRandom(rarr, 2))


var pradystr = ' Zatokowy(Golfsztrom), Norweski, Północnoatlantycki, Norweski, Florydzki, Zachodniogrenlandzki, Antylski, Karaibski, Gujański, Północnorównikowy, Południoworównikowy, Brazylijski, GwinejskiKanaryjski, Labradorski, Benguelski, Falklandzki, Wschodniogrenlandzki, Dryf Wiatrów Zachodnich (przez 4 oceany), Kuro-siwo, Północnopacyficzny, Południoworównikowy, Północnorównikowy, Równikowy Wsteczny, Wschodnioaustralijski, Aleucki, Alaski(Alaskański), Oja-siwo(Kurylski), Kalifornijski, Peruwiański, Somalijski(zimą), Monsunowy, Równikowy Wsteczny, Południoworównikowy, Mozambicki, Agulhas, Madagaskarski, Zachodnioaustralijski, Somalijski(latem)'
var parr = pradystr.split(',')
console.log(getMultipleRandom(parr, 5))




