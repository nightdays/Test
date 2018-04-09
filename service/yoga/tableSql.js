let deleteSql = {
    'classroom' : `DROP TABLE IF EXISTS classroom`,
    'lesson' : `DROP TABLE IF EXISTS lesson`,
    'trainer' : `DROP TABLE IF EXISTS trainer`
}
let addSql = {
    "classroom": `
        create  table classroom (
            id int primary key auto_increment,
            name varchar(10)            
        )
    `,
    "lesson": `
        create table lesson (
            id int primary key auto_increment,
            name varchar(10),
            level int,
            classroom_id int,
            trainer_id int
        )
    `
    ,
    "trainer": `
        create table trainer(
            id int primary key auto_increment,
            name varchar(10)
        )
    `
}

module.exports = {
    deleteSql,
    addSql
}