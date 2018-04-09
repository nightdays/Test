module.exports = {
    listClassroom(param) {
        return `
            select * from classroom
        `
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
        return `
            select * from Trainer
        `
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

