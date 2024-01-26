
// homework

function getUserInfo () {
    let info = new XMLHttpRequest();
    info.addEventListener('load', function() {
        let infoText = this.responseText;
        let infoJs = JSON.parse(infoText)
        console.log(infoJs);

        let ul = document.createElement('ul');
        infoJs.data.forEach(function(item) {

            let li = document.createElement('li');

            li.textContent = `name: ${item.first_name} // last name: ${item.last_name} // email: ${item.email}`;

            ul.appendChild(li);
            
        });

        document.getElementById("div-box").appendChild(ul);
    });
    info.open("GET", "https://reqres.in/api/users?page=2");
    info.send();
};

getUserInfo()