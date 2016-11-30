$(document).ready(function(){
	
	$.ajax({
		type: "GET",
		url: "api/service/services",
		dataType: "json",
		success: function (data) {
		    var jsonData = JSON.parse(data);
		    for (var i = 0; i < jsonData.length; i++) {
		        var obj = jsonData[i];
		        var class1 = "panel panel-primary col-sm-offset-1";
		        var style1 = "width:75%; margin-bottom:50px;";
		        var class2 = "panel-heading";
		        var class3 = "panel-title";
		        var style2 = "font-size:200%;";
		        var class4 = "panel-body";
		        var divData = '<div class=' + class1 + ' style=' + style1 + '><div class=' + class2
                    + '><h3 class=' + class3 + ' style=' + style2 + '>' + obj.serviceName
                    + '<button type="button" class="btn btn-success pull-right" data-toggle="modal" data-target="#schSrvModal" data-whatever=' + obj.serviceName + '>Click Here to Schedule Service</button></h3></div><div class='
					+ class4 + '>' + obj.serviceDesc + '</div></div>';
		        $(divData).appendTo('#servicesDiv');
		    }
		}
	});
	
	$('#schSrvModal').on('show.bs.modal', function (event) {
	    var button = $(event.relatedTarget);
	    var serviceType = button.data('whatever');
	    var modal = $(this);
	    modal.find('.modal-title').text('New Request: ' + serviceType);
	    modal.find('.modal-body input').val(serviceType);
	})

	$('#submitSchedule').click(function () {
	    var serviceName = $("#serviceName").val().trim();
	    var reqDate = $("#reqDate").val().trim();
	    var reqTimeFrom = $("#reqTimeFrom").val().trim();
	    var reqTimeTo = $("#reqTimeTo").val().trim();
	    if (Date.parse('01/01/2011 ' + reqTimeFrom) > Date.parse('01/01/2011 ' + reqTimeTo)) {
	        alert("Service Start Time must be smaller than Service End Time");
	        $('input[type="time"]').css("border", "2px solid red");
	        return false;
	    }
	    if (serviceName != '' && reqDate != '' && reqTimeFrom != '' && reqTimeTo!='') {
	       // alert("Data: " + serviceName + " | " + reqDate + " | " + reqTimeFrom + " | " + reqTimeTo);
	        var postData = "serviceName=" + serviceName + "&ScheduleDate=" + reqDate + "&StartTime=" + reqTimeFrom + "&EndTime=" + reqTimeTo
            + "&ModifiedBy=" + "1";

	        $.ajax({
	            type: "POST",
	            url: "/api/request/postrequest/",
	            data: postData,
	            success: function (result) {
	               if (result == "true") {
	                   var divData = '<div class="alert alert-success"><strong>Success!</strong>Request submitted successfully</strong></div>';
	                   $(divData).appendTo('#success-message');
	               }
	            },
	            error: function (msg) {
	            }
	        });
	    }
	});
});