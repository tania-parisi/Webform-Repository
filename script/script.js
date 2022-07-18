const allCross = document.querySelectorAll('.visible-pannel img');
console.log(allCross);

allCross.forEach(croix => {
  croix.addEventListener('click', function() {
    const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

    const currentChoice = this.parentNode.parentNode.childNodes[3];

    //  console.log(this.src);
    if (this.src.includes('croix')) {
      this.src = 'images/minus.svg';
      gsap.to(currentChoice, {
        duration: 0.2,
        height: height + 1250,
        opacity: 1,
        padding: '15px 5px'
      })

    } else if (this.src.includes('minus')) {
      this.src = 'images/croix.svg';
      gsap.to(currentChoice, {
        duration: 0.2,
        height: 0,
        opacity: 0,
        padding: '5px 15px'
      })
    }
  })
})

//IDENTIFIER CHOIX //
//identifier 1er choix avant sejour
const Q1resaexistante = document.getElementById("Q1resaexistante");
//identifier 2eme choix avant sejour
const Q1questiongenerale = document.getElementById("Q1questiongenerale");
//identifier 3eme choix avant sejour
const Q1handicap = document.getElementById("Q1handicap");
//Identifier Choix Apres Visite Niveau A
const Q2choixfacture = document.getElementById("Q2choixfacture");
const Q2choixperdu = document.getElementById("Q2choixperdu");
const Q2choixpartage = document.getElementById("Q2choixpartage");
const Q2choixreclamation = document.getElementById("Q2choixreclamation");

//Identifier Choix Apres Visite Niveau B - choix commentaires positives
const R2niveau2choixexperience = document.getElementById("R2niveau2choixexperience");
const Q1choixpartagecompliment = document.getElementById("Q1choixpartagecompliment");
const Q2choixpartagesuggestion = document.getElementById("Q2choixpartagesuggestion");
//Identifier Choix Apres Visite Niveau B - choix reclamation - niveau 1
const R2niveau2introreclamation = document.getElementById("R2niveau2introreclamation");
const Q1choixreclamationnew = document.getElementById("Q1choixreclamationnew")
const Q1choixreclamationpast = document.getElementById("Q1choixreclamationpast")
const Q1choixMediateur = document.getElementById("Q1choixMediateur")
//Identifier Choix Boutique
const Echangeshop = document.getElementById("Echangeshop");
const Antivolshop = document.getElementById("Antivolshop");
const Photopass = document.getElementById("Photopass");
//Identifier Choix Sans lien visite
const Jobhunt = document.getElementById("Jobhunt");
const Tombola = document.getElementById("Tombola");

//IDENTIFIER REPONSES //
//identifier reponse 1er choix avant sejour
const R1resaexistante = document.getElementById("R1resaexistante");
//identifier reponse 2eme choix avant sejour
const R1questiongenerale = document.getElementById("R1questiongenerale");
//identifier reponse 3eme choix avant sejour
const R1handicap = document.getElementById("R1handicap");
//Identifier Choix Apres Visite Niveau B
const R2choixfacture = document.getElementById("R2choixfacture");
const R2choixperdu = document.getElementById("R2choixperdu");
const R2niveau2choixexperienceinfo = document.getElementById("R2niveau2choixexperienceinfo");
//Identifier Reponse A Boutique
const Echangeshop1 = document.getElementById("Echangeshop1");
const Defectshop1 = document.getElementById("Defectshop1");
const Antivolshop1 = document.getElementById("Antivolshop1");
const Photopass1 = document.getElementById("Photopass1");
const R1boutiqueclientinfo = document.getElementById("R1boutiqueclientinfo");

//Identifier Reponses Sans lien visite
const Jobhunt1 = document.getElementById("Jobhunt1");
const Tombola1 = document.getElementById("Tombola1");
//CODE JAVA
//code redirection reponse 1er choix avant sejour
Q1resaexistante.addEventListener("click", () => {
  if (getComputedStyle(R1resaexistante).display != "none") {
    R1resaexistante.style.display = "none";
  } else {
    R1resaexistante.style.display = "block";
  }
})

