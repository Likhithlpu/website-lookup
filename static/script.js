// script.js

// Function to remove unnecessary characters
function cleanData(data) {
    // Remove square brackets and single quotes from domain name
    let domainName = data.domain_name.map(name => name.replace(/[\[\]']/g, ''));
    document.getElementById('domain-name').innerText = domainName.join(', ');

    // Remove square brackets and single quotes from registrar
    document.getElementById('registrar').innerText = data.registrar.replace(/[\[\]']/g, '');

    // Remove square brackets and single quotes from creation date
    let creationDate = data.creation_date.map(date => date.replace(/[\[\]']/g, ''));
    document.getElementById('creation-date').innerText = creationDate.join(', ');

    // Remove square brackets and single quotes from expiration date
    let expirationDate = data.expiration_date.map(date => date.replace(/[\[\]']/g, ''));
    document.getElementById('expiration-date').innerText = expirationDate.join(', ');
}



// Call cleanData function after the page has loaded and results are available
window.addEventListener('DOMContentLoaded', function() {
    // Example usage: Call cleanData function with results data
    cleanData(results);
});
