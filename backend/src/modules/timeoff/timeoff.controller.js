const service = require("./timeoff.service");

exports.request = async (req, res) => {
  const data = await service.request({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json(data);
};

exports.approve = async (req, res) => {
  const data = await service.approve(req.params.id);
  res.json(data);
};

exports.mine = async (req, res) => {
  res.json(await service.myRequests(req.user.id));
};

exports.all = async (req, res) => {
  res.json(await service.all());
};
