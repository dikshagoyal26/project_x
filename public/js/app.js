// $(function() {

// 	var form = $('#contactform');

// 	var formMessages = $('#form-messages');

// 	$(form).submit(function(e) {
	
// 		e.preventDefault();

// 		var formData = $(form).serialize();

// 		$.ajax({
// 			type: 'POST',
// 			url:,
// 			data: formData
// 		})
// 		.done(function(response) {
			
// 			$(formMessages).removeClass('error');
// 			$(formMessages).addClass('success');

			
// 			$(formMessages).text(response);

			
// 			$('#name').val('');
// 			$('#email').val('');
// 			$('#message').val('');
// 		})
// 		.fail(function(data) {
			
// 			$(formMessages).removeClass('success');
// 			$(formMessages).addClass('error');

// 			if (data.responseText !== '') {
// 				$(formMessages).text(data.responseText);
// 			} else {
// 				$(formMessages).text('Oops! An error occured and your message could not be sent.');
// 			}
// 		});

// 	});

// });
async function submitform()
{
	// event.preventDefault();
	console.log("submit form called")
	event.preventDefault();
	// if(event.isDefaultPrevented()){
	// 	// default event is prevented
	// 	alert('prevented')
	// }else{
	// 	event.returnValue = false;
	// }
	var name=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var phone=document.getElementById("phone").value;
	var organization=document.getElementById("organization").value;
	var message=document.getElementById("message").value;
	data=JSON.stringify({
		name,email,phone,organization,message
	})
	let url='/inquiry?data='+data
	// let options={
	// 	method: "POST", 
	// 	body:JSON.stringify({
	// 		name,email,phone,organization,message
	// 	})
	// }
	// console.log({options})
	// const response = await fetch(url,options)
	let response=await fetch(url)
	console.log(response)
    companies = await response.json()
	// var xhttp = new XMLHttpRequest();
    // xhttp.open(
    //   "POST",
    //   "/inquiry",
    //   true
	// );
	// console.log({name,email,phone,organization,message})
	// let data=JSON.stringify({
	// 	name,email,phone,organization,message
	// });
	// console.log({data})
    // xhttp.send(data);

    // xhttp.onreadystatechange = function() {
    //   if (this.readyState == 4 && this.status == 200) {
    //     alert('We will contact you as soon as possible')
	//   }
	//   else if(this.status!=200){
	// 	  alert('server error! Kindly call us at ')
	//   }
    // };

  };
