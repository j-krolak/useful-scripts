var videoE = document.querySelector("video")
var audioCtx = new AudioContext()
var source = audioCtx.createMediaElementSource(videoE)
var gainNode = audioCtx.createGain()
gainNode.gain.value = 4
source.connect(gainNode)
gainNode.connect(audioCtx.destination)


const gLabel = document.createElement("label")
gLabel.for = "gInput"
gLabel.style = "position: fixed; margin-top: 6rem; margin-left: 3rem; font-size: 3rem; text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;"

gLabel.innerHTML = "Głośność: "
document.body.appendChild(gLabel)

const gainInput = document.createElement("input")
gainInput.type = "number"
gainInput.id = "gInput"
gainInput.style = "position: fixed; margin-top: 12rem; margin-left: 3rem;"
gainInput.value = 4
gainInput.addEventListener('change', ()=> {
    gainNode.gain.value = gainInput.value
})
document.body.appendChild(gainInput)