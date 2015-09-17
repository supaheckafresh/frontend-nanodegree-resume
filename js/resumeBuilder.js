var bio = {
	"name" : "Neil Strain",
	"role" : "Web Developer",
	"welcomeMsg" : "Thanks for checking out my resume!",
	"bioPic" : "http://lorempixel.com/150/150",
	"contacts" : {
		"mobile" : "(562)810-2501",
		"email" : "neilstrain@gmail.com",
		"github" : "https://github.com/supaheckafresh",
		"location" : "Exeter, CA"
	},
	"skills" : [
		"JavaScript",
		"Python",
		"Java",
		"jQuery",
		"CSS",
		"HTML5",
		"Bootstrap",
		"Object-Oriented Programming",
		"Jinja2",
		"SQLite",
		"Git/GitHub",
		"Web Apps",
		"Operations Management",
		"Sales",
		"Customer Service",
		"Management",
		"Strategy",
		"Marketing"
	]
};

var work = {
	"jobs" : [
		{
			"employer" : "Neil's Guitar Pickin' Studio (self-employed)",
			"title" : "Owner / Guitar Instructor",
			"dates" : "August 2013 - Present",
			"location" : "Exeter, CA",
			"description" : "Private guitar lessons. Host visting artist concerts and group workshops."
		},
		{
			"employer" : "Digital Waybill",
			"title" : "Operations Manager",
			"dates" : "October, 2009 - May, 2013",
			"location" : "Santa Monica, CA",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata."
		},
		{
			"employer" : "Morgan Stanley Smith Barney",
			"title" : "Financial Advisor",
			"dates" : "January, 2006 - September, 2009",
			"location" : "Long Beach, CA",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata."
		}
	]
};

var education = {
	"schools" : [
		{
			"name" : "California Institute of the Arts",
			"location" : "Valencia, CA",
			"degree" : ["BFA - Music Technology"],
			"dates" : "September, 2003 - December, 2006",
			"url" : "https://calarts.edu/"
		}
	],
	"onlineCourses" : [
		{
			"school" : "Udacity",
			"title" : "Nanodegree - Intro to Programming",
			"dates" : "Feb - July, 2015",
			"url" : "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
		},
		{
			"school" : "Udacity",
			"title" : "Nanodegree - Front-End Web Developer",
			"dates" : "August, 2015 - Present",
			"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Composing and recording original music",
			"dates" : "1997 - Present",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata.",
			"images" : ["http://lorempixel.com/400/200", "http://lorempixel.com/400/200"]
		},
		{
			"title" : "Playing guitar",
			"dates" : "1991 - Present",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata.",
			"images" : ["http://lorempixel.com/nature/400/200"]
		},
		{
			"title" : "Refurbishing old furniture",
			"dates" : "2011 - Present",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata.",
			"images" : ["http://lorempixel.com/sports/400/200"]
		},
		{
			"title" : "Painting and illustrating",
			"dates" : "1983 - Present",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata.",
			"images" : ["http://lorempixel.com/abstract/400/200"]
		},
		{
			"title" : "Cooking",
			"dates" : "2001 - Present",
			"description" : "Vis sensibus forensibus moderatius cu. Eu modo malis aeterno cum, cu sit offendit interpretaris. Dicant animal verterem eum an, mei in consulatu dignissim, id vim summo saperet delicata.",
			"images" : ["http://lorempixel.com/people/400/200"]
		}
	]
};

var volunteering = {
	"activities" : [
		{
			"title" : "Three Rivers, CA Library - Children's Summer Reading Program",
			"dates" : "July, 2013 and July, 2014",
			"location" : "Three Rivers, CA",
			"description" : "Both volunteering events took place during the Library's annual summer booksale fundraiser. In 2013, I performed a free guitar concert for visitors, and afterwards I gave a free lesson for several kids (I let them play on a spare guitar). In 2014, I helped 25+ children build shoebox guitars and conducted them in a performance with their new instruments while their parents looked on."
		},
		{
			"title" : "The Midnight Mission - Meal Service & Food Bags",
			"dates" : "December 25, 2010 through 2013",
			"location" : "Los Angeles, CA",
			"description" : "Served Christmas breakfast to homeless people & families. Prepared and distributed food bags."
		},
		{
			"title" : "Habitat for Humanity - ReStore Booth",
			"dates" : "September 21, 2013",
			"location" : "Visalia, CA",
			"description" : "Operated the ReStore booth at the 2013 Visalia Home Expo. Provided information to guests, gathered contact information from potential donors, distributed brochures, and showed off \"repurposed\" furniture, home accessories, and building materials."
		}
	]
};

var otherLocations = {
	"locations" : [
		"Chicago, IL",
		"Hammond, IN",
		"San Mateo, CA",
		"Redwood City, CA",
	]
};

