// ============================================================
//  BOOKS.JS — the library catalogue
//  This is the ONLY file you need to edit when adding a book.
//
//  For each book:
//    slug      — used in the web address (storybook.html?book=slug)
//                and as the folder name: books/<slug>/
//    title     — shown on the shelf and in the viewer
//    author    — shown on the shelf (optional, can be "")
//    pageCount — TOTAL visual units including the cover.
//                e.g. 22 = cover + page1 ... page21
//    langs     — which narration languages exist for this book
//
//  Expected files for each book (all optional until you add them —
//  missing images show a placeholder, missing audio falls back to
//  a 3-second timer in auto-play):
//
//    books/<slug>/images/cover.jpg
//    books/<slug>/images/page1.jpg ... pageN.jpg
//    books/<slug>/audio/en/cover.mp3, page1.mp3 ... pageN.mp3
//    books/<slug>/audio/es/cover.mp3, page1.mp3 ... pageN.mp3
// ============================================================

window.BOOKS = [
  {
    slug: "why-is-the-sky-blue",
    title: "Why is the Sky Blue?",
    author: "Sally Grindley",
    pageCount: 22,          // cover + page1..page21
    langs: ["en", "es"]
  },
  {
    slug: "penguin-small",
    title: "Penguin Small",
    author: "Mick Inkpen",
    pageCount: 20,          // placeholder — adjust when pages are photographed
    langs: ["en", "es"]
  },
  {
    slug: "the-last-puppy",
    title: "The Last Puppy",
    author: "Frank Asch",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  },
  {
    slug: "leotolda",
    title: "Leotolda",
    author: "Olga de Dios",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  },
  {
    slug: "ten-beautiful-things",
    title: "Ten Beautiful Things",
    author: "Molly Beth Griffin",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  },
  {
    slug: "el-tigre-que-vino-a-tomar-el-te",
    title: "El tigre que vino a tomar el té",
    author: "Judith Kerr",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  },
  {
    slug: "the-very-hungry-caterpillar",
    title: "The Very Hungry Caterpillar",
    author: "Eric Carle",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  },
  {
    slug: "de-que-color-es-un-beso",
    title: "¿De qué color es un beso?",
    author: "Rocio Bonilla",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  },
  {
    slug: "cuando-no-estabas-conmigo",
    title: "Cuando No Estabas Conmigo",
    author: "Chandele Shoab",
    pageCount: 20,          // placeholder
    langs: ["en", "es"]
  }
];
