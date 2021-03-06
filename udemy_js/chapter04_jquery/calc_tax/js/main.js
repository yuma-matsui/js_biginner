$(function(){

	function calcTax(){
		const price = $("#price").val();
		const taxRate = $("#taxRate").val();
	
		const taxAmount = Math.floor( price * taxRate / 100 );
		const totalPrice = taxAmount + price * 1;
	
		$("#taxAmount").val(taxAmount);
		$("#taxIncluded").val(totalPrice);
	};

	$("#btnExec").click(calcTax);
});