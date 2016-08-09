function getSalary()
{	
	$.ajax({
		    url: 'employee/salary',
		    type:'GET',
            data: {libEAssessmentId: 10},
            async: true,
            success: function (htmldata) {
            	$('#content-area').html(htmldata);
			}
		});
};

function getEmployeelist()
{		
	$.ajax({
		    url: 'employee/employeelist',
		    type:'GET',            
            async: true,           
            success: function (htmldata) {
            	$('#content-area').html(htmldata);
			}
		});
};

function addEmployee()
{	
	$.ajax({
		    url: 'employee/addemployee',
		    type:'POST',
            data: $('#employee').serialize(),
            async: true,
            success: function (htmldata) {
            	$('#msg').html(htmldata);
			}
		});
};

function saveSalary()
{	
	$.ajax({
		    url: 'employee/salary',
		    type: 'POST',
		    contentType: 'application/x-www-form-urlencoded',
            data: $('#salary').serialize(),
            async: true,
            success: function (htmldata) {	
            	$('#msg').html(htmldata);
			}
		});
};

        

    