<script>
  import ExamScore from './ExamScore.svelte';
  import Rank from './Rank.svelte';
  import StatusValue from './StatusValue.svelte';
  import TargetRank from './TargetRank.svelte';

  let targetRankValue;
  let voValue, daValue, viValue;
  let score;
</script>

<main class="container d-flex flex-column mt-3">
  <TargetRank bind:targetRankValue />
  <StatusValue bind:voValue bind:daValue bind:viValue />
  <ExamScore {targetRankValue} {voValue} {daValue} {viValue} bind:score />
  <Rank bind:targetRankValue bind:score {voValue} {daValue} {viValue} />
</main>
