<script>
  import Popover from './Popover.svelte';

  export let targetRankValue, voValue, daValue, viValue;
  export let score;
  let targetScore;

  const calculateTargetScore = (
    targetRankValue = 0,
    voValue = 0,
    daValue = 0,
    viValue = 0,
  ) => {
    const statusValue = Math.floor(
      (Math.min(voValue + 30, 1500) +
        Math.min(daValue + 30, 1500) +
        Math.min(viValue + 30, 1500)) *
        2.3,
    );
    const targetValue = targetRankValue - statusValue - 1700;

    let targetScore = 0;
    if (targetValue <= 1500) {
      targetScore = targetValue / 0.3;
    } else if (targetValue <= 2250) {
      targetScore = 5000 + (targetValue - 1500) / 0.15;
    } else if (targetValue <= 3050) {
      targetScore = 10000 + (targetValue - 2250) / 0.08;
    } else if (targetValue <= 3450) {
      targetScore = 20000 + (targetValue - 3050) / 0.04;
    } else if (targetValue <= 3650) {
      targetScore = 30000 + (targetValue - 3450) / 0.02;
    } else {
      targetScore = 40000 + (targetValue - 3650) / 0.01;
    }
    targetScore = Math.floor(targetScore);
    return targetScore > 0 ? targetScore : 0;
  };

  $: targetScore = calculateTargetScore(
    targetRankValue,
    voValue,
    daValue,
    viValue,
  );

  const clamp = (score) => {
    if (score < 0) {
      return 0;
    }
    if (score > 100000) {
      return 100000;
    }
    return score;
  };
  $: score = clamp(score);
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
