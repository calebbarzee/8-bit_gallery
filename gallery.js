const art = {
    0: {
    "id": "0000",
	"movement": "Abstract Expressionism",
    "title": "Recumbent Figure",
    "artist": "Henry Moore",
    "date": "1938",
    "filepath": "assets/8-bit_art/abstract_expressionism/pixelated_recumbent_figure.jpeg"
    },
    1: {
        "id": "0001",
	    "movement": "Baroque",
        "title": "The Calling of St. Matthew",
        "artist": "Caravaggio",
        "date": "1600",
        "filepath": "assets/8-bit_art/baroque/pixelated_calling_of_st_matthew.jpeg"
        },
    2: {
        "id": "0002",
	    "movement": "Baroque",
        "title": "Judith Beheading Holofernes",
        "artist": "Artemisia Gentileschi",
        "date": "1613",
        "filepath": "assets/8-bit_art/baroque/pixelated_judith_beheading_holofernes.jpeg"
        },
    3: {
        "id": "0003",
	    "movement": "Baroque",
        "title": "Las Meninas",
        "artist": "Diego Velázquez",
        "date": "1656",
        "filepath": "assets/8-bit_art/baroque/pixelated_las_meninas.jpeg"
        },
    4: {
        "id": "0004",
	    "movement": "Baroque",
        "title": "The Night Watch",
        "artist": "Rembrandt van Rijn",
        "date": "1642",
        "filepath": "assets/8-bit_art/baroque/pixelated_the_night_watch.jpeg"
        },
    5: {
        "id": "0005",
	    "movement": "Cubism",
        "title": "Guernica",
        "artist": "Pablo Picasso",
        "date": "1937",
        "filepath": "assets/8-bit_art/cubism/pixelated_guernica.jpeg"
    },
    6: {
        "id": "0006",
	    "movement": "Cubism",
        "title": "Guitar, Sheet Music, and Wine Glass",
        "artist": "Pablo Picasso",
        "date": "1912",
        "filepath": "assets/8-bit_art/cubism/pixelated_guitar_sheet_music_and_glass.jpeg"
        },
    7: {
        "id": "0007",
	    "movement": "Cubism",
        "title": "Nude Descending a Staircase",
        "artist": "Marcel Duchamp",
        "date": "1912",
        "filepath": "assets/8-bit_art/cubism/pixelated_nude_descending_a_staircase.jpeg"
        },
    8: {
        "id": "0008",
	    "movement": "Cubism",
        "title": "Quarry at Bibémus",
        "artist": "Paul Cézanne",
        "date": "1900",
        "filepath": "assets/8-bit_art/cubism/pixelated_quarry_bibemus.jpeg"
        },
    9: {
        "id": "0009",
	    "movement": "Cubism",
        "title": "Les Demoiselles d'Avignon",
        "artist": "Pablo Picasso",
        "date": "1907",
        "filepath": "assets/8-bit_art/cubism/pixelated_the_damsels_of_d'avignon.jpeg"
        },
    10: {
        "id": "0010",
	    "movement": "Cubism",
        "title": "Three Musicians",
        "artist": "Pablo Picasso",
        "date": "1921",
        "filepath": "assets/8-bit_art/cubism/pixelated_the_three-musicians.jpeg"
        },
    11: {
        "id": "0011",
	    "movement": "Dada",
        "title": "Bicycle Wheel",
        "artist": "Marcel Duchamp",
        "date": "1913",
        "filepath": "assets/8-bit_art/dada/pixelated_bicycle_wheel.jpeg"
        },
    12: {
        "id": "0012",
	    "movement": "Dada",
        "title": "Bottle Rack",
        "artist": "Marcel Duchamp",
        "date": "1914",
        "filepath": "assets/8-bit_art/dada/pixelated_bottle_rack.jpeg"
        },
    13: {
        "id": "0013",
	    "movement": "Dada",
        "title": "Fountain",
        "artist": "Marcel Duchamp",
        "date": "1917",
        "filepath": "assets/8-bit_art/dada/pixelated_fountain.jpeg"
        },
    14: {
        "id": "0014",
	    "movement": "Dada",
        "title": "Cut with the Dada Kitchen Knife through the Last Weimar Beer-Belly",
        "artist": "Hannah Höch",
        "date": "1919",
        "filepath": "assets/8-bit_art/dada/pixelated_hoch_cut_with_the_kitchen_knife_dada.jpeg"
        },
    15: {
        "id": "0015",
	    "movement": "Expressionism",
        "title": "I and the Village",
        "artist": "Marc Chagall",
        "date": "1911",
        "filepath": "assets/8-bit_art/expressionism/pixelated_i_and_the_village.jpg"
        },
    16: {
        "id": "0016",
	    "movement": "Symbolism",
        "title": "Kiss by the Window",
        "artist": "Edvard Munch",
        "date": "1892",
        "filepath": "assets/8-bit_art/expressionism/pixelated_kiss_by_the_window.jpeg"
        },
    17: {
        "id": "0017",
	    "movement": "Expressionism",
        "title": "Mount Niesen",
        "artist": "Paul Klee",
        "date": "1915",
        "filepath": "assets/8-bit_art/expressionism/pixelated_mount_niesen.jpeg"
        },
    18: {
        "id": "0018",
	    "movement": "Expressionism",
        "title": "Red Balloon",
        "artist": "Paul Klee",
        "date": "1922",
        "filepath": "assets/8-bit_art/expressionism/pixelated_red_balloon.jpg"
        },

};
console.log(art);
function main() {
var art_id = generate_id();
reset_view(art_id);
}

function generate_id(){
    let id = Math.floor(Math.random() * (19 - 0) + 0);
    // max = 18, min = 0
    console.log(id);
    return id
}

function check_form_submission(title_response, artist_response){
    // checks response to see if it matches database
    lowercase_title = art.art_id.title.toLowerCase();
    lowercase_artist = art.art_id.artist.toLowerCase();
    eval = lowercase_title == title_response.toLowerCase() && lowercase_artist == artist_response.toLowerCase();
    display_results(eval);
    
}
function display_results(eval){
    // displays if user is correct or not and the painting information
    if (eval){
        // user was correct
        document.getElementById("result").innerHTML = "Correct!"
    }
    else {
        // user was incorrect
        document.getElementById("result").innerHTML = "Incorrect."
    }
    var art_id = generate_id();
    setTimeout(reset_view(art_id), 10000);
}
function reset_view(art_id){
    // displays form and new art for user to guess again
    document.getElementById("art_img").src = art.art_id.filepath
    document.getElementById("art_img").alt = art.art_id.title
}
main();