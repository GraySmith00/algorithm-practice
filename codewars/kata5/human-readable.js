// function humanReadable(seconds) {
//   let time = ['00', '00', '00']
//   if (seconds > 3599) {
//     time[0] = Math.floor(seconds / 3600)
//   }
//   if (seconds > 59) {
//     time[1] = Math.floor((seconds - (time[0] * 3600)) / 60)
//   }

//   time[2] = seconds - (time[0] * 3600) - (time[1] * 60)
//   return time.map(n => {
//     n = n.toString();
//     return n.length > 1 ? n : '0' + n;
//   }).join(':')
// }

function humanReadable(seconds) {
  const pad = x => (x < 10 ? '0' + x : x);
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ':' +
    pad(parseInt((seconds / 60) % 60)) +
    ':' +
    pad(parseInt(seconds % 60))
  );
}

// humanReadable(0) // '00:00:00', 'humanReadable(0)');
// humanReadable(5) // '00:00:05', 'humanReadable(5)');
// humanReadable(60) // '00:01:00', 'humanReadable(60)');
// humanReadable(86399) // '23:59:59', 'humanReadable(86399)');
humanReadable(359999); // '99:59:59', 'humanReadable(359999)');
