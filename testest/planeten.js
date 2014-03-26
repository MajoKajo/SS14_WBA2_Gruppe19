




<!DOCTYPE html>
<html class="  ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>SS14_WBA2_Gruppe19/Aufgabe_1 wba2/planeten.js at master · MajoKajo/SS14_WBA2_Gruppe19</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="MajoKajo/SS14_WBA2_Gruppe19" name="twitter:title" /><meta content="Contribute to SS14_WBA2_Gruppe19 development by creating an account on GitHub." name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/5650110?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/5650110?s=400" property="og:image" /><meta content="MajoKajo/SS14_WBA2_Gruppe19" property="og:title" /><meta content="https://github.com/MajoKajo/SS14_WBA2_Gruppe19" property="og:url" /><meta content="Contribute to SS14_WBA2_Gruppe19 development by creating an account on GitHub." property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="8B06DBA0:5FEB:294ED3:5332CDDE" name="octolytics-dimension-request_id" /><meta content="5650110" name="octolytics-actor-id" /><meta content="MajoKajo" name="octolytics-actor-login" /><meta content="0b18356e3ec1928cec47b6d52a44b0b1483e9fe0ce2e7b5a3822cfdba5d6db10" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="aEIeRe2WjY47VSxL3LEiIGpWsXyb0MAqSxxOkLSqD30=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-337b621337a4eb1e816f9bb51b2443666e8f9849.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-31b08fae49b89c818aa4dbc87125eefd94e57f41.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-1eb4805d296158ea875ffc5fa959a11f5a3cdf13.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-8a59025e1ac4eea1c22b37d3f9f8d135e8079caa.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="d5ec715c58cea7e7ef264520cf354059">

        <link data-pjax-transient rel='permalink' href='/MajoKajo/SS14_WBA2_Gruppe19/blob/f76d1b7a8db3bbc150753aad1fcfca0b979d06bc/Aufgabe_1%20wba2/planeten.js'>

  <meta name="description" content="Contribute to SS14_WBA2_Gruppe19 development by creating an account on GitHub." />

  <meta content="5650110" name="octolytics-dimension-user_id" /><meta content="MajoKajo" name="octolytics-dimension-user_login" /><meta content="17903778" name="octolytics-dimension-repository_id" /><meta content="MajoKajo/SS14_WBA2_Gruppe19" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="17903778" name="octolytics-dimension-repository_network_root_id" /><meta content="MajoKajo/SS14_WBA2_Gruppe19" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/MajoKajo/SS14_WBA2_Gruppe19/commits/master.atom" rel="alternate" title="Recent Commits to SS14_WBA2_Gruppe19:master" type="application/atom+xml" />

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-gotokey="n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey=" s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="MajoKajo"
      data-repo="MajoKajo/SS14_WBA2_Gruppe19"
      data-branch="master"
      data-sha="e01af508fc219c07d3a5f10beeead98549bce7d5"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="MajoKajo/SS14_WBA2_Gruppe19" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    


  <ul id="user-links">
    <li>
      <a href="/MajoKajo" class="name">
        <img alt="MajoKajo" class=" js-avatar" data-user="5650110" height="20" src="https://avatars2.githubusercontent.com/u/5650110?s=140" width="20" /> MajoKajo
      </a>
    </li>

    <li class="new-menu dropdown-toggle js-menu-container">
      <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
        <span class="octicon octicon-plus"></span>
        <span class="dropdown-arrow"></span>
      </a>

      <div class="new-menu-content js-menu-content">
      </div>
    </li>

    <li>
      <a href="/settings/profile" id="account_settings"
        class="tooltipped tooltipped-s"
        aria-label="Account settings ">
        <span class="octicon octicon-tools"></span>
      </a>
    </li>
    <li>
      <a class="tooltipped tooltipped-s" href="/logout" data-method="post" id="logout" aria-label="Sign out">
        <span class="octicon octicon-log-out"></span>
      </a>
    </li>

  </ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="MajoKajo/SS14_WBA2_Gruppe19">This repository</span>
    </li>
      <li>
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
      <li>
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/settings/collaboration"><span class="octicon octicon-person-add"></span> New collaborator</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="aEIeRe2WjY47VSxL3LEiIGpWsXyb0MAqSxxOkLSqD30=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="17903778" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/MajoKajo/SS14_WBA2_Gruppe19/watchers">
        5
      </a>
      <span class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye-unwatch"></span>
          Unwatch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for conversations in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for conversations in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  

  <div class="js-toggler-container js-social-container starring-container ">
    <a href="/MajoKajo/SS14_WBA2_Gruppe19/unstar"
      class="minibutton with-count js-toggler-target star-button starred"
      aria-label="Unstar this repository" title="Unstar MajoKajo/SS14_WBA2_Gruppe19" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
    </a>

    <a href="/MajoKajo/SS14_WBA2_Gruppe19/star"
      class="minibutton with-count js-toggler-target star-button unstarred"
      aria-label="Star this repository" title="Star MajoKajo/SS14_WBA2_Gruppe19" data-remote="true" data-method="post" rel="nofollow">
      <span class="octicon octicon-star"></span><span class="text">Star</span>
    </a>

      <a class="social-count js-social-count" href="/MajoKajo/SS14_WBA2_Gruppe19/stargazers">
        0
      </a>
  </div>

  </li>


        <li>
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of MajoKajo/SS14_WBA2_Gruppe19 to your account" aria-label="Fork your own copy of MajoKajo/SS14_WBA2_Gruppe19 to your account" rel="facebox nofollow">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/network" class="social-count">0</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/MajoKajo" class="url fn" itemprop="url" rel="author"><span itemprop="title">MajoKajo</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/MajoKajo/SS14_WBA2_Gruppe19" class="js-current-repository js-repo-home-link">SS14_WBA2_Gruppe19</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/MajoKajo/SS14_WBA2_Gruppe19" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /MajoKajo/SS14_WBA2_Gruppe19">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /MajoKajo/SS14_WBA2_Gruppe19/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /MajoKajo/SS14_WBA2_Gruppe19/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped tooltipped-w" aria-label="Wiki">
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_wiki /MajoKajo/SS14_WBA2_Gruppe19/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /MajoKajo/SS14_WBA2_Gruppe19/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /MajoKajo/SS14_WBA2_Gruppe19/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /MajoKajo/SS14_WBA2_Gruppe19/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


      <div class="sunken-menu-separator"></div>
      <ul class="sunken-menu-group">
        <li class="tooltipped tooltipped-w" aria-label="Settings">
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/settings"
            class="sunken-menu-item" data-pjax aria-label="Settings">
            <span class="octicon octicon-tools"></span> <span class="full-word">Settings</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </a>
        </li>
      </ul>
  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=push">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/MajoKajo/SS14_WBA2_Gruppe19.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/MajoKajo/SS14_WBA2_Gruppe19.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=push">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="git@github.com:MajoKajo/SS14_WBA2_Gruppe19.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:MajoKajo/SS14_WBA2_Gruppe19.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=push">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/MajoKajo/SS14_WBA2_Gruppe19" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/MajoKajo/SS14_WBA2_Gruppe19" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="github-windows://openRepo/https://github.com/MajoKajo/SS14_WBA2_Gruppe19" class="minibutton sidebar-button" title="Save MajoKajo/SS14_WBA2_Gruppe19 to your computer and use it in GitHub Desktop." aria-label="Save MajoKajo/SS14_WBA2_Gruppe19 to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/MajoKajo/SS14_WBA2_Gruppe19/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download MajoKajo/SS14_WBA2_Gruppe19 as a zip file"
                   title="Download MajoKajo/SS14_WBA2_Gruppe19 as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:9b14deb0b3f8ed48bfe48cf1a95ac125 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/MajoKajo/SS14_WBA2_Gruppe19/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/MajoKajo/SS14_WBA2_Gruppe19/blob/master/Aufgabe_1%20wba2/planeten.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <form accept-charset="UTF-8" action="/MajoKajo/SS14_WBA2_Gruppe19/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="aEIeRe2WjY47VSxL3LEiIGpWsXyb0MAqSxxOkLSqD30=" /></div>
            <span class="octicon octicon-git-branch-create select-menu-item-icon"></span>
            <div class="select-menu-item-text">
              <h4>Create branch: <span class="js-new-item-name"></span></h4>
              <span class="description">from ‘master’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="master" />
            <input type="hidden" name="path" id="path" value="Aufgabe_1 wba2/planeten.js" />
          </form> <!-- /.select-menu-item -->

      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MajoKajo/SS14_WBA2_Gruppe19" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">SS14_WBA2_Gruppe19</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/MajoKajo/SS14_WBA2_Gruppe19/tree/master/Aufgabe_1%20wba2" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">Aufgabe_1 wba2</span></a></span><span class="separator"> / </span><strong class="final-path">planeten.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="Aufgabe_1 wba2/planeten.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://2.gravatar.com/avatar/3036bfcf58876752e16f89bab5acdc6f?d=https%3A%2F%2Fa248.e.akamai.net%2Fassets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png&amp;r=x&amp;s=140" width="24" />
    <span class="author"><span rel="author">RosaDoener</span></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-03-23T15:57:14+01:00" title="2014-03-23 15:57:14">March 23, 2014</time>
    <div class="commit-title">
        <a href="/MajoKajo/SS14_WBA2_Gruppe19/commit/f76d1b7a8db3bbc150753aad1fcfca0b979d06bc" class="message" data-pjax="true" title="kommentare etc">kommentare etc</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>0</strong> contributors</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>68 lines (61 sloc)</span>
          <span class="meta-divider"></span>
        <span>2.658 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="github-windows://openRepo/https://github.com/MajoKajo/SS14_WBA2_Gruppe19?branch=master&amp;filepath=Aufgabe_1%20wba2%2Fplaneten.js" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
                <a class="minibutton js-update-url-with-hash"
                   href="/MajoKajo/SS14_WBA2_Gruppe19/edit/master/Aufgabe_1%20wba2/planeten.js"
                   data-method="post" rel="nofollow" data-hotkey="e">Edit</a>
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/raw/master/Aufgabe_1%20wba2/planeten.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/MajoKajo/SS14_WBA2_Gruppe19/blame/master/Aufgabe_1%20wba2/planeten.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/MajoKajo/SS14_WBA2_Gruppe19/commits/master/Aufgabe_1%20wba2/planeten.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

            <a class="minibutton danger empty-icon"
               href="/MajoKajo/SS14_WBA2_Gruppe19/delete/master/Aufgabe_1%20wba2/planeten.js"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">

          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">http</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;http&#39;</span><span class="p">);</span></div><div class='line' id='LC2'><span class="kd">var</span> <span class="nx">server</span> <span class="o">=</span> <span class="nx">http</span><span class="p">.</span><span class="nx">createServer</span><span class="p">();</span></div><div class='line' id='LC3'><br/></div><div class='line' id='LC4'><span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;url&#39;</span><span class="p">);</span></div><div class='line' id='LC5'><span class="kd">var</span> <span class="nx">querystring</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">&#39;querystring&#39;</span><span class="p">);</span></div><div class='line' id='LC6'><span class="c1">//json array erstellen</span></div><div class='line' id='LC7'><span class="kd">var</span> <span class="nx">planeten</span> <span class="o">=</span> <span class="p">[</span> </div><div class='line' id='LC8'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Merkur&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;4.878 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;46 - 70 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC9'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Venus&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;12.103,6 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;107,5 - 108,9 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC10'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Erde&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;12.765,28 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;147 - 152 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC11'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Mars&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;6.794,4 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;206,7 - 249,2 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC12'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Jupiter&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;142.984 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;740 - 815 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC13'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Saturn&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;120.536 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;1343 - 1509 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC14'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Uranus&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;51.118 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;2.735 - 3.005 Mio km&quot;</span><span class="p">},</span></div><div class='line' id='LC15'><span class="p">{</span><span class="s2">&quot;Planet&quot;</span><span class="o">:</span><span class="s2">&quot;Neptun&quot;</span><span class="p">,</span> <span class="s2">&quot;Durchmesser&quot;</span><span class="o">:</span><span class="s2">&quot;49.532 km&quot;</span><span class="p">,</span> <span class="s2">&quot;Entfernung_Sonne&quot;</span><span class="o">:</span><span class="s2">&quot;4.456 - 4.537 Mio km&quot;</span><span class="p">}</span></div><div class='line' id='LC16'><span class="p">];</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><span class="nx">server</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;request&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">req</span><span class="p">,</span> <span class="nx">res</span><span class="p">){</span></div><div class='line' id='LC19'><span class="c1">//startanzeige in der konsole</span></div><div class='line' id='LC20'><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;HTTP-Request gestartet&#39;</span><span class="p">)</span></div><div class='line' id='LC21'><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;HTTP-Methode: &#39;</span><span class="o">+</span><span class="nx">req</span><span class="p">.</span><span class="nx">method</span><span class="p">);</span></div><div class='line' id='LC22'><br/></div><div class='line' id='LC23'><span class="kd">var</span> <span class="nx">body</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC24'><span class="c1">//zwischenspeichern im body   </span></div><div class='line' id='LC25'><span class="nx">req</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">){</span> </div><div class='line' id='LC26'><span class="nx">body</span> <span class="o">+=</span> <span class="nx">data</span><span class="p">.</span><span class="nx">toString</span><span class="p">();</span> </div><div class='line' id='LC27'><span class="p">});</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="nx">req</span><span class="p">.</span><span class="nx">on</span><span class="p">(</span><span class="s1">&#39;end&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC30'><span class="c1">//body daten in json objekt durch übergabe in daten dann push</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">daten</span> <span class="o">=</span> <span class="nx">querystring</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">body</span><span class="p">);</span></div><div class='line' id='LC32'><span class="c1">//damit keine leere zeile erstellt wird    </span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">daten</span><span class="p">.</span><span class="nx">Planet</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">){</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">planeten</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">daten</span><span class="p">);</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC36'><span class="c1">//in pfad wird eingabe gespeichert(zur späteren überprüfung)</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pfad</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">req</span><span class="p">.</span><span class="nx">url</span><span class="p">).</span><span class="nx">pathname</span><span class="p">;</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="s1">&#39;Pfad: &#39;</span><span class="o">+</span><span class="nx">pfad</span><span class="p">);</span></div><div class='line' id='LC40'><span class="c1">//fehlerausgabe bei falscher eingabe des pfades</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">pfad</span> <span class="o">!=</span> <span class="s2">&quot;/Planeten&quot;</span><span class="p">){</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">writeHead</span><span class="p">(</span><span class="mi">504</span><span class="p">,</span> <span class="s2">&quot;OK&quot;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;Content-Type&#39;</span><span class="o">:</span> <span class="s1">&#39;text/html&#39;</span><span class="p">});</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s2">&quot;504 Fehlercode... Sry!&quot;</span><span class="p">)</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC46'><span class="c1">//erstellen der tabelle</span></div><div class='line' id='LC47'><span class="c1">//erst kopf</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">writeHead</span><span class="p">(</span><span class="mi">200</span><span class="p">,</span> <span class="s2">&quot;OK&quot;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;Content-Type&#39;</span><span class="o">:</span> <span class="s1">&#39;text/html&#39;</span><span class="p">});</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s2">&quot;&lt;table border=1&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s2">&quot;&lt;tr&gt;&lt;th&gt;Planeten&lt;/th&gt;&lt;th&gt;Durchmesser&lt;/th&gt;&lt;th&gt;Entfernung Sonne&lt;/th&gt;&lt;/tr&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC51'><span class="c1">//mit foreach schleife der tbody</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">planeten</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">planet</span><span class="p">){</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s2">&quot;&lt;tr&gt;&lt;td&gt;&quot;</span> <span class="o">+</span><span class="nx">planet</span><span class="p">.</span><span class="nx">Planet</span><span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&lt;td&gt;&quot;</span> <span class="o">+</span><span class="nx">planet</span><span class="p">.</span><span class="nx">Entfernung_Sonne</span><span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&lt;td&gt;&quot;</span> <span class="o">+</span><span class="nx">planet</span><span class="p">.</span><span class="nx">Durchmesser</span><span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&lt;/tr&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC55'><span class="c1">//erstellen der eingabefelder und button</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s2">&quot;&lt;/table&gt;&quot;</span><span class="p">);</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;&lt;form action=&quot;/Planeten&quot; method=&quot;post&quot;&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;Planet: &lt;input type=&quot;text&quot; name=&quot;Planet&quot;&gt;&lt;br&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;Durchmesser: &lt;input type=&quot;text&quot; name=&quot;Durchmesser&quot;&gt;&lt;br&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;Entfernung_Sonne: &lt;input type=&quot;text&quot; name=&quot;Entfernung_Sonne&quot;&gt;&lt;br&gt;&#39;</span><span class="p">);</span> </div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;&lt;input type=&quot;submit&quot; value=&quot;Los!&quot;&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span><span class="s1">&#39;&lt;/form&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">res</span><span class="p">.</span><span class="nx">end</span><span class="p">();</span></div><div class='line' id='LC64'><span class="p">});</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'><span class="p">});</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'><span class="nx">server</span><span class="p">.</span><span class="nx">listen</span><span class="p">(</span><span class="mi">8888</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.04036s from github-fe132-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

