
//******MODEL METHODS******//
model.getHTML = function () {
    return model.HTML;
};

model.getResumeData = function (section) {

    switch (section) {
        case 'bio':
            return model.bio;
            break;
        case 'work':
            return model.work;
            break;
        case 'eductation':
            return model.education;
            break;
        case 'projects':
            return model.projects;
            break;
        case 'volunteering':
            return model.volunteering;
            break;
        case 'otherLocations':
            return model.otherLocations;
            break;
        default:
            console.log('Problem with resume data request');
    }
};


//******CONTROLLER******//
var controller = {
    init: function () {
        // store HTML snippets in controller and access in views with controller.HTML
        this.getHTML();

        // fetch and display bio data
        bioView.init();
        bioView.display();

        // fetch and display work data
        workView.init();
        workView.display();
    },

    getHTML: function () {
        this.HTML = model.getHTML();
    },

    getResumeData: function (section) {
        return model.getResumeData(section);
    }

};


//******VIEWS******//
var bioView = {

    init: function () {
        this.bio = controller.getResumeData('bio');
    },

    display: function () {
        if (this.bio.name.length > 0 && this.bio.role.length > 0) {

            // display name and role
            var formattedRole = controller.HTML.headerRole.replace("%data%", this.bio.role);
            var formattedName = controller.HTML.headerName.replace("%data%", this.bio.name);
            prependToPage(controller.HTML.dropdown, "#header");
            prependToPage(formattedRole, "#header");
            prependToPage(formattedName, "#header");

            // display welcome message
            if (this.bio.welcomeMsg.length > 0) {
                var formattedWelcomeMsg =
                    controller.HTML.welcomeMsg.replace("%data%", this.bio.welcomeMsg);
                appendToPage(formattedWelcomeMsg, "#header");
            }

            // display bio picture
            if (this.bio.bioPic.length > 0) {
                var formattedBioPic = controller.HTML.bioPic.replace("%data%", this.bio.bioPic);
                appendToPage(formattedBioPic, "#header");
            }

            // display contacts
            if (!$.isEmptyObject(this.bio.contacts)) {
                var formattedMobile = controller.HTML.mobile.replace("%data%", this.bio.contacts.mobile);
                var formattedEmail = controller.HTML.email.replace(/%data%/g, this.bio.contacts.email);
                var formattedGithub = controller.HTML.github.replace(/%data%/g, this.bio.contacts.github);
                var formattedLocation =
                    controller.HTML.location.replace("%data%", this.bio.contacts.location);

                appendToPage(
                    formattedMobile +
                    formattedEmail +
                    formattedGithub +
                    formattedLocation, "#topContacts", "#footerContacts");
            }

            // display skills
            if (this.bio.skills.length > 0) {
                appendToPage(controller.HTML.skillsStart, "#header");

                for (var eachSkill = 0; eachSkill < this.bio.skills.length; eachSkill++) {
                    var formattedSkill = controller.HTML.skills.replace("%data%", this.bio.skills[eachSkill]);
                    appendToPage(formattedSkill, "#skills");
                }
            }

            // display internationalize button
            appendToPage(controller.HTML.internationalizeButton, "#header");
        }
    }
};

var workView = {

    init: function () {
       this.work = controller.getResumeData('work');
    },

    display: function () {
        if (this.work.jobs.length > 0) {
            for (var jobIndex in this.work.jobs) {
                var eachJob = this.work.jobs[jobIndex];

                appendToPage(controller.HTML.workStart, "#workExperience");

                var formattedEmployer = controller.HTML.workEmployer.replace("%data%", eachJob.employer)
                    .replace("#", eachJob.url);
                var formattedTitle = controller.HTML.workTitle.replace("%data%", eachJob.title);
                appendToPage(formattedEmployer + formattedTitle, ".work-entry:last");

                var formattedDates = controller.HTML.workDates.replace("%data%", eachJob.dates);
                appendToPage(formattedDates, ".work-entry:last");

                var formattedLocation = controller.HTML.workLocation.replace("%data%", eachJob.location);
                appendToPage(formattedLocation, ".work-entry:last");

                var formattedDescription =
                    controller.HTML.workDescription.replace("%data%", eachJob.description);
                appendToPage(formattedDescription, ".work-entry:last");
            }
        }
    }

};

var educationView = {

    init: function () {
        this.education = controller.getResumeData('education');
    }
};

var projectsView = {

    init: function () {
        this.education = controller.getResumeData('projects');
    }
};

var volunteeringView = {

    init: function () {
        this.education = controller.getResumeData('volunteering');
    }
};

var mapView = {

    init: function () {
        this.education = controller.getResumeData('otherLocations');
    }
};

controller.init();



model.education.display = function() {
    if (model.education.schools.length > 0) {
        appendToPage(model.HTML.schoolStart, "#education");
        for (var schoolIndex in model.education.schools) {
            var school = model.education.schools[schoolIndex];
            var formattedName = model.HTML.schoolName.replace("%data%", school.name)
                .replace("#", school.url);
            var formattedDegree = model.HTML.schoolDegree.replace("%data%", school.degree[schoolIndex]);
            var formattedMajor = model.HTML.schoolMajor.replace("%data%", school.major[schoolIndex]);
            var formattedLocation = model.HTML.schoolLocation.replace("%data%", school.location);
            var formattedDates = model.HTML.schoolDates.replace("%data%", school.dates);

            appendToPage(formattedName +
                formattedDegree +
                formattedLocation +
                formattedDates +
                formattedMajor, ".education-entry:last");
        }
    }

    if (model.education.onlineCourses.length > 0) {
        appendToPage(model.HTML.onlineSchoolStart, "#onlineCourses");
        for (var courseIndex in model.education.onlineCourses) {
            var course = model.education.onlineCourses[courseIndex];
            var formattedSchool = model.HTML.onlineSchool.replace("%data%", course.school);
            var formattedTitle = model.HTML.onlineTitle.replace("%data%", course.title)
                .replace("#", course.url);
            var formattedOnlineDates =
                model.HTML.onlineDates.replace("%data%", course.dates);
            var formattedURL = model.HTML.onlineURL.replace("%data%", course.url)
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

            appendToPage(model.HTML.projectStart, "#projects");

            var formattedTitle = model.HTML.projectTitle.replace("%data%", project.title);
            appendToPage(formattedTitle, ".project-entry:last");

            var formattedDates = model.HTML.projectDates.replace("%data%", project.dates);
            appendToPage(formattedDates, ".project-entry:last");

            var formattedDesc =
                model.HTML.projectDescription.replace("%data%", project.description);
            appendToPage(formattedDesc, ".project-entry:last");

            if (project.images.length > 0) {
                for (var imageIndex in project.images) {
                    var image = project.images[imageIndex];
                    if (image.indexOf("images/") != -1) {
                        var formattedImage = model.HTML.projectImage.replace("%data%", image);
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
        appendToPage(model.HTML.volunteeringStart, "#volunteering");
        for (var activityIndex in model.volunteering.activities) {
            var activity = model.volunteering.activities[activityIndex];
            var formattedTitle =
                model.HTML.volunteeringTitle.replace("%data%", activity.title)
                .replace("#", activity.url);
            var formattedDates =
                model.HTML.volunteeringDates.replace("%data%", activity.dates);
            var formattedLocation =
                model.HTML.volunteeringLocation.replace("%data%", activity.location);
            var formattedDescription =
                model.HTML.volunteeringDescription.replace("%data%", activity.description);

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
    appendToPage(model.HTML.googleMap, "#mapDiv");
}

displayMap();
