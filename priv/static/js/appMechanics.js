//------------------- DataTables --------------------
$(document).ready( function () {
    $('#dataTableId').DataTable(); //User DataTable
    $('#ManageBus').DataTable(); //Bus Terminus DataTable
    $('#busTerminusDT').DataTable(); //Bus Terminus DataTable
    $('#dataTableBusTerminusId').DataTable(); //Bus Terminus DataTable
    $('#dataTableMarket').DataTable(); //Marktet DataTable
    $('#gates').DataTable(); //Gates DataTable
    $('#stations').DataTable(); //Stations DataTable
    $('#dataTableTellers').DataTable(); //Tellers DataTable
    $('#bookingsDataTable').DataTable(); //DataTable For Bookings
    $('#TellerPastTransactions').DataTable(); //DataTable For TellerPastTransactions
    $('#queryTickets').DataTable(); //DataTable For Query Tickets Teller Side
    $('#available_routes').DataTable(); //DataTable For available_routes Teller Side
    $('#booking_table').DataTable(); //DataTable For bookings Teller Side
    $('#routes_table').DataTable(); //DataTable For routes Admin Side

    $('#results_view').hide();
    $('#passenger_view').hide();

    $('#checkin_results_view').hide();
    get_buses()
} );

$('#modal_form_horizontal_user').on('show.bs.model', function(e) {
    window.alert("Hello, World!");
    var parameters = row;
});
//------------------- End DataTables --------------------

//-------------------New Marketeer Registration --------------------
$('input#stand_ID').keyup(function() {
    //perform ajax call...
    $('#Pstand_ID').text($(this).val());
});

$('input#first_name').keyup(function() {
    //perform ajax call...
    $('#Pfirst_name').text($(this).val());
});

$('input#last_name').keyup(function() {
    //perform ajax call...
    $('#Plast_name').text($(this).val());
});

$('input#nrc').keyup(function() {
    //perform ajax call...
    $('#Pnrc').text($(this).val());
});

$('input#account_number').keyup(function() {
    //perform ajax call...
    $('#Paccount_number').text($(this).val());
});

$('input#mobile_number').keyup(function() {
    //perform ajax call...
    $('#Pmobile_number').text($(this).val());
});
//-------------------New Marketeer Registration --------------------

//-------------------New Bus Registration Actions --------------------
$('input#vehicleMake').keyup(function() {
    //perform ajax call...
    $('#vehicleMakeText').text($(this).val());
});

$('input#licensePlate').keyup(function() {
    //perform ajax call...
    $('#vehicleLicensePlateText').text($(this).val());
});

$('input#engineType').keyup(function() {
    //perform ajax call...
    $('#vehicleEngineTypeText').text($(this).val());
});

$('input#vehicleModel').keyup(function() {
    //perform ajax call...
    $('#vehicleModelText').text($(this).val());
});

$('input#vehicleYear').keyup(function() {
    //perform ajax call...
    $('#vehicleYearText').text($(this).val());
});

$('input#vehicleColor').keyup(function() {
    //perform ajax call...
    $('#vehicleColorText').text($(this).val());
});

$('input#stateOfRegistration').keyup(function() {
    //perform ajax call...
    $('#vehicleStateOfRegText').text($(this).val());
});

$('input#vinNumber').keyup(function() {
    //perform ajax call...
    $('#vehicleVinNumberText').text($(this).val());
});

$('input#vehicleHullNUmber').keyup(function() {
    //perform ajax call...
    $('#vehicleHullNumberText').text($(this).val());
});

$('input#vehicleSerialNumber').keyup(function() {
    //perform ajax call...
    $('#vehicleSerialNumberText').text($(this).val());
});

$('input#vehicleClass').keyup(function() {
    //perform ajax call...
    $('#vehicleClassText').text($(this).val());
});

$('input#vehicleCompany').keyup(function() {
    //perform ajax call...
    $('#vehicleCompanyText').text($(this).val());
});

