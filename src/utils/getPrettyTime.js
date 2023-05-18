export default function getPrettyTime (time) {
  return time >= 60 ? Math.trunc(time / 60) + 'ч ' + time % 60 + 'мин' : time + 'мин';
}
