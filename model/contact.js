const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(require.main.filename), // This gets the root directory of your app
  'model',
  'contacts.json' // Adjusted path, should be in 'model' directory
);

const getContactsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Contact {
  constructor(name, email, phone, date, time) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.time = time;
  }

  save() {
    getContactsFromFile(contacts => {
      contacts.push(this);
      fs.writeFile(p, JSON.stringify(contacts), err => {
        if (err) {
          console.error('Error writing contacts file:', err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getContactsFromFile(cb);
  }
};