//-------------------------------------------------------------------

//-------------------Teller Actions --------------------
$('input#TfirstName').keyup(function() {
    //perform ajax call...
    $('#TellerFirstName').text($(this).val());
});

$('input#TlastName').keyup(function() {
    //perform ajax call...
    $('#TellerLastName').text($(this).val());
});

$('input#Tsex').keyup(function() {
    //perform ajax call...
    $('#TellerSex').text($(this).val());
});

$('input#Tdob').keyup(function() {
    //perform ajax call...
    $('#TellerDoB').text($(this).val());
});

$('input#Tnrc').keyup(function() {
    //perform ajax call...
    $('#TellerNRC').text($(this).val());
});

$('input#Tssn').keyup(function() {
    //perform ajax call...
    $('#TellerSSN').text($(this).val());
});

$('input#Temail').keyup(function() {
    //perform ajax call...
    $('#TellerEmail').text($(this).val());
});

$('input#Tphone').keyup(function() {
    //perform ajax call...
    $('#TellerPhone').text($(this).val());
});

$('input#Taddress').keyup(function() {
    //perform ajax call...
    $('#TellerAddress').text($(this).val());
});
//-------------------------------------------------------------------


//------------------- Billing --------------------
$('input#cardNumber').keyup(function() {
    //perform ajax call...
    $('#CardNUMBER').text($(this).val());
});

$('input#securityCode').keyup(function() {
    //perform ajax call...
    $('#SecurityCODE').text($(this).val());
});
//------------------------------------------------

//------------------- Allocating Stands ----------
$('input#stand_section').keyup(function() {
    //perform ajax call...
    $('#Pstand_section').text($(this).val());
});

$('input#stand_name').keyup(function() {
    //perform ajax call...
    $('#Pstand_name').text($(this).val());
});

$('input#stand_code').keyup(function() {
    //perform ajax call...
    $('#Pstand_code').text($(this).val());
});
//------------------------------------------------

//------------------- Scheduling -----------------
  var x = document.getElementById("s_date").date;
function GetSelectedDate() {
  document.getElementById("Ps_date").innerHTML = x;
}

$('input#fare').keyup(function() {
    //perform ajax call...
    $('#Pfare').text($(this).val());
});
//------------------------------------------------

//------------------- Creating Routes ------------
$('input#route_name').keyup(function() {
    //perform ajax call...
    $('#Proute_name').text($(this).val());
});

$('input#source_kilo').keyup(function() {
    //perform ajax call...
    $('#Psource_kilo').text($(this).val());
});

$('input#route_to').keyup(function() {
    //perform ajax call...
    $('#Proute_to').text($(this).val());
});
//------------------------------------------------


//-------------------Payments --------------------
$('input#CARDNUBER').keyup(function() {
    //perform ajax call...
    $('#cardnuber').text($(this).val());
});

$('input#SECURITYCODE').keyup(function() {
    //perform ajax call...
    $('#securitycode').text($(this).val());
});
$('input#PHONE').keyup(function() {
    //perform ajax call...
    $('#phone').text($(this).val());
    $('#phone2').text($(this).val());
});

$('input#FNAME').keyup(function() {
    //perform ajax call...
    $('#fname').text($(this).val());
});

$('input#LNAME').keyup(function() {
    //perform ajax call...
    $('#lname').text($(this).val());
});

$('input#ADDRESS').keyup(function() {
    //perform ajax call...
    $('#address').text($(this).val());
});

$('input#TOWN').keyup(function() {
    //perform ajax call...
    $('#town').text($(this).val());
});

$('input#EMAIL').keyup(function() {
    //perform ajax call...
    $('#email').text($(this).val());
});

//------------------------------------------------
//-------------------Ticket Payments --------------------
$('input#First_Name').keyup(function() {
    //perform ajax call...
    $('#Pname').text($(this).val());
    $('#PFname').text($(this).val());
    $("input#first_name_input").val($(this).val());
});

