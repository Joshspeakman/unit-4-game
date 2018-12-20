var HarryPotterRPG = {
    gameStage: "initial",
    characterSelected: "",
    characterObject: "",
    opponentSelected: "",
    opponentObject: "",
    opponentsRemain: 4
};

var HarryPotter = {
    health: 2000,
    attack: Math.floor(Math.random() * 1000) + 1,
    counterattack: Math.floor(Math.random() * 500) + 1,
    imageUrl: "assets/images/playableHarryPotter.png",
    healthUpdate: function (attackDamage) {
        this.health -= attackDamage;
        $("#HarryPotterHP").text(this.health);
    },
    attackUpdate: function () {
        this.attack *= 1;
    }
};

var HermioneGranger = {
    health: 2000,
    attack: Math.floor(Math.random() * 1000) + 1,
    counterattack: Math.floor(Math.random() * 500) + 1,
    imageUrl: "assets/images/playableHermioneGranger.png",
    healthUpdate: function (attackDamage) {
        this.health -= attackDamage;
        $("#HermioneGrangerHP").text(this.health);
    },
    attackUpdate: function () {
        this.attack *= 1;
    }
};

var DracoMalfoy = {
    health: 300,
    attack: Math.floor(Math.random() * 1000) + 1,
    counterattack: Math.floor(Math.random() * 500) + 1,
    imageUrl: "assets/images/playableDracoMalfoy.png",
    healthUpdate: function (attackDamage) {
        this.health -= attackDamage;
        $("#DracoMalfoyHP").text(this.health);
    },
    attackUpdate: function () {
        this.attack *= 1;
    }
};

var LordVoldemort = {
    health: 3000,
    attack: Math.floor(Math.random() * 1000) + 1,
    counterattack: Math.floor(Math.random() * 500) + 1,
    imageUrl: "assets/images/playableLordVoldemort.png",
    healthUpdate: function (attackDamage) {
        this.health -= attackDamage;
        $("#LordVoldemortHP").text(this.health);
    },
    attackUpdate: function () {
        this.attack *= 1;
    }
};


var HarryPotterDiv = $("#HarryPotter");
var HermioneGrangerDiv = $("#HermioneGranger");
var DracoMalfoyDiv = $("#DracoMalfoy");
var LordVoldemortDiv = $("#LordVoldemort");

var vold = new Audio('assets/sounds/Lose_everything.mp3');
var drac = new Audio('assets/sounds/pathetic.mp3');
var herm = new Audio('assets/sounds/crap.mp3');
var harry = new Audio('assets/sounds/accio-dittany.mp3');



