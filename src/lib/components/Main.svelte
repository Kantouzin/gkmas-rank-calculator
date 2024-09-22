<script>
  import ExamScore from './ExamScore.svelte';
  import Rank from './Rank.svelte';
  import StatusValue from './StatusValue.svelte';
  import TargetRank from './TargetRank.svelte';

  let targetRankValue;
  let statusLimit;
  let voValue, daValue, viValue;
  let score;
</script>

<main class="container d-flex flex-column mt-3">
  <TargetRank bind:targetRankValue bind:statusLimit />
  <StatusValue bind:voValue bind:daValue bind:viValue {statusLimit} />
  <ExamScore
    {targetRankValue}
    {voValue}
    {daValue}
    {viValue}
    {statusLimit}
    bind:score
  />
  <Rank
    bind:targetRankValue
    bind:score
    {voValue}
    {daValue}
    {viValue}
    {statusLimit}
  />
</main>
