//some code cited from assignment description: https://shaunkane.github.io/csci4849-spring2018/a1-gui/
$(document).ready(function(){
	$("#content_dialer").show();
	$("#contentlist").hide();
	$("#add_content").hide();
	$("#about_this").hide();
});
$("#contact_list").click(function(){
	$("#content_dialer").hide();
	$("#contentlist").show();
	$("#add_content").hide();
	$("#about_this").hide();
});
$("#add_contact").click(function(){
	$("#content_dialer").hide();
	$("#contentlist").hide();
	$("#add_content").show();
	$("#about_this").hide();
});
$("#dialer").click(function(){
	$("#content_dialer").show();
	$("#contentlist").hide();
	$("#add_content").hide();
	$("#about_this").hide();
});
$("#about").click(function(){
	$("#content_dialer").hide();
	$("#contentlist").hide();
	$("#add_content").hide();
	$("#about_this").show();
});

//click
$("#1").click(function(){
	$("#phone_number").val($("#phone_number").val() + "1");
});
$("#2").click(function(){
	$("#phone_number").val($("#phone_number").val() + "2");
});
$("#3").click(function(){
	$("#phone_number").val($("#phone_number").val() + "3");
});
$("#4").click(function(){
	$("#phone_number").val($("#phone_number").val() + "4");
});
$("#5").click(function(){
	$("#phone_number").val($("#phone_number").val() + "5");
});
$("#6").click(function(){
	$("#phone_number").val($("#phone_number").val() + "6");
});
$("#7").click(function(){
	$("#phone_number").val($("#phone_number").val() + "7");
});
$("#8").click(function(){
	$("#phone_number").val($("#phone_number").val() + "8");
});
$("#9").click(function(){
	$("#phone_number").val($("#phone_number").val() + "9");
});
$("#0").click(function(){
	$("#phone_number").val($("#phone_number").val() + "0");
});
$("#star_key").click(function(){
	$("#phone_number").val($("#phone_number").val() + "*");
});
$("#pound_key").click(function(){
	$("#phone_number").val($("#phone_number").val() + "#");
});
$("#clear_button").click(function(){
	$("#phone_number").val("");
});
$("#addclear").click(function(){
	$("#name").val("");
	$("#phonenumber").val("");
	$("#email").val("");
});
