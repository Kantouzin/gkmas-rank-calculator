<script>
  import { calculateTargetScore } from '../modules/calculator';
  import { clamp } from '../modules/utils';
  import Popover from './Popover.svelte';

  export let targetRankValue, voValue, daValue, viValue;
  export let score;

  let targetScore;
  $: targetScore = calculateTargetScore(
    targetRankValue,
    voValue,
    daValue,
    viValue,
  );

  $: score = clamp(score, 0, 100000);
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">
    <span>最終試験</span>
    <Popover
      text="実績ptが大きい場合、実績評価値の計算結果が合わない場合があります。"
    />
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="target-point" class="form-label">目標pt</label>
        <input
          type="number"
          bind:value={targetScore}
          disabled
          class="form-control"
          id="target-point"
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="acquired-point" class="form-label">実績pt</label>
        <input
          type="number"
          bind:value={score}
          class="form-control"
          id="acquired-point"
        />
      </div>
    </div>
  </div>
</div>
