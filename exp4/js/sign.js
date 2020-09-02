$(function(){
    $('#inputname').on('keypress',function(){
        if(/[^a-zA-Z ]/.test(this.value)) {
            alert("Invalid Username.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            return false;
        }
    });
    $('inputmail').on('blur',function(){
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
});

