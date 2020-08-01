function humanReadable(totalSeconds) {
  // TODO
  let hours = Math.floor(totalSeconds / 3600);
  let h = hours < 10 ? "0" + hours : hours;
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let m = minutes < 10 ? "0" + minutes : minutes;
  if (totalSeconds < 60) {
    var s = totalSeconds;
  } else {
    let seconds = Math.floor((totalSeconds % 3600) / 60);
    var s = seconds < 10 ? "0" + seconds : seconds;
  }

  return `${h}:${m}:${s}`;
}
