import { differenceInYears } from 'date-fns';

const datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

const dateParts = (dateString) => {
  const date = new Date(dateString);
  const day = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();
  const month = date.getUTCMonth() + 1 < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  return { day, month, year };
};

const formatDate = (dateString) => {
  const { day, month, year } = dateParts(dateString);
  return `${day}/${month}/${year}`;
};

const getYearsFromDate = (dateFrom) => {
  const { day, month, year } = dateParts(dateFrom);
  const parsedDateFrom = new Date(`${year}-${month}-${day} 00:00:00`);
  return differenceInYears(Date.now(), parsedDateFrom);
};

export { datePattern, formatDate, getYearsFromDate };
