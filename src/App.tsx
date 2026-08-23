/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Discover from './components/Discover';
import Messages from './components/Messages';
import Meetups from './components/Meetups';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/meetups" element={<Meetups />} />
      </Routes>
    </BrowserRouter>
  );
}
