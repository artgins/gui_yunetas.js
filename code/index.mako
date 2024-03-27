<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="manifest" href="site.webmanifest">
        <link rel="apple-touch-icon" href="icon.png">
        <!-- Place favicon.ico in the root directory -->

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
        <div id="loading-message"
            style="border: 1px solid blue; margin: 1em; padding: 2em; background-color: #f8f1fd;">
            <strong>Loading application. Wait please...</strong>
        </div>

        <!--  z-index 2 and 3 busy by login form -->
        <div style="z-index:1;" id="gui_canvas"></div>



    <div class="container">
        <div class="top-layer" style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex;">
                <button onclick="showModal()" style="margin-left: 10px;">Open modal</button>
                <button onclick="showMenu()" style="margin-left: 10px;">Show menu</button>
                <button onclick="hideMenu()" style="margin-left: 10px;">Hide menu</button>
            </div>
            <div style="display: flex;">
                <button style="margin-left: 10px;">Cebter 1</button>
                <button style="margin-left: 10px; margin-right: 10px;">Center 2</button>
                <button style="margin-right: 10px;">Center 2</button>
            </div>
            <div style="display: flex;">
                <button style="margin-right: 10px;">Right Button 1</button>
                <button style="margin-right: 10px;">Right Button 2</button>
            </div>
        </div>

        <div id="left-layer" class="fixed-layer left-layer">Left</div>
        <div class="fixed-layer right-layer">Right</div>
        <div class="fixed-layer bottom-layer">Bottom</div>
        <div class="main-content">
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
            Main (scrollable, no wrapping) Main (scrollable, no wrapping) Main (scrollable, no wrapping) <br>
        </div>
    </div>
    <div id="modalOverlay" class="modal-overlay" onclick="hideModal()">
        <button style="left:100px; top:100px" onclick="hideModal()">Close Fullscreen Modal</button>
<!--        <button onclick="showModal()" style="position: absolute; top: 100px; left: 100px; z-index: 20;">Open Modal</button>-->
    </div>
    <script>
        function showMenu() {
            document.querySelector('.left-layer').style.width = '100px';
            // document.querySelector('.bottom-layer').style.left = '100px'; // Adjust the bottom layer accordingly
            document.querySelector('.main-content').style.left = '100px'; // Adjust the main content accordingly
        }
        function hideMenu() {
            document.querySelector('.left-layer').style.width = '40px';
            // document.querySelector('.bottom-layer').style.left = '100px'; // Adjust the bottom layer accordingly
            document.querySelector('.main-content').style.left = '40px'; // Adjust the main content accordingly
        }

        function showModal() {
            document.getElementById('modalOverlay').style.display = 'block';
        }

        function hideModal() {
            document.getElementById('modalOverlay').style.display = 'none';
        }
    </script>





    % if 'bottom_js' in assets_env:
        % for url in assets_env['bottom_js']:
        <script src="${url}"></script>
        % endfor
    % endif

    </body>
</html>
