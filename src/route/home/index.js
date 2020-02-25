
const readXlsxFile = require('read-excel-file/node');
const path = require('path')
const qa_data_path = path.resolve('data','qa.xlsx')

function read_excel(){
    return new Promise(resolve=>{
        readXlsxFile(qa_data_path).then((rows)=>{
            resolve(rows)
        })
    },reject=>[
        console.error('error')
    ])
}

const home ={
    read_excel,
}
module.exports = home