console.log('Sanity Check: JS is working!');

$(document).ready(function(){

  // code in here
  // log name of course
  console.log(course['name']);
  console.log(course.name);

  // log first student's id
  console.log(course['students'][0]['id']);
  console.log(course.students[0].id);

  // log first student's full name
  console.log(course['students'][0]['firstName'] +
  	' ' + course['students'][0]['lastName']);
  console.log(course.students[0].firstName + 
  	' ' + course.students[0].lastName);

  // log number of students in class
  console.log(course['students'].length);
  console.log(course.students.length);

  // log a list of GitHub usernames
  course['students'].forEach(function logGitHubName(student){
  	console.log(student.gitHub);
  });
   course.students.forEach(function logGitHubName(student){
  	console.log(student.gitHub);
  });

  var $studentList = $('.studentList');
  renderGitHubLinks(course['students']);

});

var course = {
	name: "Web Development Immersive",
	students: [
		{
			firstName: "Adam",
			lastName: "nnnnnnnnnn",
			gitHub: "annnnnnńn"
		}
	]
}

function buildGitHubLink(singleStudent){
	return '<a href="' + singleStudent.gitHub + 
		'">"' + singleStudent.firstName + " " + 
		singleStudent.lastName + "</a>";
}

function renderGitHubLinks(allStudents){
	allStudents.forEach(function addStudentToPage(student){
		var gitHubLink = buildGitHubLink(singleStudent);
		$studentList.append(gitHubLink);
	});
}
