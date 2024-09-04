function getSvg(svgTitle, logoTitle, sizeTitle,colourTitle) {
  console.log("the svg title is:", svgTitle);
  var textures = document.getElementsByClassName("texture");
  var allSvgs = [];

  // Collect all SVG elements into an array
  for (var i = 0; i < textures.length; i++) {
      var svgs = textures[i].getElementsByTagName("svg");

      // Add each SVG to the allSvgs array
      for (var j = 0; j < svgs.length; j++) {
          allSvgs.push(svgs[j]);
      }
  }
  
  console.log("All SVGs found:", allSvgs);
  
  // Log the svgTitle we are looking for
  console.log("Looking for SVG with ID:", svgTitle);
  
  // Log available SVG IDs
  console.log("Available SVG IDs:", allSvgs.map(svg => svg.id));

  // Find the SVG by ID
  selectedSvg = allSvgs.find(svg => svg.id === svgTitle); 
  console.log("Selected SVG:", selectedSvg);

  if (badgeTitle==='left'){
    bposition_x =60;
    bposition_y=400;
    
  }
  if (sponsorTitle==='left'){
    sposition_x =60;
    sposition_y=500;
    
  }
  if (badgeTitle==='right'){
    bposition_x =200;
    bposition_y=400;
 
  }
  if (sponsorTitle==='right'){
    sposition_x =200;
    sposition_y=500;
    
  }

  if (badgeTitle==='centre'){
    bposition_x =130;
    bposition_y=400;
    
  }
  if (sponsorTitle==='centre'){
    sposition_x =130;
    sposition_y=500;
    
  }
  if (logoTitle==='left'){
    position_x =60;
    position_y=400;
    
  }
  if (logoTitle==='right'){
    position_x =200;
    position_y=400;
 
  }

  if (logoTitle==='centre'){
    position_x =130;
    position_y=400;
    
  }
  if (sizeTitle==='small'){
    size =20;
    
  }
  if (sizeTitle==='medium'){
    size =30;
    
  }
  if (sizeTitle==='large'){
    size =40;
    
  }
  if (badge_sizeTitle==='small'){
    bsizex =60;
    bsizey=40;

    
  }
  if (badge_sizeTitle==='medium'){
    bsizex =70;
    bsizey=47;

    
  }
  if (badge_sizeTitle==='large'){
    bsizex =100;
    bsizey=67;
    
  }
  if (backsponsor_sizeTitle==='small'){
    bbsizex =10;
    bbsizey=15;
    backpos=425;
    backpos1=280;

    
  }
  if (backsponsor_sizeTitle==='medium'){
    bbsizex =20;
    bbsizey=30;
    backpos=419;
    backpos1=282;


    
  }
  if (backsponsor_sizeTitle==='large'){
    bbsizex =30;
    bbsizey=45;
    backpos=415;
    backpos1=276;
    
  }
  if (sponsor_sizeTitle==='small'){
    ssizex =60;
    ssizey=40;

    
  }
  if (sponsor_sizeTitle==='medium'){
    ssizex =70;
    ssizey=47;

    
  }
  if (sponsor_sizeTitle==='large'){
    ssizex =100;
    ssizey=67;
    
  }



  // Check if selectedSvg is found
  if (selectedSvg) {
      var svgData = (new XMLSerializer()).serializeToString(selectedSvg);
      console.log("Serialized SVG Data:", svgData);

      // Setup img and canvas
      img = document.createElement("img");
      logoImg = document.createElement("img");
      badgeImg = document.createElement("img");
      sponsorImg = document.createElement("img");
      leftsleeveImg=document.createElement("img");
      ghostImg=document.createElement("img");
      sleevetrimImg=document.createElement("img");
      sleevetrimImg1=document.createElement("img");
      ghostImg1=document.createElement("img");
      rightsleeveImg=document.createElement("img");
      backsponsorImg = document.createElement("img");
      
      canvas = document.createElement("canvas");

      if (colourTitle1 === 'black') {
        rectangleColor = 'black';
      } else if (colourTitle1 === 'white') {
        rectangleColor = 'white';
      } else if (colourTitle1 === 'l-red') {
        rectangleColor = '#f44336';
      } else if (colourTitle1 === 'd-red') {
        rectangleColor = '#990000';
      } else if (colourTitle1 === 'blue') {
        rectangleColor = 'rgb(0, 0, 255)';
      } else if (colourTitle1 === 'd-blue') {
        rectangleColor = 'rgb(35, 0, 162)';
      } else if (colourTitle1 === 'l-blue') {
        rectangleColor = 'rgb(43, 214, 217)';
      } else if (colourTitle1 === 'purple') {
        rectangleColor = 'rgb(201, 4, 240)';
      } else if (colourTitle1 === 'pink') {
        rectangleColor = 'rgb(254, 0, 233)';
      } else if (colourTitle1 === 'l-green') {
        rectangleColor = 'rgb(0, 254, 42)';
      } else if (colourTitle1 === 'green') {
        rectangleColor = 'rgb(3, 124, 23)';
      } else if (colourTitle1 === 'yellow') {
        rectangleColor = 'rgb(245, 237, 4)';
      } else if (colourTitle1 === 'orange') {
        rectangleColor = 'rgb(245, 181, 4)';
      } else if (colourTitle1 === 'grey') {
        rectangleColor = 'rgb(155, 155, 155)';
      } else if (colourTitle1 === 'd-orange') {
        rectangleColor = 'rgb(254, 123, 0)';
      } else if (colourTitle1 === 'd-green') {
        rectangleColor = 'rgb(29, 60, 26)';
      } else if (colourTitle1 === 'd-yellow') {
        rectangleColor = 'rgb(246, 226, 2)';
      }

      if (colourTitle2 === 'black') {
        rectangleColor1 = 'black';
      } else if (colourTitle2 === 'white') {
        rectangleColor1 = 'white';
      } else if (colourTitle2 === 'l-red') {
        rectangleColor1 = '#f44336';
      } else if (colourTitle2 === 'd-red') {
        rectangleColor1 = '#990000';
      } else if (colourTitle2 === 'blue') {
        rectangleColor1 = 'rgb(0, 0, 255)';
      } else if (colourTitle2 === 'd-blue') {
        rectangleColor1 = 'rgb(35, 0, 162)';
      } else if (colourTitle2 === 'l-blue') {
        rectangleColor1 = 'rgb(43, 214, 217)';
      } else if (colourTitle2 === 'purple') {
        rectangleColor1 = 'rgb(201, 4, 240)';
      } else if (colourTitle2 === 'pink') {
        rectangleColor1 = 'rgb(254, 0, 233)';
      } else if (colourTitle2 === 'l-green') {
        rectangleColor1 = 'rgb(0, 254, 42)';
      } else if (colourTitle2 === 'green') {
        rectangleColor1 = 'rgb(3, 124, 23)';
      } else if (colourTitle2 === 'yellow') {
        rectangleColor1 = 'rgb(245, 237, 4)';
      } else if (colourTitle2 === 'orange') {
        rectangleColor1 = 'rgb(245, 181, 4)';
      } else if (colourTitle2 === 'grey') {
        rectangleColor1 = 'rgb(155, 155, 155)';
      } else if (colourTitle2 === 'd-orange') {
        rectangleColor1 = 'rgb(254, 123, 0)';
      } else if (colourTitle2 === 'd-green') {
        rectangleColor1 = 'rgb(29, 60, 26)';
      } else if (colourTitle2 === 'd-yellow') {
        rectangleColor1 = 'rgb(246, 226, 2)';
      }
    

      const svgRectangle = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100%" height="100%" fill="${rectangleColor}" />
      </svg>`;
      
      // Convert the SVG string to a data URI
      const svgDataUri = 'data:image/svg+xml;base64,' + btoa(svgRectangle);
      
      // Set the data URI as the src of the image
      sleevetrimImg.src = svgDataUri;
      const svgRectangle1 = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        <rect width="100%" height="100%" fill="${rectangleColor1}" />
      </svg>`;
      
      // Convert the SVG string to a data URI
      const svgDataUri1 = 'data:image/svg+xml;base64,' + btoa(svgRectangle1);
      
      // Set the data URI as the src of the image
      sleevetrimImg1.src = svgDataUri1;

      // Convert the SVG string to a data URI
      

 

      // Set the canvas size to match the SVG
      var svgSize = selectedSvg.getBoundingClientRect();
      canvas.width = svgSize.width;
      canvas.height = svgSize.height;
      console.log("SVG Size:", svgSize);

      images = [
        { src: stars ? 'assets/textures/stars.png' : '', x: 30, y: 500, width: 200, height: 100 },
        { src: stars1 ? 'assets/textures/stars1.png' : '', x: 60, y: 500, width: 150, height: 100  },
        { src: squares ? 'assets/textures/blacksquares.png' : '', x: 60, y: 500, width: 150, height: 100 },
        { src: line ? 'assets/textures/blackline.png' : '', x: 60, y: 430, width: 250, height: 150 },
        { src: lines ? 'assets/textures/diagonallines.png' : '', x: 60, y: 380, width: 150, height: 200 },
        { src: diamond ? 'assets/textures/diamondpattern.png' : '', x: 60, y: 380, width: 150, height: 200 },
        { src: fancypattern ? 'assets/textures/fancycollar.png' : '', x: 90, y: 310, width: 100, height: 100 },
        { src: split ? sleevetrimImg.src:'', x:47,y:486,width:200,height:10 }
      ];


      // Get the canvas context
      ctx = canvas.getContext("2d");

      // Use the onload event to ensure the image is loaded before drawing on canvas
      img.onload = function() {
          // Clear and draw the SVG on the canvas
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, -svgSize.y);  // Offset by y-coordinate
          console.log("SVG drawn to canvas");
          
          // Load the logo image
          if (colourTitle==='black'){
            logoImg.src = 'assets/textures/imageblack1.png';  // Set the path to the logo image;
            
          }
          if (colourTitle==='white'){
            logoImg.src = 'assets/textures/imagewhite1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='l-red'){
            logoImg.src = 'assets/textures/imagered1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='d-red'){
            logoImg.src = 'assets/textures/imagered2.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='blue'){
            logoImg.src = 'assets/textures/imageblue1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='d-blue'){
            logoImg.src = 'assets/textures/imageblue3.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='l-blue'){
            logoImg.src = 'assets/textures/imageblue2.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='purple'){
            logoImg.src = 'assets/textures/imagepurple1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='pink'){
            logoImg.src = 'assets/textures/imagepink1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='l-green'){
            logoImg.src = 'assets/textures/imagegreen1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='green'){
            logoImg.src = 'assets/textures/imagegreen2.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='yellow'){
            logoImg.src = 'assets/textures/imageyellow1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='orange'){
            logoImg.src = 'assets/textures/imageorange1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='grey'){
            logoImg.src = 'assets/textures/imagegrey1.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='d-green'){
            logoImg.src = 'assets/textures/imagegreen3.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='d-orange'){
            logoImg.src = 'assets/textures/imageorange2.png';  // Set the path to the logo image;
            
          };
          if (colourTitle==='d-yellow'){
            logoImg.src = 'assets/textures/imageyellow2.png';  // Set the path to the logo image;
            
          };

          

          

          badgeImg.src = filesource; // Set the path to the logo image;
          sponsorImg.src = filesource1;
          leftsleeveImg.src=filesource2;
          rightsleeveImg.src=filesource3;
          ghostImg.src=filesource4;
          ghostImg1.src=filesource5;
          backsponsorImg.src = filesource6;
          console.log(sponsorImg.src);
          
         
          
      };

      // Set the img source to the serialized SVG
      img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

      // Append canvas to the document body or a specific element
      document.body.appendChild(canvas);
      
      
  } else {
      console.error("No SVG found with the ID:", svgTitle);
      return;  // Exit the function if no SVG was found
  }
}


