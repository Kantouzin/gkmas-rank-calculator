import ranks from '../../json/ranks.json';
import Big from 'big.js';

const calculateTargetScore = (targetRankValue = 0, voValue = 0, daValue = 0, viValue = 0) => {
  const statusValue = new Big(0)
    .plus(Math.min(voValue + 30, 1800))
    .plus(Math.min(daValue + 30, 1800))
    .plus(Math.min(viValue + 30, 1800))
    .times('2.3')
    .round(0, Big.roundDown);

  const targetValue = new Big(targetRankValue).minus(statusValue).minus(1700);

  let targetScore = new Big(0);
  if (targetValue.lte(1500)) {
    targetScore = targetValue.div('0.3');
  } else if (targetValue.lte(2250)) {
    targetScore = targetValue.minus(1500).div('0.15').plus(5000);
  } else if (targetValue.lte(3050)) {
    targetScore = targetValue.minus(2250).div('0.08').plus(10000);
  } else if (targetValue.lte(3450)) {
    targetScore = targetValue.minus(3050).div('0.04').plus(20000);
  } else if (targetValue.lte(3650)) {
    targetScore = targetValue.minus(3450).div('0.02').plus(30000);
  } else {
    targetScore = targetValue.minus(3650).div('0.01').plus(40000);
  }
  targetScore = targetScore.round(0, Big.roundDown);

  return targetScore.gt(0) ? targetScore.toNumber() : 0;
};

const calculateRankValue = (score, voValue = 0, daValue = 0, viValue = 0) => {
  if (!score) {
    return;
  }

  let scoreRankValue = new Big(0);
  if (score <= 5000) {
    scoreRankValue = scoreRankValue.plus(score).times('0.3');
  } else if (score <= 10000) {
    scoreRankValue = scoreRankValue.plus(score).times('0.15').plus(1500);
  } else if (score <= 20000) {
    scoreRankValue = scoreRankValue.plus(score).minus(10000).times('0.08').plus(2250);
  } else if (score <= 30000) {
    scoreRankValue = scoreRankValue.plus(score).minus(20000).times('0.04').plus(3050);
  } else if (score <= 40000) {
    scoreRankValue = scoreRankValue.plus(score).minus(30000).times('0.02').plus(3450);
  } else {
    scoreRankValue = scoreRankValue.plus(score).minus(40000).times('0.01').plus(3650);
  }
  scoreRankValue = scoreRankValue.round(0, Big.roundDown);

  const statusRankValue = new Big(0)
    .plus(Math.min(voValue + 30, 1800))
    .plus(Math.min(daValue + 30, 1800))
    .plus(Math.min(viValue + 30, 1800))
    .times('2.3')
    .round(0, Big.roundDown);

  return scoreRankValue.plus(statusRankValue).plus(1700).toNumber();
};

const getRank = (rankValue) => {
  for (let rank of ranks) {
    if (rankValue >= rank.point) {
      return rank.label;
    }
  }
  return '';
};

export { calculateTargetScore, calculateRankValue, getRank };
