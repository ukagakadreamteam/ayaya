let page_content = document.getElementById('interface_content').innerHTML;

document.getElementById('interface_content').innerHTML = "";
document.getElementById('interface_content').outerHTML = "";

document.getElementById('interface_header').outerHTML = `


<div id="popUpContainer"></div>

<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr height="80">
    <td width="170" nowrap><a href="index.php" alt="トップ" title="トップ"><img src="skin/title.png" width=170 height=80 border=0></a></td>
    <td id="header1"><img src="skin/logo.png" width=350 height=40 border=0><br />
    <div id="virtualdir" class="virtualdir">&nbsp;&nbsp;&nbsp;&nbsp;<a href="./?FrontPage"><span class="topicpath-top"><a href="index.php" title="FrontPage" class="link_page_passage" data-mtime="2021-05-30T19:48:11+09:00">Top</a><span class="topicpath-slash">/</span></span><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB">マニュアル</a><span class="topicpath-slash">/</span><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0">関数</a><span class="topicpath-slash">/</span>TOINT</a></div></td>
  </tr>
  <tr>
    <td id="headerbar" width="170" nowrap>&nbsp;&nbsp;<a href="./?FrontPage">トップページへ</a>
    <td id="headerbar">&nbsp;

 [ <a href="index.php?cmd=list" rel="nofollow" >List of pages</a> | <a href="index.php?RecentChanges" rel="nofollow" >Recent changes</a> ]
 &nbsp;
 [This page has been translated by members of the Ukagaka Dream Team. To see the original document, click <a href="">here</a>.]
 

	</td>
  </tr>
</table>

<table border="0" style="width:100%" cellspacing=0 cellpadding=0>
  <tr>
  <td valign="top" id="menubar" width=170>
   <div id="menubar">

			
<h5 id="content_2_0"><a href="./?cmd=edit&amp;page=MenuBar" title="Edit:MenuBar" rel="nofollow">Menu</a></h5>
<ul class="list1 list-indent1"><li><a href="index.php" title="FrontPage" class="link_page_passage" data-mtime="2021-05-30T19:48:11+09:00">Top page</a>
<br />
<br /></li>
<li><a href="https://github.com/ponapalt/yaya-shiori/wiki" rel="nofollow">YAYA distribution page</a>
<ul class="list2 list-indent1"><li><a href="https://github.com/ponapalt/yaya-shiori/releases" rel="nofollow">Download page</a></li>
<li><a href="https://github.com/ponapalt/yaya-shiori/wiki/ChangeLog" rel="nofollow">Update history</a></li>
<li><a href="https://github.com/ponapalt/konnoyayame" rel="nofollow">Konno Yayame</a></li>
<li><a href="https://github.com/nikolat/tama/releases" rel="nofollow">Tool "Tama"</a></li>
<li><a href="https://github.com/Taromati2/yaya-CI-check" rel="nofollow">CI tools</a>
<br />
<br /></li></ul></li>
<li>Getting started
<ul class="list2 list-indent1"><li><a href="index.php?StartUp" title="StartUp" class="link_page_passage" data-mtime="2014-01-04T13:48:55+09:00">What is AYA/YAYA?</a></li>
<li><a href="index.php?StartUp/YAYA%E3%81%A7%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E3%82%92%E4%BD%9C%E3%82%8B" title="StartUp/YAYAでゴーストを作る" class="link_page_passage" data-mtime="2021-06-25T14:42:05+09:00">Creating a new ghost</a></li>
<li><a href="index.php?StartUp/AYA%E3%81%8B%E3%82%89%E3%81%AE%E7%A7%BB%E8%A1%8C" title="StartUp/AYAからの移行" class="link_page_passage" data-mtime="2023-01-24T18:46:45+09:00">Convert from AYA</a></li>
<li><a href="index.php?StartUp/%E9%87%8C%E3%80%85%E3%81%8B%E3%82%89%E3%81%AE%E7%A7%BB%E8%A1%8C" title="StartUp/里々からの移行" class="link_page_passage" data-mtime="2014-01-08T18:54:43+09:00">Convert from Satori</a>
<br />
<br /></li></ul></li>
<li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB" class="link_page_passage" data-mtime="2009-03-29T22:34:39+09:00">Manual</a>
<ul class="list2 list-indent1"><li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E5%9F%BA%E6%9C%AC" title="マニュアル/基本" class="link_page_passage" data-mtime="2023-04-11T23:46:28+09:00">Basic</a></li>
<li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E6%96%87%E6%B3%95" title="マニュアル/文法" class="link_page_passage" data-mtime="2008-03-23T17:03:02+09:00">Grammar</a></li>
<li><a href="index.php?%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E8%BE%9E%E6%9B%B8" class="link_page_passage" data-mtime="2023-01-24T18:50:47+09:00">System dictionary</a></li>
<li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0%E7%94%A8%E9%80%94%E5%88%A5%E4%B8%80%E8%A6%A7" title="マニュアル/関数用途別一覧" class="link_page_passage" data-mtime="2023-04-11T23:35:38+09:00">List of functions by application</a></li>
<li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0" title="マニュアル/関数" class="link_page_passage" data-mtime="2008-06-01T22:50:24+09:00">List of functions by name</a></li>
<li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E3%82%A8%E3%83%A9%E3%83%BC%E5%87%A6%E7%90%86%E9%96%A2%E6%95%B0" title="マニュアル/エラー処理関数" class="link_page_passage" data-mtime="2022-03-06T21:24:19+09:00">Error-handling functions</a>
<br />
<br /></li></ul></li>
<li><a href="index.php?Tips" class="link_page_passage" data-mtime="2008-04-03T19:38:32+09:00">Tips</a>
<ul class="list2 list-indent1"><li><a href="index.php?%E5%9B%B0%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%8D%E3%81%AE%E5%AF%BE%E5%87%A6%E6%B3%95" class="link_page_passage" data-mtime="2016-11-27T21:03:00+09:00">What to do when you need help</a></li>
<li><a href="index.php?%E3%83%88%E3%83%BC%E3%82%AF%E3%81%B9%E3%81%9F%E6%9B%B8%E3%81%8D%E6%94%AF%E6%8F%B4%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA" class="link_page_passage" data-mtime="2012-10-28T13:15:25+09:00">Bare talk writing support library</a></li>
<li><a href="http://ukadev.shillest.net/" rel="nofollow">Development information search</a>
<br />
<br /></li></ul></li>
<li>YAYA for other than SHIORI
<ul class="list2 list-indent1"><li><a href="index.php?YAYA+as+SAORI" class="link_page_passage" data-mtime="2022-10-10T09:09:59+09:00">YAYA as SAORI</a></li>
<li><a href="index.php?YAYA+as+MAKOTO" class="link_page_passage" data-mtime="2021-04-28T20:52:06+09:00">YAYA as MAKOTO</a></li>
<li><a href="index.php?YAYA+as+PLUGIN" class="link_page_passage" data-mtime="2022-10-10T09:24:12+09:00">YAYA as PLUGIN</a>
<br />
<br /></li></ul></li>
<li>Contact & Bulletin board
<ul class="list2 list-indent1"><li><a href="http://ssp.shillest.net/bts/my_view_page.php" rel="nofollow">Maintenance Team BTS</a></li>
<li><a href="index.php?%E3%81%93%E3%81%93%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%93%E3%81%AD%E3%81%88%E3%82%88%E3%83%AD%E3%82%B0" class="link_page_passage" data-mtime="2022-09-20T06:15:18+09:00">"I don't get this part" log</a></li>
<li><a href="index.php?wiki%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E4%BC%9D%E8%A8%80%E6%9D%BF" title="wikiについての伝言板" class="link_page_passage" data-mtime="2023-04-11T23:40:59+09:00">Wiki message board</a>
<br />
<br /></li></ul></li>
<li>Links
<ul class="list2 list-indent1"><li><a href="index.php?%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E9%96%A2%E9%80%A3%E3%83%AA%E3%83%B3%E3%82%AF" class="link_page_passage" data-mtime="2018-11-14T22:25:16+09:00">Ghost-related links</a></li>
<li><a href="index.php?%E6%96%87%E3%82%B4%E3%83%BC%E3%82%B9%E3%83%88%E3%83%AA%E3%83%B3%E3%82%AF" class="link_page_passage" data-mtime="2021-02-27T23:24:44+09:00">AYA ghost link</a>
<br />
<br /></li></ul></li>
<li>Others
<ul class="list2 list-indent1"><li><a href="index.php?Help" title="Help" class="link_page_passage" data-mtime="2006-12-20T12:43:36+09:00">Wiki help</a></li></ul></li></ul>

<div class="jumpmenu"><a href="#navigator">&uarr;</a></div><h5 id="content_2_1">Recently updated pages</h5>
<h5>10 most recent</h5>
<div><strong>2023-04-11</strong>
<ul class="recent_list">
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/GETSETTING" class="link_page_passage" data-mtime="2023-04-11T23:53:01+09:00">マニュアル/関数/GETSETTING</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/GETLASTERROR" class="link_page_passage" data-mtime="2023-04-11T23:52:37+09:00">マニュアル/関数/GETLASTERROR</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/FSEEK" class="link_page_passage" data-mtime="2023-04-11T23:52:09+09:00">マニュアル/関数/FSEEK</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/FOPEN" class="link_page_passage" data-mtime="2023-04-11T23:51:40+09:00">マニュアル/関数/FOPEN</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/GETTYPE" class="link_page_passage" data-mtime="2023-04-11T23:50:24+09:00">マニュアル/関数/GETTYPE</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/GETTYPEEX" class="link_page_passage" data-mtime="2023-04-11T23:50:14+09:00">マニュアル/関数/GETTYPEEX</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E5%9F%BA%E6%9C%AC" class="link_page_passage" data-mtime="2023-04-11T23:46:28+09:00">マニュアル/基本</a></li>
 <li><a href="index.php?wiki%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6%E3%81%AE%E4%BC%9D%E8%A8%80%E6%9D%BF" class="link_page_passage" data-mtime="2023-04-11T23:40:59+09:00">wikiについての伝言板</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0%E7%94%A8%E9%80%94%E5%88%A5%E4%B8%80%E8%A6%A7" class="link_page_passage" data-mtime="2023-04-11T23:35:38+09:00">マニュアル/関数用途別一覧</a></li>
 <li><a href="index.php?%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB/%E9%96%A2%E6%95%B0/HAN2ZEN" class="link_page_passage" data-mtime="2023-04-11T22:37:54+09:00">マニュアル/関数/HAN2ZEN</a></li>
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


<div id="footer">
 Powered by <strong><a href="http://pukiwiki.sourceforge.jp/">PukiWiki</a> 1.5.4</strong> / <strong><a href="http://pukiwiki.cafelounge.net/plus/">PukiWiki Plus!</a></strong>
</div>


`;