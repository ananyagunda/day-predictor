// Array of cute day predictions
// Array of cute day predictions
const predictions = [
    "You'll find a lucky penny!",
    "You'll meet a new friend today!",
    "You'll receive a surprise gift!",
    "You'll have the best cup of coffee ever!",
    "You'll have a cozy evening with a good book!",
    "You'll discover a new favorite song!",
    "You'll have a picnic in the park!",
    "You'll get a compliment that makes your day!",
    "You'll have a spontaneous adventure!",
    "You'll have the sweetest dreams tonight!",
    "You'll see a rainbow after the rain!",
    "You'll have a movie marathon with popcorn!",
    "You'll receive a heartfelt letter from a loved one!",
    "You'll find a four-leaf clover!",
    "You'll dance like nobody's watching!",
    "You'll have a day full of laughter and joy!",
    "You'll stumble upon a hidden gem!",
    "You'll enjoy a delicious ice cream cone!",
    "You'll get a good luck charm!",
    "You'll receive a hug when you need it most!",
    "You'll have a moment of serendipity!",
    "You'll make a wish upon a shooting star!",
    "You'll have a heart-to-heart conversation!",
    "You'll make someone smile today!",
    "You'll receive a compliment on your outfit!",
    "You'll find the perfect gift for someone special!",
    "You'll have a delightful surprise in your mailbox!",
    "You'll conquer a fear!",
    "You'll have a day full of sunshine and laughter!",
    "You'll have a lucky break!",
    "You'll receive a good news phone call!",
    "You'll have a magical encounter!",
    "You'll discover a new hobby you love!",
    "You'll have a day filled with inspiration!",
    "You'll receive a bouquet of flowers!",
    "You'll have a moment of pure bliss!",
    "You'll find beauty in the little things!",
    "You'll have a day that sparkles with joy!",
    "You'll make a wish upon a dandelion!",
    "You'll find a treasure trove of memories!",
    "You'll have a day filled with kindness!",
    "You'll find your happy place!",
    "You'll have a day that feels like a fairytale!",
    "You'll have a day filled with good vibes!",
    "You'll discover a secret garden!",
    "You'll receive a handwritten note from a friend!",
    "You'll have a day that's picture-perfect!",
    "You'll experience a moment of wonder!",
    "You'll have a day that's as sweet as honey!",
    "You'll find the silver lining in a cloudy day!",
    "You'll have a day that's out of this world!",
    "You'll receive a surprise visit from a loved one!",
    "You'll have a day filled with rainbows and butterflies!",
    "You'll find inspiration in unexpected places!",
    "You'll have a day that's simply magical!"
];

function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function predictDay() {
    var prediction = getRandomPrediction();
    document.getElementById("prediction").innerText = prediction;
}


function getRandomPrediction() {
    return predictions[Math.floor(Math.random() * predictions.length)];
}

function predictDay() {
    var name = document.getElementById("nameInput").value.trim();
    if (!name) {
        alert("Please enter your name.");
        return;
    }

    var currentDate = new Date().toLocaleDateString();
    var storedPrediction = localStorage.getItem(name);

    if (storedPrediction) {
        var storedData = JSON.parse(storedPrediction);
        if (storedData.date === currentDate) {
            // If the prediction for today already exists, show it
            document.getElementById("prediction").innerText = storedData.prediction;
            return;
        }
    }

    // If there is no prediction for today, generate a new one and store it
    var newPrediction = getRandomPrediction();
    localStorage.setItem(name, JSON.stringify({ date: currentDate, prediction: newPrediction }));
    document.getElementById("prediction").innerText = newPrediction;
}
