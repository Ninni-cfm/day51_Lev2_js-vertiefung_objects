/*******************************************************************************
JS Vertiefung CodeFlow Übung lev2_3: JSON-Object HTML-Table - Aufgabenstellung

Du hast eine Sammlung deiner Lieblingsbands. Nun möchtest du sie auf deiner
Seite als Tabelle anzeigen. Hierfür verwenden wir das JSON Format, das dem
JS Objekt ähnlich ist.

    * Verwende den Code (HTML, JSON)  aus dem Kommentarbereich.
    * Erstelle Tabellen mit JS.
    * Fülle sie mit Daten aus dem JSON-Objekt.
    * Zeige die Tabelle in HTML an.

Assets
    * arrow function
    * forEach
    * Template literals
    * return
 */

const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];


function buildRow(element) {

    let html = '<tr>';
    html += `<td>${element.name}</td>`;
    html += `<td>${element.country}</td>`;
    html += `<td>${element.period_active.start} - ${element.period_active.end}</td>`;
    html += `<td>${element.genre}</td>`;
    html += '</tr>';
    return html;
}

function buildHeader() {

    let html = '<tr>';
    html += "<th>Name</th>";
    html += "<th>Country</th>";
    html += "<th>Period Active</th>";
    html += "<th>Genre</th>";
    html += '</tr>';
    return html;
}

function buildTable() {

    let table = "<table>";
    table += buildHeader();
    singers.forEach(singer => table += buildRow(singer));
    table += "</table>";
    return table;
}

document.getElementById("table-container").innerHTML = buildTable();
