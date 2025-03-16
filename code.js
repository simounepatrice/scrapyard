

var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d972f4cb-3243-47ac-a517-34603e2e8ac6","d373e175-938d-4ce1-b1eb-f9cba87adfe8","f4d3deb5-a0ef-4dc6-8baf-b778bc7ff8f2","f2f9297c-8eed-4823-bbe2-35781d4c7aa5","8e193665-b135-4dc3-bad2-407c0a04f3ec","f0166ea8-c2be-40f7-a0bb-8540c134ef3b","f94a7fd3-b53e-4cd6-ac5f-b26656983bc7","2cf690d2-89da-4dac-abdc-af26fbbb3081","1651119b-e7dd-4783-9310-9155a4ecabd6","cd6c8577-5dc5-45c6-8ae0-a3683ac5074e","ca3c60c4-d6e8-4d77-bf13-82b3ef9d15f5","b493e32c-8a6d-485c-aa08-1b9b8423d168","df3044f9-7150-4b4f-8753-d9c2a422bea3","bc46a6cd-19a3-4472-922c-f4fbb2d8781f","816972e8-77c0-42e8-aa39-769daf53d624","92705e48-c330-45e1-bcff-aa504f13fbf0","6648fa2b-8814-440b-8460-1535c33fd088","05c48b5f-fe3d-40a0-b5bd-9f55e5a4e39d","375301e8-4466-45d7-a96d-e4ec90bf3219","2925144d-ab1a-4de5-a4cd-56f7fab04b24","33e547d1-f77a-4ec2-b852-522d61d6902a","262ff34e-1d5c-4ddd-b6ee-42eb8500fe14","ed86498b-49fc-41b1-a4e6-e6399ef05bc3"],"propsByKey":{"d972f4cb-3243-47ac-a517-34603e2e8ac6":{"name":"obstacle","sourceUrl":null,"frameSize":{"x":190,"y":215},"frameCount":1,"looping":true,"frameDelay":12,"version":"GUHatCaFN3VvfMHthiFeXTk2iBzux79_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":190,"y":215},"rootRelativePath":"assets/d972f4cb-3243-47ac-a517-34603e2e8ac6.png"},"d373e175-938d-4ce1-b1eb-f9cba87adfe8":{"name":"restartButton","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/d373e175-938d-4ce1-b1eb-f9cba87adfe8.png","frameSize":{"x":336,"y":159},"frameCount":1,"looping":true,"frameDelay":4,"version":"PffGvDNBBDHhBF2XcCWVrTPuyoDMvckN","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":336,"y":159},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/d373e175-938d-4ce1-b1eb-f9cba87adfe8.png"},"f4d3deb5-a0ef-4dc6-8baf-b778bc7ff8f2":{"name":"quitButton","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/f4d3deb5-a0ef-4dc6-8baf-b778bc7ff8f2.png","frameSize":{"x":362,"y":169},"frameCount":1,"looping":true,"frameDelay":4,"version":"r.fGB8OaEw7.ZoyvKsk6PHnruGBhvGv8","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":362,"y":169},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/f4d3deb5-a0ef-4dc6-8baf-b778bc7ff8f2.png"},"f2f9297c-8eed-4823-bbe2-35781d4c7aa5":{"name":"start","sourceUrl":null,"frameSize":{"x":312,"y":161},"frameCount":1,"looping":true,"frameDelay":12,"version":"rgfJyxzOJ0UuyU7PkK4DZHhMUP8GF6zf","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":161},"rootRelativePath":"assets/f2f9297c-8eed-4823-bbe2-35781d4c7aa5.png"},"8e193665-b135-4dc3-bad2-407c0a04f3ec":{"name":"3life","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/8e193665-b135-4dc3-bad2-407c0a04f3ec.png","frameSize":{"x":727,"y":157},"frameCount":1,"looping":true,"frameDelay":4,"version":"sTr1pIie1rfjUbIosNaz8fCGlUPsIxAd","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":727,"y":157},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/8e193665-b135-4dc3-bad2-407c0a04f3ec.png"},"f0166ea8-c2be-40f7-a0bb-8540c134ef3b":{"name":"4life","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/f0166ea8-c2be-40f7-a0bb-8540c134ef3b.png","frameSize":{"x":715,"y":152},"frameCount":1,"looping":true,"frameDelay":4,"version":"LRVaH3BjVW6UJ8CgKItSBQWiAQuAQMfy","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":715,"y":152},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/f0166ea8-c2be-40f7-a0bb-8540c134ef3b.png"},"f94a7fd3-b53e-4cd6-ac5f-b26656983bc7":{"name":"fulllife","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/f94a7fd3-b53e-4cd6-ac5f-b26656983bc7.png","frameSize":{"x":717,"y":158},"frameCount":1,"looping":true,"frameDelay":4,"version":"MkQ3D3NOgFaeF4aPivgaDLUirSFL004v","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":717,"y":158},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/f94a7fd3-b53e-4cd6-ac5f-b26656983bc7.png"},"2cf690d2-89da-4dac-abdc-af26fbbb3081":{"name":"2life","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/2cf690d2-89da-4dac-abdc-af26fbbb3081.png","frameSize":{"x":730,"y":159},"frameCount":1,"looping":true,"frameDelay":4,"version":"3Rhf6dqDYQym20MqlZYjmQbV9X7FRs9w","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":730,"y":159},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/2cf690d2-89da-4dac-abdc-af26fbbb3081.png"},"1651119b-e7dd-4783-9310-9155a4ecabd6":{"name":"1life","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/1651119b-e7dd-4783-9310-9155a4ecabd6.png","frameSize":{"x":724,"y":182},"frameCount":1,"looping":true,"frameDelay":4,"version":"KD85rXzQmB.vIoDfUCOSijOIl6K8jm6D","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":724,"y":182},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/1651119b-e7dd-4783-9310-9155a4ecabd6.png"},"cd6c8577-5dc5-45c6-8ae0-a3683ac5074e":{"name":"nolife","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/cd6c8577-5dc5-45c6-8ae0-a3683ac5074e.png","frameSize":{"x":748,"y":171},"frameCount":1,"looping":true,"frameDelay":4,"version":"g_yBMLkd2y3bqFwfi5Pe2QwdiHJp3K2R","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":748,"y":171},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/cd6c8577-5dc5-45c6-8ae0-a3683ac5074e.png"},"ca3c60c4-d6e8-4d77-bf13-82b3ef9d15f5":{"name":"wingame","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/ca3c60c4-d6e8-4d77-bf13-82b3ef9d15f5.png","frameSize":{"x":574,"y":120},"frameCount":1,"looping":true,"frameDelay":4,"version":"KbcUZNmsrV1RuTsMoo5j8nRZPQUNIUIr","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":574,"y":120},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/ca3c60c4-d6e8-4d77-bf13-82b3ef9d15f5.png"},"b493e32c-8a6d-485c-aa08-1b9b8423d168":{"name":"playagain","sourceUrl":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/b493e32c-8a6d-485c-aa08-1b9b8423d168.png","frameSize":{"x":347,"y":170},"frameCount":1,"looping":true,"frameDelay":4,"version":"Kzj6xsNkka5kJVnmBqPK2TCiaW9IfS0s","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":347,"y":170},"rootRelativePath":"assets/v3/animations/hsIvE-wiayEozkm_MEUCRAhZ070OsW9XMJuETGUGd0s/b493e32c-8a6d-485c-aa08-1b9b8423d168.png"},"df3044f9-7150-4b4f-8753-d9c2a422bea3":{"name":"tear","sourceUrl":"assets/api/v1/animation-library/gamelab/ixn2YNpsRpC3bAaUagBbEPGdw83EIIrN/category_household_objects/money.png","frameSize":{"x":101,"y":106},"frameCount":1,"looping":true,"frameDelay":2,"version":"ixn2YNpsRpC3bAaUagBbEPGdw83EIIrN","categories":["household_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":106},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ixn2YNpsRpC3bAaUagBbEPGdw83EIIrN/category_household_objects/money.png"},"bc46a6cd-19a3-4472-922c-f4fbb2d8781f":{"name":"character1","sourceUrl":null,"frameSize":{"x":708,"y":968},"frameCount":1,"looping":true,"frameDelay":12,"version":"sKi2Cj4YtLOuwigeq3C7PpTKWq2QsKBi","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":708,"y":968},"rootRelativePath":"assets/bc46a6cd-19a3-4472-922c-f4fbb2d8781f.png"},"816972e8-77c0-42e8-aa39-769daf53d624":{"name":"character","sourceUrl":null,"frameSize":{"x":532,"y":434},"frameCount":1,"looping":true,"frameDelay":12,"version":"nWxPeEPJvbgcUNJEjpq.thl_1Tv2D9.i","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":532,"y":434},"rootRelativePath":"assets/816972e8-77c0-42e8-aa39-769daf53d624.png"},"92705e48-c330-45e1-bcff-aa504f13fbf0":{"name":"rock1","sourceUrl":"assets/v3/animations/2EAjAnoikboztRUNhtJ-NXGP2tJDI-CKLhP6iNrFzBc/92705e48-c330-45e1-bcff-aa504f13fbf0.png","frameSize":{"x":612,"y":407},"frameCount":1,"looping":true,"frameDelay":4,"version":"noOKXEsZCNsMqM7Ocrt4hqqR69b3sIFF","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":407},"rootRelativePath":"assets/v3/animations/2EAjAnoikboztRUNhtJ-NXGP2tJDI-CKLhP6iNrFzBc/92705e48-c330-45e1-bcff-aa504f13fbf0.png"},"6648fa2b-8814-440b-8460-1535c33fd088":{"name":"rock2","sourceUrl":null,"frameSize":{"x":293,"y":390},"frameCount":1,"looping":true,"frameDelay":12,"version":"3Dug2NuEB1wXjE4YAN8lYxwjkqKiq0V4","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":390},"rootRelativePath":"assets/6648fa2b-8814-440b-8460-1535c33fd088.png"},"05c48b5f-fe3d-40a0-b5bd-9f55e5a4e39d":{"name":"rock3","sourceUrl":null,"frameSize":{"x":313,"y":850},"frameCount":1,"looping":true,"frameDelay":12,"version":"luR7LywYcdFgSjaY8b41XkuMsUeW1nc2","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":313,"y":850},"rootRelativePath":"assets/05c48b5f-fe3d-40a0-b5bd-9f55e5a4e39d.png"},"375301e8-4466-45d7-a96d-e4ec90bf3219":{"name":"background","sourceUrl":"assets/v3/animations/2EAjAnoikboztRUNhtJ-NXGP2tJDI-CKLhP6iNrFzBc/375301e8-4466-45d7-a96d-e4ec90bf3219.png","frameSize":{"x":735,"y":490},"frameCount":1,"looping":true,"frameDelay":4,"version":"PdR8kY6zkBLHSdS4F.ST33VWeuN.4AJP","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":735,"y":490},"rootRelativePath":"assets/v3/animations/2EAjAnoikboztRUNhtJ-NXGP2tJDI-CKLhP6iNrFzBc/375301e8-4466-45d7-a96d-e4ec90bf3219.png"},"2925144d-ab1a-4de5-a4cd-56f7fab04b24":{"name":"instruction","sourceUrl":"assets/v3/animations/2EAjAnoikboztRUNhtJ-NXGP2tJDI-CKLhP6iNrFzBc/2925144d-ab1a-4de5-a4cd-56f7fab04b24.png","frameSize":{"x":727,"y":717},"frameCount":1,"looping":true,"frameDelay":4,"version":"URTuniooQJtktoPb4ZRdoPd4YcAv2ZAq","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":727,"y":717},"rootRelativePath":"assets/v3/animations/2EAjAnoikboztRUNhtJ-NXGP2tJDI-CKLhP6iNrFzBc/2925144d-ab1a-4de5-a4cd-56f7fab04b24.png"},"33e547d1-f77a-4ec2-b852-522d61d6902a":{"name":"empty","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"262ff34e-1d5c-4ddd-b6ee-42eb8500fe14":{"name":"ground","sourceUrl":null,"frameSize":{"x":735,"y":134},"frameCount":1,"looping":true,"frameDelay":12,"version":"PDMdtmL_nYneDFmP7FwoUqfifgEOHcaE","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":735,"y":134},"rootRelativePath":"assets/262ff34e-1d5c-4ddd-b6ee-42eb8500fe14.png"},"ed86498b-49fc-41b1-a4e6-e6399ef05bc3":{"name":"gameover","sourceUrl":null,"frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":12,"version":"pn84gy14aFx3Rv8jeZpQqYL52BX7.TDO","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/ed86498b-49fc-41b1-a4e6-e6399ef05bc3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create your variables here
var tear = 0;
var obstacle = 0;
var lives = 5;
var timer = 20;
var gameEnd = false;
var started = false;

// Create sprites here 
// background 
var Background = createSprite(200,165);
Background.setAnimation("background");
Background.width = 400;
Background.height = 350;
// rocks 
var rock1 = createSprite(130,330);
rock1.setAnimation("rock" + randomNumber(1,3));
rock1.scale = 0.25;
rock1.velocityX = -3;
var rock2 = createSprite(260,330);
rock2.setAnimation("rock" + randomNumber(1,3));
rock2.scale = 0.25;
rock2.velocityX = -3;
var rock3 = createSprite(380,330);
rock3.setAnimation("rock" + randomNumber(1,3));
rock3.scale = 0.25;
rock3.velocityX = -3;
// Character sprite 
var character = createSprite(210, 340);
character.setAnimation("character");
character.height = 80;
character.width = 90;
character.visible = false;
// Obstacle sprite 
var obstacle = createSprite(350, 70);
obstacle.setAnimation("obstacle");
obstacle.height = 70;
obstacle.width = 70;
obstacle.setCollider("circle", 0, 0, 35);
obstacle.velocityX = -3;
// Tear fragment sprite 
var tearSprite = createSprite(200,200);
tearSprite.setAnimation("tear");
tearSprite.height = 90;
tearSprite.width = 70;
tearSprite.velocityX = -3;
// Ground 
var ground = createSprite(210,370);
ground.setAnimation("ground");
ground.width = 500;
ground.height = 60;
// Tear scoreboard
var tearBoard = createSprite(30, 90);
tearBoard.setAnimation("tear");
tearBoard.scale = 0.35;
tearBoard.visible = false;
// life bar 
var fulllife = createSprite(100,35);
fulllife.setAnimation("fulllife");
fulllife.scale = 0.25;
var life4 = createSprite(100,35);
life4.setAnimation("4life");
life4.scale = 0.25;
life4.visible = false;
var life3 = createSprite(100,35);
life3.setAnimation("3life");
life3.scale = 0.25;
life3.visible = false;
var life2 = createSprite(100,35);
life2.setAnimation("2life");
life2.scale = 0.25;
life2.visible = false;
var life1 = createSprite(100,35);
life1.setAnimation("1life");
life1.scale = 0.25;
life1.visible = false;
var nolife = createSprite(100,35);
nolife.setAnimation("nolife");
nolife.scale = 0.25;
nolife.visible = false;
// variables for Gameover screen
// restart button
var restart = createSprite(200, 250);
restart.setAnimation("restartButton");
restart.visible = false;
restart.scale = 0.5;
// gameover sign 
var gameOver = createSprite(205,200);
gameOver.setAnimation("gameover");
gameOver.scale = 0.5;
gameOver.visible = false;
// start button (intro)
// you won sign 
var winGame = createSprite(205,130);
winGame.setAnimation("gameover");
winGame.scale = 0.5;
winGame.visible = false;
// play again button
var playAgain = createSprite(200,250);
playAgain.setAnimation("playagain");
playAgain.scale = 0.5;
playAgain.visible = false;
// instructions 
var instruction = createSprite(200,160);
instruction.setAnimation("instruction");
instruction.scale = 0.75;
instruction.visible = true;
// 
var startButton = createSprite(200,280);
startButton.setAnimation("start");
startButton.scale = 0.5;
startButton.visible = false;

function draw() {
  backGround();
if (started && !gameEnd) {
  //update the timer every second 
  if (frameCount % 40 === 0 && timer > 0 ) {
    timer--;
  }
if (timer === 0) {
  if (lives > 0) {
    winScreen();
  } else {
  gameEnd = true; 
}
}
  // update sprites
  character.visible = true;
  rockLoop();
  itemLoop();
  score();
  characterJump();
  startButton.visible = false;
  instruction.visible = false;
  } else {
  console.log("not started");
  character.visible = false;
  intro();
  rockLoop();
  itemLoop();
  if (keyDown("space")) {
    started = true;
    console.log("started");
  }
  }
  drawSprites();
  scoreDisplay();
  if (lives < 1) {
    GameoverScreen();
  }
}

// Create your functions here
function backGround() {
  background("AliceBlue");
}
// looping the rocks 
function rockLoop() {
  if (rock1.x < -55) {
    rock1.x = 455;
    rock1.setAnimation("rock" + randomNumber(1, 3));
}
  if (rock2.x < -55) {
   rock2.x = 455;
   rock2.setAnimation("rock" + randomNumber(1,3));
}
  if (rock3.x < -55) {
   rock3.x = 455;
   rock3.setAnimation("rock" + randomNumber(1,3));
}
}
// getting the score and lives
function score () {
  if (character.isTouching(tearSprite)) {
    tearSprite.x = -50;
    tear = tear + 1;
    playSound("assets/hehehe-ha-clash-royal-made-with-Voicemod.mp3");
  }
  if (character.isTouching(obstacle)) {
    obstacle.x = -50;
    lives = lives - 1;
    playSound("assets/brain-fart-made-with-Voicemod.mp3");
  if (lives === 4){
    fulllife.visible = false;
    life4.visible = true;
  }
  if (lives === 3){
    life4.visible = false;
    life3.visible = true;
  }
  if (lives === 2){
    life3.visible = false;
    life2.visible = true;
  }
  if (lives === 1){
    life2.visible = false;
    life1.visible = true;
  }
  if (lives === 0){
    life1.visible = false;
    nolife.visible = true;
  }
  }
}
// looping the obstacle and tear sprite at a random place each time 
function itemLoop(){
  if (tearSprite.x < -55) {
    tearSprite.y = randomNumber(50, 300);
    tearSprite.x = 450;
    tearSprite.setAnimation("tear");
  }
  if (obstacle.x < -55) {
    obstacle.y = randomNumber(50, 300);
    obstacle.x = 450;
    obstacle.setAnimation("obstacle");
  }
}
// character jumping 
function characterJump() {
  if (keyDown("space")) {
  character.velocityY = -12;
  character.setAnimation("character1");
  playSound("", false);
  
  
}
  if (character.y < 110) {
    character.velocityY = 8;
  }
  if (character.y > 280){
    character.y = 280;
    character.velocityY = 0;
    character.setAnimation("character");
  }
} 

// displaying the score and lives 
function scoreDisplay() {
  textFont("Courier New");
  textSize(25);      
  fill('navy');
  tearBoard.visible = true;
  text(" : " + tear, 50, 80, 200, 200);
  textSize(21);
  text("Time : " + timer + "s", 260, 40);
}

function intro() {
  startButton.visible = true;
  if (mousePressedOver(startButton)){
    playSound("assets/sus-made-with-Voicemod.mp3");
    started = true;
    console.log("Game Started");
    
    character.y = 280;
  }
}
function GameoverScreen() {
  playSound("meow-meow-meow-(earrape)-made-with-Voicemod.mp3", false);
  gameOver.visible = true;
  tearBoard.visible = false;
  restart.visible = true;
  character.velocityY = 0;
  character.velocityX = 0; 
  tear.velocityY = 0; 
  tear.velocityX = 0;
  obstacle.velocityX = 0; 
  obstacle.velocityY = 0;
  character.visible = false;
   textFont("Courier New");
  if (mousePressedOver(restart)) {
    // Reset the game variables
    tear = 0;
    lives = 5;
    timer = 40;
    gameEnd = false;
    // reset the life bar 
    fulllife.visible = true;
    life4.visible = false;
    life3.visible = false;
    life2.visible = false;
    life1.visible = false;
    nolife.visible = false;
    
    // Hide gameover screen elements
    gameOver.visible = false;
    restart.visible = false;
    
    // Reset character and obstacle positions
    character.y = 280;
    obstacle.x = 450;
    obstacle.velocityX = -3;
    tearSprite.x = 450;
    tearSprite.velocityX = -3;
    
    // Show intro screen
    started = false;
    startButton.visible = true;
    playSound("assets/sus-made-with-Voicemod.mp3");
  }
  drawSprites();
}

function winScreen(){
  playSound("meow-meow-meow-(earrape)-made-with-Voicemod.mp3", false);
  winGame.visible = true;
  playAgain.visible = true; 
  character.velocityY = 0;
  character.velocityX = 0; 
  tear.velocityY = 0; 
  tear.velocityX = 0;
  obstacle.velocityX = 0; 
  obstacle.velocityY = 0;
  character.visible = false;
   textFont("Courier New");
  if (mousePressedOver(playAgain)) {
    // Reset the game variables
    tear = 0;
    lives = 5;
    timer = 40;
    gameEnd = false;
    // reset the life bar 
    fulllife.visible = true;
    life4.visible = false;
    life3.visible = false;
    life2.visible = false;
    life1.visible = false;
    nolife.visible = false;
    
    // Hide gameover screen elements
    winGame.visible = false;
    playAgain.visible = false;
    
    // Reset character and obstacle positions
    character.y = 280;
    obstacle.x = 450;
    obstacle.velocityX = -3;
    tearSprite.x = 450;
    tearSprite.velocityX = -3;
    
    // Show intro screen
    started = false;
    startButton.visible = true;
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
