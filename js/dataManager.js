class DataManager {
  /**
   * les données brutes récupérées
   * @type {Object}
   */
  data;

  /**
   * la source des données
   * @type {String}
   */
  src;

  constructor(src) {
    this.src = src;
  }

  /**
   * permet de récupérer toutes les donées du projet
   *
   * @return  {Object}  [return description]
   */
  async getAllData() {
    try {
      const data = await fetch("./js/" + this.src);
      this.data = await data.json();
      // console.log(this.data);
      return this.data;
    } catch (err) {
      alert("echec");
      console.error(err);
    }
  }

  /**
   * permet d'avoir tous les tags uniques de chaque photographes
   *
   * @return  {Array}  un tableau de tag
   */
  getPhotographersTags() {
    let allTags = [];

    this.data.photographers.forEach((photographer) => {
      allTags = allTags.concat(photographer.tags);
    });
     
    return [...new Set(allTags)];
    
  }

  /**
   * [getPhotographers description]
   *
   * @param   {Array}  filters  [filters description]
   *
   * @return  {Array}           [return description]
   */
  async getPhotographers(filters){
    if(this.data === undefined) await this.getAllData();
    // console.log(this.data);
    // if (this.data.length === 0) await this.getAllData();
    if (filters.length === 0) return this.data.photographers;
    const list = [];
    const filtersLength = filters.length;
    this.data.photographers.forEach(photographer => {
      for(let i=0; i<filtersLength; i++){
        if (photographer.tags.indexOf(filters[i]) >=0 ) list.push(photographer);
      }
    });
    return [...new Set(list)];
  }
}

