/*********************************************************************************
JS Vertiefung CodeFlow Übung lev2_1: Objects Loops - Aufgabenstellung

Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.

Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
Verwende map() und greife auf alle name zu.

Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
Verwende map() und greife auf alle preiseGramEuro zu.

Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
Verwende map() und greife auf alle veraenderung zu.

Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu

Gib alles als Tabelle in deinem HTML - Dokument aus.
 */


let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];


// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
let edelMetallNamen = [];
edelMetallPreise.forEach(metall => edelMetallNamen.push(metall.name));
console.log(edelMetallNamen);

// Verwende map() und greife auf alle name zu.
console.log(edelMetallPreise.map(metall => metall.name));


// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe 
// diese ein neues Array.
let preise = [];
edelMetallPreise.forEach(metall => preise.push(metall.preiseGramEuro));
console.log(preise);

//Verwende map() und greife auf alle preiseGramEuro zu.
console.log(edelMetallPreise.map(metall => metall.preiseGramEuro));


// Verwende forEach() und greife auf alle veraenderung zu und pushe
// in ein neues Array.
let change = [];
edelMetallPreise.forEach(metall => change.push(metall.veraenderung));
console.log(change);

// Verwende map() und greife auf alle veraenderung zu.
console.log(edelMetallPreise.map(metall => metall.veraenderung));


// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu
console.log(edelMetallPreise.filter(metall => metall.preiseGramEuro > 50));


//Gib alles als Tabelle in deinem HTML - Dokument aus.
const table = document.getElementById("table");

function buildRow(metall) {

    let html = '<tr>';
    html += `<td>${metall.name}</td>`;
    html += `<td>${metall.preiseGramEuro}</td>`;
    html += `<td>${metall.veraenderung}</td>`;
    html += '</tr>';
    return html;
}

function buildHeader(array) {

    let html = '<tr>';
    for (let key in array[0]) {
        let keyName = key[0].toUpperCase() + key.slice(1);
        html += `<th>${keyName}</th>`;
    }
    html += '</tr>';
    return html;
}

let header = buildHeader(edelMetallPreise);

let content = "";
edelMetallPreise.forEach(metall => content += buildRow(metall));

table.innerHTML = header + content;

for (let key in edelMetallPreise[0]) {
    console.log(key);
}