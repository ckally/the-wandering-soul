/* ============================================================================
   THE WANDERING SOUL — WEBSITE DISPLAY CODE
   ============================================================================

   Beginner tip: You normally DO NOT need to edit this file.
   Edit content.js for journals, photos, videos, places, music and wording.
   Edit settings.css for colours and typography.

   This file turns your content into the visible pages of the website.
*/

// --------------------------------------------------------------------------
// 1. SETUP & SMALL HELPERS
// --------------------------------------------------------------------------

const content = BLOG_CONTENT; // Reads the content.js file loaded before this one.
const app = document.getElementById("app");

let currentJournalTab = "On the Road";
let currentGalleryTab = "Photos";

// Keep special characters in your text from accidentally becoming HTML tags.
function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function renderHomeParagraph(text) {
  const phrase = escapeHTML("a Wandering Soul");
  return escapeHTML(text).replace(phrase, `<span class="home-highlight">${phrase}</span>`);
}

// Images can be shortcuts, links, paths, or just filenames in assets/gallery/.
function imageUrl(value) {
  const source = content.images[value] || value || "";
  if (!source) return "";
  if (/^(https?:\/\/|\/|\.\/|\.\.\/|assets\/|data:)/i.test(source)) return source;
  return `assets/gallery/${source}`;
}

function imageTag(source, description, extraClass = "") {
  return `<img src="${escapeHTML(imageUrl(source))}" alt="${escapeHTML(description)}" class="${escapeHTML(extraClass)}" loading="lazy">`;
}

function contactLink() {
  return `mailto:${content.site.email.trim()}?subject=Hello%20from%20The%20Wandering%20Soul`;
}

function pageHeader(page, journal = false) {
  return `
    <header class="page-hero interior-hero ${journal ? "journal-hero" : ""}">
      <div class="container">
        <span class="eyebrow">${escapeHTML(page.smallHeading)}</span>
        <h1>${escapeHTML(page.title)} <em>${escapeHTML(page.titleAccent)}</em></h1>
        <p>${escapeHTML(page.description)}</p>
      </div>
      <span class="decor" aria-hidden="true"></span>
    </header>
  `;
}

// --------------------------------------------------------------------------
// 2. HOME PAGE
// --------------------------------------------------------------------------

