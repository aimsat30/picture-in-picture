const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select a media stram, pass to video element then play
async function selectMediaStream() {
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch(error){}
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;
    await videoElement.requestPictureInPicture();
    button.disabled = false;
});
// onload
selectMediaStream();