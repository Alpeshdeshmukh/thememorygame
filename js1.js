function fun1(){

    var s=document.getElementById("ph1");
    s.style.display="none";
    var k=document.getElementById("pb2a");
    k.style.display="block";
}

var act=0;
var cnt=0;



function fun2(){
    var k=document.getElementById("pb2a");
    k.style.display="none";
    var t=document.getElementById("ph2");
    t.style.display="block";
}
function fun3(){
    var k=document.getElementById("pb2a");
    k.style.display="none";
    var m=document.getElementById("ph2");
    m.style.display="none";
    var l=document.getElementById("ph3");
    l.style.display="block";
}
function fun4(){
    var k=document.getElementById("pb2a");
    k.style.display="none";
    var z=document.getElementById("ph4");
    z.style.display="block";
}

var arr=["America","India","Japan","China","NewZealand"];

function go(){
var cnt=0;
var a=document.getElementById("inn1");
document.getElementById("inn1").innerHTML=arr[cnt];
const myTime=setInterval(hideEle,2000);

var b=document.getElementById("in1");
function hideEle(){
    cnt++;
    document.getElementById("inn1").innerHTML=arr[cnt];

    if(cnt==5)
    {
        clearTimeout(myTime);
        a.style.display="none";
        b.style.display="block";

    }
}
}

var seq=["Enter a First Word","Enter a Second Word","Enter a Third Word","Enter a Forth Word","Enter a Last word","Hurre...! You Win "];
var seq1=["Enter a First Word","Enter a Second Word","Enter a Third Word","Hurre...! Your Brilliant...! "];

var seq2=["patience is power","every day is second chance","hold the vision trust the process","your best teacher is your last mistake","i know i will be someone someday"];
var seq3=["always do your best","like what you do and then you will do your best", "if you try to do your best there is no failure"];
var marks1=0;
document.getElementById("seq").innerHTML=seq[0];


function easy1(){
    
    var easy=document.getElementById("easytext").value;

    if(easy==arr[act])
    {
        alert("Correct Answer");
        act++;
        marks1++;
        document.getElementById("seq").innerHTML=seq[act];

        document.getElementById("mark").innerHTML=+marks1+" Out of 5";

        }
    else{
        alert("Wrong Answer try again...!");
    }
}


function go1(){
    var cnt=0;
    var c=document.getElementById("inn2");
    document.getElementById("inn2").innerHTML=seq2[cnt];
    const myTime=setInterval(hideEle,3000);
    
    var d=document.getElementById("in2");
    function hideEle(){
        cnt++;
        document.getElementById("inn2").innerHTML=seq2[cnt];
    
        if(cnt==5)
        {
            clearTimeout(myTime);
            c.style.display="none";
            d.style.display="block";
    
        }
    }
    }
    let h1=1,h2=1;

    function med1(){
    
        var med=document.getElementById("med").value;
        if(med==seq2[act])
        {
            alert("Correct Answer");
            act++;
            marks1++;
            document.getElementById("seq1").innerHTML=seq[act];
    
            document.getElementById("mark1").innerHTML=+marks1+" Out of 5";
    
            }
             else if(h1==3)
            {
                var hint=document.getElementById("hint1");
                hint.style.display="block";
            
                h1=1;
            }
        else{
            alert("Wrong Answer try again...!");
            h1++;

        }

       

    }

    let act1=0;
    function hint(){
        if(act1<5)
        {
        document.getElementById("hintpara1").innerHTML=seq2[act1];
        act1++;
        }
    }
    let act2=0;
    function hint2(){
        if(act2<3)
        {
        document.getElementById("hintpara2").innerHTML=seq3[act2];
        act2++;
        }
    }
    
    



    function go2(){
        var cnt=0;
        var e=document.getElementById("inn3");
        document.getElementById("inn3").innerHTML=seq3[cnt];
        const myTime=setInterval(hideEle,3000);
        
        var f=document.getElementById("in3");
        function hideEle(){
            cnt++;
            document.getElementById("inn3").innerHTML=seq3[cnt];
        
            if(cnt==3)
            {
                clearTimeout(myTime);
                e.style.display="none";
                f.style.display="block";
        
            }
        }
        }



        function hard1(){
    
            var hard=document.getElementById("hard").value;
        
            if(hard==seq3[act])
            {
                alert("Correct Answer");
                act++;
                marks1++;
                document.getElementById("seq3").innerHTML=seq1[act];
        
                document.getElementById("mark2").innerHTML=+marks1+" Out of 3";
        
                }
                else if(h2==3)
                {
                    var hint=document.getElementById("hint2");
                    hint.style.display="block";
                
                    h2=1;
                }
            else{
                alert("Wrong Answer try again...!");
                h2++;
            }
        }


    
    
    