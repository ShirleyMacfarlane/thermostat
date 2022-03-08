const Thermostat = require('./thermostat');

describe('A Thermostat Basket', () => {
    // const candyDouble = { getName: () => 'Skittles',
    // getPrice: () => 4.99
    // }
    it('defualt temperature is 20', () => {
        const thermostat = new Thermostat(); 
        expect(thermostat.getTemperature()).toEqual (20);
    });

    it('returns an increase of 1', () => {
        const thermostat = new Thermostat();
        thermostat.up() 
        expect(thermostat.getTemperature()).toEqual (21);
    });

    it('returns an decreased of 1', () => {
        const thermostat = new Thermostat();
        thermostat.down() 
        expect(thermostat.getTemperature()).toEqual (19);
    });


    it('Power Saving mode has a default value of false', () => {
        const thermostat = new Thermostat(); 
        expect(thermostat.power_saving).toEqual (false);
    });

    it('Power Saving mode can be changed to true', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true)
        expect(thermostat.power_saving).toEqual (true);
    });

    it('Power Saving mode is ture max temp is 25', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true)
        for (let i = 0; i < 10; i++){
            thermostat.up() 
        }  
        expect(thermostat.getTemperature()).toEqual (25);
    });
    it('PPSM off temp is 32', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false)
        for (let i = 0; i < 18; i++){
            thermostat.up() 
        }  
        expect(thermostat.getTemperature()).toEqual (32);
    });
    it('Reset temnp to 20', () => {
        const thermostat = new Thermostat(); 
        for (let i = 0; i < 18; i++){
            thermostat.up() 
        }
        thermostat.resetTemperature();
        expect(thermostat.getTemperature()).toEqual (20);
    });
    it('min temp = 10', () => {
        const thermostat = new Thermostat(); 
        for (let i = 0; i < 18; i++){
            thermostat.down() 
        } 
        expect(thermostat.getTemperature()).toEqual (10);
    });

    it('Current Energy use', () => {
        const thermostat = new Thermostat(); 
        for (let i = 0; i < 3; i++){
            thermostat.down() 
        } 
        expect(thermostat.energyStatus()).toEqual ('low-usage');
        for (let i = 0; i < 5; i++){
            thermostat.up() 
        } 
        expect(thermostat.energyStatus()).toEqual ('medium-usage');
        for (let i = 0; i < 20; i++){
            thermostat.up() 
        } 
        expect(thermostat.energyStatus()).toEqual ('high-usage');


    });


});