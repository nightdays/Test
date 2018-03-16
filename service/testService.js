let mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: '120.24.235.91',
    user: 'root',
    password: 'Nuoyadb_1',
    database: 'test'
})


class TestService {
    test() {}

    getTables(cb) {
        pool.getConnection(function (err, connection) {

            connection.query("show tables", function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });

        });
    }

    listUser(cb) {
        pool.getConnection(function (err, connection) {
            connection.query("select * from test", function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }

    insertUser(user , cb) {
        let sql = `
            insert into test(name,age,phone) values ('${user.name}','${user.age}','${user.phone}')
        `;

        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }

    updateUser(user , cb) {
        let sql = `
            update test set name='${user.name}',age='${user.age}',phone='${user.phone}' where id = ${user.id}
        `;
        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }

    deleteUser(user , cb) {
        let sql = `
            delete from  test where id = ${user.id}
        `;
        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }



    createTable(cb) {
        let sql = `
        create table test(
           id bigint unsigned primary key auto_increment,
           name varchar(10),
           age varchar(3),
           phone varchar(11)
        )
       `;

        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });

       
    }
}

module.exports = TestService;