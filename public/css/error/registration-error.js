
		$.validator.setDefaults( {
			submitHandler: function () {
				alert( "submitted!" );
			}
		} );

		$( document ).ready( function () {
			$( "#signupForm" ).validate( {
				rules: {
					firstname: {
						required: true,
						minlength: 3

					},
					lastname: {
						required: true,
						minlength: 3
					},
					email: {
						required: true
					},
					username: {
						required: true,
						minlength: 3
						
					},
					password: {
						required: true,
						minlength: 5,
						maxlength: 15
						
					},
					conform_password: {
						required: true,
						minlength: 5,
						maxlength: 15,
						equalTo: "#password"
					},
					dob: {
						required: true
					},
				
					email: {
						required: true,
						email: true
					},
					gender: "required",
					mobile_no: {
						required: true,
						minlength: 10,
						maxlength: 10
					},
					address: {
						required: true,
						minlength: 5
					},
					College_id: {
						required: true
					},
					user_type: "required",
					agree: "required"
					
				},
				messages: {
					firstname: {
						required: "Please enter your firstname",
						minlength: "Please enter atleast 3 characters"
					},
					lastname: {
						required: " Please enter your lastname",
						minlength: "Please enter atleast 3 characters"
					},
					email: {
						required : "Please enter your email id "
					},
					username: {
						required: "Please enter a username",
						minlength: "Please enter atleast 3 characters"
					},
					dob : "Please select dob",
					password: {
						required: "Please enter a password",
						minlength: "Your password must be at least 5 characters long",
						maxlength: "Your password not more than 15 characters long"
					},
					conform_password: {
						required: "Please enter a password",
						minlength: "Your password must be at least 5 characters long",
						maxlength: "Your password not more than 15 characters long",
						equalTo: "Please enter the same password as above"
					},
					gender: "Please select your gender",
					mobile_no: {
						required: "Please enter your mobile number",
						minlength: "Your number atleast 10 digit ",
						maxlength: "Your number not more than 10 digit"
					},
					address: {
						required: "Please enter your home address",
						minlength: "Your home address atleast 5 character"
					},
					College_id: {
						required: "Please enter your college id"
					},
					user_type: "Please select user type",
					agree: "Please accept our policy"
				},
				errorPlacement: function ( error, element ) {
					
					error.css("color", "red");
					error.insertAfter( element.parent() );
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".rowval" ).addClass( errorClass );
				},
				unhighlight: function (element, errorClass, validClass) {
					$( element ).parents( ".rowval" ).removeClass( errorClass );
				}
			} );
		} );
