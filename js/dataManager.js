class DataManager{
  constructor(src){
    this.src = src;
  }

  /**
   * permet de récupérer toutes les donées du projet 
   *
   * @return  {Object}  [return description]
   */
  async getAllData(){
    try{
      let data = await fetch("./js/"+this.src);
      data = await data.json();
    //   console.log(data);
      return data;
    }
    catch(err){
      alert("echec")
      console.error(err);
    }
  }
}