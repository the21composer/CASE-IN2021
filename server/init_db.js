const mongoose = require('mongoose');

class DBMaster {
    constructor() {
        mongoose.connect('mongodb://localhost:27017/casein', {useNewUrlParser:true});
        const userSchema = new mongoose.Schema({});
        this.User = mongoose.model('users', userSchema, 'users');
    }
    initDB() {
        const novice = new this.User({
            nickname:"Работник",
            password:"casein",
            name:"Алексей",
            surname:"Петров",
            age:34,
            post:"Младший программист",
            role:0,
            success:0,
            email:"casein2021@gmail.com",
            phone:"89263742632",
            tasks:[
                {
                    name:"Изучить устав компании",
                    done:false,
                    code:0,
                    date:null
                },
                {
                    name:"Познакомиться с чат ботом",
                    done:true,
                    code:1,
                    date:Date.now()
                },
            ]
        })

        const adapter = new this.User({
            nickname:"Адаптер",
            password:"casein",
            name:"Диана",
            surname:"Терентьева",
            age:29,
            post:"Старший программист",
            role:1,
            success:100,
            email:"adapter_good@gmail.com",
            phone:"89992637481"
        })

        const manager = new this.User({
            nickname:"Руководитель",
            password:"casein",
            name:"Петр",
            surname:"Васюков",
            age:42,
            post:"Директор отдела",
            role:2,
            success:100,
            email:"main_persona@gmail.com",
            phone:"89992637481"
        })

        const users = [novice, adapter, manager]
        users.forEach(x => {
            x.save()
        })
        return users
    }

    getUserTasks(nickname) {
        this.User.find({nickname: nickname}, (err,results) => {
            return results[0].toJSON().tasks;
        })
    }
    getUserCompletedTasks(nickname) {
        this.User.find({nickname: nickname}, (err,results) => {
            return results[0].toJSON().tasks.filter(t => t.done = true);
        })
    }
    getUserUncompletedTasks(nickname) {
        this.User.find({nickname: nickname}, (err,results) => {
            return results[0].toJSON().tasks.filter(t => t.done = false);
        })
    }
    getUserInfo(nickname) {
        this.User.find({nickname:nickname}, (err, results) => {
            return results[0].toJSON();
        })
    }
}

module.exports = {DBMaster}
