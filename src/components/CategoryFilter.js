function CategoryFilter({categories, setFilter}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
        <button onClick={_ => setFilter("All")}>All</button>

        {categories.map(a => <button key={a} onClick={_ => setFilter(a)}>{a}</button>)}
    </div>
  );
}

export default CategoryFilter;