bio.display = function() {
	if(bio.name.length > 0 && bio.role.length > 0) {

		if(bio.welcomeMsg.length > 0) {
			var formattedWelcomeMsg =
				HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
			prependToPage(formattedWelcomeMsg, "#header");
		}

		if(bio.bioPic.length > 0) {
			var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
			prependToPage(formattedBioPic, "#header");
		}

		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		prependToPage(formattedRole, "#header");
		prependToPage(formattedName, "#header");

		displayContacts();
		displaySkills();
		displayInternationalizeButton();
	}
};

bio.display();

function displayContacts() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation =
		HTMLlocation.replace("%data%", bio.contacts.location);

	appendToPage(
		formattedMobile +
		formattedEmail +
		formattedGithub +
		formattedLocation, "#topContacts");

	appendToPage(
		formattedMobile +
		formattedEmail +
		formattedGithub +
		formattedLocation, "#footerContacts");
}

function displaySkills() {
	if(bio.skills.length > 0) {
		appendToPage(HTMLskillsStart, "#header");

		for (var eachSkill = 0; eachSkill < bio.skills.length; eachSkill++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[eachSkill]);
			appendToPage(formattedSkill, "#skills");
		}
	}
}

function displayInternationalizeButton() {
	appendToPage(internationalizeButton, "#main");
}


work.display = function() {
	if(work.jobs.length > 0) {
		for(var jobIndex in work.jobs) {
			var eachJob = work.jobs[jobIndex];

			appendToPage(HTMLworkStart, "#workExperience");

			var formattedEmployer = HTMLworkEmployer.replace("%data%", eachJob.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", eachJob.title);
			appendToPage(formattedEmployer + formattedTitle, ".work-entry:last");

			var formattedDates = HTMLworkDates.replace("%data%", eachJob.dates);
			appendToPage(formattedDates, ".work-entry:last");

			var formattedLocation = HTMLworkLocation.replace("%data%", eachJob.location);
			appendToPage(formattedLocation, ".work-entry:last");

			var formattedDescription =
				HTMLworkDescription.replace("%data%", eachJob.description);
			appendToPage(formattedDescription, ".work-entry:last");
		}
	}
};

work.display();


education.display = function() {
	if(education.schools.length > 0) {
		appendToPage(HTMLschoolStart, "#education");
		for(var schoolIndex in education.schools) {
			var school = education.schools[schoolIndex];
			var formattedName = HTMLschoolName.replace("%data%", school.name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

			appendToPage(formattedName +
				formattedDegree +
				formattedLocation +
				formattedDates, ".education-entry:last");
		}
	}

	if(education.onlineCourses.length > 0) {
		appendToPage(HTMLonlineSchoolStart, "#onlineCourses");
		for(var courseIndex in education.onlineCourses) {
			var course = education.onlineCourses[courseIndex];
			var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
			var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
			var formattedOnlineDates =
				HTMLonlineDates.replace("%data%", course.dates);
			var formattedURL = HTMLonlineURL.replace("%data%", course.url);

			appendToPage(formattedTitle +
				formattedSchool +
				formattedURL +
				formattedOnlineDates, ".online-education-entry:last");
		}
	}
};

education.display();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(var projIndex in projects.projects) {
			var project = projects.projects[projIndex];

			appendToPage(HTMLprojectStart, "#projects");

			var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
			appendToPage(formattedTitle, ".project-entry:last");

			var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
			appendToPage(formattedDates, ".project-entry:last");

			var formattedDesc =
				HTMLprojectDescription.replace("%data%", project.description);
			appendToPage(formattedDesc, ".project-entry:last");

			if(project.images.length > 0) {
				for(var imageIndex in project.images) {
					var image = project.images[imageIndex];
					var formattedImage = HTMLprojectImage.replace("%data%", image);
					appendToPage(formattedImage, ".project-entry:last");
				}
			}
		}
	}
};

projects.display();


volunteering.display = function() {
	if(volunteering.activities.length > 0) {
		appendToPage(HTMLvolunteeringStart, "#volunteering");
		for(var activityIndex in volunteering.activities) {
			var activity = volunteering.activities[activityIndex];
			var formattedTitle =
				HTMLvolunteeringTitle.replace("%data%", activity.title);
			var formattedDates =
				HTMLvolunteeringDates.replace("%data%", activity.dates);
			var formattedLocation =
				HTMLvolunteeringLocation.replace("%data%", activity.location);
			var formattedDescription =
				HTMLvolunteeringDescription.replace("%data%", activity.description);

			appendToPage(formattedTitle +
				formattedDates +
				formattedLocation +
				formattedDescription, ".volunteering-entry:last");
		}
	}
};

volunteering.display();


function displayMap() {
	appendToPage(googleMap, "#mapDiv");
}

displayMap();
