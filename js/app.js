

function myfun(){

    let a,b,c,d,e,f,g ;

        a = document.forms['form']['name'].value;
        b = document.forms['form']['Number'].value;
        c = document.forms['form']['Email'].value;
        d = document.forms['form']['Password'].value;
        e = document.forms['form']['counity'].value;
        f = document.forms['form']['counity1'].value;
        g = document.forms['form']['sabbir'].value;

        if(a == ""){
            alert('enter your name');
            return false;
         }

         if(b == ""){
            alert('fill your number');
            return false;
         }

         if(c == ""){
            alert('please enter your email');
            return false;
         }

         if(d == ""){
            alert('please enter your password');
            return false;
         }

         if(e == ""){
            alert('fill your counity');
            return false;
         }

         if(f == ""){
            alert('fill your counity');
            return false;
         }

         if(g == ""){
            alert('select your gender');
            return false;
         }
}