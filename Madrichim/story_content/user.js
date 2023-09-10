function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5i9ypqeAchl":
        Script1();
        break;
      case "6f75prc0JUR":
        Script2();
        break;
      case "5kJK99fbgPp":
        Script3();
        break;
      case "5WQ8xZDX5lU":
        Script4();
        break;
      case "6Q8LcTdzX7y":
        Script5();
        break;
      case "6KILzIn04Ul":
        Script6();
        break;
      case "5ZlpEDMwOHQ":
        Script7();
        break;
      case "6F6VZFpbwr2":
        Script8();
        break;
      case "6F0qWdpjNOs":
        Script9();
        break;
      case "6JGjBLjWvly":
        Script10();
        break;
      case "6frAF1zm0f8":
        Script11();
        break;
      case "65ugPA3Denb":
        Script12();
        break;
      case "5xaFCN0GBlu":
        Script13();
        break;
      case "6jHd9z58Xf8":
        Script14();
        break;
      case "5n98RRynlda":
        Script15();
        break;
      case "6OwFZltQclg":
        Script16();
        break;
      case "61mXzy6zmkO":
        Script17();
        break;
      case "6n1XkqadLFU":
        Script18();
        break;
      case "64AObhyjSXI":
        Script19();
        break;
      case "5zrJhzQlPJG":
        Script20();
        break;
      case "6XnCaLCq2Ma":
        Script21();
        break;
      case "6SnbTBNZwe4":
        Script22();
        break;
      case "5V2Sp7JGVIn":
        Script23();
        break;
      case "5UmO6H1pUdZ":
        Script24();
        break;
      case "5brGDkM7f1R":
        Script25();
        break;
      case "6MSuMHZJsk6":
        Script26();
        break;
      case "6EeZzMbgnuf":
        Script27();
        break;
      case "5rWAa0PG6DD":
        Script28();
        break;
      case "6SwZtkv4E6z":
        Script29();
        break;
      case "6mulzdlDwz8":
        Script30();
        break;
      case "5rS8aOZ69he":
        Script31();
        break;
      case "6WpoSetCZ5w":
        Script32();
        break;
      case "6lzGzQjR3qF":
        Script33();
        break;
      case "6WysRJ6scUT":
        Script34();
        break;
      case "6pP9Jnp7l2J":
        Script35();
        break;
      case "6TbsWlBZcQA":
        Script36();
        break;
      case "5f8iWfr5CMj":
        Script37();
        break;
      case "5ooQtTmjgvJ":
        Script38();
        break;
      case "6pnyfY6De58":
        Script39();
        break;
      case "5zgmJiIUJoo":
        Script40();
        break;
      case "6WbtdpM7BHJ":
        Script41();
        break;
      case "694Vxafr2yw":
        Script42();
        break;
      case "6GHv3WpSjTM":
        Script43();
        break;
      case "6rWglid6Bhb":
        Script44();
        break;
      case "6fabILKkvOL":
        Script45();
        break;
      case "6U4yArN9EFA":
        Script46();
        break;
      case "6a03ZJAIMbe":
        Script47();
        break;
      case "60nngpjx26Q":
        Script48();
        break;
      case "6qLAiPKLI4V":
        Script49();
        break;
      case "6Chv6TdRcVv":
        Script50();
        break;
      case "6UWI17KhLr0":
        Script51();
        break;
      case "6i5qJ4f1Fdg":
        Script52();
        break;
      case "64l0cewecfE":
        Script53();
        break;
      case "6EG23syX7qw":
        Script54();
        break;
      case "5u1qJkGM8Gc":
        Script55();
        break;
      case "5xRxuaqa06L":
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

