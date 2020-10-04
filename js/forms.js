document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()

    document.getElementById("receipt").style.display="block";

    fname = document.getElementById("fname");
    console.log("First Name: ", fname.value);

    lname = document.getElementById("lname");
    console.log("Last Name: ", lname.value);

    document.getElementById("stdname").innerHTML= fname.value+" "+lname.value;

    fathername = document.getElementById("fathername");
    console.log("Father's Name: ", fathername.value);

    document.getElementById("fath").innerHTML= fathername.value;

    mothername = document.getElementById("mothername");
    console.log("Mother's Name: ", mothername.value);

    document.getElementById("moth").innerHTML= mothername.value;

    year = 0;
    year1 = document.getElementsByName("year");
    for(i=0; i<4; i++){
        if (year1[i].checked == true)
            year = year1[i].value;
    }
    console.log("Year of study:", year);

    document.getElementById("yos").innerHTML= year;

    course = [];
    coursefee=0
    course1 = document.getElementsByName("course");
    for(i=0; i<3; i++){
        if (course1[i].checked == true){
            course.push(course1[i].value);
            coursefee=coursefee+1299;
          }
    }

    console.log("Selected courses:", course);
    document.getElementById("coursesselect").innerHTML= course;
    document.getElementById("coursefee").innerHTML= coursefee+" Solaris Credits";
    accomodation1 = document.getElementsByName("accomodation");
    for(i=0; i<2; i++){
        if (accomodation1[i].checked == true)
            checkedRadio = accomodation1[i];
    }

    if(checkedRadio == document.getElementById("accYes")){
        accomodation2 = document.getElementById('selectHostel');
        accomodation = accomodation2.value;
    }

    else
        accomodation = "None";
        accCost = 0;

    document.getElementById("accom").innerHTML= accomodation;

    if (accomodation==="Freshman Hall")
    accCost = 5000;
    else if (accomodation==="Oak Ridge")
    accCost = 8000;
    else if (accomodation==="Campus Center")
    accCost = 9000;

    console.log("Accomodation:", accomodation);
    console.log("Acc Cost:", accCost);
    document.getElementById("accomf").innerHTML= accCost+ " Solaris Credits";
    document.getElementById("totalfee").innerHTML= accCost+coursefee+" Solaris Credits";
});

document.getElementById("accYes").addEventListener("click", function(event){
    document.getElementById("selectHostel").disabled = false;
});

document.getElementById("accNo").addEventListener("click", function(event){
    document.getElementById("selectHostel").disabled = true;
});

console.log("Outside function name:", fname);
