
/* Selector By ID */
function handleMouseOver() {
	console.log("I have successfully called.");
	
	var id2Element = document.querySelector("#id2");
	id2Element.style.background = "pink";
	id2Element.style.color = "royalblue";
	
	id2Element.innerHTML = "Hello Id Selectors!!";
	}
	
	function handleMouseOut() {
	    let id2Element = document.querySelector("#id2");
	    id2Element.style.background = "black";
	    id2Element.style.color = "white";
	
	    id2Element.innerHTML = "Hello World";
    }
    
    /* Selector By Class */

    function handleMouseOver1() {
        var id2Element = document.querySelector(".beautify");
        id2Element.style.background = "royalblue";
        id2Element.style.color = "yellow";
      
        id2Element.innerHTML = "Hello Class Selector!!";
    }
      
    function handleMouseOut1() {
        let id2Element = document.querySelector(".beautify");
        id2Element.style.background = "black";
        id2Element.style.color = "white";
      
        id2Element.innerHTML = "Hello World";
    }

      /* Selector By Element */

    function handleMouseOver2() {
        var id2Element = document.querySelector("div").children[2];
        id2Element.style.background = "gold";
        id2Element.style.color = "black";
      
        id2Element.innerHTML = "Hello Element Selector!!";
    }
      
    function handleMouseOut2() {
        let id2Element = document.querySelector("div").children[2];
        id2Element.style.background = "black";
        id2Element.style.color = "white";
      
        id2Element.innerHTML = "Hello World";
    }