<script>
  import Popover from './Popover.svelte';

  export let voValue, daValue, viValue;

  const clamp = (value) => {
    if (value < 0) {
      return 0;
    }
    if (value > 1500) {
      return 1500;
    }
    return value;
  };

  $: voValue = clamp(voValue);
  $: daValue = clamp(daValue);
  $: viValue = clamp(viValue);
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">
    <span>パラメータ</span>
    <Popover text="最終試験直前のパラメータを入力してください。" />
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="vo" class="form-label">Vo</label>
        <input
          type="number"
          bind:value={voValue}
          class="form-control"
          id="vo"
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="da" class="form-label">Da</label>
        <input
          type="number"
          bind:value={daValue}
          class="form-control"
          id="da"
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="vi" class="form-label">Vi</label>
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
