var XLS = require('xlsjs');
function ExcelDataReader(excelfile) {
    console.log("==========>" + excelfile)
    if (typeof excelfile === 'string') {
        var workbook = XLS.readFile(excelfile);
        var sheet_name_list = workbook.SheetNames;
        // console.log(sheet_name_list)
        var data = [];
        sheet_name_list.forEach(function (y) {
            // console.log(y)
            var worksheet = workbook.Sheets[y];
            var headers = {};

            for (z in worksheet) {
                //console.log(z, z[0], z.substring(0,1), parseInt(z.substring(1)),worksheet[z].v)
                if (z[0] === '!') continue;
                //parse out the column, row, and value
                var col = z.substring(0, 1);
                var row = parseInt(z.substring(1));
                var value = worksheet[z].v;

                //store header names
                if (row == 1) {
                    headers[col] = value;
                    continue;
                }

                if (!data[row]) data[row] = {};
                data[row][headers[col]] = value;
            }
            //drop those first two rows which are empty

        });
        data.shift();
        data.shift();
        //   console.log("Excel Reader", data);
        return data;
    }

}
module.exports = {

    ExcelDataReader: ExcelDataReader
}