project.problemInfo[42] = "Analyze Code Submission of a Programming Contest"

class Submission{
    constructor(){
        this.UserID = "";
        this.ProblemID = "";
        this.TimePoint= "";
        this.Status = "ERR";
        this.Point = 0;
    }
}

project.submissions = [];

project.ErrorSubmissions = function(){
    let errorList = project.submissions.filter(submission => {
        return submission.Status == "ERR";
    })
    return errorList.length;
}

project.ErrorSubmissionsOfUser = function(userId){
    let errorList = project.submissions.filter(submission => {
        return submission.Status == "ERR" && submission.UserID == userId;
    })
    return errorList.length;
}

project.PointOfUser = function(userId){
    let res = 0;
    let done = {};
    project.submissions.forEach(element =>{
        if(element.UserID == userId && element.Status == "OK"){
            if(done.hasOwnProperty(element.ProblemID)){
                done[element.ProblemID] = done[element.ProblemID] > element.Point ? done[element.ProblemID] : element.Point;
            }
            else{
                done[element.ProblemID] = element.Point;
            }
        } 
    });
    Object.values(done).forEach(point => {
        res += point;
    })
    return res;
}

project.SubmissionInPeriod = function(begin, end){
    let startTime = begin.split(":");
    let endTime = end.split(":");
    let res = 0;
    for(let i = 0; i < project.submissions.length; i++){
        let time = project.submissions[i].TimePoint.split(":");
        if(project.IsEarlier(startTime, time) && project.IsEarlier(time, endTime)){
            res ++;
        }
    }
    return res;
}

project.solution_8_1 = function(input){
    const lines = input.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch (query[0]){
            case "?total_number_submissions":
                project.res += project.submissions.length + "\n";
                break;
            case "?number_error_submision":
                project.res += project.ErrorSubmissions() + "\n";
                break;
            case "?number_error_submision_of_user":
                project.res += project.ErrorSubmissionsOfUser(query[1]) + "\n";
                break;
            case "?total_point_of_user":
                project.res += project.PointOfUser(query[1]) + "\n";
                break;
            case "?number_submission_period":
                project.res += project.SubmissionInPeriod(query[1], query[2]) + "\n";
                break;
            case "#":

                break;
            default:
                let submission = new Submission();
                submission.UserID = query[0];
                submission.ProblemID = query[1];
                submission.TimePoint = query[2];
                submission.Status = query[3];
                submission.Point = parseInt(query[4]);
                project.submissions.push(submission);
                break;
        }
    }
    return project.res;
}

var input = 'U001 P01 10:30:20 ERR 0\nU001 P01 10:35:20 OK 10\nU001 P02 10:40:20 ERR 0\nU001 P02 10:55:20 OK 7\nU002 P01 10:40:20 ERR 0\nU001 P01 11:35:20 OK 8\nU002 P02 10:40:20 OK 10\n#\n?total_number_submissions\n?number_error_submision\n?number_error_submision_of_user U002 \n?total_point_of_user U001 \n?number_submission_period 10:00:00 11:30:45\n#';