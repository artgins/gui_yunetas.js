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

        timeout_retry: 5,       // timeout retry, in seconds
        timeout_idle: 5         // idle timeout, in seconds

        //////////////// Private Attributes /////////////////
    };




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

        return {};
    };


    //=======================================================================
    //      Expose the class via the global object
    //=======================================================================
    exports.Layer = Layer;

})(this);
