// Déclenchement sur "souris relachée"
function remboursement () {
    var type = this.getField("type demandeur").value;
    if ( type == "priv") {
        this.getField("remboursement").display = display.visible;
    } else {
        this.getField("remboursement").display = display.hidden;
    }
}

// Déclenchement sur "souris relachée"
function lien () {
    var comm = this.getField("Matériel à commander à la voirie").value;
    if ( comm != "Off" ) {
        this.getField("commande").display = display.visible;
    } else {
        this.getField("commande").display = display.hidden;
    }
}

// Déclenchement sur "souris relachée"
function materiel () {
    var pret = this.getField("Prêt de matériel lié à la salle").value;
    if ( pret != "Off" ) {
        this.getField("precisions_obligatoires").display = display.visible;
        this.getField("Précisions Matériel").required = true;
    } else {
        this.getField("precisions_obligatoires").display = display.hidden;
        this.getField("Précisions Matériel").required = false;
    }
}

// Déclenchement sur "souris relachée"
function lu () {
    var case_lu = this.getField("Lu").value;
    if ( case_lu !="Off" ) {
        this.getField("Envoi").display = display.visible;
    } else {
        this.getField("Envoi").display = display.hidden;
    }
}

// Déclenchement sur "souris relachée"
function proof () {
    // vrai type
    var type = this.getField("type demandeur").value;
    // type_visible déduit
    var type_visible = "Privé";
    if ( type == "entr" ) {
        type_visible = "Entreprise";
    }
    if ( type == "asso" ) {
        type_visible = "Association";
    }
    if ( type == "admi" ) {
        type_visible = "Administration";
    } 
    this.getField("Demandeur").value = type_visible;
    // periode_visible
    var periode_visible = this.getField("periode").value;
    // par défaut les menus sont readonly
    if ( periode_visible !== "Off" ) {
        this.getField("priv_we").readonly = false;
        this.getField("priv_ven").readonly = false;
        this.getField("priv_sem").readonly = false;
        this.getField("entr_we").readonly = false;
        this.getField("entr_sem").readonly = false;
        this.getField("asso_we").readonly = false;
        this.getField("asso_sem").readonly = false;
        this.getField("admi_we").readonly = false;
        this.getField("admi_sem").readonly = false;
    }
    if ( periode_visible == "Off" ) {
        periode_visible = "Non défini";
    }
    // vraie période résumée
    var periode = "we";
    if ( periode_visible == "Semaine" ) {
        periode = "semaine";
    }
    if ( periode_visible == "Vendredi" ) {
        periode = "semaine";
    }
    this.getField("Fenêtre").value = periode_visible;
    // On cache tous les champs - 30.10.2019 : nouvelle liste : privé-vendredi
    this.getField("priv_we").display = display.hidden;
    this.getField("priv_ven").display = display.hidden;
    this.getField("priv_sem").display = display.hidden;
    this.getField("entr_we").display = display.hidden;
    this.getField("entr_sem").display = display.hidden;
    this.getField("asso_we").display = display.hidden;
    this.getField("asso_sem").display = display.hidden;
    this.getField("admi_we").display = display.hidden;
    this.getField("admi_sem").display = display.hidden;
    // ici on teste et on rend visible la seule bonne liste
    if ( type == "priv" && periode == "we" ) {
        this.getField("priv_we").display = display.visible;
    }
    if ( type == "priv" && periode_visible == "Vendredi" ) { // 30.10.2019 test réalisé sur periode_visible 
        this.getField("priv_ven").display = display.visible;
    }
    if ( type == "priv" && periode == "semaine" ) {
        this.getField("priv_sem").display = display.visible;
    }
    if ( type == "entr" && periode == "we" ) {
        this.getField("entr_we").display = display.visible;
    }
    if ( type == "entr" && periode == "semaine" ) {
        this.getField("entr_sem").display = display.visible;
    }
    if ( type == "asso" && periode == "we" ) {
        this.getField("asso_we").display = display.visible;
    }
    if ( type == "asso" && periode == "semaine" ) {
        this.getField("asso_sem").display = display.visible;
    }
    if ( type == "admi" && periode == "we" ) {
        this.getField("admi_we").display = display.visible;
    }
    if ( type == "admi" && periode == "semaine" ) {
        this.getField("admi_sem").display = display.visible;
    }  
};

// Déclenchement sur "champ activé"
function vider () {
    if (event.target.value=="JJ") {
        event.target.value="";
    }
    if (event.target.value=="MM") {
        event.target.value="";
    }
    if (event.target.value=="AAAA") {
        event.target.value="";
    }
}