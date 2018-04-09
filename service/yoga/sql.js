module.exports = {
    countClassroom(param){
        let sql = "select count(*) as total from classroom where 1=1 ";
        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }
        return sql;
    },
    listClassroom(param) {
        let sql = "select * from classroom where 1=1 ";

        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }

        if(param.start!=undefined) {
            let limit = param.limit ? param.limit : 10;
            let start = (param.start - 1) * limit;
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
    countTrainer(param){
        let sql = "select count(*) as total from trainer where 1=1 ";
        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }
        return sql;
    },
    listTrainer(param) {
        let sql = "select * from trainer where 1=1 ";
        
        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }
        
        if(param.start!=undefined) {
            let limit = param.limit ? param.limit : 10;
            let start = (param.start - 1) * limit;
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
    },

    data() {
        return {
            start: 1,
            limit : 5
        }
    },

    getCoachList() {
        let param = {
            start : this.start,
            limit : this.limit
        }
        this.ajax('post', 'listTrainer' , function(res){

        }.bind(this) , param);
    },
    currentChange(page) {
        this.start = page;
        this.getCoachList();
    }



};

