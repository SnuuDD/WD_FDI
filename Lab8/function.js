function required(id,message)
{
 txtboxname=document.getElementById(id);
 if(txtboxname.value=='0' || txtboxname.value=='')
 {
  alert(message);
  return false;
 }
 else
 return true;
}

function validateUser()
{
 return required ('username', 'The Username must be entered!') &&
 required ('pass', 'The Password must be entered!');
}