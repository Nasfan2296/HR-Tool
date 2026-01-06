const TimeOff = require("../../models/timeoff.model");

class TimeOffService {
  request(data) {
    if (data.startDate > data.endDate) {
      throw new Error("Invalid date range");
    }
    return TimeOff.create(data);
  }

  approve(id) {
    return TimeOff.findByIdAndUpdate(
      id,
      { status: "APPROVED" },
      { new: true }
    );
  }

  myRequests(userId) {
    return TimeOff.find({ user: userId });
  }

  all() {
    return TimeOff.find().populate("user");
  }
}

module.exports = new TimeOffService();
