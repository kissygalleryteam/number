KISSY.add("kg/vc-number/1.2.0/plugins/slide/slide",["node","base"],function(e,t,a,s){var r="",i=t("node").all,n=t("base");s.exports=n.extend({pluginInitializer:function(t){var a=this;!t||e.UA.ie<9||(a._initAttr(t),a._bindEvents())},pluginDestructor:function(){var e=this,t=e.get("vcNumber");t.detach("beforeChange",e.get("beforeChange")),t.detach("afterChange",e.get("afterChange"))},_initAttr:function(e){var t=this;t.set("vcNumber",e),t.set("$target",e.get("$target"))},_renderHtml:function(t,a){var s=this,r=s.get("$target"),n=s.get("slideCls"),l=r.next("."+n.tranCls);l&&l.remove(),i(s.get("outerTpl")).insertAfter(r),l=r.next("."+n.tranCls),a&&l.addClass(n.activeCls),l.html(e.substitute(s.get("moveTpl"),{top:t.top,bottom:t.bottom}))},_bindEvents:function(){var t,a=this,s=a.get("vcNumber"),r=s.get("cls"),i=a.get("slideCls"),n=function(e){var a=e.input,s=a.next("."+i.tranCls);t&&clearTimeout(t),t=setTimeout(function(){a.removeClass(i.hidCls),s&&s.remove()},700)},l=function(t){var n=t.input,l=t.trigger,o=n.next("."+i.tranCls);n.addClass(i.hidCls);var v=Number(n.val()),u=parseFloat(n.attr("data-min"))||s.get("min"),d=parseFloat(n.attr("data-max"))||s.get("max"),C=Number(e.trim(n.attr("data-range")))||s.get("range");if(l.hasClass&&l.hasClass(r.plus)||38==l){if(v+C>d&&(C=d-v),!C)return n.removeClass(i.hidCls),void(o&&o.remove());a._renderHtml({top:v+C,bottom:v}),setTimeout(function(){n.next().addClass(i.activeCls)},50)}else if(l.hasClass&&l.hasClass(r.minus)||40==l){if(u>v-C&&(C=v-u),!C)return n.removeClass(i.hidCls),void(o&&o.remove());a._renderHtml({top:v,bottom:v-C},!0),setTimeout(function(){n.next().removeClass(i.activeCls)},50)}};s.on("beforeChange",l),s.on("afterChange",n),a.set("beforeChange",l),a.set("afterChange",n)}},{ATTRS:{pluginId:{value:"slide"},vcNumber:{value:r},$target:{value:r},beforeChange:{value:r},afterChange:{value:r},slideCls:{value:{activeCls:"active",tranCls:"tran",hidCls:"hideTxt",disabled:"vc-number-disabled"}},outerTpl:{value:'<div class="{cls}"></div>',getter:function(t){var a=this,s=a.get("slideCls");return e.substitute(t,{cls:s.tranCls})}},moveTpl:{value:'<div class="move"><div class="top">{top}</div><div class="bottom">{bottom}</div></div>'}}})});