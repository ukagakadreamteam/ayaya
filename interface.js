//Be warned, my js is really really bad!! If you can improve this, please do, and then teach me how you did it <3 -Zi

let islocal = location.protocol != "https:";
let ishomepage = 1;
if (!(location.pathname.endsWith("AYAYA/index.html") || location.pathname.endsWith("AYAYA/") || location.pathname == "/" || location.pathname == ""))
{
	ishomepage = 0;
}

let localpath = "";

//There's probably a much better way to do this, but what can I say, I don't actually know JavaScript lol
//Get how many subfolders deep we are
function findDeepness()
{
	let deepness = 0;
	let path = location.pathname;
	if (ishomepage)
	{
		deepness = 0;
	}
	else
	{
		if (islocal)
		{
			path = path.split("AYAYA/"); //this is bad and i should fix this at some point - this comment is from the implementation in my site and i don't know what it meant!!! I guess maybe it was because it doesn't translate to other sites? It's kinda dirty
			path = path[1];
		}
		else
		{
			
		}
		path = path.split("/");
		deepness = path.length - 1;
	}
	
	for (let i = 0; i < deepness; i++)
	{
		localpath += "../";
	}
}

findDeepness();

let pathdisplay = ``;

function makePathDisplay()
{
	let output = ``;
	
	output += `
	<div id="virtualdir" class="virtualdir">
	&nbsp;&nbsp;&nbsp;&nbsp;
	<a href="${localpath}index.html">`;
	
	if (ishomepage)
	{
		output += `Top (Front page)`;
	}
	else
	{
		output += `
		<span class="topicpath-top">
			<a href="${localpath}index.html" title="FrontPage" class="link_page_passage">
				Top
			</a>
			<span class="topicpath-slash">/</span>
		</span>`;
		
		let path = location.pathname;
		if (islocal)
		{
			path = path.split("AYAYA/"); //this is bad and i should fix this at some point - this comment is from the implementation in my site and i don't know what it meant!!!
			path = path[1];
		}
		console.log(path);
		path = path.split("/");
		console.log(path);
		
		
		
		let currentpath = "";
		for (piece of path.slice(0,-1))
		{
			output += `
			<a href="${localpath}${currentpath}${piece}.html">
				${piece.toString().replace('.html','')}
			</a>
			<span class="topicpath-slash">/</span>
			`
			currentpath += piece + "/";
		}
		
		output += `${path.slice(-1).toString().replace('.html','')}`;
	}

	
	output += `
		</a>
	</div>`;
	pathdisplay = output;
}
makePathDisplay();


let page_content = document.getElementById('interface_content').innerHTML;

document.getElementById('interface_content').innerHTML = "";
document.getElementById('interface_content').outerHTML = "";

