const chokidar = require('chokidar');
const fs = require('fs-extra')
readline = require('readline');
const Logs    =   require('./models/Logs');

require('./database');

var  line="";  
var watcher = chokidar.watch('./logs', {ignored:[/^\./,'./app.js'] , persistent: true});


  watcher
  .on('add', function(path) {gestionFiles(path);console.log('File', path, 'has been added');})
  .on('change', function(path) {gestionFiles(path);})
  .on('unlink', function(path) {console.log('File', path, 'has been removed');})
  .on('error', function(error) {console.error('Error happened', error);})
  function  gestionFiles(path){
    
    var count=1;
    console.log('File', path, 'has been changed');
  
    pat=path.toString();
    file=pat.replace('logs\\',"");
    date=pat.substr(5,10)
    date=date.replace(".","");
    date=date.replace(".","");
    date=date.replace(".","");

    dia=date.substr(0,2)
    mes=date.substr(2,2)
    year=date.substr(4,4)


    //console.log("date : "+date )
    //console.log("dia : "+dia,"mes : "+mes,"año : "+year )
    var reader = readline.createInterface({
      input: fs.createReadStream(path)
    }); 
    
      reader.on('line',function  (line) {
        line=line.toString();
        line=line.replace(" Request to trade ","");
        line=line.replace(": Trade Accept!","")
        line=line.replace(": Trade Cancel Button Press","")
        //count++;
        if(line.indexOf(" Trade Item  Opposite :")>0){
          line=line.replace(" Trade Item  Opposite :","")
          line=line.replace("Ex:",""); 
          line=line.replace("Set:",""); 
          line=line.replace("E:",""); 
          line=line.replace(" ",""); 
          line=line.replace(" ",""); 
          line=line.replace(" ",""); 
          line=line.replace(" ","");
          line=line.replace(" ","");
          line=line.replace(" ","");
          line=line.replace(" ","");
          line=line.replace(" ","");
          line=line.replace(" ","");
          line=line.replace(" ","");
          line=line.replace(" ",""); 
          line=line.replace(" ",""); 
          line=line.replace("->","");
          line=line.replace("to","")
    
          //console.log(line)
          //limites hora
          {var x1=line.indexOf("[");
          var x2=line.indexOf("]");
          var hora= line.substr(x1+1,x2-1);
          line2=line.replace("["+hora+"]","");
    
          var x3=line2.indexOf("[");
          var x4=line2.indexOf("]");
          var cuenta_origen= line2.substr(x3+1,x4-1);
          line3=line2.replace("["+cuenta_origen+"]","");
    
          var x5=line3.indexOf("[");
          var x6=line3.indexOf("]");
          var pj_origen= line3.substr(x5+1,x6-1);
          line4=line3.replace("["+pj_origen+"]","");
    
    
          var x7=line4.indexOf("[");
          var x8=line4.indexOf("]");
          var ip_origen= line4.substr(x7+1,x8-1);
          line5=line4.replace("["+ip_origen+"]","");
    
          var y1=line5.indexOf("(");
          var y2=line5.indexOf(")");
          var trade_locate_origen= line5.substr(y1+1,y2-1);
          line5=line5.replace("("+trade_locate_origen+")","");
    
    
          var x9=line5.indexOf("[");
          var x10=line5.indexOf("]");
          var cuenta_destino= line5.substr(x9+1,x10-1);
          line6=line5.replace("["+cuenta_destino+"]","");
    
          var x11=line6.indexOf("[");
          var x12=line6.indexOf("]");
          var pj_destino= line6.substr(x11+1,x12-1);
          line7=line6.replace("["+pj_destino+"]","");
    
          var x13=line7.indexOf("[");
          var x14=line7.indexOf("]");
          var ip_destino= line7.substr(x13+1,x14-1);
          line8=line7.replace("["+ip_destino+"]","");
    
          var x15=line8.indexOf("(");
          var x16=line8.indexOf(")");
          var trade_locate_destino= line8.substr(x15+1,x16-1);
          line9=line8.replace("("+trade_locate_destino+")(Item","");
    
          var x17=line9.indexOf(":");
          var x18=line9.indexOf("/Serial:");
          var item= line9.substr(x17+1,x18-1);
          line10=line9.replace(":"+item+"/Serial","");
    
          var x19=line10.indexOf(":");
          var x20=line10.indexOf("[");
          var serial= line10.substr(x19+1,x20-1);
          line11=line10.replace(":"+serial,"");
    
          var x21=line11.indexOf("[");
          var x22=line11.indexOf("]");
          var nivel= line11.substr(x21+1,x22-1);
          line12=line11.replace("["+nivel+"]","");
    
          var x23=line12.indexOf("[");
          var x24=line12.indexOf("]");
          var luck= line12.substr(x23+1,x24-1);
          line13=line12.replace("["+luck+"]","");
    
          var x25=line13.indexOf("[");
          var x26=line13.indexOf("]");
          var skill= line13.substr(x25+1,x26-1);
          line14=line13.replace("["+skill+"]","");
          
    
          var x27=line14.indexOf("[");
          var x28=line14.indexOf("]");
          var opt= line14.substr(x27+1,x28-1);
          line15=line14.replace("["+opt+"]","");
    
          var x29=line15.indexOf("[");
          var x30=line15.indexOf("]");
          var ex= line15.substr(x29+1,x30-1);
          line16=line15.replace("["+ex+"]","");
    
    
          var x31=line16.indexOf("[");
          var x32=line16.indexOf("]");
          var acc= line16.substr(x31+1,x32-1);
          line17=line16.replace("["+acc+"]","");
    
    
          var x33=line17.indexOf("[");
          var x34=line17.indexOf("]");
          var harmony =line17.substr(x33+1,x34-1);
          line18=line17.replace("["+harmony+"]","");}
          
          //line5 = line.split('[')
          //console.log("File:"+file+"Date: "+date+" "+hora, " cuenta_origen: "+cuenta_origen, "pj_origen: "+pj_origen,"ip_origen: "+ip_origen, "trade_locate: "+trade_locate_origen,
          //"cuenta_destino: "+cuenta_destino, "pj_destino: "+pj_destino,"ip_destino: "+ip_destino, "trade_locate: "+trade_locate_destino, 
          //"Item:",item , "Serial: "+serial, "Nivel:"+nivel,"Luck:"+luck, "Skill:"+skill,"Opt:"+opt, "Ex:"+ex,"ACC:"+acc,"Harmony:"+harmony,"  "+count);
          //console.log(line, " ", count)
            
            hora=hora.replace(":","");
            hora=hora.replace(":","");
            hora=hora.replace(":","");

            let hora_=hora.substr(0,2)
            let minuto_=hora.substr(2,2)
            let segundo_=hora.substr(4,2)
          
            fileindex=file;
            fileindex=fileindex.replace(" ","");
            fileindex=fileindex.replace(" ","");
            fileindex=fileindex.replace(" ","");
            fileindex=fileindex.replace(" ","");
            fileindex=fileindex.replace("-","");
            fileindex=fileindex.replace("_","");
            fileindex=fileindex.replace("_","");
            fileindex=fileindex.replace("_","");
            fileindex=fileindex.replace("_","");
            fileindex=fileindex.replace("_","");
            fileindex=fileindex.replace("_","");
            fileindex=fileindex.replace(".","");
            fileindex=fileindex.replace(".","");
            fileindex=fileindex.replace(".","");
            fileindex=fileindex.replace(".","");
            fileindex=fileindex.replace(".","");
            fileindex=fileindex.replace(".","");

            var id_1=count+fileindex;      
            let date_= new Date(year,mes,dia,hora_,minuto_,segundo_);
                   
            query={file,id_1,date_,cuenta_origen,pj_origen,pj_origen,ip_origen,trade_locate_origen,cuenta_destino, pj_destino,ip_destino,trade_locate_destino,item,serial,nivel,skill,opt,ex,acc,harmony};
            //console.log(query)
            const newLog  =  new Logs(query);
            //console.log(query)   
            
            newLog.save(function(err){
              if(err){
                console.log("Insert con error")
              }
              else{
                console.log("Registro ingresado")
              }
            })
          
          
          
         
           
        }
        
        
          count++
      })
  }