//code redirection reponse 3eme choix avant sejour
Q1handicap.addEventListener("click", () => {
  if (getComputedStyle(R1handicap).display != "none") {
    R1handicap.style.display = "none";
  } else {
    R1handicap.style.display = "block";
  }
})

//code redirection reponse 3eme choix avant sejour
Q1questiongenerale.addEventListener("click", () => {
  if (getComputedStyle(R1questiongenerale).display != "none") {
    R1questiongenerale.style.display = "none";
  } else {
    R1questiongenerale.style.display = "block";
  }
})
//code redirection reponse 1er choix apres sejour (facture)
Q2choixfacture.addEventListener("click", () => {
  if (getComputedStyle(R2choixfacture).display != "none") {
    R2choixfacture.style.display = "none";
  } else {
    R2choixfacture.style.display = "block";
  }
})

//code redirection reponse 1er choix apres sejour (Perdu)
Q2choixperdu.addEventListener("click", () => {
  if (getComputedStyle(R2choixperdu).display != "none") {
    R2choixperdu.style.display = "none";
  } else {
    R2choixperdu.style.display = "block";
  }
})

//code redirection choix type de commentaire positif (partage experience)
Q2choixpartage.addEventListener("click", () => {
  if (getComputedStyle(R2niveau2choixexperience).display != "none") {
    R2niveau2choixexperience.style.display = "none";
  } else {
    R2niveau2choixexperience.style.display = "block";
  }
})

//code redirection Formulaire  (partage experience)
Q1choixpartagecompliment.addEventListener("click", () => {
  if (getComputedStyle(R2niveau2choixexperienceinfo).display != "none") {
    R2niveau2choixexperienceinfo.style.display = "none";
  } else {
    R2niveau2choixexperienceinfo.style.display = "block";
  }
})

//code redirection Formulaire  (partage suggestion)
Q2choixpartagesuggestion.addEventListener("click", () => {
  if (getComputedStyle(R2niveau2choixexperienceinfo).display != "none") {
    R2niveau2choixexperienceinfo.style.display = "none";
  } else {
    R2niveau2choixexperienceinfo.style.display = "block";
  }
})

//code redirection Formulaire  (reclamation - choix typologie de reclamation)
Q2choixreclamation.addEventListener("click", () => {
  if (getComputedStyle(R2niveau2introreclamation).display != "none") {
    R2niveau2introreclamation.style.display = "none";
  } else {
    R2niveau2introreclamation.style.display = "block";
  }
})

//code redirection Formulaire  (reclamation - redirection choix du lieu de la reclamation)
Q1choixreclamationnew.addEventListener("click", () => {
  if (getComputedStyle(Q1Claimnewplace).display != "none") {
    Q1Claimnewplace.style.display = "none";
  } else {
    Q1Claimnewplace.style.display = "block";
  }
})

//code redirection Formulaire  (reclamation -  formulaire hotels)
Q1Claimnewplacehotel.addEventListener("click", () => {
  if (getComputedStyle(
      R1Claimnewbookinginfohotel).display != "none") {

    R1Claimnewbookinginfohotel.style.display = "none";
  } else {
    R1Claimnewbookinginfohotel.style.display = "block";
  }
})

//code redirection Formulaire  (reclamation -  formulaire hotels info perso)
Q1Claimnewplacehotel.addEventListener("click", () => {
  if (getComputedStyle(
      R1Claimclientinfo).display != "none") {

    R1Claimclientinfo.style.display = "none";
  } else {
    R1Claimclientinfo.style.display = "block";
  }
})


//code redirection Formulaire  (reclamation -  formulaire Parks )
Q1Claimnewplaceparks.addEventListener("click", () => {
  if (getComputedStyle(
      R1Claimnewbookinginfoparks).display != "none") {

    R1Claimnewbookinginfoparks.style.display = "none";
  } else {
    R1Claimnewbookinginfoparks.style.display = "block";
  }
})


