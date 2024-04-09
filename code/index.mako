<!doctype html>
<html class="has-navbar-fixed-top">
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

        <style>
            body,
            html,
            #root {
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
            }
        </style>

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
        <div id="root">
        </div>

        % if 'bottom_js' in assets_env:
            % for url in assets_env['bottom_js']:
        <script src="${url}"></script>
            % endfor
        % endif

    </body>
</html>
