var cursoreffects = function(t) {
    "use strict";
    return t.bubbleCursor = function(t) {
        let e, i, n, o = t && t.element,
            s = o || document.body,
            h = window.innerWidth,
            c = window.innerHeight,
            l = {
                x: h / 2,
                y: h / 2
            },
            d = [],
            a = [];
        const r = window.matchMedia("(prefers-reduced-motion: reduce)");

        function A() {
            if (r.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", o ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = h, e.height = c), s.addEventListener("mousemove", g), s.addEventListener("touchmove", m, {
                passive: !0
            }), s.addEventListener("touchstart", m, {
                passive: !0
            }), window.addEventListener("resize", u), f()
        }

        function u(t) {
            h = window.innerWidth, c = window.innerHeight, o ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = h, e.height = c)
        }

        function m(t) {
            if (t.touches.length > 0)
                for (let e = 0; e < t.touches.length; e++) p(t.touches[e].clientX, t.touches[e].clientY, a[Math.floor(Math.random() * a.length)])
        }

        function g(t) {
            if (o) {
                const e = s.getBoundingClientRect();
                l.x = t.clientX - e.left, l.y = t.clientY - e.top
            } else l.x = t.clientX, l.y = t.clientY;
            p(l.x, l.y)
        }

        function p(t, e, i) {
            d.push(new y(t, e, i))
        }

        function f() {
            ! function() {
                i.clearRect(0, 0, h, c);
                for (let t = 0; t < d.length; t++) d[t].update(i);
                for (let t = d.length - 1; t >= 0; t--) d[t].lifeSpan < 0 && d.splice(t, 1)
            }(), n = requestAnimationFrame(f)
        }

        function y(t, e, i) {
            const n = Math.floor(60 * Math.random() + 60);
            this.initialLifeSpan = n, this.lifeSpan = n, this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 10),
                y: -1 * Math.random() - .4
            }, this.position = {
                x: t,
                y: e
            }, this.canv = i, this.baseDimension = 4, this.update = function(t) {
                this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.velocity.x += 2 * (Math.random() < .5 ? -1 : 1) / 75, this.velocity.y -= Math.random() / 600, this.lifeSpan--;
                const e = .2 + (this.initialLifeSpan - this.lifeSpan) / this.initialLifeSpan;
                t.fillStyle = "#e6f1f7", t.strokeStyle = "#3a92c5", t.beginPath(), t.arc(this.position.x - this.baseDimension / 2 * e, this.position.y - this.baseDimension / 2, this.baseDimension * e, 0, 2 * Math.PI), t.stroke(), t.fill(), t.closePath()
            }
        }
        r.onchange = () => {
            r.matches ? this.destroy() : A()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", g), s.removeEventListener("touchmove", m), s.removeEventListener("touchstart", m), window.addEventListener("resize", u)
        }, A()
    }, t.clockCursor = function(t) {
        let e, i, n, o = t && t.element,
            s = o || document.body,
            h = window.innerWidth,
            c = window.innerHeight,
            l = {
                x: h / 2,
                y: h / 2
            };
        const d = t && t.dateColor || "blue",
            a = t && t.faceColor || "black",
            r = t && t.secondsColor || "red",
            A = t && t.minutesColor || "black",
            u = t && t.hoursColor || "black",
            m = .4;
        let g = new Date,
            p = g.getDate(),
            f = g.getYear() + 1900;
        const y = (" " + ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"][g.getDay()] + " " + p + " " + ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"][g.getMonth()] + " " + f).split(""),
            v = ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "1", "2"],
            w = v.length,
            x = ["•", "•", "•"],
            E = ["•", "•", "•", "•"],
            C = ["•", "•", "•", "•", "•"],
            M = 360 / w,
            L = 360 / y.length,
            B = 45 / 6.5,
            b = [],
            R = [],
            Y = [],
            S = [],
            W = [],
            H = [],
            I = [],
            X = [],
            T = [];
        var D = parseInt(y.length + w + x.length + E.length + C.length) + 1;
        const F = window.matchMedia("(prefers-reduced-motion: reduce)");

        function z() {
            if (F.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", o ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = h, e.height = c), i.font = "10px sans-serif", i.textAlign = "center", i.textBaseline = "middle";
            for (let t = 0; t < D; t++) b[t] = 0, R[t] = 0, Y[t] = 0, S[t] = 0;
            for (let t = 0; t < y.length; t++) T[t] = {
                color: d,
                value: y[t]
            };
            for (let t = 0; t < v.length; t++) X[t] = {
                color: a,
                value: v[t]
            };
            for (let t = 0; t < x.length; t++) I[t] = {
                color: u,
                value: x[t]
            };
            for (let t = 0; t < E.length; t++) H[t] = {
                color: A,
                value: E[t]
            };
            for (let t = 0; t < C.length; t++) W[t] = {
                color: r,
                value: C[t]
            };
            s.addEventListener("mousemove", U), s.addEventListener("touchmove", J, {
                passive: !0
            }), s.addEventListener("touchstart", J, {
                passive: !0
            }), window.addEventListener("resize", P), Q()
        }

        function P(t) {
            h = window.innerWidth, c = window.innerHeight, o ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = h, e.height = c)
        }

        function J(t) {
            if (t.touches.length > 0)
                if (o) {
                    const e = s.getBoundingClientRect();
                    l.x = t.touches[0].clientX - e.left, l.y = t.touches[0].clientY - e.top
                } else l.x = t.touches[0].clientX, l.y = t.touches[0].clientY
        }

        function U(t) {
            if (o) {
                const e = s.getBoundingClientRect();
                l.x = t.clientX - e.left, l.y = t.clientY - e.top
            } else l.x = t.clientX, l.y = t.clientY
        }

        function Q() {
            ! function() {
                Y[0] = Math.round(b[0] += (l.y - b[0]) * m), S[0] = Math.round(R[0] += (l.x - R[0]) * m);
                for (let t = 1; t < D; t++) Y[t] = Math.round(b[t] += (Y[t - 1] - b[t]) * m), S[t] = Math.round(R[t] += (S[t - 1] - R[t]) * m), b[t - 1] >= c - 80 && (b[t - 1] = c - 80), R[t - 1] >= h - 80 && (R[t - 1] = h - 80)
            }(),
            function() {
                i.clearRect(0, 0, h, c);
                const t = new Date,
                    e = t.getSeconds(),
                    n = Math.PI * (e - 15) / 30,
                    o = t.getMinutes(),
                    s = Math.PI * (o - 15) / 30,
                    l = t.getHours(),
                    d = Math.PI * (l - 3) / 6 + Math.PI * parseInt(t.getMinutes()) / 360;
                for (let t = 0; t < T.length; t++) T[t].y = b[t] + 67.5 * Math.sin(-n + t * L * Math.PI / 180), T[t].x = R[t] + 67.5 * Math.cos(-n + t * L * Math.PI / 180), i.fillStyle = T[t].color, i.fillText(T[t].value, T[t].x, T[t].y);
                for (let t = 0; t < X.length; t++) X[t].y = b[T.length + t] + 45 * Math.sin(t * M * Math.PI / 180), X[t].x = R[T.length + t] + 45 * Math.cos(t * M * Math.PI / 180), i.fillStyle = X[t].color, i.fillText(X[t].value, X[t].x, X[t].y);
                for (let t = 0; t < I.length; t++) I[t].y = b[T.length + w + t] + 0 + t * B * Math.sin(d), I[t].x = R[T.length + w + t] + 0 + t * B * Math.cos(d), i.fillStyle = I[t].color, i.fillText(I[t].value, I[t].x, I[t].y);
                for (let t = 0; t < H.length; t++) H[t].y = b[T.length + w + I.length + t] + 0 + t * B * Math.sin(s), H[t].x = R[T.length + w + I.length + t] + 0 + t * B * Math.cos(s), i.fillStyle = H[t].color, i.fillText(H[t].value, H[t].x, H[t].y);
                for (let t = 0; t < W.length; t++) W[t].y = b[T.length + w + I.length + H.length + t] + 0 + t * B * Math.sin(n), W[t].x = R[T.length + w + I.length + H.length + t] + 0 + t * B * Math.cos(n), i.fillStyle = W[t].color, i.fillText(W[t].value, W[t].x, W[t].y)
            }(), n = requestAnimationFrame(Q)
        }
        F.onchange = () => {
            F.matches ? this.destroy() : z()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", U), s.removeEventListener("touchmove", J), s.removeEventListener("touchstart", J), window.addEventListener("resize", P)
        }, z()
    }, t.emojiCursor = function(t) {
        const e = t && t.emoji || ["😀", "😂", "😆", "😊"];
        let i = t && t.element,
            n = i || document.body,
            o = window.innerWidth,
            s = window.innerHeight;
        const h = {
                x: o / 2,
                y: o / 2
            },
            c = {
                x: o / 2,
                y: o / 2
            };
        let l = 0;
        const d = [],
            a = [];
        let r, A, u;
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");

        function g() {
            if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            r = document.createElement("canvas"), A = r.getContext("2d"), r.style.top = "0px", r.style.left = "0px", r.style.pointerEvents = "none", i ? (r.style.position = "absolute", n.appendChild(r), r.width = n.clientWidth, r.height = n.clientHeight) : (r.style.position = "fixed", document.body.appendChild(r), r.width = o, r.height = s), A.font = "21px serif", A.textBaseline = "middle", A.textAlign = "center", e.forEach((t => {
                let e = A.measureText(t),
                    i = document.createElement("canvas"),
                    n = i.getContext("2d");
                i.width = e.width, i.height = 2 * e.actualBoundingBoxAscent, n.textAlign = "center", n.font = "21px serif", n.textBaseline = "middle", n.fillText(t, i.width / 2, e.actualBoundingBoxAscent), a.push(i)
            })), n.addEventListener("mousemove", y, {
                passive: !0
            }), n.addEventListener("touchmove", f, {
                passive: !0
            }), n.addEventListener("touchstart", f, {
                passive: !0
            }), window.addEventListener("resize", p), w()
        }

        function p(t) {
            o = window.innerWidth, s = window.innerHeight, i ? (r.width = n.clientWidth, r.height = n.clientHeight) : (r.width = o, r.height = s)
        }

        function f(t) {
            if (t.touches.length > 0)
                for (let e = 0; e < t.touches.length; e++) v(t.touches[e].clientX, t.touches[e].clientY, a[Math.floor(Math.random() * a.length)])
        }

        function y(t) {
            t.timeStamp - l < 16 || window.requestAnimationFrame((() => {
                if (i) {
                    const e = n.getBoundingClientRect();
                    h.x = t.clientX - e.left, h.y = t.clientY - e.top
                } else h.x = t.clientX, h.y = t.clientY;
                Math.hypot(h.x - c.x, h.y - c.y) > 1 && (v(h.x, h.y, a[Math.floor(Math.random() * e.length)]), c.x = h.x, c.y = h.y, l = t.timeStamp)
            }))
        }

        function v(t, e, i) {
            d.push(new x(t, e, i))
        }

        function w() {
            ! function() {
                A.clearRect(0, 0, o, s);
                for (let t = 0; t < d.length; t++) d[t].update(A);
                for (let t = d.length - 1; t >= 0; t--) d[t].lifeSpan < 0 && d.splice(t, 1)
            }(), u = requestAnimationFrame(w)
        }

        function x(t, e, i) {
            const n = Math.floor(60 * Math.random() + 80);
            this.initialLifeSpan = n, this.lifeSpan = n, this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: .4 * Math.random() + .8
            }, this.position = {
                x: t,
                y: e
            }, this.canv = i, this.update = function(t) {
                this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.y += .05;
                const e = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                t.drawImage(this.canv, this.position.x - this.canv.width / 2 * e, this.position.y - this.canv.height / 2, this.canv.width * e, this.canv.height * e)
            }
        }
        m.onchange = () => {
            m.matches ? this.destroy() : g()
        }, this.destroy = () => {
            r.remove(), cancelAnimationFrame(u), n.removeEventListener("mousemove", y), n.removeEventListener("touchmove", f), n.removeEventListener("touchstart", f), window.addEventListener("resize", p)
        }, g()
    }, t.fairyDustCursor = function(t) {
        let e = t && t.colors || ["#D61C59", "#E7D84B", "#1B8798"],
            i = t && t.element,
            n = i || document.body,
            o = window.innerWidth,
            s = window.innerHeight;
        const h = {
                x: o / 2,
                y: o / 2
            },
            c = {
                x: o / 2,
                y: o / 2
            },
            l = [],
            d = [];
        let a, r, A;
        const u = window.matchMedia("(prefers-reduced-motion: reduce)");

        function m() {
            if (u.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            a = document.createElement("canvas"), r = a.getContext("2d"), a.style.top = "0px", a.style.left = "0px", a.style.pointerEvents = "none", i ? (a.style.position = "absolute", n.appendChild(a), a.width = n.clientWidth, a.height = n.clientHeight) : (a.style.position = "fixed", n.appendChild(a), a.width = o, a.height = s), r.font = "21px serif", r.textBaseline = "middle", r.textAlign = "center", e.forEach((t => {
                let e = r.measureText("*"),
                    i = document.createElement("canvas"),
                    n = i.getContext("2d");
                i.width = e.width, i.height = e.actualBoundingBoxAscent + e.actualBoundingBoxDescent, n.fillStyle = t, n.textAlign = "center", n.font = "21px serif", n.textBaseline = "middle", n.fillText("*", i.width / 2, e.actualBoundingBoxAscent), d.push(i)
            })), n.addEventListener("mousemove", f), n.addEventListener("touchmove", p, {
                passive: !0
            }), n.addEventListener("touchstart", p, {
                passive: !0
            }), window.addEventListener("resize", g), v()
        }

        function g(t) {
            o = window.innerWidth, s = window.innerHeight, i ? (a.width = n.clientWidth, a.height = n.clientHeight) : (a.width = o, a.height = s)
        }

        function p(t) {
            if (t.touches.length > 0)
                for (let e = 0; e < t.touches.length; e++) y(t.touches[e].clientX, t.touches[e].clientY, d[Math.floor(Math.random() * d.length)])
        }

        function f(t) {
            window.requestAnimationFrame((() => {
                if (i) {
                    const e = n.getBoundingClientRect();
                    h.x = t.clientX - e.left, h.y = t.clientY - e.top
                } else h.x = t.clientX, h.y = t.clientY;
                Math.hypot(h.x - c.x, h.y - c.y) > 1.5 && (y(h.x, h.y, d[Math.floor(Math.random() * e.length)]), c.x = h.x, c.y = h.y)
            }))
        }

        function y(t, e, i) {
            l.push(new w(t, e, i))
        }

        function v() {
            ! function() {
                r.clearRect(0, 0, o, s);
                for (let t = 0; t < l.length; t++) l[t].update(r);
                for (let t = l.length - 1; t >= 0; t--) l[t].lifeSpan < 0 && l.splice(t, 1)
            }(), A = requestAnimationFrame(v)
        }

        function w(t, e, i) {
            const n = Math.floor(30 * Math.random() + 60);
            this.initialLifeSpan = n, this.lifeSpan = n, this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: .7 * Math.random() + .9
            }, this.position = {
                x: t,
                y: e
            }, this.canv = i, this.update = function(t) {
                this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.y += .02;
                const e = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                t.drawImage(this.canv, this.position.x - this.canv.width / 2 * e, this.position.y - this.canv.height / 2, this.canv.width * e, this.canv.height * e)
            }
        }
        u.onchange = () => {
            u.matches ? this.destroy() : m()
        }, this.destroy = () => {
            a.remove(), cancelAnimationFrame(A), n.removeEventListener("mousemove", f), n.removeEventListener("touchmove", p), n.removeEventListener("touchstart", p), window.addEventListener("resize", g)
        }, m()
    }, t.followingDotCursor = function(t) {
        let e, i, n = t && t.element,
            o = n || document.body,
            s = window.innerWidth,
            h = window.innerHeight,
            c = {
                x: s / 2,
                y: s / 2
            },
            l = new function(t, e, i, n) {
                this.position = {
                    x: t,
                    y: e
                }, this.width = i, this.lag = n, this.moveTowards = function(t, e, i) {
                    this.position.x += (t - this.position.x) / this.lag, this.position.y += (e - this.position.y) / this.lag, i.fillStyle = d, i.beginPath(), i.arc(this.position.x, this.position.y, this.width, 0, 2 * Math.PI), i.fill(), i.closePath()
                }
            }(s / 2, h / 2, 10, 10),
            d = t?.color || "#323232a6";
        const a = window.matchMedia("(prefers-reduced-motion: reduce)");

        function r() {
            if (a.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", n ? (e.style.position = "absolute", o.appendChild(e), e.width = o.clientWidth, e.height = o.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = s, e.height = h), o.addEventListener("mousemove", u), window.addEventListener("resize", A), m()
        }

        function A(t) {
            s = window.innerWidth, h = window.innerHeight, n ? (e.width = o.clientWidth, e.height = o.clientHeight) : (e.width = s, e.height = h)
        }

        function u(t) {
            if (n) {
                const e = o.getBoundingClientRect();
                c.x = t.clientX - e.left, c.y = t.clientY - e.top
            } else c.x = t.clientX, c.y = t.clientY
        }

        function m() {
            i.clearRect(0, 0, s, h), l.moveTowards(c.x, c.y, i), requestAnimationFrame(m)
        }
        a.onchange = () => {
            a.matches ? this.destroy() : r()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(m), o.removeEventListener("mousemove", u), window.addEventListener("resize", A)
        }, r()
    }, t.ghostCursor = function(t) {
        let e, i, n, o = t && t.element,
            s = o || document.body,
            h = window.innerWidth,
            c = window.innerHeight,
            l = {
                x: h / 2,
                y: h / 2
            },
            d = [],
            a = new Image;
        a.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
        const r = window.matchMedia("(prefers-reduced-motion: reduce)");

        function A() {
            if (r.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", o ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = h, e.height = c), s.addEventListener("mousemove", g), s.addEventListener("touchmove", m, {
                passive: !0
            }), s.addEventListener("touchstart", m, {
                passive: !0
            }), window.addEventListener("resize", u), f()
        }

        function u(t) {
            h = window.innerWidth, c = window.innerHeight, o ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = h, e.height = c)
        }

        function m(t) {
            if (t.touches.length > 0)
                for (let e = 0; e < t.touches.length; e++) p(t.touches[e].clientX, t.touches[e].clientY, a)
        }

        function g(t) {
            if (o) {
                const e = s.getBoundingClientRect();
                l.x = t.clientX - e.left, l.y = t.clientY - e.top
            } else l.x = t.clientX, l.y = t.clientY;
            p(l.x, l.y, a)
        }

        function p(t, e, i) {
            d.push(new y(t, e, i))
        }

        function f() {
            ! function() {
                i.clearRect(0, 0, h, c);
                for (let t = 0; t < d.length; t++) d[t].update(i);
                for (let t = d.length - 1; t >= 0; t--) d[t].lifeSpan < 0 && d.splice(t, 1)
            }(), n = requestAnimationFrame(f)
        }

        function y(t, e, i) {
            this.initialLifeSpan = 40, this.lifeSpan = 40, this.position = {
                x: t,
                y: e
            }, this.image = i, this.update = function(t) {
                this.lifeSpan--;
                const e = Math.max(this.lifeSpan / this.initialLifeSpan, 0);
                t.globalAlpha = e, t.drawImage(this.image, this.position.x, this.position.y)
            }
        }
        r.onchange = () => {
            r.matches ? this.destroy() : A()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", g), s.removeEventListener("touchmove", m), s.removeEventListener("touchstart", m), window.addEventListener("resize", u)
        }, A()
    }, t.rainbowCursor = function(t) {
        let e, i, n, o = t && t.element,
            s = o || document.body,
            h = window.innerWidth,
            c = window.innerHeight,
            l = {
                x: h / 2,
                y: h / 2
            },
            d = [];
        const a = t?.length || 20,
            r = t?.colors || ["#FE0000", "#FD8C00", "#FFE500", "#119F0B", "#0644B3", "#C22EDC"],
            A = t.size || 3;
        let u = !1;
        const m = window.matchMedia("(prefers-reduced-motion: reduce)");

        function g() {
            if (m.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", o ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = h, e.height = c), s.addEventListener("mousemove", f), window.addEventListener("resize", p), y()
        }

        function p(t) {
            h = window.innerWidth, c = window.innerHeight, o ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = h, e.height = c)
        }

        function f(t) {
            if (o) {
                const e = s.getBoundingClientRect();
                l.x = t.clientX - e.left, l.y = t.clientY - e.top
            } else l.x = t.clientX, l.y = t.clientY;
            if (!1 === u) {
                u = !0;
                for (let t = 0; t < a; t++) e = l.x, i = l.y, void 0, d.push(new v(e, i))
            }
            var e, i
        }

        function y() {
            ! function() {
                i.clearRect(0, 0, h, c), i.lineJoin = "round";
                let t = [],
                    e = l.x,
                    n = l.y;
                d.forEach((function(i, o, s) {
                    let h = s[o + 1] || s[0];
                    i.position.x = e, i.position.y = n, t.push({
                        x: e,
                        y: n
                    }), e += .4 * (h.position.x - i.position.x), n += .4 * (h.position.y - i.position.y)
                })), r.forEach(((e, n) => {
                    i.beginPath(), i.strokeStyle = e, t.length && i.moveTo(t[0].x, t[0].y + n * (A - 1)), t.forEach(((t, e) => {
                        0 !== e && i.lineTo(t.x, t.y + n * A)
                    })), i.lineWidth = A, i.lineCap = "round", i.stroke()
                }))
            }(), n = requestAnimationFrame(y)
        }

        function v(t, e) {
            this.position = {
                x: t,
                y: e
            }
        }
        m.onchange = () => {
            m.matches ? this.destroy() : g()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", f), window.addEventListener("resize", p)
        }, g()
    }, t.snowflakeCursor = function(t) {
        let e, i, n, o = t && t.element,
            s = o || document.body,
            h = ["❄️"],
            c = window.innerWidth,
            l = window.innerHeight,
            d = {
                x: c / 2,
                y: c / 2
            },
            a = [],
            r = [];
        const A = window.matchMedia("(prefers-reduced-motion: reduce)");

        function u() {
            if (A.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", o ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = c, e.height = l), i.font = "12px serif", i.textBaseline = "middle", i.textAlign = "center", h.forEach((t => {
                let e = i.measureText(t),
                    n = document.createElement("canvas"),
                    o = n.getContext("2d");
                n.width = e.width, n.height = 2 * e.actualBoundingBoxAscent, o.textAlign = "center", o.font = "12px serif", o.textBaseline = "middle", o.fillText(t, n.width / 2, e.actualBoundingBoxAscent), r.push(n)
            })), s.addEventListener("mousemove", p), s.addEventListener("touchmove", g, {
                passive: !0
            }), s.addEventListener("touchstart", g, {
                passive: !0
            }), window.addEventListener("resize", m), y()
        }

        function m(t) {
            c = window.innerWidth, l = window.innerHeight, o ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = c, e.height = l)
        }

        function g(t) {
            if (t.touches.length > 0)
                for (let e = 0; e < t.touches.length; e++) f(t.touches[e].clientX, t.touches[e].clientY, r[Math.floor(Math.random() * r.length)])
        }

        function p(t) {
            if (o) {
                const e = s.getBoundingClientRect();
                d.x = t.clientX - e.left, d.y = t.clientY - e.top
            } else d.x = t.clientX, d.y = t.clientY;
            f(d.x, d.y, r[Math.floor(Math.random() * h.length)])
        }

        function f(t, e, i) {
            a.push(new v(t, e, i))
        }

        function y() {
            ! function() {
                i.clearRect(0, 0, c, l);
                for (let t = 0; t < a.length; t++) a[t].update(i);
                for (let t = a.length - 1; t >= 0; t--) a[t].lifeSpan < 0 && a.splice(t, 1)
            }(), n = requestAnimationFrame(y)
        }

        function v(t, e, i) {
            const n = Math.floor(60 * Math.random() + 80);
            this.initialLifeSpan = n, this.lifeSpan = n, this.velocity = {
                x: (Math.random() < .5 ? -1 : 1) * (Math.random() / 2),
                y: 1 + Math.random()
            }, this.position = {
                x: t,
                y: e
            }, this.canv = i, this.update = function(t) {
                this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.lifeSpan--, this.velocity.x += 2 * (Math.random() < .5 ? -1 : 1) / 75, this.velocity.y -= Math.random() / 300;
                const e = Math.max(this.lifeSpan / this.initialLifeSpan, 0),
                    i = .0174533 * (2 * this.lifeSpan);
                t.translate(this.position.x, this.position.y), t.rotate(i), t.drawImage(this.canv, -this.canv.width / 2 * e, -this.canv.height / 2, this.canv.width * e, this.canv.height * e), t.rotate(-i), t.translate(-this.position.x, -this.position.y)
            }
        }
        A.onchange = () => {
            A.matches ? this.destroy() : u()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", p), s.removeEventListener("touchmove", g), s.removeEventListener("touchstart", g), window.addEventListener("resize", m)
        }, u()
    }, t.springyEmojiCursor = function(t) {
        let e, i, n, o, s = t && t.emoji || "🤪",
            h = t && t.element,
            c = h || document.body,
            l = window.innerWidth,
            d = window.innerHeight,
            a = {
                x: l / 2,
                y: l / 2
            },
            r = [];
        const A = window.matchMedia("(prefers-reduced-motion: reduce)");

        function u() {
            if (A.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", h ? (e.style.position = "absolute", c.appendChild(e), e.width = c.clientWidth, e.height = c.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = l, e.height = d), i.font = "16px serif", i.textBaseline = "middle", i.textAlign = "center";
            let t = i.measureText(s),
                n = document.createElement("canvas"),
                a = n.getContext("2d");
            n.width = t.width, n.height = 2 * t.actualBoundingBoxAscent, a.textAlign = "center", a.font = "16px serif", a.textBaseline = "middle", a.fillText(s, n.width / 2, t.actualBoundingBoxAscent), o = n;
            let u = 0;
            for (u = 0; u < 7; u++) r[u] = new w(o);
            c.addEventListener("mousemove", p), c.addEventListener("touchmove", g, {
                passive: !0
            }), c.addEventListener("touchstart", g, {
                passive: !0
            }), window.addEventListener("resize", m), f()
        }

        function m(t) {
            l = window.innerWidth, d = window.innerHeight, h ? (e.width = c.clientWidth, e.height = c.clientHeight) : (e.width = l, e.height = d)
        }

        function g(t) {
            if (t.touches.length > 0)
                if (h) {
                    const e = c.getBoundingClientRect();
                    a.x = t.touches[0].clientX - e.left, a.y = t.touches[0].clientY - e.top
                } else a.x = t.touches[0].clientX, a.y = t.touches[0].clientY
        }

        function p(t) {
            if (h) {
                const e = c.getBoundingClientRect();
                a.x = t.clientX - e.left, a.y = t.clientY - e.top
            } else a.x = t.clientX, a.y = t.clientY
        }

        function f() {
            ! function() {
                e.width = e.width, r[0].position.x = a.x, r[0].position.y = a.y;
                for (let t = 1; t < 7; t++) {
                    let n = new y(0, 0);
                    t > 0 && v(t - 1, t, n), t < 6 && v(t + 1, t, n);
                    let o, s, h = new y(10 * -r[t].velocity.x, 10 * -r[t].velocity.y),
                        c = new y((n.X + h.X) / 1, (n.Y + h.Y) / 1 + 50);
                    r[t].velocity.x += .01 * c.X, r[t].velocity.y += .01 * c.Y, Math.abs(r[t].velocity.x) < .1 && Math.abs(r[t].velocity.y) < .1 && Math.abs(c.X) < .1 && Math.abs(c.Y) < .1 && (r[t].velocity.x = 0, r[t].velocity.y = 0), r[t].position.x += r[t].velocity.x, r[t].position.y += r[t].velocity.y, o = e.clientHeight, s = e.clientWidth, r[t].position.y >= o - 11 - 1 && (r[t].velocity.y > 0 && (r[t].velocity.y = .7 * -r[t].velocity.y), r[t].position.y = o - 11 - 1), r[t].position.x >= s - 11 && (r[t].velocity.x > 0 && (r[t].velocity.x = .7 * -r[t].velocity.x), r[t].position.x = s - 11 - 1), r[t].position.x < 0 && (r[t].velocity.x < 0 && (r[t].velocity.x = .7 * -r[t].velocity.x), r[t].position.x = 0), r[t].draw(i)
                }
            }(), n = requestAnimationFrame(f)
        }

        function y(t, e) {
            this.X = t, this.Y = e
        }

        function v(t, e, i) {
            let n = r[t].position.x - r[e].position.x,
                o = r[t].position.y - r[e].position.y,
                s = Math.sqrt(n * n + o * o);
            if (s > 10) {
                let t = 10 * (s - 10);
                i.X += n / s * t, i.Y += o / s * t
            }
        }

        function w(t) {
            this.position = {
                x: a.x,
                y: a.y
            }, this.velocity = {
                x: 0,
                y: 0
            }, this.canv = t, this.draw = function(t) {
                t.drawImage(this.canv, this.position.x - this.canv.width / 2, this.position.y - this.canv.height / 2, this.canv.width, this.canv.height)
            }
        }
        A.onchange = () => {
            A.matches ? this.destroy() : u()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), c.removeEventListener("mousemove", p), c.removeEventListener("touchmove", g), c.removeEventListener("touchstart", g), window.addEventListener("resize", m)
        }, u()
    }, t.trailingCursor = function(t) {
        let e, i, n, o = t && t.element,
            s = o || document.body,
            h = window.innerWidth,
            c = window.innerHeight,
            l = {
                x: h / 2,
                y: h / 2
            },
            d = [];
        const a = t.particles || 15;
        let r = !1,
            A = new Image;
        A.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATCAYAAACk9eypAAAAAXNSR0IArs4c6QAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAhGVYSWZNTQAqAAAACAAFARIAAwAAAAEAAQAAARoABQAAAAEAAABKARsABQAAAAEAAABSASgAAwAAAAEAAgAAh2kABAAAAAEAAABaAAAAAAAAAEgAAAABAAAASAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADKADAAQAAAABAAAAEwAAAAAChpcNAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABqElEQVQoFY3SPUvDQBgH8BREpRHExYiDgmLFl6WC+AYmWeyLg4i7buJX8DMpOujgyxGvUYeCgzhUQUSKKLUS0+ZyptXh8Z5Ti621ekPyJHl+uftfomhaf9Ei5JyxXKfynyEA6EYcLHpwyflT958GAQ7DTABNHd8EbtDbEH2BD5QEQmi2mM8P/Iq+A0SzszEg+3sPjDnDdVEtQKQbMUidHD3xVzf6A9UDEmEm+8h9KTqTVUjT+vB53aHrCbAPiceYq1dQI1Aqv4EhMll0jzv+Y0yiRgCnLRSYyDQHVoqUXe4uKL9l+L7GXC4vkMhE6eW/AOJs9k583ORDUyXMZ8F5SVHVVnllmPNKSFagAJ5DofaqGXw/gHBYg51dIldkmknY3tguv3jOtHR4+MqAzaraJXbEhqHhcQlwGSOi5pytVQHZLN5s0WNe8HPrLYlFsO20RPHkImxsbmHdLJFI76th7Z4SeuF53hTeFLvhRCJRCTKZKxgdnRDbW+iozFJbBMw14/ElwGYc0egMBMFzT21f5Rog33Z7dX02GBm7WV5ZfT5Nn5bE3zuCDe9UxdTpNvK+5AAAAABJRU5ErkJggg==";
        const u = window.matchMedia("(prefers-reduced-motion: reduce)");

        function m() {
            if (u.matches) return console.log("This browser has prefers reduced motion turned on, so the cursor did not init"), !1;
            e = document.createElement("canvas"), i = e.getContext("2d"), e.style.top = "0px", e.style.left = "0px", e.style.pointerEvents = "none", o ? (e.style.position = "absolute", s.appendChild(e), e.width = s.clientWidth, e.height = s.clientHeight) : (e.style.position = "fixed", document.body.appendChild(e), e.width = h, e.height = c), s.addEventListener("mousemove", p), window.addEventListener("resize", g), f()
        }

        function g(t) {
            h = window.innerWidth, c = window.innerHeight, o ? (e.width = s.clientWidth, e.height = s.clientHeight) : (e.width = h, e.height = c)
        }

        function p(t) {
            if (o) {
                const e = s.getBoundingClientRect();
                l.x = t.clientX - e.left, l.y = t.clientY - e.top
            } else l.x = t.clientX, l.y = t.clientY;
            if (!1 === r) {
                r = !0;
                for (let t = 0; t < a; t++) e = l.x, i = l.y, n = A, d.push(new y(e, i, n))
            }
            var e, i, n
        }

        function f() {
            ! function() {
                i.clearRect(0, 0, h, c);
                let t = l.x,
                    e = l.y;
                d.forEach((function(n, o, s) {
                    let h = s[o + 1] || s[0];
                    n.position.x = t, n.position.y = e, n.move(i), t += .4 * (h.position.x - n.position.x), e += .4 * (h.position.y - n.position.y)
                }))
            }(), n = requestAnimationFrame(f)
        }

        function y(t, e, i) {
            this.position = {
                x: t,
                y: e
            }, this.image = i, this.move = function(t) {
                t.drawImage(this.image, this.position.x, this.position.y)
            }
        }
        u.onchange = () => {
            u.matches ? this.destroy() : m()
        }, this.destroy = () => {
            e.remove(), cancelAnimationFrame(n), s.removeEventListener("mousemove", p), window.addEventListener("resize", g)
        }, m()
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t
}({}); 
