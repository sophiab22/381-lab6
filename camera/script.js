// CAMERA 

// We're grabbing the video tag from the DOM as defined by index.html
var video = document.getElementsByTagName('video')[0];

  // detects which browser to use. getMedia
  navigator.getMedia = (
  navigator.getUserMedia       ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia    ||
  navigator.msGetUserMedia
);

navigator.getMedia(
  {
    video: true,
    audio: false
  },

  function(stream) {
    if (navigator.mozGetUserMedia) {
      // Wohoo, Firefox is awesome! No need of asking the browser to
      // create a video stream server. Just grab the stream directly!
      video.mozSrcObject = stream;
    } else {

      // Administrator task
      // create a floating button - Paste it into the DOM tree
      var button = document.createElement('button');
      button.innerHTML = 'Take snapshot';
      button.onclick = function() {

        // Creating a canvas element 
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        // Context: drawing a smaller video frame (using pixels)
        var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Grabbing the video image drawn in canvas.
        // Creating a 'img' DOM element and display it as an image. DataURL encodes the image
        var img = document.createElement('img');
        img.src = canvas.toDataURL();

        document.body.appendChild(img);

        var a = document.createElement('a');
        a.innerHTML = 'Download image';
        a.setAttribute('download', true);
        a.href = canvas.toDataURL();
        document.body.appendChild(a);
      };
      document.body.appendChild(button);

      var vendorURL = window.URL || window.webkitURL;
      // Ask the browser to create a video stream server, generate a URL
      // and use that URL to grab the video stream.
      video.src = vendorURL.createObjectURL(stream);
    }
    video.play();
  },

  // error 
  function(err) {
    console.log("An error occured! " + err);
  }
);