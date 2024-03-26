<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Layout with Semi-Transparent Modal Overlay</title>
    <style>
        :root {
            --layer-size: 40px;
        }

        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
        }

        .fixed-layer {
            position: fixed;
            z-index: 10;
        }

        .top-layer, .bottom-layer {
            width: 100%;
            height: var(--layer-size);
            background-color: lightblue;
        }

        .top-layer {
            top: 0;
        }
        .bottom-layer {
            bottom: 0;
        }

        .left-layer, .right-layer {
            position: fixed;
            top: var(--layer-size);
            width: var(--layer-size);
            bottom: var(--layer-size);
            background-color: lightcoral;
        }

        .left-layer {
            left: 0;
        }
        .right-layer {
            right: 0;
        }

        .main-content {
            position: absolute;
            top: var(--layer-size);
            bottom: var(--layer-size);
            left: var(--layer-size);
            right: var(--layer-size);
            overflow: auto;
            background-color: lightgreen;
            margin: 10px;
            padding: 10px;
            white-space: nowrap;
        }

        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.3);
            z-index: 99;
            display: none;
        }

    </style>
</head>
<body>
    <div class="container">
<!--        <div class="fixed-layer top-layer">Top
            <button onclick="showModal()">Open Modal</button>
            <button onclick="showMenu()" style="position: relative; z-index: 20;">Show Menu</button>
            <button onclick="hideMenu()" style="position: relative; z-index: 20;">Hide Menu</button>
        </div>-->

<!--        <div class="top-layer" style="display: flex; align-items: center;">
            <button onclick="showModal()" style="margin-left: 10px;">Open modal</button>
            <button onclick="showMenu()" style="margin-left: 10px;">Show menu</button>
            <button onclick="hideMenu()" style="margin-left: 10px;">Hide menu</button>
        </div>-->

<!--        <div class="top-layer" style="display: flex; align-items: center;">
            <button onclick="showModal()" style="margin-left: 10px;">Open modal</button>
            <button onclick="showMenu()" style="margin-left: 10px;">Show menu</button>
            <button onclick="hideMenu()" style="margin-left: 10px;">Hide menu</button>

            <div style="display: flex;">
                <button style="margin-right: 10px;">Right Button 1</button>
                <button>Right Button 2</button>
            </div>
        </div>-->

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
</body>
</html>
