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

        $ui: null,      // w2ui object

        //////////////// Private Attributes /////////////////
    };




                    /***************************
                     *      Commands
                     ***************************/




    /************************************************************
     *
     ************************************************************/
    function cmd_help(self, cmd, kw, src) {
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
        let image_file = sprintf("%s/static/app/images/app-logo.png",
            get_location_path_root() // get dirName of window.location.pathname
        );

        yui_toolbar("#yui-top-layer", "", "", [
            {
                description: "App Menu",
                position: "left",
                callback: function(this_item) {
                    self.gobj_send_event("EV_APP_MENU", {}, self);
                },
                html: `
                    <div class="">
                        <button class="button without-border">
                            <span style="width:1.5em;height:1.5em">
                                <svg id="icon-state-yuneta" viewBox="0 0 448 512"><path fill="${self.config.color_yuneta_disconnected}" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                            </span>
                        </button>
                    </div>
                `
            },
            {
                description: "Center App Logo",
                position: "center",
                callback: function(this_item) {
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
                callback: function(this_item) {
                    self.gobj_send_event("EV_CHANGE_THEME", {}, self);
                },
                html: `
                    <div class="">
                        <button id="theme-change" class="button without-border">
                            <span style="width:1.5em;height:1.5em">
                                <svg class="theme-system" style="display:none;" fill="#3C9D72" viewBox="0 0 512 512"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>
                                <svg class="theme-dark" style="display:none;" fill="#8156F5" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
                                <svg class="theme-light" style="display:flex;" fill="#FFB70F" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>
                            </span>
                        </button>
                    </div>
                `
            },
            {
                description: "Username, Account menu",
                position: "right",
                callback: function() {
                    self.gobj_send_event("EV_USER_MENU", {}, self);
                },
                html: `
                    <div class="">
                        <span id="tag_username" class="tag">pepe@xxx.com</span>
                        <button class="button without-border">
                            <span style="width:1.5em;height:1.5em">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="${self.config.color_user_logout}" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                            </span>
                        </button>
                    </div>
                `
            },
        ]);

        /*---------------------------------------*
         *      Top toolbar elements
         *---------------------------------------*/

        /*
         *  Center App Logo
         */

        /*
         *  Menu "account"
         *
         */

        //themes();

        /*---------------------------------------*
         *      Top toolbar
         *      Menu "account" (user)
         *---------------------------------------*/

        /*---------------------------------------*
         *      Bottom toolbar
         *---------------------------------------*/

        /*---------------------------------------*
         *      Work area
         *---------------------------------------*/

        /*---------------------------------------*
         *      Set initial state
         *---------------------------------------*/
    }




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
            function() {
                if(empty_string(self.config.username)) {
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

        if(self.private._connex_info_window) {
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
                onResized(ev) {
                    if(editor && editor.setSize) {
                        editor.setSize(
                            ev.detail.body_rect.width,
                            ev.detail.body_rect.height
                        );
                    }
                },
                onClose(ev) {
                    if(editor && editor.destroy) {
                        editor.destroy();
                    }
                    self.private._connex_info_window = null;
                }
            });
            let target = self.private._connex_info_window.get_container();

            if(target.length > 0) {
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

        if(self.private._gobj_app_menu_popup) {
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
        let current_theme = localStorage.getItem('theme') || 'light';

        let $svg = jQuery("#theme-change svg");
        $svg.css('display', 'none');

        let new_theme;
        switch(current_theme) {
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

        switch(new_theme) {
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
        document.documentElement.setAttribute("data-theme", new_theme);
        $svg.css('display', 'flex');

        localStorage.setItem('theme', new_theme); // Save theme preference

        return 0;
    }

    /************************************************
     *
     ************************************************/
    function ac_user_menu(self, event, kw, src)
    {
        if(empty_string(self.config.username)) {
            // show_login_form(self);
        } else {
            let element = kw.element; // button clicked

            let position = {
                x: element.absolutePosition().x + element.width(),
                y: element.absolutePosition().y + element.height(),
            };
            if(self.private._gobj_user_menu_popup) {
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

        if(empty_string(self.config.username)) {
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
                ["EV_LOGIN_ACCEPTED",       ac_login_accepted,      undefined],
                ["EV_LOGIN_DENIED",         ac_login_denied,        undefined],
                ["EV_LOGIN_REFRESHED",      ac_login_refreshed,     undefined],
                ["EV_LOGOUT_DONE",          ac_logout_done,         undefined],
                ["EV_DO_LOGIN",             ac_do_login,            undefined],
                ["EV_DO_LOGOUT",            ac_do_logout,           undefined],
                ["EV_SELECT_LANGUAGE",      ac_select_language,     undefined],
                ["EV_APP_MENU",             ac_app_menu,            undefined],
                ["EV_HOME",                 ac_home,                undefined],
                ["EV_CHANGE_THEME",         ac_change_theme,        undefined],
                ["EV_USER_MENU",            ac_user_menu,           undefined],
                ["EV_INFO_CONNECTED",       ac_info_connected,      undefined],
                ["EV_INFO_DISCONNECTED",    ac_info_disconnected,   undefined],
                ["EV_TIMEOUT",              ac_timeout,             undefined]
            ]
        }
    };

    let Ui_main = GObj.__makeSubclass__();
    let proto = Ui_main.prototype; // Easy access to the prototype
    proto.__init__= function(name, kw) {
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
    proto.mt_create = function(kw)
    {
        let self = this;

        build_ui(self);

        if(self.config.subscriber) {
            self.gobj_subscribe_event(null, {}, self.config.subscriber);
        }
    };

    /************************************************************
     *      Framework Method destroy
     *      In this point, all childs
     *      and subscriptions are already deleted.
     ************************************************************/
    proto.mt_destroy = function()
    {
    };

    /************************************************************
     *      Framework Method start
     ************************************************************/
    proto.mt_start = function(kw)
    {
        let self = this;
    };

    /************************************************************
     *      Framework Method stop
     ************************************************************/
    proto.mt_stop = function(kw)
    {
        let self = this;
        self.clear_timeout();
    };

    /************************************************************
     *      Framework Method stats
     ************************************************************/
    proto.mt_stats = function(stats, kw, src)
    {
        let self = this;

        return {};
    };

    /************************************************************
     *      Framework Method command
     ************************************************************/
    proto.mt_command = function(command, kw, src)
    {
        let self = this;
        switch(command) {
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
    proto.get_text_size = function()
    {
        let self = this;
        return self.private._text_size;
    };

    /************************************************
     *      Local Method
     ************************************************/
    proto.get_icon_size = function()
    {
        let self = this;
        return self.private._icon_size;
    };

    /************************************************
     *      Local Method
     ************************************************/
    proto.set_username = function(username)
    {
        let self = this;
        jQuery.get("#tag_username").html(username);
    };


    //=======================================================================
    //      Expose the class via the global object
    //=======================================================================
    exports.Ui_main = Ui_main;

})(this);
