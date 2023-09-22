! function(t) {
    t.fn.timeDropper = function(e, d) {
        return t(this).each(function() {
            var d, n = t(this),
                o = !1,
                a = !1,
                i = function(t) {
                    return t < 10 ? "0" + t : t
                },
                r = t(".td-clock").length,
                s = null,
                l = t.extend({
                    format: "h:mm a",
                    autoswitch: !1,
                    minutesInterval: "1",
                    meridians: !1,
                    mousewheel: !1,
                    setCurrentTime: !0,
                    init_animation: "fadein",
                    primaryColor: "#66676b",
                    borderColor: "#66676b",
                    backgroundColor: "#FFF",
                    textColor: "#555"
                }, e);
            n.prop({
                readonly: !0
            }).addClass("td-input"), t("body").append('<div class="td-wrap td-n2" id="td-clock-' + r + '"><div class="td-overlay"></div><div class="td-clock td-init"><div class="td-deg td-n"><div class="td-select"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 35.4" enable-background="new 0 0 100 35.4" xml:space="preserve"><g><path fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M98.1,33C85.4,21.5,68.5,14.5,50,14.5S14.6,21.5,1.9,33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.9" y1="33" x2="1.9" y2="28.6"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="1.9" y1="33" x2="6.3" y2="33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="98.1" y1="33" x2="93.7" y2="33"/><line fill="none" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="98.1" y1="33" x2="98.1" y2="28.6"/></g></svg></div></div><div class="td-medirian"><span class="td-icon-am td-n">AM</span><span class="td-icon-pm td-n">PM</span></div><div class="td-lancette"><div></div><div></div></div><div class="td-time"><span class="on"></span>:<span></span></div></div></div>'), t("head").append("<style>#td-clock-" + r + " .td-clock {color:" + l.textColor + ";background: " + l.backgroundColor + "; box-shadow: 0 0 0 1px " + l.borderColor + ",0 0 0 8px rgba(0, 0, 0, 0.05); } #td-clock-" + r + " .td-clock .td-time span.on { color:" + l.primaryColor + "} #td-clock-" + r + " .td-clock:before { border-color: " + l.borderColor + "} #td-clock-" + r + " .td-select:after { box-shadow: 0 0 0 1px " + l.borderColor + " } #td-clock-" + r + " .td-clock:before,#td-clock-" + r + " .td-select:after {background: " + l.backgroundColor + ";} #td-clock-" + r + " .td-lancette {border: 2px solid " + l.primaryColor + "; opacity:0.1}#td-clock-" + r + " .td-lancette div:after { background: " + l.primaryColor + ";} #td-clock-" + r + " .td-bulletpoint div:after { background:" + l.primaryColor + "; opacity:0.1}</style>");
            var c = t("#td-clock-" + r),
                f = c.find(".td-overlay"),
                u = c.find(".td-clock");
            u.find("svg").attr("style", "stroke:" + l.borderColor);
            var m = -1,
                v = 0,
                p = 0,
                h = function(t) {
                    var e = u.find(".td-time span.on"),
                        d = e.attr("data-id");
                    d || (d = 0);
                    var o = Math.round(23 * t / 360),
                        a = Math.round(59 * t / 360);
                    if (a -= a % parseInt(l.minutesInterval), 0 == e.index() ? (e.attr("data-id", i(o)), l.meridians && (o >= 12 && o < 24 ? (u.find(".td-icon-pm").addClass("td-on"), u.find(".td-icon-am").removeClass("td-on")) : (u.find(".td-icon-am").addClass("td-on"), u.find(".td-icon-pm").removeClass("td-on")), o > 12 && (o -= 12), 0 == o && (o = 12)), e.text(i(o))) : e.attr("data-id", i(a)).text(i(a)), p = t, u.find(".td-deg").css("transform", "rotate(" + t + "deg)"), 0 == e.index()) {
                        var r = Math.round(360 * o / 12);
                        u.find(".td-lancette div:last").css("transform", "rotate(" + r + "deg)")
                    } else u.find(".td-lancette div:first").css("transform", "rotate(" + t + "deg)");
                    var s = u.find(".td-time span:first").attr("data-id"),
                        c = u.find(".td-time span:last").attr("data-id");
                    if (Math.round(s) >= 12 && Math.round(s) < 24) var o = Math.round(s) - 12,
                        f = "pm",
                        m = "PM";
                    else var o = Math.round(s),
                        f = "am",
                        m = "AM";
                    0 == o && (o = 12);
                    var v = l.format.replace(/\b(H)\b/g, Math.round(s)).replace(/\b(h)\b/g, Math.round(o)).replace(/\b(m)\b/g, Math.round(c)).replace(/\b(HH)\b/g, i(Math.round(s))).replace(/\b(hh)\b/g, i(Math.round(o))).replace(/\b(mm)\b/g, i(Math.round(c))).replace(/\b(a)\b/g, f).replace(/\b(A)\b/g, m);
                    n.val(v)
                };
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (a = !0), u.find(".td-time span").on("click", function(e) {
                var d = t(this);
                u.find(".td-time span").removeClass("on"), d.addClass("on");
                var n = parseInt(d.attr("data-id"));
                0 == d.index() ? deg = Math.round(360 * n / 23) : deg = Math.round(360 * n / 59), m = -1, v = deg, p = deg, h(deg)
            }), u.find(".td-deg").on("touchstart mousedown", function(e) {
                e.preventDefault(), clearInterval(d), u.find(".td-deg").removeClass("td-n"), u.find(".td-select").removeClass("td-rubber"), o = !0;
                var n, i, r, s, l = u.offset(),
                    c = {
                        y: l.top + u.height() / 2,
                        x: l.left + u.width() / 2
                    },
                    f = 180 / Math.PI;
                u.removeClass("td-rubber"), t(window).on("touchmove mousemove", function(t) {
                    1 == o && (move = a ? t.originalEvent.touches[0] : t, n = c.y - move.pageY, i = c.x - move.pageX, (r = Math.atan2(n, i) * f) < 0 && (r = 360 + r), -1 == m && (m = r), (s = Math.floor(r - m + v)) < 0 ? s = 360 + s : s > 360 && (s %= 360), h(s))
                })
            }), l.mousewheel && u.on("mousewheel", function(t) {
                t.preventDefault(), u.find(".td-deg").removeClass("td-n"), t.originalEvent.wheelDelta > 0 ? p <= 360 && (t.originalEvent.wheelDelta <= 120 ? p++ : t.originalEvent.wheelDelta > 120 && (p += 20), p > 360 && (p = 0)) : p >= 0 && (t.originalEvent.wheelDelta >= -120 ? p-- : t.originalEvent.wheelDelta < -120 && (p -= 20), p < 0 && (p = 360)), m = -1, v = p, h(p)
            }), t(document).on("touchend mouseup", function() {
                o && (o = !1, l.autoswitch && (u.find(".td-time span").toggleClass("on"), u.find(".td-time span.on").click()), u.find(".td-deg").addClass("td-n"), u.find(".td-select").addClass("td-rubber"))
            });
            ! function(t) {
                var e, d, o = new Date,
                    a = u.find(".td-time span:first"),
                    r = u.find(".td-time span:last");
                if (n.val().length && !l.setCurrentTime) {
                    var s = /\d+/g,
                        c = n.val().split(":");
                    c ? (e = c[0].match(s), d = c[1].match(s), -1 != n.val().indexOf("am") || -1 != n.val().indexOf("AM") || -1 != n.val().indexOf("pm") || -1 != n.val().indexOf("PM") ? -1 != n.val().indexOf("am") || -1 != n.val().indexOf("AM") ? 12 == e && (e = 0) : e < 13 && 24 == (e = parseInt(e) + 12) && (e = 0) : 24 == e && (e = 0)) : (e = i(parseInt(a.text()) ? a.text() : o.getHours()), d = i(parseInt(r.text()) ? r.text() : o.getMinutes()))
                } else e = i(parseInt(a.text()) ? a.text() : o.getHours()), d = i(parseInt(r.text()) ? r.text() : o.getMinutes());
                a.attr("data-id", e).text(e), r.attr("data-id", d).text(d), v = Math.round(360 * e / 23), u.find(".td-lancette div:first").css("transform", "rotate(" + Math.round(360 * d / 59) + "deg)"), h(v), p = v, m = -1
            }(), n.focus(function(t) {
                t.preventDefault(), n.blur()
            }), n.click(function(t) {
                clearInterval(s), c.removeClass("td-fadeout"), c.addClass("td-show").addClass("td-" + l.init_animation), u.css({
                    top: n.offset().top + (n.outerHeight() - 8),
                    left: n.offset().left + n.outerWidth() / 2 - u.outerWidth() / 2
                }), u.hasClass("td-init") && (d = setInterval(function() {
                    u.find(".td-select").addClass("td-alert"), setTimeout(function() {
                        u.find(".td-select").removeClass("td-alert")
                    }, 1e3)
                }, 2e3), u.removeClass("td-init"))
            }), f.click(function() {
                c.addClass("td-fadeout").removeClass("td-" + l.init_animation), s = setTimeout(function() {
                    c.removeClass("td-show")
                }, 300)
            }), t(window).on("resize", function() {
                u.css({
                    top: n.offset().top + (n.outerHeight() - 8),
                    left: n.offset().left + n.outerWidth() / 2 - u.outerWidth() / 2
                })
            })
        })
    }
}(jQuery);