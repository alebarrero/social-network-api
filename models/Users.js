const moongose = require('mongoose')

const usersSchema = new mongoose.usersSchema ({
    username: {
        type: String,
        unique:true,
        required:true,
        trim: true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/.+\@.+\..+/] 
    },
    thought: [{
        type: moongose.Schema.Types.ObjectId,
        ref: 'Users'
    }],
    },
    {
        toJson: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

usersSchema.virtual('friendsCount').get(function() {
    return this.friends.length;
});

const Users = mongoose.model('Users', usersSchema);
module.exports = Users;