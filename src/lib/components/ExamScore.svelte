<script>
  import { _ } from 'svelte-i18n';
  import { scoreLimit } from '../../json/initial.json';
  import { calculateTargetScore } from '../modules/calculator';
  import { clamp } from '../modules/utils';

  export let targetRankValue, voValue, daValue, viValue;
  export let statusLimit;
  export let score;

  let targetScore;
  $: targetScore = calculateTargetScore(
    targetRankValue,
    voValue,
    daValue,
    viValue,
    statusLimit,
  );

  $: score = clamp(score, 0, scoreLimit);
</script>

<div class="card text-bg-light my-2">
  <div class="card-header">
    <span>
      {$_('exam_score.title')}
    </span>
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col-8 col-md-3">
        <label for="target-point" class="form-label">
          {$_('exam_score.target_score')}
        </label>
        <input
          type="number"
          bind:value={targetScore}
          disabled
          class="form-control"
          id="target-point"
        />
      </div>
      <div class="col-8 col-md-3">
        <label for="acquired-point" class="form-label">
          {$_('exam_score.score')}
        </label>
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
