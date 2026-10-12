function adjustTextArea(el){el.style.height="auto";el.style.height=Math.min(300,el.scrollHeight)+"px";}
function formCheck(){
 const form=document.querySelector('form'), status=document.getElementById('labelError');
 const get=name=>form.elements.namedItem(name), value=name=>(get(name)?.value||'').trim();
 const fail=(text,name)=>{status.textContent=text; const el=get(name); if(el&&el.focus)el.focus(); return false;};
 for(const el of form.elements)el.removeAttribute?.('aria-invalid');
 const name=form.name==='registerForm'?'username':'name';
 if(value(name).length<2)return fail('Enter a name with at least two characters.',name);
 if(!value('gender'))return fail('Choose a gender.','gender');
 const email=value('email'), at=email.indexOf('@'), domain=email.slice(at+1);
 if(at<1||at!==email.lastIndexOf('@')||domain.indexOf('.')<1||domain.endsWith('.')||email.includes(' '))return fail('Enter a valid email address.','email');
 if(form.name==='registerForm'){
  if(value('password').length<8)return fail('Use at least 8 characters for the demo password.','password');
  if(value('province')==='province'||!value('province'))return fail('Choose a province.','province');
  if(value('address').length<5)return fail('Enter an address with at least 5 characters.','address');
 }else{
  if(value('subject')==='subject'||!value('subject'))return fail('Choose a subject.','subject');
  if(value('message').length<10)return fail('Enter a message with at least 10 characters.','message');
 }
 if(!get('agree').checked)return fail('Select the agreement to continue.','agree');
 status.textContent=form.name==='registerForm'?'Demo registration validated. No account was created and no information was stored.':'Demo message validated. Nothing was sent or stored.';
 if(get('password'))get('password').value='';
 return false;
}
