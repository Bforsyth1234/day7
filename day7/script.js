var data = {
    name: "Brooks",
    hobby: "reef keeping"
};


var post = function () {
    var request = new XMLHttpRequest();

    request.open("POST", "https://troop1.firebaseio.com/.json");
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            console.log(JSON.parse(this.response));
        } else {
            console.log("Eror on POST");
        };
    };

    request.onerror = function () {
        console.log("Communication Error");
    };

    request.send(JSON.stringify(data));
}

var get = function (id) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://troop1.firebaseio.com/"+ id + ".json");
    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            var holder = "";
            console.log(data);
            for (var i in data) {
                holder += data[i].name + " " + data[i].hobby + "<br />"
            };
            document.getElementById("output").innerHTML = holder;
        } else {
            console.log("Erro on Get")
        }
    };
    request.onerror = function () {
        console.log("Communication Error");
    };
    request.send();
}