$('input#Last_Name').keyup(function() {
    //perform ajax call...
    $('#Lname').text($(this).val());
    $('#PLname').text($(this).val());
    $('input#last_name_input').val($(this).val());
});


$('input#date').keyup(function() {
    //perform ajax call...
    $('#dateOfDepature').text($(this).val());
    $('#PdateOfDepature').text($(this).val());
    $('input#travel_date_input').val($(this).val());
});
$('input#Passenger_Number').keyup(function() {
    //perform ajax call...
    $('#Ppassengernumber').text($(this).val());
});
$('input#Contact_Number').keyup(function() {
    //perform ajax call...
    $('#PContatct').text($(this).val());
    $('input#mobile_number_input').val($(this).val());
});

$('input#Depature_Time').keyup(function() {
    //perform ajax call...
    $('#Time').text($(this).val());
    $('#PTime').text($(this).val());
    $('input#travel_date_input').val($(this).val());
});


$('input#Depature_Name').keyup(function() {
    //perform ajax call...
    $('#From').text($(this).val());
    $('#PFrom').text($(this).val());
});

$('input#Destination_Name').keyup(function() {
    //perform ajax call...
    $('#To').text($(this).val());
    $('#PTo').text($(this).val());
});

$('input#Ticket_Number').keyup(function() {
    //perform ajax call...
    $('#ticketNeumber').text($(this).val());
});

$('input#Ref_Number').keyup(function() {
    //perform ajax call...
    $('#RefNo').text($(this).val());
});

$('input#seat').keyup(function() {
    //perform ajax call...
    $('#SeatPosition').text($(this).val());
    $('#PSeatPosition').text($(this).val());
});

//------------------------------------------------

//---------------DropDowns----------------------
//var sel = document.getElementById("Operator_Name");
//var text = sel.options[sel.selectedIndex].text;
//$("#Operator_Name option:selected").text();

//To Pick Text From Select Options

$(document).ready(function(){
    $('#Operator_Name').on('change',function(){
        var optionText = $("#Operator_Name option:selected").text();
        document.getElementById("result").innerHTML = optionText;
        //alert("Selected Option Text: "+optionText);
    });
});


/*
function GetSelectedText() {
    var x = document.getElementById("Operator_Name").value;
    document.getElementById("result").innerHTML = x;
  }
  */

function GetSelectedTo() {
  var x = document.getElementById("Destination_Name").value;
  document.getElementById("To").innerHTML = x;
}

function GetSelectedTime() {
  var x = document.getElementById("Depature_Time").value;
  document.getElementById("Time").innerHTML = x;
}

function GetSelectedFrom() {
  var x = document.getElementById("Depature_Name").value;
  document.getElementById("From").innerHTML = x;
}

function GetSelectedDate() {
    $('#s_date').datepicker({dateFormat: "dd/MM/YYYY"});
  //document.getElementById("dateOfDepature").innerHTML = x;
    y = x.split("-");
    x = y[2] + "/" + y[1] + "/" + y[0];

}

function GetSelectedSeat() {
  var x = document.getElementById("Position").value;
  document.getElementById("SeatPosition").innerHTML = x;
}



/*
    function GetSelectedValue(){
                var e = document.getElementById("Operator_Name");
                var result = e.options[e.selectedIndex].value;

                document.getElementById("result").innerHTML = result;
            }

            function GetSelectedText(){
                var e = document.getElementById("Operator_Name");
                var result = e.options[e.selectedIndex].text;

                document.getElementById("result").onload=function() {GetSelectedText()};
            }
            */


//---------------DropDowns----------------------


//---------------DatePicker_Disabled_Prev_Dates----------------------
document.getElementById("date").min = new Date().getFullYear() + "-" + parseInt(new Date().getMonth() + 1) +"-" + new Date().getDate();
//---------------DatePicker_Disabled_Prev_Dates----------------------





