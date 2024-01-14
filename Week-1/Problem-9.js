project.problemInfo[9] = 
"Given a time moment which is a string under the format hh:mm:ss (in which hh (0 <= hh <= 23) is the hour, mm (0 <= mm <= 59) is the minute, and ss (0 <= ss <= 59) is the second). Convert this time moment in seconds (result = hh*3600 + mm*60 + ss)."
project.solution_1_9 = function(time) {
    const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
    if (!regex.test(time)) {
        return "INCORRECT";
    }
    const [hours, minutes, seconds] = time.split(":").map(Number);
    const result = hours * 3600 + minutes * 60 + seconds;

    return result;
}