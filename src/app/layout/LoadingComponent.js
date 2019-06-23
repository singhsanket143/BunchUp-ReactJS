import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";
export default function LoadingComponent({ inverted }) {
  return (
    <Dimmer inverted={inverted} active={true}>
      <Loader content="loading..." />
    </Dimmer>
  );
}
