# The Wandering Soul — Your Editing Guide

This guide is written for someone who is new to coding. You can use **VS Code**, **Notepad++**, or another plain-text editor.

## 1. Which files should I open?

| What you want to change | File |
|---|---|
| Add or edit a journal / daily story | **`content.js` → SECTION 5** |
| Add or replace gallery photos | **`content.js` → SECTION 6** |
| Add YouTube, Vimeo or MP4 videos | **`content.js` → SECTION 7** |
| Add favourite locations and map links | **`content.js` → SECTION 8** |
| Change songs and Spotify playlist | **`content.js` → SECTION 9** |
| Edit About Me | **`content.js` → SECTION 10** |
| Change your email or contact wording | **`content.js` → SECTIONS 1 and 11** |
| Change homepage wording or the four photo links | **`content.js` → SECTION 3** |
| Change background colours or title font | **`customize.css`** |
| Reorder the menu | **`index.html` → SECTION B** |

The `app.js` file displays the data. It's already commented, but you shouldn't need to touch it for ordinary updates.

## 2. Your first edit

1. Make a **backup copy** of the whole `dist` folder.
2. Open the `dist` folder in VS Code using **File → Open Folder**. In Notepad++, open `content.js` directly.
3. Find `SECTION 3 — HOME PAGE WORDING` in `content.js`.
4. Change the text inside `lead: "..."` to a sentence of your own. Keep both quotation marks and the comma.
5. Save with **Ctrl+S** (Windows) or **Cmd+S** (Mac).
6. Open `index.html` in a browser and refresh to see it.

**Tip:** Use a Live Server extension in VS Code if your browser blocks local images or video previews. You can also open a terminal inside `dist` and run `python -m http.server 8000`, then visit `http://localhost:8000`.

## 3. Add a new journal entry

Find `SECTION 5 — JOURNAL ENTRIES` in `content.js`.

Copy one complete journal object `{ ... }` inside the `journals: [ ... ]` list. Paste it before the final closing `]`, with a comma separating it from the item before it. Change the values.

Here is a fresh example:

```js
{
  id: "my-first-maui-trip",
  section: "On the Road",
  title: "A Week in Maui",
  date: "OCTOBER 2026",
  place: "Maui, Hawaii",
  image: "maui-beach.jpg",
  summary: "A short teaser that appears on the journal card.",
  opening: "The first paragraph in a slightly larger font.",
  paragraphs: [
    "This is my first full paragraph about the trip.",
    "This is my second paragraph. Add as many as you like.",
    "And a third paragraph with another memory."
  ],
  closing: "A final thought to end the story."
},
```

Important things to remember:

- `id` must be unique for each post. Use lowercase letters, numbers, and hyphens only. It becomes the post's link.
- `section` must say **`"On the Road"`** or **`"The Day to Day"`** exactly.
- `image` can be a filename in `assets/gallery/` (for example `"maui-beach.jpg"`) or an image shortcut such as `"coast"`.
- A comma belongs between journal blocks. You can leave a comma after the last item, too.
- Do not remove the opening and closing square brackets around the full list.

To remove a sample journal, delete that whole `{ ... }` object and keep the list's commas correct.

## 4. Add your own photos

1. Open `dist/assets/gallery/`. This one folder holds both your photos and video files.
2. Copy your photo into that folder. Give it a simple name, e.g. `maui-sunset.jpg`.
3. In `content.js` → `SECTION 6`, add a line to `photos: [ ... ]`:

```js
{ image: "maui-sunset.jpg", caption: "Sunset in Maui" },
```

To use a photo as a journal cover, paste that same filename into the journal's `image` field.

To change one of the four homepage photos, edit the `image` value inside `homeCards` in SECTION 3. You can use `"my-photo.jpg"` there too.

**Important:** Copying a file into the folder does not display it by itself. Add its filename to `photos: [ ... ]` in `content.js` to show it in the Gallery. You choose its caption and order there. You can use the same file in multiple parts of the site without copying it again.

