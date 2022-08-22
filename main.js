var prediction_1 = "";
var prediction_2 = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_img' src='" + data_uri + "'/>";
        console.log("captured image");
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VmufY7MCA/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model is Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("captured_img");
    classifier.classify(img, getResults);
}

function getResults(error, result) {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
        document.getElementById("prediction1").innerHTML = result[0].label;
        document.getElementById("prediction2").innerHTML = result[1].label;

        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        speak();

        if (result[0].label == "Okay") {
            document.getElementById("emoji_img").innerHTML = "&#128076;";
        }

        if (result[0].label == "Super") {
            document.getElementById("emoji_img").innerHTML = "&#128077;";
        }

        if (result[0].label == "Victory") {
            document.getElementById("emoji_img").innerHTML = "&#9996;";
        }

        if (result[0].label == "Raised Fist") {
            document.getElementById("emoji_img").innerHTML = "&#9994;";
        }

        if (result[0].label == "Clap") {
            document.getElementById("emoji_img").innerHTML = "&#128079;";
        }

        if (result[0].label == "Rock On") {
            document.getElementById("emoji_img").innerHTML = "&#129304;";
        }

        if (result[1].label == "Okay") {
            document.getElementById("emoji_img2").innerHTML = "&#128076;";
        }

        if (result[1].label == "Super") {
            document.getElementById("emoji_img2").innerHTML = "&#128077;";
        }

        if (result[1].label == "Victory") {
            document.getElementById("emoji_img2").innerHTML = "&#9996;";
        }

        if (result[1].label == "Raised Fist") {
            document.getElementById("emoji_img2").innerHTML = "&#9994;";
        }

        if (result[1].label == "Clap") {
            document.getElementById("emoji_img2").innerHTML = "&#128079;";
        }

        if (result[1].label == "Rock On") {
            document.getElementById("emoji_img2").innerHTML = "&#129304;";
        }
    }
}