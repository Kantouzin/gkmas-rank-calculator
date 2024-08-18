<script>
  import { _ } from 'svelte-i18n';
</script>

<footer class="footer bg-secondary mt-auto">
  <div class="container text-center text-light">
    <p class="m-2">
      <i class="bi bi-c-circle"></i><span class="ms-1">
        {$_('footer.author')}
      </span>
    </p>
  </div>
</footer>
