cc.Class({
    extends: cc.Component,
    properties: {
    },
    onLoad: function(){},
    on_btn_onclick: function(){
        cc.director.loadScene("StructureScene");
    },
});