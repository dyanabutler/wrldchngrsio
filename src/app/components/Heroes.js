import { useEffect, useState } from 'react';

function Heroes() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [heroes, setHeroes] = useState([
    { id: 1, name: 'Hero 1', position: { x: 0, y: 0 } },
    { id: 2, name: 'Hero 2', position: { x: 0, y: 0 } },
    { id: 3, name: 'Hero 3', position: { x: 0, y: 0 } },
    { id: 4, name: 'Hero 4', position: { x: 0, y: 0 } },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setScrollPosition(currentScrollPosition);

      const heroesToUpdate = heroes.filter((hero) => {
        const heroPosition = hero.position;
        const heroDistance = Math.abs(heroPosition.x - currentScrollPosition);
        return heroDistance < 100;
      });

      heroesToUpdate.forEach((hero) => {
        const heroPosition = hero.position;
        const heroDistance = Math.abs(heroPosition.x - currentScrollPosition);
        const newPosition = {
          x: heroPosition.x - heroDistance,
          y: heroPosition.y,
        };
        setHeroes((prevHeroes) => [
          ...prevHeroes,
          { ...hero, position: newPosition },
        ]);
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [heroes]);

  return (
    <div className="heroes">
      {heroes.map((hero) => (
        <div
          key={hero.id}
          className="hero"
          style={{
            transform: `translateX(${hero.position.x}px) translateY(${hero.position.y}px)`,
          }}
        >
          <h2>{hero.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Heroes;
