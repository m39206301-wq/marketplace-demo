import { useState, useMemo } from 'react';
import { T } from '../data/tokens';
import { HIERARCHY } from '../data/hierarchy';
import { FORMATS } from '../data/formats';
import { generatePlaceholders } from '../utils/helpers';
import TemplateCard from './TemplateCard';

export default function SearchOverlay({ market, onClose, onOpenDetail, favorites, onToggleFavorite }) {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem("mori_search_history") || "[]"); } catch(e) { return []; }
  });

  const hotKeywords = useMemo(() => {
    const allL3 = [];
    const h = HIERARCHY[market] || [];
    h.forEach((l2) => { l2.l3.forEach((l3) => { allL3.push(l3.name); }); });
    const seen = {};
    return allL3.filter((n) => {
      if (seen[n]) return false;
      seen[n] = true;
      return true;
    }).slice(0, 10);
  }, [market]);

  const results = useMemo(() => {
    if (!query.trim()) return { flyer: [], image: [] };
    const q = query.toLowerCase().trim();
    const flyerMatches = [];
    const imageMatches = [];
    const h = HIERARCHY[market] || [];
    h.forEach((l2) => {
      l2.l3.forEach((l3) => {
        if (l3.name.toLowerCase().indexOf(q) >= 0 || (l3.local && l3.local.toLowerCase().indexOf(q) >= 0)) {
          flyerMatches.push({ l3, templates: generatePlaceholders(l3.id, "flyer", 4), format: FORMATS[0] });
          imageMatches.push({ l3, templates: generatePlaceholders(l3.id, "image", 4), format: FORMATS[1] });
        }
      });
    });
    return { flyer: flyerMatches.slice(0, 6), image: imageMatches.slice(0, 6) };
  }, [query, market]);
  const hasResults = results.flyer.length > 0 || results.image.length > 0;

  const saveHistory = (term) => {
    if (!term.trim()) return;
    const updated = [term].concat(history.filter((h) => h !== term)).slice(0, 10);
    setHistory(updated);
    localStorage.setItem("mori_search_history", JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("mori_search_history");
  };

  const removeHistoryItem = (item) => {
    const updated = history.filter((h) => h !== item);
    setHistory(updated);
    localStorage.setItem("mori_search_history", JSON.stringify(updated));
  };

  return (
    <div style={{
      position: "absolute", inset: 0, zIndex: 30, background: T.n[0],
      animation: "slideUp 0.3s ease-out forwards",
      display: "flex", flexDirection: "column",
    }}>
      <div style={{
        padding: "14px 16px 12px", display: "flex", alignItems: "center", gap: "10px",
        borderBottom: "0.5px solid " + T.n[150],
        background: T.n[0], position: "sticky", top: 0, zIndex: 5,
      }}>
        <div style={{
          flex: 1, height: "38px", borderRadius: "19px", background: T.n[100],
          border: "0.5px solid " + T.n[200], display: "flex", alignItems: "center",
          gap: "8px", padding: "0 14px",
        }}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.n[400]} strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && query.trim()) saveHistory(query.trim()); }}
            placeholder="Search templates..."
            style={{
              border: "none", outline: "none", background: "transparent", flex: 1,
              fontSize: "14px", color: T.n[800], fontFamily: "inherit",
            }}
          />
          {query && (
            <div onClick={() => setQuery("")} style={{ cursor: "pointer", display: "flex", padding: "2px" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.n[400]} strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </div>
          )}
        </div>
        <span onClick={onClose} style={{
          fontSize: "14px", color: T.n[600], fontWeight: 500, cursor: "pointer",
          whiteSpace: "nowrap",
        }}>Cancel</span>
      </div>

      <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none", padding: "16px" }}>
        {!query.trim() ? (
          <div>
            <div style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "13px", fontWeight: 650, color: T.n[800], marginBottom: "12px" }}>Hot Searches</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {hotKeywords.map((kw) => (
                  <span key={kw} onClick={() => { setQuery(kw); saveHistory(kw); }} style={{
                    padding: "7px 14px", borderRadius: "999px", background: T.n[50],
                    border: "0.5px solid " + T.n[200], fontSize: "12.5px", fontWeight: 500,
                    color: T.n[700], cursor: "pointer", transition: "all 0.2s",
                  }}>{kw}</span>
                ))}
              </div>
            </div>

            {history.length > 0 && (
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                  <span style={{ fontSize: "13px", fontWeight: 650, color: T.n[800] }}>Recent Searches</span>
                  <span onClick={clearHistory} style={{ fontSize: "12px", color: T.n[400], cursor: "pointer" }}>Clear All</span>
                </div>
                {history.map((item) => (
                  <div key={item} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "10px 0", borderBottom: "0.5px solid " + T.n[100],
                  }}>
                    <span onClick={() => setQuery(item)} style={{
                      fontSize: "13.5px", color: T.n[700], cursor: "pointer", flex: 1,
                    }}>{item}</span>
                    <div onClick={() => removeHistoryItem(item)} style={{ cursor: "pointer", padding: "4px" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.n[400]} strokeWidth="2" strokeLinecap="round">
                        <path d="M18 6L6 18M6 6l12 12"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : !hasResults ? (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={T.n[300]} strokeWidth="1.5" strokeLinecap="round" style={{ marginBottom: "16px" }}>
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <div style={{ fontSize: "15px", fontWeight: 600, color: T.n[600], marginBottom: "6px" }}>No templates found</div>
            <div style={{ fontSize: "13px", color: T.n[400] }}>Try different keywords</div>
          </div>
        ) : (
          <div>
            {results.flyer.length > 0 && (
              <div style={{ marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 650, color: FORMATS[0].tagColor,
                    background: FORMATS[0].tagBg, borderRadius: "5px", padding: "3px 8px",
                    letterSpacing: "0.5px", textTransform: "uppercase",
                  }}>FLYER</span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: T.n[700] }}>{results.flyer.length} results</span>
                </div>
                {results.flyer.map((group) => (
                  <div key={group.l3.id + "-flyer"} style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: 600, color: T.n[600], marginBottom: "8px" }}>{group.l3.name}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                      {group.templates.slice(0, 3).map((t, i) => (
                        <TemplateCard key={t.id} template={t} index={i} aspectRatio={group.format.aspect}
                          isFavorited={favorites && favorites.has(t.id)}
                          onToggleFavorite={onToggleFavorite}
                          onClick={() => {
                            saveHistory(query.trim());
                            onOpenDetail({ template: t, format: group.format, l3Name: group.l3.name });
                          }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {results.image.length > 0 && (
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                  <span style={{
                    fontSize: "10px", fontWeight: 650, color: FORMATS[1].tagColor,
                    background: FORMATS[1].tagBg, borderRadius: "5px", padding: "3px 8px",
                    letterSpacing: "0.5px", textTransform: "uppercase",
                  }}>IMAGE</span>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: T.n[700] }}>{results.image.length} results</span>
                </div>
                {results.image.map((group) => (
                  <div key={group.l3.id + "-image"} style={{ marginBottom: "16px" }}>
                    <div style={{ fontSize: "12.5px", fontWeight: 600, color: T.n[600], marginBottom: "8px" }}>{group.l3.name}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                      {group.templates.slice(0, 3).map((t, i) => (
                        <TemplateCard key={t.id} template={t} index={i} aspectRatio={group.format.aspect}
                          isFavorited={favorites && favorites.has(t.id)}
                          onToggleFavorite={onToggleFavorite}
                          onClick={() => {
                            saveHistory(query.trim());
                            onOpenDetail({ template: t, format: group.format, l3Name: group.l3.name });
                          }} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
