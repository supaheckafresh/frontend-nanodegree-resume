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

var title = "Owner / Guitar Instructor";
var employer = "Neil's Guitar Pickin' Studio (self-employed)";
var yearsWorked = "2013 - Present";
var workLocation = "Exeter, CA";

var school = "California Institute of the Arts";
var degree = "BFA - Music Technology";
var yearsAttended = "2003 - 2006";
var schoolCity = "Valencia, CA";

var bio = {
	"name" : name,
	"role" : role,
	"contacts" : contacts,
	"bioPic" : bioPic,
	"welcomeMsg" : welcomeMsg,
	"skills" : skills
};

var work = {};
work.employer = employer;
work.title = title;
work.yearsWorked = yearsWorked;
work.workLocation = workLocation;

var education = {};
education["school"] = school;
education["degree"] = degree;
education["yearsAttended"] = yearsAttended;
education["schoolCity"] = schoolCity;

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

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.title);

var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedbioPic);
$("#header").append(formattedWelcomeMsg);
$("#header").append(formattedSkills);

$("#work-experience").append(HTMLworkStart);
$("#work-experience").append(formattedWorkTitle);
$("#work-experience").append(formattedWorkEmployer);

$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName);


$("#footer-contacts").append(formattedEmail);
$("#footer-contacts").append(formattedMobile);
$("#footer-contacts").append(formattedGithub);
$("#footer-contacts").append(formattedLocation);
