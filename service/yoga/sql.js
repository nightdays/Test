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
    }



};

