/* ============================================================================
   THE WANDERING SOUL — YOUR CONTENT EDITOR
   ============================================================================

   START HERE! This is the main file to edit in VS Code or Notepad++.

   1. Change text between quotation marks to update the website.
   2. Add new items by copying an existing { ... } block.
   3. Keep commas between items in a list.
   4. Put your own photos in assets/gallery/.
      Then use only the filename, such as "my-maui-sunset.jpg".
   5. Save this file, then refresh index.html in your browser.

   IMPORTANT: Keep the outside structure `const BLOG_CONTENT = { ... };` intact.
   See EDITING-GUIDE.md for illustrated-by-example instructions.
*/

const BLOG_CONTENT = {

  // ========================================================================
  // SECTION 1 — YOUR SITE DETAILS
  // ========================================================================
  site: {
    name: "The Wandering Soul",
    email: "cjkallevig@gmail.com",
    footerMessage: "Stories from my travels.",
    footerTagline: "Enjoy the road."
  },

  // ========================================================================
  // SECTION 2 — YOUR PHOTOS / IMAGE SHORTCUTS
  // ========================================================================
  // You may use web image URLs or filenames from assets/gallery/ such as view.jpg.
  // These are shared image shortcuts used around the site.
  images: {
    mountain: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=85",
    coast: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=85",
    lake: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=85",
    road: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=85",
    forest: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=85",
    italy: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=85",
    water: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=85",
    details: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=85",
    alpine: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=85",
    hill: "hill.jpg",
    Caleb: "Caleb.jpg",
    Roadtrip: "Road.png",
    cars: "cars.jpg",
    caleb2: "caleb2.jpg",
    arizona3: "arizona3.jpg",
    salz2: "salz2.jpg",
    kayak2: "kayak2.jpg",
    car2: "car2.jpg"

  },

  // ========================================================================
  // SECTION 3 — HOME PAGE WORDING
  // ========================================================================
  home: {
    smallHeading: "THE WANDERING SOUL — The Stories and Adventures of Caleb",
    title: "What is",
    titleAccent: "adventure?",
    lead: `Is it doing something you've never done before? Does it require you to travel a certain distance? Or maybe you need to spend just enough money for it to be considered so.`,
    paragraphs: [
     `I tell you truth. Adventure, or more importantly the pursuit of such, is more of a state of mind. An allowance for chaos and the ability to adapt. Adventure is seeking discovery and experience while paying the price of comfort and convenience. `, 

      `The road of adventure is NOT so straight and travelled. Rather than the opposite. The road of adventure often displays signs of decay. It has many potholes and turns and is often the least travelled path of them all. But that! That, is the key of adventure. Taking the path that most scares and excites you for the purpose of experience, building character, wisdom, and for the tales and stories that will be told for millennia. `, 

      `Not sure if you're up for it? If you're on the fence, ask yourself this one question. `, 

      `"If I don't do this, will I regret it?". It's that simple. `, 

      `The world is filled with people who are too afraid to take the first step and regret it in their days of old. Don't be like those people. Be you. Be an Adventurer, an explorer, a Wandering Soul, if you will. `, 

      `Look. If I'm being honest, I am like those people whom I speak of.`, 

      `Scared. `, 

      `Afraid. `, 

      `Nervous. `, 

      `Wondering if I should or shouldn't do something simply because it scares me. But I am always reminded of the quote that was written and placed in the end credits of one of the most adventurous and influential games of all time. Minecraft. And it goes like this...`, 

      `"Twenty years from now, you will be more disappointed with the things you didn't do than by the ones you did do. So, throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover." - Unknown. `, 

      `This will now and will always be one of the quotes I live my life by, and I hope you do the same. `, 

      `The path of Adventure or more importantly, the mindset of such, will allow you to experience life in a way you have never done thus far. See things you never thought you'd see and do the things you never thought you'd do. `, 

      `So. Enjoy the tales and Memoirs of The Wandering Soul. May they inspire you to one day set out for a grand adventure of your own. I wish you all the best of luck. May your sails be filled, your paths windy, and your books chock full of the stories, tales, and memoirs of the life you lived along the roads of Adventure...` 

    ], 
    signoff: "Ill see you out there!.",
    bottomCaption: "thewanderingsoul",
    photoLinksHeading: "More from",
    photoLinksAccent: "the road..."
  },

  // The four picture links at the bottom of Home. Keep exactly four if you
  // want to preserve the current four-column design.
  homeCards: [
    { title: "Travels", subtitle: "From the books to screens", image: "arizona3", page: "travels" },
    { title: "Oh, the Places You'll Go", subtitle: "consider these for your next adventure", image: "salz2", page: "places" },
    { title: "Gallery", subtitle: "photos on the road", image: "kayak2", page: "gallery" },
    { title: "About Me", subtitle: "a little info about me", image: "car2", page: "about" }
  ],

  // ========================================================================
  // SECTION 4 — PAGE HEADINGS AND INTRODUCTIONS
  // ========================================================================
  pages: {
    travels: {
      smallHeading: "FROM PAPER TO PAGES",
      title: "Caleb's",
      titleAccent: "Journal.",
      description: "Stories long and short from my last year of highschool (Class of 2024) and BEYOND!."
    },
    places: {
      smallHeading: "Ideas for your next adventure",
      title: "Oh, the Places",
      titleAccent: "You'll Go.",
      description: "You never know where you might go if you just step out the door."
    },
    next: {
      smallHeading: "The Bucket List",
      title: "Where to",
      titleAccent: "Next?",
      description: "Places and adventure's yet to happen."
    },
    gallery: {
      smallHeading: "Photos from the road",
      title: "The",
      titleAccent: "Gallery.",
      description: "If these are just the moments captured, imagine all the moments that weren't."
    },
    music: {
      smallHeading: "Music for the road",
      title: "To Pair With",
      titleAccent: "a Long Drive.",
      description: "Travel is the movement of our body to a place we've never been. But music is the motion and stamina in our mind."
    },
    about: {
      smallHeading: "A LITTLE DETOUR",
      title: "What's my",
      titleAccent: "story?",
      description: "Just a bit of information about who I am and why I do what I do."
    }
  },

  // ========================================================================
  // SECTION 5 — JOURNAL ENTRIES: ON THE ROAD & THE DAY TO DAY
  // ========================================================================
  // TO ADD A JOURNAL:
  //   - Copy one entire { ... } entry and paste it before the closing ].
  //   - Give it a NEW unique id (lowercase words joined-with-hyphens).
  //   - Set section to exactly "On the Road" or "The Day to Day".
  //   - Put each paragraph in its own line inside paragraphs: [ ... ].
  //   - image can be an image shortcut (like "coast") or your photo path.
  //   - To place a photo beside a paragraph, use { text, image, caption, imageSide }.
  //   - To hyperlink words, add links: [{ text, url }] to a paragraph object.
  journals: [
    {
      id: "the-in-between",
      section: "The Day to Day",
      title: "The Beauty of the In-Between",
      date: "A DAILY NOTE / 01",
      place: "Somewhere quiet",
      image: "hill",
      summary: "On the slower days, the ordinary moments, and learning not to rush through a life worth remembering.",
      opening: "Lately I have been thinking about all the little moments we tend to overlook while waiting for the next big thing.",
      paragraphs: [
        "There is a particular magic in a morning with no hurry. Coffee cooling beside an open window. Sunlight moving slowly across the floor. A conversation that goes on longer than planned.",
        "We spend so much time looking ahead to what comes next that it is easy to forget we are already living the days we once looked forward to. I want to get better at noticing them.",
        "Maybe an adventurous life is not only measured in passport stamps and distant destinations. Maybe it is also the willingness to see familiar things in a new light."
      ],
      closing: "A reminder to myself: the little things are the big things, too."
    },
    {
      id: "slow-mornings",
      section: "The Day to Day",
      title: "A Case for Slow Mornings",
      date: "A DAILY NOTE / 02",
      place: "A quiet morning",
      image: "hill",
      summary: "A gentle reminder to leave space for unplanned, unhurried moments.",
      opening: "Not every beautiful moment needs an itinerary.",
      paragraphs: [
        "Some days feel richer when they are allowed to unfold on their own. There is no checklist to finish, no landmark to reach before sunset. Just a little time to be.",
        "I have always loved the hush of the early hours: the smell of coffee, the air before the day warms, the feeling that anything could happen.",
        "The more I travel, the more I realize that it is often the smallest parts of a place that stay with me the longest."
      ],
      closing: "Here is to taking our time."
    },
    {
      id: "postcards-from-coast",
      section: "On the Road",
      title: "Camping in Banff, Alberta",
      date: "TRAVEL JOURNAL / 01",
      place: "August 2023",
      image: "alb.jpg",
      summary: "A fun get away full of landscapes, hikes, lakes, and an unfortunate event between me and 2 day old sweet and sour pork.",
      opening: "A week in Banff.",
      paragraphs: [
       "Ok, to be honest I was a bit reluctant to do this trip. From my perspective I was going to a cold, dry, sleepy town located in the oil province of Alberta. However, what I didn't expect was a vast stretch of mighty mountains, wild rivers, blue water lakes, and a feeling best described as a cozy village.", 

 "The day was August 28th, 2023, about a week before heading back for my last day of school. My parents and I set off for a road trip to Banff, Alberta. The plan was to drive to this place that rented out RV's, get one and trailer it to a campground in Banff. ", 

{
  text: "So, we set off on our 8-hour road trip to Banff. Along the way roads ducked and dove along mountain sides, shaped around corners, and stretched for miles. One thing to note is I live in British Columbia, Canada. A place known for mountainous areas and valleys. So why is the Mountains here cool to see if I live right next to them. Well, it's the scale of it all.",
  image: "hwy.jpg",
  imageSide: "right"
},

"The mountains here belong to a 3000-mile stretch of mountains called 'The Rockies'. These mountains happen to be MUCH bigger than the ones I live by. The faces are much more raw, with extreme changes in elevation and unique patterns. Just looking at them makes you feel like an ant by a hill. ", 
{
  text: "After about 6 hours we got to the site where we picked up a trailer and continued the journey to our destination. Banff, Alberta, and my goodness was it cool. Away from cities, away from sirens, away from distractions, the silence was loud. That was the first thing I noticed when we arrived at Silverhorn Creek Campground, Among other things, the beauty of it all took my breath away as we set everything up at our site which was located in the middle of the valley. ", 
  links: [ 
    { text: "Silverhorn Creek Campground", url: "https://silvercreekcampground.ca/" }
  ]
},
{
  text: "Our first day was spent getting there, setting up, and having a little dinner by the fire we made. Thankfully, the fire ban was lifted at this point.", 
  image: "Camp.png",
  imageSide: "left"
},
 "The second day we explored around our site. We found a nice creek only a few minutes away and decided to take a little dip. At that time, it was about mid-day so it was pretty hot. The same could not be said for the water. Shimmering, clear water looked VERY appealing at the time until we were in it. Shivering I was as I walked around in the shallow creek. The most I could do was lay down to be fully submerged, which is what I ended up doing as the cold was a better alternative to the heat; I was feeling prior.", 

"Once we felt our fingers and toes would fall off if we stayed any longer, we headed back to the camper for lunch. Hot dogs and beans it was for that day. A camping meal classic for sure. The rest of the day was spent mainly relaxing as the day before was pretty tiring, especially for my dad who was driving for the entirety of the trip. ", 
{
  text: "We found out how to out how to connect my dad's iPad to the speakers in the RV and watched a movie before bed. Jurassic Park was the pick for that night. An excellent watch, and a classic to this day! ", 
  image: "albsun.jpg",
  imageSide: "right"
},
 "You know how I said it was hot in the daytime? Well. The morning, not so much. The frosted tips covered the areas of the grass not yet touched by the sun which happend to be most of it at the time. Since the mountains were so tall here the sun took a bit longer to rise above them, hence the long cool mornings. Or cold I should say. I elected to stay in my bed most mornings hiding away from the touch of air that would send goosebumps down my back. ", 

"However, the day had to start at some point and always did around the fire we'd build. This was our way of staying warm. There's something so peaceful about starting the day this way. No scrolling, no alarm, just a natural wake. ", 
{
  text: "That day we set out for a very popular location known as Lake Louise. Something to note is that Lake Louise is a glacier lake. A glacier lake is formed when a moving glacier impacts the grounds in a way where it leaves a hole behind it. This hole is then filled with the melt of the glacier leaving behind a lake. ", 
  image: "louise.png",
  imageSide: "left",
  links: [
    { text: "Lake Louise", url: "https://www.banfflakelouise.com/experiences/lake-louise" }
  ]
},
 "Now I'm not a geologist nor am I super knowledgeable on glaciers, but this description gives you an idea of not only the scale of the lake but the temperature of the water. Frigid. Now we didn't actually go ON the water, but I could only imagine how it felt to go in. We went to the edge of the lake where we could take a photo of it and go for lunch at this place next to Walliser Stube. Alot less fancy than the Walliser Stube, it was pretty much a corner store like place with sandwiches. We bought a few and headed outside to eat by the lake. ", 

 "By the way, something that stands out immediately when you get to the lake is how blue the water is. Ive never seen a bluer lake in my life. It has something to do with it being a glacier lake in how it contains remnants of glacier debris or something like that. Whatever it is blue is the water of the lake called louis. Now there are lots of hikes you can do around it to see the lake from above, and looking back I wish we did them but at that time it was HOT, and I didn't intend on hiking in the heat unprepared. ", 

 "After that we headed back home for some lunch. A little backstory before I move on, is that on the way to our campsite we stopped at a little grocery store to pick up supplies and food for our trip. We got the usuals like hot dogs, buns, eggs, bacon, etc. As we were about the leave the store I found premade, and warm sweet and sour pork. I decided to get some for our trip and heat it up later. ", 

 "Fast forward to lunch time of the second day we had a combination of hotdogs, apples, bean, and oh ya the have sweat and sour pork, I remember I bought. So I decided to cook and heat it up on the grill. While we were cooking the food I got distracted doing something and forgot my pork was cooking. Luckily my mom found it and told me it was burning. I opened the grill and it was only burnt a little bit. Phewf! My food was okay. I then plated it and sat down to eat and took my first bite. Now I don't know whether it was the fact that it was already cooked 2 days ago and I was re cooking it, or that it was sitting in the truck for 5 hours, or that I burned it, or a combination of all 3 but whatever the case, it was TERRIBLE. It tasted like burnt toe with a hint of pork. Anyways I ended up eating most of it.", 

 " Looking back now I can't remember exactly why I ate most of it but this one decision would later haunt me as that night was spend between my bedside with the feeling of a bomb in my stomach, and the outhouse with me igniting said bomb and dropping it on Hiroshima, or in my case the sewage catch. It was a horrible experience but one I won't ever forget. Especially not now since I've documented it.", 
{
  text: "Next morning I surprisingly felt way better. The war was finally over. That morning was spent not in my bed but setting out to for a hike that was pretty difficult around Picklejar lake. Another really cool lake, not as blue but the hike made up for it as the challenge it took to get there made it worth it. You had to essentially hike down a steep face to get down to the lake and hike up the way out. The way out was much harder but to the surprise of myself and my mom was my, at the time 57-year-old dad; I kid you not running up the steep zig zag trail. I guess all that trail running really paid off. ", 
  image: "pickle.png",
  imageSide: "right",
  links: [
    { text: "Picklejar Lake", url: "https://hikebiketravel.com/the-pickle-jar-lakes-hike-in-kananaskis-country/" }
  ]
},
 " The funny part is he had a bell attached to his bag which he said had something about bear protection but seems to me like he just attached a beer signal to his bag that told every bear in the area exactly where dinner would be. Anyways, it was funny because as he ran up it jingled in a way that made him sound like Rudolph running which had me and my mom giggling.", 

 " Apon reaching the peak again, which is where we started, we headed for the car and planned to head into town for lunch. The town of banff was a very cozy looking town with sleepy town vibes but in a good way. It has a certain charm to it. Unfortunately, I can't remember where we stopped for lunch, but it was probably pretty good.", 
{
  text: " The next stop on our list that day was a place called Mistaya Canyon. Now this place was very interesting to say the least. Incredible rock formations, with fast flowing water flowing through, endless trails around to see the area in every which way, and unpredictable terrain that climbed and descended as it pleased. A very cool spot. Definitely worth the stop if your in the area. Soon after the sun started to fall ahead the earth and we headed back to our campsite.",
  image: "alber.jpg",
  imageSide: "left",
  links: [ 
    { text: "Mistaya Canyon", url: "https://www.banfflakelouise.com/experiences/mistaya-canyon" }
  ]
},
 "That night we ended up watching Starwars: The Empire Strikes Back. Classic, once again. Unfortunately for us it was our last day in Banff but NOT the last day of our trip. ",  
{
  text: "On our way back home we stayed at this cabin located near Enderby, BC. Another small town of many in British Columbia. Here we spend a few more days in the back country enjoying the sun, floating around at the Enderby river float, which is a slow river many people tube down.",  
  image: "wayback.jpg",
  imageSide: "right",
  links: [ 
    { text: "Enderby River Float", url: "https://explorethemap.com/enderby-river-float/" }
  ]
},
" Now, Ive done it before and it's definitely worth it, but this time we just went to where people finish the float and swam around there for an evening. We finished the day with ice cream from a local parlour and ordered takeout pizza to bring back to our cabin. The movie of the night or show rather, was one we watch on the regular. It's Called 'Last Man Standing', and it's definitely worth the watch. The next morning we set out for the road and finally arrived home.",  

 "I wanna end the story with quickly talking about Alberta. Specifically, Banff, Alberta. To anyone wanting a quiet get away full of beautiful scenery and outdoor activities, I would 100% recommend this trip and would recommend a 3-5 day trip to get settled into the enviroment and have a relaxing yet exciting trip to Banff, Alberta.", 

 "THE END"

      ],
      closing: "The feeling of being away and being home at the same time."
    },
    {
      id: "the-long-way",
      section: "On the Road",
      title: "Traveling to the Hawaiian Islands",
      date: "TRAVEL JOURNAL / 02",
      place: "Various Dates and Trips",
      image: "title.png",
      summary: "Which Island should you go to? Let me tell you a story...",
      opening: "Ocean, Beaches, and Volcanoes.",
      paragraphs: [
      {
       text: "Ahh, Hawaii. The destination for honeymoons and naturous adventurers alike. I have been to a few islands including Kauai, O'ahu, Maui, and Hawaii (The big island). There are a few smaller ones like Moloka'i and Lana'i which I have not gone to. Click their names to find out more info on them as well as the rest Ive been to.",
        links: [
          { text: "Kauai", url: "https://www.gohawaii.com/islands/kauai" },
          { text: "O'ahu", url: "https://www.gohawaii.com/islands/oahu" },
          { text: "Maui", url: "https://www.gohawaii.com/islands/maui" },
          { text: "Hawaii (The Big Island)", url: "https://www.gohawaii.com/islands/hawaii-big-island" },
          { text: "Moloka'i", url: "https://www.gohawaii.com/islands/molokai" },
          { text: "Lana'i", url: "https://www.gohawaii.com/islands/lanai" }
        ]
      },
       "The trips I've been on takes place between ages 6 and up to 17 with multiple trips to different islands so information about said islands is limited and therefore I cannot give significant recommendations and or specific locations I went to. So, for the sake of a general idea of what each island I've been to offers I will give a quick overview, a few locations, and a story about each one and give you guys the best information I can with my limited resources. Let's begin.",
       {
       text: "Starting with the biggest Island which funnily enough does NOT have the most people, is Hawaii, but What it lacks in the number of people it makes up for the number of volcanoes, and my goodness is there a lot. In fact, Hawaii has the most ACTIVE volcanoes with 4 active volcanoes at the time of writing this. Hawaii has many places scattered around the island with different vibes and activities at each. The one I'm going to talk about since I went there was Kona.",
       image: "hawaii2.jpg",
       imageSide: "left",
       },
       "I went to Kona, Hawaii in November 2023 with my parents. At the time my dad was flying a Boeing-737 and brought us along on one of his flights. In this case, Kona. The trip was pretty short, about 3 days, but if we weren't on a layover I would recommend about 5 — 7 days to get relaxed and have time to hit a few different towns.",

       " The main thing to note about Kona or specifically South-Kona is that due to the position of the Mauna Loa (The largest active volcano in Hawaii) it shields South-Kona from majority of winds making Kona the perfect location for snorkeling and swimming with glassy clear and calm water and what we ended up doing for most of the trip. Well that, and exploring the coastlines, visiting various diners and beaches. I remember we rented snorkels and flippers to use at this beach we found. I'm not sure how much they were, but we for sure spent too much. They were terrible. As soon as I got in the water, it would fog up quicker than a cool moist morning.",

       'Next up we have Kaua\'i. Also known as \'the Garden Island\' and is my favorite and most likely the one I\'d return to if I went again. This trip took place in 2022, my grade 10 year. At this point my classes were pretty easy so going away for a week wasn\'t too bad. That is except for gym. How do you get ahead of a class like gym? Well just be a goated student and have a really nice teacher. I told my teacher I was going away for a week and asked if there was anything I could do to not miss any marks from that week. He told me this. \'Do one hike and take a picture of a turtle\', 2 things that ended up being significantly harder than originally thought for reasons I\'ll explain in a few sentences.',
       {
       text: " First, I want to answer the question. Why should I go to Kauai?  My best case for going here instead of other islands is this. Kaua'i is one of the rawest and most untouched of the main islands. Incredible beaches, massive volcanoes, and landscapes straight out of story books. Some of the views you got from places you could even drive to were crazy, let alone some of the places you can hike to. This island feels like what you'd expect Hawaii to be like.",
       image: "kauai.webp",
       imageSide: "right"
       },
       {
       text: 'A little fact about Kaua\'i is that this island is where they filmed the classic dinosaur movie released in 1993 called \'Jurassic Park\' which gives you an idea of the beauty and scale of the island. For more specific information, click HERE for general planning and specific locations. Now, back to why I mentioned earlier that doing one hike and getting a picture of a turtle was more difficult than originally intended. The reason being is that at that time we were just coming out of the Covid Pandemic and starting to travel again. ',
       image: "jur.jpg",
        imageSide: "left",
        links: [
         { text: "HERE", url: "https://finduslost.com/the-complete-kauai-travel-guide/" }
        ]
       },
       'Up to this time I had never gotten Covid despite not really living in lockdown for the majority of time. However, the SECOND I leave the country I get covid and feel the effects about halfway through the trip. Unfortunately for me the first hike we ended up doing was around the halfway point and I was not feeling great. With my head beating like a drum and nose only half working, we set off for a \'moderately difficult hike\'. I\'m just going to come out and say it was horrible. A little bit of info to note is my dad has a very strong \'Tough it up\' mentality which is good most of the time except for now not believing me when I said I\'m dying. I guess he felt I said I was dying because I was \'out of shape\' or something which wasn\'t really the case at the time. After the trip I took a test and I was in fact not lying and my parents were forced to believe me. ',

       'The second challenge was getting a photo of a turtle which doesn\'t sound hard, except for the fact that turtles as of going there were endangered. As of now they are considered a \'threatened\' species but still. The fact of the matter is they are pretty hard to find. In our case, every beach we went to, I had an alternate goal. Find a turtle. This added a fun little game to each place we went to and on the 6th day, 1 day until we went home, we finally found a turtle and it was MASSIVE. Beached on the water\'s edge, tourists and locals alike took pictures of this beast. As did I and my mission was now complete. Overall, a great place to stay, even better for those not suffering from sickness.',
       {
       text: "Moving on, let's talk about Oahu. The home to those who wants a more domesticated Hawaiian experience. More specifically where City meets nature in a place called Waikiki, the city of Oahu. This is the place for those wanting a city vibe with great beaches and want to learn more about American history as Oahu is the home of Pearl Harbor. The famous location where in WW2, Japan launched an attack due to USA's involvement in the war and their denied request of backing out of resource-based sanctions against Japan. ",
       image: "oahu.jpg",
       imageSide: "right",
        links: [
          { text: "Waikiki", url: "https://www.gohawaii.com/islands/oahu/regions/honolulu/Waikiki" }
        ]
       },
       {
       text: "The site at the time was a port for American Naval ships and upon Japan launching an air raid via aircraft carriers, the harbour and most of the ships were either sunken or destroyed. Now, it is made up of Memorial tours and museums. The city is also nice to explore and see which you can do by walking or renting an electric bike as there are lots of options for electric bikes and scooters along the coast. I recommend not exploring the city at night as it's not the safest with crime rates in Waikiki higher than in other places. ",
       links: [
         { text: "Memorial tours", url: "https://pearlharbor.org/" },
         { text: "Museums", url: "https://www.nps.gov/perl/index.htm" }
       ]
       }, 
       {
      text: "Beyond the city there are amazing beaches trails and the famous DiamondHead hike which takes place along the ridge of the diamond head volcano which looks like a bowl from above. This is the main hike that my mom and I did when we were there. I highly recommend doing that as you get a great view of the city as well as the rest of the island. All in all, not the first island I would recommend but if it interests your I'd recommend 2-4 days here.",
      image: "dia.jpg",
      imageSide: "left",
      
      links: [
        { text: "DiamondHead hike", url: "https://www.alltrails.com/trail/hawaii/oahu/diamond-head-leahi-summit-trail" }
      ]
      },
      {
       text:'Finally, we have Maui. This island is definitely the most known of the islands for its popularity as the destination for many honeymoons, and there is a good reason for that. This island was the first of the islands I ever went to and went there with my brother, my parents, and my grandparents. This island has almost everything you could want from a \'tropical\' vacation. Great beaches, food, hikes, and more. ',
       image: "maui.jpg",
        imageSide: "right",
      },
      {
       text:"The most memorable thing from my experience was on one of the first trips we took to Maui and at the time was my least favorite thing we did there. Reasons being is that at the time I was 8 years old, that morning my dad woke me up at like 4 in the morning and drove us up a mountain for 2 hours and when we finally got to the top it was soooo cold. We were at the top of the Haleakalā volcano. This is the home of the Haleakalā national park stationed at about 10,000 feet above sea level. This place is also known as 'the house of the sun', most popular for its beautiful sunrise view across the island of Maui. At the time I didn\'t really appreciate it as much as I would now as all I wanted to do was go to the warm beach and soak in the sun. Nevertheless, I highly recommend it. c beautiful view that makes you feel like your floating above the clouds.",
       image: "sun.webp",
       imageSide: "left",
       links: [
         { text: "Haleakalā volcano", url: "https://www.nps.gov/hale/index.htm" }
       ]
      },
      {
       text: "And that's it. All the information about the islands of Hawaii I could give based on experience and mild research. If you want further information about Hawaii in general click HERE. Overall, I\'d recommend a week or 2 at one of these islands to fully explore, relax and oh did I mention fire dancing and luaus? No? Well, that is definitely something to look into for your island of choice, or islands if you\'re stacked like that. Thanks for reading and hope you learned something about this amazing place. Real talk is one of my favorite destinations to travel to. Never a dull day.",
       links: [
         { text: "HERE", url: "https://www.gohawaii.com/trip-planning" }
       ]
      },
      "THE END"

      ],
      closing: "Whichever Island you choose will always be the right one."
    },
    {
      id: "the-long-time",
      section: "On the Road",
      title: "Missions Trip in Mexico",
      date: "TRAVEL JOURNAL / 03",
      place: "July, 2024",
      image: "Mexico12.jpg",
      summary: "An unforgettable experience and one I would highly recommend",
      opening: "Life, Change, and Perspective.",
      paragraphs: [
       {
        text: "Let me tell you about Mexico! An amazing destination with plenty of options for beaches, margaritas and nights of endless parties. That is if you're in the right area. The truth about Mexico is as much as there's really nice areas, there is also extremely poor areas and there is more of it than people realize. In my case I was in Baja California, but specifically, south of San Quintin. The kind of place you'd expect to find trash filled hills, and landslides of alcohol. You definitely see those things but there's another thing you see. Broken people. People who for one reason or another have ended up at a low low low place in life or was just born into poverty, and unable to get out. Whatever the case, that is where we went. Myself, my church youth group from Mainstreet Church and One life ministries. Together, with enough money, my leaders, friends and I set off in a bus from San Diego to the heart of baja California to bring joy, a new house for a family, and the hope of Jesus Crist. This is how it went...",
        image: "Mexico10.jpg",
        imageSide: "left"
       },
        {
       text: "First thing we did, obviously was go from San Diego to Baja California. Now, I don't live in San Diego, so the actual first thing we did was fly from Vancouver, BC to San Diego. From there we got in a big bus provided by one life ministry. We drove down the coast stopping at various places like In and Out, a VERY popular burger fast food chain and it was delicious. After a bit we got to the border of Mexico. Something interesting about the Mexican border is how easy it is to go through. There was no one there and it was pretty chill. Once we passed the border, the scenery slowly started changing. What was once palm trees, and coastlines with nice homes and architecture, turned into small shacks, massive concrete structures and huts. Definitely a different Mexico than what I'm used to.",
       image: "Mexico20.jpg",
       imageSide: "right"
        },
        {
        text: "After a long drive we finally arrived at our headquarters. This place was pretty nice. There was large community housing, a soccer field, and even a pool. That night was spent praying with the group we went with and getting ready for tomorrow.",
        image: "Mexico11.jpg",
        imageSide: "left"
        },
        {
        text: "The next day we set out for the worksite which was not too far away. Apon arriving, we met the family who were getting the house once it was built and it was pretty emotional. Seeing a small family with their kids tearing in their eyes thinking of what they're getting and to us it was nothing more than a small, single floor house that would be too small for any neighborhood in North America. But here it looked like just a normal house in a community. The family talked briefly about how Jesus had helped them in their lives and even brought the husband out of addiction. In fact, the main guy who was leading the construction of the house was originally someone whom our church built a house for in the past which shows what we were doing here actually made some kind of difference no matter how small.",
        image: "Mexico16.jpg",
        imageSide: "right"
        },
        {
        text: "Throughout the next few days we organized into groups, cut wood, measured, nailed, hammered, painted and put together a house. From foundation to finished it was quite the process. Something to note is I don't really have experience was construction at all, so a lot of the practices and plans set out to make the house, I have never seen before, which made it a cool process to see. How a house is built from start to finish. The majority of work that I did was cutting pieces of wood for the drywall and painting the house. This process to learn and share with my friends was an amazing experience to say the least.",
        image: "Mexico12.jpg",
        imageSide: "left"

        },
        {
        text: "Speaking of friends, I want to talk about a unique situation with who came to Mexico. Usually, you get a mix sign up of girls and guys from our youth group. However, in our case not one girl signed up for the trip. Whatever the reason it was from then on out called \"Mexico with the boys\". Between pranks at midnight with my buddy coming into my room at 2 in the morning with a slice of cheese and throwing it on my face, to the soccer matches between us and the Mexican staff. Call is Canada Vs. Mexico. It was an amazing experience and will forever bond us as not friends but brothers. Especially with what we all saw together, good and bad we will never forget it.",
        image: "Mexico8.jpg",
        imageSide: "right"
        },
        {
        text: "Speaking of which I want to briefly talk about our experience with the kids and community center we visited. Went there on the 4th day after finishing the work for that day and headed over to the center to hang out with the kids of area. I just have to say this was one of the coolest and perspective changing experiences for me personally. We played games like bag racing and watched as they performed dances to Spanish music. After that, they did arts and crafts with all the kids.",
          image: "Mexico5.jpg",
          imageSide: "left"
        },
        "A moment I will never forget was during the arts and crafts. I saw this kid in the back, maybe 10 years old and he was a bit of a bigger kid than other kids there and a lot older. It reminded me of myself when I was that age, however in my case, I would have thought this was the lamest thing in the world. Doing arts and crafts? Dancing to children's music? Add on the fact he was a fair bit older than the rest if I was in his shoes I would have been embarrassed and begging to leave and go home. But he wouldn't have. No. He had a great big smile on his face, and he was playing with all the other kids the same. In that moment my perspective changed. How fortunate I was to think arts and crafts were embarrassing. How fortunate I was to have options. How fortunate I was to actually be embarrassed in the first place. This kid was in a much worse world yet had a better attitude than me at that age. One of those moments you never forget.",
        {
        text: "Unforgettable moments were kind of the theme of this trip. Some good and some bad. Another thing I won't forget was visiting a place called \"trash hill\". It is as the name suggests. About a kilometer of a hillside was covered up and down with garbage, broken down vehicles, and waste. Did I mention people lived here? No? Ya people lived here. For many reasons whether it be drugs, addiction, poverty, they were here. Searching. Searching for everything and nothing at the same time. There's a symptom that often occurs after heavy use of methamphetamines. You are always looking around for something but you have nothing specific your looking for. Something we saw a lot of when we got here. People. Lost people searching around this wasteland. Looking for something, but nothing.",
        image: "Mexico13.jpg",
        imageSide: "right"
        },
        {
       text: "We ended up getting out of the bus and talking to a few people before giving them food and water and praying for them. Seeing something like that puts a burden on your faith. How can there be a God when there are people who live like this. How could God let this happen. To that I say, I'm not totally sure. I don't know exactly why all this happens. What I do know is that the hold of sin is powerful and can keep people where they are, but the love of God is stronger and can lift up even the lowest souls. There is still hope. There is always hope. Hope for a better day. Hope that all of our suffering will soon disappear.",
      image: "Mexico15.jpg",
      imageSide: "left"
        },

        "On our way back we stopped at this little restaurant and had chicken tacos. What a weird feeling. From wandering the trails of lost, and meeting people at their absolute worst in the dirt and grime of trash hill, to tasty tacos with Mexican music playing aloud. Makes you feel a bit guilty but also fortunate. It's hard to see all that is happening and not be able to do a lot about it. And as much as we were helping, the effect felt minimal compared to the scale of it all. I guess the rest is up to the will of the people and the spirit of the Lord.",
        {
        text: "That night we went to Mexican church with amazing music and our paster ended up speaking the sermon. I can't remember exactly what the sermon was, but it was sure cool seeing the cultures mix and how church operates in a different country. Most of it was the same except for a few things. Apparently when it's someone's birthday, whoever's birthday it is in the church, everyone, and I mean EVERYONE must hug the birthday person. So there we were. All lined up to hug a Mexican I have never met in a church I've never been, in a country mostly foreign to me. But at that moment I felt at home. I felt welcome. For the church of Christ doesn't hold strangers, rather brothers and sisters of the one true father. And I felt at home.",
        image: "Church.jpg",
        imageSide: "right"

        },
        {
        text: "Next day was the last day in Mexico. The day we were finishing the house and presenting it to the family. Most of what we did was finish furnishing the inside and finishing the paint job. Once completed we called over the family into their new home and the look on their faces were priceless. Absolute joy and thankfulness about getting this tiny little home. A home in the middle of the Mexican desert with no air conditioning and no comforts and a nothing but a port a potty in the back behind the house. To see their reaction and to see how happy the kids were was surreal. Another thing I will NEVER forget. After that we prayed for them and the house, packed up all the equipment and went on our way. Such a strange feeling. The whole trip was a strange feeling. A trip filled with ups and downs, reality checks, perspective changes, and general appreciation for how good we truly have it.",
        image: "Mexico7.jpg",
        imageSide: "left"
        },
        {
       text: "On the way back it took a while to get through the border and when going through security my buddies were acting way to slack especially around joking about certain laws which definitely could have gotten them in trouble. It was way harder to get into Mexico than to get it out which I guess makes sense.",
       image: "Mexico9.jpg",
       imageSide: "right"

        },
        {
        text: "Once we got through, we bused all the way to San Diego for the day and since I was older of the bunch, I was able to explore the city on my own. I started at chick file because I had never gone their prior and wanted to see what all the hype was about. Other than really good service, there wasn't really anything special about it. I like to travel a little differently than most who were there with me. Since we were only in San Diego for a day, I figured I do something only San Diego would offer. In this case I chose to do the USS Midway museum. This museum took place on the USS Midway aircraft carrier and was able to explore every level and every room of it. With exhibits in every room and many cool planes from World War 2 and the Vietnam war. Very cool place a definitely recommend for anyone going to San Diego. So, who did I go with. Me, myself, and I. While I was going to the museum everyone else went to the beach. Fair enough. It is California after all who would want to go to a stuffy museum. Me, I guess. To be fair if I pitched it a little better more people probably would have come. All I really said was that I was going to a museum which could look completely different in people's minds.",
        image: "USS.jpg",
        imageSide: "left",
        links: [
          { text: "USS Midway Museum", url: "https://www.midway.org/" }
        ]

        },
        
        "That night was spent with my buddy's late night going to the store and getting some food for the hotel room. We watched some movies and hung out till late, and when the sun rose, so did we. Back to the airport we went, and onto the plane that took us home. The trip had come to an end.",
       
        {
        text: "Before I let you guys go, I just want to say to anyone considering going on a mission trip or people who haven't thought about it I would highly recommend it. It was an amazing experience. One I will never forget. One that changes your perspective and gives you a further appreciation of our lives and where we live.",
         image: "Mexico17.jpg",
        imageSide: "right"
        },
        "THE END"
      ]
    },
  ],

  // ========================================================================
  // SECTION 6 — GALLERY PHOTOS
  // ========================================================================
  // Add one object per photo. `image` is the file path or shortcut.
  // `caption` appears on the photo and underneath it when enlarged.
  photos: [
    { image: "airport.jpg", caption: "Twilight at the Airport" },
    { image: "alb.jpg", caption: "Mountain River in the Alps" },
    { image: "alber.jpg", caption: "A Rocky Mountain Stream" },
    { image: "arizona.jpg", caption: "Evening in Arizona" },
    { image: "arizona2.jpg", caption: "An Arizona Road Trip" },
    { image: "arizona3.jpg", caption: "Arizona from the Wing" },
    { image: "austria.jpg", caption: "A Walk Along the Water in Austria" },
    { image: "baseball.jpg", caption: "A Night at the Ballpark" },
    { image: "beer.jpg", caption: "A Busy Night at the Festival" },
    { image: "bridge.jpg", caption: "Sunset from the Bridge" },
    { image: "bridge2.jpg", caption: "A Walk Across the Suspension Bridge" },
    { image: "Caleb.jpg", caption: "A Flight with Caleb" },
    { image: "car.jpg", caption: "A Stop Along the Way" },
    { image: "cars.jpg", caption: "A Quiet Moment on the Car" },
    { image: "castle.jpg", caption: "A Day at the Castle" },
    { image: "Cheam.jpg", caption: "Driving Toward Mount Cheam" },
    { image: "cheam2.jpg", caption: "A View from the Summit" },
    { image: "cheam3.jpg", caption: "Hiking the Cheam Range" },
    { image: "cheam3.png", caption: "Out on the Mountain Ridge" },
    { image: "church..jpg", caption: "A Rocky View with Friends" },
    { image: "cruise.jpg", caption: "Dinner on the Cruise" },
    { image: "day mexico.jpg", caption: "A Sunny Day in Mexico" },
    { image: "dessert.jpg", caption: "A Desert View from Above" },
    { image: "diego.jpg", caption: "A Waterfront View of San Diego" },
    { image: "ed.jpg", caption: "A Shopping Stop" },
    { image: "fall.jpg", caption: "A Waterfall in the Forest" },
    { image: "falls.jpg", caption: "A Fall Day by the Car" },
    { image: "Final.jpg", caption: "Farmland from the Cockpit" },
    { image: "Finalside.jpg", caption: "Fields Below the Wing" },
    { image: "fire.jpg", caption: "New Growth After the Fire" },
    { image: "fire2.jpg", caption: "Stories Around the Campfire" },
    { image: "fish1.png", caption: "A Big Catch on the River" },
    { image: "fish2.png", caption: "Sharing the Catch" },
    { image: "fly.jpg", caption: "A Mountain Flight" },
    { image: "friends.jpg", caption: "A Night Out with Friends" },
    { image: "germany.jpg", caption: "Munich by Night" },
    { image: "giggle.jpg", caption: "A Summer Afternoon at the Fair" },
    { image: "grad1.jpg", caption: "Celebrating Graduation" },
    { image: "Harrison.jpg", caption: "Flying Over the Coast Mountains" },
    { image: "hawaii.jpg", caption: "Waves Along the Hawaiian Coast" },
    { image: "hawaii2.jpg", caption: "A View Across the Hawaiian Coast" },
    { image: "hawaii3.jpg", caption: "The Rocky Shores of Hawaii" },
    { image: "hawaiirainbow.jpg", caption: "A Rainbow over the Island" },
    { image: "hulk.jpg", caption: "A Surprise Encounter at the Store" },
    { image: "jayz.jpg", caption: "A Late Night with Friends" },
    { image: "katz.jpg", caption: "A Stop at Katz's Delicatessen" },
    { image: "kayak.jpg", caption: "Kayaking through the Forest" },
    { image: "kayak2.jpg", caption: "Paddling into the Sunset" },
    { image: "lake.jpg", caption: "A Mountain Lake" },
    { image: "lake2.jpg", caption: "Still Water beneath the Mountains" },
    { image: "lakee.jpg", caption: "A Lake in the Coast Mountains" },
    { image: "mall.jpg", caption: "A Colourful Evening Sky" },
    { image: "mason.jpg", caption: "A Silly Moment with Mason" },
    { image: "mexico.jpg", caption: "Under the Arch in Mexico" },
    { image: "mexico2.jpg", caption: "Lunch with Friends in Mexico" },
    { image: "mist.jpg", caption: "A Forest Lost in the Mist" },
    { image: "mog.jpg", caption: "A Night of Live Music" },
    { image: "Mountains.jpg", caption: "A View from the Air" },
    { image: "newyork.jpg", caption: "A Green Escape in New York" },
    { image: "newyorknight.jpg", caption: "Rainy Night in Times Square" },
    { image: "nightflight.jpg", caption: "City Lights from Above" },
    { image: "nightflight2.jpg", caption: "A City Glowing after Dark" },
    { image: "nightflight3.jpg", caption: "An Aerial View of the City at Night" },
    { image: "nightflight4.jpg", caption: "The City and Harbour after Dark" },
    { image: "nightmexico.jpg", caption: "The Mexican Coast at Night" },
    { image: "north.jpg", caption: "Northern Lights over the Mountains" },
    { image: "north2.jpg", caption: "A Sky Full of Northern Lights" },
    { image: "north3.jpg", caption: "Aurora over the Horizon" },
    { image: "ocean.jpg", caption: "A Quiet Stretch of Ocean Shore" },
    { image: "pemberton.jpg", caption: "A Mountain Runway in Pemberton" },
    { image: "plane.jpg", caption: "A Plane Waiting at the Gate" },
    { image: "pokemon.jpg", caption: "A Playful Stop on the Trip" },
    { image: "quintin.jpg", caption: "A Day by the Water" },
    { image: "river2.jpg", caption: "A River Journey through the Valley" },
    { image: "Road.png", caption: "The Open Road Ahead" },
    { image: "roadagain.jpg", caption: "An Arizona Highway" },
    { image: "salz.jpg", caption: "Walking the Streets of Salzburg" },
    { image: "salz2.jpg", caption: "A Rainy Afternoon in Salzburg" },
    { image: "san.jpg", caption: "Exploring the Harbour" },
    { image: "scry.jpg", caption: "A Misty Morning by the Water" },
    { image: "seattle.jpg", caption: "The Road into Seattle" },
    { image: "side.jpg", caption: "The Long Way Home" },
    { image: "sidess.jpg", caption: "A Peaceful Coastal Shore" },
    { image: "singapore.jpg", caption: "A View across Singapore Harbour" },
    { image: "ski.jpg", caption: "A Winter Day on the Mountain" },
    { image: "sky.jpg", caption: "Sunset Colours in the Sky" },
    { image: "snowy.jpg", caption: "Snow-Capped Peaks from the Air" },
    { image: "sunrise.jpg", caption: "Sunrise from the Cockpit" },
    { image: "sunrisecar.jpg", caption: "First Light on the Road" },
    { image: "sunset.jpg", caption: "Sunset over the Water" },
    { image: "Sunset1.jpg", caption: "The Last Light over the Mountains" },
    { image: "sunset2.jpg", caption: "Golden Hour in the Valley" },
    { image: "tennis.jpg", caption: "A Sunny Afternoon by the Pool" },
    { image: "train.jpg", caption: "A View from the Train" },
    { image: "trees.jpg", caption: "Looking Up through the Trees" },
    { image: "trees2.jpg", caption: "A Misty Walk in the Woods" },
    { image: "truck.png", caption: "A Truck beside the River" },
    { image: "valentine.jpg", caption: "A Bright Night Out" },
    { image: "van.jpg", caption: "Vancouver from the Air" },
    { image: "vanpokemon.jpg", caption: "A City Stop with Friends" },
    { image: "vans.jpg", caption: "The Vancouver Waterfront" },
    { image: "vanside.jpg", caption: "A Rocky Shore near Vancouver" },
    { image: "wistler.jpg", caption: "A Forest Walk in Whistler" },
    { image: "wistler2.jpg", caption: "An Evening in Whistler" },
    { image: "worldcup.jpg", caption: "Vancouver's Waterfront on Game Day" },
    { image: "zip.png", caption: "A Zipline Adventure with Friends" },
    { image: "whist.png", caption: "A Zipline Adventure with Friends" }
  ],

  // ========================================================================
  // SECTION 7 — DIGI-CAM PHOTOS (THE DIGI FILES)
  // ========================================================================
  // Add photos here to show them in Gallery > Digi-Cams, separately from
  // the regular Gallery > Photos. Use filenames from assets/gallery/.
  digiPhotos: [
    { image: "D1.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D2.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D3.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D4.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D5.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D6.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D7.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D8.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D9.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D10.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D11.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D12.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D13.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D14.JPG", caption: "A Zipline Adventure with Friends" },
    { image: "D15.JPG", caption: "A Zipline Adventure with Friends" }
  ],


  // ========================================================================
  // SECTION 8 — OH, THE PLACES YOU'LL GO
  // ========================================================================
  places: [
    { name: "Banff, Alberta", label: "Quiet, yet breathtaking", image: "alberta.jpg", description: "Want a relaxing getaway located between mountains and rivers, with rich history, and a cozy small town vibe? Banff, Alberta might be the perfect choice for your next trip.", mapLink: "https://www.banfflakelouise.com/", journalId: "postcards-from-coast" },
    { name: "Hawaii (The Big Island)", label: "Many a volcanoes", image: "hawaii2.jpg", description: "The Best choice if you want great hikes, lots of towns, and massive volcanoes.", mapLink: "https://www.gohawaii.com/islands/hawaii-big-island" , journalId: "the-long-way"},
    { name: "Oahu, Hawaii", label: "City life meets naturous island", image: "oahu.jpg", description: "The Best choice if you want a bit more of an urban vibe mixed with coastline and beautiful beaches.", mapLink: "https://www.gohawaii.com/islands/oahu", journalId: "the-long-way" },
    { name: "Maui, Hawaii", label: "The Honeymoons Paridise", image: "maui.jpg", description: "The best choice for honeymooners or just a relaxing getaway.", mapLink: "https://www.gohawaii.com/islands/maui" , journalId: "the-long-way"},
    { name: "Kauai, Hawaii", label: "The 'Wild Island'", image: "kauai.webp", description: "The best choice if you want a raw hawaiian experience and see where they filmed 'Jurassic Park'.", mapLink: "https://www.gohawaii.com/islands/kauai", journalId: "the-long-way" },
  ],
  // Add places you personally hope to visit. Entries use the same format as `places`.
  bucketList: [
    // { name: "A place to visit", label: "SOMEDAY SOON", photos: ["destination.jpg"], description: "Why I want to go.", mapLinks: [{ label: "EXPLORE THE MAP", url: "https://www.google.com/maps/search/?api=1&query=destination" }] },
  ],

  // ========================================================================
  // SECTION 9 — MUSIC TO PAIR WITH A LONG DRIVE
  // ========================================================================
  // Add a song with { title, artist, note, link }.
  // Spotify search links work well if you don't have the exact song link.
  music: {
    introTitle: "For on and off the",
    introAccent: "road.",
    introText: "Whether your driving down a coastline or flying above the clouds, put any of these on and make your travels just a little bit more interesting.",
    playlistLink: "https://open.spotify.com/playlist/2NHK9azpf5pZhVJOJPqQdH?si=6ab34efb8bf049b6",
    playlistEmbed: "https://open.spotify.com/embed/playlist/2NHK9azpf5pZhVJOJPqQdH?si=6ab34efb8bf049b6",
    songs: [
      { title: "Lover's Rock", artist: "TV Girl", note: "Light's out banger", link: "https://open.spotify.com/track/6dBUzqjtbnIa1TwYbyw5CM?si=676dd377e24343ee" },
      { title: "Orinoco Flow", artist: "Enya", note: "Travel Flow State", link: "https://open.spotify.com/track/14EUcXXpqrC03Dzzdj8bGr?si=e5bce310f109484c" },
      { title: "Everybody Wants to Rule the World", artist: "Tears for Fears", note: "Into the sunset", link: "https://open.spotify.com/track/5Pn31029748v9X6dJ8Z1QZ?si=1234567890" },
      { title: "Ocean Man", artist: "Ween", note: "Up the coast", link: "https://open.spotify.com/track/6M14BiCN00nOsba4JaYsHW?si=97357b7cf60f49cb" },
      { title: "Beyond The Sea", artist: "Bobby Darin", note: "Travel back in time", link: "https://open.spotify.com/track/3KzgdYUlqV6TOG7JCmx2Wg?si=97f22f8087674301" },
      { title: "The Shire", artist: "Howard Shore", note: "Off the beaten path", link: "https://open.spotify.com/track/6zW80jVqLtgSF1yCtGHiiD?si=9089cbfcc5b44339" },
      { title: "Baby Driver", artist: "Simon & Garfunkel", note: "back country", link: "https://open.spotify.com/track/0si76EE5TVUriyT02srhrd?si=0af57e7b75034168" }
    ]
  },

  // ========================================================================
  // SECTION 10 — ABOUT ME PAGE
  // ========================================================================
  about: {
    photo: "cars",
    smallHeading: "WHO AM I?",
    title: "My name is Caleb. Also known as...",
    titleAccent: "The Wandering Soul ⌖ .",
    paragraphs: [
      "Hello to those who are reading this. My name is Caleb. I grew up in a small town called Chilliwack in the province of British Columbia, Canada.",
      "I am currently training to be a pilot and have alot of passions like music, photography, travelling, yoyoing, vdeogames and more. Ive always wanted to see the world in it's entirety and document all of what I find.",
      "I am also a follower of Christ and try to live my life that like Jesus. That fact is kind of what runs how I live my life.",
      "My goal in life is to live simply. I want to effect people with kindness and help where I can. Kind of like one of my favorite fictional characters from the book and movie series, The lord of the rings. Samwise Gamgee. He was always a bit shy and was clumsy at times, but he was always kind and willing to help and be there for his friends. And when his friend Frodo fell down halfway up morder, he didn't just give up. He carried Frodo and the ring to the peak of the mountain to save middle earth. Even though he was scared. Even though he was mearly a hobbit. He pushed back evil and persevered. I want to be like that.",
      "Like Sam.",
    ],
    quote: `"There's some good in this world, Mr. Frodo, and it's worth fighting for." - Samwise Gamgee`,
    ending: "Well, that's it for now from me. Now of course there's more about me but I can't give it all away of course. So i'll leave that up to the stories from my advenures to tell the rest.",
    signature: "That's all folks. Time for the road. From Caleb, The Wandering Soul."
  },

  // ========================================================================
  // SECTION 11 — BOTTOM CONTACT PANEL
  // ========================================================================
  contact: {
    smallHeading: "thewanderingsoul",
    title: "Tell me about your",
    titleAccent: "travels.",
    message: "I'd love to hear your story."
  }
};
