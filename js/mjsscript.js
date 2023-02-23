const movieData = document.getElementById('display');
const movieInput = document.getElementById('movie-input');
const body = document.querySelector('body')
const defaultInput = 'Aliens';
const url = `https://www.omdbapi.com/?apikey=636d7ecb&t=`;
const movieDataDis = (movie) => {

    const imdbLink = 'https://www.imdb.com/title/';
    const bg = movie.Genre;

    if (bg.includes("Horror")) {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(https://yellmagazine.com/wp-content/uploads/2014/03/amityville-horror.jpg)");

    };

    if (bg.includes("Sci-Fi")) {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(https://i.pinimg.com/originals/2a/a5/6a/2aa56abf4deab5b4b25b507eeb923878.jpg)");

    };
    if (bg.includes("Comedy")) {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(https://images2.alphacoders.com/710/710559.jpg)");

    };
    if (bg.includes("Thriller")) {
        $("body").css("background", "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(https://wallpaperplay.com/walls/full/1/e/d/398471.jpg)");

    };

    $("#none").text(" ");

    return `

                    <div>
                        <img id="box" src="${movie.Poster}">
                    </div>
           
                    <div class="content">

                        <div>
                            <img id="poster" src="${movie.Poster}">

                            <div class="data-block">

                                <h2 class="head" id="title">${movie.Title}</h2>

                                <p><strong>${movie.Year} </strong> | <strong>Genre: </strong>${movie.Genre}</p>
                                                               
                                <p>${movie.Plot}</p>
                                                            
                                <p><a href="${imdbLink}${movie.imdbID}">View on <img class="icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/171_Imdb_logo_logos-512.png"></a><strong>      Rating: ${movie.Ratings[0].Value} </strong></p>
                                                       
                            </div>

                        </div>
            
                    </div>

            `;
};

const noResult = () => {

    let factText = [
          "Psycho is the first U.S. film to feature a toilet flushing"
        , "The  wallet in Pulp Fiction was Quentin Tarantino's"
        , "Toto earned more than the Munchkins on The Wizard of Oz"
        , "Gene Hackman was originally going to play Hannibal Lecter"
        , "The most profitable film of all time is Paranormal Activity"


        , "Scream was originally titled Scary Movie"
        , "Francis Ford Coppola would read passages of Heart of Darkness to Marlon Brando on the fractious set of Apocalypse Now after learning the actor had never read the source material."
        , "Independence Day was originally meant to have support from the United States Armed Forces, but they backed out when the references to Area 51 were not removed from the script"
        , "Nakatomi Plaza in the movie “Die Hard” is actually 20th Century Fox’s headquarters and they charged themselves rent to use it"
        , "The computer game Tron actually came out after the movie did. It even made more money in arcades than the movie did in theaters."
        , "In Titanic, James Cameron drew the charcoal drawing of naked Kate Winslet"
        , "Paul Schrader wrote Taxi Driver in two weeks"
        , "Michael Jackson tried to buy Marvel so he could star in Spider-Man movies."
        , "The face mask in Halloween that Michael Myers wears is actually a Captain Kirk face mask spray-painted."
        , "Dooley Wilson, who played the pianist Sam in Casablanca, was a drummer IRL who didn't know how to play the piano."


      ];

    let factimg = [
          "https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BNjUyMTc4MDExMV5BMl5BanBnXkFtZTgwNDg0NDIwMjE@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BMjY1NjcxODQ4MV5BMl5BanBnXkFtZTcwMzUxNjM4Mg@@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BMDdhODg0MjYtYzBiOS00ZmI5LWEwZGYtZDEyNDU4MmQyNzFkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BMGQwNDNkMmItYWY1Yy00YTZmLWE5OTAtODU0MGZmMzQ1NDdkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BMzZhNjYyZDYtZmE4MC00M2RlLTlhOGItZDVkYTVlZTYxOWZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BM2M1MmVhNDgtNmI0YS00ZDNmLTkyNjctNTJiYTQ2N2NmYzc2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BNzk1OGU2NmMtNTdhZC00NjdlLWE5YTMtZTQ0MGExZTQzOGQyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        , "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"

    ];



    let x = Math.floor(Math.random() * factText.length);




    return `

                    <h3 class="heading" id="title">Sorry! No Results Found!</h3>

                        <div>
                            <img id="box" src="${factimg[x]}">
                        </div>

                        <div class="content">

                            <div>

                                <img id="poster" src="${factimg[x]}">

                                 <div class="data-block">

                                    <h2 class="head">Random Movie Fact</h2>
                                    <hr>
                                    <h5 class="factText">${factText[x]}<p>

                                                   

                                  </div>

                             </div>

                        </div>

                              
  
            `;









    //  $("#none").text(factText[x]);
    // $("#nores").text("Sorry!No results were found For that, please try again!");
    // $("#poster").src(factimg[x]);





};

const findMovie = (title) => {

    fetch(url + title, {

        method: 'get',

    }).then(function (res) {

        return res.json();

    }).then(function (data) {

        movieData.innerHTML = movieDataDis(data);

    }).catch(function (err) {

        movieData.innerHTML = noResult();

    });
};

findMovie(defaultInput);

movieInput.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && movieInput.value) findMovie(movieInput.value);
});
