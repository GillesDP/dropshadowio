import React from "react";

function SetMeta(props) {
   let tags = props.children;
   let title, description;

   for (let tag of tags) {
      if (tag.type === "title") {
         title = tag.props.children;
      }
      if (tag.type === "meta" && (tag.props.name.includes("description"))) {
         description = tag.props.content;
      }
   }

   React.useEffect(() => {
      document.title = title;

      const metaTags = document.getElementsByTagName("META");
      for (let tag of metaTags) {
         if (tag.name.includes("description") || tag.attributes[0].value.includes("description")) {
            tag.setAttribute("content", description);
         }
      }
   }, []);

   return null;
}

export default SetMeta;

/*
NOTE:
   This script automatically changes all description meta tags, no need to add more than the default one.
*/