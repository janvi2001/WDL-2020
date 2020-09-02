
$(function(){
    $('#inputmaterial').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z ]/.test(this.value)){
            alert("Invalid Material.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            return false;
        }
    });

    $('#inputquantity').on('blur',function(){
        if(/[^0-9]/.test(this.value)){
            alert("inavlid Quantity. It should be a number")
            this.value="";
            $(this).focus();
        }
    });
    $('#inputunit').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z ]/.test(this.value)){
            alert("Invalid UNIT.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            return false;
        }
    });
    $('#btn').click(function(){
        $('#inquiredone').removeAttr("hidden")
    });
    
    $('#inputusername').on('keypress keydown keyup',function(){
        if(/[^a-zA-Z0-9 ]/.test(this.value)){
            alert("Invalid Username. Please enter only characters and numbers");
            this.value="";
            $(this).focus();
            return false;
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































































