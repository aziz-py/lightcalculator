Partager


Vous avez dit :
document.getElementById('lighting-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form values
    const room = document.getElementById('room').value;
    const height = parseFloat(document.getElementById('height').value);
    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);
    const lightingType = parseFloat(document.getElementById('lighting-type').value);
    const spotColor = parseInt(document.getElementById('spot-color').value);
    const spotPower = parseFloat(document.getElementById('spot-power').value);

    // Calculate the surface area
    const surface = width * length;

    if (surface < 1) {
        alert("La surface de la pièce doit être supérieure à 1m² !");
        return;
    }

    // Room lighting factor (adjust according to room type)
    const roomFactors = {
        1: 150, // Toilette
        2: 200, // Salle de bain
        3: 250, // Cuisine
        4: 300, // Chambre à coucher
        5: 350, // Salon
        6: 400, // Salle à manger
        7: 500, // Terrasse extérieure
        8: 450, // Balcon
        9: 100, // Couloir
    };

    const factor = roomFactors[room] || 250;

    // Lumens required for the room
    const lumensRequired = surface * factor;

    // Calculate the number of spots needed
    const efficiency = 80; // Assume 80 lumens per watt for the spot
    const totalLumensPerSpot = spotPower * efficiency;
    const numberOfSpots = Math.ceil(lumensRequired / totalLumensPerSpot);

    // Display the result
    document.getElementById('recommended-spots').textContent = Nombre de spots recommandés : ${numberOfSpots};
    
    if (numberOfSpots <= 3) {
        document.getElementById('lighting-message').textContent = "L'éclairage peut être insuffisant pour cette pièce.";
    } else if (numberOfSpots > 10) {
        document.getElementById('lighting-message').textContent = "L'éclairage est peut-être trop fort.";
    } else {
        document.getElementById('lighting-message').textContent = "L'éclairage est bien adapté.";
    }
});