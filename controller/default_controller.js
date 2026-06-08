const index = (req, res) => {
  try {
    res.render('index');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  index,
};
