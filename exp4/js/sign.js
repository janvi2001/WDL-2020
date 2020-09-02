$(function(){
    $('#inputname').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z ]/.test(this.value)) {
            alert("Invalid Username.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            
        }
    });
    $('#inputEmail').on('keypress keydown keyup blur',function(){
        if (!$(this).val().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
         $('#echeck').removeAttr("hidden")
        }
      else{
           $('#echeck').attr("hidden","")
          }
    });
    
    $('#inputnumber').on('keypress keydown keyup',function(){
        if(/[^0-9]/.test(this.value)){
            alert("Invalid Mobile no. Numbers only");
            this.value="";
            $(this).focus();
        }
    });
    $('#inputusername').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z0-9 ]/.test(this.value)){
            alert("Invalid Username. Please enter only characters and numbers");
            this.value="";
            $(this).focus();
            
        }
    });
    $('#inputPassword').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z0-9 ]/.test(this.value)){
            $('#check').removeAttr("hidden")
        }
        else{
            $('#check').attr("hidden","")
        }
    });
});


