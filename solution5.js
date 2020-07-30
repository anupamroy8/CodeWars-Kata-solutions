const polish = {
    "ą" : "a",
    "ć" : "c",
    "ę" : "e",
    "ł" : "l",
    "ń" : "n",
    "ó" : "o",
    "ś" : "s",
    "ź" : "z",
    "ż" : "z"
    }
    

    str.split("").map(function(a) {
        if(polish.a === undefined) return a;
        else return polish.a;
    }).join("");
