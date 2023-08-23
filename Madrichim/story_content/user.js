function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PAR19St8cD":
        Script1();
        break;
      case "639GNTkJYjb":
        Script2();
        break;
      case "6h7gMhlsB93":
        Script3();
        break;
      case "69NAqzJzTA3":
        Script4();
        break;
      case "6m1TrAA03Ce":
        Script5();
        break;
      case "5n5FWERzV63":
        Script6();
        break;
      case "6OGaemFj4P1":
        Script7();
        break;
      case "5o3CcyOIFAD":
        Script8();
        break;
      case "6QnNrrFGdpL":
        Script9();
        break;
      case "6bwSZE9iTCK":
        Script10();
        break;
      case "6UDyC4TETI8":
        Script11();
        break;
      case "63XSH5CUXwR":
        Script12();
        break;
      case "6TWVYu3JY4s":
        Script13();
        break;
      case "6EdmAREBBbX":
        Script14();
        break;
      case "6L3vMRUHEux":
        Script15();
        break;
      case "6qTfY2o4jtI":
        Script16();
        break;
      case "6HL1gxKpVeo":
        Script17();
        break;
      case "68ZLgcnZmGR":
        Script18();
        break;
      case "65vJ8ZzvHfy":
        Script19();
        break;
      case "5lbgagDZgCP":
        Script20();
        break;
      case "5oCRjKYHnuX":
        Script21();
        break;
      case "5iyA9Iqbwtd":
        Script22();
        break;
      case "6B6lHCCihjc":
        Script23();
        break;
      case "6Q1ZztOKmcB":
        Script24();
        break;
      case "6oJBr0I72dJ":
        Script25();
        break;
      case "6LnGippC22G":
        Script26();
        break;
      case "60BT0EQB9JW":
        Script27();
        break;
      case "5iRbZUQZpcn":
        Script28();
        break;
      case "6Cu92Jm95iN":
        Script29();
        break;
      case "6bVAKXmuW41":
        Script30();
        break;
      case "6o0jihpL6rh":
        Script31();
        break;
      case "65F2ehrrEXJ":
        Script32();
        break;
      case "5scrEEpHkX4":
        Script33();
        break;
      case "65eWJUd4Ug6":
        Script34();
        break;
      case "5W5r1PMaL3v":
        Script35();
        break;
      case "6Vc9yu1L65T":
        Script36();
        break;
      case "6CUNqpFYyo0":
        Script37();
        break;
      case "5wmWmhNEGmh":
        Script38();
        break;
      case "6K26Z6kNqsi":
        Script39();
        break;
      case "6fRcGOVPGuF":
        Script40();
        break;
      case "6OFESgnTiar":
        Script41();
        break;
      case "65LTLacrbCC":
        Script42();
        break;
      case "6S1VuNqUZNv":
        Script43();
        break;
      case "6lj26KNCOF1":
        Script44();
        break;
      case "6VorjXz0Tho":
        Script45();
        break;
      case "5fOBW6ziYfz":
        Script46();
        break;
      case "5iURTMEOXhu":
        Script47();
        break;
      case "676VDPUU66l":
        Script48();
        break;
      case "6CmNIWjrZ5k":
        Script49();
        break;
      case "5gVs9ijSDik":
        Script50();
        break;
      case "5aX3HdB79AR":
        Script51();
        break;
      case "5nF5rnLYXic":
        Script52();
        break;
      case "6Ao4W674aex":
        Script53();
        break;
      case "6Gb49476ISd":
        Script54();
        break;
      case "6jObAbN7DpH":
        Script55();
        break;
      case "6Rwn6dbje7j":
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

