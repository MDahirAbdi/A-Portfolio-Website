var tablinks = document.getElementsByClassName('tab-links')
var tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname, event) {
    // Remove "active-link" class from all tab links
    Array.from(tablinks).forEach((tablink) => {
        tablink.classList.remove('active-link')
    })

    // Remove "active-tab" class from all tab contents
    Array.from(tabcontents).forEach((tabcontent) => {
        tabcontent.classList.remove('active-tab')
    })

    // Add "active-link" class to the clicked tab link
    event.currentTarget.classList.add('active-link')

    // Special handling for the "Skills" tab
    if (tabname === 'Skills') {
        // Add "active-tab" class to the "Skills" tab content regardless of its previous state
        document.getElementById('skills').classList.add('active-tab')
    } else {
        // Add "active-tab" class to the corresponding tab content
        document.getElementById(tabname).classList.add('active-tab')
    }
}

// ------------Mobile nav menu

var sidemenu = document.getElementById('sidemenu')

function openmenu() {
    sidemenu.style.right = '0'
}
function closemenu() {
    sidemenu.style.right = '-200px'
}

// --------------form Google Sheet

const scriptURL = 'https://script.google.com/macros/s/AKfycbziZt35ZB964PVF-wUIal5XVShrf45rt5M7RkkwPeNy4_IRy5GmdUXYgqdRaerzvWRvTA/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => console.log('Success!', response))
        .catch((error) => console.error('Error!', error.message));
});

