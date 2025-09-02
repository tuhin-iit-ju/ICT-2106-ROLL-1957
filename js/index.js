var pass =prompt("Enter the password");
let a = pass.length;


if(a<8){
    document.writeln("password must be more than 8 character")
}
else{
    var valid =0;

for (let i = 0; i < a; i++) {
    let c= pass[i];
    if(0<=c && c<=9){
      valid =1;
      break;
}

else if('A'<=c && 'z' <=c){
          valid =1;
      break;
}
else if(c=='!' || c=='@' ||c=='#' || c=='$'){
              valid =1;
      break;
}
else {
    valid =0;
}
    }
    

if(valid){
    document.writeln("<br/>"+"valid password")
}
else{
      document.writeln("<br/>"+"invalid password")
}

}

