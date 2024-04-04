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
                callback: "",
                html: `
                    <div class="">
                        <button class="button without-border">
                            <span style="width:1.5em;height:1.5em">
                                <svg id="icon-state-yuneta" viewBox="0 0 448 512"><path fill="${self.config.color_yuneta_disconnected}" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                            </span>
                        </button>
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
                callback: "",
                html: `
                    <div class="buttons">
                        <figure class="" style="padding-top: 4px; width: 80px; height: 38px;">
                            <img src="${image_file}" alt="App logo"/>
                        </figure>
                    </div>
                `
            },
            {
                description: "Change theme, Username, Account menu",
                position: "right",
                callback: "",
                html: `
                    <div class="">
                        <button class="button without-border">
                            <span style="width:1.5em;height:1.5em">
                                <i class="fas fa-lg fa-sun"></i>
                            </span>
                        </button>
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

    /************************************************************
     *  Color luna: #8156F5
     *  Color sol: #FFB70F
     ************************************************************/
    function html_change_theme(self)
    {
        return `
        <div class="bd-nav-themes">
            <button id="js-cycle" class="bd-cycle js-burger is-moon" data-target="js-themes">
              <div class="bd-cycles">
                <div class="bd-cycle-sun">
                  <span class="icon">
                    <i class="fas fa-lg fa-sun" aria-hidden="true"></i>
                  </span>
                </div>

                <div class="bd-cycle-moon">
                  <span class="icon">
                    <i class="fas fa-lg fa-moon" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </button>

            <div id="js-themes" class="bd-nav-menu is-cycles js-menu js-themes">
              <button data-scheme="light" class="bd-nav-item is-sun" aria-label="Light mode">
                <span class="icon">
                  <i class="fas fa-sun" aria-hidden="true"></i>
                </span>
                <span>Light</span>
              </button>

              <button data-scheme="dark" class="bd-nav-item is-moon is-active" aria-label="Dark mode">
                <span class="icon">
                  <i class="fas fa-moon" aria-hidden="true"></i>
                </span>
                <span>Dark</span>
              </button>

              <button data-scheme="system" class="bd-nav-item is-system" aria-label="System mode">
                <span class="icon">
                  <i class="fas fa-desktop" aria-hidden="true"></i>
                </span>
                <span>System</span>
              </button>
            </div>
          </div>
        `;
    }




                    /***************************
                     *      Actions
                     ***************************/




    /************************************************************
     *
     ************************************************************/
    function ac_timeout(self, event, kw, src)
    {
        // trace_msg("ac_timeout");
        //self.set_timeout(1*1000);
            return 0;
    }




                    /***************************
                     *      GClass/Machine
                     ***************************/




    let FSM = {
        "event_list": [
            "EV_TIMEOUT"
        ],
        "state_list": [
            "ST_IDLE"
        ],
        "machine": {
            "ST_IDLE":
            [
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
