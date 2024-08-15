<script>
  import 'bootstrap-icons/font/bootstrap-icons.min.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import Footer from './lib/components/Footer.svelte';
  import Header from './lib/components/Header.svelte';
  import Main from './lib/components/Main.svelte';
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="『学マス』のアイドルの評価を計算します。" />
  <meta property="og:title" content="学マス評価計算機" />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://kantouzin.github.io/gkmas-rank-calculator/"
  />
  <meta
    property="og:description"
    content="『学マス』のアイドルの評価を計算します。"
  />
  <title>学マス評価計算機</title>
  <meta
    name="google-site-verification"
    content="z64jFfZIvZ7XcrG38UxqwaqGV7acKmA8WgWmNUX2g6w"
  />
</svelte:head>

<div class="d-flex flex-column min-vh-100">
  <Header />
  <Main />
  <Footer />
</div>
