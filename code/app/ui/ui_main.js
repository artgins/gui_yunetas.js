/***********************************************************************
 *          ui_main.js
 *
 *          UI Main
 *
 *          Copyright (c) 2024, ArtGins.
 *          All Rights Reserved.
 ***********************************************************************/
(function (exports) {
    "use strict";

    /************************************************************
     *  Configuration (C attributes)
     *  Attributes without underscore prefix
     *      will be set in self.config
     *  Attributes with underscore ("_") prefix:
     *      will be set in self.private
     ************************************************************/
    let CONFIG = {
        //////////////// Public Attributes //////////////////
        title: "",          // Text in center of top toolbar
        subscriber: null,   // subscriber of publishing messages

        color_yuneta_connected: "#32CD32",      // LimeGreen
        color_yuneta_disconnected: "#FF4500",   // OrangeRed
        // color_user_logout: "#708090",        // SlateGray
        // color_user_login: "#F58E25",         // Carrot Orange
        color_user_login: "#32CD32",            // LimeGreen
        color_user_logout: "#FF4500",           // OrangeRed

        //////////////// Private Attributes /////////////////
        _$user_menu_popup: null,

    };




    /***************************
     *      Commands
     ***************************/




    /************************************************************
     *
     ************************************************************/
    function cmd_help(self, cmd, kw, src)
    {
        let webix = {
            "result": 0,
            "comment": "",
            "schema": null,
            "data": null
        };
        return webix;
    }




    /***************************
     *      Local Methods
     ***************************/




    /************************************************************
     *   Build UI
     ************************************************************/
    function build_ui(self)
    {
        /*---------------------------------------*
         *      Top toolbar
         *---------------------------------------*/
        build_top_toolbar(self);

        /*---------------------------------------*
         *      Work area
         *---------------------------------------*/
        // build_work_area(self);

        /*---------------------------------------*
         *      Add menu items
         *---------------------------------------*/
        // add_menu_item("EV_HOME", t("Home"), "fas fa-home", false);
        // add_menu_item("EV_USER", t("Profile"), "fas fa-user", false);
        // add_menu_item("EV_MESSAGE", t("Messages"), "fas fa-envelope", false);
        // add_menu_item("EV_SETTING", t("Settings"), "fas fa-cog", false);
        // add_menu_item("EV_XXX", t("Home"), "fas fa-home", false);
        //
        // set_active_menu_item("EV_USER", true);
    }

    /************************************************************
     *
     ************************************************************/
    function build_top_toolbar(self)
    {


    const builder = createHtmlBuilder();

    // Opening <nav> with attributes
    builder.openElement('nav', {class: "navbar", role: "navigation", "aria-label": "main navigation"});

      // NAVBAR BRAND
      builder.openElement('div', {class: "navbar-brand"});

        // Navbar items (logo and burger icon)
        builder.openElement('a', {class: "navbar-item", href: "https://bulma.io"});
        builder.closeElement(); // Close <a>

        // Navbar burger icon
        builder.openElement('a', {role: "button", class: "navbar-burger", "aria-label": "menu", "aria-expanded": "false", "data-target": "navbarBasicExample"});
          // Spans for burger icon
          for (let i = 0; i < 4; i++) {
            builder.openElement('span', {"aria-hidden": "true"});
            builder.closeElement(); // Close <span>
          }
        builder.closeElement(); // Close <a>

      builder.closeElement(); // Close <div class="navbar-brand">

      // NAVBAR MENU
      builder.openElement('div', {id: "navbarBasicExample", class: "navbar-menu"});

        // Navbar start
        builder.openElement('div', {class: "navbar-start"});

          // Home link
          builder.openElement('a', {class: "navbar-item"});
          builder.insertText('Home');
          builder.closeElement(); // Close <a>

          // Documentation link
          builder.openElement('a', {class: "navbar-item"});
          builder.insertText('Documentation');
          builder.closeElement(); // Close <a>

          // More dropdown
          builder.openElement('div', {class: "navbar-item has-dropdown is-hoverable"});

            // More link
            builder.openElement('a', {class: "navbar-link"});
            builder.insertText('More');
            builder.closeElement(); // Close <a>

            // Dropdown menu
            builder.openElement('div', {class: "navbar-dropdown"});

              // About link
              builder.openElement('a', {class: "navbar-item"});
              builder.insertText('About');
              builder.closeElement(); // Close <a>

              // Jobs link
              builder.openElement('a', {class: "navbar-item is-selected"});
              builder.insertText('Jobs');
              builder.closeElement(); // Close <a>

              // Contact link
              builder.openElement('a', {class: "navbar-item"});
              builder.insertText('Contact');
              builder.closeElement(); // Close <a>

              // Divider
              builder.openElement('hr', {class: "navbar-divider"});
              builder.closeElement(); // Close <hr>

              // Report an issue link
              builder.openElement('a', {class: "navbar-item"});
              builder.insertText('Report an issue');
              builder.closeElement(); // Close <a>

            builder.closeElement(); // Close <div class="navbar-dropdown">
          builder.closeElement(); // Close <div class="navbar-item has-dropdown is-hoverable">
        builder.closeElement(); // Close <div class="navbar-start">

        // Navbar end
        builder.openElement('div', {class: "navbar-end"});

          // Signup and login buttons
          builder.openElement('div', {class: "navbar-item"});
            builder.openElement('div', {class: "buttons"});

              // Sign up button
              builder.openElement('a', {class: "button is-primary"});
              builder.insertText('<strong>Sign up</strong>');
              builder.closeElement(); // Close <a>

              // Log in button
              builder.openElement('a', {class: "button is-light"});
              builder.insertText('Log in');
              builder.closeElement(); // Close <a>

            builder.closeElement(); // Close <div class="buttons">
          builder.closeElement(); // Close <div class="navbar-item">
        builder.closeElement(); // Close <div class="navbar-end">

      builder.closeElement(); // Close <div class="navbar-menu">
    builder.closeElement(); // Close <nav>

    // Retrieving the HTML content and cleaning the builder.
    let htmlOutput = '';
    try {
        htmlOutput = builder.getHtmlAndClean();
        console.log(htmlOutput);
    } catch (error) {
        console.error(error.message);
    }

    let $html = jQuery(htmlOutput);
    $html.appendTo(document.querySelector('body'));
    return;

//         let $html = jQuery(
// `
// <nav class="navbar" role="navigation" aria-label="main navigation">
//     <div class="navbar-brand">
//         <a class="navbar-item" href="https://bulma.io">
//         </a>
//         <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//         </a>
//     </div>
//     <div id="navbarBasicExample" class="navbar-menu">
//         <div class="navbar-start">
//             <a class="navbar-item">
//                 Home
//             </a>
//             <a class="navbar-item">
//                 Documentation
//             </a>
//             <div class="navbar-item has-dropdown is-hoverable">
//                 <a class="navbar-link">
//                     More
//                 </a>
//                 <div class="navbar-dropdown">
//                     <a class="navbar-item">
//                         About
//                     </a>
//                     <a class="navbar-item is-selected">
//                         Jobs
//                     </a>
//                     <a class="navbar-item">
//                         Contact
//                     </a>
//                     <hr class="navbar-divider">
//                     <a class="navbar-item">
//                         Report an issue
//                     </a>
//                 </div>
//             </div>
//         </div>
//         <div class="navbar-end">
//             <div class="navbar-item">
//                 <div class="buttons">
//                     <a class="button is-primary">
//                         <strong>Sign up</strong>
//                     </a>
//                     <a class="button is-light">
//                         Log in
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </nav>
// `
//         );
//         $html.append($html);





        let image_file = sprintf("%s/static/app/images/app-logo.png",
            get_location_path_root() // get dirName of window.location.pathname
        );
        yui_toolbar(
            "#yui-top-layer",   // parent
            "",                 // id
            "",                 // class
            "border-bottom: 1px solid var(--bulma-border-weak);", // style
            [
                {
                    description: "App Menu",
                    position: "left",
                    callback: function (this_item) {
                        self.gobj_send_event("EV_APP_MENU", {}, self);
                    },
                    html: `
                    <div class="">
                        <button class="button without-border">
                            <svg id="icon-state-yuneta" width="1.5em" height="1.5em" viewBox="0 0 448 512"><path fill="${self.config.color_yuneta_disconnected}" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                        </button>
                    </div>
                `
                },
                {
                    description: "Center App Logo",
                    position: "center",
                    callback: function (this_item) {
                        self.gobj_send_event("EV_HOME", {}, self);
                    },
                    html: `
                    <div class="buttons">
                        <figure class="" style="padding-top: 4px; width: 80px; height: 38px;">
                            <img src="${image_file}" alt="App logo"/>
                        </figure>
                    </div>
                `
                },
                {
                    description: "Change theme",
                    position: "right",
                    callback: function (this_item) {
                        self.gobj_send_event("EV_CHANGE_THEME", {}, self);
                    },
                    html: `
                    <div class="">
                        <button id="theme-change" class="button without-border">
                            <svg class="theme-system" width="1.5em" height="1.5em" style="display:none;" fill="#3C9D72" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                            <svg class="theme-dark" width="1.5em" height="1.5em" style="display:none;" fill="#8156F5" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                            <svg class="theme-light" width="1.5em" height="1.5em" style="display:none;" fill="#FFB70F" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                        </button>
                    </div>
                `
                },
                {
                    description: "Username, Account menu",
                    position: "right",
                    // callback: function () {
                    //     self.gobj_send_event("EV_USER_MENU", {}, self);
                    // },
                    html: `
                    <div id="dropdown-user-menu" class="dropdown is-right is-active" style="">
                        <div class="dropdown-trigger">
                            <span id="tag_username" class="tag">pepe@xxx.com</span
                            ><button class="button without-border" aria-haspopup="true" aria-controls="dropdown-user-menu-items">
                                <span style="width:1.5em;height:1.5em">
                                    <svg viewBox="0 0 448 512" width="1.5em" height="1.5em" ><path fill="${self.config.color_user_logout}" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                                </span>
                            </button>
                        </div>
                        <div class="dropdown-menu" id="dropdown-user-menu-items" role="menu">
                            <div class="dropdown-content">
                                  <a href="#" class="dropdown-item"> Dropdown item </a>
                                  <hr class="dropdown-divider" />
                                  <a href="#" class="dropdown-item"> With a divider </a>
                            </div>
                        </div>
                </div>
                `
                },
            ]);
    }

    /************************************************************
     *
     ************************************************************/
    function build_work_area(self)
    {
        /*
         *  Create the two columns model
         *      yui-main-content
         *          yui-menu-column
         *              main-menu
         *                  main-menu-list
         *          yui-content-column
         */
        let html = `
            <div id="yui-main-content" class="yui-main-content"> 
                <div id="yui-menu-column" class="yui-menu-column">
                    <aside id="main-menu" class="menu">
                        <ul id="main-menu-list" class="menu-list">
                        </ul>
                    </aside>
                </div>
                <div id="yui-content-column" class="yui-content-column">
                </div>
            </div>
        `;
        jQuery(html).appendTo(document.querySelector('#yui-content-layer'));

        window.addEventListener('resize', debounce(adjustMenuWidth, 10));
        // window.addEventListener('resize', adjustMenuWidth);

        window.dispatchEvent(new Event('resize'));
        //adjustMenuWidth(); Not ok in chrome refresh
    }

    /************************************************************
     *
     ************************************************************/
    function add_menu_item(id, text, icon, active)
    {
        let html = `
            <li>
                <a id="${id}" class="${active ? 'is-active' : ''}">
                    <span class="icon-text">
                        <span class="icon"><i class="${icon ? icon : ''}"></i></span
                        ><span class="is-hidden-mobile">${text}</span>
                    </span>
                </a>
            </li>
        `;
        jQuery(html).appendTo(document.querySelector('#main-menu-list'));

        adjustMenuWidth();
    }

    /************************************************************
     *
     ************************************************************/
    function set_active_menu_item(id, active)
    {
        let item = document.querySelector(`#${id}`);
        if (item) {
            if (active) {
                item.classList.add('is-active');
            } else {
                item.classList.remove('is-active');
            }
        }
    }

    /************************************************************
     *
     ************************************************************/
    function adjustMenuWidth()
    {
        const menuItems = document.querySelectorAll('#yui-menu-column li a span');
        let maxWidth = 0;

        // Iterate over menu items to find the maximum width
        menuItems.forEach(item => {
            //const width = item.getBoundingClientRect().width;
            //const width = item.offsetWidth;
            let width = 0;
            const lineItems = item.querySelectorAll('span');
            lineItems.forEach(item2 => {
                width += item2.getBoundingClientRect().width;
            });

            if (width > maxWidth) {
                maxWidth = width; // Update maxWidth if current item's width is larger
            }
        });

        // Set the menu column width to the maxWidth plus some padding
        const menuColumn = document.querySelector('#yui-menu-column');
        if (menuColumn) {
            menuColumn.style.width = `${maxWidth + get_menu_padding()}px`;
        }
    }

    /************************************************************
     *
     ************************************************************/
    function get_menu_padding()
    {
        let padding = 0;
        const menu_column = document.querySelector('#yui-menu-column');

        // Calculate the scrollbar width
        padding += menu_column.offsetWidth - menu_column.clientWidth;

        // Get the computed styles for the element
        const menu_item = document.querySelector('#yui-menu-column li a');
        if (menu_item) {
            const styles = window.getComputedStyle(menu_item);

            // Access the padding values
            padding += parseInt(styles.paddingRight);
            padding += parseInt(styles.paddingLeft);
        }

        padding += 4; // extra

        return padding;
    }

    /************************************************************
     *   Set theme
     ************************************************************/
    function set_theme(theme)
    {
        let $svg = jQuery("#theme-change svg");
        $svg.css('display', 'none');

        switch (theme) {
            case 'dark':
                $svg = jQuery("#theme-change svg.theme-dark");
                break;
            case 'system':
                $svg = jQuery("#theme-change svg.theme-system");
                break;
            case 'light':
            default:
                $svg = jQuery("#theme-change svg.theme-light");
                break;
        }
        document.documentElement.setAttribute("data-theme", theme);
        $svg.css('display', 'flex');
    }

    /************************************************************
     *   User Menu
     ************************************************************/
    function build_user_menu(self)
    {
        let html = `
            <div class="dropdown is-active">
              <div class="dropdown-trigger">
                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Dropdown button</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item"> Dropdown item </a>
                  <a class="dropdown-item"> Other dropdown item </a>
                  <a href="#" class="dropdown-item is-active"> Active dropdown item </a>
                  <a href="#" class="dropdown-item"> Other dropdown item </a>
                  <hr class="dropdown-divider" />
                  <a href="#" class="dropdown-item"> With a divider </a>
                </div>
              </div>
            </div>
        `;
        self.private._$user_menu_popup = jQuery(html);
    }

    /************************************************************
     *   Select language
     ************************************************************/
    // function select_language(self)
    // {
    //     var nombre_locales = [];
    //     var locales = __yuno__.__default_service__.gobj_read_attr("locales");
    //     for (var key in locales) {
    //         var obj = {
    //             id: key,
    //             value: locales[key].nombre
    //         };
    //         nombre_locales.push(obj);
    //     }
    //
    //     var menu_language = {
    //         view: "form",
    //         id: "form_language",
    //         rows: [
    //             {
    //                 view: "radio",
    //                 name: "language",
    //                 options: nombre_locales,
    //                 align: "center",
    //                 vertical: true
    //             },
    //             {
    //                 margin: 10,
    //                 cols: [
    //                     {
    //                         view: "button",
    //                         label: t("cancel"),
    //                         css:"webix_tertiary",
    //                         width:100,
    //                         click: function() {
    //                             this.getTopParentView().hide();
    //                         }
    //                     },
    //                     {
    //                         view: "button",
    //                         label: t("save"),
    //                         width: 100,
    //                         css: "webix_primary",
    //                         click: function() {
    //                             this.getTopParentView().hide();
    //                             var lng = this.getFormView().elements.language.getValue();
    //                             if(lng != kw_get_local_storage_value("locale", null, 0)) {
    //                                 i18next.changeLanguage(
    //                                     lng,
    //                                     function(err, t) {
    //                                         if (err) {
    //                                             trace_msg('changeLanguage failed: ' + err);
    //                                             return;
    //                                         }
    //                                         var old_lng = kw_set_local_storage_value(
    //                                             "locale",
    //                                             lng
    //                                         );
    //                                         if(lng != old_lng) {
    //                                             window.location.reload(true);
    //                                         }
    //                                     }
    //                                 );
    //                             }
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     };
    //
    //     webix.ui({
    //         id: "select_language",
    //         view: "window",
    //         head: t("language"),
    //         position: "center",
    //         close: false,
    //         modal: true,
    //         body: menu_language,
    //         on: {
    //             "onShow": function(e) {
    //                 $$("form_language").setValues(
    //                     {
    //                         language: kw_get_local_storage_value("locale", null, 0)
    //                     }
    //                 );
    //                 $$("form_language").focus();
    //             }
    //         }
    //     }).hide();
    //
    // }




    /***************************
     *      Actions
     ***************************/




    /************************************************
     *  {
     *      username:
     *      password:
     *  }
     ************************************************/
    function ac_do_login(self, event, kw, src)
    {
        let __login__ = self.yuno.gobj_find_service("__login__", true);
        __login__.gobj_send_event("EV_DO_LOGIN", kw, self);

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_do_logout(self, event, kw, src)
    {
        let __login__ = self.yuno.gobj_find_service("__login__", true);
        __login__.gobj_send_event("EV_DO_LOGOUT", kw, self);
        return 0;
    }

    /************************************************
     *  {
     *      username:
     *      jwt:
     *  }
     ************************************************/
    function ac_login_accepted(self, event, kw, src)
    {
        //hide_login_form(self);

        self.config._ka_user_menu_button.fill(self.config.color_user_login);
        self.config.username = kw.username;
        self.config._ka_user_name_label.setText(kw.username);
        self.private._gobj_user_menu_popup.gobj_send_event("EV_ENABLE_ITEMS", ["logout"], self);
        self.config.layer.draw();

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_login_refreshed(self, event, kw, src)
    {
        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_login_denied(self, event, kw, src)
    {
        //hide_login_form(self);

        self.config._ka_user_menu_button.fill(self.config.color_user_logout);
        self.config.username = "";
        self.config._ka_user_name_label.setText("Login");
        self.private._gobj_user_menu_popup.gobj_send_event("EV_DISABLE_ITEMS", ["logout"], self);
        self.config.layer.draw();

        let error = kw_get_str(kw, "error", "login denied", false, false);
        display_error_message(
            t(error),
            "Error",
            function () {
                if (empty_string(self.config.username)) {
                    // show_login_form(self);
                }
            }
        );

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_logout_done(self, event, kw, src)
    {
        self.config._ka_user_menu_button.fill(self.config.color_user_logout);
        self.config.username = "";
        self.config._ka_user_name_label.setText("Login");
        self.private._gobj_user_menu_popup.gobj_send_event("EV_DISABLE_ITEMS", ["logout"], self);
        self.config.layer.draw();

        //show_login_form(self);

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_select_language(self, event, kw, src)
    {
        // src.gobj_send_event("EV_HIDE", {}, self); // TODO
        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_app_menu(self, event, kw, src)
    {
        let element = kw.element; // button clicked

        return 0;

        let position = {
            x: element.absolutePosition().x + 0, //element.width()/4,
            y: element.absolutePosition().y + element.height(),
        };

        if (self.private._connex_info_window) {
            self.private._connex_info_window.destroy();
            self.private._connex_info_window = null;
        } else {
            let editor = null;
            self.private._connex_info_window = new w2window({
                name: "connection_info",
                title: t("connection info"),
                x: 40,
                y: 2,
                width: 400,
                height: 350,
                onResized(ev)
                {
                    if (editor && editor.setSize) {
                        editor.setSize(
                            ev.detail.body_rect.width,
                            ev.detail.body_rect.height
                        );
                    }
                },
                onClose(ev)
                {
                    if (editor && editor.destroy) {
                        editor.destroy();
                    }
                    self.private._connex_info_window = null;
                }
            });
            let target = self.private._connex_info_window.get_container();

            if (target.length > 0) {
                let props = {
                    content: {
                        json: self.private._connex_info
                    },
                    readOnly: true,
                    navigationBar: false
                };
                editor = new JSONEditor({
                    target: target[0],
                    props: props
                });
                target.addClass("jse-theme-dark");

                let font_family = "DejaVu Sans Mono, monospace";
                let sz = adjust_font_size(16, font_family);
                const root = document.querySelector(':root');

                root.style.setProperty('--jse-font-size-mono', sz + 'px');
                root.style.setProperty('--jse-font-family-mono', font_family);

                query(self.private._connex_info_window.box).find(".w2ui-window-title").css({
                    'font-size': self.private._text_size + 'px'
                });
                query(self.private._connex_info_window.box).find("span.w2ui-xicon").css({
                    'font-size': sz + 'px'
                });
            }
        }

        if (self.private._gobj_app_menu_popup) {
            self.private._gobj_app_menu_popup.gobj_send_event("EV_TOGGLE", position, self);
        }

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_home(self, event, kw, src)
    {
        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_change_theme(self, event, kw, src)
    {
        let current_theme = kw_get_local_storage_value("theme", "light", true);

        let new_theme;
        switch (current_theme) {
            case 'dark':
                new_theme = 'system';
                break;
            case 'system':
                new_theme = 'light';
                break;
            case 'light':
            default:
                new_theme = 'dark';
                break;
        }

        set_theme(new_theme);
        kw_set_local_storage_value("theme", new_theme);

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_user_menu(self, event, kw, src)
    {
        if (empty_string(self.config.username)) {
            // show_login_form(self);
        } else {
            let element = kw.element; // button clicked

            let position = {
                x: element.absolutePosition().x + element.width(),
                y: element.absolutePosition().y + element.height(),
            };
            if (self.private._gobj_user_menu_popup) {
                self.private._gobj_user_menu_popup.gobj_send_event("EV_TOGGLE", position, self);
            }
        }

        return 0;
    }

    /********************************************
     *  Connected to yuneta
     ********************************************/
    function ac_info_connected(self, event, kw, src)
    {
        self.private._connex_info = kw;
        self.config._ka_app_menu_button.fill(self.config.color_yuneta_connected);
        self.config.layer.draw();
        return 0;
    }

    /********************************************
     *  Disconnected from yuneta
     ********************************************/
    function ac_info_disconnected(self, event, kw, src)
    {
        self.config._ka_app_menu_button.fill(self.config.color_yuneta_disconnected);
        self.config.layer.draw();
        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_timeout(self, event, kw, src)
    {
        // self.gobj_send_event("EV_USER_MENU", {element: self.config._ka_user_menu_button}, self);
        // self.set_timeout(100);

        if (empty_string(self.config.username)) {
            // show_login_form(self);
        }
        return 0;
    }




    /***************************
     *      GClass/Machine
     ***************************/




    let FSM = {
        "event_list": [
            "EV_LOGIN_ACCEPTED: input",
            "EV_LOGIN_DENIED: input",
            "EV_LOGIN_REFRESHED: input",
            "EV_LOGOUT_DONE: input",
            "EV_DO_LOGIN",
            "EV_DO_LOGOUT",
            "EV_SELECT_LANGUAGE",
            "EV_APP_MENU",
            "EV_HOME",
            "EV_CHANGE_THEME",
            "EV_USER_MENU",
            "EV_INFO_CONNECTED",
            "EV_INFO_DISCONNECTED",
            "EV_TIMEOUT"
        ],
        "state_list": [
            "ST_IDLE"
        ],
        "machine": {
            "ST_IDLE":
                [
                    ["EV_LOGIN_ACCEPTED", ac_login_accepted, undefined],
                    ["EV_LOGIN_DENIED", ac_login_denied, undefined],
                    ["EV_LOGIN_REFRESHED", ac_login_refreshed, undefined],
                    ["EV_LOGOUT_DONE", ac_logout_done, undefined],
                    ["EV_DO_LOGIN", ac_do_login, undefined],
                    ["EV_DO_LOGOUT", ac_do_logout, undefined],
                    ["EV_SELECT_LANGUAGE", ac_select_language, undefined],
                    ["EV_APP_MENU", ac_app_menu, undefined],
                    ["EV_HOME", ac_home, undefined],
                    ["EV_CHANGE_THEME", ac_change_theme, undefined],
                    ["EV_USER_MENU", ac_user_menu, undefined],
                    ["EV_INFO_CONNECTED", ac_info_connected, undefined],
                    ["EV_INFO_DISCONNECTED", ac_info_disconnected, undefined],
                    ["EV_TIMEOUT", ac_timeout, undefined]
                ]
        }
    };

    let Ui_main = GObj.__makeSubclass__();
    let proto = Ui_main.prototype; // Easy access to the prototype
    proto.__init__ = function (name, kw) {
        GObj.prototype.__init__.call(
            this,
            FSM,
            CONFIG,
            name,
            "Ui_main",
            kw,
            0
        );
        return this;
    };
    gobj_register_gclass(Ui_main, "Ui_main");




                    /***************************
                     *      Framework Methods
                     ***************************/




    /************************************************************
     *      Framework Method create
     ************************************************************/
    proto.mt_create = function (kw)
    {
        let self = this;

        build_ui(self);

        let current_theme = kw_get_local_storage_value("theme", "light", true);
        set_theme(current_theme);

        if (self.config.subscriber) {
            self.gobj_subscribe_event(null, {}, self.config.subscriber);
        }
    };

    /************************************************************
     *      Framework Method destroy
     *      In this point, all childs
     *      and subscriptions are already deleted.
     ************************************************************/
    proto.mt_destroy = function ()
    {
    };

    /************************************************************
     *      Framework Method start
     ************************************************************/
    proto.mt_start = function (kw)
    {
        let self = this;
    };

    /************************************************************
     *      Framework Method stop
     ************************************************************/
    proto.mt_stop = function (kw)
    {
        let self = this;
        self.clear_timeout();
    };

    /************************************************************
     *      Framework Method stats
     ************************************************************/
    proto.mt_stats = function (stats, kw, src)
    {
        let self = this;

        return {};
    };

    /************************************************************
     *      Framework Method command
     ************************************************************/
    proto.mt_command = function (command, kw, src)
    {
        let self = this;
        switch (command) {
            case "help":
                return cmd_help(self, command, kw, src);
            default:
                log_error("Command not found: %s", command);
                let webix = {
                    "result": -1,
                    "comment": sprintf("Command not found: %s", command),
                    "schema": null,
                    "data": null
                };
                return webix;
        }
    };

    /************************************************
     *      Local Method
     ************************************************/
    proto.get_text_size = function ()
    {
        let self = this;
        return self.private._text_size;
    };

    /************************************************
     *      Local Method
     ************************************************/
    proto.get_icon_size = function ()
    {
        let self = this;
        return self.private._icon_size;
    };

    /************************************************
     *      Local Method
     ************************************************/
    proto.set_username = function (username)
    {
        let self = this;
        jQuery.get("#tag_username").html(username);
    };


    //=======================================================================
    //      Expose the class via the global object
    //=======================================================================
    exports.Ui_main = Ui_main;

})(this);
