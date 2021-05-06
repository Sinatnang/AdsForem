
         (function() {
            var gwdAd = document.getElementById('gwd-ad');

            /**
             * Handles the DOMContentLoaded event. The DOMContentLoaded event is
             * fired when the document has been completely loaded and parsed.
             */
            function handleDomContentLoaded(event) {

            }

            /**
             * Handles the WebComponentsReady event. This event is fired when all
             * custom elements have been registered and upgraded.
             */
            function handleWebComponentsReady(event) {
            // Start the Ad lifecycle.
            setTimeout(function() {
               gwdAd.initAd();
            }, 0);
            }

            /**
             * Handles the event that is dispatched after the Ad has been
             * initialized and before the default page of the Ad is shown.
             */
            function handleAdInitialized(event) {}

            window.addEventListener('DOMContentLoaded',
            handleDomContentLoaded, false);
            window.addEventListener('WebComponentsReady',
            handleWebComponentsReady, false);
            window.addEventListener('adinitialized',
            handleAdInitialized, false);
         })();


      function StudioExports() {
      };

      {"version";1,"type";"GoogleAd","format";"","template";"Banner 3.0.0","politeload";true,"fullscreen";false,"counters";[],"timers";[],"exits";[],"creativeProperties";{"minWidth";1100,"minHeight";70,"maxWidth";1100,"maxHeight";70};"components";["gwd-google-ad","gwd-image","gwd-page","gwd-pagedeck"],"responsive";false};   