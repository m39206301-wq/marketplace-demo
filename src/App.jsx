import { useState, useRef, useCallback } from "react";
import AppShell from "./components/AppShell";
import HomeScreen from "./components/HomeScreen";
import CategoryDetail from "./components/CategoryDetail";
import TemplatePreview from "./components/TemplatePreview";
import ProfileScreen from "./components/ProfileScreen";
import AgentScreen from "./components/AgentScreen";
import FavoritesScreen from "./components/FavoritesScreen";
import WorkDataScreen from "./components/WorkDataScreen";
import HelpScreen from "./components/HelpScreen";
import SettingsScreen from "./components/SettingsScreen";
import { useSEO } from "./hooks/useSEO";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [history, setHistory] = useState([]);

  // App-level favorites: Map<templateId, template>
  const [favoriteMap, setFavoriteMap] = useState(new Map());

  const containerRef = useRef(null);

  useSEO({ screen, category: selectedCategory, template: selectedTemplate });

  const scrollTop = () => {
    if (containerRef.current) containerRef.current.scrollTop = 0;
  };

  const pushScreen = useCallback((newScreen, data = {}) => {
    setHistory(prev => [...prev, { screen, selectedCategory, selectedTemplate, selectedWork }]);
    setScreen(newScreen);
    if (data.category !== undefined) setSelectedCategory(data.category);
    if (data.template !== undefined) setSelectedTemplate(data.template);
    if (data.work !== undefined) setSelectedWork(data.work);
    scrollTop();
  }, [screen, selectedCategory, selectedTemplate, selectedWork]);

  const goBack = () => {
    const prev = history[history.length - 1];
    if (!prev) return;
    setHistory(h => h.slice(0, -1));
    setScreen(prev.screen);
    setSelectedCategory(prev.selectedCategory);
    setSelectedTemplate(prev.selectedTemplate);
    setSelectedWork(prev.selectedWork);
    scrollTop();
  };

  const goHome = () => {
    setHistory([]);
    setScreen("home");
    setSelectedCategory(null);
    setSelectedTemplate(null);
    setSelectedWork(null);
    scrollTop();
  };

  // Favorites toggle
  const handleToggleFavorite = useCallback((template) => {
    setFavoriteMap(prev => {
      const next = new Map(prev);
      if (next.has(template.id)) {
        next.delete(template.id);
      } else {
        next.set(template.id, template);
      }
      return next;
    });
  }, []);

  const favoriteIds = new Set(favoriteMap.keys());
  const favoritesList = Array.from(favoriteMap.values());

  // Navigation helpers
  const openProfile   = () => pushScreen("profile");
  const openAgent     = () => pushScreen("agent");
  const openFavorites = () => pushScreen("favorites");
  const openHelp      = () => pushScreen("help");
  const openSettings  = () => pushScreen("settings");

  const handleCategoryClick = (cat) => pushScreen("category", { category: cat });
  const handleTemplateClick = (template) => pushScreen("preview", { template });
  const handleWorkDataClick = (work) => pushScreen("work-data", { work });

  return (
    <AppShell
      containerRef={containerRef}
      currentScreen={screen}
      onCategoryClick={handleCategoryClick}
      onProfileClick={openProfile}
      onFavoritesClick={openFavorites}
      onHelpClick={openHelp}
      onAgentClick={openAgent}
      favoritesCount={favoritesList.length}
      activeCategory={selectedCategory}
    >
      {screen === "home" && (
        <HomeScreen
          onCategoryClick={handleCategoryClick}
          onAgentClick={openAgent}
          onProfileClick={openProfile}
        />
      )}

      {screen === "category" && selectedCategory && (
        <CategoryDetail
          category={selectedCategory}
          onBack={goBack}
          onTemplateClick={handleTemplateClick}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {screen === "preview" && selectedTemplate && selectedCategory && (
        <TemplatePreview
          template={selectedTemplate}
          category={selectedCategory}
          onBack={goBack}
          onGoHome={goHome}
          favoriteIds={favoriteIds}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {screen === "profile" && (
        <ProfileScreen
          onBack={goBack}
          onAgentClick={openAgent}
          onFavoritesClick={openFavorites}
          onHelpClick={openHelp}
          onSettingsClick={openSettings}
          onWorkDataClick={handleWorkDataClick}
          favoritesCount={favoritesList.length}
        />
      )}

      {screen === "agent" && (
        <AgentScreen onBack={goBack} />
      )}

      {screen === "favorites" && (
        <FavoritesScreen
          onBack={goBack}
          favorites={favoritesList}
          onTemplateClick={handleTemplateClick}
          onToggleFavorite={handleToggleFavorite}
        />
      )}

      {screen === "work-data" && selectedWork && (
        <WorkDataScreen work={selectedWork} onBack={goBack} />
      )}

      {screen === "help" && (
        <HelpScreen onBack={goBack} />
      )}

      {screen === "settings" && (
        <SettingsScreen onBack={goBack} />
      )}
    </AppShell>
  );
}
