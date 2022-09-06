const dateToday = new Date();

const month = dateToday.getMonth()
const year = dateToday.getFullYear();

const CurrentDate = {
    month: month,
    year: year
}

export default CurrentDate;
