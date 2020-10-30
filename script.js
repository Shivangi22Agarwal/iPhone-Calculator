	// digital clock

	function startTime() {
	  var today = new Date();
	  var h = today.getHours();
	  var m = today.getMinutes();
	  var s = today.getSeconds();
	  m = checkTime(m);
	  s = checkTime(s);
	  document.getElementById('clock').innerHTML =
	  h + ":" + m + ":" + s;
	  var t = setTimeout(startTime, 500);
	}
	function checkTime(i) {
	  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	  return i;
	}

    // calculator
    
     function append(val){
          document.getElementById('display').value+=val;
      }
      function del(){
        a = document.getElementById('display').value;
        document.getElementById('display').value = a.substr(0,a.length-1);
      }
      function clr(){
        if (display.value==''){
          alert("Lol! You are clearing a already clean screen");
        }
        else{
          document.getElementById('display').value='';
        }
      }
      function answer(){
        if (display.value==''){
          alert("Enter something to calculate!");
        }
        else{
          let x=document.getElementById('display').value;
          let y= eval(x);
          document.getElementById('display').value=y;
        }
      }