function ticket_purchase(value){

    console.log(value.split(/-/g));
    $('#passenger_view').show();
    let rd = value.split(/-/g);

    let info = "OPERATOR: " + rd[0] + "\t START: " + rd[1] + "\t END: " + rd[2] + "\t DEPARTURE: " + rd[3] + "\t PRICE: K" + rd[4];

    $('#route_information').val(info);
}

function distinct_destination(json_array){
    let lookup = {};
    let items = json_array;
    let result = [];

    for (let item, i = 0; item = items[i++];) {
        let name = item.end_route;

        if (!(name in lookup)) {
            lookup[name] = 1;
            result.push(name);
        }
    }

    return result
}

function request_data(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;

    return JSON.stringify({
        payload: {
            date: today,
            start_route: "Livingstone",
            end_route: $('#destination_option_select').val()
        }
    });
}

let t = [
    {
        bus: {
            company: "Probase"
        },
        route: {
            start_route: "Livingstone",
            end_route: "Lusaka"
        },
        time: "08:00",
        fare: "K180"
    }
];





function get_buses () {

    $.ajax({
        method: 'get',
        url: '/api/v1/internal/list/bus_operators',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            let user_object = JSON.parse(JSON.stringify(response));

            let bus_operator_html = '';
            let operator_id = "";

            $.each(response, function (k, v) {
                let o = JSON.parse(JSON.stringify(v));
                bus_operator_html += '<option value="'+o.id+'" >';
                bus_operator_html += o.company;
                bus_operator_html += '</option>';

                operator_id = o.id.toString()
            });

            let bus_operator2_html = '';
            let operator_id2 = "";
            $.each(response, function (k, v) {
                let o = JSON.parse(JSON.stringify(v));
                bus_operator2_html += '<option value="'+o.id+'" >';
                bus_operator2_html += o.username;
                bus_operator2_html += '</option>';

                operator_id2 = o.id.toString()
            });

            $('#bus_operator_list').html(bus_operator2_html);

            get_route_codes();

            $('#scheduling_operator_id').html(bus_operator_html);
        }
    });
}

function bus_operator_selection_action() {
    let operator_id = $('#bus_operator_list').val().toString();
    $('#bus_operator_id_input').val(operator_id);
    console.log("Operator ID:" + $('#bus_operator_id_input').val())
}

function find_buses_by_id(id) {

    let json_request = JSON.stringify({
        payload: {
            bus_id: id
        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/list/bus',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            let operator_buses = '';



            $.each(response, function (k, v) {
                let o = JSON.parse(JSON.stringify(v));
                operator_buses += '<option value="'+o.id+'">';
                operator_buses += o.license_plate;
                operator_buses += '</option>';

            });

            $('#scheduling_operator_buses').html(operator_buses);
            //scheduling_operator_id
        }
    });
}

function get_route_codes () {
    $.ajax({
        method: 'get',
        url: '/api/v1/internal/list/bus_routes',
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            let user_object = JSON.parse(JSON.stringify(response));
            console.log(response);

            let bus_operator_html = '';

            $.each(response, function (k, v) {
                let o = JSON.parse(JSON.stringify(v));
                bus_operator_html += '<option value="'+o.id+'">';
                bus_operator_html += o.start_route + " -> " + o.end_route;
                bus_operator_html += '</option>';
            });

            $('#scheduling_route_codes').html(bus_operator_html);
        }
    });
}

//Toggle User model

function updateUser() {

    let json_request = JSON.stringify({
        payload: {
            username: $('#model_username').val(),
            first_name: $('#model_first_name').val(),
            last_name: $('#model_last_name').val(),
            nrc: $('#model_nrc').val(),
            mobile: $('#model_phone').val(),
            ssn: $('#model_ssn').val(),
            account_status: $('#model_account_status').val(),
            operator_role: $('#model_operator_role').val(),
            email: $('#model_email').val()
        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/update/user',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            $('#modal_form_horizontal_user').modal('hide');
            window.location.reload();
        }
    })
}

