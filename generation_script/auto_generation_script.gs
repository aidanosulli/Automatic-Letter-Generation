//Nested for loops


function createDocument() {
  var headers = Sheets.Spreadsheets.Values.get('1pvEKXk-0So8spd9pjBbQnh5JjiC4OGo3mgCbyL5H-Bo', 'A1:P1');
  var tactics = Sheets.Spreadsheets.Values.get('1pvEKXk-0So8spd9pjBbQnh5JjiC4OGo3mgCbyL5H-Bo', 'A2:P12');
  var templateIds = ['1TnTRFTbzJqWnpoP9DDJN1ib2FkwRFIgijr_QMQiZfec', '1KJLfwLxoa-Ir1y1azXFtHGKZXv814tqrmsq62sE27q8','1IrMnYZu6TLivgov4NMg89R4RWSmO57X5i0nWi0Sis10']; 
  //spanish template first, then English template, then IFMSA Spanish template
  

  
  for (var a = 0; a < tactics.values.length; a++){
  var carta_template = tactics.values[a][15];
    if(carta_template == "Acceptance_Letter_ES"){var templateId = templateIds[0];                                             
    } else if (carta_template == "Acceptance_Letter_EN"){var templateId = templateIds[1]; 
    } else {var templateId = templateIds[2]; 
    }
   
  
    var Nombres = tactics.values[a][2];
    var Apellido_Paterno = tactics.values[a][0];
    var Apellido_Materno = tactics.values[a][1];
    var N_Pasaporte = tactics.values[a][3];
    var Universidad_Origen = tactics.values[a][5];
    var Pais_Origen = tactics.values[a][4];
    var Especialidad_Autorizada = tactics.values[a][13];
    var Fecha_Inicio = tactics.values[a][10];
    var Fecha_Fin = tactics.values[a][11];
    var Nombre_Tutor = tactics.values[a][14];
    var Tipo_Movilidad = tactics.values[a][6];
    var Payment_Status = tactics.values[a][7];
    var Monto_Pago = tactics.values[a][8];
    var full_name = Nombres + ' ' + Apellido_Paterno + ' ' + Apellido_Materno;
   
 
    //Make a copy of the template file
    var documentId = DriveApp.getFileById(templateId).makeCopy().getId();
    
    //Rename the Copied File + Add to Specific Folder
    var targetFolder = DriveApp.getFolderById('1LmigMI6Tb94RC9s9EADhSbQdDGnZ0m3R');
    var file_name = Nombres + ' ' + Apellido_Paterno;
    DriveApp.getFileById(documentId).setName(file_name).moveTo(targetFolder);
    //DriveApp.getFolderById(targetFolder).addFile(file_name);
    //file_name.moveTo(targetFolder);
    //DriveApp.getParents().removeFile(file_name);
    //.addToFolder(targetFolder);
    
    //Get the Document Body as a Variable
    var body = DocumentApp.openById(documentId).getBody();
    
    //Insert All the info
    body.replaceText('##Full_Name ##', full_name)
    body.replaceText('##Nª_Pasaporte##', N_Pasaporte)
    body.replaceText('##Universidad_Origen##', Universidad_Origen)
    body.replaceText('##País_Origen##', Pais_Origen)
    body.replaceText('##Especialidad_Autorizada##', Especialidad_Autorizada)
    body.replaceText('##Fechas_Completas##', Fecha_Inicio + ' – ' + Fecha_Fin)
    body.replaceText('##Nombre Tutor##', Nombre_Tutor)
    body.replaceText('##Tipo_Movilidad##', Tipo_Movilidad)
    body.replaceText('##Payment_Status##',Payment_Status)
    body.replaceText('##Monto_Pago##', Monto_Pago)              
                     
  
    //newFile.addToFolder(targetFolder);
    
    //Append Tactics
    
  }
  
}



  
  
  





