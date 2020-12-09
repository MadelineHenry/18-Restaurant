let form = document.querySelector('.form')

form.addEventListener('submit', validateForm)

function validateForm() {
    var n = document.getElementById('name').value;
    var e = document.getElementById('email').value;
    var s = document.getElementById('subject').value;
    var m = document.getElementById('message').value;
    var onlyLetters = /^[a-zA-Z\s]*$/;
    var onlyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (n == "" || n == null) {
        document.getElementById('nameLabel').innerHTML = ('Please enter your name');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }


    if (!n.match(onlyLetters)) {
        document.getElementById('nameLabel').innerHTML = ('Please enter only letters');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }

    if (e == "" || e == null) {
        document.getElementById('emailLabel').innerHTML = ('Please enter your email');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if (!e.match(onlyEmail)) {
        document.getElementById('emailLabel').innerHTML = ('Please enter a valid email address');
        document.getElementById('email').style.borderColor = "red";
        return false;
    }

    if (s == "" || s == null) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter your subject');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if (!s.match(onlyLetters)) {
        document.getElementById('subjectLabel').innerHTML = ('Please enter only letters');
        document.getElementById('subject').style.borderColor = "red";
        return false;
    }

    if (m == "" || m == null) {
        document.getElementById('messageLabel').innerHTML = ('Please enter your message');
        document.getElementById('message').style.borderColor = "red";
        return false;
    } else {
        return true;
    }

}

(function () {
    var setting = {
        "height": 400,
        "width": 400,
        "zoom": 15,
        "queryString": "Cantersteen 10, Bruxelles, Belgique",
        "place_id": "ChIJHacLzn_Ew0cRsNN0o2hHYy8",
        "satellite": false,
        "centerCoord": [50.84654374293232, 4.358294254680435],
        "cid": "0x2f634768a374d3b0",
        "lang": "fr",
        "cityUrl": "/belgium/brussels",
        "cityAnchorText": "Carte de Bruxelles, Flanders, Belgique",
        "id": "map-9cd199b9cc5410cd3b1ad21cab2e54d3",
        "embed_id": "322973"
    };
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=322973';
    s.async = true;
    s.onload = function () {
        window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();


