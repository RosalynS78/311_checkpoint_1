const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

// * GET /users

router.get("/users", usersController.list);

// * GET /users/:id
//   * Return just the user that matches the path param (id)

router.get("/users/:id", usersController.show);

// * POST /users
//   * Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (_data/index_). The next user should be 11

router.post("/users", usersController.create);

// * PUT /users/:id
//   * Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
router.put("/users/:id", usersController.update);

// * DELETE /users/:id
//   * Delete one user by its id
router.delete("/users/:id", usersController.omit);

// _You may chose to alter these routes so they appear as ('/', '/:id') in your users file and then prefix them all with '/users' when we import them into index.. but you are not required to do so_
module.exports = router;
