
$(function(){
    $('#inputmaterial').on('keypress',function(){
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
    $('#inputunit').on('keypress',function(){
        if(/[^a-zA-Z ]/.test(this.value)){
            alert("Invalid UNIT.Alphabets and spaces only");
            this.value="";
            $(this).focus();
            return false;
        }
    });
});


































































