describe('Thermostat', function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  describe('starting degrees', function () {
    it('equal to 20', function () {
      expect(thermostat.degrees).toEqual(20);
    });
  });

  describe('increase degrees', function () {
    it('increases the temperature', function () {
      thermostat.increase(15)
      expect(thermostat.degrees).toEqual(35);
    });
  });

  describe('reduces degrees', function () {
    it('reduces the temperature', function () {
      thermostat.decrease(5)
      expect(thermostat.degrees).toEqual(15);
    });
  });

  describe('minimum degrees', function () {
    it('raise an error if decreasing temperature under the minimum', function () {
      expect(function () {
        thermostat.decrease(15)
      }).toThrowError('you reached the minimum temperature');
    });
  });

  describe('set a maximum temperature of 25 if power saving on', function () {
    it('set a max temperature of 25 if power saving on', function () {
      thermostat._isSavingMode(true)
      expect(thermostat.max).toEqual(25)
    });
  });

  describe('set max temperature to 32 if power saving off', function () {
    it('sets the max to 32 is power saving off', function () {
      thermostat._isSavingMode(false)
      expect(thermostat.max).toEqual(32)
    });
  });

  describe('set a maximum temperature of 25 if power saving on', function () {
    it('has true as default for isSavingMode', function () {
      thermostat._isSavingMode()
      expect(thermostat.max).toEqual(25)
    });
  });

  describe('reset the temperature to 20 degrees', function () {
    it('has a function to reset the degrees to 20', function() {
      thermostat.decrease(7)
      thermostat.resetDegrees()
      expect(thermostat.degrees).toEqual(20)
    });
  });
});
