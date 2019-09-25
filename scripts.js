var type
var periode

this.getField("type demandeur")

this.getField("periode")

this.getField("type demandeur")

var type = this.getField("type demandeur").value;
var periode = this.getField("periode").value;

function top () {
    var type = this.getField("type demandeur").value;
    var periode = this.getField("periode").value;
}; 
    
top();

this.getField("salle").display = display.hidden ;
this.getField("salle").display = display.visible ;

function top () {
    var type = this.getField("type demandeur").value;
    var periode = this.getField("periode").value;
    if ( type == "priv" && periode == "we" ) {
        //
        //this.getField("salle").display = display.hidden ;
        //this.getField("salle").value = type + " - " + periode;
        this.getField("admi_sem").display = display.hidden ;
    } else {
        this.getField("admi_sem").display = display.visible ;
    }
};

this.getField("priv_we").readonly = false;
this.getField("priv_sem").readonly = false;
this.getField("entr_we").readonly = false;
this.getField("entr_sem").readonly = false;
this.getField("asso_we").readonly = false;
this.getField("asso_sem").readonly = false;
this.getField("admi_we").readonly = false;
this.getField("admi_sem").readonly = false;

this.getField("priv_we").readonly = true;
this.getField("priv_sem").readonly = true;
this.getField("entr_we").readonly = true;
this.getField("entr_sem").readonly = true;
this.getField("asso_we").readonly = true;
this.getField("asso_sem").readonly = true;
this.getField("admi_we").readonly = true;
this.getField("admi_sem").readonly = true;

this.getField("priv_we").display = display.visible;
this.getField("priv_sem").display = display.visible;
this.getField("entr_we").display = display.visible;
this.getField("entr_sem").display = display.visible;
this.getField("asso_we").display = display.visible;
this.getField("asso_sem").display = display.visible;
this.getField("admi_we").display = display.visible;
this.getField("admi_sem").display = display.visible;

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
    this.getField("Fenêtre").value = periode_visible;
    //
    this.getField("priv_we").display = display.hidden;
    this.getField("priv_sem").display = display.hidden;
    this.getField("entr_we").display = display.hidden;
    this.getField("entr_sem").display = display.hidden;
    this.getField("asso_we").display = display.hidden;
    this.getField("asso_sem").display = display.hidden;
    this.getField("admi_we").display = display.hidden;
    this.getField("admi_sem").display = display.hidden;
        
    if ( type == "priv" && periode == "we" ) {
        this.getField("priv_we").display = display.visible;
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

function proof () {
    //
    var type = this.getField("type demandeur").value;
    var periode = this.getField("periode").value;
    //
    this.getField("priv_we").display = display.hidden ;
    this.getField("priv_sem").display = display.hidden ;
    this.getField("entr_we").display = display.hidden ;
    this.getField("entr_sem").display = display.hidden ;
    this.getField("asso_we").display = display.hidden ;
    this.getField("asso_sem").display = display.hidden ;
    this.getField("admi_we").display = display.hidden ;
    this.getField("admi_sem").display = display.hidden ;
    //
    this.getField("priv_we").readonly = true;
    this.getField("priv_sem").readonly = true;
    this.getField("entr_we").readonly = true;
    this.getField("entr_sem").readonly = true;
    this.getField("asso_we").readonly = true;
    this.getField("asso_sem").readonly = true;
    this.getField("admi_we").readonly = true;
    this.getField("admi_sem").readonly = true;
        
    if ( type == "priv" && periode == "we" ) {
        this.getField("priv_we").display = display.visible;
        this.getField("priv_we").readonly = false;
    }
    if ( type == "priv" && periode == "semaine" ) {
        this.getField("priv_sem").display = display.visible;
        this.getField("priv_sem").readonly = false;
    }
    if ( type == "entr" && periode == "we" ) {
        this.getField("entr_we").display = display.visible;
        this.getField("entr_we").readonly = false;
    }
    if ( type == "entr" && periode == "semaine" ) {
        this.getField("entr_sem").display = display.visible;
        this.getField("entr_sem").readonly = false;
    }
    if ( type == "asso" && periode == "we" ) {
        this.getField("asso_we").display = display.visible;
        this.getField("asso_we").readonly = false;
    }
    if ( type == "asso" && periode == "semaine" ) {
        this.getField("asso_sem").display = display.visible;
        this.getField("asso_sem").readonly = false;
    }
    if ( type == "admi" && periode == "we" ) {
        this.getField("admi_we").display = display.visible;
        this.getField("admi_we").readonly = false;
    }
    if ( type == "admi" && periode == "semaine" ) {
        this.getField("admi_sem").display = display.visible;
        this.getField("admi_sem").readonly = false;
    }  
};

function top () {
    var type = this.getField("type demandeur").value;
    var periode = this.getField("periode").value;
    this.getField("salle").value = type + " - " + periode;

    if ( type == "priv" && periode == "we" ) {
        //
        //this.getField("salle").display = display.hidden ;
        //this.getField("salle").value = type + " - " + periode;
        //this.getField("admi_sem").display = display.hidden ;
    } else {
        //this.getField("admi_sem").display = display.visible ;
    }
}; 