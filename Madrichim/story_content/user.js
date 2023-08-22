function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6RR37g21Z7i":
        Script1();
        break;
      case "6DgxVaNuZMD":
        Script2();
        break;
      case "5lJE73LLAJd":
        Script3();
        break;
      case "68M4JbCiwTT":
        Script4();
        break;
      case "5dj5Q1s9qR6":
        Script5();
        break;
      case "6XbeNKXpu8l":
        Script6();
        break;
      case "6D4oLLCTcTz":
        Script7();
        break;
      case "5fv2y3j8syS":
        Script8();
        break;
      case "6mZAtXOMYR8":
        Script9();
        break;
      case "6c5OadwFHa3":
        Script10();
        break;
      case "6bSMTu9voTd":
        Script11();
        break;
      case "6JFszOKH09p":
        Script12();
        break;
      case "5jHeZF6F7L1":
        Script13();
        break;
      case "6YxG3Rghvxa":
        Script14();
        break;
      case "5e0jPxV5q5B":
        Script15();
        break;
      case "6idH8HDupyL":
        Script16();
        break;
      case "6nv5w2Yh8HW":
        Script17();
        break;
      case "6hlF7YT5S7Q":
        Script18();
        break;
      case "6UMtTc8Npam":
        Script19();
        break;
      case "5n20ZNRECcV":
        Script20();
        break;
      case "6jytlYcEY7L":
        Script21();
        break;
      case "6WSMnZ3XBE6":
        Script22();
        break;
      case "6mGDnvP6wQ7":
        Script23();
        break;
      case "6DM6yIA8qtT":
        Script24();
        break;
      case "6lZCzLnBmnl":
        Script25();
        break;
      case "5aZWYOvcm1u":
        Script26();
        break;
      case "5dOkCxIUT0P":
        Script27();
        break;
      case "5V80ucfKrLA":
        Script28();
        break;
      case "5YKAS8DQITk":
        Script29();
        break;
      case "6AXVIU7tm4S":
        Script30();
        break;
      case "6Dy4wIflKQp":
        Script31();
        break;
      case "6IwHjnlvI71":
        Script32();
        break;
      case "67F5c5BHyuY":
        Script33();
        break;
      case "6JExrmLBHzs":
        Script34();
        break;
      case "6NrXzfEz6W6":
        Script35();
        break;
      case "5nqO7oSMEIY":
        Script36();
        break;
      case "6mRBkdap828":
        Script37();
        break;
      case "6LZi44ndENh":
        Script38();
        break;
      case "6bdJrYBOAO6":
        Script39();
        break;
      case "60DYKLvMsEU":
        Script40();
        break;
      case "5i1TnKR93Mw":
        Script41();
        break;
      case "6JaS4o14tN8":
        Script42();
        break;
      case "60GltqdQU4q":
        Script43();
        break;
      case "6rE6lkBI89A":
        Script44();
        break;
      case "6Trf2CldPzn":
        Script45();
        break;
      case "68Fuku0x9OH":
        Script46();
        break;
      case "5xGuA2GkTyv":
        Script47();
        break;
      case "6lmj7teVSjY":
        Script48();
        break;
      case "5XMEURDCUBm":
        Script49();
        break;
      case "5ZhhQ5q6tau":
        Script50();
        break;
      case "6gYUJX5SDUI":
        Script51();
        break;
      case "6ApaJ43herb":
        Script52();
        break;
      case "6fowxOrGlgx":
        Script53();
        break;
      case "64ZBqCH2DgE":
        Script54();
        break;
      case "62TvtYNm7c3":
        Script55();
        break;
      case "64HvyzSDNIv":
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

