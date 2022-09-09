const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        done: {
            type: Boolean,
            required: true
        }
    }
);

module.exports = mongoose.model('Task', taskSchema);