function updateAccountStatus(state) {

    let status;
    switch (state) {
        case 1:
            status = "ACTIVE";
            break;
        case 2:
            status = "DEACTIVATE";
            break;
        default:
            status = "DEACTIVATE";
    }

    console.log(status);
    let json_request = JSON.stringify({
        payload: {
            username: $('#model_username').val(),
            account_status: status
        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/update/user',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            $('#modal_form_horizontal_user').modal('hide');
            window.location.reload();
        }
    })
}

function user_edit_model(id) {

    let json_request = JSON.stringify({
        payload: {
            user_id: id
        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/query/user',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            let data = JSON.parse(JSON.stringify(response));

            $('#modal_form_horizontal_user').modal('show');

            $('#model_username').val(data.response.QUERY.data.username);
            $('#model_first_name').val(data.response.QUERY.data.first_name);
            $('#model_last_name').val(data.response.QUERY.data.last_name);
            $('#model_email').val(data.response.QUERY.data.email);
            $('#model_phone').val(data.response.QUERY.data.mobile);
            $('#model_nrc').val(data.response.QUERY.data.nrc);
            $('#model_ssn').val(data.response.QUERY.data.ssn);
            $('#model_account_status').val(data.response.QUERY.data.account_status);
            $('#model_uuid').val(data.response.QUERY.data.uuid);
            $('#model_pwd_username').val(data.response.QUERY.data.username);
            $('#model_operator_role').val(data.response.QUERY.data.operator_role);
            $('#model_password').val("0123456789");
            $('#model_user_id').val(id);
        }
    });


}

function updateBus() {
    let json_request = JSON.stringify({
        payload: {

        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/update/bus',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            window.location.reload();
        }
    })
}

function bus_edit_model(id){
    let json_request = JSON.stringify({
        payload: {

        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/query/bus',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            window.location.reload();
        }
    })
}

function updateRoute() {
    let json_request = JSON.stringify({
        payload: {

        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/update/bus',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            window.location.reload();
        }
    })
}



function route_edit_model(id){
    let json_request = JSON.stringify({
        payload: {

        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/query/bus',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            window.location.reload();
        }
    })
}

$('#user_company_name').hide();
function user_type_selection(role){
    switch (role) {
        case "BOP":
            $('#user_company_name').show();
            $('#user_first_name').hide();
            $('#user_last_name').hide();
            break;
        default:
            $('#user_company_name').hide();
            $('#user_first_name').show();
            $('#user_last_name').show();
    }
}

function route_edit_model_manage(route) {

    let json_request = JSON.stringify({
        payload: {
            route_id: route
        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/query/route',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request,
        success: function (response) {
            let data = JSON.parse(JSON.stringify(response));
            console.log(response)
            $('#edit_route_name').val(response.route_name);
            $('#edit_route_route_fare').val(response.route_fare);
            $('#edit_route_from').val(response.start_route);
            $('#edit_route_to').val(response.end_route);
            $('#edit_route_id').val(route);
            console.log(route)

        }
    })
}

function update_system_bus_route() {

    route_id = $('#edit_route_id').val();
    let json_request_1 = JSON.stringify({
        payload: {
            route_id: route_id
        }
    });

    $.ajax({
        method: 'post',
        url: '/api/v1/internal/query/route',
        dataType: 'json',
        contentType: 'application/json',
        data: json_request_1,
        success: function (response) {

            let json_request = JSON.stringify({
                payload: {
                    route_id: route_id,
                    route_name: $('#edit_route_name').val(),
                    start_route: $('#edit_route_from').val(),
                    end_route: $('#edit_route_to').val(),
                    route_fare: $('#edit_route_route_fare').val()
                }
            });

            $.ajax({
                method: 'post',
                url: '/api/v1/internal/update/route',
                dataType: 'json',
                contentType: 'application/json',
                data: json_request,
                success: function (response) {
                    window.location.reload()
                }
            })
        }
    })


}