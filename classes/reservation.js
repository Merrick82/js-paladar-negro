class Reservation {
    reservationName = "";
    day = "";
    hour = "";
    dinersQty = 0;
    mail = "";
    telephone = "";

    constructor(reservationName, day, hour, dinersQty, mail, telephone) {
        this.reservationName = reservationName;
        this.day = day;
        this.hour = hour;
        this.dinersQty = dinersQty;
        this.mail = mail;
        this.telephone = telephone;
    }

    createReservation() {
        const reservationPrice = 20;
        let price = reservationPrice * this.dinersQty;

        return { "reservationName": this.reservationName, "dinersQty": this.dinersQty, "date": `${this.day} ${this.hour}`, "reservationPrice": `$ ${price}` };
    }

    cancelReservation() {
        console.log("La reserva fue cancelada");
    }
}