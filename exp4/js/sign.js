$(function(){
    $('#inputname').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z ]/.test(this.value)) {
            alert("Invalid Username.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            
        }
    });
    $('inputEmail').on('blur',function(){
        if(/[^0-9A-Za-z.@_]/.test(this.value)){
            alert("Invalid email address");
            this.value="";
            $(this).focus();
            
        }
    });
    $('#inputnumber').on('blur',function(){
        if(/[^0-9]/.test(this.value)){
            alert("Invalid Mobile no. Numbers only");
            this.value="";
            $(this).focus();
        }
    });
    $('#inputusername').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z ]/.test(this.value)) {
            alert("Invalid Username.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            
        }
    });
    
});


