const Rating = require("../Modals/RatingSchema");
const Service = require("../../admin/Modals/ServiceSchema");

const RatingModule = (req, resp) => {
  const rating = new Rating(req.body);
  rating
    .save()
    .then(() => Service.findById(req.params.id))
    .then((item) => {
      item.ratings.unshift(rating);
      return item.save();
    })
    .then(() => resp.send({ response: "rating added", status: 200 }));
};

module.exports = RatingModule;
