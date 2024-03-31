const hotel = {
    name: 'Resort Hotel'
    ,
    showThis() {
    console.log(this);
    },
    };
const fn = function(callback) {
    callback();
    };
fn(hotel.showThis);
        