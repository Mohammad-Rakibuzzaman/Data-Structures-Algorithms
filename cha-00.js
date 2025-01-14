/* Create an array with 5 students names, after that 
create a fimctopm wjocj takes 2 pm (allStudents & studentName) 
iterate over all students and find that specific user "studentName"   */


//this is the data structure (Which is array ;)))
const allStudents = ["Ratul", "Nishant", "Protik", "Tauhid", "Riad"];



function searchStudent(allStudents, studentName) {
    

    //below is the algorithm we used so far
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


//arrow function es 6 i gueess

const findStudent = (allStudents, studentName) => {

    for(let i = 0; i < allStudents.length; i++){
        if(allStudents[i] === studentName){
            console.log(`Found ${studentName}`);
        } 
    }

}


// searchStudent(allStudents, "Protik");
findStudent(allStudents, "Protik");