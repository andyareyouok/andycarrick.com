function randomTitleAndImg() {
    var lat;
    var lon;
    $.getJSON("http://ip-api.com/json", function (data2) {
        lat = data2.lat;
        lon = data2.lon;
        var api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/32140729676d4cb1a182430c51e36e25/" + lat + "," + lon + "";
        //have to load in the api before asking for data below//
        $.getJSON(api, function (data) {
            var cTemp;
            var fTemp;
            var weatherType = data.currently.summary;
            var fTemp = data.currently.temperature;
            var windSpeed = data.currently.windSpeed;
            var city = data.timezone;
            var icon = data.currently.icon;
            var tempSwap = true;
            //converting farh to celsius/
            cTemp = 5 / 9 * (fTemp - 32).toFixed(1);
            
            
        var titleRain = [
        "Glengarry Glen Ross"
        , "Blade Runner"
        , "The Crow"
        , "Road To Perdition"
        , "Shawshank Redemption"
        , "Taxi Driver"
        , "Identity"
        , "Constantine"
        , "Watchmen"
        , "Fight Club"
        , "Godzilla (1998)"
        , "Se7en"
        , "Breakfast at Tiffanys"
        , "Jurassic Park"
        , "Pride and Prejudice"
        , "Cloudy With a Chance of Meatballs"
        , "Singing in the Rain"
        , "Cape Fear"
        , "The Matrix Revolutions"
        , "Return of the Living Dead"
        , "Aliens"
        , "Raising Arizona"
        , "Sin City"
        , "V for Vendetta"
        , "American Beauty"
        , "Saving Private Ryan"
        , "High Fidelity"
        , "Point Break"
        , "The Truman Show"
        , "Say Anything"
        , "Elevator to the Gallows"
        , "28 Days Later"
        , "Titanic"
      ];
        var titlePcn = [
        "The Mist"
        , "Donnie Darko"
        , "Poltergeist"
        , "Christine"
        , "It Follows"
        , "Paranormal Activity"
        , "The Blair Witch Project"
        , "Friday the 13th"
        , "Super 8"
        , "10 Cloverfield Lane"
        , "Mulholland Drive"
        , "From Dusk Till Dawn"
        , "Clockwork Orange"
        , "The Bone Collector"
        , "Silence Of The Lambs"
        , "Rear Window"
        , "The 6th Sense"
        , "No Country For Old Men"
        , "The Usual Suspects"
        , "Cape Fear"
        , "Nightcrawler"
        , "Vertigo"
        , "Psycho"
        , "Shutter Island"
        , "Annihilation"
      ];
         var titlePcd = [
        "The Big Lebowski"
        , "Reservoir Dogs"
        , "Repo Man"
        , "Ferris Bueller's Day Off"
        , "The Breakfast Club"
        , "Back to the Future"
        , "Jaws"
        , "Indiana Jones"
        , "Easy Rider"
        , "Cheech and Chong"
        , "True Romance"
        , "Dirty Dancing"
        , "Little Miss Sunshine"
        , "When Harry Met Sally"
        , "Dazed And Confused"
        , "Juno"
        , "Fast Times at Ridgemont High"
        , "Perks of Being a Wallflower"
        , "My Girl"
        , "10 Things I Hate About You"
        , "Pretty In Pink"
        , "Sixteen Candles"
        , "Super Troopers"
        , "Forrest Gump"
        , "Hook"
             , "The Birdcage"
             , "Fantastic Mr Fox"
             , "Big"
             ,"Ghostbusters"
             , "Good Will Hunting"
             ,"The Goonies"
             , "Stand By Me"

      ];
  
     
            
            
            
            var pictureRain = [
        "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkwOTk4MGEtYjJlMS00OThkLTgxZWEtNGM5MDA3NTAxM2Q5XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51I74ym0DrL.jpg"
        , "https://http2.mlstatic.com/dvd-el-cuervo-the-crow-1994-alex-proyas-D_NQ_NP_20486-MLM20191736081_112014-F.jpg"
        , "https://www.movieposter.com/posters/archive/main/97/MPW-48593"
        , "https://media.senscritique.com/media/000004888675/source_big/Les_Evades.jpg"
        , "https://img.posterlounge.de/images/wbig/poster-taxi-driver-883310.jpg"
        , "https://i.pinimg.com/originals/20/ee/1d/20ee1d5d56fbeef991efe09cc7b1e8be.jpg"
        , "https://movieplayer.net-cdn.it/images/2003/04/03/la-locandina-di-constantine-9296.jpg"
        , "https://hdencode.com/wp-content/uploads/2017/12/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"
        , "https://www.movieposter.com/posters/archive/main/4/MPW-2244"
        , "http://is5.mzstatic.com/image/thumb/Video/v4/28/ae/7e/28ae7ed0-81ba-1e47-04ea-a69b7c0a2d73/source/1200x630bb.jpg"
        , "https://ia.media-imdb.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,639,1000_AL_.jpg"
        , "https://pics.filmaffinity.com/breakfast_at_tiffany_s-573798368-large.jpg"
        , "http://img.moviepostershop.com/jurassic-park-movie-poster-1992-1020141477.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/41PEuitnkuL.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51tvHLyFKNL._SX333_BO1,204,203,200_.jpg"
        , "https://www.abqtodo.com/wp-content/uploads/sites/www.abqtodo.com/images/2017/05/MPW-55170-231x400.jpg"
        , "https://media-cache.cinematerial.com/p/500x/mb0nozfq/cape-fear-movie-poster.jpg"
        , "https://i.pinimg.com/originals/de/b7/33/deb7335fa11d8cb0e7d0ce6acf4033bc.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51PEW78T71L._SY445_.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/91TYB8gep%2BL._SY679_.jpg"
        , "https://stanfordclark.files.wordpress.com/2012/03/lf.jpeg"
        , "https://cdn.miramax.com/media/assets/sin_city_scrubbed_150413.jpg"
        , "https://i.pinimg.com/originals/d5/a7/87/d5a787c7e5bcafb46677a5f04734d078.jpg"
        , "https://media-cache.cinematerial.com/p/500x/bmzx6t5z/american-beauty-movie-poster.jpg"
        , "https://fontmeme.com/images/Saving-Private-Ryan-Poster.jpg"
        , "http://img.moviepostershop.com/high-fidelity-movie-poster-2000-1010689859.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51a3Lo80qsL.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51MkV396G0L.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51ZBD6N3G7L.jpg"
        , "https://i.pinimg.com/originals/24/09/f2/2409f27deb95397b57592f9ae76406c8.jpg"
        , "https://upload.wikimedia.org/wikipedia/lt/1/13/28DaysLaterMoviePoster.jpg"
        , "https://img.etsystatic.com/il/d593b1/1468243988/il_570xN.1468243988_bfms.jpg?version=1"

      ];
            
            
            
            var x = Math.floor(Math.random() * pictureRain.length);
            
            
            
            
            var picturePcn = [
        "https://static1.squarespace.com/static/51236ebfe4b0cbd2cf2de828/51238204e4b05150b482a754/51238204e4b05150b482a760/1371761516555/themist.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/41z6GKy%2BGLL.jpg"
        , "https://static.diariofemenino.com/pictures/fotos/189000/189135-peliculas-para-halloween-poltergeist.jpg"
        , "http://img.moviepostershop.com/christine-movie-poster-1983-1020489472.jpg"
        , "http://img.moviepostershop.com/it-follows-movie-poster-2015-1020772022.jpg"
        , "https://smurfdok.files.wordpress.com/2011/11/paranormal-activity-dvd.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51PKSEVHY0L._SY445_.jpg"
        , "https://cdn.traileraddict.com/content/new-line-cinema/friday13th_2009-2.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/61CE-ff6nXL._SY550_.jpg"
        , "https://orig00.deviantart.net/1838/f/2016/015/e/3/10_cloverfield_lane_teaser_poster_by_dcomp-d9o2xj4.jpg"
        , "https://www.movieposter.com/posters/archive/main/23/MPW-11618"
        , "https://www.movieposter.com/posters/archive/main/68/MPW-34095"
        , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM3Kx0P2Z5ApC5p2Dk4cv_CjxQpJ3byX2PNmoeibIjKZVngCFwTw"
         , "https://images-na.ssl-images-amazon.com/images/I/51H5Y1NXVWL._SY445_.jpg"
        , "https://discogslabs.imgix.net/films/58409a486a68200014f71d10.jpg?s=767d27ac682e3d866b56c4cd9b456e9e"
        , "https://fourstarfilmfan.files.wordpress.com/2014/11/a49da-rear_window_film_poster.jpg"
        , "https://i.pinimg.com/originals/85/dd/0f/85dd0f452e36432e8e3364881d522809.jpg"
        , "https://sahandfilm.com/wp-content/uploads/2017/10/No-Country-for-Old-Men.jpg"
        , "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/5/0/8/3700259801805/tsp20130902121857/Usual-suspects.jpg"
        , "https://www.kino.dk/sites/default/files/movie-posters/cape-fear-poster.jpg"
        , "https://loftcinema.org/files/2014/12/Nightcrawler_PayoffPoster.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/51nANfGOIZL.jpg"
        , "https://jk2725a.files.wordpress.com/2014/03/psycho-movie-poster.jpg"
        , "https://medicinafueradelamedicina.files.wordpress.com/2013/04/shutter-island.jpg"
        , "https://cdn.flickeringmyth.com/wp-content/uploads/2018/02/Annihilation-UK-poster-600x889.jpg"
      ];
            
            
            var x = Math.floor(Math.random() * picturePcn.length);
            
            
            
            
            var picturePcd = [
        "http://t3.gstatic.com/images?q=tbn:ANd9GcRBYp315X-0pNvI-Dvqj8FR0AGdF39VCprXpurd0cQel__e17CP"
        , "https://www.cdn-cinenode.com/movie_poster/16/full/reservoir-dogs-15761.jpg"
        , "https://media-cache.cinematerial.com/p/500x/gaiyt1qv/repo-man-dvd-cover.jpg"
        , "http://is4.mzstatic.com/image/thumb/Video62/v4/07/32/9a/07329a86-cb35-ef7f-ecbf-1581db424bae/source/1200x630bb.jpg"
        , "https://img02.mgo-images.com/image/thumbnail?id=1MVfa42002cdc1094cb433458bee7bb90d6&ql=70&sizes=310x465"
        , "https://images-na.ssl-images-amazon.com/images/I/81vaoAl5E1L._SL1500_.jpg"
        , "https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2017/06/1-61-990x1485.jpg?iv=1741"
        , "https://img.reelgood.com/content/movie/4d949e14-b08b-47fb-bab0-22c732dbedf3/poster-780.jpg"
        , "https://imgc.allpostersimages.com/img/print/posters/easy-rider-live-free_a-G-7615609-0.jpg"
        , "https://images-na.ssl-images-amazon.com/images/I/91iOQxzXYVL._SL1500_.jpg"
        , "https://demonsresume.files.wordpress.com/2011/07/true-romance-poster.jpg"
        ,  "https://images-na.ssl-images-amazon.com/images/I/61PF6Oi%2BUhL._SY679_.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/71e4px%2B6WnL._SY717_.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/61SuGcS9AvL._SY450_.jpg"
                ,"http://img.moviepostershop.com/dazed-and-confused-movie-poster-1993-1020189762.jpg"
                ,"https://media-cache.cinematerial.com/p/500x/9i6jv9zo/juno-german-movie-poster.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/51wd7ggzHtL.jpg"
                ,"https://vignette.wikia.nocookie.net/filmguide/images/0/06/ThePerksOfBeingAWallflower.jpg/revision/latest?cb=20171111145352"
                ,
                "https://www.movieposter.com/posters/archive/main/11/A70-5873"
                ,"http://www.gstatic.com/tv/thumb/movieposters/22802/p22802_p_v8_af.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/91M5EdnBapL._SY445_.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/51%2ByqCOR53L._SY445_.jpg"
                ,"http://img.moviepostershop.com/super-troopers-movie-poster-2001-1020190702.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/41dkwOlFjYL.jpg"
                ,"http://img.moviepostershop.com/hook-movie-poster-1991-1020196016.jpg"
                ,"https://cdn.shopify.com/s/files/1/0178/7345/products/IJ9457_1024x1024.jpeg?v=1491877038"
                ,"https://images-na.ssl-images-amazon.com/images/I/515cCzEhUIL._SY445_.jpg"
                ,"http://www.movieposter.com/posters/archive/main/65/MPW-32791"
                ,"http://ca.movieposter.com/posters/archive/main/22/MPW-11140"
                ,"https://images-na.ssl-images-amazon.com/images/I/51SKZMNWAEL._SY445_.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/51SPWS9PGRL._SY445_.jpg"
                ,"https://images-na.ssl-images-amazon.com/images/I/51F1KWQRXPL._SY445_.jpg"
      ];
            
            
            var x = Math.floor(Math.random() * picturePcd.length);
            
            
            
            
         
            
            
            
            
            $("#city").html(city);
            $("#cTemp").html(cTemp.toFixed(1) + " &#8451;");
            $("#windSpeed").html("Wind: " + windSpeed);
            $("#weatherType").html("Currently " + weatherType);
            if (icon === "rain") {
                $("#text").text(titleRain[x]);
                $("body").css("background-image", "url(https://static.tumblr.com/6e091b81a0381ec39beb93934dc7f18d/j2eldb5/fQGnv95x7/tumblr_static_hyl1tc59hpckksckggo4g4sc_640_v2.jpg)");
                $("#jumbo").css({
                    "background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),url(" + pictureRain[x] + ")no-repeat fixed center",
                    "background-attachment": "scroll",
                    "background-position": "50% 50%",
                    "-webkit-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover",
                    "text-shadow": "0 0 2px 2px rgba(0,0,0,0.5)",
                    height: "600px",
                    width: "auto",
                    "border-radius": "5px",
                    "transition-property": "background",
                    "transition-duration": "2s"
                });
            }
            if (icon === "partly-cloudy-night" || icon === "clear-night") {
                $("#text").text(titlePcn[x]);
                $("body").css("background-image", "url(https://i.pinimg.com/originals/e5/71/99/e57199164150cbe225a1b6c95367c7ca.jpg)");
                $("#jumbo").css({
                    "background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),url(" + picturePcn[x] + ")no-repeat fixed center",
                    "background-attachment": "scroll",
                    "background-position": "50% 50%",
                    "-webkit-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover",
                    "text-shadow": "0 0 2px 2px rgba(0,0,0,0.5)",
                    height: "600px",
                    width: "auto",
                    "border-radius": "5px",
                    "transition-property": "background",
                    "transition-duration": "2s"
                });
            }
            if (icon === "cloudy" || icon === "partly-cloudy-day" || icon === "clear-day") {
                $("#text").text(titlePcd[x]);
                $("body").css("background-image", "url(https://static.pexels.com/photos/417045/pexels-photo-417045.jpeg)");
                $("#jumbo").css({
                    "background": "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(" + picturePcd[x] + ")no-repeat fixed center",
                    "background-attachment": "scroll",
                    "background-position": "50% 50%",
                    "-webkit-background-size": "cover",
                    "-o-background-size": "cover",
                    "background-size": "cover",
                    "text-shadow": "0 0 2px 2px rgba(0,0,0,0.5)",
                    height: "600px",
                    width: "auto",
                    "border-radius": "5px",
                    "transition-property": "background",
                    "transition-duration": "2s"
                });
            }
    
        });
    });
}
randomTitleAndImg();
$("#new-movie").on("click", randomTitleAndImg);
document.getElementById("content").style.color = "#f9f9f9";
