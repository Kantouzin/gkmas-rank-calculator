<script>
  export let voValue, daValue, viValue;
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">パラメータ</div>
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
