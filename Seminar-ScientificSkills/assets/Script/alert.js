// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        _alert: null,
        _btnOK: null,
        _content: null,
        _btnOKCallback: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._alert = cc.find("Canvas/alert");
        this._content = cc.find("Canvas/alert/background/content").getComponent(cc.Label);
        this._btnOK = cc.find("Canvas/alert/background/btn_ok").getComponent(cc.Button);

        this_btnOK.active = false;
        cc.vv.alert = this;
    },

    onBtnClicked:function(event){
        if(event.target.name == "btn_ok"){
            if(this._btnOKCallback){
                this._btnOKCallback();
            }
        }
    this._alert.active = false;
    this._btnOKCallback = null;
    },
    show:function(content, callback){
        this._alert.active = true;
        this._btnOKCallback = callback;
        this._content.string = content;
    },

    start () {

    },

    // update (dt) {},
});
