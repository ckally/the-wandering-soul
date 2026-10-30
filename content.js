/* ============================================================================
   THE WANDERING SOUL — YOUR CONTENT EDITOR
   ============================================================================

   START HERE! This is the main file to edit in VS Code or Notepad++.

   1. Change text between quotation marks to update the website.
   2. Add new items by copying an existing { ... } block.
   3. Keep commas between items in a list.
   4. Put your own pictures and videos in assets/gallery/.
      Then use only their filename: "my-maui-sunset.jpg" or "road-trip.mp4".
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
    sunset: "Road.png",
    Caleb: "caleb.jpg"
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
      `The road of adventure however, is not so straight and traught. Rather the opposite. The road of adventure often displays signs of decay. It has many potholes, and turns and is often the least traughten path of them all. But that! That, is the key of adventure. Taking the path that most scares you for the purpose of experience, building of character, wisdom, and for the tales and stories that will be told for millenia.`,
      `And it's different for everyone, of what that adventure is. To some, it's skydiving, to others it going on a plane, or even leaving the country. The easiest way to tell if an adventure is worth doing, is to ask your self this question.`,
      `"If I don't do this, will I regret it?". It's that simple.`,
      `The world is filled with people who are too afraid to make the first step and regret it in their days of old. Don't be like those people. Be you. Be an Adventurer, an explorer, a Wandering Soul, if you will.`,
      `Look. If were being honest, I am like those people of whom I speak of.`,
      `Scared.`,
      `Afraid.`,
      `Nervous.`,
      `Wondering if I should or shouldn't do something simply because it scares me. But I am always reminded of the quote that was written, and placed in the end credits of one of the most adventurous and influential game of all time. Minecraft. And it goes like this...`,
      `"Twenty years from now, you will be more disappointed with the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover." - Unknown.`,
      `This will now, and will always be the quote I live my life by, and I hope you do the same.`,
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
    { title: "Travels", subtitle: "The stories along the way", image: "hill", page: "travels" },
    { title: "Oh, the Places You’ll Go", subtitle: "Places that stay with me", image: "coast", page: "places" },
    { title: "About Me", subtitle: "The soul behind the stories", image: "lake", page: "about" },
    { title: "Gallery", subtitle: "Little moments in frames", image: "mountain", page: "gallery" }
  ],

  // ========================================================================
  // SECTION 4 — PAGE HEADINGS AND INTRODUCTIONS
  // ========================================================================
  pages: {
    travels: {
      smallHeading: "FROM PAPER TO PAGES",
      title: "Caleb's",
      titleAccent: "Journal.",
      description: "Stories long and short from 2024 and beyond."
    },
    places: {
      smallHeading: "Ideas for your next adventure",
      title: "Oh, the Places",
      titleAccent: "You’ll Go.",
      description: "You never know where you might go if you just step out the door."
    },
    gallery: {
      smallHeading: "Photos and Videos from the road",
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
  //   - Put each paragraph in its own quoted line inside paragraphs: [ ... ].
  //   - image can be an image shortcut (like "coast") or your photo path.
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
      title: "Postcards from the Coast",
      date: "TRAVEL JOURNAL / 01",
      place: "Along the coast",
      image: "coast",
      summary: "Winding streets, salty breezes, and afternoons that seemed to stretch on forever.",
      opening: "Some places make time feel wonderfully unimportant.",
      paragraphs: [
        "I love arriving somewhere by the sea and immediately losing all interest in the clock. Every narrow street promises another view, every café seems worth stopping for, and the ocean is never far away.",
        "We followed whichever path looked interesting, lingered over lunch, and watched the light change across the water. These were not grand adventures. They were better: small, ordinary moments in a place that made them feel extraordinary.",
        "I took photographs to remember the colours, but what I really wish I could bottle is the feeling of having nowhere else to be."
      ],
      closing: "A little postcard to the places that make us slow down."
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
    { image: "mountain",  },
    { image: "coast", },
    { image: "water", },
    { image: "italy",  },
    { image: "forest", },
    { image: "alpine",  },
    { image: "details",  },
    { image: "lake",  }
  ],

  // ========================================================================
  // SECTION 7 — GALLERY VIDEOS
  // ========================================================================
  // Paste a normal YouTube link, a YouTube embed link, a Vimeo link, or
  // a direct .mp4 file path. The website builds the video player for you.
  // Example (remove the // from each line to activate it):
  // { title: "My First Road Trip", url: "https://www.youtube.com/watch?v=VIDEO_ID" },
  videos: [
    // Add video entries here. An empty list shows "Coming Soon".
  ],

  // ========================================================================
  // SECTION 8 — OH, THE PLACES YOU'LL GO
  // ========================================================================
  places: [
    { name: "The Mountains", label: "FOR THE WILD AT HEART", image: "mountain", description: "For crisp morning air, winding trails, and the kind of views that make everything else go quiet.", mapLink: "https://www.google.com/maps/search/?api=1&query=mountain+destinations" },
    { name: "By the Sea", label: "FOR THE SLOW AFTERNOONS", image: "coast", description: "For salty hair, long lunches, little coastal streets, and sunsets you wish could last forever.", mapLink: "https://www.google.com/maps/search/?api=1&query=coastal+destinations" },
    { name: "Lakeside", label: "FOR THE PEACEFUL MOMENTS", image: "alpine", description: "For still water, good books, an open view, and the simple pleasure of doing nothing at all.", mapLink: "https://www.google.com/maps/search/?api=1&query=beautiful+lakes" }
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
    playlistLink: "https://open.spotify.com/playlist/2NHK9azpf5pZhVJOJPqQdH?si=bf87607d31704af3",
    playlistEmbed: "https://open.spotify.com/embed/playlist/2NHK9azpf5pZhVJOJPqQdH?si=bf87607d31704af3",
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
    photo: "Caleb",
    smallHeading: "WHO AM I?",
    title: "My name is Caleb. Also known as...",
    titleAccent: "The Wandering Soul ⌖ .",
    paragraphs: [
      "Hello to those who are reading this. My name is Caleb. I grew up in a small town called Chilliwack in the province of British Columbia, Canada.",
      "I have alot of passions like flying, music, photography, travelling, and more. Ive always wanted to see the world in it's entirety and all of the beauty it holds.",
      "I am also a follower of Christ and try to live my life that like Jesus. Other general hobbies includes videogames like Destiny 2 and league of legends, Skiing, Golfing, yoyoing, and more I probably missed.",
      "My goal in life is to live small. I want to effect people with kindness and help where I can. Kind of like one of my favorite fictional characters from the book series and movies. The lord of the rings. His name is Samwise Gamgee. He was a simple hobbit who lived a simple life, but he was always willing to help and be there for his friends. I want to be like that.",
      "One of my favorite quotes is from a game I used to play called Minecraft. It goes like this: "
    ],
    quote: `"Twenty years from now, you will be more disappointed with the things you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbour. Catch the trade winds in your sails. Explore. Dream. Discover." - Unknown.`,
    ending: "A great quote from a great game. Now of course there's more about me but I can't give it all away of course. So i'll leave that up to the stories from my advenures.",
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
