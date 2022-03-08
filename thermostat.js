class Thermostat{

    constructor(){
        this.tmperature = 20; 
        this.power_saving = false; 
    }

    getTemperature(){
        return this.tmperature
    };

    up(){
        if (this.power_saving === true){
          if(this.tmperature < 25){
            this.tmperature += 1 
          }
        }else{
         if(this.tmperature < 32){
            this.tmperature += 1 
         }
        }
    };

    down(){ 
        if(this.tmperature > 10){
            this.tmperature -= 1 
        }  
    }
    

    setPowerSavingMode(value){
        this.power_saving = value
    };

    resetTemperature(){
        this.tmperature = 20
    };

    energyStatus(){
        if (this.tmperature < 18){ 
           return 'low-usage';
        }else if (this.tmperature >18 && this.tmperature <= 25){
            return 'medium-usage';
        } else{
            return 'high-usage';
        }
    };


}

module.exports = Thermostat;