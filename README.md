# App-Analogy
Concept Structure or Concept Coherence Analysis

App-Analogy is available online at:
https://app-analogiae.herokuapp.com


This application was designed to assist in interdesciplinary research.  It's purpose is to identify the strength of the affinity between specific functions given to a concept, that is, to understand how similar are the ways in which concept instances are being used.

Interdisciplinary research poses many challenges, particularly in the agreement of a frame with which to approach an issue.  There are aids that have been developed to address this, but none, to my knowledge, offer a technology-based tool.  This application seeks to address that need.

The App-Analogy application is inspired in the 20th-century work of philosopher Ludwig Wittgenstein as well as in the recent work in cognitive science of Douglas Hofstadter and Emmanuel Sander, who state that there can be no thought without concepts and there can be no concepts without analogy.  By analyzing the nature of the similarities between instances of concepts, I propose, new analogies can be developed in order to bridge seemingly different contexts and shape or expand the concept in question.


How does App-Analogy work?

App-Analogy generates a network graph of all the instances that make up a conceptual network.  Through the graph, the strength of the links can be analyzed as well as the functions that the instances perform (these are still in development).


Structure of the application

App-Analogy is structured following the MVC paradigm, with models developed using a NoSQL database, MongoDB.  The root folder is organized as follows:

-server file
-controllers folder, which includes files that code the CRUD operations of two collections
-routes folder with api and html routes
-front folder with the public/index.html file that sends the information to the browser
-D3 functionality to create the graphs required for the analysis (code within index.html)
-ESLint functionality to maintain best practices and cleaner code

https://app-analogiae.herokuapp.com








