// Fonction pour générer et télécharger le PDF
document.getElementById("generatePDFButton").addEventListener("click", function () {
    var doc = new jsPDF();

    var tasterName = document.getElementById("tasterName").value;
    var wineName = document.getElementById("wineName").value;
    var wineColor = document.getElementById("wineColor").value;
    var colorDescription = document.getElementById("colorDescription").value;
    var nose = document.getElementById("nose").value;
    var taste = document.getElementById("taste").value;
    var overallImpression = document.getElementById("overallImpression").value;

    doc.text("Fiche de Dégustation de Vin", 10, 10);
    doc.text("Prénom du dégustateur: " + tasterName, 10, 20);
    doc.text("Nom du vin: " + wineName, 10, 30);
    doc.text("Couleur: " + wineColor, 10, 40);
    doc.text("Description de la couleur: " + colorDescription, 10, 50);
    doc.text("Nez: " + nose, 10, 60);
    doc.text("Goût: " + taste, 10, 70);
    doc.text("Impression générale: " + overallImpression, 10, 80);

    doc.save(wineName + "_fiche_degustation.pdf");
});

// Fonction pour prendre une photo (utilise l'API de la caméra)
document.getElementById("takePhotoButton").addEventListener("click", function () {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                var video = document.createElement("video");
                video.srcObject = stream;
                video.play();

                var canvas = document.createElement("canvas");
                var context = canvas.getContext("2d");

                // Créer un bouton pour capturer la photo
                var captureButton = document.createElement("button");
                captureButton.textContent = "Capturer la photo";
                captureButton.onclick = function () {
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    var imgData = canvas.toDataURL("image/png");

                    // Afficher l'image capturée
                    var imgElement = document.createElement("img");
                    imgElement.src = imgData;
                    document.body.appendChild(imgElement);

                    // Arrêter la caméra
                    stream.getTracks().forEach(function (track) {
                        track.stop();
                    });
                };

                document.body.appendChild(captureButton);
                document.body.appendChild(video);
            })
            .catch(function (error) {
                console.log("Erreur d'accès à la caméra : ", error);
            });
    }
});
