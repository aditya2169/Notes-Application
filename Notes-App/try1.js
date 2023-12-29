const fs=require('fs');

// const book={
//     title:"monk who sold his ferrari",
//     author:"robin sharma"
// }



// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('note1.json',bookJSON);

// const data_buffer=fs.readFileSync('note1.json');  
// const data_json = data_buffer.toString();
// const data=JSON.parse(data_json);
// console.log(data.title);




const data_from_file=fs.readFileSync('note1.json');
const data_in_string=data_from_file.toString();
const data_in_json=JSON.parse(data_in_string);
data_in_json.name="Anish";
data_in_json.school="DPS";

const updated_data=JSON.stringify(data_in_json);

fs.writeFileSync('note1.json',updated_data);