function renderHome() {
  const home = content.home;

  const cards = content.homeCards.map((card, index) => `
    <a href="#${escapeHTML(card.page)}" class="doorway-card">
      ${imageTag(card.image, card.title)}
      <span class="doorway-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="doorway-shade">
        <strong>${escapeHTML(card.title)}</strong>
        <small>${escapeHTML(card.subtitle)}</small>
        <b>EXPLORE ↗</b>
      </span>
    </a>
  `).join("");

  return `
    <!-- HOME INTRO / DECORATIVE ILLUSTRATIONS -->
    <section class="new-home-hero">
      <div class="home-ornament" aria-hidden="true"></div>
      <div class="home-aircraft" aria-hidden="true"></div>
      <div class="home-car" aria-hidden="true"></div>
      <div class="home-journal" aria-hidden="true"></div>

      <div class="home-intro">
        <span class="eyebrow">${escapeHTML(home.smallHeading)}</span>
        <h1>${escapeHTML(home.title)} <em>${escapeHTML(home.titleAccent)}</em></h1>
        <span class="home-rule"></span>
        <p class="home-lead">${escapeHTML(home.lead)}</p>
        ${home.paragraphs.map(text => `<p>${renderHomeParagraph(text)}</p>`).join("")}
        <div class="hero-signoff">${escapeHTML(home.signoff)} <span>⌖</span></div>
      </div>
      <div class="home-bottom-label">${escapeHTML(home.bottomCaption)}</div>
    </section>

    <!-- FOUR PHOTO LINKS AT THE BOTTOM OF HOME -->
    <section class="home-doorways">
      <div class="container">
        <div class="home-card-intro">
          <h2>${escapeHTML(home.photoLinksHeading)} <em>${escapeHTML(home.photoLinksAccent)}</em></h2>
        </div>
        <div class="doorway-grid">${cards}</div>
      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// 3. TRAVELS PAGE (ON THE ROAD / THE DAY TO DAY)
// --------------------------------------------------------------------------

function journalCard(journal) {
  return `
    <a class="story-card" href="#story/${encodeURIComponent(journal.id)}">
      <div class="card-image">${imageTag(journal.image, journal.title)}</div>
      <div class="story-meta">${escapeHTML(journal.date)} &nbsp; / &nbsp; ${escapeHTML(journal.place)}</div>
      <h3>${escapeHTML(journal.title)}</h3>
      <p>${escapeHTML(journal.summary)}</p>
      <span class="read">READ THE STORY <span>↗</span></span>
    </a>
  `;
}

function renderTravels() {
  const dayToDay = currentJournalTab === "The Day to Day";
  const displayedJournals = content.journals.filter(journal => journal.section === currentJournalTab);

  return `
    ${pageHeader(content.pages.travels, true)}
    <section class="section">
      <div class="container">
        <div class="editorial-tabs" role="tablist" aria-label="Travel story sections">
          <button data-journal-tab="On the Road" role="tab" aria-selected="${!dayToDay}" class="${!dayToDay ? "active" : ""}">On the Road</button>
          <button data-journal-tab="The Day to Day" role="tab" aria-selected="${dayToDay}" class="${dayToDay ? "active" : ""}">The Day to Day</button>
        </div>
        <div class="tab-description">
          <span class="eyebrow">${dayToDay ? "THE EVERYDAY STORIES" : "Overnights and weekends away"}</span>
          <p>${dayToDay ? "Just because it's not a trip, doesn't mean it's not interesting." : "Some inspirations for your future adventures."}</p>
        </div>
        <div class="journal-grid two-col">
          ${displayedJournals.length ? displayedJournals.map(journalCard).join("") : '<p>New stories coming soon.</p>'}
        </div>
      </div>
    </section>
  `;
}

// When a journal card is clicked, it opens its complete entry.
function renderJournal(id) {
  const journal = content.journals.find(item => item.id === id);
  if (!journal) return renderTravels();

  return `
    <div class="article-hero">${imageTag(journal.image, journal.title)}</div>
    <article class="article-content">
      <a href="#travels" class="article-back">← ALL JOURNALS</a>
      <div class="story-meta">${escapeHTML(journal.section.toUpperCase())} &nbsp; / &nbsp; ${escapeHTML(journal.date)}</div>
      <h1>${escapeHTML(journal.title)}</h1>
      <p class="lead">${escapeHTML(journal.opening)}</p>
      ${journal.paragraphs.map(paragraph => `<p>${escapeHTML(paragraph)}</p>`).join("")}
      <p class="article-closing">${escapeHTML(journal.closing)}</p>
      <a href="#travels" class="text-link">BACK TO THE JOURNAL <span>↗</span></a>
    </article>
  `;
}

// --------------------------------------------------------------------------
// 4. OH, THE PLACES YOU'LL GO
// --------------------------------------------------------------------------

function renderPlaces() {
  const cards = content.places.map((place, index) => `
    <article class="destination-feature ${index % 2 ? "reverse" : ""}">
      <div class="destination-photo">${imageTag(place.image, place.name)}</div>
      <div class="destination-description">
        <span class="eyebrow">${String(index + 1).padStart(2, "0")} / ${escapeHTML(place.label)}</span>
        <h2>${escapeHTML(place.name)}</h2>
        <p>${escapeHTML(place.description)}</p>
        <a class="text-link" href="${escapeHTML(place.mapLink)}" target="_blank" rel="noopener">EXPLORE THE MAP <span>↗</span></a>
      </div>
    </article>
  `).join("");

  return `
    ${pageHeader(content.pages.places)}
    <section class="section">
      <div class="container">
        <div class="destination-stack">${cards}</div>
      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// 5. GALLERY: PHOTOS AND VIDEOS
// --------------------------------------------------------------------------

function videoPlayer(video) {
  const url = video.url || "";

  // YouTube: regular watch link, shortened youtu.be link or embed link.
  const youtube = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (youtube) {
    return `<iframe src="https://www.youtube-nocookie.com/embed/${youtube[1]}" title="${escapeHTML(video.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  // Vimeo links are supported as well.
  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) {
    return `<iframe src="https://player.vimeo.com/video/${vimeo[1]}" title="${escapeHTML(video.title)}" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>`;
  }

  // A local filename such as road-trip.mp4 loads from assets/gallery/.
  if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(url)) {
    const videoSource = /^(https?:\/\/|\/|\.\/|\.\.\/|assets\/)/i.test(url) ? url : `assets/gallery/${url}`;
    return `<video controls preload="metadata" ${video.poster ? `poster="${escapeHTML(imageUrl(video.poster))}"` : ""}><source src="${escapeHTML(videoSource)}">Your browser cannot play this video.</video>`;
  }

  return `<p class="video-help">Add a YouTube, Vimeo, or MP4 link to this video in content.js.</p>`;
}

function renderGallery() {
  const photosActive = currentGalleryTab === "Photos";

  const photoGrid = `
    <div class="gallery-grid">
      ${content.photos.map((photo, index) => `
        <button class="photo-tile" data-photo-index="${index}" aria-label="Expand ${escapeHTML(photo.caption)}">
          ${imageTag(photo.image, photo.caption)}
          <span class="photo-caption">${escapeHTML(photo.caption)}</span>
        </button>
      `).join("")}
    </div>
  `;

  const videoGallery = content.videos.length ? `
    <div class="video-gallery-grid">
      ${content.videos.map(video => `
        <article class="video-entry">
          <div class="video-embed">${videoPlayer(video)}</div>
          <h3>${escapeHTML(video.title)}</h3>
          ${video.description ? `<p>${escapeHTML(video.description)}</p>` : ""}
        </article>
      `).join("")}
    </div>
  ` : `
    <div class="video-diary">
      <div class="video-frame">${imageTag("sunset", "Open road at sunset")}<span class="play-emblem">▶</span></div>
      <div class="video-copy">
        <span class="eyebrow">MOVING POSTCARDS</span>
        <h2>Moments in <em>motion.</em></h2>
        <p>A home for little travel films, road-trip clips, and moving memories. Add your first video in content.js.</p>
        <span class="video-coming">VIDEO DIARY — COMING SOON</span>
      </div>
    </div>
  `;

  return `
    ${pageHeader(content.pages.gallery)}
    <section class="section">
      <div class="container">
        <div class="editorial-tabs" role="tablist" aria-label="Gallery media types">
          <button data-gallery-tab="Photos" role="tab" aria-selected="${photosActive}" class="${photosActive ? "active" : ""}">Photos</button>
          <button data-gallery-tab="Videos" role="tab" aria-selected="${!photosActive}" class="${!photosActive ? "active" : ""}">Videos</button>
        </div>
        ${photosActive ? photoGrid : videoGallery}
      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// 6. TO PAIR WITH A LONG DRIVE — MUSIC
// --------------------------------------------------------------------------

function renderMusic() {
  const music = content.music;

  const songRows = music.songs.map((song, index) => `
    <a href="${escapeHTML(song.link)}" target="_blank" rel="noopener" class="track">
      <span class="track-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="track-copy">
        <strong>${escapeHTML(song.title)}</strong>
        <small>${escapeHTML(song.artist)} · ${escapeHTML(song.note)}</small>
      </span>
      <span class="track-arrow">↗</span>
    </a>
  `).join("");

  return `
    ${pageHeader(content.pages.music)}
    <section class="section">
      <div class="container music-layout">
        <div class="music-intro">
          <span class="eyebrow"> Spotify</span>
          <h2>${escapeHTML(music.introTitle)} <em>${escapeHTML(music.introAccent)}</em></h2>
          <p>${escapeHTML(music.introText)}</p>
          <div class="music-art">${imageTag("road", "Open road at golden hour")}<span><b>⌖</b></span></div>
        </div>
        <div class="tracklist">
          <div class="tracklist-title"><span class="eyebrow">Top 7 Songs</span><small>${String(music.songs.length).padStart(2, "0")} Roadtrip N Travels</small></div>
          ${songRows}
          <a href="${escapeHTML(music.playlistLink)}" target="_blank" rel="noopener" class="btn solid playlist-link">LISTEN TO A FULL ROAD TRIP PLAYLIST ↗</a>
        </div>
      </div>
      <div class="container">
        <div class="spotify-embed">
          <div><span class="eyebrow">FULL-PLAYLIST</span><h3>The Wandering Soul Official Playlist</h3><p>Listen here or open the playlist in Spotify.</p></div>
          <iframe title="Spotify road trip playlist" src="${escapeHTML(music.playlistEmbed)}" width="100%" height="352" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// 7. ABOUT ME
// --------------------------------------------------------------------------

function renderAbout() {
  const about = content.about;
  return `
    ${pageHeader(content.pages.about)}
    <section class="section">
      <div class="container about-layout">
        <div>${imageTag(about.photo, "A photograph from my travels")}</div>
        <div>
          <span class="eyebrow">${escapeHTML(about.smallHeading)}</span>
          <h2>${escapeHTML(about.title)} <em>${escapeHTML(about.titleAccent)}</em></h2>
          ${about.paragraphs.map(text => `<p>${escapeHTML(text)}</p>`).join("")}
          <div class="about-note">${escapeHTML(about.quote)}</div>
          <p>${escapeHTML(about.ending)}</p>
          <p><em>${escapeHTML(about.signature)}</em></p>
          <a class="btn solid about-contact" href="${contactLink()}">CONTACT ME ↗</a>
        </div>
      </div>
    </section>
  `;
}

// --------------------------------------------------------------------------
// 8. PAGE NAVIGATION & BUTTON ACTIONS
// --------------------------------------------------------------------------

function renderPage() {
  // Example URL: #story/my-first-trip opens a journal entry with that id.
  const [page, id] = decodeURIComponent(location.hash.slice(1) || "home").split("/");

  const pages = {
    home: renderHome,
    travels: renderTravels,
    places: renderPlaces,
    gallery: renderGallery,
    music: renderMusic,
    about: renderAbout
  };

  app.innerHTML = page === "story" ? renderJournal(id) : (pages[page] || renderHome)();

  // Highlight the navigation item for the page you're visiting.
  document.querySelectorAll("[data-nav]").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === (page === "story" ? "travels" : page));
  });

  document.querySelector(".desktop-nav").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "instant" });
  attachPageButtons();
}

function attachPageButtons() {
  // Journal tab switching.
  document.querySelectorAll("[data-journal-tab]").forEach(button => {
    button.addEventListener("click", () => {
      const previousScroll = window.scrollY;
      currentJournalTab = button.dataset.journalTab;
      renderPage();
      window.scrollTo({ top: previousScroll, behavior: "instant" });
    });
  });

  // Gallery tab switching.
  document.querySelectorAll("[data-gallery-tab]").forEach(button => {
    button.addEventListener("click", () => {
      const previousScroll = window.scrollY;
      currentGalleryTab = button.dataset.galleryTab;
      renderPage();
      window.scrollTo({ top: previousScroll, behavior: "instant" });
    });
  });

  // Clicking a photo opens it at a larger size.
  document.querySelectorAll("[data-photo-index]").forEach(button => {
    button.addEventListener("click", () => {
      const photo = content.photos[Number(button.dataset.photoIndex)];
      document.getElementById("lightboxImage").src = imageUrl(photo.image);
      document.getElementById("lightboxImage").alt = photo.caption;
      document.getElementById("lightboxCaption").textContent = photo.caption;
      document.getElementById("lightbox").hidden = false;
      document.body.style.overflow = "hidden";
    });
  });
}

// --------------------------------------------------------------------------
// 9. ITEMS SHARED BY EVERY PAGE (CONTACT, FOOTER & LIGHTBOX)
// --------------------------------------------------------------------------

function updateSharedContent() {
  document.title = `${content.site.name} — A personal travel journal`;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("contact-small-heading").textContent = content.contact.smallHeading;
  document.getElementById("contact-title").innerHTML = `${escapeHTML(content.contact.title)} <em>${escapeHTML(content.contact.titleAccent)}</em>`;
  document.getElementById("contact-message").textContent = content.contact.message;
  document.getElementById("contact-button").href = contactLink();
  document.getElementById("footer-message").textContent = content.site.footerMessage;
  document.getElementById("footer-tagline").textContent = content.site.footerTagline;
}

function closeLightbox() {
  document.getElementById("lightbox").hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("menuToggle").addEventListener("click", () => {
  document.querySelector(".desktop-nav").classList.toggle("open");
});

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightbox").addEventListener("click", event => {
  if (event.target.id === "lightbox") closeLightbox();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeLightbox();
});

window.addEventListener("hashchange", renderPage);
updateSharedContent();
renderPage();
