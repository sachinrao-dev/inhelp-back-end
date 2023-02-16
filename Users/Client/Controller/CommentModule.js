const Comment = require("../Modals/CommentSchema");
const service = require("../../admin/Modals/ServiceSchema");

const CommentModule = (req, resp) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then(() => service.findById(req.params.id))
    .then((item) => {
      item.comments.push(comment);
      return item.save();
    })
    .then(() => resp.send({ response: "comment added", status: 200 }));
};

module.exports = CommentModule;
