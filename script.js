let btns=document.getElementsByTagName('button');
screen=document.getElementsByTagName('input')[0]
txt_val='';
screen.value='';
flag=false;
document.onkeypress=function(e)
{
    if(e.key=='Enter')
    {
        flag=true;
    }
}
screen.addEventListener('keypress',(e)=>{
    console.log(e.code)
    if(e.code=='Enter' || e.code=='NumpadEnter')
    {
        flag=true;
        try{
            txt_val=screen.value;
            txt_val=eval(txt_val);
            screen.value=txt_val;
        }
        catch(err)
        {
            screen.value='Error';
        }
    }
})
for(btn of btns)
{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerText=='=' || flag)
        {
            try{
                txt_val=screen.value;
                txt_val=eval(txt_val);
                screen.value=txt_val;
                flag=false;
            }
            catch(err)
            {
                screen.value='Error';
                flag=false;
            }
        }
        else if(e.target.innerText=='C')
        {
            txt_val='';
            screen.value=txt_val;
        }

        else{
            txt_val+=e.target.innerText;
            screen.value+=e.target.innerText;
        }
        
    })
}