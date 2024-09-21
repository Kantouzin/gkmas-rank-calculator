<script>
  import { onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import ranks from '../../json/ranks.json';
  import { getRankValue } from '../modules/calculator';

  export let targetRankValue;

  let selectedRank = 'A+';

  const handleChange = (event) => {
    targetRankValue = getRankValue(event.target.value);
  };

  onMount(() => {
    targetRankValue = getRankValue(selectedRank);
  });
</script>

<div class="card text-bg-light my-2">
  <div class="card-body col-8 col-md-3">
    <label for="target-rank" class="form-label">
      {$_('target_rank.title')}
    </label>
    <select
      value={selectedRank}
      on:change={handleChange}
      id="target-rank"
      class="form-select"
    >
      {#each ranks as rank}
        <option value={rank.label}>
          {rank.label}
        </option>
      {/each}
    </select>
  </div>
</div>
