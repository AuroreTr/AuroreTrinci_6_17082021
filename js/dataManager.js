class DataManager{
  constructor(src){
    this.src = src;
  }

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