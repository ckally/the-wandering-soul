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
      `I tell you truth. Adventure, or more importantly the pursuit of such, is more of a state of mind. An allowance for chaos and the ability to adapt. Adventure is seeking discovery and experience while paying the price of comfort and convenience.`,
      `The road of adventure is NOT so straight and traught. Rather the opposite. The road of adventure often displays signs of decay. It has many potholes, and turns and is often the least traughten path of them all. But that! That, is the key of adventure. Taking the path that most scares and excites you for the purpose of experience, building of character, wisdom, and for the tales and stories that will be told for millenia.`,
      `Not sure if your up for it? If your on the fence ask yourself this one question.`,
      `"If I don't do this, will I regret it?". It's that simple.`,
      `The world is filled with people who are too afraid to make the first step and regret it in their days of old. Don't be like those people. Be you. Be an Adventurer, an explorer, a Wandering Soul, if you will.`,
      `Look. If I'm being honest, I am like those people of whom I speak of.`,
      `Scared.`,
      `Afraid.`,
      `Nervous.`,
      `Wondering if I should or shouldn't do something simply because it scares me. But I am always reminded of the quote that was written, and placed in the end credits of one of the most adventurous and influential game of all time. Minecraft. And it goes like this...`,
      `"Twenty years from now, you will be more disappointed with the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover." - Unknown.`,
      `This will now, and will always be one of the quotes I live my life by, and I hope you do the same.`,
      `The path of Adventure or more importantly, the mindset of such, will allow you to experience life in a way you never done thus far. See things you never thought you'd see, and do the things you never thought you'd do.`,
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
    { title: "Oh, the Places You’ll Go", subtitle: "consider these for your next adventure", image: "salz2", page: "places" },
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
      titleAccent: "You’ll Go.",
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

"After about 6 hours we got to the site where we picked up a trailer and continued the journey to our destination. Banff, Alberta, and my goodness was it cool. Away from cities, away from sirens, away from distractions, the silence was loud. That was the first thing I noticed when we arrived. Among other things, the beauty of it all took my breath away as we set everything up at our site which was located in the middle of the valley. ", 
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

 "Fast forward to lunch time of the second day we had a combination of hotdogs, apples, bean, and oh ya the have sweat and sour pork, I remember I bought. So I decided to cook and heat it up on the grill. While we were cooking the food I got distracted doing something and forgot my pork was cooking. Luckily my mom found it and told me it was burning. I opened the grill and it was only burnt a little bit. Phef! My food was okay. I then plated it and sat down to eat and took my first bite. Now I don't know whether it was the fact that it was already cooked 2 days ago and I was re cooking it, or that it was sitting in the truck for 5 hours, or that I burned it, or a combination of all 3 but whatever the case, it was TERRIBLE. It tasted like burnt toe with a hint of pork. Anyways I ended up eating most of it.", 

 " Looking back now I can't remember exactly why I ate most of it but this one decision would later haunt me as that night was spend between my bedside with the feeling of a bomb in my stomach, and the outhouse with me igniting said bomb and dropping it on Hiroshima, or in my case the sewage catch. It was a horrible experience but one I won't ever forget. Especially not now since I've documented it.", 
{
  text: "Next morning I surprisingly felt way better. The war was finally over. That morning was spent not in my bed but setting out to for a hike that was pretty difficult around Picklejar lake. Another really cool lake, not as blue but the hike made up for it as the challenge it took to get there made it worth it. You had to essentially hike down a steep face to get down to the lake and hike up the way out. The way out was much harder but to the surprise of myself and my mom was my, at the time 57-year-old dad; I kid you not running up the steep zig zag trail. I guess all that trail running really paid off. ", 
  links: [
    { text: "Picklejar Lake", url: "https://hikebiketravel.com/the-pickle-jar-lakes-hike-in-kananaskis-country/" }
  ]
},
 " The funny part is he had a bell attached to his bag which he said had something about bear protection but seems to me like he just attached a beer signal to his bag that told every bear in the area exactly where dinner would be. Anyways, it was funny because as he ran up it jingled in a way that made him sound like Rudolph running which had me and my mom giggling.", 

 " Apon reaching the peak again, which is where we started, we headed for the car and planned to head into town for dinner. The town of banff was a very cozy looking town with sleepy town vibes but in a good way. It has a certain charm to it. Unfortunately, I can't remember where we stopped for dinner, but it was probably pretty good.", 
{
  text: " The next stop on our list that day was a place called Mistya Canyon. Now this place was very interesting to say the least. Incredible rock formations, with fast flowing water flowing through, endless trails around to see the area in every which way, and unpredictable terrain that climbed and descended as it pleased. A very cool spot. Definitely worth the stop if your in the area. Soon after the sun started to fall ahead the earth and we headed back to our campsite.", 
  image: "alber.jpg",
  imageSide: "right",
  links: [ 
    { text: "Mistaya Canyon", url: "https://www.banfflakelouise.com/experiences/mistaya-canyon" }
  ]
},
 "That night we ended up watching Starwars: The Empire Strikes Back. Classic, once again. Unfortunately for us it was our last day in Banff but NOT the last day of our trip. ",  
{
  text: "On our way back home we stayed at this cabin located near Enderby, BC. Another small town of many in British Columbia. Here we spend a few more days in the back country enjoying the sun, floating around at the Enderby river float, which is a slow river many people tube down.",  
  image: "wayback.jpg",
  imageSide: "left",
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
      title: "Always Take the Long Way",
      date: "TRAVEL JOURNAL / 02",
      place: "On the road",
      image: "road",
      summary: "For scenic detours, unexpected stops, and the roads that change our plans for the better.",
      opening: "The best adventures rarely happen in a perfectly straight line.",
      paragraphs: [
        "A wrong turn can become a beautiful story. A spontaneous stop can turn into the part of a trip you talk about for years.",
        "There is something freeing about watching the scenery change beyond the car window, with good music playing and no real need to hurry. The destination matters, of course. But so does everything between here and there.",
        "Every journey has its own rhythm. Some call for early starts and ambitious plans; others need nothing more than a full tank, a good playlist, and curiosity."
      ],
      closing: "May we always leave a little room for the unexpected."
    }
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
    { name: "The Mountains", label: "FOR THE WILD AT HEART", image: "mountain", description: "For crisp morning air, winding trails, and the kind of views that make everything else go quiet.", mapLink: "https://www.google.com/maps/search/?api=1&query=mountain+destinations" },
    { name: "By the Sea", label: "FOR THE SLOW AFTERNOONS", image: "coast", description: "For salty hair, long lunches, little coastal streets, and sunsets you wish could last forever.", mapLink: "https://www.google.com/maps/search/?api=1&query=coastal+destinations" },
    { name: "Lakeside", label: "FOR THE PEACEFUL MOMENTS", image: "alpine", description: "For still water, good books, an open view, and the simple pleasure of doing nothing at all.", mapLink: "https://www.google.com/maps/search/?api=1&query=beautiful+lakes" }
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
