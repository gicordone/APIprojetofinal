const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
    description:String,
    role: String,
    done: Boolean,
    }
);

module.exports = mongoose.model('Task', taskSchema);