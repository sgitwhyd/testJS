

    function loadContent() {
        document.getElementById("btn-load").innerHTML = "loading...";
        document.getElementById("btn-load").setAttribute("disabled", "true");
   
               fetch("https://natours-raihan.herokuapp.com/api/v1/tours")
               .then(function (response) {
                   response.json().then(function (data) {
                       document.getElementById("status").innerHTML = `Status : ${data.status}`;
                       document.getElementById("result").innerHTML = `Results : ${data.results}`;
                   });
               }).catch(function (err) {
                   alert('Gagal Mengambil data');
               })
               .then(function () {
                document.getElementById("btn-load").innerHTML = "Done";
                document.getElementById("btn-load").removeAttribute("disabled");
            });
    }
