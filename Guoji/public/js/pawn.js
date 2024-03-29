/* 
Class Pawn : 
Représente un Pion contenant une position, une couleur, un id et ces prochains mouvements possible
*/

export default class Pawn {

    constructor(id, i, j, color) {
        // i, j : position dans le tableau 
        // id : type de pion (1 : pion classique; 2 : tour; 3 : chevalier; 4 : fou; 5 : reine; 6 : roi)
        // color : "b" ou "w" en fonction de la couleur du pion
        // nextMouv Contient les possibilités de déplacements du pion

        this.i = i; 
        this.j = j;
        this.id = id;
        this.color = color;
        this.nextMouv = [];
        switch(color)
        {
            case "white":
                this.enemie = "b";
                break;
            case "black":
                this.enemie = "w";
                break;
        }
    }


    // Méthode setIndices : prend en entrée deux entiers correspondant à la nouvelle position du pion et met à jour la position.
    setIndices(i, j)
    {
        this.i = i;
        this.j = j;
    }

    // Méthode d'affichage du pion
    display(i, j) {
        if(this.color == "white")
        {
            if (this.id == 1) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_pawn.png"/>';
            }
            if (this.id == 2) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn"src="img/chess/w_rook.png"/>';
            }
            if (this.id == 3) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_knight.png"/>';
            }
            if (this.id == 4) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_bishop.png"/>';
            }
            if (this.id == 5) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_king.png"/>';
            }
            if (this.id == 6) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=white'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/w_queen.png"/>';
            }
        }else
        {
            if (this.id == 1) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_pawn.png"/>';
            }
            if (this.id == 2) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn"src="img/chess/b_rook.png"/>';
            }
            if (this.id == 3) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_knight.png"/>';
            }
            if (this.id == 4) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_bishop.png"/>';
            }
            if (this.id == 5) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_king.png"/>';
            }
            if (this.id == 6) {
                document.getElementById(i.toString() + j.toString()).innerHTML = '<img  draggable="true" id=black'+ i.toString() + j.toString() +'  class="pawn" src="img/chess/b_queen.png"/>';
            }
        }
        
    }

    // Méthode retournant dans nextMouv les possibilités de déplacement du pion choisi.
    getmoveArray()
    {
        this.nextMouv = new Array();
        var currentMouv, compteur=1;

        // switch sur l'id du pion donc sur son type
        switch(this.id)
        {
            case 1 :

                switch(this.color)
                {
                    case "white":
                        currentMouv = document.getElementById((this.i-1).toString() + this.j.toString());
                        if(!currentMouv.hasChildNodes())
                        {
                            this.nextMouv[0] = [this.i-1,this.j];
                            if(this.i == 6){
                                this.nextMouv[1] = [this.i-2,this.j];
                            }
                        }
                        for(var x = -1; x < 2; x+=2)
                        {
                            if(this.j+x >= 0 && this.j+x <= 7){
                                currentMouv = document.getElementById((this.i-1).toString() + (this.j+x).toString());
                                if(currentMouv.hasChildNodes()){
                                    if(currentMouv.firstChild.id.substr(0, 1) == this.enemie){
                                        this.nextMouv.push([this.i-1,this.j+x]);
                                    }
                                }
                            }
                        }
                        break;

                    case "black":
                        currentMouv = document.getElementById((this.i+1).toString() + this.j.toString());
                        if(!currentMouv.hasChildNodes())
                        {
                            this.nextMouv[0] = [this.i+1,this.j];
                            if(this.i == 1){
                                this.nextMouv[1] = [this.i+2,this.j];
                            }
                        }
                        for(var x = -1; x < 2; x+=2)
                        {
                            if(this.j+x >= 0 && this.j+x <= 7){
                                currentMouv = document.getElementById((this.i+1).toString() + (this.j+x).toString());
                                if(currentMouv.hasChildNodes()){
                                    if(currentMouv.firstChild.id.substr(0, 1) == this.enemie){
                                        this.nextMouv.push([this.i+1,this.j+x]);
                                    }
                                }
                            }
                        }
                        break;
                }
                break;

            case 2 :
                currentMouv = document.getElementById((this.i-compteur).toString() + this.j.toString());
                while(this.i-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i - compteur, this.j]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i-compteur).toString() + this.j.toString());
                }
                if(this.i-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i-compteur, this.j]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i+compteur).toString() + this.j.toString());
                while(this.i+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i + compteur, this.j]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i+compteur).toString() + this.j.toString());
                }
                if(this.i+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i+compteur, this.j]);}

                compteur = 1;
                currentMouv = document.getElementById(this.i.toString() + (this.j-compteur).toString());
                while(this.j-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i, this.j-compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById(this.i.toString() + (this.j-compteur).toString());
                }
                if(this.j-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i, this.j-compteur]);}

                compteur = 1;
                currentMouv = document.getElementById(this.i.toString() + (this.j+compteur).toString());
                while(this.j+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i, this.j+compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById(this.i.toString() + (this.j+compteur).toString());
                }
                if(this.j+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i, this.j+   compteur]);}
                break;

            case 3 :
                for(var indice = -1; indice < 2; indice+=2)
                {
                    currentMouv = document.getElementById((this.i-2).toString() + (this.j+indice).toString());
                    if(this.i-2 >= 0 && this.j+indice >= 0 && this.j+indice <= 7 && (!currentMouv.hasChildNodes() || currentMouv.firstChild.id.substr(0, 1) == this.enemie)){
                        this.nextMouv.push([this.i-2, this.j+indice]);
                    }
                    currentMouv = document.getElementById((this.i+2).toString() + (this.j+indice).toString());
                    if(this.i+2 <= 7 && this.j+indice >= 0 && this.j+indice <= 7 && (!currentMouv.hasChildNodes() || currentMouv.firstChild.id.substr(0, 1) == this.enemie)){
                        this.nextMouv.push([this.i+2, this.j+indice]);
                    }
                    currentMouv = document.getElementById((this.i+indice).toString() + (this.j+2).toString());
                    if(this.i+indice >= 0 && this.i+indice <= 7 && this.j+2 <= 7 && (!currentMouv.hasChildNodes() || currentMouv.firstChild.id.substr(0, 1) == this.enemie)){
                        this.nextMouv.push([this.i+indice, this.j+2]);
                    }
                    currentMouv = document.getElementById((this.i+indice).toString() + (this.j-2).toString());
                    if(this.i+indice >= 0 && this.i+indice <= 7 && this.j-2 >= 0 && (!currentMouv.hasChildNodes() || currentMouv.firstChild.id.substr(0, 1) == this.enemie)){
                        this.nextMouv.push([this.i+indice, this.j-2]);
                    }
                }
                break;
            
            case 4 :
                currentMouv = document.getElementById((this.i-compteur).toString() + (this.j-compteur).toString());
                while(this.i-compteur >= 0 && this.j-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i - compteur, this.j - compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i-compteur).toString() + (this.j-compteur).toString());
                }
                if(this.i-compteur >= 0 && this.j-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i-compteur, this.j-compteur]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i+compteur).toString() + (this.j-compteur).toString());
                while(this.i+compteur <= 7 && this.j-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i + compteur, this.j - compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i+compteur).toString() + (this.j-compteur).toString());
                }
                if(this.i+compteur <= 7 && this.j-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i+compteur, this.j-compteur]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i-compteur).toString() + (this.j+compteur).toString());
                while(this.i-compteur >= 0 && this.j+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i - compteur, this.j + compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i-compteur).toString() + (this.j+compteur).toString());
                }
                if(this.i-compteur >= 0 && this.j+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i-compteur, this.j+compteur]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i+compteur).toString() + (this.j+compteur).toString());
                while(this.i+compteur <= 7 && this.j+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i + compteur, this.j + compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i+compteur).toString() + (this.j+compteur).toString());
                }
                if(this.i+compteur <= 7 && this.j+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i+compteur, this.j+compteur]);}
                break;

                
            case 5 :
                currentMouv = document.getElementById((this.i-1).toString() + (this.j).toString());
                if(this.i-1 >= 0 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i-1, this.j]);}
                currentMouv = document.getElementById((this.i+1).toString() + (this.j   ).toString());
                if(this.i+1 <= 7 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i+1, this.j]);}
                currentMouv = document.getElementById((this.i).toString() + (this.j-1).toString());
                if(this.j-1 >= 0 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i, this.j-1]);}
                currentMouv = document.getElementById((this.i).toString() + (this.j+1).toString());
                if(this.j+1 <= 7 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i, this.j+1]);}
                currentMouv = document.getElementById((this.i-1).toString() + (this.j-1).toString());
                if(this.i-1 >= 0 && this.j-1 >= 0 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i-1, this.j-1]);}
                currentMouv = document.getElementById((this.i-1).toString() + (this.j+1).toString());
                if(this.i-1 >= 0 && this.j+1 <= 7 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i-1, this.j+1]);}
                currentMouv = document.getElementById((this.i+1).toString() + (this.j-1).toString());
                if(this.i+1 <= 7 && this.j-1 >= 0 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i+1, this.j-1]);}
                currentMouv = document.getElementById((this.i+1).toString() + (this.j+1).toString());
                if(this.i+1 <= 7 && this.j+1 <= 7 && ((!currentMouv.hasChildNodes()) || (currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie))){this.nextMouv.push([this.i+1, this.j+1]);}
        
                break;

            case 6 :
                currentMouv = document.getElementById((this.i-compteur).toString() + this.j.toString());
                while(this.i-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i - compteur, this.j]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i-compteur).toString() + this.j.toString());
                }
                if(this.i-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i-compteur, this.j]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i+compteur).toString() + this.j.toString());
                while(this.i+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i + compteur, this.j]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i+compteur).toString() + this.j.toString());
                }
                if(this.i+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i+compteur, this.j]);}

                compteur = 1;
                currentMouv = document.getElementById(this.i.toString() + (this.j-compteur).toString());
                while(this.j-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i, this.j-compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById(this.i.toString() + (this.j-compteur).toString());
                }
                if(this.j-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i, this.j-compteur]);}

                compteur = 1;
                currentMouv = document.getElementById(this.i.toString() + (this.j+compteur).toString());
                while(this.j+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i, this.j+compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById(this.i.toString() + (this.j+compteur).toString());
                }
                if(this.j+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i, this.j+   compteur]);}
          
                compteur = 1;
                currentMouv = document.getElementById((this.i-compteur).toString() + (this.j-compteur).toString());
                while(this.i-compteur >= 0 && this.j-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i - compteur, this.j - compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i-compteur).toString() + (this.j-compteur).toString());
                }
                if(this.i-compteur >= 0 && this.j-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i-compteur, this.j-compteur]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i+compteur).toString() + (this.j-compteur).toString());
                while(this.i+compteur <= 7 && this.j-compteur >= 0 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i + compteur, this.j - compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i+compteur).toString() + (this.j-compteur).toString());
                }
                if(this.i+compteur <= 7 && this.j-compteur >= 0 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i+compteur, this.j-compteur]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i-compteur).toString() + (this.j+compteur).toString());
                while(this.i-compteur >= 0 && this.j+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i - compteur, this.j + compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i-compteur).toString() + (this.j+compteur).toString());
                }
                if(this.i-compteur >= 0 && this.j+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i-compteur, this.j+compteur]);}

                compteur = 1;
                currentMouv = document.getElementById((this.i+compteur).toString() + (this.j+compteur).toString());
                while(this.i+compteur <= 7 && this.j+compteur <= 7 && !currentMouv.hasChildNodes())
                {
                    this.nextMouv.push([this.i + compteur, this.j + compteur]);
                    compteur += 1;
                    currentMouv = document.getElementById((this.i+compteur).toString() + (this.j+compteur).toString());
                }
                if(this.i+compteur <= 7 && this.j+compteur <= 7 && currentMouv.hasChildNodes() && currentMouv.firstChild.id.substr(0, 1) == this.enemie){this.nextMouv.push([this.i+compteur, this.j+compteur]);}
                break;
        }

        return this.nextMouv;
    }

    // Méthode : retourne nextMouv
    getpreviousmovArray()
    {
        return this.nextMouv;
    }

    // Méthode : retourne color
    getcolor()
    {
        return this.color;
    }
}    