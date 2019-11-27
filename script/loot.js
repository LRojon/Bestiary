function dice(nbFaces)
{
    return Math.ceil(Math.random()*nbFaces-1)+1;
}

let loot = {
    money: 0,
    jewelry: 0,
    minorObject: [],
    mediumObject: [],
    majorObject: [],
    toString: function () {
        let ret = this.money + "pa  " + this.jewelry + " pa de bijoux/joyaux  ";
        if (this.minorObject.length > 0)
            ret += this.minorObject.length + " objet magique mineur";
        if(this.mediumObject.length > 0)
            ret += this.mediumObject.length + " objet magique moyen";
        if(this.majorObject.length > 0)
            ret += this.majorObject.length + "objet magique majeur";
        return ret;
    }
};

function genPotion(dose)
{
    let description = "";
    let nom = "";
    loot.minorObject = [];
    loot.mediumObject = [];
    loot.majorObject = [];
    switch (dice(6)) {
        case 1:
        case 2:
        case 3:
            switch (dice(6)) {
                case 1:
                case 2:
                case 3:
                    nom = "Potion de soins légers";
                    description = "Soigne de [1d8+niv] pv";
                    break;
                case 4:
                case 5:
                    nom = "Potion de soins modérés";
                    description = "Soigne [2d8+niv] pv";
                    break;
                case 6:
                    nom = "Potion de délivrance";
                    description = "Purge de toute malédiction, poison, douleur, pénalité, etc...";
                    break;
            }
            break;
        case 4:
        case 5:
            switch (dice(10)) {
                case 1:
                    nom = "Potion commune de détection";
                    description = "Permet de voir l'invisible. (Détection de l'invisible - Ensorceleur)";
                    break;
                case 2:
                    nom = "Potion commune d'agrandissement";
                    description = "Fait grandir de la moitié de la taille (Agrandissement - Magicien)";
                    break;
                case 3:
                    nom = "Potion commune de forme gazeuse";
                    description = "Permet de prendre une forme gazeuse (Forme gazeuse - Magicien)";
                    break;
                case 4:
                    nom = "Potion commune de hâte";
                    description = "Permet de gagner en vitesse (Hâte - Magicien";
                    break;
                case 5:
                    nom = "Potion commune de protection";
                    description = "Renforce contre les élément (Protection contre les éléments - Magicien, RD 10)";
                    break;
                case 6:
                    nom = "Potion commune de respiration aquatique";
                    description = "Permet de respirer sous l'eau (Respiration aquatique - Magicien)";
                    break;
                case 7:
                    nom = "Potion commune d'armure";
                    description = "Permet de se protéger (Armure de mage - Magicien)";
                    break;
                case 8:
                    nom = "Potion commune d'anti-chute";
                    description = "Ralentie les chutes du buveur (Chute ralentie - Magicien)";
                    break;
                case 9:
                    nom = "Potion commune d'invisibilité";
                    description = "Rend momentanément invisible (Invisibilité - Magicien)";
                    break;
                case 10:
                    nom = "Potion commune de vol";
                    description = "Permet de vol dans les airs (Vol - Magicien)";
            }
            break;
        case 6:
            switch (dice(20)) {
                case 1:
                    nom = "Potion rare de communication";
                    description = "Permet de parler au animaux (Langage des animaux - Druide, 1d6 min)";
                    break;
                case 2:
                    nom = "Potion rare de prédation";
                    description = "Recouvre le buveur d'une apparence de fauve (Masque du prédateur - Druide)";
                    break;
                case 3:
                    nom = "Potion rare de transformation - Animal";
                    description = "Transforme en animal (Forme animale - Druide, 1d6 min)";
                    break;
                case 4:
                    nom = "Potion rare d'animation";
                    description = "Anime les arbres alentours (Marche sylvestre - Druide, 2d6 h)";
                    break;
                case 5:
                    nom = "Potion rare de transformation - Arbre";
                    description = "Transforme en arbre (Forme d'arbre - Druide, 2d6 min)";
                    break;
                case 6:
                    nom = "Potion rare de renforcement";
                    description = "Solidifie la peau (Peau d'écorce - Duide, +5 DEF)";
                    break;
                case 7:
                    nom = "Potion rare de clairvoyance";
                    description = "Permet une grande lucidité (Clairvoyance - Ensorceleur, 1d6 tours)";
                    break;
                case 8:
                    nom = "Potion rare de tension";
                    description = "Revêtie une armure élèctrique (Sous tension - Ensorceleur)";
                    break;
                case 9:
                    nom = "Potion rare de transformation - éthérée";
                    description = "Transforme en forme intangible (Forme éthérée - Ensorceleur)";
                    break;
                case 10:
                    nom = "Potion rare d'imitation";
                    description = "Permet de copier à la perfection une créature (Imitation - Ensorceleur)";
                    break;
                case 11:
                    nom = "Potion rare vitaminé";
                    description = "Breuvage étrange permettant de se soigner ";
                    break;
                case 12:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 13:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 14:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 15:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 16:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 17:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 18:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 19:
                    nom = "Potion rare de ";
                    description = "";
                    break;
                case 20:
                    nom = "Potion rare de ";
                    description = "";
                    break;
            }
    }
}

function genMinorObject()
{
    let type = "";
    let niv = 0;
    let typeRes = dice(12);
    switch (true) {
        case (typeRes < 4):
            type = "Potion";
            break;
        case (typeRes < 6):
            type = "Parchemin";
            break;
        case (typeRes = 7):
            type = "Baguette";
            break;
        case (typeRes < 11):
            type = "Objet";
            niv = 1
            break;
        case(typeRes == 12):
            type = "Objet";
            niv = 2;
    };

    let description = "";
    switch (type) {
        case "Potion":

    }
}

function looting(nc)
{
    let minorN = 0;
    let mediumN = 0;
    let majorN = 0;
    switch(nc)
    {
        case 0.5:
            loot.money = dice(6);
            if(dice(20) == 20)
                loot.jewelry = dice(6)*10;

            console.log(loot);
            break;
        case 1:
            loot.money = dice(6) + dice(6);
            if(dice(20) >= 18)
                loot.jewelry = dice(12)*10;

            console.log(loot);
            break;
        case 2:
            loot.money = dice(6) + dice(6) + dice(6) + dice(6);
            if(dice(20) >= 16)
                loot.jewelry = dice(20) * 10;
            if(dice(20) == 10)
                minorN = 1;

            break;
        default:
            break;
    }

    for (let i = 0; i < minorN; i++)
    {
        loot.minorObject.push(genMinorObject());
    }

    console.log(loot);
}