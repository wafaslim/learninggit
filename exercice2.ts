function age(a:number){
    if(a<18){
        console.log("Mineur");
    }
        else if(18<a && a<35) { 
            console.log("jeune");
        }
            else{
                console.log("adulte");
            
            }
    
}
age(23);
age(40);
