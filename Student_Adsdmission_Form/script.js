function submit(){
    debugger
    fullNameInput = document.getElementById('fname');
        let nameRegex = /^[a-zA-Z ]+$/.test( fullNameInput.value);
        if(nameRegex){
                console.log("Full Name:", fullNameInput.value)
                document.getElementById("hiddenfname").style.display = "none"
        }
        else{
                document.getElementById("hiddenfname").style.display = "block"
        }

    fathernameInput = document.getElementById('fathername');
        let fathernameRegex = /^[a-zA-Z ]+$/.test( fathernameInput.value);
        if(fathernameRegex){
                console.log("Father Name:", fathernameInput.value)
                document.getElementById("hiddenfathername").style.display = "none"
        }
        else{
                document.getElementById("hiddenfathername").style.display = "block"
        }

    mothernameInput = document.getElementById('fname');
        let mothernameRegex = /^[a-zA-Z ]+$/.test( mothernameInput.value);
        if(mothernameRegex){
                console.log("Mother Name:", mothernameInput.value)
                document.getElementById("hiddenmothername").style.display = "none"
        }
        else{
                document.getElementById("hiddenmothername").style.display = "block"
        }
    
    ageInput = document.getElementById('age');
        let ageRegex =/^[0-9]{2}$/.test(ageInput.value);
        if(ageRegex){
            console.log("Age:", ageInput.value)
            document.getElementById("hiddenage").style.display = "none"
        }
        else{
            document.getElementById("hiddenage").style.display = "block"
        }

    addressInput = document.getElementById('address');
        let addressRegex =/^[a-zA-Z]+-[0-9]{6}$/.test(addressInput.value);
        if(addressRegex){
            console.log("Address:", addressInput.value)
            document.getElementById("hiddenaddress").style.display = "none"
        }
        else{
            document.getElementById("hiddenaddress").style.display = "block"
        }

    emailInput = document.getElementById('email');
        let emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value);
        if(emailRegex){
            console.log("Email Address:", emailInput.value)
            document.getElementById("hiddenemail").style.display = "none"
        }
        else{
            document.getElementById("hiddenemail").style.display = "block"
        }
    
    phnoInput = document.getElementById('phno');
        let phnoRegex =/^[0-9]{10}$/.test(phnoInput.value);
        if(phnoRegex){
            console.log("Phone Number:", phnoInput.value)
            document.getElementById("hiddenphno").style.display = "none"
        }
        else{
            document.getElementById("hiddenphno").style.display = "block"
        }

      
    bloodInput = document.getElementById('bloodgroup');
        let bloodRegex =/^[A|B|AB|O][\+|\-]$/.test(bloodInput.value);
        if(bloodRegex){
            console.log("Blood Group:", bloodInput.value)
            document.getElementById("hiddenblood").style.display = "none"
        }
        else{
            document.getElementById("hiddenblood").style.display = "block"
        }    

    SSLCInput = document.getElementById('SSLC');
        let SSLCRegex =/^^\d+(\.\d+)?%$/.test(SSLCInput.value);
        if(SSLCRegex){
            console.log("SSLC Marks:", SSLCInput.value)
            document.getElementById("hiddenSSLC").style.display = "none"
        }
        else{
            document.getElementById("hiddenSSLC").style.display = "block"
        }  
        

    var element=document.getElementById('Gender');
        for(i=0; i<element.lenght; i++){
            if(element[i].checked){
                console.log("Gender is:",element[i].value);
            }
        }

    const dropdown=document.getElementById("course");
    console.log("Selected Value:",dropdown.value)
    }