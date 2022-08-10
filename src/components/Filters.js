import { useState, useEffect } from "react";

export default function Filters({ positions, technologies, setFilteredOffers, offers }) {
  const [filterState, setFilterState] = useState({
    activePosition: "",
    activeTechnologies: [],
    seniority: "all",
    remote: false,
    priceRange: false
  });

  useEffect(() => {
    const filteredOffers = offers.filter(offer => {
      if (filterState.activePosition && filterState.activePosition !== offer.position) {
        return false;
      }
      const filter = filterState.activeTechnologies.every(technology => offer.technologies.includes(technology));
      if (!filter) {
        return filter;
      }
      return true;
    });

    setFilteredOffers(filteredOffers);
  }, [filterState]);

  const toggleTechnologies = () => {
    const newTech = filterState.activeTechnologies.length === 0 ? technologies : [];
    setFilterState({
      ...filterState,
      activeTechnologies: newTech
    });
  };

  const handleTechnologyClick = name => {
    const index = filterState.activeTechnologies.indexOf(name);
    if (index === -1) {
      setFilterState({
        ...filterState,
        activeTechnologies: [...filterState.activeTechnologies, name]
      });
    } else {
      const newTechnologies = [...filterState.activeTechnologies];
      newTechnologies.splice(index, 1);
      setFilterState({
        ...filterState,
        activeTechnologies: newTechnologies
      });
    }
  };

  const onRemoteClick = () => {
    setFilterState({
      ...filterState,
      remote: !filterState.remote
    });
  };

  const onPriceRangeClick = () => {
    setFilterState({
      ...filterState,
      priceRange: !filterState.priceRange
    });
  };

  const onSelectChange = event => {
    setFilterState({
      ...filterState,
      seniority: event.target.value
    });
  };

  return (
    <div className="filters">
      <div className="upper-filters">
        <div>
          {positions.map(({ id, name }) => {
            const className = filterState.activePosition === name ? "active" : "";
            return (
              <button
                className={className}
                key={id}
                onClick={() =>
                  setFilterState({
                    ...filterState,
                    activePosition: name
                  })
                }>
                {name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="lower-filters">
        <div className="technologies">
          <button onClick={toggleTechnologies}>{filterState.activeTechnologies.length === 0 ? "Select All" : "Clear All"}</button>
          {technologies.map(({ id, name }) => {
            const className = filterState.activeTechnologies.includes(name) ? "active" : "";
            return (
              <button className={className} key={id} onClick={() => handleTechnologyClick(name)}>
                {name}
              </button>
            );
          })}
        </div>
        <div className="others">
          <button onClick={onRemoteClick} className={filterState.remote ? "active" : ""}>
            100% remote
          </button>
          <button onClick={onPriceRangeClick} className={filterState.priceRange ? "active" : ""}>
            price range
          </button>
          <button>Not in React</button>
        </div>
      </div>
    </div>
  );
}
