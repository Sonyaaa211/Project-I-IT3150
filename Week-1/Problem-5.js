project.problemInfo[5] = 
"Given a date which is a string under the format YYYY-MM-DD (in which YYYY is the year, MM is the month (the month í from 1 to 12), and DD is the date (the date is from 1 to 31)). Extract the year, month and date."

project.solution_1_5 = function(s) {
    const regex = /^(\d{4})-(\d{2})-(\d{2})$/;
    const match = s.match(regex);
    if (match) {
        const year = match[1];
        const month = match[2];
        const date = match[3];
        if (month[0] !== '0' && date[0] !== '0') {
            return 'INCORRECT';
        }
        return `${year} ${parseInt(month)} ${parseInt(date)}`;
    }
    return 'INCORRECT';
}