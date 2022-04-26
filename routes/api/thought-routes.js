const router = require("express").Router();

const { createReadStream } = require("fs");
const {
  getAllThoughts,
  getThoughtById,
  updateThought,
  createThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router.route("/").get(getAllThoughts).post(createThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
