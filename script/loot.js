function dice(nbFaces)
{
    return Math.ceil(Math.random()*nbFaces-1)+1;
}

function genArme(niv)
{
    /*let arme = {
        type: "",
        categorie: "",
        atk: 0,
        formDM: "",
        dm: 0,
        caracs: [{ nom: "Fléau des géants", effet: "+1d6 DM contre les géants." }],
        niv: 0,
        critique: 20,
        contains: function(carac){
            let bool = false;
            this.caracs.forEach(function(elem){
                if(elem.nom == carac.nom)
                    return true;
            })
            return bool;
        }
    }*/
    let arme = {
        type: "",
        categorie: "",
        atk: 0,
        formDM: "",
        dm: 0,
        caracs: [],
        niv: 0,
        critique: 20,
    }
    switch(dice(6)){
        case 1:
        case 2:
        case 3:
            arme.type = "Contact";
            break;
        case 4:
        case 5:
            arme.type = "Distance";
            break;
        case 6:
            arme.type = "Sceptre";
    }
    switch (arme.type) {
        case "Contact":
            var d = dice(20);
            switch (true) {
                case d==1:
                    arme.categorie = "Manique";
                    arme.formDM = "(1d4)";
                    break;
                case d==2:
                    arme.categorie = "Bâton";
                    arme.formDM = "1d6";
                    break;
                case d<=4:
                    arme.categorie = "Dague";
                    arme.formDM = "1d4";
                    break;
                case d==5:
                    arme.categorie = "Epée bâtarde";
                    arme.formDM = "1d8/1d12";
                    break;
                case d<=7:
                    arme.categorie = "Epée courte";
                    arme.formDM = "1d6";
                    break;
                case d<=10:
                    arme.categorie = "Epée longue";
                    arme.formDM = "1d8";
                    break;
                case d==11:
                    arme.categorie = "Hache à 1 main";
                    arme.formDM = "1d8";
                    break;
                case d<=13:
                    arme.categorie = "Epée à 2 mains";
                    arme.formDM = "2d6";
                    break;
                case d==14:
                    arme.categorie = "Hache à 2 mains";
                    arme.formDM = "2d6";
                    break;
                case d<=16:
                    arme.categorie = "Masse/Marteau";
                    arme.formDM = "1d6";
                    break;
                case d<=18:
                    arme.categorie = "Rapière";
                    arme.formDM = "1d6";
                    arme.critique--;
                    break;
                case d==19:
                    arme.categorie = "Vivelame/Katana";
                    arme.formDM = "1d10";
                    arme.critique--;
                    break;
                case d==20:
                    arme.categorie = "Autre";
                    break;
            }
            break;
        case "Distance":
            var d = dice(20)
            switch (true) {
                case d==1:
                    arme.categorie = "Arbalète de poing";
                    arme.formDM = "1d6";
                    break;
                case d<=3:
                    arme.categorie = "Arbalète légère";
                    arme.formDM = "2d4";
                    break;
                case d<=5:
                    arme.categorie = "Arbalète lourde";
                    arme.formDM = "3d4";
                    break;
                case d<=7:
                    arme.categorie = "Arc court";
                    arme.formDM = "1d6";
                    break;
                case d<=9:
                    arme.categorie = "Arc long";
                    arme.formDM = "1d8";
                    break;
                case d==10:
                    arme.categorie = "Dague (5m)";
                    arme.formDM = "1d4";
                    break;
                case d==11:
                    arme.categorie = "Fronde";
                    arme.formDM = "1d4";
                    break;
                case d==12:
                    arme.categorie = "Hachette";
                    arme.formDM = "1d6";
                    break;
                case d==13:
                    arme.categorie = "Javelot";
                    arme.formDM = "1d6";
                    break;
                case d<=15:
                    arme.categorie = "Carreaux d'arbalète";
                    arme.formDM = "2";
                    break;
                case d<=17:
                    arme.categorie = "Flèches";
                    arme.formDM = "1";
                    break;
                case d==18:
                    arme.categorie = "Billes de fronde";
                    arme.formDM = "2";
                    break;
                case d<=20:
                    arme.categorie = "Mousquet";
                    arme.formDM = "2d6";
                    break;
            }
            break;
        case "Sceptre":
            switch (dice(3)) {
                case 1:
                    arme.categorie = "Feu";
                    arme.formDM = "1d6 DM Feu";
                    break;
                case 2:
                    arme.categorie = "Foudre";
                    arme.formDM = "1d6 DM Foudre";
                    break;
                case 3:
                    arme.categorie = "Esprit";
                    arme.formDM = "1d6 DM Magique";
                    break;
            }
            break;
    }

    if(dice(6) <= niv)
    {
        let tmp = arme.caracs;
        for(let i = 1; i > 0; i--) {
            let carac = {
                nom: "",
                effet: "",
            };
            switch (dice(12)) {
                case 1:
                case 2://Affuté
                    if (arme.type = "Contact")
                        carac.nom = "Affuté";
                    else
                        carac.nom = "Précis";
                    carac.effet = "Critique +1, +1d6 DM critique (non doublé)";
                    ind = arme.index(carac);
                    arme.caracs.push(carac);
                    arme.critique--;
                    arme.niv++;
                    break;
                case 3://morts-vivants
                    carac.nom = "Fléau des morts";
                    carac.effet = "+1d6 DM contre les morts-vivants";
                    arme.caracs.push(carac);
                    arme.niv++;
                    break;
                case 4://dragons
                    carac.nom = "Fléau des dragons";
                    carac.effet = "+1d6 DM contre les dragons";
                    arme.caracs.push(carac);
                    arme.niv++;
                    break;
                case 5:
                    carac.nom = "Fléau des géants";
                    carac.effet = "+1d6 DM contre les géants";
                    arme.caracs.push(carac);
                    arme.niv++;
                    break;
                case 6:
                    carac.nom = "Fléau des goblinoïdes";
                    carac.effet = "+1d6 DM contre les goblinoïdes";
                    arme.caracs.push(carac);
                    arme.niv++;
                    break;
                case 7:
                    carac.nom = "Fléau des démons";
                    carac.effet = "+1d6 DM contre les démons";
                    arme.caracs.push(carac);
                    arme.niv++;
                    break;
                case 8:
                    carac.nom = "Feu";
                    carac.effet = "+1d6 DM feu.";
                    arme.caracs.push(carac);
                    arme.niv += 2;
                    break;
                case 9:
                    carac.nom = "Froid";
                    carac.effet = "+1d6 DM froid";
                    arme.caracs.push(carac);
                    arme.niv += 2;
                    break;
                case 10:
                    carac.nom = "Foudre";
                    carac.effet = "+1d6 DM foudre";
                    arme.caracs.push(carac);
                    arme.niv += 2;
                    break;
                case 11:
                case 12:
                    i += 2;
                    break;
            }
        }

        console.log(arme.caracs)
    }
    arme.atk += (niv - arme.niv);
    arme.dm += (niv - arme.niv);
    arme.dm < 0 ? arme.dm = 0 : arme.dm;
    arme.atk < 0 ? arme.atk = 0 : arme.atk;

    return arme;
}

