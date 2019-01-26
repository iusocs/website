# begin email.tpl
*email-response*
To:majordomo@indiana.edu	
From:[req-email]
Subject:

subscribe iusocs_members

*success-response*
<html>
<head>
<title>You have been added to the SOCS email list!!</title>
</head>
<body>
<h2> You ([email]) have been added to the SOCS email list!!</h2>
<p><a href="home.htm" target="_self">Click here to return to the SOCS home page.</a></p>
</body>
</html>

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
Your email address: [email]<p>

Use the <b>back</b> 
selection on your browser to go back and complete
all required fields.<p>
</body>
</html>

# end template file