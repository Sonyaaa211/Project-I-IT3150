/*Analyze Code Submission of a Programming Contest*/

class Submission{
    constructor(){
        this.UserID = "";
        this.ProblemID = "";
        this.TimePoint= "";
        this.Status = "ERR";
        this.Point = 0;
    }
}

let submissions = [];

function ErrorSubmissions(){
    let errorList = submissions.filter(submission => {
        return submission.Status == "ERR";
    })
    return errorList.length;
}

function ErrorSubmissionsOfUser(userId){
    let errorList = submissions.filter(submission => {
        return submission.Status == "ERR" && submission.UserID == userId;
    })
    return errorList.length;
}

function PointOfUser(userId){
    let res = 0;
    let done = {};
    submissions.forEach(element =>{
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

function IsEarlier(timeA, timeB){
    if(parseInt(timeA[0]) < parseInt(timeB[0])){
        return true;
    }
    else if(parseInt(timeA[0]) > parseInt(timeB[0])){
        return false;
    }
    else{
        if(parseInt(timeA[1]) < parseInt(timeB[1])){
            return true;
        }
        else if(parseInt(timeA[1]) > parseInt(timeB[1])){
            return false;
        }
        else{
            if(parseInt(timeA[2]) <= parseInt(timeB[2])){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function SubmissionInPeriod(begin, end){
    startTime = begin.split(":");
    endTime = end.split(":");
    let res = 0;
    for(let i = 0; i < submissions.length; i++){
        let time = submissions[i].TimePoint.split(":");
        if(IsEarlier(startTime, time) && IsEarlier(time, endTime)){
            res ++;
        }
    }
    return res;
}

function AnalyzeCodeSubmission(input){
    const lines = input.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch (query[0]){
            case "?total_number_submissions":
                console.log(submissions.length);
                break;
            case "?number_error_submision":
                console.log(ErrorSubmissions());
                break;
            case "?number_error_submision_of_user":
                console.log(ErrorSubmissionsOfUser(query[1]));
                break;
            case "?total_point_of_user":
                console.log(PointOfUser(query[1]));
                break;
            case "?number_submission_period":
                console.log(SubmissionInPeriod(query[1], query[2]));
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
                submissions.push(submission);
                break;
        }
    }
}

var input = 'U001 P01 10:30:20 ERR 0\nU001 P01 10:35:20 OK 10\nU001 P02 10:40:20 ERR 0\nU001 P02 10:55:20 OK 7\nU002 P01 10:40:20 ERR 0\nU001 P01 11:35:20 OK 8\nU002 P02 10:40:20 OK 10\n#\n?total_number_submissions\n?number_error_submision\n?number_error_submision_of_user U002 \n?total_point_of_user U001 \n?number_submission_period 10:00:00 11:30:45\n#';

AnalyzeCodeSubmission(input);