var fact = app.factory('fact', function(){

	return {
		//---------------------------------Form Submit Button------------------------------------//

		
		formBtn_disabled : function (customer)
        {
                var finish = customer.firstName.value && !customer.firstName.error.bool&&
                customer.lastName.value && !customer.lastName.error.bool &&
                customer.mobileNumber.value && !customer.mobileNumber.error.bool &&
                customer.location.value && !customer.location.error.bool &&
                customer.eventTitle.value && !customer.eventTitle.error.bool &&
                customer.email.value && !customer.email.error.bool &&
                customer.confirmEmail.value && !customer.confirmEmail.error.bool &&
                customer.eventType.value && !customer.eventType.error.bool &&
                customer.inventory.value && !customer.inventory.error.bool&&
                customer.companyName.value && !customer.companyName.error.bool&&
                (customer.events.length !=0);

    return !finish ;
        } ,
   //---------------------------------Events Submit Button------------------------------------//
        eventBtn_disabled : function (location , date)
        {
        	 var finish = location.value && !location.error.bool && date.start.value && !date.start.error.bool
        	 && date.start.value && !date.start.error.bool

        	return !(finish) ;
        } ,
   //---------------------------------Creates object to be sent------------------------------------//
		copyCustomerToUser : function (customer , user)
		{
			user.firstName    = customer.firstName.value ;
			user.lastName     =customer.lastName.value ;
			user.mobileNumber = customer.mobileNumber.value ;
			user.email        = customer.email.value ;
			user.eventTitle   = customer.eventTitle.value ;
			user.eventType    = customer.eventType.value ;
			user.inventory    = customer.inventory.value ;
			user.companyName  = customer.companyName.value;
			user.events = customer.events;
			console.log(user) ;
		} ,
//---------------------------------Validate Input------------------------------------//
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

			//----------------------------------------------------------------//
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
		},

	
//---------------------------------Check Regex Function------------------------------------//
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
//---------------------------------Confirm E-mail Function------------------------------------//
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
//---------------------------------Check Length Function------------------------------------//
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

		},
//---------------------------------Add input to element object------------------------------------//
		addEvent : function (startdate, enddate ,events, eventLocation) //events == user.events
		{
			var element = {}

            element.eventLocation = eventLocation;
            
            element.start = {
                 fullMilliDate : startdate.setMilliseconds(1),
                 splitedTime : startdate.getHours() + ":" +startdate.getMinutes(),
                 splitedDate : startdate.getDate()+"-"+(startdate.getMonth()+1)+"-"+startdate.getFullYear()
            };
        
            element.end = {
                 fullMilliDate : enddate.setMilliseconds(1),
                 splitedTime : enddate.getHours() + ":" +enddate.getMinutes(),
                 splitedDate : enddate.getDate()+"-"+(enddate.getMonth()+1)+"-"+enddate.getFullYear()
            };
            
            events.push(element) ;

            console.log(events);
		} ,

		dateValidation : function (val , date)
		{
			if(!val) 
			{
				date.error.bool = true ;
				date.error.msg = "invalid date" ;
			}
			else
			{
				date.error.bool = false ;
				date.error.msg = "" ;
			}
		} ,


removeElement : function(todo ,array)
        {
            array.splice(array.indexOf(todo), 1);
        }
	};
});

