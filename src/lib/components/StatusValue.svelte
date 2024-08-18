<script>
  import { _ } from 'svelte-i18n';
  import { clamp } from '../modules/utils';
  import Popover from './Popover.svelte';

  export let voValue, daValue, viValue;

  $: voValue = clamp(voValue, 0, 1500);
  $: daValue = clamp(daValue, 0, 1500);
  $: viValue = clamp(viValue, 0, 1500);
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">
    <span>
      {$_('status_value.title')}
    </span>
    <Popover text={$_('status_value.description')} />
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="vo" class="form-label">
          {$_('status_value.vo')}
        </label>
        <input
          type="number"
          bind:value={voValue}
          class="form-control"
          id="vo"
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="da" class="form-label">
          {$_('status_value.da')}
        </label>
        <input
          type="number"
          bind:value={daValue}
          class="form-control"
          id="da"
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="vi" class="form-label">
          {$_('status_value.vi')}
        </label>
        <input
          type="number"
          bind:value={viValue}
          class="form-control"
          id="vi"
        />
      </div>
    </div>
  </div>
</div>
