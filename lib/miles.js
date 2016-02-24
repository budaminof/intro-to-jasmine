module.exports = {
  hasEnoughtGas: function (car, route){
    if(car.gallonsInTank * car.gallonsInTank > route.miles) {
      return true;
    } else {
      return false;
    }

  }
}
