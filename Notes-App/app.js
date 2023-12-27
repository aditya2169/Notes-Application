const fs_module=require("fs");

fs_module.writeFileSync('notes.txt','this file was created by nodejs!!!');

fs_module.appendFileSync('notes.txt','  this message was appended!!!');