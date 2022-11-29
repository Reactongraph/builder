import React from "react";
import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

const LandingPage = () => {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, [window.location.pathname]);

  // if no page is found, return a 404 page
  if (notFound && !isPreviewingInBuilder) {
    return (
      <div>
        <p>not found</p>
      </div>
    );
  }

  // return the page when found
  return (
    <>
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
    </>
  );
};

export default LandingPage;
