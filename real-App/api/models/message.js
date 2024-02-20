const mongoose = require("");

const messageSchema = mongoose.Schema({
  senderID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  recepientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  messageType: {
    type: string,
    enum: ["text", "image"],
  },
message:String,
imageUrl: String,
timeStamp:{
    type:Date,
    default:Date.now,
},
});

const Message = mongoose.model('Message', messageSchema);
