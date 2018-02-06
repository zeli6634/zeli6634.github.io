$(document).ready(function(){
	$("#content_dialer").show();
	$("#content_list").hide();
	$("#add_content").hide();
	$("#gesture_content").hide();
});
$("#contact_list").click(function(){
	$("#content_dialer").hide();
	$("#content_list").show();
	$("#add_content").hide();
	$("#gesture_content").hide();
});
$("#add_contact").click(function(){
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#add_content").show();
	$("#gesture_content").hide();
});
$("#dialer").click(function(){
	$("#content_dialer").show();
	$("#content_list").hide();
	$("#add_content").hide();
	$("#gesture_content").hide();
});
$("#test_gestures").click(function(){
	$("#content_dialer").hide();
	$("#content_list").hide();
	$("#add_content").hide();
	$("#gesture_content").show();
});

$("#button_id").click(function(){
	$("#element").show();
	$("#other_element").hide();
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

downX=0;
downY=0;

$(document).ready(function(event){
	$("#gesture_output").val("ready");
});
$("#gesture_area").mousedown(function(){
	$("#gesture_output").val("mouse down");
	downX=event.pageX
	downY=event.pageY
});
$("#gesture_area").mouseup(function(){
	$("#gesture_output").val("mouse up");
	upX=event.pageX
	upY=event.pageY

if(upX<downX){
  $("#gesture_output").val("swipe left");
}
else if(upX>downX){
  $("#gesture_output").val("swipe right");
}
else if(upX==downX){
  $("#gesture_output").val("mouse up");
}
});
