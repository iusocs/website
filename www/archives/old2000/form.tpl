# begin template
# this *email-response* section is exactly like the one above
*email-response*
To:iusocs@indiana.edu
From:[req-email]
Subject: Membership Application from [req-last]

Name: [req-last],  [req-first]  [middle]

Email address: [req-email]

Major(s): [req-major]
	
Class Standing: [req-clas]

Address
Street:  [street]
City:  [city]
Zip Code:  [zip]
Phone:  [phone]

Available for Events:
Times:  [times]

Questions/Comments:  [comments]
	
Exclude from List? :  [exclude]

# Note that [question] and [email] had req- added to them above.
# This declares them as required variables
# Now let's add a section which describes a successful form submission
# Note the *success-response* section header
# Since this response is being returned to the user's www browser it
# must be a correct html document
*success-response*
<html>
<head>
<title>Your SOCS application has been submitted!!</title>
</head>
<body>
<h2> [first] your SOCS application has been submitted!!</h2>
The information provided was successfully sent.<p>
<p><a href="home.htm" target="_self">Click here to return to the SOCS home page.</a></p>
</body>
</html>

# Now let's add a error-response section
# Again, this must be in the form of an html document because it is being
# returned to the user's browser.
# Remember, this section is displayed to the user when required
# fields, flagged with req-, are not completed by the user.
*error-response*
<html>
<head>
<title>Sorry, you made an error</title>
</head>
<body>
<h2>Sorry, you made an error</h2>
<p>
You must complete the following fields:
<p>
Your name:  [last], [first] <p>
Your email address: [email]<p>
Your class staning: [clas]<p>
Your major:  [major]<p>

Use the <b>back</b> 
selection on your browser to go back and complete
all required fields.<p>
</body>
</html>

# end template file