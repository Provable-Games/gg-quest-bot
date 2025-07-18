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
    m.settings_id,
    ROW_NUMBER() OVER (
      PARTITION BY tb.account_address, m.settings_id
      ORDER BY COALESCE(s.hero_xp, 0) DESC
    ) as rn`;

  // Add metagame attribute to select if needed
  query += `
  FROM token_balances tb
  LEFT JOIN tokens t ON tb.token_id = t.id
  LEFT JOIN '${namespace}-Game' s 
    ON SUBSTR(tb.token_id, INSTR(tb.token_id, ':') + 1) = s.game_id
  LEFT JOIN '${namespace}-TokenMetadata' m 
    ON SUBSTR(tb.token_id, INSTR(tb.token_id, ':') + 1) = m.token_id
  WHERE (
    (m.settings_id = 1 AND COALESCE(s.hero_xp, 0) >= 51) OR
    (m.settings_id = 3 AND COALESCE(s.hero_xp, 0) >= 26) OR
    (m.settings_id = 4 AND COALESCE(s.hero_xp, 0) >= 26) OR
    (m.settings_id = 5 AND COALESCE(s.hero_xp, 0) >= 101) OR
    (m.settings_id = 6 AND COALESCE(s.hero_xp, 0) >= 26)
  )`;

  if (start) {
    query += `
    AND m."lifecycle.mint" >= "${start}"`;
  }

  // Add deduplication
  query = `
  SELECT * FROM (
    ${query}
  ) deduped
  WHERE rn = 1`;

  return query;
};
