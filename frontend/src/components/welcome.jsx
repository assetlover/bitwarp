import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from './header';
import About from './about';
import Team from './team';

export default function Welcome() {
  return <div className="welcome">
    <Header />
    <About />
    <Team />
  </div>;
}
