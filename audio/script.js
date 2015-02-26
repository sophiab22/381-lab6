// AUDIO

//  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'audio.wav', true);
// xhr.responseType = 'arraybuffer';
// xhr.onload = function () {

//   // Spitting out the audio's binary code to the machine's destination
//   var source = audioCtx.createBufferSource();

//   // this is where our music data is in
//   var buf = xhr.response;

//   // audioCtx connects to the machine's sound card.
//   // 'buffer' is an array for left & right ear.
//   audioCtx.decodeAudioData(buf, function (buffer) {
//     source.buffer = buffer;
//     source.loop = true;
//     source.connect(audioCtx.destination);
//     source.start();
//   });
// }
// // GET /audio/audio.wav
// // HOST: localhost:8080
// // <other stuff>: <property>...
// //
// //
// xhr.send();


//-------------------------------------------
// MICROPHONE

navigator.getMedia = (
navigator.getUserMedia       ||
navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia    ||
navigator.msGetUserMedia
);

navigator.getMedia(
  {
    video: false,
    audio: true
  },
  function(stream) {
    var microphone = audioCtx.createMediaStreamSource(stream);
    microphone.connect(audioCtx.destination);
  },
  function(err) {
    console.log("An error occured! " + err);
  }
);
