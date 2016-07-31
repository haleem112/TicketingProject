app.factory('fact1', function(){

	return {
		btn_disabled : function (customer)
		{
			var done = customer.firstName.value && !customer.firstName.error.bool&&
			customer.lastName.value && !customer.lastName.error.bool &&
			customer.mobileNumber.value && !customer.mobileNumber.error.bool &&
			customer.email.value && !customer.email.error.bool &&
			customer.confirmEmail.value && !customer.confirmEmail.error.bool &&
			customer.location.value && !customer.location.error.bool &&
			customer.enenttitle.value && !customer.EnentTitle.error.bool &&
			customer.eventType.value && !customer.eventType.error.bool &&
			customer.inventory.value && !customer.inventory.error.bool &&
			customer.companyName.value && !customer.companyName.error.bool ;

			return !done ;
		},

		create : function (customer , user)
		{
			user.firstName    = customer.firstName.value ;
			user.lastNAme     =customer.lastName.value ;
			user.mobileNumber = customer.mobileNumber.value ;
			user.email        = customer.email.value ;
			user.eventTitle   = customer.eventTitle.value ;
			user.location     = customer.location.value ;
			user.eventType    = customer.eventType.value ;
			user.inventory    = customer.inventory.value ;

			console.log(user) ;
		} ,

		validateInput : function (name,reg) 
		{

			if (name.value) 
			{
				var test = reg.exp.test(name.value) ;
				var length = name.value.length;


				if(test)
				{
					name.error.bool= false ;
					name.error.nameregex_msg = "";
				}
				else
				{
					name.error.bool = true ;
					name.error.nameregex_msg =reg.error;
				}


				if (length >0 && length < reg.min)
				{
					name.error.bool = true;
					name.error.length_msg= "Input must be at least "+reg.min+" characters" ;
				}

				else if (length > reg.max)
				{
					name.error.bool = true;
					name.error.length_msg = "Input must be less than"+reg.max+" characters";
				}

				else 
				{
					name.error.length_msg = "" ;
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
					name.error.emailmobilereg_msg = "";
				}
				else
				{
					name.error.bool = true ;
					name.error.emailmobilereg_msg =reg.error;
				}
			}
			else 
			{
				name.error.bool = false ;
				name.error.emailmobilereg_msg = "";
			}

		} ,

		confirm: function (confirm_mail, mail)
		{
			if(confirm_mail.value)
			{
				if (confirm_mail.value == mail.value )
				{
					confirm_mail.error.bool = false ;
					confirm_mail.error.msg = "" ;
				}
				else
				{
					confirm_mail.error.bool = true ;
					confirm_mail.error.msg = "Email doesn't match." ;
				}
			} 
			else {
				confirm_mail.error.bool = false ;
				confirm_mail.error.msg = "" ;
			}

		},

		check_Length: function(name, reg)
		{
			if (name.value) 
			{
				var length = name.value.length;
				if (length >0 && length < reg.min)
				{
					name.error.bool = true;
					name.error.length_msg= "Input must be at least "+reg.min+" characters" ;
				}

				else if (length > reg.max)
				{
					name.error.bool = true;
					name.error.length_msg = "Input must be less than"+reg.max+" characters";
				}

				else 
				{
					name.error.bool = false ;
					name.error.length_msg = "" ;
				}

			}
			else
			{
				name.error.bool = false ;
				name.error.length_msg = "" ;
			}

		}//End of function
	};
});

