module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      question: String,
      questionType: String,
      answers: [],
      correctAnswer: String,
      messageForCorrectAnswer: String,
      messageForIncorrectAnswer: String,
      point: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
