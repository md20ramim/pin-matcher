//Generate code
//Generate code
function generate()
{
    var random_num=Math.floor(Math.random()*9999);
    if(random_num<1000)
    {
        random_num=random_num+1000;
    }
    document.getElementById('get_pin').value=random_num;
    document.getElementById('check_pin').value="";
    document.getElementById('matched').style.display='none';
    document.getElementById('not_matched').style.display='none';
}
//Take number as input
//Take number as input
function number_btn(number)
{
    document.getElementById('btn_'+number).addEventListener('click',function(event)
    {
        var x=event.target.innerHTML;
        var y=document.getElementById('check_pin').value;
        document.getElementById('check_pin').value=y+x;
    })
}
number_btn(1);
number_btn(2);
number_btn(3);
number_btn(4);
number_btn(5);
number_btn(6);
number_btn(7);
number_btn(8);
number_btn(9);
number_btn(0);
//remove_last_element
//remove_last_element
document.getElementById('btn_10').addEventListener('click',remove_last);
function remove_last()
{
    var val = document.getElementById('check_pin').value;
    var len = val.length;
    document.getElementById('check_pin').value = val.substring(0,len-1);
}
//clear_all_element
//clear_all_element
document.getElementById('btn_11').addEventListener('click',clear_all)
function clear_all()
{
    document.getElementById('check_pin').value="";
}
//check match or not match
//check match or not match
document.getElementById('sbmt_btn').addEventListener('click',function(){
    var pin=document.getElementById('get_pin').value;
    var inputted_pin=document.getElementById('check_pin').value;
    if(pin==inputted_pin)
    {
        document.getElementById('matched').style.display='block';
        document.getElementById('not_matched').style.display='none';
        document.getElementById('chance').innerHTML='3';
    }
    else
    {
        document.getElementById('not_matched').style.display='block';
        document.getElementById('matched').style.display='none';
        document.getElementById('check_pin').value="";
        checkChance();
    }
})
//chance check
//chance check
function checkChance()
{
    var c=document.getElementById('chance').innerHTML;
    c=parseInt(c);
    c=c-1
    document.getElementById('chance').innerHTML=c;
    if(c==-1)
    {
        document.getElementById('sbmt_btn').style.display='none';
        document.getElementById('action-left').style.display='none';
    }
}