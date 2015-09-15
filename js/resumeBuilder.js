var bio = {
	"name" : "Neil Strain",
	"role" : "Web Developer",
	"welcomeMsg" : "Thanks for checking out my resume!",
	"contacts" : {
		"mobile" : "(562)810-2501",
		"email" : "neilstrain@gmail.com",
		"github" : "https://github.com/supaheckafresh",
		"location" : "Exeter, CA"
	},
	"skills" : [
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
			"description" : "Private guitar lessons"
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

function displayHeader() {
	if(bio.name.length > 0 && bio.role.length > 0) {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		displayInternationalizeButton();
	}
}

displayHeader();

function displaySkills() {
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var eachSkill = 0; eachSkill < bio.skills.length; eachSkill++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[eachSkill]);
			$("#skills").append(formattedSkill);
		}
	}
}

displaySkills();

function displayInternationalizeButton() {
	$("#main").append(internationalizeButton);
}

function displayWork() {
	if(work.jobs.length > 0) {
		for(var jobIndex in work.jobs) {
			var eachJob = work.jobs[jobIndex];

			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", eachJob.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", eachJob.title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);

			var formattedDates = HTMLworkDates.replace("%data%", eachJob.dates);
			$(".work-entry:last").append(formattedDates);

			var formattedLocation = HTMLworkLocation.replace("%data%", eachJob.location);
			$(".work-entry:last").append(formattedLocation);

			var formattedDescription = HTMLworkDescription.replace("%data%", eachJob.description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

displayWork();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(var projIndex in projects.projects) {
			var eachProj = projects.projects[projIndex];

			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", eachProj.title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", eachProj.dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDesc = HTMLprojectDescription.replace("%data%", eachProj.description);
			$(".project-entry:last").append(formattedDesc);

			if (eachProj.images.length > 0) {
				for(var imageIndex in eachProj.images) {
					var image = eachProj.images[imageIndex];
					var formattedImage = HTMLprojectImage.replace("%data%", image);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	}
};

projects.display();

function locationizer(work) {
    var locations = [];
    for (var job in work.jobs) {
        var thisLocation = work.jobs[job].location;
        locations.push(thisLocation);
    }
    return locations;
}

function displayMap() {
	$("#mapDiv").append(googleMap);
}

displayMap();
