<script>
  import { _ } from 'svelte-i18n';
  import UpdateDate from './UpdateDate.svelte';
</script>

<nav class="navbar navbar-dark bg-dark">
  <div class="container flex-nowrap">
    <h1 class="navbar-brand fs-5 text-light">
      {$_('header.title')}
    </h1>
    <UpdateDate />
  </div>
</nav>
