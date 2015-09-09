var name = "Neil Strain";
var role = "Web Developer";
var email = "neilstrain@gmail.com";
var mobile = "(562)810-2501";
var github = "https://github.com/supaheckafresh";
// var location = "Exeter, CA";
var bioPic = "https://s3.amazonaws.com/teacher-files-musicteachershelper-com/21871/neil.jpg";
var welcomeMsg = "hello and welcome to my humble abode.";
var skills = ["awesomeness", "discipline", "patience", "management", "sales"];

var bio = {
	"name" : name,
	"role" : role,
	"email" : email,
	"mobile" : mobile,
	"github" : github,
	// "location" : location,
	"bioPic" : bioPic,
	"welcomeMsg" : welcomeMsg,
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills = HTMLskills.replace("%data%", bio.skills.join(", "));
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
var formattedGithub = HTMLgithub.replace("%data%", bio.github);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedbioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedGithub);
