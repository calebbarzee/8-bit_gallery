// function main() {
// var art_id = generate_id();
// reset_view(art_id);
// }

// function generate_id(){
//     let id = Math.floor(Math.random() * (19 - 0) + 0);
//     // max = 18, min = 0
//     console.log(id);
//     return id
// }

// function check_form_submission(title_response, artist_response){
//     // checks response to see if it matches database
//     lowercase_title = art.art_id.title.toLowerCase();
//     lowercase_artist = art.art_id.artist.toLowerCase();
//     eval = lowercase_title == title_response.toLowerCase() && lowercase_artist == artist_response.toLowerCase();
//     display_results(eval);
    
// }
// function display_results(eval){
//     // displays if user is correct or not and the painting information
//     if (eval){
//         // user was correct
//         document.getElementById("result").innerHTML = "Correct!"
//     }
//     else {
//         // user was incorrect
//         document.getElementById("result").innerHTML = "Incorrect."
//     }
//     var art_id = generate_id();
//     setTimeout(reset_view(art_id), 10000);
// }
// function reset_view(art_id){
//     // displays form and new art for user to guess again
//     document.getElementById("art_img").src = art.art_id.filepath
//     document.getElementById("art_img").alt = art.art_id.title
// }
// main();

function generate_art() {
    //gets the next card in the list and displays it

    get_art_list().then(display_art(art_list));
    }
function display_art(art_list) {
    const art_img_spot = document.getElementById("art_img");
    const movement_spot = document.getElementById("movement");
    const title_spot = document.getElementById("title");
    const artist_spot = document.getElementById("artist");
    const result_spot = document.getElementById("result");

    console.log(art_list);
    // card_title.innerHTML = card.name;
    // card_img.setAttribute("src", card.image_uris.png);
    // artist_link.innerHTML = card.artist;
    // let link_url = get_artist_link(card.artist);
    // artist_link.setAttribute("href", link_url);
    // card_set.innerHTML = card.set_name;
    // card_rarity.innerHTML = card.rarity;
    // card_types.innerHTML = card.type_line;
    // let flavor = card.hasOwnProperty("flavor_text") ? card.flavor_text : "";
    // card_flavor_text.innerHTML = flavor;
}

async function get_art_list() {
    let response = await fetch("https://calebbarzee.github.io/8-bit_gallery/art.json");
    let data = await response.json();
    art_list = data;
    console.log(art_list);
    return art_list
}

function check_correct(title_response, artist_response){
    // checks response to see if it matches database
    lowercase_title = art.art_id.title.toLowerCase();
    lowercase_artist = art.art_id.artist.toLowerCase();
    eval = lowercase_title == title_response.toLowerCase() && lowercase_artist == artist_response.toLowerCase();
    return eval
}
generate_art();