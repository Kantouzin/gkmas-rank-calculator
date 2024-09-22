<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import initial from '../../json/initial.json';
  import ranks from '../../json/ranks.json';
  import scenarios from '../../json/scenarios.json';
  import { getRankValue, getStatusLimit } from '../modules/calculator';

  export let targetRankValue;
  export let statusLimit;

  const handleChangeRank = (event) => {
    targetRankValue = getRankValue(Number(event.target.value));
  };

  const handleChangeStatusLimit = (event) => {
    statusLimit = getStatusLimit(Number(event.target.value));
  };

  onMount(() => {
    targetRankValue = getRankValue(initial.targetRankId);
    statusLimit = getStatusLimit(initial.scenarioId);
  });
</script>

<div class="card text-bg-light my-2">
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="target-rank" class="form-label">
          {$_('target_rank.target_rank')}
        </label>
        <select
          value={initial.targetRankId}
          on:change={handleChangeRank}
          id="target-rank"
          class="form-select"
        >
          {#each ranks as rank}
            <option value={rank.id}>
              {rank.label}
            </option>
          {/each}
        </select>
      </div>
      <div class="col-8 col-md-3">
        <label for="scenario" class="form-label"
          >{$_('target_rank.scenario')}</label
        >
        <select
          value={initial.scenarioId}
          on:change={handleChangeStatusLimit}
          id="scenario"
          class="form-select"
        >
          {#each scenarios as scenario}
            <option value={scenario.id}>
              {scenario.label}
            </option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>
