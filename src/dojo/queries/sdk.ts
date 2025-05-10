import { KeysClause, ToriiQueryBuilder } from "@dojoengine/sdk/node";

export const subscribeToGamesQuery = (namespace: string) => {
  const query = new ToriiQueryBuilder()
    .withClause(
      KeysClause(
        [`${namespace}-Game`, `${namespace}-TokenMetadata`],
        [undefined]
      ).build()
    )
    .withEntityModels([`${namespace}-Game`, `${namespace}-TokenMetadata`])
    .includeHashedKeys();

  return query;
};
