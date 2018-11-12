// https://leetcode.com/problems/robot-return-to-origin/

var judgeCircle = function(moves) {
  const coords = { x: 0, y: 0 };
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'U':
        coords.y++;
        break;
      case 'D':
        coords.y--;
        break;
      case 'L':
        coords.x--;
        break;
      case 'R':
        coords.x++;
        break;
    }
  }
  return coords.x === 0 && coords.y === 0;
};

judgeCircle('UD'); // true
