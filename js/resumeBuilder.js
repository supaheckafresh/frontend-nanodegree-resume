




model.bio.display = function() {
    if (model.bio.name.length > 0 && model.bio.role.length > 0) {

        var formattedRole = HTMLheaderRole.replace("%data%", model.bio.role);
        var formattedName = HTMLheaderName.replace("%data%", model.bio.name);
        prependToPage(HTMLdropdown, "#header");
        prependToPage(formattedRole, "#header");
        prependToPage(formattedName, "#header");

        displayContacts();

        if (model.bio.welcomeMsg.length > 0) {
            var formattedWelcomeMsg =
                HTMLwelcomeMsg.replace("%data%", model.bio.welcomeMsg);
            appendToPage(formattedWelcomeMsg, "#header");
        }

        if (model.bio.bioPic.length > 0) {
            var formattedBioPic = HTMLbioPic.replace("%data%", model.bio.bioPic);
            appendToPage(formattedBioPic, "#header");
        }

        displaySkills();
        displayInternationalizeButton();
    }


    function displayContacts() {
        if (!$.isEmptyObject(model.bio.contacts)) {
            var formattedMobile = HTMLmobile.replace("%data%", model.bio.contacts.mobile);
            var formattedEmail = HTMLemail.replace(/%data%/g, model.bio.contacts.email);
            var formattedGithub = HTMLgithub.replace(/%data%/g, model.bio.contacts.github);
            var formattedLocation =
                HTMLlocation.replace("%data%", model.bio.contacts.location);

            appendToPage(
                formattedMobile +
                formattedEmail +
                formattedGithub +
                formattedLocation, "#topContacts", "#footerContacts");
        }
    }

    function displaySkills() {
        if (model.bio.skills.length > 0) {
            appendToPage(HTMLskillsStart, "#header");

            for (var eachSkill = 0; eachSkill < model.bio.skills.length; eachSkill++) {
                var formattedSkill = HTMLskills.replace("%data%", model.bio.skills[eachSkill]);
                appendToPage(formattedSkill, "#skills");
            }
        }
    }

    function displayInternationalizeButton() {
        appendToPage(internationalizeButton, "#header");
    }
};

model.bio.display();


model.work.display = function() {
    if (model.work.jobs.length > 0) {
        for (var jobIndex in model.work.jobs) {
            var eachJob = model.work.jobs[jobIndex];

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

model.work.display();


model.education.display = function() {
    if (model.education.schools.length > 0) {
        appendToPage(HTMLschoolStart, "#education");
        for (var schoolIndex in model.education.schools) {
            var school = model.education.schools[schoolIndex];
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

    if (model.education.onlineCourses.length > 0) {
        appendToPage(HTMLonlineSchoolStart, "#onlineCourses");
        for (var courseIndex in model.education.onlineCourses) {
            var course = model.education.onlineCourses[courseIndex];
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

model.education.display();


model.projects.display = function() {
    if (model.projects.projects.length > 0) {
        for (var projIndex in model.projects.projects) {
            var project = model.projects.projects[projIndex];

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

model.projects.display();


model.volunteering.display = function() {
    if (model.volunteering.activities.length > 0) {
        appendToPage(HTMLvolunteeringStart, "#volunteering");
        for (var activityIndex in model.volunteering.activities) {
            var activity = model.volunteering.activities[activityIndex];
            var formattedTitle =
                HTMLvolunteeringTitle.replace("%data%", activity.title)
                .replace("#", activity.url);
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

model.volunteering.display();

//not encapsulating because there is no map JSON object.
function displayMap() {
    appendToPage(googleMap, "#mapDiv");
}

displayMap();
