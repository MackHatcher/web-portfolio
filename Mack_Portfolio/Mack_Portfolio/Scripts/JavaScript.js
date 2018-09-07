$(document).ready(function () {
});

$   ("#btn-math").click(function () {
    var num1 = Number($("#num1").val());
    var num2 = Number($("#num2").val());
    var num3 = Number($("#num3").val());
    var num4 = Number($("#num4").val());
    var num5 = Number($("#num5").val());
    var max, min, mean, sum, product;

    //math functions
    max = Math.max(num1, num2, num3, num4, num5);
    min = Math.min(num1, num2, num3, num4, num5);
    sum = num1 + num2 + num3 + num4 + num5;
    mean = sum / 5;
    product = num1 * num2 * num3 * num4 * num5;

    //output results
 
    $("#sum").text("The sum is: " + sum);
    $("#product").text("The product is: " + product);
    $("#mean").text("The average is: " + mean);
    $("#max").text("The largest number is: " + max);
    $("#min").text("The smallest number is: " + min);
});

$("#mathcode").hide();
$("#btn-show").click(function () {
    $("#mathcode").toggle();
    $("#btn-show").text("Hide");
    
});

        $("#btn-factor").click(function () {
            var factNum = Number($("#num6").val());
    var answer = 0;
    //factor function

            if (factNum > 0 && $("#num6").val() != "") {
                for (var i = factNum - 1; i > 0; i--) {
        factNum = factNum * i;
    answer = factNum;
}
$("#factorial").text("The factorial of the provided number is " + answer + ".");
}
            else {
        $("#factorial").text("Please ensure you have entered a value, and that it is greater than 0");
    }
});

$("#fact-show").hide();
$("#btn-factor-show").click(function () {
    $("#fact-show").toggle();
    $("#btn-factor-show").text("Hide");

});

        $("#btn-fizz").click(function () {
            var n1 = Number($("#fizz").val());
    var n2 = Number($("#buzz").val());
    var arr = [];
    var output = "";

            for (let i = 1; arr.length < 100; i++) {
                if (i % n1 === 0 && i % n2 === 0) {
        arr.push("FizzBuzz");

    } else if (i % n1 === 0) {
        arr.push('Fizz');

    } else if (i % n2 === 0) {
        arr.push('Buzz');

    } else {
        arr.push(i);

    }

}
$("#fizzBuzzResult").text(arr.join(', '));

});

$("#fizz-code").hide();
$("#fizz-show").click(function () {
    $("#fizz-code").toggle();
    $("#fizz-show").text("Hide");

});
$("#pal-code").hide();
$("#pal-show").click(function () {
    $("#pal-code").toggle();
    $("#pal-show").text("Hide");
});

        $("#btn-palindrome").click(function () {
            var palSen = $("#pal").val();
   
            if ($("#pal").val() != "") {

        palSen = palSen.replace(/\s/g, '');
    palSen = palSen.replace(/[^a-zA-Z0-9]/g, '');

    var palCheck = "";
   
                for (var i = (palSen.length) - 1; i >= 0; i--) {
        palCheck += palSen[i];
    }

   
                if (palSen.toUpperCase() == palCheck.toUpperCase()) {

        $("#palResult").text(palSen + " is a palindrome.");
    }
                else {

        $("#palResult").text(palSen + " is not a palindrome.");
    }
}
            else {

        $("#palResult").text("Please enter a valid value.");
    }

});

