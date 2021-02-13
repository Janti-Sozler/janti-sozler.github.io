Papa.parse("https://raw.githubusercontent.com/Janti-Sozler/janti-sozler.github.io/main/janti-sozler.csv", {
    download:true,
    header:true,
    complete: function(results) {
        limit = results.data.length-1;
        secim = Math.floor(Math.random()*limit)
        soz = results.data[secim]['Söz'];
        console.log(results.data[secim]['Söz']);
        $('#soz').text(soz)
    }
});