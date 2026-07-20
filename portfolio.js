function calculateGrade(){
let name = document.getElementById("studentName").value;
let score = Number(document.getElementById("studentScore").value);

let grade = "";
let remark = "";

if(score>=70){
    grade = "A";
    remark = "Excellent";
}else if(score>=60){
    grade = "B";
    remark = "Very Good";
}
else if(score>=50){
    grade = "C";
    remark = "Good";
}else if(score>=40){
    grade = "D";
    remark = "Fair";
}else{
    grade = "F";
    remark = "Fail";
}

document.getElementById("outName").textContent = name;
document.getElementById("outScore").textContent = score;
document.getElementById("outGrade").textContent = grade;
document.getElementById("outRemark").textContent = remark;

document.getElementById("resultBox").style.display = "block";
}