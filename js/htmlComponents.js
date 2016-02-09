
model.HTML = {
    headerName: '<h1 id="name">%data%</h1>',
    headerRole: '<span class="role">&emsp;%data%</span>',

    //TODO: put nav resources in JSON and build dynamically.
    dropdown: '<div class="dropdown fixed-right">' +
                '<button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" ' +
                'aria-haspopup="true" aria-expanded="true">Resume Sections<span class="caret"></span></button>' +
                     '<ul class="dropdown-menu dropdown-menu-right">' +
                        '<li><a href="#bioNav">Bio</a></li>' +
                        '<li><a href="#workExperienceNav">Work Experience</a></li>' +
                        '<li><a href="#educationNav">Education</a></li>' +
                        '<li><a href="#onlineCoursesNav">Online Classes</a></li>' +
                        '<li><a href="#projectsNav">Projects</a></li>' +
                        '<li><a href="#volunteeringNav">Volunteering</a></li>' +
                        '<li><a href="#mapNav">Map</a></li>' +
                        '<li role="separator" class="divider"></li>' +
                        '<li><a href="mailto:neilstrain@gmail.com">Let\'s Connect</a></li>' +
                    '</ul></div><div><hr/></div>',

    contactGeneric: '<li class="flex-item"><span class="purple-text">%contact%</span>' +
                        '<span class="white-text">%data%</span></li>',
    mobile: '<li class="flex-item"><span class="purple-text">mobile</span><span class="white-text">%data%</span></li>',
    email: '<li class="flex-item"><span class="purple-text">email</span><a class="span" href="mailto:%data%">' +
            '<span class="white-text">%data%</span></a></li>',
    twitter: '<li class="flex-item"><span class="purple-text">twitter</span><span class="white-text">%data%</span></li>',
    github: '<li class="flex-item"><span class="purple-text">github</span>' +
                '<a class="span" href="%data%" target="_blank"><span class="white-text">%data%</span></a></li>',
    blog: '<li class="flex-item"><span class="purple-text">blog</span><span class="white-text">%data%</span></li>',
    location: '<li class="flex-item"><span class="purple-text">location</span>' +
                '<span class="white-text">%data%</span></li>',

    bioPic: '<img src="%data%" class="biopic">',
    welcomeMsg: '<span class="welcome-message">%data%</span>',

    skillsStart: '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>',
    skills: '<li id="skill"><span class="white-text">%data%</span></li>',

    workStart: '<div class="work-entry"></div>',
    workEmployer: '<a href="#" target="_blank">%data%',
    workTitle: ' - %data%</a>',
    workDates: '<div class="date-text">%data%</div>',
    workLocation: '<div class="location-text">%data%</div>',
    workDescription: '<p><br/>%data%</p>',

    projectStart: '<div class="project-entry"></div>',
    projectTitle: '<a href="#">%data%</a>',
    projectDates: '<div class="date-text">%data%</div>',
    projectDescription: '<p><br/>%data%</p>',
    projectImage: '<img class="proj-pic" src="%data%">',

    schoolStart: '<div class="education-entry"></div>',
    schoolName: '<a href="#" target="_blank">%data%',
    schoolDegree: ' -- %data%</a>',
    schoolDates: '<div class="date-text">%data%</div>',
    schoolLocation: '<div class="location-text">%data%</div>',
    schoolMajor: '<em><br/>Major: %data%</em><br/><br/>',

    onlineSchoolStart: '<div class="online-education-entry"></div>',
    onlineTitle: '<a href="#" target="_blank">%data%',
    onlineSchool: ' -- %data%</a>',
    onlineDates: '<div class="date-text">%data%</div>',
    onlineURL: '<br/><a href="#" target="_blank">%data%</a><br/><br/>',

    volunteeringStart: '<div class="volunteering-entry"></div>',
    volunteeringTitle: '<a href="#" target="_blank">%data%</a>',
    volunteeringDates: '<div class="date-text">%data%</div>',
    volunteeringLocation: '<div class="location-text">%data%</div>',
    volunteeringDescription: '<p><br/>%data%</p>',

    internationalizeButton: '<button class="internationalize">Internationalize</button>',
    googleMap: '<div id="map"></div>'
};



