(function (f) {
  var l = window.AmazonUIPageJS || window.P,
    n = l._namespace || l.attributeErrors,
    b = n ? n("AuthenticationPortalInlineAssets") : l;
  b.guardFatal
    ? b.guardFatal(f)(b, window)
    : b.execute(function () {
        f(b, window);
      });
})(function (f, l, n) {
  f.when("A", "ready").register("cross-domain-sso", function (b) {
    var a = b.state("central-identity-provider-state");
    if (a && a.sloDomainsToPing && Array.isArray(a.sloDomainsToPing))
      for (var a = a.sloDomainsToPing, c = 0; c < a.length; c++)
        0 < a[c].length &&
          b.post("https://" + a[c] + "/ap/sso/clear", { withCredentials: !0 });
  });
});
