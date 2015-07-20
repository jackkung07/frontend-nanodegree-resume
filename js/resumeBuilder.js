/*
This is empty on purpose! Your code to build the resume will go here.
 */

var work = {
	"jobs" : [ {
	"employer" : "TIBCO Software INC.",
	"title" : "ActiveMatrix BusinessWorks 6 Build Engineer",
	"location" : "Palo Alto, CA",
	"dates" : "Aug. 2012 - Apr. 2013",
	"description" : "\tContributed to a team of three to continuously monitored and validated source code to ensure excellent build quality with Jenkins.\n\tChecked for required packages and plug-ins before starting build process with ant script.\n\tCreated automated software for sanity tests before releasing weekly build with ant script.\n\tCorrectly identified the root cause for build failure and fixed the build in a timely manner.\n
		Collaborated with developers to identify and repair problems when the source code conflicted with the build process.
		Verified software fixes locally before integrate into the build as well as updated Jira tickets.
		Experienced with network setups in OS environments including Mac, Windows, Linux.
		Gained knowledge and experience on continuous integration, version control tools and debugging skills.
		"
		}
	]
};

var projects = {
	"projects" : [
	{
		"title" : "The Other Roadside Attraction, Angst Warrior Project. Seattle University                                    ",
		"dates" : "Sept. 2011 - Jun. 2012",
		"description" : "
			Contributed to a team of four to communicate with clients about possible solutions for robotic tracking and pathing algorithm.
			Implemented RFID technology to track multiple robots’ locations with improved accuracy.
			Developed a custom-built circuit board that had a Xbee wireless module and a microprocessor loaded with algorithm in C to transmit UID information and receive motor commands from the central computer.
			Established an efficient algorithm in Java to translate UID into X and Y coordinates for the main program in central computer to understand.
			Created the main program in Java to interact with user and to be able to control up to 3 robots to have random pathing on the RFID floor without collision.
			Introduced a friendly GUI to show each robot’s position and its next destination and pathing while robots are moving.
			Gained knowledge and experience on embedded system communication tools and inter person communication skills.
			",
		"images" : ""
	},
	{
		"title" : "BioHazard Project. Steven Institute of Technology",
		"dates" : "Aug. 2008 - Dec. 2008",
		"description" : "
			Collaborated on a team of four to designed hardware and software in C++ for a robot that successfully navigated through an enclosed arena with obstacles to shut off a light switch in the opponent’s zone.
			Implemented sensors for the robot to be able to go around the obstacles and detect where the lights’ switches were.
			Created the program in C++ for the robots to avoid obstacles and find and switch the lights off on the opponent’s zone in a short amount of time.
			",
		"images" : ""
	}
	]
}


var bio = {
"name" : {"Che Yi Kung"},
"role" : {"Software Engineering"},
"contact": {
	"mobile" : "510-557-2565",
	"email" : "jackkung07@gmail.com",
	"github" : "jackkung07",
	"twitter" : "",
	"location" : "Fremont"
},
"welcome_msg" : {"welcome to my resume"},
"skills": ["c++, python, js, css, html, java"],
"bioPic": "images/fry.jpg"
};

var education = {
	"schools" : [
	{
		"name" : "Seattle University",
		"location" : "Seattle, WA",
		"degree" : "BS",
		"major" : "Electrical Engineering w specialization in Computer Engineering",
		"dates" : "2008-2012",
		"URL" : "https://www.seattleu.edu"
	},
	{
		"name" : "San Jose State University",
		"location" : "Seattle, WA",
		"degree" : "MS",
		"major" : "Software Engineering",
		"dates" : "2015-2017",
		"URL" : "http://www.sjsu.edu"
	}
	],
	"onlineCourses" : [
	{
		"title" : "",
		"school" : "",
		"dates" : "",
		"URL" : ""
	}
	]
}



//var formattedContactGeneric = HTMLcontactGeneric.replace("%data%", bio.contact_info);
$("#main").append(education.school[0].name);

