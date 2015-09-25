DCU Agenda
=========

Created to replicate the fantastic [DCUTT](www.dcutt.com) application by [Ian Duffy](http://ianduffy.ie/) and [Ben Chapman](https://benchapman.ie/), when it wasn't working the weekend before returning to college, it's back working again now.

The key difference between the two apps is DCU Agenda shows upcoming in a single list, while DCUTT shows classes on a daily basis.

How it Works
------------
The frontend is created using AnagularJS and uses Angular Material. It gets timetable data from a custom API that [David Cawley](https://github.com/cawleykid) and I created last year, as part of our Third Year Project in DCU. We created an application that enabled students to sign in to lectures using their student card and Android phone.  
As part of that project we created an [API](http://api.dcusignin.me/) that pulls data from the DCU Timetable system, and returns upcoming classes in a JSON format. That API is used to provide timetable data to this application.

Roadmap
-----------
* Android/iOS Application, using Cordova
* Filtering of Courses shown, hide optional Courses

Contributing
-----------
Fork the project and make a pull request