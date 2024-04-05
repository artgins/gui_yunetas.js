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

        <style>
            html, body {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                overscroll-behavior: contain;
            }

            :root {
                --yui-top-layer-size: 2.6em;
                --yui-bottom-layer-size: 2.6em;
            }
            .yui-top-layer {
                position: fixed;
                top: 0;
                width: 100%;
                height: var(--yui-top-layer-size);
                overflow: hidden;
                z-index: 1000;
            }
            .yui-content-layer {
                position: absolute;
                top: var(--yui-top-layer-size);
                bottom: var(--yui-bottom-layer-size);
                width: 100%;
                height: calc(100vh - var(--yui-top-layer-size) - var(--yui-bottom-layer-size));
            }
            .yui-bottom-layer {
                position: fixed;
                bottom:0;
                width:100%;
                height: var(--yui-bottom-layer-size);
                overflow: hidden;
                z-index:1000;
            }
            .yui-modal-layer {
                position: fixed;
                width:100%;
                height:100%;
                top:0;
                left:0;
                background-color:rgba(0,0,0,0.3);
                display:none;
                z-index:1001;
            }

        </style>

    </head>
    <body>
        <div id="yui-top-layer" class="yui-top-layer"></div>
        <div id="yui-content-layer" class="yui-content-layer"></div>
        <div id="yui-bottom-layer" class="yui-bottom-layer"></div>
        <div id="yui-modal-layer" class=yui-modal-layer"></div>

        % if 'bottom_js' in assets_env:
            % for url in assets_env['bottom_js']:
            <script src="${url}"></script>
            % endfor
        % endif
    </body>
</html>