document.getElementById('interface_header').outerHTML = `


<div id="popUpContainer"></div>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr height="80">
    <td width="170" nowrap><a href="${localpath}index.html" alt="Top" title="Top"><img src="${localpath}skin/title.png" width=170 height=80 border=0></a></td>
    <td id="header1"><img src="${localpath}skin/logo.png" width=350 height=40 border=0><br />
    ${pathdisplay}</td>
  </tr>
  <tr>
    <td id="headerbar" width="170" nowrap>&nbsp;&nbsp;<a href="${localpath}index.html">Top page</a>
    <td id="headerbar">&nbsp;

 [ <a href="cmd=list" rel="nofollow" >List of pages</a> | <a href="RecentChanges" rel="nofollow" >Recent changes</a> ]
 &nbsp;
 [This page has been translated by members of the Ukagaka Dream Team. To see the original document, click <a href="">here</a>.]
 

	</td>
  </tr>
</table>

<table border="0" style="width:100%" cellspacing=0 cellpadding=0>
  <tr>
  <td valign="top" id="menubar" width=170>
   <div id="menubar">

			
<h5 id="content_2_0">Menu</h5>
<ul class="list1 list-indent1">
<li><a href="https://github.com/ponapalt/yaya-shiori/wiki" rel="nofollow">YAYA distribution page</a>
<ul class="list2 list-indent1"><li><a href="https://github.com/ponapalt/yaya-shiori/releases" rel="nofollow">Download page</a></li>
<li><a href="https://github.com/ponapalt/yaya-shiori/wiki/ChangeLog" rel="nofollow">Update history</a></li>
<li><a href="https://github.com/ponapalt/konnoyayame" rel="nofollow">Konno Yayame</a></li>
<li><a href="https://github.com/nikolat/tama/releases" rel="nofollow">Tool "Tama"</a></li>
<li><a href="https://github.com/Taromati2/yaya-CI-check" rel="nofollow">CI tools</a>
<br />
<br /></li></ul></li>
<li>Getting started
<ul class="list2 list-indent1"><li><a href="StartUp" title="StartUp" class="link_page_passage">What is AYA/YAYA?</a></li>
<li><a href="${localpath}startup/making_ghosts_with_yaya.html" title="StartUp/Making ghosts with YAYA" class="link_page_passage">Making ghosts with YAYA</a></li>
<li><a href="${localpath}startup/migrate_from_aya.html" title="StartUp/Migrate from AYA" class="link_page_passage">Migrate from AYA</a></li>
<li><a href="${localpath}startup/migrate_from_satori.html" title="StartUp/Migrate from Satori" class="link_page_passage">Migrate from Satori</a>
<br />
<br /></li></ul></li>
<li><a href="${localpath}manual.html" class="link_page_passage">Manual</a>
<ul class="list2 list-indent1"><li><a href="manual/basic.html" class="link_page_passage">Basic</a></li>
<li><a href="${localpath}manual/syntax.html"class="link_page_passage">Syntax</a></li>
<li><a href="${localpath}system_dictionary.html" class="link_page_passage">System dictionary</a></li>
<li><a href="${localpath}manual/function/list_of_functions_by_purpose.html" title="Manual/List of functions by purpose" class="link_page_passage">List of functions by purpose</a></li>
<li><a href="${localpath}manual/function.html" title="Manual/Function" class="link_page_passage">List of functions by name</a></li>
<li><a href="${localpath}manual/error_handling_function.html" title="Manual/Error Handling Function" class="link_page_passage">Error handling function</a>
<br />
<br /></li></ul></li>
<li><a href="${localpath}tips.html" class="link_page_passage">Tips</a>
<ul class="list2 list-indent1"><li><a href="${localpath}%E5%9B%B0%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AE%E5%AF%BE%E5%87%A6%E6%B3%95" class="link_page_passage">What to do when you need help</a></li>
<li><a href="${localpath}%E3%83%88%E3%83%BC%E3%82%AF%E3%81%B9%E3%81%9F%E6%9B%B8%E3%81%8D%E6%94%AF%E6%8F%B4%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA" class="link_page_passage">Bare talk writing support library</a></li>
<li><a href="http://ukadev.shillest.net/" rel="nofollow">Development information search</a>
<br />
<br /></li></ul></li>
<li>YAYA for other than SHIORI
<ul class="list2 list-indent1"><li><a href="${localpath}YAYA+as+SAORI" class="link_page_passage">YAYA as SAORI</a></li>
<li><a href="${localpath}YAYA+as+MAKOTO" class="link_page_passage">YAYA as MAKOTO</a></li>
<li><a href="${localpath}YAYA+as+PLUGIN" class="link_page_passage">YAYA as PLUGIN</a>
<br />
<br /></li></ul></li>
<li>Contact & Bulletin board
<ul class="list2 list-indent1"><li><a href="http://ssp.shillest.net/bts/my_view_page.php" rel="nofollow">Maintenance Team BTS</a></li>
<li><a href="${localpath}%E3%81%93%E3%81%93%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%93%E3%81%AD%E3%81%88%E3%82%88%E3%83%AD%E3%82%B0" class="link_page_passage">"I don't get this part" log</a></li>
<li><a href="${localpath}wiki%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E4%BC%9D%E8%A8%80%E6%9D%BF" title="wikiについての伝言板" class="link_page_passage">Wiki message board</a>
<br />
<br /></li></ul></li>
<li>Links
<ul class="list2 list-indent1"><li><a href="${localpath}%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E9%96%A2%E9%80%A3%E3%83%AA%E3%83%B3%E3%82%AF" class="link_page_passage">Ghost-related links</a></li>
<li><a href="${localpath}%E6%96%87%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF" class="link_page_passage">AYA ghost link</a>
<br />
<br /></li></ul></li>
<li>Others
<ul class="list2 list-indent1"><li><a href="Help" title="Help" class="link_page_passage">Wiki help</a></li></ul></li></ul>

<div class="jumpmenu"><a href="#navigator">&uarr;</a></div><h5 id="content_2_1">Recently updated pages</h5>
<h5>10 most recent</h5>
<div><strong>2023-04-11</strong>
<ul class="recent_list">
 <li><a href="${localpath}manual/function/GETSETTING.html" class="link_page_passage">Manual/Function/GETSETTING</a></li>
 <li><a href="${localpath}manual/function/GETLASTERROR.html" class="link_page_passage">Manual/Function/GETLASTERROR</a></li>
 <li><a href="${localpath}manual/function/FSEEK.html" class="link_page_passage">Manual/Function/FSEEK</a></li>
 <li><a href="${localpath}manual/function/FOPEN.html" class="link_page_passage">Manual/Function/FOPEN</a></li>
 <li><a href="${localpath}manual/function/GETTYPE.html" class="link_page_passage">Manual/Function/GETTYPE</a></li>
 <li><a href="${localpath}manual/function/GETTYPEEX.html" class="link_page_passage">Manual/Function/GETTYPEEX</a></li>
 <li><a href="${localpath}manual/basic.html.html" class="link_page_passage">Manual/Basic</a></li>
 <li><a href="${localpath}wiki%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E4%BC%9D%E8%A8%80%E6%9D%BF.html" class="link_page_passage">wikiについての伝言板</a></li>
 <li><a href="${localpath}manual/function/list_of_functions_by_purpose.html.html" class="link_page_passage">Manual/List of functions by purpose</a></li>
 <li><a href="${localpath}manual/function/HAN2ZEN.html" class="link_page_passage">Manual/Function/HAN2ZEN</a></li>
</ul>
</div>
		<br>
   </div>
   <!--<img src="skin/dummy.gif" width=170 height=10 border=0>-->
  </td>
    <td id="body" valign="top">

` + page_content + `

  </td>
 </tr>
</table>

`;









document.getElementById('interface_footer').innerHTML = `


<div id="interface_footer"></div>

<script src="interface.js"></script>


`;






//From my website. What can I say, I like to be able to browse the files locally too, to make sure they're working properly.
function fixLocalLinks()
{
	let a_links = document.getElementsByTagName("a");
	for (let a_link of a_links)
	{
		if (a_link.href.startsWith("https://ukagakadreamteam.github.io/AYAYA/"))
		{
			a_link.href = a_link.href.replace(".html","");
		}
	}
}

if (!islocal)
{
	fixLocalLinks();
}