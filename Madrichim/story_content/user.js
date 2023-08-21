function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5lVHQ5ckzAD":
        Script1();
        break;
      case "62h2W5lacBF":
        Script2();
        break;
      case "5UgUgmmu1C0":
        Script3();
        break;
      case "6NSgvNITD0T":
        Script4();
        break;
      case "6nCMQsihEQd":
        Script5();
        break;
      case "5daiVtOfHL7":
        Script6();
        break;
      case "6KyGefCcHZX":
        Script7();
        break;
      case "6Hc85EXzHXP":
        Script8();
        break;
      case "6hpIYhV8JXV":
        Script9();
        break;
      case "6guBQzC6lke":
        Script10();
        break;
      case "61XGcjRBvAc":
        Script11();
        break;
      case "5kr0oLoscaL":
        Script12();
        break;
      case "6KzOqkE8NvJ":
        Script13();
        break;
      case "6c1Dg02q11D":
        Script14();
        break;
      case "5tTlWrf6dE9":
        Script15();
        break;
      case "5e8agFhYU6A":
        Script16();
        break;
      case "6PopI7VLt9q":
        Script17();
        break;
      case "61tf84SzRt0":
        Script18();
        break;
      case "5hQOE0yl71C":
        Script19();
        break;
      case "64Tb89koUZG":
        Script20();
        break;
      case "6kvNf5Uw37L":
        Script21();
        break;
      case "6aTJGSGGXai":
        Script22();
        break;
      case "6kFchffRJyX":
        Script23();
        break;
      case "5f16TsAIiwa":
        Script24();
        break;
      case "6QZuXWRRWBk":
        Script25();
        break;
      case "65fqA2zEmwH":
        Script26();
        break;
      case "6HmMhTMJqpF":
        Script27();
        break;
      case "66T04NwJ5lG":
        Script28();
        break;
      case "6PJja30Y2Ck":
        Script29();
        break;
      case "6Dr5VMIoIIS":
        Script30();
        break;
      case "68eIFZyiAt4":
        Script31();
        break;
      case "6LKkP81UPPO":
        Script32();
        break;
      case "5v99tPBXusP":
        Script33();
        break;
      case "5afixPoGhAO":
        Script34();
        break;
      case "5lxvVQyzmbc":
        Script35();
        break;
      case "5gzdE8uYFqw":
        Script36();
        break;
      case "5VoEGv5Z55D":
        Script37();
        break;
      case "6A10pPL011A":
        Script38();
        break;
      case "5XeZcOe4lNa":
        Script39();
        break;
      case "6JmiC0BuO3w":
        Script40();
        break;
      case "5jNDisolUpG":
        Script41();
        break;
      case "5obcsZusbUk":
        Script42();
        break;
      case "5jDzUdLnVrs":
        Script43();
        break;
      case "6oI5Z7t2Wqw":
        Script44();
        break;
      case "5k7Bh7cdY2X":
        Script45();
        break;
      case "6I0RdlkkciI":
        Script46();
        break;
      case "6mZop5DEfR6":
        Script47();
        break;
      case "6Cc4KM35GPh":
        Script48();
        break;
      case "5zeryvs91hQ":
        Script49();
        break;
      case "6CA71zXFEei":
        Script50();
        break;
      case "5unU0qbX5ci":
        Script51();
        break;
      case "6Th0LX9n1jG":
        Script52();
        break;
      case "6a2towIrr3b":
        Script53();
        break;
      case "6UsujVgLDPX":
        Script54();
        break;
      case "6aEtRlNuksq":
        Script55();
        break;
      case "6mPddXF1ERR":
        Script56();
        break;
  }
}

function Script1()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script2()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script3()
{
  var player = GetPlayer();
SheetsSet('שם פרטי', player.GetVar('שם_פרטי'));
}

function Script4()
{
  var player = GetPlayer();
SheetsSet('שם משפחה', player.GetVar('שם_משפחה'));
}

