function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5YhjD0J4JLh":
        Script1();
        break;
      case "5iXVzpJUNzk":
        Script2();
        break;
      case "6WieyqDzqYT":
        Script3();
        break;
      case "6iyJXyui9Gt":
        Script4();
        break;
      case "6Fe2QkhxsCR":
        Script5();
        break;
      case "5zmWq0OoPSV":
        Script6();
        break;
      case "6JEwQpVa25S":
        Script7();
        break;
      case "6bbjxQYvohN":
        Script8();
        break;
      case "6fIJj3bV6GZ":
        Script9();
        break;
      case "5bw7hVIdTZt":
        Script10();
        break;
      case "6IQNeH3dVvU":
        Script11();
        break;
      case "6O7qKHI5reD":
        Script12();
        break;
      case "6FPQ3MGSsmR":
        Script13();
        break;
      case "5dEukVNz5GO":
        Script14();
        break;
      case "5ZQRcRfTBgI":
        Script15();
        break;
      case "6Z9jL95jIVT":
        Script16();
        break;
      case "5cFQoFOlfJd":
        Script17();
        break;
      case "5hMCiaSVw9P":
        Script18();
        break;
      case "66z0T77xpaR":
        Script19();
        break;
      case "5dyE8yP14Af":
        Script20();
        break;
      case "61vXuGtkZXd":
        Script21();
        break;
      case "5pM6fLJJNyB":
        Script22();
        break;
      case "6OQ2jMqcitZ":
        Script23();
        break;
      case "6XLu9GOhJ3R":
        Script24();
        break;
      case "5s8Kj7ertyn":
        Script25();
        break;
      case "5lETVCCmFFh":
        Script26();
        break;
      case "6fovAAYNupV":
        Script27();
        break;
      case "6nIOX3pPHdx":
        Script28();
        break;
      case "69NseVS3zAZ":
        Script29();
        break;
      case "6EnRj6LiApB":
        Script30();
        break;
      case "5pYb3c8X9fP":
        Script31();
        break;
      case "6NZBpdo0lWk":
        Script32();
        break;
      case "6HZxFVyiaRS":
        Script33();
        break;
      case "6QdGmQqibzC":
        Script34();
        break;
      case "5jjB1IucQyl":
        Script35();
        break;
      case "6oQ24PwV1KV":
        Script36();
        break;
      case "6fHyQPbdklv":
        Script37();
        break;
      case "5fqkWuLJRCI":
        Script38();
        break;
      case "6Pcl1gxe4zS":
        Script39();
        break;
      case "5fKyukVsDsF":
        Script40();
        break;
      case "62j9xpRvEWj":
        Script41();
        break;
      case "5jUhy2WUKUp":
        Script42();
        break;
      case "5uQ7bqzPYy1":
        Script43();
        break;
      case "6G5hqQQcqwc":
        Script44();
        break;
      case "5vQf2JbkgOd":
        Script45();
        break;
      case "6jk3DBgGelj":
        Script46();
        break;
      case "67A5DsuRWLD":
        Script47();
        break;
      case "5fwefvkKfj6":
        Script48();
        break;
      case "6PHGywhFiGD":
        Script49();
        break;
      case "6GjlCR27RdQ":
        Script50();
        break;
      case "6Gco1EESNAn":
        Script51();
        break;
      case "6H5FomveQfK":
        Script52();
        break;
      case "63uW14e4BeA":
        Script53();
        break;
      case "5u2HkuouLel":
        Script54();
        break;
      case "6VawwzRBw7j":
        Script55();
        break;
      case "6CG1Z5Kc4cU":
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

