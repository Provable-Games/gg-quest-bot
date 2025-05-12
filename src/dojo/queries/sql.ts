export const getGameScoresQuery = (namespace: string, start?: string) => {
  // Build the query
  let query = `
  SELECT
    tb.contract_address,
    tb.account_address,
    SUBSTR(tb.token_id, INSTR(tb.token_id, ':') + 1) AS token_id,
    t.metadata,
    COALESCE(s.hero_xp, 0) as score,
    m.player_name,
    m."lifecycle.mint",
    m."lifecycle.start.some",
    m."lifecycle.end.some",
    m.minted_by,
    m.settings_id`;

  // Add metagame attribute to select if needed
  query += `
  FROM token_balances tb
  LEFT JOIN tokens t ON tb.token_id = t.id
  LEFT JOIN '${namespace}-Game' s 
    ON SUBSTR(tb.token_id, INSTR(tb.token_id, ':') + 1) = s.hero_xp
  LEFT JOIN '${namespace}-TokenMetadata' m 
    ON SUBSTR(tb.token_id, INSTR(tb.token_id, ':') + 1) = m.token_id`;

  if (start) {
    query += `
    WHERE m."lifecycle.mint" >= "${start}"`;
  }

  return query;
};
