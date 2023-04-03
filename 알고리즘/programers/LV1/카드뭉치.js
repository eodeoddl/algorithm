// 100 / 100 
// 다른 사람들의 풀이는 이해가 잘 가지않음..
// 정답률이 높은 문제가 오히려 더 어렵게 느껴진다.
const solution = (cards1, cards2, goal) => {
  const currentGoal = goal.slice(0);
  const result = [];

  const getCards = (first, second, tempGoal) => {
    let founded = false;

    const [first1, second1] = [first, second].map((arr) => {
      if (arr[0] === tempGoal[0]) {
        result.push(arr.shift());
        founded = true;
        return arr;
      }
      return arr;
    });

    tempGoal.shift();

    if (founded && result.length === goal.length) return 'Yes';
    else if (!founded) return 'No';
    else return getCards(first1, second1, tempGoal);
  };

  return getCards(cards1, cards2, currentGoal);
};

const result = solution(
  ['i', 'drink', 'water'],
  ['want', 'to'],
  ['i', 'want', 'to', 'drink', 'water']
); // yes
// const result = solution(
//   ['i', 'water', 'drink'],
//   ['want', 'to'],
//   ['i', 'want', 'to', 'drink', 'water']
// ); // no
console.log(result);

// 원하는 카드 뭉치에서 카드를 순서대로 한장씩
// 한번 사용한 카드는 다시 사용 불가.
// 카드를 사용하지않고 다음 카드로 넘어갈 수 없음.

// 기존에 주어진 카드뭉치 순서는 바꿀수 없음.
