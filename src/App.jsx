import { useState, useRef, useEffect, useCallback } from 'react';
import { T, S } from './data/tokens';
import { HIERARCHY } from './data/hierarchy';
import { FORMATS } from './data/formats';
import { MOCK_WORKS } from './data/mocks';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import L2Tabs from './components/L2Tabs';
import L3SubTabs from './components/L3SubTabs';
import FormatSection from './components/FormatSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MarketDropdown from './components/MarketDropdown';
import SearchOverlay from './components/SearchOverlay';
import TemplateDetail from './components/TemplateDetail';
import MyWorks from './components/MyWorks';
import SettingsPage from './components/SettingsPage';
import FavoritesPage from './components/FavoritesPage';
import LoginModal from './components/LoginModal';
import DeleteConfirm from './components/DeleteConfirm';
import ShareSheet from './components/ShareSheet';
import PurchaseModal from './components/PurchaseModal';
import DistributorPage from './components/DistributorPage';
import InfoPage from './components/InfoPage';
import Toast from './components/Toast';

export default function App() {
  // Core state
  const [market, setMarketRaw] = useState(() => localStorage.getItem("mori_market") || "IN");
  const [marketOpen, setMarketOpen] = useState(false);
  const [l2Selected, setL2Selected] = useState(null);
  const [l3Selected, setL3Selected] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);

  // Page routing
  const [page, setPage] = useState("store");
  const [detailData, setDetailData] = useState(null);
  const [infoType, setInfoType] = useState(null);

  // Search
  const [searchOpen, setSearchOpen] = useState(false);

  // Auth
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("mori_logged_in") === "true");
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem("mori_user")); } catch(e) { return null; } });
  const [showLogin, setShowLogin] = useState(false);

  // Works
  const [works, setWorksRaw] = useState(() => {
    try { const w = JSON.parse(localStorage.getItem("mori_works")); return w || MOCK_WORKS; } catch(e) { return MOCK_WORKS; }
  });
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [shareSheet, setShareSheet] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState(null);

  // Purchase modal
  const [showPurchase, setShowPurchase] = useState(false);
  const [purchasePrice, setPurchasePrice] = useState(null);

  // Favorites
  const [favorites, setFavoritesRaw] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem("mori_favorites") || "[]")); } catch(e) { return new Set(); }
  });

  // Loading
  const [loading, setLoading] = useState(false);

  // Helpers
  const setMarket = (id) => {
    setMarketRaw(id);
    localStorage.setItem("mori_market", id);
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
  };

  const setWorks = (w) => {
    setWorksRaw(w);
    localStorage.setItem("mori_works", JSON.stringify(w));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const toggleFavorite = useCallback((templateId) => {
    setFavoritesRaw((prev) => {
      const next = new Set(prev);
      if (next.has(templateId)) { next.delete(templateId); } else { next.add(templateId); }
      localStorage.setItem("mori_favorites", JSON.stringify(Array.from(next)));
      return next;
    });
  }, []);

  // Navigation
  const openDetail = useCallback((data) => { setDetailData(data); setPage("detail"); }, []);
  const openWorks = useCallback(() => setPage("works"), []);
  const openSettings = useCallback(() => setPage("settings"), []);
  const openFavorites = useCallback(() => setPage("favorites"), []);
  const openDistributor = useCallback(() => setPage("distributor"), []);
  const openInfo = useCallback((type) => { setInfoType(type); setPage("info"); }, []);
  const goBack = useCallback(() => { setPage("store"); setSearchOpen(false); }, []);
  const goBackFromSettings = useCallback(() => setPage("works"), []);

  // L2/L3 hierarchy
  const l2List = HIERARCHY[market] || [];

  useEffect(() => {
    if (l2List.length > 0) setL2Selected(l2List[0].id);
  }, [market]);

  const currentL2 = l2List.find((x) => x.id === l2Selected);
  const l3List = currentL2 ? currentL2.l3 : [];

  useEffect(() => {
    if (l3List.length > 0) setL3Selected(l3List[0].id);
  }, [l2Selected]);

  const currentL3 = l3List.find((x) => x.id === l3Selected);
  const l3Name = currentL3 ? currentL3.name : "";
  const showL3 = l3List.length > 1;

  // Loading on L2/L3 switch
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => setLoading(false), 350);
    return () => clearTimeout(t);
  }, [l2Selected, l3Selected]);

  // Scroll
  const onScroll = useCallback(() => {
    if (ref.current) setScrollY(ref.current.scrollTop);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const gOp = Math.max(0, 1 - scrollY / 260);

  // Auth handlers
  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("mori_logged_in", "true");
    localStorage.setItem("mori_user", JSON.stringify(userData));
    setShowLogin(false);
    showToast("Signed in successfully");
  };

  const handleSignOut = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("mori_logged_in");
    localStorage.removeItem("mori_user");
    showToast("Signed out");
  };

  // Works handlers
  const handleDeleteWork = (work) => setDeleteConfirm(work);

  const confirmDelete = () => {
    if (deleteConfirm) {
      const updated = works.filter((w) => w.id !== deleteConfirm.id);
      setWorks(updated);
      setDeleteConfirm(null);
      showToast("Work deleted");
    }
  };

  return (
    <div style={{
      width: "100%", maxWidth: "430px", margin: "0 auto", height: "100vh",
      position: "relative",
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      background: T.n[100], overflow: "hidden",
    }}>
      {/* Ambient gradient */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "360px",
        background: "linear-gradient(178deg, " + T.green[100] + "D0 0%, " + T.green[50] + "90 30%, " + T.warm[100] + "50 55%, " + T.n[100] + "00 100%)",
        opacity: gOp, transition: "opacity 0.2s", zIndex: 0, pointerEvents: "none",
      }}/>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "360px",
        backgroundImage: "radial-gradient(ellipse at 18% 45%, " + T.green[200] + "40 0%, transparent 50%), radial-gradient(ellipse at 82% 28%, " + T.warm[200] + "28 0%, transparent 42%)",
        opacity: gOp * 0.6, zIndex: 0, pointerEvents: "none",
      }}/>
      {/* Noise */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0"/>
        </filter>
      </svg>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "360px",
        filter: "url(#noise)", opacity: 0.015, zIndex: 0, pointerEvents: "none", mixBlendMode: "multiply",
      }}/>

      {/* Scroll container */}
      <div ref={ref} style={{
        position: "relative", zIndex: 1, height: "100%", overflowY: "auto",
        scrollbarWidth: "none", overscrollBehavior: "contain",
      }}>
        <Header scrollY={scrollY}
          onWorksClick={openWorks}
          onFavoritesClick={openFavorites} />
        <SearchBar onClick={() => setSearchOpen(true)} />
        <L2Tabs key={market} items={l2List} selected={l2Selected} onSelect={setL2Selected} />
        {showL3 && <L3SubTabs key={l2Selected} items={l3List} selected={l3Selected} onSelect={setL3Selected} />}

        {FORMATS.map((f, i) => (
          <div key={f.id}>
            {i > 0 && <div style={{ height: "10px" }} />}
            <FormatSection l3Id={l3Selected || ""} l3Name={l3Name} format={f} onCardClick={openDetail}
              loading={loading} favorites={favorites} onToggleFavorite={toggleFavorite} />
          </div>
        ))}
        <Footer onDistributor={openDistributor} onNavigate={openInfo} />
      </div>

      {/* Scroll to top */}
      <ScrollToTop visible={scrollY > 400} onClick={() => {
        ref.current && ref.current.scrollTo({ top: 0, behavior: "smooth" });
      }} />

      {/* Market dropdown overlay */}
      {marketOpen && (
        <MarketDropdown
          current={market}
          onSelect={setMarket}
          onClose={() => setMarketOpen(false)}
        />
      )}

      {/* Search overlay */}
      {searchOpen && (
        <SearchOverlay market={market}
          onClose={() => setSearchOpen(false)}
          onOpenDetail={(data) => { setSearchOpen(false); openDetail(data); }}
          favorites={favorites} onToggleFavorite={toggleFavorite} />
      )}

      {/* Sub-pages */}
      {page === "detail" && detailData && <TemplateDetail data={detailData} onBack={goBack} onUse={(price) => { setPurchasePrice(price); setShowPurchase(true); }} />}
      {page === "works" && <MyWorks works={works} onBack={goBack}
        onSettings={openSettings}
        onEdit={(w) => showToast("Opening editor...")}
        onShare={(w) => setShareSheet(true)}
        onDelete={handleDeleteWork}
        onBrowse={goBack}
        onDistributor={openDistributor} onNavigate={openInfo} />}
      {page === "settings" && <SettingsPage onBack={goBackFromSettings}
        isLoggedIn={isLoggedIn} user={user}
        onSignIn={() => setShowLogin(true)}
        onSignOut={handleSignOut}
        market={market}
        onMarketClick={() => setMarketOpen(true)}
        onDistributor={openDistributor} onNavigate={openInfo} />}
      {page === "favorites" && <FavoritesPage favorites={favorites} onBack={goBack}
        onOpenDetail={openDetail} onToggleFavorite={toggleFavorite} market={market}
        onDistributor={openDistributor} onNavigate={openInfo} />}
      {page === "distributor" && <DistributorPage onBack={goBack} />}
      {page === "info" && infoType && <InfoPage type={infoType} onBack={goBack} />}

      {/* Login modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}

      {/* Delete confirm */}
      {deleteConfirm && <DeleteConfirm workName={deleteConfirm.name}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteConfirm(null)} />}

      {/* Share sheet */}
      {shareSheet && <ShareSheet onClose={() => setShareSheet(false)} onToast={showToast} />}

      {/* Purchase modal */}
      {showPurchase && <PurchaseModal templatePrice={purchasePrice}
        onClose={() => setShowPurchase(false)}
        onPurchaseSingle={() => { setShowPurchase(false); showToast("Payment processing..."); }}
        onUpgrade={() => { setShowPurchase(false); showToast("Redirecting to membership..."); }} />}

      {/* Toast */}
      <Toast message={toastMessage} />
    </div>
  );
}
