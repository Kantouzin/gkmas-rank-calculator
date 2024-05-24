<script>
  import { onMount } from 'svelte';
  import { Popover } from 'bootstrap/dist/js/bootstrap.esm.min.js';

  export let text = '';

  let element;
  onMount(() => {
    new Popover(element);
  });
</script>

<button
  bind:this={element}
  type="button"
  class="btn btn-link btn-sm text-dark"
  data-bs-toggle="popover"
  data-bs-content={text}
>
  <i class="bi bi-exclamation-circle"></i>
</button>
