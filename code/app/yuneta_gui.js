/***********************************************************************
 *          yuneta_gui.js
 *
 *          Yuneta GUI
 *
 *          This is the main gobj (__default_service__): create all other services
 *
 *          Copyright (c) 2022, ArtGins.
 *          All Rights Reserved.
 ***********************************************************************/
(function (exports) {
    "use strict";

    /********************************************
     *      Configuration (C attributes)
     ********************************************/
    let CONFIG = {
        locales: null,
        username: null,

        remote_yuno_role: "controlcenter",
        remote_yuno_service: "controlcenter",
        required_services: ["treedb_controlcenter", "treedb_authzs"], // HACK add others needed services

        header_size: 40,

        url: null,
        urls: urls,     // HACK urls is a global variable from urls.js,

        gobj_login: null,

        gobj_ka_main: null,
        gobj_ui_header: null,
        gobj_mw_work_area: null,
        gobj_gf_agents: null
    };

    const colorModes = {
        light: "light",
        dark: "dark"
    };

    const sizes = {
        extraSmall: "extraSmall",
        small: "small",
        medium: "medium",
        large: "large"
    };

    // style={
    //     {
    //         backgroundColor: (colorMode === colorModes.dark && botColors?.background),
    //         color: (colorMode === colorModes.dark && botColors?.font)
    //     }

    // const theme = useMemo(() => {
    //     document.body.classList.remove(mode === colorModes.dark ? colorModes.light : colorModes.dark);
    //     document.body.classList.add(mode);
    //     return createTheme({palette: {
    //         mode,
    //         primary: {
    //             main: botColors?.fontActive,
    //           },
    //         }})
    // }, [botColors?.fontActive, mode]);


// export function ColorModeProvider({children}) {
//     const [mode, setMode] = useState(colorModes.dark);
//     const colorMode = useMemo(() => ({
//         toggleColorMode: () => {
//             setMode((prevMode) => (prevMode === colorModes.light ? colorModes.dark : colorModes.light));
//         }
//     }), []);
//     return (<ToggleColorModeContext.Provider value={colorMode}>
//         <ColorModeContext.Provider value={mode}>
//                 {children}
//         </ColorModeContext.Provider>
//     </ToggleColorModeContext.Provider>);
// }

// export default function ColorModeSwitch({
//     onClick
// }) {
//     const colorMode = useColorModeContext()
//     const colorModeToggle = useToggleColorModeContext();
//     return useMemo(() => {
//         return (<AntButton
//             text={
//                 <Trans
//             i18nKey="buttons.colorModeSwitch"/>
//             }
//             icon={
//                 colorMode === colorModes.dark ? (<Moon height='24px' width='24px' color="white"/>) : (<Moon height='24px' width='24px' color="black"/>)
//             }
//             block={true}
//             onClick={
//                 () => {
//                     colorModeToggle.toggleColorMode()
//                     onClick ?. ()
//                 }
//             }
//             buttonType={
//                 colorMode === colorModes.dark ? buttonTypes.white : buttonTypes.black
//             }/>);
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [colorMode])
// }

    //
    // <button className="btn btn-sm navbar-btn theme-switch-button" aria-label="light/dark" data-bs-placement="bottom"
    //         data-bs-toggle="tooltip" data-bs-original-title="light/dark">
    //     <span className="theme-switch nav-link" data-mode="light"><svg className="svg-inline--fa fa-sun fa-lg"
    //                                                                    aria-hidden="true" focusable="false"
    //                                                                    data-prefix="fas" data-icon="sun" role="img"
    //                                                                    xmlns="http://www.w3.org/2000/svg"
    //                                                                    viewBox="0 0 512 512" data-fa-i2svg=""><path
    //         fill="currentColor"
    //         d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg>
    //         <!-- <i class="fa-solid fa-sun fa-lg"></i> Font Awesome fontawesome.com --></span>
    //     <span className="theme-switch nav-link" data-mode="dark"><svg className="svg-inline--fa fa-moon fa-lg"
    //                                                                   aria-hidden="true" focusable="false"
    //                                                                   data-prefix="fas" data-icon="moon" role="img"
    //                                                                   xmlns="http://www.w3.org/2000/svg"
    //                                                                   viewBox="0 0 384 512" data-fa-i2svg=""><path
    //         fill="currentColor"
    //         d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg>
    //         <!-- <i class="fa-solid fa-moon fa-lg"></i> Font Awesome fontawesome.com --></span>
    //     <span className="theme-switch nav-link" data-mode="auto"><svg
    //         className="svg-inline--fa fa-circle-half-stroke fa-lg" aria-hidden="true" focusable="false"
    //         data-prefix="fas" data-icon="circle-half-stroke" role="img" xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor"
    //                                                      d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
    //         <!-- <i class="fa-solid fa-circle-half-stroke fa-lg"></i> Font Awesome fontawesome.com --></span>
    // </button>
    //
    // <div className="bd-nav-themes">
    //     <button id="js-cycle" className="bd-cycle js-burger is-sun" data-target="js-themes">
    //         <div className="bd-cycles">
    //             <div className="bd-cycle-sun">
    //       <span className="icon">
    //         <i className="fas fa-lg fa-sun" aria-hidden="true"></i>
    //       </span>
    //             </div>
    //
    //             <div className="bd-cycle-moon">
    //       <span className="icon">
    //         <i className="fas fa-lg fa-moon" aria-hidden="true"></i>
    //       </span>
    //             </div>
    //         </div>
    //     </button>
    //
    //     <div id="js-themes" className="bd-nav-menu is-cycles js-menu js-themes">
    //         <button data-scheme="light" className="bd-nav-item is-sun is-active" aria-label="Light mode">
    //     <span className="icon">
    //       <i className="fas fa-sun" aria-hidden="true"></i>
    //     </span>
    //             <span>Light</span>
    //         </button>
    //
    //         <button data-scheme="dark" className="bd-nav-item is-moon" aria-label="Dark mode">
    //     <span className="icon">
    //       <i className="fas fa-moon" aria-hidden="true"></i>
    //     </span>
    //             <span>Dark</span>
    //         </button>
    //
    //         <button data-scheme="system" className="bd-nav-item is-system" aria-label="System mode">
    //     <span className="icon">
    //       <i className="fas fa-desktop" aria-hidden="true"></i>
    //     </span>
    //             <span>System</span>
    //         </button>
    //     </div>
    // </div>




                    /***************************
                     *      Local Methods
                     ***************************/




    /********************************************
     *  Load i18n
     ********************************************/
    function setup_locale(self) {
        let locale = kw_get_local_storage_value("locale", "es", true);

        if (!self.config.locales[locale]) {
            log_error("locale UNKNOWN: " + locale);
            locale = "es";
            kw_set_local_storage_value("locale", locale);
        }

        i18next.init(
            {
                lng: locale,
                debug: false,
                resources: self.config.locales
            },
            function (err, t) {
                // initialized and ready to go!
            }
        );

        switch (locale) {
            case "en":
            case "es":
                luxon.Settings.defaultLocale = locale;
                break;
            default:
                log_error("locale UNKNOWN: " + locale);
                break;
        }
    }

    /********************************************
     *
     ********************************************/
    function build_remote_service(self) {
        if ((window.location.hostname.indexOf("localhost") >= 0 ||
                window.location.hostname.indexOf("127.") >= 0) ||
            empty_string(window.location.hostname)) {
            self.config.url = "localhost";
        } else {
            self.config.url = window.location.hostname;
        }

        // HACK "punto gatillo" trigger point: from the urls.js file, retrieve the ws/wss connection associated with the url location.hostname
        let url = self.config.urls[self.config.url];
        if (empty_string(url)) {
            let msg = t("no url available for") + ":\n" + self.config.url;
            log_error(msg);
            display_error_message(
                msg,
                "Error",
                function () {
                    setTimeout(function () {
                        close_all(self);
                    }, 100);
                }
            );
            return;
        }

        __yuno__.__remote_service__ = self.yuno.gobj_create_unique(
            "iev_client",
            IEvent,
            {
                remote_yuno_role: self.config.remote_yuno_role,
                remote_yuno_service: self.config.remote_yuno_service,
                required_services: self.config.required_services,
                jwt: null,
                urls: [url]
            },
            __yuno__ // remote_service is child of yuno: avoid to start it with self.gobj_start_tree()
        );
        /*
         *  Subscribe to IEvent null, to receive all events of IEvent
         *      EV_ON_OPEN
         *      EV_ON_CLOSE
         *      EV_IDENTITY_CARD_REFUSED
         */
        __yuno__.__remote_service__.gobj_subscribe_event(
            null,
            {},
            self
        );
    }

    /********************************************
     *
     ********************************************/
    function do_connect(self, jwt) {
        __yuno__.__remote_service__.gobj_write_attr("jwt", jwt);

        /*
         *  Start
         */
        __yuno__.__remote_service__.gobj_start_tree();
    }

    /********************************************
     *
     ********************************************/
    function close_all(self) {
        if (__yuno__.__remote_service__) {
            __yuno__.__remote_service__.gobj_stop_tree();
        }
        if (self.config.gobj_login) {
            self.config.gobj_login.gobj_send_event("EV_DO_LOGOUT", {}, self);
        }
    }

    /********************************************
     *
     ********************************************/
    function build_ui(self) {
        self.config.gobj_login = self.yuno.gobj_create_service(
            "__login__",
            Login,
            {},
            self
        );

        self.config.gobj_ui_main = self.yuno.gobj_create_service(
            "__ui_main__",
            Ui_main,
            {
            },
            self
        );

        // let gobj_ka_main = self.config.gobj_ka_main = self.yuno.gobj_create_service(
        //     "__ka_main__",
        //     Ka_main,
        //     {
        //     },
        //     self
        // );

        // self.config.gobj_ui_header = self.yuno.gobj_create(
        //     "ui_header",
        //     Ui_header,
        //     {
        //         layer: gobj_ka_main.get_static_layer(),
        //         x: 0,
        //         y: 0,
        //         width: gobj_ka_main.config.width,
        //         height: self.config.header_size,
        //         icon_size: 30,
        //         text_size: 20
        //     },
        //     self
        // );
        // gobj_ka_main.get_static_layer().draw();

        // self.config.gobj_mw_work_area = self.yuno.gobj_create(
        //     "mw_work_area",
        //     Sw_multiview,
        //     {
        //         layer: gobj_ka_main.get_main_layer(),
        //         x: 0,
        //         y: self.config.header_size,
        //         width: gobj_ka_main.config.width,
        //         height: gobj_ka_main.config.height - self.config.header_size
        //     },
        //     self
        // );
        //
        // self.config.gobj_gf_agents = self.yuno.gobj_create_service(
        //     "gf_agents",
        //     Gf_agent,
        //     {
        //         layer: gobj_ka_main.get_main_layer(),
        //         background_color: "#222B45",    // Uncomment to black theme
        //         draggable: false,  // TODO pon a false en prod
        //         gobj_mw_work_area: self.config.gobj_mw_work_area
        //     },
        //     self
        // );

        //gobj_ka_main.get_main_layer().draw();
    }


    /***************************
     *      Actions
     ***************************/


    /********************************************
     *      Connected to yuneta
     *
     *  Example of kw (connection data of __remote_service__):
     {
     "url": "wss://localhost:1996",
     "remote_yuno_name": "pepe.com",
     "remote_yuno_role": "controlcenter",
     "remote_yuno_service": "wss-1",
     "services_roles": {
     "controlcenter": [
     "root"
     ],
     "treedb_controlcenter": [
     "root"
     ],
     "treedb_authzs": [
     "root"
     ]
     },
     "data": null
     }

     *
     ********************************************/
    function ac_on_open(self, event, kw, src) {
        /*----------------------------------------*
         *      Save backend roles
         *----------------------------------------*/
        __yuno__["services_roles"] = kw.services_roles;

        self.gobj_publish_event(event, kw);

        // TODO use publish_event
        // self.config.gobj_ui_header.gobj_send_event("EV_INFO_CONNECTED", kw, self);
        // self.config.gobj_gf_agents.gobj_send_event("EV_CONNECTED", {}, self);

        return 0;
    }

    /********************************************
     *  Disconnected from yuneta
     *  Example of kw (disconnection data of __remote_service__):
     {
     "url": "wss://localhost:1996",
     "remote_yuno_name": "konnectarte.com",
     "remote_yuno_role": "controlcenter",
     "remote_yuno_service": "wss-1"
     }

     ********************************************/
    function ac_on_close(self, event, kw, src) {
        self.gobj_publish_event(event, kw);

        // TODO use publish_event
        // self.config.gobj_ui_header.gobj_send_event("EV_INFO_DISCONNECTED", {}, self);
        // self.config.gobj_gf_agents.gobj_send_event("EV_DISCONNECTED", {}, self);

        self.clear_timeout();

        return 0;
    }

    /********************************************
     *  From login.js
     ********************************************/
    function ac_login_accepted(self, event, kw, src) {
        self.config.username = kw.username;
        let jwt = kw.jwt;

        /*---------------------------*
         *  Get roles
         *---------------------------*/
        let developer = kw_get_local_storage_value("developer", "false", false);
        developer = true; // TODO quita cuando esté en opción de menú
        __yuno__["developer"] = developer;

        /*---------------------------*
         *  Opciones de developer
         *---------------------------*/
        if (__yuno__.developer) {
//             $$("bottom_toolbar").addView({
//                 view: "button",
//                 autoWidth: true,
//                 maxWidth: 40,
//                 value: "T",
//                 tooltip: "Traffic",
//                 click: function() {
//                     trace_traffic();
//                 }
//             });
//             $$("bottom_toolbar").addView({
//                 view: "button",
//                 autoWidth: true,
//                 maxWidth: 40,
//                 value: "A",
//                 tooltip: "Automata",
//                 click: function() {
//                     trace_automata();
//                 }
//             });
//             $$("bottom_toolbar").addView({
//                 view: "button",
//                 autoWidth: true,
//                 maxWidth: 40,
//                 value: "NP",
//                 tooltip: "No Poll",
//                 click: function() {
//                     set_no_poll();
//                 }
//             });
        }

        /*-----------------------------------------------------------*
         *  With login done it's time to connect to Yuneta backend
         *-----------------------------------------------------------*/
        if (json_object_size(self.config.urls) === 0) {
            display_error_message(
                t("no yuneta backend url available"),
                "Error",
                function () {
                    close_all(self);
                }
            );
        } else {
            do_connect(self, jwt);
        }

        return 0;
    }

    /********************************************
     *  From login.js
     ********************************************/
    function ac_login_denied(self, event, kw, src) {
        close_all(self);
        return 0;
    }

    /********************************************
     *  From login.js
     ********************************************/
    function ac_login_refreshed(self, event, kw, src) {
        return 0;
    }

    /********************************************
     *  From login.js
     ********************************************/
    function ac_logout_done(self, event, kw, src) {
        close_all(self);
        return 0;
    }

    /********************************************
     *  Refused identity_card
     ********************************************/
    function ac_id_refused(self, event, kw, src) {
        close_all(self);
        return 0;
    }

    /********************************************
     *  We are subscribed to __gobj_ka_main__
     *  We manage spaces
     ********************************************/
    function ac_resize(self, event, kw, src) {
        // TODO use publish_event
        // if(self.config.gobj_ui_header) {
        //     self.config.gobj_ui_header.gobj_send_event(
        //         event,
        //         {
        //             x: 0,
        //             y: 0,
        //             height: self.config.header_size,
        //             width: kw.width,
        //         },
        //         self
        //     );
        // }
        // if(self.config.gobj_mw_work_area) {
        //     self.config.gobj_mw_work_area.gobj_send_event(
        //         event,
        //         {
        //             x: 0,
        //             y: self.config.header_size,
        //             width: kw.width,
        //             height: kw.height - self.config.header_size
        //         },
        //         self
        //     );
        // }

        return 0;
    }


    /***************************
     *      GClass/Machine
     ***************************/




    let FSM = {
        "event_list": [
            "EV_ON_OPEN: output",
            "EV_ON_CLOSE: output",
            "EV_IDENTITY_CARD_REFUSED",
            "EV_LOGIN_ACCEPTED",
            "EV_LOGIN_REFRESHED",
            "EV_LOGIN_DENIED",
            "EV_LOGOUT_DONE",
            "EV_RESIZE: output"
        ],
        "state_list": [
            "ST_IDLE"
        ],
        "machine": {
            "ST_IDLE":
                [
                    ["EV_ON_OPEN", ac_on_open, undefined],
                    ["EV_ON_CLOSE", ac_on_close, undefined],
                    ["EV_IDENTITY_CARD_REFUSED", ac_id_refused, undefined],
                    ["EV_LOGIN_ACCEPTED", ac_login_accepted, undefined],
                    ["EV_LOGIN_DENIED", ac_login_denied, undefined],
                    ["EV_LOGIN_REFRESHED", ac_login_refreshed, undefined],
                    ["EV_LOGOUT_DONE", ac_logout_done, undefined],
                    ["EV_RESIZE", ac_resize, undefined]
                ]
        }
    };

    let Yuneta_gui = GObj.__makeSubclass__();
    let proto = Yuneta_gui.prototype; // Easy access to the prototype
    proto.__init__ = function (name, kw) {
        GObj.prototype.__init__.call(
            this,
            FSM,
            CONFIG,
            name,
            "Yuneta_gui",
            kw,
            0
        );
        return this;
    };
    gobj_register_gclass(Yuneta_gui, "Yuneta_gui");


    /******************************
     *      Framework Methods
     ******************************/


    /************************************************
     *      Framework Method create
     ************************************************/
    proto.mt_create = function (kw) {
        let self = this;

        setup_locale(self);
        build_remote_service(self);
        build_ui(self);
        //setup_dev();
    };

    /************************************************
     *      Framework Method destroy
     *      In this point, all childs
     *      and subscriptions are already deleted.
     ************************************************/
    proto.mt_destroy = function () {
    };

    /************************************************
     *      Framework Method start
     ************************************************/
    proto.mt_start = function (kw) {
        let self = this;
        self.gobj_start_tree();
    };

    /************************************************
     *      Framework Method stop
     ************************************************/
    proto.mt_stop = function (kw) {
        let self = this;
    };


    //=======================================================================
    //      Expose the class via the global object
    //=======================================================================
    exports.Yuneta_gui = Yuneta_gui;
    exports.colorModes = colorModes;
    exports.sizes = sizes;

})(this);
