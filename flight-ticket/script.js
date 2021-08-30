var returnFlight=1;

$(document).ready(function(){

var titleFlight;
 var costs;   
$('#tickets').click(function(){
costs=parseInt (this.value);
titleFlight=$('#tickets option:selected').text();
$('#costs').text(costs);
$('#ticket-view').text(titleFlight);

});
var numberOf=1;
$('#number').click(function(){
numberOf=parseInt(this.value);
$('#amount-ticket').text(numberOf);
$('#price').text(costs*numberOf);

});
var dateTicket;
$('#date1').change(function(){
  dateTicket=(this.value);
  $('#ticket-date').text(dateTicket);
})

var titleClass;
var chargeClass=0;
var dateReturn;
$('#date2').change(function(){
  dateReturn=(this.value);
  $('#return-date').text(dateReturn);
})

$('.class').click(function(){
chargeClass=parseFloat(this.getAttribute("data-price"));
titleClass=this.getAttribute("data-type");
$('#price').text(costs*numberOf+(costs* numberOf*chargeClass));
$('#comfort-ticket').text(titleClass);

$('#return').click(function(){
    if($("#return").is(':checked')){
        returnFlight=2;
        $('#price').text ((costs*numberOf+(costs*numberOf*chargeClass))*returnFlight);
        $('#return-ticket').text("YES");
        $('#return-date').text(dateReturn);
   } 
   else{
       returnFlight=1;
    $('#price').text((costs*numberOf+(costs*numberOf*chargeClass))*returnFlight);
    $('#return-ticket').text("NO");
    $('#return-date').text("");

   }
});

});
var sumAll =0;
  $('#addto').click(function(){
$('#basket').append('<div class="itemBasket" data-price='+$("#price").text() + '>'+$('#ticket-view').html()+"<br>"
+"Date: "+$('#ticket-date').html()+"<br>"+ "Tickets: "
+$('#amount-ticket').html()+ "<br>"
+"Return ticket: "+ $('#return-ticket').html()+"<br>"
+$('#comfort-ticket').html()+"<br>"
+"Price: "+$('#price').html()+ "--EUR"+"<br>"
+"<button class='remov'>Remove</button></div>");

sumAll+=parseFloat((costs*numberOf+(costs*numberOf*chargeClass))*returnFlight);
$('#total-price').text(sumAll);
console.log(sumAll);



$('input:checkbox').each(function(){
this.checked=false;
});
$('#costs').text("");
$('#ticket-view').text("");
$('#amount-ticket').text("");
$('#return-ticket').text("");
$('#comfort-ticket').text("");
$('#price').text("");
$('#number').val(1);
});


$(document).on('click','.remov',function(){
  sumAll-=parseFloat($(this).closest('div').attr("data-price"));
  $(this).closest('div').remove();
$('#total-price').text(sumAll);
});

var budget;
$('#budget').change(function(){
budget=parseInt(this.value);
});
var difference;
$('#check-budget').click(function(){
difference=parseInt(sumAll-budget);
if(sumAll>budget){
  $('#control').text("Not enough!");
  $('#control').css({'font-size':'40px','color':'red'});
}
else{
  $('#control').text("Enough.");
}
});

$(document).on('keypress',':text,textarea', function () {
  if (this.value.match(/[^a-zA-Z0-9 ]/g)) {
    this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
    $('#report').text("Not allowed characters!")
  }
});
$('#submit').click(function(){
alert("Successfully sent!");
});







});

