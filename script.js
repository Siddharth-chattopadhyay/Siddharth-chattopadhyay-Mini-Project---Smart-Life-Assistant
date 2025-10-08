choice = prompt("Enter the choice of your program");
if (choice === null){}
else if (choice == 0){
    alert("Thank you for using this program");
}
else if (choice == 1){
    age = prompt("Enter your age");
    weight = prompt("Enter your weight in kg");

    expectedWeight = age * 4.0;

    if (weight < expectedWeight - 10){
        alert("You are underweight for your age. Consider a healthy diet.");
    }
    else if (weight > expectedWeight + 10){
        alert("You are overweight for your age. Consider an exercise plan and a healthy diet.");
    }
    else {
        alert("Your health is good.");
    }
}
else if (choice == 2){
    income = prompt("Enter your monthly income amount");

    if (income < 10_000){
        alert("Your income is low! Spend cautiously and save more!");
    }
    else if (income >= 10_000 && income < 30_000){
        alert("Balanced budget!");
    }
    else {
        alert("Your income is great! Consider investing in SIPs");
    }
}
else if (choice == 3){ // Mobile Data Usage Alert System
    usage_in_gb = prompt("Enter your total data used in GB");

    if (usage_in_gb < 5)
        alert("Low usage");
    else if (usage_in_gb < 15)
        alert("Normal usage");
    else
        alert("Heavy usage, consider a bigger plan");
}
else if (choice == 4){ // Change Password Logic
    psd = "siddharth@2025";

    if (psd !== prompt ("Enter your old password")){
        alert("Password do not match");
    }
    else {
        const previous = psd;
        psd = prompt("Enter new password");
        if (psd === previous){
            alert("Same password were used");
        }
        else if (psd !== prompt("Confirm password")){
            alert("Password do not match");
        }
        else {
            alert("Password changed successfully");
        }
    }
}
else {
    alert("An invalid choice has been entered");
}
