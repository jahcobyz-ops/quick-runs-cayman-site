/* Quick Runs Cayman - cookie notice banner.
   right:92px keeps it clear of the floating WhatsApp and back-to-top buttons.
   Stores the visitor's acknowledgement in one first-party cookie
   (qr_cookie_notice, 12 months) so the banner is not shown again. */
(function () {
  var NAME = "qr_cookie_notice";
  if (document.cookie.split("; ").some(function (c) { return c.indexOf(NAME + "=") === 0; })) return;

  var css = document.createElement("style");
  css.textContent =
    "#qr-cookie{position:fixed;left:16px;right:92px;bottom:16px;z-index:9999;max-width:560px;margin:0 auto;" +
    "background:#08090b;color:#fff;border-radius:14px;padding:16px 18px;box-shadow:0 10px 30px rgba(0,0,0,.25);" +
    "font-family:Manrope,system-ui,sans-serif;font-size:.92rem;line-height:1.5;display:flex;flex-wrap:wrap;align-items:center;gap:12px}" +
    "#qr-cookie p{margin:0;flex:1 1 260px;color:#fff}" +
    "#qr-cookie a{color:#fff;font-weight:700;text-decoration:underline}" +
    "#qr-cookie button{background:#f1120b;color:#fff;border:0;border-radius:999px;padding:10px 22px;min-height:44px;" +
    "font:inherit;font-weight:800;cursor:pointer}" +
    "#qr-cookie button:hover{background:#c90e08}" +
    "#qr-cookie button:focus-visible,#qr-cookie a:focus-visible{outline:2px solid #fff;outline-offset:2px}";
  document.head.appendChild(css);

  var box = document.createElement("div");
  box.id = "qr-cookie";
  box.setAttribute("role", "region");
  box.setAttribute("aria-label", "Cookie notice");
  box.innerHTML =
    '<p>We only use essential cookies to keep this site working. No advertising or tracking. ' +
    '<a href="/cookies">Cookie Policy</a></p>' +
    '<button type="button">Got it</button>';

  box.querySelector("button").addEventListener("click", function () {
    var secure = location.protocol === "https:" ? "; Secure" : "";
    document.cookie = NAME + "=1; Max-Age=31536000; Path=/; SameSite=Lax" + secure;
    box.remove();
  });

  function mount() { document.body.appendChild(box); }
  if (document.body) mount(); else document.addEventListener("DOMContentLoaded", mount);
})();
