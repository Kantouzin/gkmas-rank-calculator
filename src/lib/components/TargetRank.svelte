<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { _ } from 'svelte-i18n';
  import ranks from '../../json/ranks.json';

  let selectedRank = 'A+';

  const dispatch = createEventDispatcher();
  const handleChange = (event) => {
    const rank = ranks.find((rank) => rank.label === event.target.value);
    dispatch('update', { targetRankValue: rank.point });
  };

  onMount(() => {
    handleChange({ target: { value: selectedRank } });
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