//code redirection Formulaire  (reclamation -  formulaire Parks info perso)
Q1Claimnewplaceparks.addEventListener("click", () => {
  if (getComputedStyle(
      R1Claimclientinfo).display != "none") {

    R1Claimclientinfo.style.display = "none";
  } else {
    R1Claimclientinfo.style.display = "block";
  }
})

//code redirection Formulaire  (reclamation -  formulaire DV info perso)
Q1ClaimnewplaceDV.addEventListener("click", () => {
  if (getComputedStyle(
      R1Claimclientinfo).display != "none") {

    R1Claimclientinfo.style.display = "none";
  } else {
    R1Claimclientinfo.style.display = "block";
  }
})


//code redirection Formulaire  (reclamation -  formulaireReclamation past info perso)
Q1choixreclamationpast.addEventListener("click", () => {
  if (getComputedStyle(
      R1Claimclientinfo).display != "none") {

    R1Claimclientinfo.style.display = "none";
  } else {
    R1Claimclientinfo.style.display = "block";
  }
})

//code redirection Formulaire  (reclamation -  Reponse mediateur)
Q1choixMediateur.addEventListener("click", () => {
  if (getComputedStyle(
      R1choixMediateur).display != "none") {

    R1choixMediateur.style.display = "none";
  } else {
    R1choixMediateur.style.display = "block";
  }
})

//code redirection Formulaire  (Boutique -  Reponse Echange)
Echangeshop.addEventListener("click", () => {
  if (getComputedStyle(
      Echangeshop1).display != "none") {
    Echangeshop1.style.display = "none";
  } else {
    Echangeshop1.style.display = "block";
  }
})

Echangeshop.addEventListener("click", () => {
  if (getComputedStyle(
      R1boutiqueclientinfo).display != "none") {

    R1boutiqueclientinfo.style.display = "none";
  } else {
    R1boutiqueclientinfo.style.display = "block";
  }
})
//code redirection Formulaire  (Boutique -  Reponse Echange)
Defectshop.addEventListener("click", () => {
  if (getComputedStyle(
      Defectshop1).display != "none") {

    Defectshop1.style.display = "none";
  } else {
    Defectshop1.style.display = "block";
  }
})

Defectshop.addEventListener("click", () => {
  if (getComputedStyle(
      R1boutiqueclientinfo).display != "none") {

    R1boutiqueclientinfo.style.display = "none";
  } else {
    R1boutiqueclientinfo.style.display = "block";
  }
})

//code redirection Formulaire  (Boutique -  Reponse Antivol)
Antivolshop.addEventListener("click", () => {
  if (getComputedStyle(
      Antivolshop1).display != "none") {

    Antivolshop1.style.display = "none";
  } else {
    Antivolshop1.style.display = "block";
  }
})

Antivolshop.addEventListener("click", () => {
  if (getComputedStyle(
      R1boutiqueclientinfo).display != "none") {

    R1boutiqueclientinfo.style.display = "none";
  } else {
    R1boutiqueclientinfo.style.display = "block";
  }
})

Photopass.addEventListener("click", () => {
  if (getComputedStyle(
      Photopass1).display != "none") {

    Photopass1.style.display = "none";
  } else {
    Photopass1.style.display = "block";
  }
})

//Reponse Recrutement
Jobhunt.addEventListener("click", () => {
  if (getComputedStyle(
      Jobhunt1).display != "none") {

    Jobhunt1.style.display = "none";
  } else {
    Jobhunt1.style.display = "block";
  }
})
//Reponse Tombola
Tombola.addEventListener("click", () => {
  if (getComputedStyle(
      Tombola1).display != "none") {

    Tombola1.style.display = "none";
  } else {
    Tombola1.style.display = "block";
  }
})
