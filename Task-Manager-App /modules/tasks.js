const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Fill the shells'],
        trim: true,
        maxlength:[20,'Cannot exceed more than 20']
    },
    completed: {
        type: Boolean,
        default:false
    }
})
module.exports=mongoose.model('Task',TaskSchema)