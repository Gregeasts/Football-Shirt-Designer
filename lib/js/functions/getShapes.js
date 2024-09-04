// CREATED GEOMETRY FROM IMPORTED EXTERNAL GEOMETRY

function getJersey(geometry, material) {

	ctx.drawImage(img, 0, 0);
	images.forEach(imageInfo => {
		if (imageInfo.src) {
			const img = new Image();
			img.src = imageInfo.src;
			
			ctx.drawImage(img, imageInfo.x, imageInfo.y, imageInfo.width, imageInfo.height);
			
			console.log(img.src)
		}
	});


	


	ctx.drawImage(logoImg, position_x+adjust_x, position_y+adjust_y,size*stretch_x,size*stretch_y)
	ctx.drawImage(badgeImg, bposition_x+badjust_x,bposition_y+badjust_y,bsizex*bstretch_x,bsizey*bstretch_y);
	ctx.drawImage(sponsorImg, sposition_x+sadjust_x,sposition_y+sadjust_y,ssizex*sstretch_x,ssizey*sstretch_y);
	ctx.drawImage(backsponsorImg, backpos,backpos1,bbsizex,bbsizey);
	
	function getRandomCoordinate(max) {
		return Math.floor(Math.random() * (max + 1));
	}
	
	// Generate random coordinates for the right sleeve image
	var randomXRight = getRandomCoordinate(1028);
	var randomYRight = getRandomCoordinate(1028);
	
	// Generate random coordinates for the left sleeve image
	var randomXLeft = getRandomCoordinate(1028);
	var randomYLeft = getRandomCoordinate(1028);
	
	// Draw the images at the random positions
	ctx.drawImage(rightsleeveImg ,660, 395, 60,60);
	ctx.drawImage(leftsleeveImg, 885, 395, 60, 60);
	ctx.globalAlpha = 0.5; // Set to 50% transparency
	ctx.drawImage(ghostImg, 670,490,100,100);
	ctx.drawImage(ghostImg1, 646,486,144,86);
	
	
	ctx.globalAlpha = 1; // Set to 50% transparency
	console.log(randomXLeft,randomYLeft,randomXRight,randomYRight)
	ctx.drawImage(sleevetrimImg, 541,450,250,25);//481 447
	ctx.drawImage(sleevetrimImg, 745,450,250,25);
	ctx.drawImage(sleevetrimImg1, 14,230,250,30);
	
	ctx.font = `${numberSize*backstretch}px ${numberFont}`;
	ctx.fillStyle =`${numberColour}` ; // Text color
	ctx.fillText(numberTitle, numberX+backadjust_x, numberY+backadjust_y); // Draw text on canvas
	console.log("Text drawn on the canvas");

	ctx.font = `${textSize*textstretch}px ${textFont}`;
	ctx.fillStyle =`${textColour}` ; // Text color
	
	ctx.letterSpacing = `${spaceletter}px` ;
	ctx.fillText(textTitle, textX+textadjust_x, textY+textadjust_y); // Draw text on canvas
	console.log("Text drawn on the canvas");


	
	
	
	ctx.letterSpacing = `${spaceletter2}px` ;
	ctx.font = `${textSize2*textstretch2}px ${textFont2}`;
	ctx.fillStyle =`${textColour2}` ; // Text color
	ctx.fillText(text2Title, textX2+textadjust2_x, textY2+textadjust2_y); // Draw text on canvas
	console.log("Text drawn on the canvas");
		

	
	console.log("Text coordinates:", numberX, numberY);
 	console.log("Text size:", numberSize);
    console.log("Text font:", numberFont);
	console.log(canvas.width, canvas.height);

	
  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

	var material = new THREE.MeshPhongMaterial({
		// color: 'rgb(120, 120, 120)'
		map: texture
	});
	var mesh = new THREE.Mesh(
		geometry,
		material
	);

	mesh.material.side = THREE.DoubleSide;
	console.log(mesh.material.side)

  mesh.position.y = -4;

	// return mesh;
	scene.add(mesh);
	// Assuming you have a canvas element with the id "myCanvas"
	

	
    // You can use these coordinates to interact with your 3D scene
    // For example, using a raycaster to find the 3D point in a 3D scene
};

	



// function getPlane(size) {
// 	var geometry = new THREE.PlaneGeometry(size, size);
// 	var material = new THREE.MeshBasicMaterial({
// 		transparent: true,
// 		map: textureLoader.load('assets/textures/arrows.png')
// 	});
// 	var mesh = new THREE.Mesh(
// 		geometry,
// 		material
// 	);
//
// 	mesh.rotation.x = -Math.PI/2;
// 	mesh.position.y = -5;
//
// 	return mesh;
// 	// scene.add(mesh);
// }
