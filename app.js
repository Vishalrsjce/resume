document.addEventListener('DOMContentLoaded', () => {
    // --- MOVIE DATA WITH ABSOLUTE LOCAL FILE PATHS ---
    const movieData = [
      {
        "id": "uncharted-2022",
        "title": "Uncharted",
        "year": "2022",
        // Assuming this is the path for Uncharted based on your other paths
        "poster": "Uncharted_(2022)_[720p]_[YTStv.lol].jpg", 
        "imdbRating": "6.3/10",
        "rottenTomatoes": "41%",
        "metacritic": "45%",
        "googleUsers": "66% liked this film",
        "synopsis": "Victor Sullivan recruits Nathan Drake to help find the lost fortune of Ferdinand Magellan. However, Santiago Moncada believes the treasure belongs to him.",
        "releaseDate": "18 February 2022 (USA)",
        "director": "Ruben Fleischer",
        "adaptedFrom": "Uncharted (video game)",
        "budget": "12 crores USD",
        "runningTime": "1h 56m",
        "distributedBy": "Sony Pictures Releasing",
        "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Amazon Prime Video", "logo": "browser/amazon.png", "price": "Subscription", "link": "#" }
        ]
      },
      {
        "id": "ford-v-ferrari-2019",
        "title": "Ford v Ferrari",
        "year": "2019",
        "poster": "ford_v_ferrari.jpg",
        "imdbRating": "8.1/10",
        "rottenTomatoes": "92%",
        "metacritic": "81%",
        "googleUsers": "91% liked this film",
        "synopsis": "American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford to beat Ferrari at the 24 Hours of Le Mans in 1966.",
        "releaseDate": "15 November 2019 (USA)",
        "director": "James Mangold",
        "adaptedFrom": "Based on true events",
        "budget": "$97.6 million",
        "runningTime": "2h 32m",
        "distributedBy": "20th Century Fox",
        "whereToWatch": [
            { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
            { "service": "Disney+ Hotstar", "logo": "browser/Disney+ Hotstar.png", "price": "Subscription", "link": "#" }
        ]
      },
      {
        "id": "17-again-2009",
        "title": "17 Again",
        "year": "2009",
        "poster": "17_again.jpg",
        "imdbRating": "6.4/10",
        "rottenTomatoes": "56%",
        "metacritic": "48%",
        "googleUsers": "86% liked this film",
        "synopsis": "A 37-year-old man gets a chance to rewrite his life when he mysteriously transforms back into his 17-year-old self and re-enrolls in high school.",
        "releaseDate": "17 April 2009 (USA)",
        "director": "Burr Steers",
        "adaptedFrom": "Original screenplay",
        "budget": "$20 million",
        "runningTime": "1h 42m",
        "distributedBy": "Warner Bros. Pictures",
        "whereToWatch": [
            { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
            { "service": "Netflix", "logo": "browser/netflix.png", "price": "Subscription", "link": "#" }
        ]
      },
      {
        "id": "red-notice-2021",
        "title": "Red Notice",
        "year": "2021",
        "poster": "Red_Notice_(2021)_[720p]_[YTStv.lol].jpg",
        "imdbRating": "6.3/10",
        "rottenTomatoes": "37%",
        "metacritic": "37%",
        "googleUsers": "86% liked this film",
        "synopsis": "An Interpol agent tracks the world's most wanted art thief, leading to a daring heist and unexpected alliances.",
        "releaseDate": "12 November 2021 (Worldwide)",
        "director": "Rawson Marshall Thurber",
        "adaptedFrom": "Original screenplay",
        "budget": "$200 million",
        "runningTime": "1h 58m",
        "distributedBy": "Netflix",
        "whereToWatch": [
            { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
            { "service": "Netflix", "logo": "browser/netflix.png", "price": "Subscription", "link": "#" }
        ]
      },
      {
        "id": "the-fall-guy-2024",
        "title": "The Fall Guy",
        "year": "2024",
        "poster": "The_Fall_Guy_(2024)_[720p]_[YTStv.lol].jpg",
        "imdbRating": "7.2/10",
        "rottenTomatoes": "83%",
        "metacritic": "67%",
        "googleUsers": "86% liked this film",
        "synopsis": "A stuntman, who left the industry after an accident, is pulled back into the action to find a missing movie star — with unexpected chaos along the way.",
        "releaseDate": "3 May 2024 (USA)",
        "director": "David Leitch",
        "adaptedFrom": "Inspired by the 1980s TV series",
        "budget": "$125 million",
        "runningTime": "2h 6m",
        "distributedBy": "Universal Pictures",
        "whereToWatch": [
            { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
            { "service": "Amazon Prime Video", "logo": "browser/amazon.png", "price": "From ₹149.00", "link": "#" }
        ]
      },
      {
        "id": "knives-out-2019",
        "title": "Knives Out",
        "year": "2019",
        "poster": "knives_out.jpg",
        "imdbRating": "7.9/10",
        "rottenTomatoes": "97%",
        "metacritic": "82%",
        "googleUsers": "88% liked this film",
        "synopsis": "A renowned detective investigates the death of a wealthy patriarch during his 85th birthday celebration, uncovering secrets within the dysfunctional family.",
        "releaseDate": "27 November 2019 (USA)",
        "director": "Rian Johnson",
        "adaptedFrom": "Original screenplay",
        "budget": "$40 million",
        "runningTime": "2h 10m",
        "distributedBy": "Lionsgate",
        "whereToWatch": [
            { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
            { "service": "Amazon Prime Video", "logo": "browser/amazon.png", "price": "From ₹99.00", "link": "#" }
        ]
      },

    {
      "id": "spirit-stallion-of-the-cimarron-2002",
      "title": "Spirit: Stallion of the Cimarron",
      "year": "2002",
      "poster": "spirit.jpg",
      "imdbRating": "7.2/10",
      "rottenTomatoes": "80%",
      "metacritic": "69%",
      "googleUsers": "95% liked this film",
      "synopsis": "A wild stallion is captured by humans and, throughout his struggles for freedom, refuses to let go of the hope of one day returning home to his herd. He develops a remarkable friendship with a young Lakota brave on his journey through the untamed American frontier. [1, 42]",
      "releaseDate": "May 24, 2002 (USA)",
      "director": "Kelly Asbury, Lorna Cook",
      "adaptedFrom": "Original screenplay by John Fusco, from an idea by Jeffrey Katzenberg. [1, 9]",
      "budget": "$80 million",
      "runningTime": "1h 23m",
      "distributedBy": "DreamWorks Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "crazy-stupid-love-2011",
      "title": "Crazy, Stupid, Love",
      "year": "2011",
      "poster": "crazy_stupid_love.jpg",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "79%",
      "metacritic": "68%",
      "googleUsers": "92% liked this film",
      "synopsis": "A middle-aged husband's life changes dramatically when his wife asks him for a divorce. He seeks to rediscover his manhood with the help of a newfound friend, Jacob, learning to pick up girls at bars.",
      "releaseDate": "July 29, 2011 (USA)",
      "director": "Glenn Ficarra, John Requa",
      "adaptedFrom": "Original Screenplay",
      "budget": "$50 million",
      "runningTime": "1h 58m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "x-men-days-of-future-past-2014",
      "title": "X-Men: Days of Future Past",
      "year": "2014",
      "poster": "X.Men.Days.of.Future.Past.2014.720p.BluRay.x264.YIFY.jpg",
      "imdbRating": "7.9/10",
      "rottenTomatoes": "90%",
      "metacritic": "75%",
      "googleUsers": "91% liked this film",
      "synopsis": "The X-Men send Wolverine to the past in a desperate effort to change history and prevent an event that results in doom for both humans and mutants. [31]",
      "releaseDate": "May 23, 2014 (USA)",
      "director": "Bryan Singer",
      "adaptedFrom": "Marvel Comics storyline 'Days of Future Past'",
      "budget": "$200 million",
      "runningTime": "2h 12m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-dark-knight-2008",
      "title": "The Dark Knight",
      "year": "2008",
      "poster": "The_Dark_Knight_(2008)[720p]_[YTStv.lol].jpg",
      "imdbRating": "9.0/10",
      "rottenTomatoes": "94%",
      "metacritic": "84%",
      "googleUsers": "94% liked this film",
      "synopsis": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "releaseDate": "July 18, 2008 (USA)",
      "director": "Christopher Nolan",
      "adaptedFrom": "DC Comics characters",
      "budget": "$185 million",
      "runningTime": "2h 32m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "thor-2011",
      "title": "Thor",
      "year": "2011",
      "poster": "thor.jpg",
      "imdbRating": "7.0/10",
      "rottenTomatoes": "77%",
      "metacritic": "57%",
      "googleUsers": "88% liked this film",
      "synopsis": "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders. [16]",
      "releaseDate": "May 6, 2011 (USA)",
      "director": "Kenneth Branagh",
      "adaptedFrom": "Marvel Comics",
      "budget": "$150 million",
      "runningTime": "1h 54m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "avengers-endgame-2019",
      "title": "Avengers: Endgame",
      "year": "2019",
      "poster": "avengers_endgame.jpg",
      "imdbRating": "8.4/10",
      "rottenTomatoes": "94%",
      "metacritic": "78%",
      "googleUsers": "92% liked this film",
      "synopsis": "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers must figure out a way to bring back their vanquished allies for an epic showdown with Thanos.",
      "releaseDate": "April 26, 2019 (USA)",
      "director": "Anthony Russo, Joe Russo",
      "adaptedFrom": "Marvel Comics",
      "budget": "$356 million",
      "runningTime": "3h 1m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-far-from-home-2019",
      "title": "Spider-Man: Far From Home",
      "year": "2019",
      "poster": "spiderman_far_from_home.jpg",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "90%",
      "metacritic": "69%",
      "googleUsers": "92% liked this film",
      "synopsis": "Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever. [41]",
      "releaseDate": "July 2, 2019 (USA)",
      "director": "Jon Watts",
      "adaptedFrom": "Marvel Comics",
      "budget": "$160 million",
      "runningTime": "2h 9m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-no-way-home-2021",
      "title": "Spider-Man: No Way Home",
      "year": "2021",
      "poster": "spiderman_no_way_home.jpg",
      "imdbRating": "8.2/10",
      "rottenTomatoes": "93%",
      "metacritic": "71%",
      "googleUsers": "95% liked this film",
      "synopsis": "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man. [19]",
      "releaseDate": "December 17, 2021 (USA)",
      "director": "Jon Watts",
      "adaptedFrom": "Marvel Comics",
      "budget": "$200 million",
      "runningTime": "2h 28m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Starz", "logo": "browser/starz.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "ant-man-2015",
      "title": "Ant-Man",
      "year": "2015",
      "poster": "ant_man.jpg",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "83%",
      "metacritic": "64%",
      "googleUsers": "91% liked this film",
      "synopsis": "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, plan and pull off a heist that will save the world. [29]",
      "releaseDate": "July 17, 2015 (USA)",
      "director": "Peyton Reed",
      "adaptedFrom": "Marvel Comics",
      "budget": "$130 million",
      "runningTime": "1h 57m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "ant-man-and-the-wasp-2018",
      "title": "Ant-Man and the Wasp",
      "year": "2018",
      "poster": "ant_man_and_the_wasp.jpg",
      "imdbRating": "7.0/10",
      "rottenTomatoes": "87%",
      "metacritic": "70%",
      "googleUsers": "89% liked this film",
      "synopsis": "As Scott Lang balances being both a superhero and a father, Hope van Dyne and Dr. Hank Pym present an urgent new mission that finds the Ant-Man fighting alongside The Wasp to uncover secrets from their past. [25]",
      "releaseDate": "July 6, 2018 (USA)",
      "director": "Peyton Reed",
      "adaptedFrom": "Marvel Comics",
      "budget": "$130-195 million",
      "runningTime": "1h 58m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
 {
      "id": "avengers-infinity-war-2018",
      "title": "Avengers: Infinity War",
      "year": "2018",
      "poster": "avengers_infinity_war.jpg",
      "imdbRating": "8.4/10",
      "rottenTomatoes": "85%",
      "metacritic": "68%",
      "googleUsers": "91% liked this film",
      "synopsis": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      "releaseDate": "April 27, 2018 (USA)",
      "director": "Anthony Russo, Joe Russo",
      "adaptedFrom": "Marvel Comics",
      "budget": "$325–400 million",
      "runningTime": "2h 29m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "guardians-of-the-galaxy-2014",
      "title": "Guardians of the Galaxy",
      "year": "2014",
      "poster": "guardians_of_the_galaxy.jpg",
      "imdbRating": "8.0/10",
      "rottenTomatoes": "92%",
      "metacritic": "76%",
      "googleUsers": "92% liked this film",
      "synopsis": "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe. [7]",
      "releaseDate": "August 1, 2014 (USA)",
      "director": "James Gunn",
      "adaptedFrom": "Marvel Comics",
      "budget": "$170 million",
      "runningTime": "2h 2m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-homecoming-2017",
      "title": "Spider-Man: Homecoming",
      "year": "2017",
      "poster": "spiderman_homecoming.jpg",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "92%",
      "metacritic": "73%",
      "googleUsers": "92% liked this film",
      "synopsis": "Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City.",
      "releaseDate": "July 7, 2017 (USA)",
      "director": "Jon Watts",
      "adaptedFrom": "Marvel Comics",
      "budget": "$175 million",
      "runningTime": "2h 13m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "thor-ragnarok-2017",
      "title": "Thor: Ragnarok",
      "year": "2017",
      "poster": "thor_ragnarok.jpg",
      "imdbRating": "7.9/10",
      "rottenTomatoes": "93%",
      "metacritic": "74%",
      "googleUsers": "91% liked this film",
      "synopsis": "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
      "releaseDate": "November 3, 2017 (USA)",
      "director": "Taika Waititi",
      "adaptedFrom": "Marvel Comics",
      "budget": "$180 million",
      "runningTime": "2h 10m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "captain-america-the-first-avenger-2011",
      "title": "Captain America: The First Avenger",
      "year": "2011",
      "poster": "captain_america.jpg",
      "imdbRating": "6.9/10",
      "rottenTomatoes": "80%",
      "metacritic": "66%",
      "googleUsers": "89% liked this film",
      "synopsis": "Steve Rogers, a rejected military soldier, transforms into Captain America after taking a dose of a 'Super-Soldier serum'. But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization. [1, 5]",
      "releaseDate": "July 22, 2011 (USA)",
      "director": "Joe Johnston",
      "adaptedFrom": "Marvel Comics",
      "budget": "$140 million",
      "runningTime": "2h 4m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "captain-america-civil-war-2016",
      "title": "Captain America: Civil War",
      "year": "2016",
      "poster": "captain_america_civil_war.jpg",
      "imdbRating": "7.8/10",
      "rottenTomatoes": "90%",
      "metacritic": "75%",
      "googleUsers": "89% liked this film",
      "synopsis": "Political involvement in the Avengers' affairs causes a rift between Captain America and Iron Man, which divides the team into two opposing factions.",
      "releaseDate": "May 6, 2016 (USA)",
      "director": "Anthony Russo, Joe Russo",
      "adaptedFrom": "Marvel Comics",
      "budget": "$250 million",
      "runningTime": "2h 27m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-gray-man-2022",
      "title": "The Gray Man",
      "year": "2022",
      "poster": "The_Gray_Man_(2022)_[720p]_[YTStv.lol].jpg",
      "imdbRating": "6.5/10",
      "rottenTomatoes": "46%",
      "metacritic": "49%",
      "googleUsers": "90% liked this film",
      "synopsis": "When the CIA's most skilled operative--whose true identity is known to none--accidentally uncovers dark agency secrets, a psychopathic former colleague puts a bounty on his head, setting off a global manhunt by international assassins. [25]",
      "releaseDate": "July 15, 2022 (USA)",
      "director": "Anthony Russo, Joe Russo",
      "adaptedFrom": "The Gray Man by Mark Greaney",
      "budget": "$200 million",
      "runningTime": "2h 9m",
      "distributedBy": "Netflix",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Netflix", "logo": "browser/netflix.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "free-guy-2021",
      "title": "Free Guy",
      "year": "2021",
      "poster": "free-guy-2021.jpg",
      "imdbRating": "7.1/10",
      "rottenTomatoes": "80%",
      "metacritic": "62%",
      "googleUsers": "94% liked this film",
      "synopsis": "A bank teller discovers he is actually a background player in an open-world video game and decides to become the hero of his own story.",
      "releaseDate": "August 13, 2021 (USA)",
      "director": "Shawn Levy",
      "adaptedFrom": "Original Screenplay",
      "budget": "$100-125 million",
      "runningTime": "1h 55m",
      "distributedBy": "20th Century Studios",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "shazam-2019",
      "title": "Shazam!",
      "year": "2019",
      "poster": "MOVIES/Shazam! (2019).jpg",
      "imdbRating": "7.0/10",
      "rottenTomatoes": "90%",
      "metacritic": "71%",
      "googleUsers": "89% liked this film",
      "synopsis": "A newly fostered young boy in search of his mother instead finds unexpected super powers and soon gains a powerful enemy. [10, 12]",
      "releaseDate": "April 5, 2019 (USA)",
      "director": "David F. Sandberg",
      "adaptedFrom": "DC Comics characters",
      "budget": "$80–100 million",
      "runningTime": "2h 12m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "bruce-almighty-2003",
      "title": "Bruce Almighty",
      "year": "2003",
      "poster": "MOVIES/Bruce Almighty (2003).jpg",
      "imdbRating": "6.8/10",
      "rottenTomatoes": "48%",
      "metacritic": "46%",
      "googleUsers": "86% liked this film",
      "synopsis": "A guy who complains about God too often is given almighty powers to teach him how difficult it is to run the world.",
      "releaseDate": "May 23, 2003 (USA)",
      "director": "Tom Shadyac",
      "adaptedFrom": "Original Screenplay",
      "budget": "$81 million",
      "runningTime": "1h 41m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "liar-liar-1997",
      "title": "Liar Liar",
      "year": "1997",
      "poster": "MOVIES/Liar Liar (1997).jpg",
      "imdbRating": "6.9/10",
      "rottenTomatoes": "82%",
      "metacritic": "70%",
      "googleUsers": "85% liked this film",
      "synopsis": "A fast-track lawyer can't lie for 24 hours due to his son's birthday wish after he disappoints his son for the last time. This inconvenient truth renders him unable to perform his job, turning his life upside down.",
      "releaseDate": "March 21, 1997 (USA)",
      "director": "Tom Shadyac",
      "adaptedFrom": "Original Screenplay",
      "budget": "$45 million",
      "runningTime": "1h 26m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Starz", "logo": "browser/starz.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "rocky-1976",
      "title": "Rocky",
      "year": "1976",
      "poster": "MOVIES/Rocky (1976).jpg",
      "imdbRating": "8.1/10",
      "rottenTomatoes": "91%",
      "metacritic": "70%",
      "googleUsers": "92% liked this film",
      "synopsis": "A small-time Philadelphia boxer gets a supremely rare chance to fight the world heavyweight champion, Apollo Creed, in a bout in which he strives to go the distance for his self-respect.",
      "releaseDate": "December 3, 1976 (USA)",
      "director": "John G. Avildsen",
      "adaptedFrom": "Original Screenplay by Sylvester Stallone",
      "budget": "$960,000",
      "runningTime": "2h",
      "distributedBy": "United Artists",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "rocky-ii-1979",
      "title": "Rocky II",
      "year": "1979",
      "poster": "MOVIES/Rocky II (1979).jpg",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "70%",
      "metacritic": "61%",
      "googleUsers": "89% liked this film",
      "synopsis": "Rocky struggles in family life after his bout with Apollo Creed, while the embarrassed champion considers forcing Rocky into a rematch to prove the first fight was a fluke.",
      "releaseDate": "June 15, 1979 (USA)",
      "director": "Sylvester Stallone",
      "adaptedFrom": "Original Screenplay by Sylvester Stallone",
      "budget": "$7 million",
      "runningTime": "1h 59m",
      "distributedBy": "United Artists",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "rocky-iii-1982",
      "title": "Rocky III",
      "year": "1982",
      "poster": "MOVIES/Rocky III (1982).jpg",
      "imdbRating": "6.8/10",
      "rottenTomatoes": "67%",
      "metacritic": "57%",
      "googleUsers": "88% liked this film",
      "synopsis": "After winning the ultimate title and becoming world champion, Rocky Balboa is enjoying his life. But then a new challenger, Clubber Lang, threatens his title, forcing Rocky to reclaim his edge with help from an unlikely ally.",
      "releaseDate": "May 28, 1982 (USA)",
      "director": "Sylvester Stallone",
      "adaptedFrom": "Original Screenplay by Sylvester Stallone",
      "budget": "$17 million",
      "runningTime": "1h 39m",
      "distributedBy": "MGM/UA Entertainment Co.",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "rocky-iv-1985",
      "title": "Rocky IV",
      "year": "1985",
      "poster": "MOVIES/Rocky IV .jpg",
      "imdbRating": "6.8/10",
      "rottenTomatoes": "40%",
      "metacritic": "40%",
      "googleUsers": "90% liked this film",
      "synopsis": "Rocky Balboa proudly holds the world heavyweight boxing championship, but a new challenger has stepped forward: Drago, a six-foot-four, 261-pound fighter who has the backing of the Soviet Union. Rocky travels to Russia to train for a Christmas Day fight.",
      "releaseDate": "November 27, 1985 (USA)",
      "director": "Sylvester Stallone",
      "adaptedFrom": "Original Screenplay by Sylvester Stallone",
      "budget": "$28 million",
      "runningTime": "1h 31m",
      "distributedBy": "MGM/UA Entertainment Co.",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-mask-1994",
      "title": "The Mask",
      "year": "1994",
      "poster": "MOVIES/The Mask (1994).jpg",
      "imdbRating": "6.9/10",
      "rottenTomatoes": "80%",
      "metacritic": "56%",
      "googleUsers": "85% liked this film",
      "synopsis": "Bank clerk Stanley Ipkiss is transformed into a manic, green-faced superhero with reality-bending powers when he wears a mysterious ancient mask.",
      "releaseDate": "July 29, 1994 (USA)",
      "director": "Chuck Russell",
      "adaptedFrom": "The Mask comics by Dark Horse Comics",
      "budget": "$23 million",
      "runningTime": "1h 41m",
      "distributedBy": "New Line Cinema",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Rent/Buy on Prime Video", "logo": "prime-video.png", "price": "Varies", "link": "#" }
      ]
    },
    {
      "id": "wonder-woman-2017",
      "title": "Wonder Woman",
      "year": "2017",
      "poster": "MOVIES/Wonder Woman.jpg",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "93%",
      "metacritic": "76%",
      "googleUsers": "84% liked this film",
      "synopsis": "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves her sheltered island home to fight a war, discovering her full powers and true destiny.",
      "releaseDate": "June 2, 2017 (USA)",
      "director": "Patty Jenkins",
      "adaptedFrom": "DC Comics characters",
      "budget": "$120–150 million",
      "runningTime": "2h 21m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "red-one-2024",
      "title": "Red One",
      "year": "2024",
      "poster": "MOVIES/Red One (2024).jpg",
      "imdbRating": "N/A",
      "rottenTomatoes": "N/A",
      "metacritic": "N/A",
      "googleUsers": "N/A",
      "synopsis": "When Santa Claus is kidnapped, an E.L.F. operative must team up with the world's greatest tracker to find him and save Christmas. [1]",
      "releaseDate": "November 15, 2024 (USA)",
      "director": "Jake Kasdan",
      "adaptedFrom": "Original story by Hiram Garcia",
      "budget": "$200–250 million",
      "runningTime": "N/A",
      "distributedBy": "Amazon MGM Studios",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Prime Video", "logo": "prime-video.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mean-girls-2004",
      "title": "Mean Girls",
      "year": "2004",
      "poster": "MOVIES/Mean Girls (2004).jpg",
      "imdbRating": "7.1/10",
      "rottenTomatoes": "84%",
      "metacritic": "66%",
      "googleUsers": "92% liked this film",
      "synopsis": "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George.",
      "releaseDate": "April 30, 2004 (USA)",
      "director": "Mark Waters",
      "adaptedFrom": "Queen Bees and Wannabes by Rosalind Wiseman",
      "budget": "$17 million",
      "runningTime": "1h 37m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "knight-and-day-2010",
      "title": "Knight and Day",
      "year": "2010",
      "poster": "MOVIES/Knight and Day (2010).jpg",
      "imdbRating": "6.3/10",
      "rottenTomatoes": "52%",
      "metacritic": "46%",
      "googleUsers": "86% liked this film",
      "synopsis": "A woman's seemingly harmless blind date suddenly turns her life upside down when a secret agent takes her on a violent, globe-trotting adventure.",
      "releaseDate": "June 23, 2010 (USA)",
      "director": "James Mangold",
      "adaptedFrom": "Original Screenplay",
      "budget": "$117 million",
      "runningTime": "1h 49m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Rent/Buy on Prime Video", "logo": "prime-video.png", "price": "Varies", "link": "#" }
      ]
    },

    {
      "id": "the-avengers-2012",
      "title": "The Avengers",
      "year": "2012",
      "poster": "MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "imdbRating": "8.0/10",
      "rottenTomatoes": "91%",
      "metacritic": "69%",
      "googleUsers": "91% liked this film",
      "synopsis": "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      "releaseDate": "May 4, 2012 (USA)",
      "director": "Joss Whedon",
      "adaptedFrom": "Marvel Comics",
      "budget": "$220 million",
      "runningTime": "2h 23m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "avengers-age-of-ultron-2015",
      "title": "Avengers: Age of Ultron",
      "year": "2015",
      "poster": "MV5BODBhYTg1NGQtNGVmNS00ZTdiLThjYTYtZDFkNzRiNTZmNDZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "76%",
      "metacritic": "66%",
      "googleUsers": "88% liked this film",
      "synopsis": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plans.",
      "releaseDate": "May 1, 2015 (USA)",
      "director": "Joss Whedon",
      "adaptedFrom": "Marvel Comics",
      "budget": "$250–$365 million",
      "runningTime": "2h 21m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "x-men-first-class-2011",
      "title": "X-Men: First Class",
      "year": "2011",
      "poster": "X Men First Class.webp",
      "imdbRating": "7.7/10",
      "rottenTomatoes": "86%",
      "metacritic": "65%",
      "googleUsers": "90% liked this film",
      "synopsis": "In the 1960s, Charles Xavier and Erik Lehnsherr, two mutants with opposing ideologies, work together to form a team of mutants to stop a powerful mutant with world-ending plans.",
      "releaseDate": "June 3, 2011 (USA)",
      "director": "Matthew Vaughn",
      "adaptedFrom": "Marvel Comics",
      "budget": "$140–160 million",
      "runningTime": "2h 11m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "x2-x-men-united-2003",
      "title": "X2: X-Men United",
      "year": "2003",
      "poster": "X-Men 2.webp",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "85%",
      "metacritic": "68%",
      "googleUsers": "88% liked this film",
      "synopsis": "The X-Men band together to find a mutant assassin who has made an attempt on the President's life, while the Mutant Academy is attacked by military forces.",
      "releaseDate": "May 2, 2003 (USA)",
      "director": "Bryan Singer",
      "adaptedFrom": "Marvel Comics graphic novel 'God Loves, Man Kills'",
      "budget": "$110 million",
      "runningTime": "2h 14m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "x-men-2000",
      "title": "X-Men",
      "year": "2000",
      "poster": "X-Men (2000).webp",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "82%",
      "metacritic": "64%",
      "googleUsers": "87% liked this film",
      "synopsis": "In a world where mutants exist and are discriminated against, two groups form for an inevitable clash: the heroic X-Men, led by Professor Xavier, and the villainous Brotherhood of Mutants, led by Magneto.",
      "releaseDate": "July 14, 2000 (USA)",
      "director": "Bryan Singer",
      "adaptedFrom": "Marvel Comics",
      "budget": "$75 million",
      "runningTime": "1h 44m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "transformers-2007",
      "title": "Transformers",
      "year": "2007",
      "poster": "Transformers.webp",
      "imdbRating": "7.0/10",
      "rottenTomatoes": "58%",
      "metacritic": "61%",
      "googleUsers": "92% liked this film",
      "synopsis": "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.",
      "releaseDate": "July 3, 2007 (USA)",
      "director": "Michael Bay",
      "adaptedFrom": "Transformers toy line by Hasbro and Tomy",
      "budget": "$150 million",
      "runningTime": "2h 24m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "top-gun-maverick-2022",
      "title": "Top Gun: Maverick",
      "year": "2022",
      "poster": "Top Gun Maverick.webp",
      "imdbRating": "8.3/10",
      "rottenTomatoes": "96%",
      "metacritic": "78%",
      "googleUsers": "97% liked this film",
      "synopsis": "After more than thirty years of service as one of the Navy's top aviators, Pete 'Maverick' Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. He must confront the ghosts of his past and his deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it. [1]",
      "releaseDate": "May 27, 2022 (USA)",
      "director": "Joseph Kosinski",
      "adaptedFrom": "Characters created by Jim Cash and Jack Epps Jr.",
      "budget": "$170 million",
      "runningTime": "2h 11m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Prime Video", "logo": "prime-video.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-tomorrow-war-2021",
      "title": "The Tomorrow War",
      "year": "2021",
      "poster": "The Tomorrow War.webp",
      "imdbRating": "6.5/10",
      "rottenTomatoes": "52%",
      "metacritic": "45%",
      "googleUsers": "89% liked this film",
      "synopsis": "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past. Teaming with a brilliant scientist and his estranged father, he must rewrite the fate of the planet.",
      "releaseDate": "July 2, 2021 (USA)",
      "director": "Chris McKay",
      "adaptedFrom": "Original Screenplay",
      "budget": "$200 million",
      "runningTime": "2h 20m",
      "distributedBy": "Amazon Studios",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Prime Video", "logo": "prime-video.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-fate-of-the-furious-2017",
      "title": "The Fate of the Furious",
      "year": "2017",
      "poster": "The Fate Of The Furious.webp",
      "imdbRating": "6.6/10",
      "rottenTomatoes": "67%",
      "metacritic": "56%",
      "googleUsers": "90% liked this film",
      "synopsis": "When a mysterious woman seduces Dominic Toretto into the world of terrorism and a betrayal of those closest to him, the crew face trials that will test them as never before.",
      "releaseDate": "April 14, 2017 (USA)",
      "director": "F. Gary Gray",
      "adaptedFrom": "Characters by Gary Scott Thompson",
      "budget": "$250 million",
      "runningTime": "2h 16m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Rent/Buy on Prime Video", "logo": "prime-video.png", "price": "Varies", "link": "#" }
      ]
    },
    {
      "id": "the-fast-and-the-furious-2001",
      "title": "The Fast and the Furious",
      "year": "2001",
      "poster": "The Fast and the Furious.webp",
      "imdbRating": "6.8/10",
      "rottenTomatoes": "54%",
      "metacritic": "58%",
      "googleUsers": "92% liked this film",
      "synopsis": "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
      "releaseDate": "June 22, 2001 (USA)",
      "director": "Rob Cohen",
      "adaptedFrom": "Vibe magazine article 'Racer X' by Ken Li",
      "budget": "$38 million",
      "runningTime": "1h 46m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
{
      "id": "the-amazing-spider-man-2012",
      "title": "The Amazing Spider-Man",
      "year": "2012",
      "poster": "The Amazing Spiderman.webp",
      "imdbRating": "6.9/10",
      "rottenTomatoes": "71%",
      "metacritic": "66%",
      "googleUsers": "88% liked this film",
      "synopsis": "After Peter Parker is bitten by a genetically altered spider, he gains newfound, spider-like powers and ventures out to solve the mystery of his parent's mysterious death and confront the machinations of a mysterious reptilian foe. [48]",
      "releaseDate": "July 3, 2012 (USA)",
      "director": "Marc Webb",
      "adaptedFrom": "Marvel Comics",
      "budget": "$230 million",
      "runningTime": "2h 16m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-3-2007",
      "title": "Spider-Man 3",
      "year": "2007",
      "poster": "Spider-Man 3.webp",
      "imdbRating": "6.3/10",
      "rottenTomatoes": "63%",
      "metacritic": "59%",
      "googleUsers": "83% liked this film",
      "synopsis": "A strange black entity from another world bonds with Peter Parker and causes inner turmoil as he deals with new villains, temptations, and a dark, vengeful side of himself.",
      "releaseDate": "May 4, 2007 (USA)",
      "director": "Sam Raimi",
      "adaptedFrom": "Marvel Comics",
      "budget": "$258 million",
      "runningTime": "2h 19m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-2-2004",
      "title": "Spider-Man 2",
      "year": "2004",
      "poster": "Spider-Man 2.webp",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "93%",
      "metacritic": "83%",
      "googleUsers": "91% liked this film",
      "synopsis": "Peter Parker is beset with troubles in his failing personal life as he battles a brilliant scientist named Dr. Otto Octavius, who becomes the villainous Doctor Octopus after a failed experiment.",
      "releaseDate": "June 30, 2004 (USA)",
      "director": "Sam Raimi",
      "adaptedFrom": "Marvel Comics",
      "budget": "$200 million",
      "runningTime": "2h 7m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-2002",
      "title": "Spider-Man",
      "year": "2002",
      "poster": "Spider-Man (2002).webp",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "90%",
      "metacritic": "73%",
      "googleUsers": "89% liked this film",
      "synopsis": "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family. [23, 8]",
      "releaseDate": "May 3, 2002 (USA)",
      "director": "Sam Raimi",
      "adaptedFrom": "Marvel Comics",
      "budget": "$139 million",
      "runningTime": "2h 1m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mission-impossible-rogue-nation-2015",
      "title": "Mission: Impossible - Rogue Nation",
      "year": "2015",
      "poster": "Mission Impossible Rogue Nation.webp",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "94%",
      "metacritic": "75%",
      "googleUsers": "91% liked this film",
      "synopsis": "Ethan and his team take on their most impossible mission yet: eradicating the Syndicate - an International rogue organization as highly skilled as they are, committed to destroying the IMF.",
      "releaseDate": "July 31, 2015 (USA)",
      "director": "Christopher McQuarrie",
      "adaptedFrom": "Mission: Impossible by Bruce Geller",
      "budget": "$150 million",
      "runningTime": "2h 11m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mission-impossible-iii-2006",
      "title": "Mission: Impossible III",
      "year": "2006",
      "poster": "Mission Impossible III.webp",
      "imdbRating": "6.9/10",
      "rottenTomatoes": "71%",
      "metacritic": "66%",
      "googleUsers": "88% liked this film",
      "synopsis": "IMF agent Ethan Hunt comes into conflict with a dangerous and sadistic arms dealer who threatens his life and his fiancée in response, forcing him back into action.",
      "releaseDate": "May 5, 2006 (USA)",
      "director": "J.J. Abrams",
      "adaptedFrom": "Mission: Impossible by Bruce Geller",
      "budget": "$150 million",
      "runningTime": "2h 6m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mission-impossible-ghost-protocol-2011",
      "title": "Mission: Impossible - Ghost Protocol",
      "year": "2011",
      "poster": "Mission Impossible Ghost Protocol.webp",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "93%",
      "metacritic": "73%",
      "googleUsers": "92% liked this film",
      "synopsis": "The IMF is shut down when it's implicated in the bombing of the Kremlin, causing Ethan Hunt and his new team to go rogue to clear their organization's name. [19]",
      "releaseDate": "December 16, 2011 (USA)",
      "director": "Brad Bird",
      "adaptedFrom": "Mission: Impossible by Bruce Geller",
      "budget": "$145 million",
      "runningTime": "2h 12m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mission-impossible-fallout-2018",
      "title": "Mission: Impossible - Fallout",
      "year": "2018",
      "poster": "Mission Impossible - Fallout.webp",
      "imdbRating": "7.7/10",
      "rottenTomatoes": "97%",
      "metacritic": "86%",
      "googleUsers": "93% liked this film",
      "synopsis": "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong, finding themselves in a desperate race against a former adversary and his apocalyptic plans.",
      "releaseDate": "July 27, 2018 (USA)",
      "director": "Christopher McQuarrie",
      "adaptedFrom": "Mission: Impossible by Bruce Geller",
      "budget": "$178 million",
      "runningTime": "2h 27m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mission-impossible-dead-reckoning-part-one-2023",
      "title": "Mission: Impossible - Dead Reckoning Part One",
      "year": "2023",
      "poster": "Mission Impossible - Dead Reckoning Part One.webp",
      "imdbRating": "7.7/10",
      "rottenTomatoes": "96%",
      "metacritic": "81%",
      "googleUsers": "94% liked this film",
      "synopsis": "Ethan Hunt and his IMF team must track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins.",
      "releaseDate": "July 12, 2023 (USA)",
      "director": "Christopher McQuarrie",
      "adaptedFrom": "Mission: Impossible by Bruce Geller",
      "budget": "$291 million",
      "runningTime": "2h 43m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "mission-impossible-1996",
      "title": "Mission: Impossible",
      "year": "1996",
      "poster": "Mission Impossible.webp",
      "imdbRating": "7.1/10",
      "rottenTomatoes": "67%",
      "metacritic": "59%",
      "googleUsers": "88% liked this film",
      "synopsis": "An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization after his team is wiped out during a mission.",
      "releaseDate": "May 22, 1996 (USA)",
      "director": "Brian De Palma",
      "adaptedFrom": "Mission: Impossible by Bruce Geller",
      "budget": "$80 million",
      "runningTime": "1h 50m",
      "distributedBy": "Paramount Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Paramount+", "logo": "browser/paramount-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "guardians-of-the-galaxy-vol-3-2023",
      "title": "Guardians of the Galaxy Vol. 3",
      "year": "2023",
      "poster": "Guardians Of The Galaxy Vol. 3.webp",
      "imdbRating": "7.9/10",
      "rottenTomatoes": "82%",
      "metacritic": "64%",
      "googleUsers": "94% liked this film",
      "synopsis": "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful. [18, 5]",
      "releaseDate": "May 5, 2023 (USA)",
      "director": "James Gunn",
      "adaptedFrom": "Marvel Comics",
      "budget": "$250 million",
      "runningTime": "2h 30m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "guardians-of-the-galaxy-vol-2-2017",
      "title": "Guardians of the Galaxy Vol. 2",
      "year": "2017",
      "poster": "Guardians Of The Galaxy Vol. 2.webp",
      "imdbRating": "7.6/10",
      "rottenTomatoes": "85%",
      "metacritic": "67%",
      "googleUsers": "91% liked this film",
      "synopsis": "The Guardians struggle to keep their newfound family together as they unravel the mystery of Peter Quill's true parentage and confront a new, powerful enemy.",
      "releaseDate": "May 5, 2017 (USA)",
      "director": "James Gunn",
      "adaptedFrom": "Marvel Comics",
      "budget": "$200 million",
      "runningTime": "2h 16m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "ghosted-2023",
      "title": "Ghosted",
      "year": "2023",
      "poster": "Ghosted.webp",
      "imdbRating": "5.8/10",
      "rottenTomatoes": "26%",
      "metacritic": "34%",
      "googleUsers": "74% liked this film",
      "synopsis": "Cole falls head over heels for enigmatic Sadie, but then makes the shocking discovery that she's a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
      "releaseDate": "April 21, 2023 (USA)",
      "director": "Dexter Fletcher",
      "adaptedFrom": "Original Screenplay",
      "budget": "N/A",
      "runningTime": "1h 56m",
      "distributedBy": "Apple TV+",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Apple TV+", "logo": "apple-tv-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "get-smart-2008",
      "title": "Get Smart",
      "year": "2008",
      "poster": "Get Smart.webp",
      "imdbRating": "6.5/10",
      "rottenTomatoes": "51%",
      "metacritic": "54%",
      "googleUsers": "85% liked this film",
      "synopsis": "Maxwell Smart, a highly intellectual but bumbling analyst for CONTROL, is promoted to field agent and paired with the deadly Agent 99 to thwart a terrorist attack from the rival spy agency KAOS.",
      "releaseDate": "June 20, 2008 (USA)",
      "director": "Peter Segal",
      "adaptedFrom": "Get Smart by Mel Brooks & Buck Henry",
      "budget": "$80 million",
      "runningTime": "1h 50m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Rent/Buy on Prime Video", "logo": "prime-video.png", "price": "Varies", "link": "#" }
      ]
    },
    {
      "id": "furious-7-2015",
      "title": "Furious 7",
      "year": "2015",
      "poster": "Furious Seven.webp",
      "imdbRating": "7.1/10",
      "rottenTomatoes": "81%",
      "metacritic": "67%",
      "googleUsers": "92% liked this film",
      "synopsis": "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother, leading to a globe-trotting conflict involving a powerful surveillance program and a shadowy government official.",
      "releaseDate": "April 3, 2015 (USA)",
      "director": "James Wan",
      "adaptedFrom": "Characters by Gary Scott Thompson",
      "budget": "$190 million",
      "runningTime": "2h 17m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "fast-and-furious-6-2013",
      "title": "Fast & Furious 6",
      "year": "2013",
      "poster": "Furious 6.webp",
      "imdbRating": "7.0/10",
      "rottenTomatoes": "71%",
      "metacritic": "61%",
      "googleUsers": "92% liked this film",
      "synopsis": "Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries. Dominic is sidetracked when he learns his presumed-deceased girlfriend, Letty, is alive and working with the enemy.",
      "releaseDate": "May 24, 2013 (USA)",
      "director": "Justin Lin",
      "adaptedFrom": "Characters by Gary Scott Thompson",
      "budget": "$160 million",
      "runningTime": "2h 10m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "fast-five-2011",
      "title": "Fast Five",
      "year": "2011",
      "poster": "Fast Five.webp",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "78%",
      "metacritic": "66%",
      "googleUsers": "93% liked this film",
      "synopsis": "Dominic Toretto and his crew of street racers plan a massive heist to buy their freedom while in the sights of a powerful Brazilian drug lord and a relentless federal agent. [3, 36]",
      "releaseDate": "April 29, 2011 (USA)",
      "director": "Justin Lin",
      "adaptedFrom": "Characters by Gary Scott Thompson",
      "budget": "$125 million",
      "runningTime": "2h 10m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "fast-furious-presents-hobbs-shaw-2019",
      "title": "Fast & Furious Presents: Hobbs & Shaw",
      "year": "2019",
      "poster": "Fast & Furious Presents Hobbs & Shaw.webp",
      "imdbRating": "6.5/10",
      "rottenTomatoes": "67%",
      "metacritic": "60%",
      "googleUsers": "88% liked this film",
      "synopsis": "Lawman Luke Hobbs and outcast Deckard Shaw form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity with a deadly virus.",
      "releaseDate": "August 2, 2019 (USA)",
      "director": "David Leitch",
      "adaptedFrom": "Characters by Gary Scott Thompson",
      "budget": "$200 million",
      "runningTime": "2h 17m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Rent/Buy on Prime Video", "logo": "prime-video.png", "price": "Varies", "link": "#" }
      ]
    },
    {
      "id": "fantastic-four-2005",
      "title": "Fantastic Four",
      "year": "2005",
      "poster": "Fantastic Four (2005).webp",
      "imdbRating": "5.7/10",
      "rottenTomatoes": "28%",
      "metacritic": "40%",
      "googleUsers": "79% liked this film",
      "synopsis": "A group of astronauts gain superpowers after a cosmic radiation exposure during a space mission and must use them to oppose the plans of their enemy, Doctor Victor Von Doom.",
      "releaseDate": "July 8, 2005 (USA)",
      "director": "Tim Story",
      "adaptedFrom": "Marvel Comics",
      "budget": "$100 million",
      "runningTime": "1h 46m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "dune-part-two-2024",
      "title": "Dune: Part Two",
      "year": "2024",
      "poster": "Dune Part Two.webp",
      "imdbRating": "8.6/10",
      "rottenTomatoes": "92%",
      "metacritic": "79%",
      "googleUsers": "95% liked this film",
      "synopsis": "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
      "releaseDate": "March 1, 2024 (USA)",
      "director": "Denis Villeneuve",
      "adaptedFrom": "Dune by Frank Herbert",
      "budget": "$190 million",
      "runningTime": "2h 46m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
 {
      "id": "date-night-2010",
      "title": "Date Night",
      "year": "2010",
      "poster": "Date Night.webp",
      "imdbRating": "6.3/10",
      "rottenTomatoes": "66%",
      "metacritic": "56%",
      "googleUsers": "85% liked this film",
      "synopsis": "In New York City, a case of mistaken identity turns a bored married couple's attempt at a glamorous and romantic evening into something more thrilling and dangerous.",
      "releaseDate": "April 9, 2010 (USA)",
      "director": "Shawn Levy",
      "adaptedFrom": "Original Screenplay",
      "budget": "$55 million",
      "runningTime": "1h 28m",
      "distributedBy": "20th Century Fox",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "captain-america-the-winter-soldier-2014",
      "title": "Captain America: The Winter Soldier",
      "year": "2014",
      "poster": "Captain America The Winter Soldier.webp",
      "imdbRating": "7.8/10",
      "rottenTomatoes": "90%",
      "metacritic": "70%",
      "googleUsers": "92% liked this film",
      "synopsis": "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D. agent, Black Widow, to battle a new threat from history: an assassin known as the Winter Soldier.",
      "releaseDate": "April 4, 2014 (USA)",
      "director": "Anthony Russo, Joe Russo",
      "adaptedFrom": "Marvel Comics",
      "budget": "$170 million",
      "runningTime": "2h 16m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "black-panther-wakanda-forever-2022",
      "title": "Black Panther: Wakanda Forever",
      "year": "2022",
      "poster": "Black Panther Wakanda Forever.webp",
      "imdbRating": "6.7/10",
      "rottenTomatoes": "83%",
      "metacritic": "67%",
      "googleUsers": "87% liked this film",
      "synopsis": "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa. A new threat emerges from the hidden undersea nation of Talokan.",
      "releaseDate": "November 11, 2022 (USA)",
      "director": "Ryan Coogler",
      "adaptedFrom": "Marvel Comics",
      "budget": "$250 million",
      "runningTime": "2h 41m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "black-panther-2018",
      "title": "Black Panther",
      "year": "2018",
      "poster": "Black Panther.webp",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "96%",
      "metacritic": "88%",
      "googleUsers": "88% liked this film",
      "synopsis": "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
      "releaseDate": "February 16, 2018 (USA)",
      "director": "Ryan Coogler",
      "adaptedFrom": "Marvel Comics",
      "budget": "$200 million",
      "runningTime": "2h 14m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "tom-and-jerry-the-fast-and-the-furry-2005",
      "title": "Tom and Jerry: The Fast and the Furry",
      "year": "2005",
      "poster": "Tom And Jerry The Fast And The Furry.webp",
      "imdbRating": "6.5/10",
      "rottenTomatoes": "N/A",
      "metacritic": "N/A",
      "googleUsers": "89% liked this film",
      "synopsis": "After wrecking their house during a chase, Tom and Jerry enter an epic race called the 'Fabulous Super Race' around the world where the winner gets a new fancy house.",
      "releaseDate": "September 13, 2005 (USA)",
      "director": "Bill Kopp",
      "adaptedFrom": "Tom and Jerry characters by William Hanna and Joseph Barbera",
      "budget": "N/A",
      "runningTime": "1h 15m",
      "distributedBy": "Warner Bros. Television Distribution",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Boomerang", "logo": "browser/boomerang.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "tom-and-jerry-blast-off-to-mars-2005",
      "title": "Tom and Jerry: Blast Off to Mars!",
      "year": "2005",
      "poster": "Tom and Jerry Blast Off to Mars.webp",
      "imdbRating": "6.1/10",
      "rottenTomatoes": "N/A",
      "metacritic": "N/A",
      "googleUsers": "86% liked this film",
      "synopsis": "Tom and Jerry stow away on a mission to Mars and are mistaken for invaders by the local Martian population. They must team up with a young Martian to stop a real alien invasion of Earth.",
      "releaseDate": "January 18, 2005 (USA)",
      "director": "Bill Kopp",
      "adaptedFrom": "Tom and Jerry characters by William Hanna and Joseph Barbera",
      "budget": "N/A",
      "runningTime": "1h 11m",
      "distributedBy": "Warner Home Video",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Rent/Buy on Prime Video", "logo": "prime-video.png", "price": "Varies", "link": "#" }
      ]
    },
    {
      "id": "tom-and-jerry-2021",
      "title": "Tom & Jerry",
      "year": "2021",
      "poster": "Tom And Jerry (2021).webp",
      "imdbRating": "5.2/10",
      "rottenTomatoes": "31%",
      "metacritic": "32%",
      "googleUsers": "77% liked this film",
      "synopsis": "A chaotic battle ensues when Jerry moves into New York City's finest hotel on the eve of the 'wedding of the century,' forcing the desperate event planner to hire Tom to get rid of him.",
      "releaseDate": "February 26, 2021 (USA)",
      "director": "Tim Story",
      "adaptedFrom": "Tom and Jerry characters by William Hanna and Joseph Barbera",
      "budget": "$79 million",
      "runningTime": "1h 41m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-secret-life-of-pets-2016",
      "title": "The Secret Life of Pets",
      "year": "2016",
      "poster": "The Secret Life Of Pets.webp",
      "imdbRating": "6.5/10",
      "rottenTomatoes": "72%",
      "metacritic": "61%",
      "googleUsers": "88% liked this film",
      "synopsis": "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes. They must put their quarrels behind when they find out that an adorable white bunny named Snowball is building an army of lost pets determined to take revenge.",
      "releaseDate": "July 8, 2016 (USA)",
      "director": "Chris Renaud",
      "adaptedFrom": "Original Screenplay",
      "budget": "$75 million",
      "runningTime": "1h 27m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-karate-kid-2010",
      "title": "The Karate Kid",
      "year": "2010",
      "poster": "The Karate Kid (2010).webp",
      "imdbRating": "6.2/10",
      "rottenTomatoes": "66%",
      "metacritic": "61%",
      "googleUsers": "91% liked this film",
      "synopsis": "Work causes a single mother to move to China with her young son; in his new home, the boy embraces kung fu, taught to him by a maintenance man, Mr. Han, after being bullied by a local gang.",
      "releaseDate": "June 11, 2010 (USA)",
      "director": "Harald Zwart",
      "adaptedFrom": "The Karate Kid (1984)",
      "budget": "$40 million",
      "runningTime": "2h 20m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Netflix", "logo": "browser/netflix.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "the-incredibles-2004",
      "title": "The Incredibles",
      "year": "2004",
      "poster": "The Incredibles.webp",
      "imdbRating": "8.0/10",
      "rottenTomatoes": "97%",
      "metacritic": "90%",
      "googleUsers": "95% liked this film",
      "synopsis": "Forced to adopt a civilian identity and stuck in a white-collar job, a family of undercover superheroes, while trying to live the quiet suburban life, are forced into action to save the world.",
      "releaseDate": "November 5, 2004 (USA)",
      "director": "Brad Bird",
      "adaptedFrom": "Original Screenplay",
      "budget": "$92 million",
      "runningTime": "1h 55m",
      "distributedBy": "Walt Disney Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-into-the-spider-verse-2018",
      "title": "Spider-Man: Into the Spider-Verse",
      "year": "2018",
      "poster": "Spider-Man Into The Spider-Verse.webp",
      "imdbRating": "8.4/10",
      "rottenTomatoes": "97%",
      "metacritic": "87%",
      "googleUsers": "95% liked this film",
      "synopsis": "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
      "releaseDate": "December 14, 2018 (USA)",
      "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
      "adaptedFrom": "Marvel Comics",
      "budget": "$90 million",
      "runningTime": "1h 57m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Hulu", "logo": "browser/hulu.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "spider-man-across-the-spider-verse-2023",
      "title": "Spider-Man: Across the Spider-Verse",
      "year": "2023",
      "poster": "Spider-Man Across The Spider-Verse.webp",
      "imdbRating": "8.6/10",
      "rottenTomatoes": "95%",
      "metacritic": "86%",
      "googleUsers": "96% liked this film",
      "synopsis": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
      "releaseDate": "June 2, 2023 (USA)",
      "director": "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
      "adaptedFrom": "Marvel Comics",
      "budget": "$100-150 million",
      "runningTime": "2h 20m",
      "distributedBy": "Sony Pictures Releasing",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Netflix", "logo": "browser/netflix.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "incredibles-2-2018",
      "title": "Incredibles 2",
      "year": "2018",
      "poster": "Incredibles 2.webp",
      "imdbRating": "7.6/10",
      "rottenTomatoes": "93%",
      "metacritic": "80%",
      "googleUsers": "92% liked this film",
      "synopsis": "The Incredibles family takes on a new mission which involves a change in family roles: Bob Parr (Mr. Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.",
      "releaseDate": "June 15, 2018 (USA)",
      "director": "Brad Bird",
      "adaptedFrom": "Original Screenplay",
      "budget": "$200 million",
      "runningTime": "1h 58m",
      "distributedBy": "Walt Disney Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "frozen-ii-2019",
      "title": "Frozen II",
      "year": "2019",
      "poster": "Frozen II.webp",
      "imdbRating": "6.8/10",
      "rottenTomatoes": "77%",
      "metacritic": "64%",
      "googleUsers": "85% liked this film",
      "synopsis": "Anna, Elsa, Kristoff, Olaf and Sven leave Arendelle to travel to an ancient, autumn-bound forest of an enchanted land. They set out to find the origin of Elsa's powers in order to save their kingdom.",
      "releaseDate": "November 22, 2019 (USA)",
      "director": "Chris Buck, Jennifer Lee",
      "adaptedFrom": "Original Screenplay",
      "budget": "$150 million",
      "runningTime": "1h 43m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "frozen-2013",
      "title": "Frozen",
      "year": "2013",
      "poster": "Frozen.webp",
      "imdbRating": "7.4/10",
      "rottenTomatoes": "90%",
      "metacritic": "75%",
      "googleUsers": "90% liked this film",
      "synopsis": "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
      "releaseDate": "November 27, 2013 (USA)",
      "director": "Chris Buck, Jennifer Lee",
      "adaptedFrom": "The Snow Queen by Hans Christian Andersen",
      "budget": "$150 million",
      "runningTime": "1h 42m",
      "distributedBy": "Walt Disney Studios Motion Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Disney+", "logo": "browser/disney-plus.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "despicable-me-4-2024",
      "title": "Despicable Me 4",
      "year": "2024",
      "poster": "Despicable Me 4.webp",
      "imdbRating": "6.3/10",
      "rottenTomatoes": "56%",
      "metacritic": "53%",
      "googleUsers": "85% liked this film",
      "synopsis": "Gru, Lucy, Margo, Edith, and Agnes welcome a new member to the family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, and the family is forced to go on the run.",
      "releaseDate": "July 3, 2024 (USA)",
      "director": "Chris Renaud",
      "adaptedFrom": "Original Screenplay",
      "budget": "N/A",
      "runningTime": "1h 35m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription (Coming Soon)", "link": "#" }
      ]
    },
    {
      "id": "despicable-me-2-2013",
      "title": "Despicable Me 2",
      "year": "2013",
      "poster": "Despicable Me 2.webp",
      "imdbRating": "7.3/10",
      "rottenTomatoes": "75%",
      "metacritic": "62%",
      "googleUsers": "91% liked this film",
      "synopsis": "When Gru, the world's most super-bad turned super-dad, is recruited by a team of officials to stop lethal muscle and a host of Gru's own, he has to fight back with new gadgetry, cars, and more minion madness.",
      "releaseDate": "July 3, 2013 (USA)",
      "director": "Pierre Coffin, Chris Renaud",
      "adaptedFrom": "Original Screenplay",
      "budget": "$76 million",
      "runningTime": "1h 38m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "despicable-me-2010",
      "title": "Despicable Me",
      "year": "2010",
      "poster": "Despicable Me.webp",
      "imdbRating": "7.6/10",
      "rottenTomatoes": "80%",
      "metacritic": "72%",
      "googleUsers": "92% liked this film",
      "synopsis": "A criminal mastermind uses a trio of orphan girls as pawns for a grand scheme to steal the moon, but he finds their love is profoundly changing him for the better.",
      "releaseDate": "July 9, 2010 (USA)",
      "director": "Pierre Coffin, Chris Renaud",
      "adaptedFrom": "Original Screenplay",
      "budget": "$69 million",
      "runningTime": "1h 35m",
      "distributedBy": "Universal Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Peacock", "logo": "browser/peacock.png", "price": "Subscription", "link": "#" }
      ]
    },
{
      "id": "aquaman-2018",
      "title": "Aquaman",
      "year": "2018",
      "poster": "DC/Aquaman (2018) [BluRay] [720p] [YTS.AM]/Aquaman (2018).webp",
      "imdbRating": "6.8/10",
      "rottenTomatoes": "65%",
      "metacritic": "55%",
      "googleUsers": "85% liked this film",
      "synopsis": "The origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime—one that will not only force him to face who he really is, but to discover if he is worthy of who he was born to be… a king. [24, 28]",
      "releaseDate": "December 21, 2018 (USA)",
      "director": "James Wan",
      "adaptedFrom": "DC Comics characters",
      "budget": "$160–200 million",
      "runningTime": "2h 23m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },
    {
      "id": "man-of-steel-2013",
      "title": "Man of Steel",
      "year": "2013",
      "poster": "DC/Man of Steel (2013)/Man of Steel.webp",
      "imdbRating": "7.1/10",
      "rottenTomatoes": "56%",
      "metacritic": "55%",
      "googleUsers": "82% liked this film",
      "synopsis": "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade Earth, forcing him to become a hero and a symbol of hope. [5, 14]",
      "releaseDate": "June 14, 2013 (USA)",
      "director": "Zack Snyder",
      "adaptedFrom": "Superman characters by DC Comics",
      "budget": "$225 million",
      "runningTime": "2h 23m",
      "distributedBy": "Warner Bros. Pictures",
      "whereToWatch": [
          { "service": "Watch at VR1", "logo": "browser/vr1.png", "price": "Free with Subscription", "link": "GALLERY.HTML" },
          { "service": "Max", "logo": "browser/max.png", "price": "Subscription", "link": "#" }
      ]
    },




    ];

    // --- The rest of the script is unchanged and will work correctly ---
    const searchBar = document.getElementById('search-bar');
    const contentContainer = document.getElementById('content-container');
    const header = document.getElementById('header');
    const searchWrapperPadding = document.getElementById('search-wrapper-padding');
    
    let lastSearchResults = [];

    const movies = movieData;
    setupEventListeners();

    function setupEventListeners() {
        searchBar.addEventListener('input', handleSearch);
    }

    function handleSearch() {
        const query = searchBar.value.toLowerCase().trim();
        
        if (query.length > 0 && !header.classList.contains('active')) {
            header.classList.add('active');
            searchWrapperPadding.style.transition = 'padding-top 0.3s';
        }

        if (query.length >= 1) { // Changed to 1 to allow searching for "a" in "17 again" etc.
            const results = movies.filter(movie =>
                movie.title.toLowerCase().includes(query) ||
                movie.director.toLowerCase().includes(query)
            );
            lastSearchResults = results;
            displaySearchResults(results);
        } else {
            contentContainer.innerHTML = '';
        }
    }

    function displaySearchResults(results) {
        contentContainer.innerHTML = '';
        if (results.length === 0) {
            contentContainer.innerHTML = `<p style="text-align:center;">No results found.</p>`;
            return;
        }

        const resultsGrid = document.createElement('div');
        resultsGrid.className = 'search-results-grid';

        results.forEach(movie => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.dataset.movieId = movie.id;
            card.innerHTML = `
                <img src="${movie.poster}" alt="${movie.title}" onerror="this.src='browser/vr1.png'; this.style.objectFit='contain'; this.style.padding='20px';">
                <div class="result-card-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.year}</p>
                </div>
            `;
            card.addEventListener('click', () => displayMovieDetails(movie.id));
            resultsGrid.appendChild(card);
        });
        contentContainer.appendChild(resultsGrid);
    }

    function displayMovieDetails(movieId) {
        const movie = movies.find(m => m.id === movieId);
        if (!movie) return;

        contentContainer.innerHTML = '';

        const watchOptionsHTML = movie.whereToWatch.map(option => `
            <li>
                <img src="${option.logo}" alt="${option.service}" class="service-logo" onerror="this.style.display='none';">
                <div class="service-info">
                    <div class="service-name">${option.service}</div>
                    <div class="service-price">${option.price}</div>
                </div>
                <a href="${option.link}" class="watch-button">Watch</a>
            </li>
        `).join('');

        const detailsHTML = `
            <div class="back-button" id="back-to-results-btn">← Back to Results</div>
            <div class="movie-layout">
                <aside class="left-column">
                    <img src="${movie.poster}" alt="${movie.title} Poster" class="movie-poster">
                </aside>
                <main class="right-column">
                    <h1 class="movie-title">${movie.title}<span class="movie-year">(${movie.year})</span></h1>
                    <div class="ratings-grid">
                        <div class="rating-item">
                            <div class="rating-header"><img src="browser/imdb.png" alt="IMDb" class="rating-icon"><span class="rating-label">IMDb</span></div>
                            <div class="rating-value">${movie.imdbRating}</div>
                        </div>
                        <div class="rating-item">
                            <div class="rating-header"><img src="browser/rotten tomatoes.png" alt="Rotten Tomatoes" class="rating-icon"><span class="rating-label">Rotten Tomatoes</span></div>
                            <div class="rating-value rotten-tomatoes">${movie.rottenTomatoes}</div>
                        </div>
                        <div class="rating-item">
                            <div class="rating-header"><img src="browser/metacritic-logo-original.png" alt="Metacritic" class="rating-icon"><span class="rating-label">Metacritic</span></div>
                            <div class="rating-value metacritic">${movie.metacritic}</div>
                        </div>
                        <div class="rating-item">
                            <div class="rating-header"><img src="browser/google.png" alt="Google" class="rating-icon"><span class="rating-label">Google Users</span></div>
                            <div class="rating-value">${movie.googleUsers.split(' ')[0]}</div>
                        </div>
                    </div>
                    <p class="synopsis">${movie.synopsis}</p>
                    <ul class="details-list">
                        <li><strong>Director:</strong> ${movie.director}</li>
                        <li><strong>Running Time:</strong> ${movie.runningTime}</li>
                        <li><strong>Release Date:</strong> ${movie.releaseDate}</li>
                        <li><strong>Budget:</strong> ${movie.budget}</li>
                        <li><strong>Distributed By:</strong> ${movie.distributedBy}</li>
                        <li><strong>Adapted From:</strong> ${movie.adaptedFrom}</li>
                    </ul>
                    <div class="watch-section">
                        <h3>Where to Watch</h3>
                        <ul class="watch-options-list">${watchOptionsHTML}</ul>
                        <div class="user-actions">
                            <button class="action-button" id="watched-btn">Already watched</button>
                            <button class="action-button" id="wishlist-btn">Want to watch</button>
                        </div>
                    </div>
                </main>
            </div>
        `;
        contentContainer.innerHTML = detailsHTML;

        document.getElementById('back-to-results-btn').addEventListener('click', () => displaySearchResults(lastSearchResults));
        
        const watchedBtn = document.getElementById('watched-btn');
        watchedBtn.addEventListener('click', () => {
            const isSelected = watchedBtn.classList.toggle('selected');
            watchedBtn.innerHTML = isSelected ? '✔️ Watched' : 'Already watched';
        });

        const wishlistBtn = document.getElementById('wishlist-btn');
        wishlistBtn.addEventListener('click', () => {
            const isSelected = wishlistBtn.classList.toggle('selected');
            wishlistBtn.innerHTML = isSelected ? '✔️ On Wishlist' : 'Want to watch';
        });
    }
});