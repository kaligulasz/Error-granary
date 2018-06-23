import moment from 'moment';

export default function timestampToDate(timestamp) {
  const parsedTimestamp = parseInt(timestamp, 10);
  const day = moment(parsedTimestamp);

  return day.format('DD-MM-YYYY, H:mm:ss');
}
