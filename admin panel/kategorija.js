let currentItems = [];

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const kategorija = urlParams.get('kategorija');

    const categories = {
        'pizza': { title: 'Pizza', storageKey: 'allPizzas' },
        'pasta': { title: 'Pasta', storageKey: 'allPastas' },
        'salata': { title: 'Salata', storageKey: 'allSalads' },
        'riba': { title: 'Riba', storageKey: 'allFish' },
        'rostilj': { title: 'Rostilj', storageKey: 'allGrill' }
    };

    if (categories[kategorija]) {
        const categoryInfo = categories[kategorija];
        document.getElementById('nazivKategorije').innerText = categoryInfo.title;

        const items = JSON.parse(localStorage.getItem(categoryInfo.storageKey));
        const listaVrsta = document.getElementById('listaVrsta');

        items.forEach(function(item) {
            let li = document.createElement('li');
            li.innerText = item;
            listaVrsta.appendChild(li);
            currentItems.push(item);
        });
    }

}
document.querySelector('#dodaj-dugme').addEventListener('click', dodajNovuVrstu);


function dodajNovuVrstu() {
        const novaVrsta = document.getElementById('noviTip').value;
    
        // Provera da li je uneto neko ime vrste
        if(novaVrsta.trim() === '') {
            alert('Molimo unesite ime vrste pre nego što dodate.');
            return;
        }
    
        const listaVrsta = document.getElementById('listaVrsta');
        let li = document.createElement('li');
        li.innerText = novaVrsta;
        listaVrsta.appendChild(li);
        currentItems.push(novaVrsta); 
    
        // Očisti polje za unos nakon dodavanja
        document.getElementById('noviTip').value = '';
    }

    document.getElementById('sacuvaj-dugme').addEventListener('click', function() {
        const listaVrsta = document.getElementById('listaVrsta');
        let stavke = [];
    
        for (let i = 0; i < listaVrsta.children.length; i++) {
            stavke.push(listaVrsta.children[i].innerText);
        }
    
        const stavkeString = JSON.stringify(stavke);
        document.getElementById('allItems').value = stavkeString;
    });
    
    