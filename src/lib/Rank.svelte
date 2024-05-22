<script>
  export let targetRankValue;
  export let score;
  export let voValue, daValue, viValue;

  let rankValue;
  const calculateRankValue = (score, voValue = 0, daValue = 0, viValue = 0) => {
    if (!score) {
      return;
    }

    let scoreRankValue = 0;
    if (score <= 5000) {
      scoreRankValue = score * 0.3;
    } else if (score <= 10000) {
      scoreRankValue = score * 0.15 + 750;
    } else {
      scoreRankValue = 2250;
      score -= 10000;
      let i = 2;
      while (score > 10000) {
        scoreRankValue +=
          (10000 * Math.round((0.3 * 100) / Math.pow(2, i))) / 100;
        score -= 10000;
        i++;
      }
      scoreRankValue +=
        (score * Math.round((0.3 * 100) / Math.pow(2, i))) / 100;
    }
    scoreRankValue = Math.round(scoreRankValue);

    const statusRankValue = Math.floor(
      (Math.min(voValue + 30, 1500) +
        Math.min(daValue + 30, 1500) +
        Math.min(viValue + 30, 1500)) *
        2.3,
    );

    return scoreRankValue + statusRankValue + 1700;
  };
  $: rankValue = calculateRankValue(score, voValue, daValue, viValue);

  const getRank = (rankValue) => {
    if (rankValue >= 13000) {
      return 'S';
    } else if (rankValue >= 11500) {
      return 'A+';
    } else if (rankValue >= 10000) {
      return 'A';
    } else if (rankValue >= 8000) {
      return 'B+';
    } else if (rankValue >= 6000) {
      return 'B';
    }
    return '';
  };
  $: rank = getRank(rankValue);
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">評価</div>
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="target-value" class="form-label">目標評価値</label>
        <input
          type="number"
          bind:value={targetRankValue}
          class="form-control"
          id="target-value"
          disabled
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="result-value" class="form-label">実績評価値</label>
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
