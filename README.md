# Automatic-Letter-Generation

## Background
While in studying abroad in Santiago, Chile, from June 2019 through December, 2019, I interned at La Católica's school of medicine, in the Office of Continued Medical Education. Among responsibilities such as writing research reports and webscraping, I was tasked with moving data from a Google Sheet to one of three letter templates, to then be sent out to the next round of international students accepted to the School of Medicine.  My boss intention was for me to do this by hand, but upon seeing the growing list of names for whom to create letters, I decided it would be faster, and indeed more fun, to code a solution. 

After a little research, I discovered Google Apps Script,Google's version of Javascript with lots of extra methods and classes to assist with working between Google Docs, Google Sheets, Google Scripts, and more. Since I have experience with Javascript, I decided to give it a go, and never looked back. Thought this is a mini project with only 70ish lines of code, I believe it is extremely practical one, if not also a wonderful demostration of my drive to learn and transform a boring  assignment something fun and useful for future interns. 


## Goal
To create a letter of acceptance for each accepted student on the Google Sheet; to select the correct template upon which to add all the necessary information, from the students full name, outstanding tuition balance, future mentor, etc; to automatically send all template documents to a specified folder; for the script to only make one folder per student. 


## Summary of Mini Project

### Step 1:

First, I began with a Google Sheet full of student information to transcribe into specified letters. Given the sensitive information on the google sheet, I only included a small snippet of the complete Google Sheet, as seen below:

![](images/Copia de Cartas_Aidan - Hoja1-1.png)
