function averageInteractionFunc(){
    var averageInteraction = document.getElementById("averageInteraction").value;
    document.getElementById("real-progress").innerHTML = averageInteraction + '%';
    averageFunc();
}

function bagPerWeekFunc(){
    var bagPerWeek = document.getElementById("bagPerWeek").value;
    document.getElementById("bag-per-week-percentage").innerHTML = bagPerWeek + '%';
    averageFunc();
}
function escalatedCallFunc(){
    var escalatedCall = document.getElementById("escalatedCallPercent").value;
    document.getElementById("escelate-call").innerHTML = escalatedCall + '%';
    averageFunc();
}
function averageFunc(){
    var averageInteraction = document.getElementById("averageInteraction").value;
    var bagPerWeek = document.getElementById("bagPerWeek").value;
    var escalatedCall = document.getElementById("escalatedCallPercent").value;
    var average = (parseInt(escalatedCall) + parseInt(bagPerWeek) + parseInt(averageInteraction)) / 3;
    document.getElementById("average").innerHTML = average.toFixed(0)+ '%';
    document.getElementById("updateprogressbar").style.width = average + '%';
}