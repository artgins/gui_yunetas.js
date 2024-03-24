/***********************************************************************
 *          Ui_layer.js
 *
 *          Service of layers
 *
 *          Copyright (c) 2024, ArtGins.
 *          All Rights Reserved.
 ***********************************************************************/
(function (exports) {
    'use strict';

    /********************************************
     *  Configuration (C attributes)
     *  Attributes without underscore prefix
     *      will be set in self.config
     *  Attributes with underscore ("_") prefix:
     *      will be set in self.private
     ********************************************/
    let CONFIG = {
        //////////////// Public Attributes //////////////////
        subscriber: null,       // subscriber of publishing messages

        layers: [],             // layers
            // layer: {
            //     id: "",
            //     description: "",
            //     style: ""
            // }

        timeout_retry: 5,       // timeout retry, in seconds
        timeout_idle: 5         // idle timeout, in seconds

        //////////////// Private Attributes /////////////////
    };




                    /***************************
                     *      Commands
                     ***************************/




    /********************************************
     *
     ********************************************/
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




    /********************************************
     *
     ********************************************/
    function sample_local(self)
    {
    }




                    /***************************
                     *      Actions
                     ***************************/




    /********************************************
     *
     ********************************************/
    function ac_timeout(self, event, kw, src)
    {
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

    let Layer = GObj.__makeSubclass__();
    let proto = Layer.prototype; // Easy access to the prototype
    proto.__init__= function(name, kw) {
        GObj.prototype.__init__.call(
            this,
            FSM,
            CONFIG,
            name,
            "Layer",
            kw,
            0
        );
        return this;
    };
    gobj_register_gclass(Layer, "Layer");




                    /***************************
                     *      Framework Methods
                     ***************************/




    /************************************************
     *      Framework Method create
     ************************************************/
    proto.mt_create = function(kw)
    {
        let self = this;

        /*
         *  Child model? subscriber is the parent
         */
        if(self.config.subscriber) {
            self.gobj_subscribe_event(null, {}, self.config.subscriber);
        }

        for(let i=0; i<self.config.layers; i++) {
            let layer = self.config.layers[i];
            $("body").add(
                sprintf("<div id='%s' style='%s'></div>", layer.id, layer.style)
            );
        }
    };

    /************************************************
     *      Framework Method destroy
     *      In this point, all childs
     *      and subscriptions are already deleted.
     ************************************************/
    proto.mt_destroy = function()
    {
    };

    /************************************************
     *      Framework Method start
     ************************************************/
    proto.mt_start = function(kw)
    {
        let self = this;
    };

    /************************************************
     *      Framework Method stop
     ************************************************/
    proto.mt_stop = function(kw)
    {
        let self = this;
    };

    /************************************************
     *      Framework Method stats
     ************************************************/
    proto.mt_stats = function(stats, kw, src)
    {
        let self = this;

        return {};
    };

    /************************************************
     *      Framework Method command
     ************************************************/
    proto.mt_command = function(command, kw, src)
    {
        let self = this;
        switch(command) {
            case "help":
                return cmd_help(self, command, kw, src);
            default:
                log_error(sprintf("Command not found: %s", command));
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
    exports.Layer = Layer;

})(this);
