<script>
  import { _ } from 'svelte-i18n';
  import { calculateRankValue, getRankLabel } from '../modules/calculator';

  export let targetRankValue;
  export let score;
  export let voValue, daValue, viValue;
  export let statusLimit;

  let rankValue;
  $: rankValue = calculateRankValue(
    score,
    voValue,
    daValue,
    viValue,
    statusLimit,
  );

  let rank;
  $: rank = getRankLabel(rankValue);
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">{$_('rank.title')}</div>
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="target-value" class="form-label">
          {$_('rank.target_value')}
        </label>
        <input
          type="number"
          bind:value={targetRankValue}
          class="form-control"
          id="target-value"
          disabled
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="result-value" class="form-label">
          {$_('rank.result_value')}
        </label>
        <input
          type="number"
          bind:value={rankValue}
          class="form-control"
          id="result-value"
          disabled
        />
      </div>
      <div class="fs-1 col-3 col-md-2 text-center">{rank}</div>
    </div>
  </div>
</div>
