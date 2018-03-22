class Util {
    
        getNow() {
            return this.dateFormat(new Date());
        }

        dateFormat(date) {
            let year = date.getFullYear();
            let month = (date.getMonth()+1)<10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
            let day = date.getDate()<10? '0' + date.getDate() : date.getDate();
            let hour = date.getHours()<10? '0' + date.getHours() : date.getHours();
            let min = date.getMinutes()<10? '0' + date.getMinutes() : date.getMinutes();
            let sec = date.getSeconds()<10? '0' + date.getSeconds() : date.getSeconds();

            let yearStr = [year,month,day].join("-");
            let dayStr = [hour,min,sec].join(":");

            return yearStr + " " + dayStr;
        }
    
    
    
    }

module.exports=Util;