function genBaguette(niv)
{
    var parchemin = genParchemin(niv);

    let baguette = {
        voie: parchemin.voie,
        rang: parchemin.rang,
        nbSort: dice(20) + dice(20),
        mot: ""
    }

    let words = [
        "Strixortia",
        "Silenectum",
        "Puriforus",
        "Serpenicum",
        "Etheus",
        "Banarbus",
        "Incenegris",
        "Enormiate",
        "Mufite",
        "Pristes",
        "Locomoesco",
        "Tremendorgio",
        "Extingum",
        "Moraro",
        "Sancenta",
        "Extermineum",
        "Repeiate",
        "Aracheom",
        "Reduerbus",
        "Pestate",
        "Scoundis",
        "Arachniasi",
        "Purifendius",
        "Refenis",
        "Defeneous",
        "Infernortus",
        "Expindo",
        "Tremendundo",
        "Inceptiate",
        "Obliterorus",
        "Sanctego",
        "Increnio",
    ]

    baguette.mot = words[dice(words.length) - 1];

    return baguette;
}

function genParchemin(niv)
{
    let parchemin = {
        nom : "",
        voie: "",
        rang: 0,
    };

    switch(niv)
    {
        case "minor":
            switch(dice(6))
            {
                case 1:
                case 2:
                case 3:
                    parchemin.rang = 1;
                    break;
                case 4:
                case 5:
                    parchemin.rang = 2;
                    break;
                case 6:
                    parchemin.rang = 3;
                    break;
            }
            break;
        case "medium":
            var tmp = dice(6);
            parchemin.rang = Math.ceil((tmp / 2)) + 2
            break;
    }

    switch(dice(20))
    {
        case 1:
            parchemin.nom = "Parchemin des airs - " + parchemin.rang
            parchemin.voie = "Ensorceleur - Voie de l'air"
            break;
        case 2:
            parchemin.nom = "Parchemin de divination - " + parchemin.rang
            parchemin.voie = "Ensorceleur - Voie de la divination"
            break;
        case 3:
            parchemin.nom = "Parchemin d'envoûteur - " + parchemin.rang
            parchemin.voie = "Ensorceleur - Voie de l'envoûteur"
            break;
        case 4:
            parchemin.nom = "Parchemin d'illusions - " + parchemin.rang
            parchemin.voie = "Ensorceleur - Voie des illusions"
            break;
        case 5:
            parchemin.nom = "Parchemin d'invocation - " + parchemin.rang
            parchemin.voie = "Ensorceleur - Voie de l'invocation"
            break;
        case 6:
            parchemin.nom = "Parchemin des arcanes - " + parchemin.rang
            parchemin.voie = "Magicien - Voie dela magie des arcanes"
            break;
        case 7:
            parchemin.nom = "Parchemin destructeur - " + parchemin.rang
            parchemin.voie = "Magicien - Voie de la magie destructrice"
            break;
        case 8:
            parchemin.nom = "Parchemin élémentaire - " + parchemin.rang
            parchemin.voie = "Magicien - Voie de la magie élémentaire"
            break;
        case 9:
            parchemin.nom = "Parchemin protecteur - " + parchemin.rang
            parchemin.voie = "Magicien - Voie de la magie protectrice"
            break;
        case 10:
            parchemin.nom = "Parchemin de magie universelle - " + parchemin.rang
            parchemin.voie = "Magicien - Voie de la magie universelle"
            break;
        case 11:
            parchemin.nom = "Parchemin du démon - " + parchemin.rang
            parchemin.voie = "Nécromancien - Voie du démon"
            break;
        case 12:
            parchemin.nom = "Parchemin de mort - " + parchemin.rang
            parchemin.voie = "Nécromancien - Voie de la mort"
            break;
        case 13:
            parchemin.nom = "Parchemin de l'outre-tombe" + parchemin.rang
            parchemin.voie = "Nécromancien - Voie de l'outre-tombe"
            break;
        case 14:
            parchemin.nom = "Parchemin du sang" + parchemin.rang
            parchemin.voie = "Nécromancien - Voie du sang"
            break;
        case 15:
            parchemin.nom = "Parchemin de sombre magie" + parchemin.rang
            parchemin.voie = "Nécromancien - Voie de la sombre magie"
            break;
        case 16:
            parchemin.nom = "Parchemin de la foi" + parchemin.rang
            parchemin.voie = "Prêtre - Voie de la foi"
            break;
        case 17:
            parchemin.nom = "Parchemin de prière" + parchemin.rang
            parchemin.voie = "Prêtre - Voie de la prière"
            break;
        case 18:
            parchemin.nom = "Parchemin des soins" + parchemin.rang
            parchemin.voie = "Prêtre - Voie des soins"
            break;
        case 19:
            parchemin.nom = "Parchemin de spiritualité" + parchemin.rang
            parchemin.voie = "Prêtre - Voie de la spiritualité"
            break;
        case 20:
            parchemin.nom = "Parchemin des végétaux" + parchemin.rang
            parchemin.voie = "Druide - Voie des végétaux"
            break;
    }

    return parchemin
}

