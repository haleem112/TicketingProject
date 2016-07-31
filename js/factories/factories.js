app.factory('fact1', function(){

	return {
	validateInput : function (name,reg) 
	{
	
	if (name.value) 
		{
			var test = reg.exp.test(name.value) ;
			var length = name.value.length;

			if(test)
			{
				name.error.bool= false ;
				name.error.msg_nreg = "";
			}
			else
			{
				name.error.bool = true ;
				name.error.msg_nreg =reg.error;
			}

			
			if (length >0 && length < reg.min)
			{
				name.error.bool = true;
				name.error.msg_length= "must be more than "+reg.min+" characters";
			}

			else if (length > reg.max)
			{
				name.error.bool = true;
				name.error.msg_length = "must be more than "+reg.max+" characters";
			}

			else 
			{
				name.error.msg_length = "" ;
			}
			

		}
		else
		{
			name.error.bool = false ;
		}
	} ,

	checkReg : function (name , reg)
	{
		if (name.value) 
		{
			var test = reg.exp.test(name.value) ;


			if(test)
			{
				name.error.bool= false ;
				name.error.msg_emreg = "";
			}
			else
			{
				name.error.bool = true ;
				name.error.msg_emreg =reg.error;
			}
		}
		else 
		{
			name.error.bool = false ;
			name.error.msg_emreg = "";
		}

	} ,

	confirm: function (mail , mconfirm)
	{
		if(mail.value)
		{
			if (mail.value == mconfirm.value )
			{
				mail.error.bool = false ;
				mail.error.msg = "" ;
			}
			else
			{
				mail.error.bool = true ;
				mail.error.msg = "they are not matched" ;
			}
		} 
		else {
			mail.error.bool = false ;
			mail.error.msg = "" ;
		}
		
	}

};
});

