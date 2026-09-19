import React, { useState, useEffect } from 'react';
import { STATS_DATA } from '../data/siteData';
import { useIntersection } from '../hooks/useIntersection';

export default function StatsSection() {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });
  const [countYears, setCountYears] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let current = 0;
    const target = 50;
    const duration = 1200;
    const stepTime = 24;
    const totalSteps = duration / stepTime;
    const increment = Math.max(1, Math.ceil(target / totalSteps));

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCountYears(target);
        clearInterval(timer);
      } else {
        setCountYears(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="stats-editorial" id="statsSection" ref={sectionRef} aria-label="Company Statistics">
      <div className="container">
        <div className="stats-editorial-grid">
          {STATS_DATA.map((stat, idx) => {
            let displayVal = stat.text;
            if (stat.count !== undefined) {
              displayVal = `${countYears}${stat.suffix || ''}`;
            }

            return (
              <div key={stat.id} className="stat-editorial-col">
                <div className={`stat-num-display ${stat.isGold ? 'highlight-gold' : stat.isJade ? 'highlight-jade' : ''}`}>
                  {displayVal}
                </div>
                <div className="stat-editorial-label">{stat.label}</div>
                {stat.sub && <div className="stat-editorial-sub">{stat.sub}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
