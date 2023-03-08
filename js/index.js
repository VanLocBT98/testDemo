var currentTime = document.getElementById("currtime");

// explain: http://thenewcode.com/942/Create-A-Simple-JavaScript-Clock
function zeropadder(n) {
  return (parseInt(n,10) < 10 ? '0' : '')+n;
}

function updateTime(){
  var timeNow= new Date(),
  hh = timeNow.getHours(),
  mm = timeNow.getMinutes(),
  ss = timeNow.getSeconds()
  
  currentTime.innerHTML = hh + "<span>:</span>" + zeropadder(mm) + "<span>:</span>" + zeropadder(ss) ;
  setTimeout(updateTime,1000);
}
updateTime();

let btncheckboxChild = document.querySelector('.checkboxtab3');
let btncheckbox = document.querySelector('.checkBox');

btncheckbox.addEventListener('click', e => {
    if(!btncheckboxChild.checked){
        btncheckboxChild.checked = false
    }else {
      btncheckboxChild.checked = true 
}

})
$(document).ready(function(){
	
	$('ul.tabs1 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs1 li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
let designLinkEl = document.getElementById("DesignLink");
let progLinkEl = document.getElementById("ProgLink");
let musicLinkEl = document.getElementById("SupportLink");
function openTab(tabName) {
    let i;
    let tabContent;
    
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    
    document.getElementById(tabName).style.display = "block";
    if(tabName === 'Design'){
        designLinkEl.classList.add("active-children");
progLinkEl.classList.remove("active-children");
musicLinkEl.classList.remove("active-children");
    }
}

openTab('Design');

// This needs to DRY'ed up so it can be used with a CMS


designLinkEl.addEventListener("click", function(){



  openTab("Design")}, false);
progLinkEl.addEventListener("click", function(){
  openTab("Programming")
progLinkEl.classList.add("active-children");
designLinkEl.classList.remove("active-children");
musicLinkEl.classList.remove("active-children");
}, false);
musicLinkEl.addEventListener("click", function(){
  openTab("Support")
musicLinkEl.classList.add("active-children");
designLinkEl.classList.remove("active-children");
progLinkEl.classList.remove("active-children");
}, false);