**Photo tips:** Keep filenames short and consistent. `.jpg`, `.png`, and `.webp` work well. Compress large photos to keep the website fast; around 200–500 KB per photo is a useful starting target, though wide hero photos may need more.

## 5. Add a video to Gallery → Videos

Find `SECTION 7 — GALLERY VIDEOS` in `content.js`. The list is empty by default. Add this inside `videos: [ ... ]`:

```js
{
  title: "Driving the Sea-to-Sky Highway",
  url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  description: "A few clips from the road."
},
```

Replace `YOUR_VIDEO_ID` with the actual link from your YouTube video. Ordinary YouTube links, YouTube Shorts, Vimeo links, and direct `.mp4` video files are supported. For your own MP4, copy it into `dist/assets/gallery/` and use:

```js
{ title: "My Road Trip", url: "road-trip.mp4" },
```

Once at least one video exists, the Videos tab automatically switches from the "Coming Soon" message to video cards.

## 6. Add a favourite location

Find `SECTION 8 — OH, THE PLACES YOU'LL GO`. Add a block like this to the `places` list:

```js
{
  name: "Kāʻanapali Beach",
  label: "SUNSET FAVOURITE",
  image: "kaanapali.jpg",
  description: "My favourite spot for an evening walk by the ocean.",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Kaanapali+Beach"
},
```

The page automatically makes another place card; no extra HTML is required.

## 7. Add a song or change the Spotify playlist

Find `SECTION 9 — MUSIC` in `content.js`.

Inside the `songs: [ ... ]` list, add:

```js
{
  title: "Your Song Title",
  artist: "Artist Name",
  note: "Perfect for sunset drives",
  link: "https://open.spotify.com/search/Your%20Song%20Title"
},
```

The song count updates automatically. To replace the large Spotify player, change **both** `playlistLink` and `playlistEmbed` to your playlist's corresponding URLs. Spotify's Share → Embed Playlist option provides an embed URL.

## 8. Change the look of the site

Open `customize.css` and locate the variables at the very top:

```css
--bg: #202925;       /* Main dark-green background */
--accent: #d1ac7c;   /* Antique-gold highlights */
--cream: #f1ecdf;    /* Main text */
```

Only change the HEX code to try another colour. The existing Times New Roman title font is configured just below those settings.

The delicate compass, airplane, journal, and Cobalt line drawings are separate `.svg` files. Their positioning and transparency live in `compass.css` and `manuscript.css`, which are more advanced styling files.

## 9. About Me, contact details and other wording

- `content.js` SECTION 10 has your About Me paragraphs, image, quote, and signature.
- SECTION 1 has your email address. Both Contact Me buttons use it automatically.
- SECTION 11 has the bottom contact panel wording.
- SECTION 4 has the titles and introductory text for every main page.
- SECTION 3 has all home-page text and the four photo links.

## 10. If something suddenly stops displaying

Most beginner errors come from a missing comma, a missing quote, or a missing `}` / `]`.

1. Undo the last change (**Ctrl+Z**) and save again.
2. Check that each object has its opening `{` and closing `}`.
3. Check that entries inside an array `[ ... ]` are separated by commas.
4. In VS Code, red squiggles in `content.js` often point right to the problem.
5. Open your browser's developer console (**F12 → Console**) if the page is blank.

## 11. How to publish your changes

Editing files on your computer changes only your **local copy**. It does **not** automatically update the live ChatGPT Site.

- For previewing, open `dist/index.html` or use VS Code Live Server.
- To update the existing hosted Site, commit and sync the source through the supported Sites workflow, or bring the edited files back into ChatGPT and ask to publish them to **The Wandering Soul**.
- The public-facing website files are all inside `dist`, so this folder can also be hosted on conventional static hosting services.

**You do not need to install npm, React, or a database for normal editing.**
