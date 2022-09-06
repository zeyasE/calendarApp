import { NameDays, NumberDays } from "../../constants/Calendar";

export const DaysOfMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
}

export const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).toLocaleDateString('en-us', { weekday: "long" });;
}

export const mapWeek = (start, end) => {
    return Array(end - start).fill().map((_, index) => start + index);
}

export const mapDate = ({ month, year }) => {
    let allMonth = [];
    let week = [];
    let firstDay = NumberDays[NameDays[firstDayOfMonth(year, month)]]
    let endOfMonth = DaysOfMonth(year, month) + 1;
    let start = 0;
    while (start < endOfMonth) {
        if (start === 0) {
            week = [...Array(firstDay).fill(""), ...mapWeek(start + 1, 7 - firstDay + 1)]
            allMonth.push(week);
            start = 7 - firstDay + 1
        }
        else if (start + 7 >= endOfMonth) {
            week = mapWeek(start, endOfMonth);
            week = [...mapWeek(start, endOfMonth), ...Array(7 - week.length).fill("")]
            allMonth.push(week);
            start = endOfMonth + 1;
        }
        else {
            week = mapWeek(start, start + 7);
            allMonth.push(week);
            start = start + 7
        }
    }
    return allMonth;
}