$(".character").on("click", function () {

    if (HarryPotterRPG.gameStage == "initial") {
        HarryPotterRPG.characterSelected = $(this).attr("id");
        $("id" + HarryPotterRPG.characterSelected).remove();

        $("#prompts").text("Choose your Opponent!");

        console.log(HarryPotterRPG.characterSelected);

        if (HarryPotterRPG.characterSelected == "HarryPotter") {
            harry.play();
            HarryPotterRPG.characterObject = HarryPotter;

            $("#character_display").append(HarryPotterDiv);
            $("#HarryPotter").html('<p>Harry</p> <img src="assets/images/playerharry.jpg" height="275"> <p id="HarryPotterHP">2000 HP</p>');
        }

        if (HarryPotterRPG.characterSelected == "HermioneGranger") {
            herm.play();
            HarryPotterRPG.characterObject = HermioneGranger;

            $("#character_display").append(HermioneGrangerDiv);
            $("#HermioneGranger").html('<p>Hermione</p> <img src="assets/images/playerHermione.jpg" height="275"> <p id="HermioneGrangerHP">2000 HP</p>');
        }

        if (HarryPotterRPG.characterSelected == "DracoMalfoy") {
            drac.play();
            HarryPotterRPG.characterObject = DracoMalfoy;

            $("#character_display").append(DracoMalfoyDiv);
            $("#DracoMalfoy").html('<p>Draco</p> <img src="assets/images/playerMalfoy.png" height="275"> <p id="DracoMalfoyHP">300 HP</p>');
        }
        if (HarryPotterRPG.characterSelected == "LordVoldemort") {
            vold.play();
            HarryPotterRPG.characterObject = LordVoldemort;

            $("#character_display").append(LordVoldemortDiv);
            $("#LordVoldemort").html('<p>Voldemort</p> <img src="assets/images/playerVoldemort.jpg" height="275"> <p id="LordVoldemortHP">3000 HP</p>');
        }

        HarryPotterRPG.gameStage = "opponents"

    } else if (HarryPotterRPG.gameStage == "opponents") {
        HarryPotterRPG.opponentSelected = $(this).attr("id");
        $("#" + HarryPotterRPG.opponentSelected).remove();
        $("#prompts").text("");

        console.log(HarryPotterRPG.opponentSelected);

        if (HarryPotterRPG.opponentSelected == "HarryPotter") {
            harry.play();
            HarryPotterRPG.opponentObject = HarryPotter;
            $("#enemy_display").append(HarryPotterDiv);
            $("#HarryPotter").html('<p>Harry</p> <img src="assets/images/playerharry.jpg" height="275"> <p id="HarryPotterHP">2000 HP</p>');
        }

        if (HarryPotterRPG.opponentSelected == "HermioneGranger") {
            herm.play();
            HarryPotterRPG.opponentObject = HermioneGranger;
            $("#enemy_display").append(HermioneGrangerDiv);
            $("#HermioneGranger").html('<p>Hermione</p> <img src="assets/images/playerHermione.jpg" height="275"> <p id="HermioneGrangerHP">2000 HP</p>');
        }

        if (HarryPotterRPG.opponentSelected == "DracoMalfoy") {
            drac.play();
            HarryPotterRPG.opponentObject = DracoMalfoy;
            $("#enemy_display").append(DracoMalfoyDiv);
            $("#DracoMalfoy").html('<p>Draco</p> <img src="assets/images/playerMalfoy.png" height="275"> <p id="DracoMalfoyHP">300 HP</p>');
        }

        if (HarryPotterRPG.opponentSelected == "LordVoldemort") {
            vold.play();
            HarryPotterRPG.opponentObject = LordVoldemort;

            $("#enemy_display").append(LordVoldemortDiv);
            $("#LordVoldemort").html('<p>LordVoldemort</p> <img src="assets/images/playerVoldemort.jpg" height="275"> <p id="LordVoldemortHP">3000 HP</p>');
        }


        HarryPotterRPG.gameStage = "fight";
        $("#duel").text("Attack!");

    }

    console.log(HarryPotterRPG.gameStage);
});

var renderMessage = function (message) {
    var attackMessage = $("#messageLog");
    var newMessage = $("<div>").text(message);
    attackMessage.append(newMessage);

    if (message == 'clearMessage') {
        attackMessage.text('');
    }
};

var wand = new Audio('assets/sounds/laser_gum-msg.mp3');
var goodJob = new Audio('assets/sounds/harry_potter_rock.mp3');
var wrecked = new Audio('assets/sounds/harry_potter_sad.mp3');

$(".attackButton").on("click", function () {
    wand.play();

    if (HarryPotterRPG.gameStage == "fight") {


        renderMessage("clearMessage");
        HarryPotterRPG.opponentObject.healthUpdate(HarryPotterRPG.characterObject.attack);
        HarryPotterRPG.characterObject.attackUpdate();

        if ((HarryPotterRPG.opponentObject.health <= 0) && (HarryPotterRPG.opponentsRemain >= 1)) {
            goodJob.play();
            $("#messageLog").text("You won!");
            $("#" + HarryPotterRPG.opponentSelected).remove();
            HarryPotterRPG.gameStage = "gameOver";
        }

        if ((HarryPotterRPG.opponentObject.health <= 0) && (HarryPotterRPG.opponentsRemain >= 1)) {
            $("#messageLog").text("You won! Choose another Opponent! or hit restart!");
            $("#" + HarryPotterRPG.opponentSelected).remove();
            HarryPotterRPG.gameStage = "opponents";
            HarryPotterRPG.opponentsRemain = 4;
        }

        if (HarryPotterRPG.gameStage == "fight") {

            HarryPotterRPG.characterObject.healthUpdate(HarryPotterRPG.opponentObject.counterattack);

            if (HarryPotterRPG.characterObject.health <= 0) {
                wrecked.play();
                $("#messageLog").text("You lose!");
                HarryPotterRPG.gameStage = "gameOver";
                $("#duel").text("Restart!");
            }
        }

    }

});

$(".restartButton").on("click", function () {
    location.reload();


});