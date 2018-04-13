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
            delete t.* , l.* , al.* from trainer t
            inner join lesson l on t.id = l.trainer_id
            inner join appoint_lesson al on l.id = al.lesson_id
            where t.id = ${param.id}
        `
    },
    countLesson(param) {
        let sql = "select count(*) as total from lesson where 1=1 ";
        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }
        return sql;
    },
    listLesson(param) {
        let sql = `
            select
                l.id , l.name , l.level, c.id classroom_id, c.name classroom_name , t.id trainer_id, t.name trainer_name
            from 
                lesson l , classroom c , trainer t 
            where
                l.classroom_id = c.id and l.trainer_id = t.id
        `;
        
        if(param.keywords) {
            sql += ` and l.name like '%${param.keywords}%'`;
        }
        
        if(param.start!=undefined) {
            let limit = param.limit ? param.limit : 10;
            let start = (param.start - 1) * limit;
            sql += ` limit ${start} , ${limit}` ;
        }

        return sql;
    },
    addLesson(param) {
        return `
            insert into lesson(name,level,classroom_id,trainer_id) 
            values 
            ('${param.name}','${param.level}',${param.classroom_id},${param.trainer_id}) 
        `
    },
    updateLesson(param) {
        return `
            update lesson 
            set
            name = '${param.name}',
            level = '${param.level}',
            classroom_id = ${param.classroom_id},
            trainer_id = ${param.trainer_id}
            where id = ${param.id}
        `
    },
    removeLesson(param) {
        return `
            delete l.*,al.*
            from lesson l
            inner join appoint_lesson al
            on l.id = al.lesson_id
            where l.id = ${param.id}
        `
    },
    countAppointLesson(param) {
        let sql = "select count(*) as total from appoint_lesson where 1=1 ";
        if(param.keywords) {
            sql += ` and name like '%${param.keywords}%'`;
        }
        return sql;
    },
    listAppointLesson(param) {
        let sql = `
            select
                al.id ,
                al.lesson_date , 
                al.start_time ,
                al.end_time,
                l.id lesson_id , 
                l.name lesson_name, 
                l.level lesson_level, 
                c.name classroom_name , 
                t.name trainer_name
            from 
                appoint_lesson al , lesson l , classroom c , trainer t 
            where
                al.lesson_id = l.id and l.classroom_id = c.id and l.trainer_id = t.id
        `;
        
        if(param.keywords) {
            sql += ` and lesson_name like '%${param.keywords}%'`;
        }

        if(param.lesson_date) {
            sql += ` and lesson_date = '${param.lesson_date}'`
        }

        if(param.trainer_id) {
            sql += ` and l.trainer_id = ${param.trainer_id}`
        }

        if(param.lesson_id) {
            sql += ` and l.id = ${param.lesson_id}`
        }
        
        if(param.start!=undefined) {
            let limit = param.limit ? param.limit : 10;
            let start = (param.start - 1) * limit;
            sql += ` limit ${start} , ${limit}` ;
        }

        sql += ' order by lesson_date desc,start_time asc';

        return sql;
    },
    addAppointLesson(param) {
        return `
            insert into appoint_lesson(lesson_id,lesson_date,start_time,end_time) 
            values 
            (${param.lesson_id},'${param.lesson_date}','${param.start_time}','${param.end_time}') 
        `
    },
    updateAppointLesson(param) {
        return `
            update appoint_lesson 
            set
            lesson_id = ${param.lesson_id},
            lesson_date = '${param.lesson_date}',
            start_time = '${param.start_time}',
            end_time = '${param.end_time}'
            where id = ${param.id}
        `
    },
    removeAppointLesson(param) {
        return `
            delete from appoint_lesson where id = ${param.id}
        `
    }


};

