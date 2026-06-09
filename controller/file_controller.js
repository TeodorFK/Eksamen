const multer = require('multer');
const fs = require('fs');
const path = require('path');

const fileAdd_get = (req, res) => {
  try {
    res.render('addFile');
  } catch (err) {
    console.log(err);
  }
};

const fileAdd_post = (req, res) => {
  const file = req.body;
  try {
    res.redirect('/showFile');
  } catch (err) {
    console.log(err);
  }
};

const fileShow = (req, res) => {
  try {
    const filesFolder = './public/files';
    fs.readdir(filesFolder, (err, files) => {
      if (err) {
        console.log(err);
      }
      res.render('showFile', { allFiles: files });
    });
  } catch (err) {
    console.log;
  }
};

module.exports = {
  fileAdd_get,
  fileAdd_post,
  fileShow,
};
