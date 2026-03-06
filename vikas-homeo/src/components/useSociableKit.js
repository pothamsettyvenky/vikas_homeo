import { useEffect } from "react";

export default function useSociableKit() {

  useEffect(() => {

    const widgetContainer = document.querySelector(".sk-ww-google-reviews");

    if (widgetContainer) {
      widgetContainer.innerHTML = "";
    }

    const existingScript = document.querySelector(
      'script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]'
    );

    if (!existingScript) {

      const script = document.createElement("script");
      script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
      script.async = true;

      document.body.appendChild(script);

    } else {

      if (window.skWidgetInit) {
        window.skWidgetInit();
      }

    }

  }, []);

}