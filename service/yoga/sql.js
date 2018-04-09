module.exports = {
    listClassroom(param) {
        let sql = "select * from classroom where 1=1 ";

        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }

        if(param.start!=undefined) {
            let start = (param.start - 1) * limit;
            let limit = param.limit ? param.limit : 10;
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
        let sql = "select * from trainer where 1=1 ";
        
        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }
        
        if(param.start!=undefined) {
            let start = (param.start - 1) * limit;
            let limit = param.limit ? param.limit : 10;
            sql += ` limit ${start} , ${limit}` ;
        }

        return sql;
    },
    addTrainer(param) {
        return `
            insert into trainer(name) values ('${param.name}') 
        `
    },
    updateTrainer(param) {
        return `
            update trainer set name = '${param.name}' where id = ${param.id}
        `
    },
    removeTrainer(param) {
        return `
            delete from trainer where id = ${param.id}
        `
    },
    listLesson(param) {
        return `
            select * from lesson
        `
    },
    addLesson(param) {
        return `
            insert into lesson(name) values ('${param.name}') 
        `
    },
    updateLesson(param) {
        return `
            update lesson set name = '${param.name}' where id = ${param.id}
        `
    },
    removeLesson(param) {
        return `
            delete from lesson where id = ${param.id}
        `
    }



};

