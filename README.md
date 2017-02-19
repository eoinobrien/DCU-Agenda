# DCU Agenda

## UPDATE: February 2017
Due to a breaking change on the DCU iCal API that was used to fetch timetable data, this app no longer works. Due to a lack of time I do not have time to give to fixing this. [DCUTT](www.dcutt.com) is still working so that may suit your needs. 

If you want to take this project on and find a fix for the APIs, work away. I have added the MIT License so you can do what you like with it.


Created to replicate the fantastic [DCUTT](www.dcutt.com) application by [Ian Duffy](http://ianduffy.ie/) and [Ben Chapman](https://benchapman.ie/), when it wasn't working the weekend before returning to college, it's back working again now.

The key difference between the two apps is DCU Agenda shows upcoming in a single list, while DCUTT shows classes on a daily basis.

## How it Works
The frontend is created using AnagularJS and uses Angular Material. It gets timetable data from a custom API that [David Cawley](https://github.com/cawleykid) and I created last year, as part of our Third Year Project in DCU. We created an application that enabled students to sign in to lectures using their student card and Android phone.  
As part of that project we created an [API](http://api.dcusignin.me/) that pulls data from the DCU Timetable system, and returns upcoming classes in a JSON format. That API is used to provide timetable data to this application.

## Contributing
Fork the project and make a pull request
