import Moment from "moment";

class Ticket {
  constructor(names, location, description) {
    this.names = names;
    this.location = location;
    this.description = description;
    this.timeOpened = new Moment();
    this.timeSinceOpened =  "a few seconds";
    console.log(this);
  }

  setTimeSinceOpened() {
    this.timeSinceOpened = this.timeOpened.fromNow(true);
    return this.timeOpened.fromNow(true);
  }
}


export default Ticket;
