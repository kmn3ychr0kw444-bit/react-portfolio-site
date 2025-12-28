import { useState } from 'react';
import { Results } from "./results";
export type Movie = {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
};

type MovieResult = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

export const Skills = () => {
  return (
    <div id="skills">
      <div className="container">
        <div className="heading">
          <h2>Skills</h2>
        </div>
        <div className="skills-container">
        </div>
      </div>
    </div>
  );
};