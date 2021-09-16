<template>
  <div class="sf">
    <div class="search">
      <ion-icon name="search"></ion-icon>
      <input type="text" placeholder="Search for a country...">
    </div>
    <div class="filter">
      <select name="cars" id="cars">
        <option class="options" value="">Filter by Region</option>
        <option class="options" value="africa">Africa</option>
        <option class="options" value="america">America</option>
        <option class="options" value="asia">Asia</option>
        <option class="options" value="europe">Europe</option>
        <option class="options" value="oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>

<style>
.sf {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 50px;
}

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--elementBg);
  padding: 10px;
  border-radius: 5px;
}

.search input {
  margin-left: 15px;
  border: none;
  outline: none;
  background: transparent;
}

.search input::placeholder {
  color: var(--fontColor);
}

.filter {
  background: var(--elementBg);
  padding: 10px 20px;
  border-radius: 5px;
}

select {
  border: none;
  outline: none;
  background: transparent;
  color: var(--fontColor);
  width: 170px;
}

.options {
  padding: 10px;
  background: var(--bg);
}

@media(max-width: 700px) {
  .sf {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 40px 25px;
    padding-bottom: 25px;
  }

  .search {
    margin-bottom: 25px;
  }
}
</style>