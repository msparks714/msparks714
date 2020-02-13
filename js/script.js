<html lang="en"
<head>
  <meta charset="utf-8">

  <title> The HTML5 Herald</title>
  <meta name= "description" content="The HTML 5 Herald">
  <meta name="author" content="SitePoint">

  <link rel="stylesheet" href="css/styles.css?v=1.0">

  </head>
<body>

  </body>

  <body>
    <script src="js/scripts.js"></script>
    // find elements
    var banner = $("#banner-message")
    var button = $("button")

    // handle click and add class
    button.on("click", function(){
      banner.addClass("alt")
    })
    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }

      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }

      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }
    $('.destination-list-item').on('click', function() {

    	var TravelDestinationUrl = $(this).attr('data-destination-photo')
      console.log(TravelDestinationUrl)
      $('#travel-art').empty()
      $('#travel-art').css('background-image', `url(${TravelDestinationUrl})`)
    })
    </body>
  </html>