function genPotion(dose)
{
    let description = "";
    let nom = "";
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
                    description = "Breuvage étrange permettant de se soigner (Fortifiant - Forgesort)";
                    break;
                case 12:
                    nom = "Potion rare de destruction";
                    description = "Attention ne pas boire !! Se rapproche du feu grégois (Feu grégois - Forgesort)";
                    break;
                case 13:
                    nom = "Potion rare de guérison";
                    description = "Permet de se purger du poison, et peut aussi guérir des blessures (Elixir de guérison - Forgesort)";
                    break;
                case 14:
                    nom = "Potion rare d'esquive";
                    description = "Rend le buveur flou et difficile à touché (Flou - Magicien)";
                    break;
                case 15:
                    nom = "Potion rare de transformation - Succube";
                    description = "Transforme en succube (Aspect de la succube - Nécromancien)";
                    break;
                case 16:
                    nom = "Potion rare de transformation - Démon";
                    description = "Transforme en démon (Aspect du démon - Nécromancien)";
                    break;
                case 17:
                    nom = "Potion rare de transformation - Mort";
                    description = "Transforme en (fausse) mort (Masque mortuaire - Nécromancien)";
                    break;
                case 18:
                    nom = "Potion rare d'araignée";
                    description = "Fait pousser des pattes d'araignée (temporairement) au buveur (Pattes d'araignées - Nécromancien)";
                    break;
                case 19:
                    nom = "Potion rare d'ailes";
                    description = "Fait apparaitre des ailes dans le dos du buveur (Ailes célestes - Prêtre)";
                    break;
                case 20:
                    nom = "Potion rare de protection";
                    description = "Déploie une aura de protection (Sanctuaire - Prêtre)";
                    break;
            }
    }

    let potion = {
        nom: nom, 
        desc: description, 
        dose: dose,
        toString: function()
        {
            return this.name + " (" + this.nb + ") - " + this.desc;
        }
    };
    return potion;
}

