const Owner = require('../model/owner_model');

const owner_get = async (req, res) => {
  try {
    const Owners = await Owner.find();
    res.render('owners', { Owners });
  } catch (err) {
    console.log(err);
    res.stauts(500).send('Internal server error');
  }
};
const remove_owner = async (req, res) => {
  try {
    await Owner.findByIdAndDelete(req.params.owner);

    res.redirect('/');
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  owner_get,
  remove_owner,
};
