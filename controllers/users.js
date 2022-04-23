const users = require("../data/index");
const sampleUser = require("../data/sampleUser");

// * listUsers
//   * Should retrieve the entire array from _data/index_

const list = (req, res) => {
  res.json(users);
};

// * showUser
//   * Should retrieve just the user that matches the passed-in id

const show = (req, res) => {
  let userId = parseInt(req.params.id);
  let user = users.find((user) => user.id === userId);
  if (!user) {
    res.status(404).send('No Data');
    return;
  } else {
    res.send(user);
  }
};

// * createUser
//   * Should add a user to the array

const create = (req, res) => {
  let extra = users.length;
  let newUser = sampleUser;
  newUser.id = extra + 1;
  users.push(newUser);
  res.json(users[newUser.id - 1]);
};

// * updateUser
//   * Should update one user in the array based on its id
const update = (req, res) => {
  if (users.find((users) => users.id === parseInt(req.params.id))) {
    let updateUser = users.find(
      (users) => users.id === parseInt(req.params.id)
    );
    var index = users.indexOf(updateUser);
    if (index !== -1) {
      users[index] = sampleUser;
    }
    res.json(users);
  } else if (!users.find((users) => users.id === parseInt(req.params.id))) {
    res.status(400).send('Bad Request');
  }
};

// * deleteUser
//   * Should delete one user from the array based on its id

const omit = (req, res) => {
  let find = users.find((user) => user.id === parseInt(req.params.id));
  if (find) {
    users.forEach((user) => {
      if (user._id === parseInt(req.params.userId)) {
        return res.json(user);
      }
    });
  } else {
    res.status(400).send(`Bad Request`);
  }
  res.send('Deleted');
};

module.exports = {
  list,
  show,
  create,
  update,
  omit,
};
