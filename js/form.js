function validateForm() {
if(document.forms[0].fname.value=='')
	{
		alert('First name is required');
		return false;
		
	}

	if(document.forms[0].sname.value=='')
	{
		alert('Surname  is required');
		return false;
		
	}

	if(document.forms[0].age.value=='')
	{
		alert('Age is required');
		return false;
	}

	if (document.forms[0].selection1.value == 'Select List')
	{
		alert('Select the gender.');
		return false;		
	}

	if (document.forms[0].selection2.value == 'Select List')
	{
		alert('Select a city.');
		return false;		
	}

	if (document.forms[0].email.value == '')
	{
		alert('Email is required.');
		return false;		
	}

	if (document.forms[0].selection3.value == 'Select List')
	{
		alert('Select a attend.');
		return false;		
	}
	
	if(document.forms[0].mydate.value=='')
	{
		alert('Date is required');
		return false;
	}

	if(document.forms[0].transport.value=='')
	{
		alert("Transportation to the exhibition location is required.");
		return false;
	}

	if(document.forms[0].prices.value=='')
	{
		alert("Price area is required.");
		return false;
	}

	if(document.forms[0].comments.value=='')
	{
		alert("Comment area is required.");
		return false;
	}

	if (confirm('Do you want to continue?'))
	{
		set
		return true;
	}
	else
		return false;

	}

