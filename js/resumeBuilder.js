var name = "Neil Strain";
var role = "Web Developer";
var contacts = {
	"mobile" : "(562)810-2501",
	"email" : "neilstrain@gmail.com",
	"github" : "https://github.com/supaheckafresh",
	"location" : "Exeter, CA"
};
var bioPic = "https://s3.amazonaws.com/teacher-files-musicteachershelper-com/21871/neil.jpg";
var welcomeMsg = "hello and welcome to my humble abode.";
var skills = ["awesomeness", "discipline", "patience", "management", "sales"];

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : contacts,
	"bioPic" : bioPic,
	"welcomeMsg" : welcomeMsg,
	"skills" : skills
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedSkills = HTMLskills.replace("%data%", bio.skills
		.join('</span></li>\n<li class="flex-item"><span class="white-text">'));
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedbioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
