module.exports = {
    listClassroom(param) {
        let sql = "select from classroom where 1=1 ";

        if(param.keywords) {
            sql += ` and name like '%${query.keywords}%'`;
        }

        if(param.start!=undefined) {
            let start = (query.start - 1) * limit;
            let limit = param.limit ? query.limit : 10;
            sql += ` limit ${start} , ${limit}` ;
        }

        return sql;
    },
    addClassroom(param) {
        return `
            insert into classroom(name) values ('${param.name}') 
        `
    },
    updateClassroom(param) {
        return `
            update classroom set name = '${param.name}' where id = ${param.id}
        `
    },
    removeClassroom(param) {
        return `
            delete from classroom where id = ${param.id}
        `
    },
    listTrainer(param) {
        let sql = "select * from Trainer where 1=1 ";
        
        if(param.keywords) {
            sql += ` and name like '%${query.keywords}%'`;
        }
        
        if(param.start!=undefined) {
            let start = (query.start - 1) * limit;
            let limit = param.limit ? query.limit : 10;
            sql += ` limit ${start} , ${limit}` ;
        }

        return sql;
    },
    addTrainer(param) {
        return `
            insert into Trainer(name) values ('${param.name}') 
        `
    },
    updateTrainer(param) {
        return `
            update Trainer set name = '${param.name}' where id = ${param.id}
        `
    },
    removeTrainer(param) {
        return `
            delete from Trainer where id = ${param.id}
        `
    },
    listLesson(param) {
        return `
            select * from Lesson
        `
    },
    addLesson(param) {
        return `
            insert into Lesson(name) values ('${param.name}') 
        `
    },
    updateLesson(param) {
        return `
            update Lesson set name = '${param.name}' where id = ${param.id}
        `
    },
    removeLesson(param) {
        return `
            delete from Lesson where id = ${param.id}
        `
    }



};

