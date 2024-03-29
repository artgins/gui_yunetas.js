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
        subscriber: null,       // subscriber of publishing messages

        //////////////// Private Attributes /////////////////
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
         *      Main layout
         *---------------------------------------*/
        let pstyle = 'border: 1px solid #efefef; padding: 5px';
        let layout = new w2layout({
            box: '#layout',
            name: 'layout',
            panels: [
                { type: 'top', size: 45, resizable: true, style: pstyle, html: 'top' },
                { type: 'left', size: 45, resizable: true, style: pstyle, html: 'left' },
                // { type: 'main', style: 'background-color: white;', overflow: 'hidden' },


                { type: 'main', style: pstyle, html: 'content',
                    toolbar: {
                        items: [
                            { type: 'check', id: 'item1', text: 'Check', img: 'icon-page', checked: true },
                            { type: 'break', id: 'break0' },
                            { type: 'menu', id: 'item2', text: 'Drop Down', img: 'icon-folder',
                                items: [
                                    { text: 'Item 1', icon: 'icon-page' },
                                    { text: 'Item 2', icon: 'icon-page' },
                                    { text: 'Item 3', value: 'Item Three', icon: 'icon-page' }
                                ]
                            },
                            { type: 'break', id: 'break1' },
                            { type: 'radio', id: 'item3', group: '1', text: 'Radio 1', img: 'icon-page', tooltip: 'Hint for item 3', checked: true },
                            { type: 'radio', id: 'item4', group: '1', text: 'Radio 2', img: 'icon-page', tooltip: 'Hint for item 4' },
                            { type: 'spacer' },
                            { type: 'button', id: 'item5', text: 'Item 5', icon: 'w2ui-icon-check', tooltip: 'Hint for item 5' }
                        ],
                        onClick(event) {
                            this.owner.html('main', `EVENT: ${event.type}<br>TARGET: ${event.target}`)
                        }
                    }
                },


                { type: 'preview', size: '50%', resizable: true, hidden: true, style: pstyle, html: 'preview' },
                { type: 'right', size: 45, resizable: true, style: pstyle, html: 'right' },
                { type: 'bottom', size: 45, resizable: true, hidden: false, style: pstyle, html: 'bottom' }

            ]
        });

        // $("mybutton").addClass("button";

        /*---------------------------------------*
         *      Ventana user info
         *---------------------------------------*/

        /*---------------------------------------*
         *      Top toolbar
         *---------------------------------------*/

        /*---------------------------------------*
         *      Top toolbar
         *      Menu "app" and "account"
         *---------------------------------------*/

        /*---------------------------------------*
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
     *
     ************************************************************/
    function sample_local(self)
    {
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


    //=======================================================================
    //      Expose the class via the global object
    //=======================================================================
    exports.Ui_main = Ui_main;

})(this);
