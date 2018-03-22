let mysql = require("mysql");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: '120.24.235.91',
    user: 'root',
    password: 'Nuoyadb_1',
    database: 'test'
})

class HealthService {
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

    listUser(query , cb) {
        pool.getConnection(function (err, connection) {
            let sql = "select * from test";
            if(query.keywords) {
                sql += ` where name like '%${query.keywords}%' or phone like '%${query.keywords}%' `
            }

            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }

    insertUser(user , cb) {
        if(!user.name || !user.age || !user.phone) {
            cb("数据库操作失败");
            return;
        }


        let sql = `
            insert into user(name,gender,age,phone) values ('${user.name}','${user.gender}','${user.age}','${user.phone}')
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
        if(!user.name || !user.age || !user.phone) {
            cb("数据库操作失败");
            return;
        }
        let sql = `
            update test set name='${user.name}',age='${user.age}',phone='${user.phone}' where id = '${user.id}'
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
            delete from  test where id = '${user.id}'
        `;
        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }


    userInfo(user , cb) {
        let sql = `
            select 
        `
    }


    listHealthProduct(product, cb) {
        let sql = `
        select name , price , description , expiryDate from health_product
        `;
        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }

    getHealthProduct(product,cb) {
        let sql = `
                select h.id ,  h.name , h.price , h.description , h.expiryDate 
            from 
                health_product h,
                product_fee_item hf,
                fee_item f
            where
                h.id = hf.product_id and
                f.id = hf.fee_item_id and
                h.id = ${product.id}
        `;
        pool.getConnection(function (err, connection) {
            connection.query(sql, function (error, results, fields) {
                connection.release();
                cb(results);
                if (error) throw error;
            });
        });
    }





//  id bigint unsigned primary key auto_increment,
// name varchar(10),
    createTable(cb) {
        let sql = `
        create table user_health_product(
            user_id bigint,
            product_id bigint,
            buyDate varchar(10)
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

module.exports = HealthService;