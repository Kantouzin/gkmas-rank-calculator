import ranks from '../../json/ranks.json';

const calculateTargetScore = (targetRankValue = 0, voValue = 0, daValue = 0, viValue = 0) => {
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

const getRank = (rankValue) => {
  for (let rank of ranks) {
    if (rankValue >= rank.point) {
      return rank.label;
    }
  }
  return '';
};

export { calculateTargetScore, calculateRankValue, getRank };
