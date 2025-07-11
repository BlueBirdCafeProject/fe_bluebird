import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ConsumerLayout from '../layout/ConsumerLayout';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ConsumerLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
