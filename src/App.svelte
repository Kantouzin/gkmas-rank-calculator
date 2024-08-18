<script>
  import 'bootstrap-icons/font/bootstrap-icons.min.css';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { isLoading } from 'svelte-i18n';
  import './lang/i18n';
  import Footer from './lib/components/Footer.svelte';
  import Header from './lib/components/Header.svelte';
  import Main from './lib/components/Main.svelte';
</script>

{#if $isLoading}
  <div>Now Loading ...</div>
{:else}
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <Main />
    <Footer />
  </div>
{/if}
