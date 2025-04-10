import { SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";

const SchematicEmbed = () => {
  const token = " ... ";
  const componentId = "cmpn_bYHaGFLE2Xg";

  return <SchematicEmbedComponent accessToken={token} id={componentId} />;
};
export default SchematicEmbed;
