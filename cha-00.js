/* Create an array with 5 students names, after that 
create a fimctopm wjocj takes 2 pm (allStudents & studentName) 
iterate over all students and find that specific user "studentName"   */


let allStudents = ["Ratul", "Nishant", "Protik", "Tauhid", "Riad"];



function searchStudent(allStudents, studentName) {
    
    let isFound = -1;
    for(let i = 0; i < allStudents.length; i++){
        if(allStudents[i] == studentName){
            isFound += 1;
        } else {
            isFound;
        }
    }
    if(isFound >= 0){
        console.log("Yes we find you dear...");
    } else {
        console.log("Not there.");
    }

}



searchStudent(allStudents, "Protik");