function genMinorObject()
{
    let type = "";
    let niv = 0;
    let typeRes = dice(12);
    switch (true) {
        case (typeRes <= 4):
            type = "Potion";
            break;
        case (typeRes <= 6):
            type = "Parchemin";
            break;
        case (typeRes = 7):
            type = "Baguette";
            break;
        case (typeRes <= 11):
            type = "Objet";
            niv = 1
            break;
        case(typeRes == 12):
            type = "Objet";
            niv = 2;
    };
    switch (type) {
        case "Potion":
            return genPotion(1);
        case "Parchemin":
            return genParchemin('minor');
        case "Baguette":
            return genBaguette('minor');
        case "Objet":
            switch (dice(3)) {
                case 1:
                    return genArme(niv);
                case 2:
                    return genArmure(niv);
                case 3:
                    return genObjPou(niv);
            }
        default:
            return {nom: "Other"}
    }
}

function looting(nc)
{
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
        },
        reset: function (){
            this.money = 0;
            this.jewelry = 0;
            this.minorObject = new Array;
            this.majorObject = new Array;
            this.mediumObject = new Array;
        },
    };

    let minorN = 0;
    let mediumN = 0;
    let majorN = 0;

    switch(nc)
    {
        case 0.5:
            loot.money = dice(6);
            if(dice(20) == 20)
                loot.jewelry = dice(6)*10;

            break;
        case 1:
            loot.money = dice(6) + dice(6);
            if(dice(20) >= 18)
            loot.minorObject = new Array;
                loot.jewelry = dice(12)*10;

            break;
        case 2:
            loot.money = dice(6) + dice(6) + dice(6) + dice(6);
            if(dice(20) >= 16)
                loot.jewelry = dice(20) * 10;
            if(dice(20) == 20)
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