module.exports = {
  hasEnoughtGas: function (car, route){
    return car.milesPerGalon * car.gallonsInTank > route.miles
  }
}

/// something ? then this : otherwise do this other thing. ///
