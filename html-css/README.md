# Pembuatan Situs Sederhana

## Bagian Awal Pengembangan

- HTML
- CSS

> Hasil latihan dari pembelajaran materi HTML dan CSS dalam pengembangan situs sederhana.

```
html-css
├── img
│ ├── icon
│ │ └── hamburger.svg
│ └── image
├── index.html
├── style.css
└── README.md
```

1. Berikut bagian body pada `HTML`

```html
<body>
  <header>
    <!-- navbar disable -->
    <nav>
      <h3 id="logo">ArtVisual</h3>
      <img class="hamburger" src="./img/icon/hamburger.svg" alt="hamb" />
    </nav>

    <!-- section untuk hero image atau banner -->
    <section>
      <div class="hero">
        <img src="./img/timon-klauser-3MAmj1ZKSZA-unsplash.jpg" alt="hero" />
        <h1 class="headline">Street Art</h1>
      </div>
    </section>
    <!-- slider untuk background color -->
    <div class="slider"></div>
  </header>
</body>
```

2. Bagian `CSS` ini merupakan basic

```CSS
/* basic css layouting */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* here we go */
.slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to left, #bbbbbb, #a8a8a8);
    z-index: -1;
}

nav {
    display: grid;
    grid-template-columns: 10% 1fr 1fr 10%;
    min-height: 10vh;
    color: #ffff;
    align-items: center;
}

#logo {
    grid-column: 2/3;
    font-size: 24px;
}

.hamburger {
    justify-self: flex-end;
}

section {
    display: flex;
    height: 80vh;
    justify-content: center;
    align-items: center;

}

.hero {
    height: 70%;
    width: 90%;
    position: relative;
    animation: drop 1.5s;
}

.hero img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero::after {
    content: "";
    background-color: #111111;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    opacity: 0.3;
}

.headline {
    position: absolute;
    top: 70%;
    left: 20;
    font-size: 100px;
    transform: translate(-10%, -70%);
    /* this how insert color backgroun to the text */
    background: linear-gradient(to right, #ebe9e9, #f8f8f8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    z-index: 3;
    animation: drop 2s;
    filter: drop-shadow(0px 5px 3px black);

}
```

lalu penambahan animasi dan penyesuaian ukuran layar

```CSS
@media screen and (max-width:768px) {
    .headline {
        font-size: 70px;
    }
}

/* animation */
@keyframes drop {
    0% {
        opacity: 0;
        transform: translateY(-80px);
    }

    100% {
        opacity: 1;
    }
}
```
