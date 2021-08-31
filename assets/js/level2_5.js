/*************************************************************************************
JS Vertiefung CodeFlow Übung lev2_5: JSON filter search-by-name - Aufgabenstellung

Du hast eine Sammlung deiner Lieblingsbands. Du möchtest deinen Lieblingsstar aus der Liste der 100 Sängerinnen und Sänger finden.
    * Verwende den Code (HTML input, button ) aus dem Kommentarbereich.
    * Erstelle eine Suchfunktion in JavaScript, die den richtigen Künstler ausgibt.
    * Erstelle ein gutes Design für diese Tabelle.

Assets
    * arrow function
    * filter
    * includes()
    * return
 */

/*****************************************************************************

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


/*****************************************************************************
    define sort orders for each column to enable reverse sorting as well
*/
let sortOrder = {
    name: true,
    country: true,
    period: true,
    genre: true
}


/*****************************************************************************
    sorting algorithms for various sorting methods
*/
let compare = (a, b, reverse = false) => {

    return (a < b ? -1 : 1) * (reverse ? -1 : 1);
}

let sortByName = () => {
    sortOrder.name = !sortOrder.name;
    singers.sort((a, b) => compare(a.name, b.name, sortOrder.name));
    buildTable();
}
let sortByCountry = () => {
    sortOrder.country = !sortOrder.country;
    singers.sort((a, b) => compare(a.country, b.country, sortOrder.country));
    buildTable();
}
let sortByPeriodActive = () => {
    sortOrder.period = !sortOrder.period;
    singers.sort((a, b) => compare(getPeriodActiveString(a), getPeriodActiveString(b), sortOrder.period));
    buildTable();
}
let sortByGenre = () => {
    sortOrder.genre = !sortOrder.genre;
    singers.sort((a, b) => compare(a.genre, b.genre, sortOrder.genre));
    buildTable();
}


/*****************************************************************************
    function getPeriodActiveString(element): 
    helper function; returns a string from combined period active start/end
*/
function getPeriodActiveString(element) {

    return `<td>${element.period_active.start} - ${element.period_active.end}</td>`;
}


/*****************************************************************************
    function buildHeader():
    build the table header
*/
function buildHeader() {

    let html = '<tr>';
    html += '<th class="sort" onclick="sortByName()">Name</th>';
    html += '<th class="sort" onclick="sortByCountry()">Country</th>';
    html += '<th class="sort" onclick="sortByPeriodActive()">Period Active</th>';
    html += '<th class="sort" onclick="sortByGenre()">Genre</th>';
    html += '</tr>';
    return html;
}


/*****************************************************************************
    function buildRow(element):
    build the a single row for an element
*/
function buildRow(element) {

    let html = '<tr>';
    html += `<td>${element.name}</td>`;
    html += `<td>${element.country}</td>`;
    html += getPeriodActiveString(element);
    html += `<td>${element.genre}</td>`;
    html += '</tr>';
    return html;
}


/*****************************************************************************
    function buildTable(): 
    build the whole dammned thing
*/
function buildTable() {

    // if there is some text in the search input field apply the filter
    let searchText = document.getElementById("searchInput").value;
    let array = singers.filter(elt => elt.name.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) > -1);

    let table = "<table>";
    table += buildHeader();
    array.forEach(element => table += buildRow(element));
    table += "</table>";
    document.getElementById("table-container").innerHTML = table;
}


/*****************************************************************************
    function handleSearchClicked():
    filter table accordiong to the search term in the search input field
*/
function handleSearchClicked() {
    buildTable();
}

/*****************************************************************************
    function handleResetClicked():
    clears the search input field
*/
function handleResetClicked() {
    document.getElementById("searchInput").value = "";
    buildTable();
}


function liveFilter() {
    buildTable();
}

buildTable();