
//     setTimeout(reset_view(art_id), 10000);
// }
// function reset_view(art_id){
//     // displays form and new art for user to guess again
//     document.getElementById("art_img").src = art.art_id.filepath
//     document.getElementById("art_img").alt = art.art_id.title
// }
// main();

function generate_art() {
    //gets the next artwork in the list and displays it
    get_art_list().then(display_art);
    }

function display_art(art_list) {
    const art_img_spot = document.getElementById("art_img");
    const movement_spot = document.getElementById("movement");
    const title_spot = document.getElementById("title");
    const artist_spot = document.getElementById("artist");
    const result_spot = document.getElementById("result");

    console.log(art_list);
    index = generate_random_index();
    art_img_spot.src = art_list[index].filepath;
    art_img_spot.alt = art_list[index].title;
    movement_spot.innerHTML = art_list[index].movement;
}

async function get_art_list() {
    let response = await fetch("https://calebbarzee.github.io/8-bit_gallery/art.json");
    let data = await response.json();
    art_list = data;
    // console.log(art_list);
    return art_list
}

function check_correct(title_response, artist_response){
    // checks response to see if it matches database
    lowercase_title = art.art_id.title.toLowerCase();
    lowercase_artist = art.art_id.artist.toLowerCase();
    eval = lowercase_title == title_response.toLowerCase() && lowercase_artist == artist_response.toLowerCase();
    return eval
}
function generate_random_index(){
        let random_index = Math.floor(Math.random() * (85 - 0) + 0);
        // max = 18, min = 0
        // console.log(random_index);
        return random_index
    }
generate_art();