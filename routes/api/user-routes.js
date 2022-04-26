const router = require("express").Router();
const {
  getUserById,
  createUser,
  updateUser,
  getAllUsers,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
