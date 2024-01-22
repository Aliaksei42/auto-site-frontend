// src/App.js
import React from 'react';
// Импортируем React и компоненты маршрутизации из библиотеки react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Импортируем глобальные стили приложения
import './App.css'

// Импортируем компоненты разметки и страницы
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import News from './pages/News'
import Events from './pages/Events'
import Trends from './pages/Trends'
import SearchPage from './pages/SearchPage'
import Interesting from './pages/Interesting'

import NotFound from './components/NotFound/NotFound'

// Основной компонент приложения
const App = () => {
    return (
    // Оборачиваем приложение в компонент Router для настройки маршрутизации
    <Router>
      {/* Определяем маршруты приложения */}
      <Routes>
        {/* Общий макет для всех страниц, представленный компонентом MainLayout */}
        <Route path="/" element={<MainLayout />}>
          {/* Главная страница */}
          <Route index element={<Home />} />
          {/* Маршрут для отдельной страницы поста */}
          
          <Route path="posts/:slug" element={<PostPage />} />
          {/* Новые маршруты для других страниц */}
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="trends" element={<Trends />} />
          <Route path="searchPage" element={<SearchPage />} />
          <Route path="interesting" element={<Interesting />} />
        
          <Route path="notFound" element={<NotFound />} />
          {/* Маршрут для обработки неизвестных маршрутов и отображения NotFound */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

// Экспортируем компонент App
export default App
