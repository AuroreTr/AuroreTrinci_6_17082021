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

  /**
   * get all datas of a photographer
   *
   * @param   {[Number]}  id  [photographer id]
   *
   * @return  {[Object]}      [return description]
   */
  // async getPhotographerData() {
  //   try {
  //     let data = await fetch("./js/"+this.src);
  //     data = await data.json();
  //     // console.log(data);
  //     // let mediaData = data.media;
  //     // console.log(mediaData);
  //     // console.log(mediaData);

  //     // let mediaPhotographer = mediaData[i];
  //     // console.log(mediaPhotographer);
  //     // console.log(mediaData[0]);


  //     // mediaData.forEach(element => {
  //     //   new PhotographerDetails(element);
  //     // });


      
  //   }
    
  //   catch(err){
  //     alert("echec")
  //     console.error(err);
  //   }
  // }
}