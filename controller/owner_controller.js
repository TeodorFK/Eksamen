const Owner = require('../model/owner_model');

const remove_owner = async (req, res) => {
  try {
    await Owner.findByIdAndDelete(req.params.owner);

    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  remove_owner,
};
