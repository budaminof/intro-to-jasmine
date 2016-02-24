module.exports = {
  hasEnoughtGas: function (car, route){
    if(car.milesPerGalon * car.gallonsInTank > route.miles) {
      return true;
    } else {
      return false;
    }

  }
}
