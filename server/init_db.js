const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/casein', {useNewUrlParser:true});

const userSchema = new mongoose.Schema({
    nickname:String,
    password:String,
    name:String,
    surname:String,
    age:Number,
    post:String, // Должность
    role:Number, // Тип пользователя: 0 - работник, 1 - адаптер, 2 - руководитель
    success:Number, // Прогресс, лучше хранить здесь, чтобы было проще
    email:String,
    phone:String,
    tasks:[{name:String, done:Boolean, link:String, code:Number, date:Date}]
});

const User = mongoose.model('users', userSchema);

function initDB() {
    const novice = new User({
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

    const adapter = new User({
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

    const manager = new User({
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
    //User.deleteMany({role: {$gte: 0}})
    return users
}

initDB()
