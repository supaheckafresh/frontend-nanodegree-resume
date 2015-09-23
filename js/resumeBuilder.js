
bio.display = function() {
    if (bio.name.length > 0 && bio.role.length > 0) {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        prependToPage(formattedRole, "#header");
        prependToPage(formattedName, "#header");

        displayContacts();

        if (bio.welcomeMsg.length > 0) {
            var formattedWelcomeMsg =
                HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
            appendToPage(formattedWelcomeMsg, "#header");
        }

        if (bio.bioPic.length > 0) {
            var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
            appendToPage(formattedBioPic, "#header");
        }

        displaySkills();
        displayInternationalizeButton();
    }


    function displayContacts() {
        if (!$.isEmptyObject(bio.contacts)) {
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts.email);
            var formattedGithub = HTMLgithub.replace(/%data%/g, bio.contacts.github);
            var formattedLocation =
                HTMLlocation.replace("%data%", bio.contacts.location);

            appendToPage(
                formattedMobile +
                formattedEmail +
                formattedGithub +
                formattedLocation, "#topContacts", "#footerContacts");
        }
    }

    function displaySkills() {
        if (bio.skills.length > 0) {
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
};

bio.display();


work.display = function() {
    if (work.jobs.length > 0) {
        for (var jobIndex in work.jobs) {
            var eachJob = work.jobs[jobIndex];

            appendToPage(HTMLworkStart, "#workExperience");

            var formattedEmployer = HTMLworkEmployer.replace("%data%", eachJob.employer)
              .replace("#", eachJob.url);
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
    if (education.schools.length > 0) {
        appendToPage(HTMLschoolStart, "#education");
        for (var schoolIndex in education.schools) {
            var school = education.schools[schoolIndex];
            var formattedName = HTMLschoolName.replace("%data%", school.name)
              .replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree[schoolIndex]);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.major[schoolIndex]);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

            appendToPage(formattedName +
                formattedDegree +
                formattedLocation +
                formattedDates +
                formattedMajor, ".education-entry:last");
        }
    }

    if (education.onlineCourses.length > 0) {
        appendToPage(HTMLonlineSchoolStart, "#onlineCourses");
        for (var courseIndex in education.onlineCourses) {
            var course = education.onlineCourses[courseIndex];
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title)
              .replace("#", course.url);
            var formattedOnlineDates =
                HTMLonlineDates.replace("%data%", course.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url)
              .replace("#", course.url);

            appendToPage(formattedTitle +
                formattedSchool +
                formattedOnlineDates +
                formattedURL, ".online-education-entry:last");
        }
    }
};

education.display();


projects.display = function() {
    if (projects.projects.length > 0) {
        for (var projIndex in projects.projects) {
            var project = projects.projects[projIndex];

            appendToPage(HTMLprojectStart, "#projects");

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            appendToPage(formattedTitle, ".project-entry:last");

            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            appendToPage(formattedDates, ".project-entry:last");

            var formattedDesc =
                HTMLprojectDescription.replace("%data%", project.description);
            appendToPage(formattedDesc, ".project-entry:last");

            if (project.images.length > 0) {
                for (var imageIndex in project.images) {
                    var image = project.images[imageIndex];
                    if (image.indexOf("images/") != -1) {
                        var formattedImage = HTMLprojectImage.replace("%data%", image);
                        appendToPage(formattedImage, ".project-entry:last");
                    } else {
                        var iFrame = image;
                        appendToPage(iFrame, ".project-entry:last");
                    }
                }
            }
        }
    }
};

projects.display();


volunteering.display = function() {
    if (volunteering.activities.length > 0) {
        appendToPage(HTMLvolunteeringStart, "#volunteering");
        for (var activityIndex in volunteering.activities) {
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
