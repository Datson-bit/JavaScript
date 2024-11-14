      function myFunc(){
        alert('Hello World')
      }
      function show(){
        document.getElementById('div1').style.display="block"
      }

      function hide(){
        document.getElementById('div1').style.display="none"
      }
        function getValue(){
         alert(document.getElementById("color").value);
        }
      if(confirm("Do you love this app ")) {
        alert("thank for choosing this app");
      }
      else{
        alert('you pressed cancel');
      }
      var firstname= prompt("do you love this app");
           if(firstname==""||firstname==null){
             alert('you did not enter a value')
           }
           else{
             alert("Hi "+firstname+" remember you are special")
           }
                 
        function fadeOut(){
          var elem=   document.getElementById('div5');
 
           elem.style.opacity=0;
           setTimeout(function(){
             Element.style.display="none";
           },3000);
         }

        function fadeIn(){
         var elem=   document.getElementById('div5');

          elem.style.opacity=1;
          setTimeout(function(){
            Element.style.display="block";
          },3000);
        }
        function slideUp(){
          var elem= document.getElementById("list");
          elem.style.maxHeight="0px";
        }
        function slideDown(){
          var elem= document.getElementById("list");
          elem.style.maxHeight="100px";
        }
        function changeColor(element){
          var aD= element.style.background;
          if(aD=="green"){
            element.style.background="red"
          }
          else{
            element.style.background="green"
          }
        }
        function readFile(){
          var reader = new  FileReader();
          var file= document.getElementById('file').files[0];
          reader.onload= function(e){
            document.getElementById('result').src = e.target.result;
          }
          reader.readAsDataURL(file);
        }
        var date= new Date()
        document.write(date)

      var x =10
      var myInterval=setInterval(function(){
        x-=1
        document.getElementById("time").innerHTML=x;
      },1000)
      var timeout= setTimeout(function(){
        clearInterval(myInterval);
        var elem= document.getElementById("time").style.display="none";
      },10000)
     
       function colorChange(element){
         var background=element.style.background;
         if(background =="red"){
           element.style.background="blue";
         }
         else{
           element.style.background="red";
         }
       }