function Script5()
{
  var today = new Date();
var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;

SheetsSet('תאריך', dateTime);
}

function Script6()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script7()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script8()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script9()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script10()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script11()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script12()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script13()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script14()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script15()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script16()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script17()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script18()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script19()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script20()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script21()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script22()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script23()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script24()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script25()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script26()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script27()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script28()
{
  var player = GetPlayer();
SheetsSet('המרכזי - חאלב', player.GetVar('תשובה_חאלב'));
}

function Script29()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script30()
{
  var player = GetPlayer();
SheetsSet('המרכזי - חלאב          קהל יעד', player.GetVar('ש_חאלב1'));
}

function Script31()
{
  var player = GetPlayer();
SheetsSet('המרכזי - חלאב          מוצג נוסף', player.GetVar('ש_חאלב2'));
}

function Script32()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script33()
{
  var player = GetPlayer();
SheetsSet('חלון שבטים', player.GetVar('תשובה_שבטים'));
}

function Script34()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script35()
{
  var player = GetPlayer();
SheetsSet('חלון שבטים             קהל יעד', player.GetVar('ש_שבטים1'));
}

function Script36()
{
  var player = GetPlayer();
SheetsSet('חלון שבטים          מוצג נוסף', player.GetVar('ש_שבטים2'));
}

function Script37()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script38()
{
  var player = GetPlayer();
SheetsSet('סידורים', player.GetVar('תשובה_סידורים'));
}

function Script39()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script40()
{
  var player = GetPlayer();
SheetsSet('סידורים                קהל יעד', player.GetVar('ש_סידורים1'));
}

function Script41()
{
  var player = GetPlayer();
SheetsSet('סידורים             מוצג נוסף', player.GetVar('ש_סידורים2'));
}

function Script42()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script43()
{
  var player = GetPlayer();
SheetsSet('אליהו הנביא', player.GetVar('תשובה_מצרים'));
}

function Script44()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script45()
{
  var player = GetPlayer();
SheetsSet('אליהו הנביא       קהל יעד', player.GetVar('ש_מצרים1'));
}

function Script46()
{
  var player = GetPlayer();
SheetsSet('אליהו הנביא        מוצג נוסף', player.GetVar('ש_מצרים2'));
}

function Script47()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script48()
{
  var player = GetPlayer();
SheetsSet('הרמ"א', player.GetVar('תשובה_קרקוב'));
}

function Script49()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script50()
{
  var player = GetPlayer();
SheetsSet('הרמ"א              קהל יעד', player.GetVar('ש_קרקוב1'));
}

function Script51()
{
  var player = GetPlayer();
SheetsSet('הרמ"א                  מוצג נוסף', player.GetVar('ש_קרקוב2'));
}

function Script52()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script53()
{
  var player = GetPlayer();
SheetsSet('ספרי תורה', player.GetVar('תשובה_ספרים'));
}

function Script54()
{
  if(void 0===window.stencilsheets)
{var player=GetPlayer(),
targlink="https://cluelabs.com/stencil/display/widget-sheets-init-v2?authtool=sl&v=1692606700&chart=MTE4Mnw0MTM5fDkwMmU4ZGQ2MmZjZTI0NWE1NTg1NTMxMGNiYjEwZTJm";
xhttp=new XMLHttpRequest,
xhttp.onreadystatechange=function()
{if(4==this.readyState&&200==this.status&&""!=this.responseText)
{var e=this.responseText,t=document.getElementsByTagName("head")[0],
n=document.createElement("script");t.appendChild(n),
n.appendChild(document.createTextNode(e)),window.stencilsheets=!0}},
xhttp.open("GET",targlink,!0),xhttp.send()}
        
}

function Script55()
{
  var player = GetPlayer();
SheetsSet('ספרי תורה             קהל יעד', player.GetVar('ש_ספרים1'));
}

function Script56()
{
  var player = GetPlayer();
SheetsSet('ספרי תורה               מוצג נוסף', player.GetVar('ש_ספרים2'));
}

