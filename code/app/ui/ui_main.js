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
        let pstyle = 'border: 1px solid #efefef; padding: 2px';
        let layout = new w2layout({
            box: '#root',
            name: 'main',
            panels: [
                { type: 'top', size: 40, resizable: false, style: pstyle, html: 'top' },
                { type: 'left', size: 200, resizable: false, style: pstyle, html: 'left' },
                { type: 'main', style: pstyle, html: 'main' },
                { type: 'bottom', size: 40, resizable: false, style: pstyle, html: 'bottom' }
            ]
        });

        // let x = new w2toolbar({
        //     box: '#root',
        //     name: 'toolbar',
        //     items: [
        //         {type: 'button', id: 'item1', icon: 'fa-solid fa-bars',
        //             onClick(event) {
        //                 console.log('111 -> Target: '+ event.target, event);
        //             }
        //         },
        //         {type: 'html', id: 'item2',
        //             html(item) {
        //                 let html = '<button class="button" style="padding: 2px">HTML as string</button>';
        //                 return html;
        //             },
        //             onClick(event) {
        //                 console.log('111 -> BIEEEENNN Target: '+ event.target, event);
        //             }
        //         }
        //
        //     ],
        //     onClick(event) {
        //         console.log('222 -> Target: '+ event.target, event);
        //     }
        // });

        // query("#tb_toolbar_item_item1 > .w2ui-tb-icon").addClass("button");
        // query("#tb_toolbar_item_item1 span").css('color', 'red');

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
