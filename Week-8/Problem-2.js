/*Citizen Data Analysis.*/

class CitizenData{
    constructor(){
        this.code = "";
        this.birthDate = "";
        this.fartherCode = "";
        this.motherCode = "";
        this.alive = "Y";
        this.regionCode = "";
    }
}

let citizenDatas = [];

function PeopleBornAt(date){
    let filter = citizenDatas.filter(citizen => {
        if(citizen.birthDate == date) return true;
    })
    return filter;
}


let countAliveAncestor = 0;
function MostAliveAncestor(code){
    countAliveAncestor = 0;
    let filter = citizenDatas.filter(citizen => {if(citizen.code == code) return true;})
    TRY(filter[0], 1);
    return countAliveAncestor;
}

function TRY(citizen, k){
    if(citizen.alive === 'Y'){
        for(let i = 0 ; i< citizenDatas.length; i++){
            if(citizenDatas[i].code == citizen.fartherCode  || citizenDatas[i].code == citizen.motherCode){  
                countAliveAncestor = countAliveAncestor > k ? countAliveAncestor : k; 
                TRY(citizenDatas[i], k+1);
            }    
        }
    }
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

function PeopleBornBetween(begin, end){
    startTime = begin.split("-");
    endTime = end.split("-");
    let res = 0;
    for(let i = 0; i < citizenDatas.length; i++){
        let time = citizenDatas[i].birthDate.split("-");
        if(IsEarlier(startTime, time) && IsEarlier(time, endTime)){
            res ++;
        }
    }
    return res;
}

function UnrelatedPeople(){
    let res = 0;
    for(let i = 0; i < citizenDatas.length; i++){
        let check = false;
        for(let j = 0; j < citizenDatas.length; j++){
            if(citizenDatas[j].code == citizenDatas[i].fartherCode || citizenDatas[j].code == citizenDatas[i].motherCode){
                check = true;
                break;
            }
        }
        if(check == false) res++;
    }
    return res;
}

function AnalyzeCitizenData(input){
    const lines = input.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch (query[0]){
            case "NUMBER_PEOPLE":
                console.log(citizenDatas.length);
                break;
            case "NUMBER_PEOPLE_BORN_AT":
                console.log(PeopleBornAt(query[1]).length);
                break;
            case "MOST_ALIVE_ANCESTOR":
                console.log(MostAliveAncestor(query[1]));
                break;
            case "NUMBER_PEOPLE_BORN_BETWEEN":
                console.log(PeopleBornBetween(query[1], query[2]));
                break;
            case "MAX_UNRELATED_PEOPLE":
                console.log(UnrelatedPeople());
                break;
            case "*":
            case "***":
                break;
            default:
                let citizen = new CitizenData();
                citizen.code = query[0];
                citizen.birthDate = query[1];
                citizen.fartherCode = query[2];
                citizen.motherCode = query[3];
                citizen.alive = query[4];
                citizen.regionCode = query[5];
                citizenDatas.push(citizen);
                break;
        }
    }
}

var input = '0000001 1920-08-10 0000000 0000000 Y 00002\n0000002 1920-11-03 0000000 0000000 Y 00003\n0000003 1948-02-13 0000001 0000002 Y 00005\n0000004 1946-01-16 0000001 0000002 Y 00005\n0000005 1920-11-27 0000000 0000000 Y 00005\n0000006 1920-02-29 0000000 0000000 Y 00004\n0000007 1948-07-18 0000005 0000006 Y 00005\n0000008 1948-07-18 0000005 0000006 Y 00002\n0000009 1920-03-09 0000000 0000000 Y 00005\n0000010 1920-10-16 0000000 0000000 Y 00005\n*\nNUMBER_PEOPLE\nNUMBER_PEOPLE_BORN_AT 1919-12-10\nNUMBER_PEOPLE_BORN_AT 1948-07-18\nMAX_UNRELATED_PEOPLE\nMOST_ALIVE_ANCESTOR 0000008\nMOST_ALIVE_ANCESTOR 0000001\nNUMBER_PEOPLE_BORN_BETWEEN 1900-12-19 1928-11-16\nNUMBER_PEOPLE_BORN_BETWEEN 1944-08-13 1977-12-15\nNUMBER_PEOPLE_BORN_BETWEEN 1987-01-24 1988-06-03\n***';
AnalyzeCitizenData(input);