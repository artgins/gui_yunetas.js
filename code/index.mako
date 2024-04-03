<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <!-- Place favicon.ico in the root directory -->

        <meta name="color-scheme" content="light" />

        % for key, value in metadata.items():
            % if value:
        <meta name="${key}" content="${value}">
            % endif
        % endfor

        % if 'css' in assets_env:
            % for url in assets_env['css']:
        <link rel="stylesheet" href="${url}">
            % endfor
        % endif

        % if 'module_js' in assets_env:
            % for url in assets_env['module_js']:
        <script type="module" src="${url}"></script>
            % endfor
        % endif

        <script type="module">
            import { JSONEditor} from "./static/jsoneditor/standalone.js";
            if(JSONEditor) {
                window.JSONEditor = JSONEditor;
            }
        </script>

        % if 'top_js' in assets_env:
            % for url in assets_env['top_js']:
        <script src="${url}"></script>
            % endfor
        % endif
    </head>
    <body>
        <div id="root">

<div class="toolbar">
  <div class="toolbar-section left">
    <!-- Place left items here -->
    <span>Left Item 1</span>
    <span>Left Item 2</span>
  </div>
  <div class="toolbar-section center">
    <!-- Place center items here -->
    <span>Center Item 1</span>
    <span>Center Item 2</span>
  </div>
  <div class="toolbar-section right">
    <!-- Place right items here -->
    <span>Right Item 1</span>
    <span>Right Item 2</span>
  </div>
</div>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulma Page Layout</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.3/css/bulma.min.css">
</head>
<body>

<!-- Main Content -->
<section class="section">
  <div class="container">
    <div class="columns">

      <!-- Left Side Menu -->
      <div class="column is-one-quarter">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p class="menu-label">Administration</p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a>Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
        </aside>
      </div>

      <!-- Right Side Content Area -->
      <div class="column">
        <h1 class="title">Main Content</h1>
        <p>This area is designated for the main content. It's the part of the site where the actual page content goes.</p>
      </div>
    </div>
  </div>
</section>









            <div id="top-layer" class="top-layer">
                <div id="top-left-layer" class="top-left-layer"></div>
                <div id="top-center-layer" class="top-center-layer"></div>
                <div id="top-right-layer" class="top-right-layer"></div>
            </div>

            <div id="bottom-layer" class="bottom-layer">
                <div id="bottom-left-layer" class="bottom-left-layer"></div>
                <div id="bottom-center-layer" class="bottom-center-layer"></div>
                <div id="bottom-right-layer" class="bottom-right-layer"></div>
            </div>

            <div id="left-layer" class="left-layer">
            </div>
            <div id="right-layer" class="right-layer">
            </div>
            <div id="main-content" class="main-content">
            </div>
        </div>

        % if 'bottom_js' in assets_env:
            % for url in assets_env['bottom_js']:
            <script src="${url}"></script>
            % endfor
        % endif

    <script>
    document.addEventListener('DOMContentLoaded', () => {
        const themeSelector = document.getElementById('theme-selector');

        const applyTheme = (theme) => {
          document.documentElement.setAttribute("data-theme", theme);
        };

        // Listen for changes on the theme selector
        if(themeSelector) {
            themeSelector.addEventListener('change', (e) => {
              const selectedTheme = e.target.value;
              localStorage.setItem('theme', selectedTheme); // Save theme preference
              applyTheme(selectedTheme);
            });
        }

        // Initialize theme on load
        const savedTheme = localStorage.getItem('theme') || 'light';
        applyTheme(savedTheme);
    });

    </script>
    </body>
</html>
