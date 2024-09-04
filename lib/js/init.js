var camera, scene , renderer;
var jsonloader;

function init() {
	// ENV
	var scene = new THREE.Scene();
	scene.background = new THREE.Color('#f0f8ff'); // Set the desired background color

	var enableFog = false;

	if (enableFog) {
		scene.fog = new THREE.FogExp2(0xffffff, 0.2);
	}

	// EXTERNAL GEOMETRY
	var textureLoader = new THREE.TextureLoader();
	jsonloader = new THREE.JSONLoader();
	jsonloader.load('assets/models/jersey.json', getJersey);
	var pointLightFront = getPointLight(0,100,50,0.3);
	var pointLightBack = getPointLight(0,100,-50,0.6);
	var pointLightFront1 = getPointLight(0,50,50,0.3);
	var pointLightBack1 = getPointLight(0,50,-50,0.6);
	var pointLightSide = getPointLight(20,20,0,0.6);
	var pointLightSide1 = getPointLight(220,220,0,0.6);
	var pointLightSide2 = getPointLight(-15,4,-2,0.4);

	// PRIMITIVE GEOMETRY
	// var plane = getPlane(4);
	// scene.add(plane);

	scene.add(pointLightFront);
	scene.add(pointLightBack);
	scene.add(pointLightFront1);
	scene.add(pointLightBack1);
	scene.add(pointLightSide1);
	scene.add(pointLightSide2);
	scene.add(pointLightSide);

	// CAMERA
	camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);

	camera.position.x = 0;
	camera.position.y = 5;
	camera.position.z = 15;

	camera.lookAt(new THREE.Vector3(0, 0, 0));

	// RENDERING
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor('rgb(255,255,255)');
	document.getElementById('webgl').appendChild(renderer.domElement);
	window.addEventListener( 'resize', windowResize, false );

	var controls = new THREE.OrbitControls(camera, renderer.domElement);

	controls.enableZoom = false;
	// controls.enableRotate = false;
	controls.enablePan = false;
	controls.enableDamping = true;
	controls.minPolarAngle = 1.3;
	controls.maxPolarAngle = 1.7;
	controls.dampingFactor = 0.05;
	controls.rotateSpeed = 0.07;

	update(renderer, scene, camera, controls);

	return scene;
}

svgTitle='full';
logoTitle='left';
sizeTitle='small';
badgeTitle='small';

numberTitle='8';
numberSize = 200;
numberFont ='Arial';
numberX= 380;
numberY=520;
numberColour ='black';
backadjust_x=0;
backadjust_y=0;
backstretch=1;

spaceletter=3;
textTitle='Eastman';
textSize = 25;
textFont ='Arial';
textX= 380;
textY=340;
textColour ='black';
textadjust_x=0;
textadjust_y=0;
textstretch=1;
rectangleColor='black';
rectangleColor1='black';
backpos=415;
backpos1=274;
totalPrice=0;

spaceletter2=3;
text2Title='Delivering Winners';
textSize2 = 25;
textFont2 ='Arial';
textX2= 380;
textY2=592;
textColour2 ='black';
textadjust2_x=0;
textadjust2_y=0;
textstretch2=1;


badge_sizeTitle='small';
colourTitle='black';
colourTitle1='black';
colourTitle2='black';
sponsorTitle='centre';
sponsor_sizeTitle='small';

position_x =60;
position_y=400;
adjust_x=0;
adjust_y=0;
filesource='';
filesource1='';
filesource2='';
filesource3='';
filesource4='';
filesource5='';
filesource6='';
uploadedFile='';
uploadedFile2='';
uploadedFile3='';
uploadedFile1='',
uploadedFile4='',
uploadedFile5='',
uploadedFile6='',


size=20;
bposition_x =60;
bposition_y=400;
sposition_x =60;
sposition_y=500;
backsponsor_sizeTitle ='small',
badjust_x=0;
badjust_y=0;
sadjust_x=0;
sadjust_y=0;
bstretch_x=1;
bstretch_y=1;
stretch_x=1;
stretch_y=1;
sstretch_x=1;
sstretch_y=1;
stars=false;
stars1=false;
fancypattern=false;
diamond=false;
line=false;
lines =false;
squares=false;
split=false;


bsizey=20;
bsizex=30;
bbsizex=30;
bbsizey=20;

getSvg(svgTitle,logoTitle,sizeTitle,colourTitle,badge_sizeTitle,badgeTitle);
console.log("here")

var scene = init();
