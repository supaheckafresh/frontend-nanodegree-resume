var name = "Neil Strain";
var role = "Web Developer";
var contactInfo = {
	"email" : "neilstrain@gmail.com",
	"mobile" : "(562)810-2501",
	"github" : "blank",
	"location" : "Exeter, CA"
};
var pictureUrl = "https://s3.amazonaws.com/teacher-files-musicteachershelper-com/21871/neil.jpg";
var welcomeMsg = "hello and welcome to my humble abode.";
var skills = {"awesomeness", 
			"discipline", 
			"patience", 
			"management", 
			"sales"};

var bio = {
	"name" : name,
	"role" : role,
	"contactInfo" : contactInfo,
	"pictureUrl" : pictureUrl,
	"welcomeMsg" : welcomeMsg,
	"skills" : skills
};

//TODO : get this working
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
var formattedEmail = HTMLemail.replace("%data%", contactInfo.email);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").prepend(formattedEmail);
