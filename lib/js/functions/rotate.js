
// function rotateLeft(){
//   mesh.rotateY(-0.785398);
// }
//
// function rotateRight(){
//   mesh.rotateY(0.785398);
// }

// function toRadians (angle) {
//   return angle * (Math.PI / 180);
// }
//
// var delta = 0;
//
// $( "#rotateRight" ).click(function() {
//   new TWEEN.Tween( camera.position )
//   .to( {
//     x: camera.position.x,
//     y: camera.position.y,
//     z: camera.position.z}, 2000 )
//   // .easing( TWEEN.Easing.Linear.None)
//   .easing(TWEEN.Easing.Linear.None)
//   .start();
// });

// CAMERA RESET

$('#resetCamera').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 0,
    y: 5,
    z: 15}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});

$('#View_All').click(function() {
  // Define the duration of the spin
  const duration = 3000; // in milliseconds

  // Initial camera position
  const initialX = camera.position.x;
  const initialZ = camera.position.z;

  // Angle to rotate around the object (in radians)
  const angle = Math.PI * 2; // 360 degrees

  // Create the tween animation
  new TWEEN.Tween({ theta: 0 })
      .to({ theta: angle }, duration)
      .onUpdate(function() {
          // Update camera position to make it spin around
          camera.position.x = initialX * Math.cos(this.theta) - initialZ * Math.sin(this.theta);
          camera.position.z = initialZ * Math.cos(this.theta) + initialX * Math.sin(this.theta);
          
          // Ensure the camera looks at the center (assuming the center is at (0, 0, 0))
          camera.lookAt(new THREE.Vector3(0, 0, 0));
      })
      .easing(TWEEN.Easing.Linear.None) // Linear easing for a constant spin speed
      .start();

  console.log('hello');
  console.log(camera.position);
});

$('#selectBackButton').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: -4.3,
    y: 3.3,
    z: -14.8}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});

$('#selectLogoButton').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 0,
    y: 5,
    z: 15}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
$('#selectExtrasButton').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 0,
    y: 5,
    z: 15}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
$('#selectSponsorButton').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 0,
    y: 5,
    z: 15}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
$('#selectBadgeButton').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 0,
    y: 5,
    z: 15}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
$('.leftsleeveItem').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 15.5,
    y: 2.6,
    z: 1.2}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
$('.rightsleeveItem').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: -15.5,
    y: 4,
    z: -2}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});
$('.ghostimageItem').click(function() {
  new TWEEN.Tween( camera.position )
  .to( {
    x: 15.2,
    y: 1.7,
    z: 4}, 2000 )
  // .easing( TWEEN.Easing.Linear.None)
  .easing(TWEEN.Easing.Linear.None)
  .start();
  console.log('hello');
  console.log(camera.position);
});











