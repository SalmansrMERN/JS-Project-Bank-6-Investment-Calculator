var calculateBtn = document.getElementById("calculate_btn");
calculateBtn.addEventListener("click", function () {


    var totalAmount = document.getElementById("total_amount").innerText;
    var totalAmountNumber = parseFloat("totalAmount")

    var investmentAmount = document.getElementById("investment_amount").value;
    var investNumber = parseFloat(investmentAmount);

    var spendingYear = document.getElementById("spending_year").value;
    var spendingNumber = parseFloat(spendingYear);


    var percentageAmount = document.getElementById("percentage").value;
    var percentageNumber = parseFloat(percentageAmount);

    // ======= all dom selection up =========

    document.getElementById("year").innerText = spendingNumber;

    var p = percentageNumber / 100;

    var amountTotal = (investNumber * (1 + p) ** spendingNumber);


    document.getElementById("total_amount").innerText = amountTotal.toFixed(3);



})

// ========  calculation part up =========

var refreshBtn = document.getElementById("refresh_btn");
refreshBtn.addEventListener("click", function () {

    document.getElementById("total_amount").innerText = "00";
    document.getElementById("year").innerText = "0"
    document.getElementById("investment_amount").value = "";
    document.getElementById("spending_year").value = "";
    document.getElementById("percentage").value = "";

})

// ========== reftresh button end =========

// var yearAmount = document.getElementById("year").innerText;