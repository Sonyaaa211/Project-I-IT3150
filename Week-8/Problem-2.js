project.problemInfo[43] = "Citizen Data Analysis."

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

project.citizenDatas = [];

project.PeopleBornAt = function(date){
    let filter = project.citizenDatas.filter(citizen => {
        if(citizen.birthDate == date) return true;
    })
    return filter;
}


project.countAliveAncestor = 0;
project.MostAliveAncestor= function(code){
    project.countAliveAncestor = 0;
    let filter = project.citizenDatas.filter(citizen => {if(citizen.code == code) return true;})
    project.backtracking82(filter[0], 1);
    return project.countAliveAncestor;
}

project.backtracking82 = function(citizen, k){
    if(citizen.alive === 'Y'){
        for(let i = 0 ; i< project.citizenDatas.length; i++){
            if(project.citizenDatas[i].code == citizen.fartherCode  || project.citizenDatas[i].code == citizen.motherCode){  
                project.countAliveAncestor = project.countAliveAncestor > k ? project.countAliveAncestor : k; 
                project.backtracking82(project.citizenDatas[i], k+1);
            }    
        }
    }
}

project.PeopleBornBetween = function(begin, end){
    let startTime = begin.split("-");
    let endTime = end.split("-");
    let res = 0;
    for(let i = 0; i < project.citizenDatas.length; i++){
        let time = project.citizenDatas[i].birthDate.split("-");
        if(project.IsEarlier(startTime, time) && project.IsEarlier(time, endTime)){
            res ++;
        }
    }
    return res;
}

project.UnrelatedPeople = function(){
    let res = 0;
    for(let i = 0; i < project.citizenDatas.length; i++){
        let check = false;
        for(let j = 0; j < project.citizenDatas.length; j++){
            if(project.citizenDatas[j].code == project.citizenDatas[i].fartherCode || project.citizenDatas[j].code == project.citizenDatas[i].motherCode){
                check = true;
                break;
            }
        }
        if(check == false) res++;
    }
    return res;
}

project.solution_8_2 = function(input){
    const lines = input.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch (query[0]){
            case "NUMBER_PEOPLE":
                project.res += project.citizenDatas.length + "\n";
                break;
            case "NUMBER_PEOPLE_BORN_AT":
                project.res += project.PeopleBornAt(query[1]).length + "\n";
                break;
            case "MOST_ALIVE_ANCESTOR":
                project.res += project.MostAliveAncestor(query[1]) + "\n";
                break;
            case "NUMBER_PEOPLE_BORN_BETWEEN":
                project.res += project.PeopleBornBetween(query[1], query[2]) + "\n";
                break;
            case "MAX_UNRELATED_PEOPLE":
                project.res += project.UnrelatedPeople() + "\n";
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
                project.citizenDatas.push(citizen);
                break;
        }
    }
    return project.res;
}

var input = '0000001 1920-08-10 0000000 0000000 Y 00002\n0000002 1920-11-03 0000000 0000000 Y 00003\n0000003 1948-02-13 0000001 0000002 Y 00005\n0000004 1946-01-16 0000001 0000002 Y 00005\n0000005 1920-11-27 0000000 0000000 Y 00005\n0000006 1920-02-29 0000000 0000000 Y 00004\n0000007 1948-07-18 0000005 0000006 Y 00005\n0000008 1948-07-18 0000005 0000006 Y 00002\n0000009 1920-03-09 0000000 0000000 Y 00005\n0000010 1920-10-16 0000000 0000000 Y 00005\n*\nNUMBER_PEOPLE\nNUMBER_PEOPLE_BORN_AT 1919-12-10\nNUMBER_PEOPLE_BORN_AT 1948-07-18\nMAX_UNRELATED_PEOPLE\nMOST_ALIVE_ANCESTOR 0000008\nMOST_ALIVE_ANCESTOR 0000001\nNUMBER_PEOPLE_BORN_BETWEEN 1900-12-19 1928-11-16\nNUMBER_PEOPLE_BORN_BETWEEN 1944-08-13 1977-12-15\nNUMBER_PEOPLE_BORN_BETWEEN 1987-01-24 1988-06-03\n***';