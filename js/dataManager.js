/**
 * les données brutes récupérées
 * @type {Object}
 */
let data;

/**
 * la source des données
 * @type {String}
 */
let src;

/**
 * @param {String} source
 */
function initDataManagerSource(source) {
  src = source;
}

/**
 * permet de récupérer toutes les donées du projet
 *
 * @return  {Promise.<Object>}  [return description]
 */
async function getAllData() {
  try {
    const dataTmp = await fetch("./js/" + src);
    data = await dataTmp.json();
    // console.log(data);
    return data;
  } catch (err) {
    alert("echec");
    console.error(err);
  }
}

/**
 * permet d'avoir tous les tags uniques de chaque photographes
 *
 * @return  {Promise.<Array>}  un tableau de tag
 */
async function getPhotographersTags() {
  if (data === undefined) await getAllData();
  let allTags = [];

  data.photographers.forEach((photographer) => {
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
function getPhotographers(filters) {
  // console.log(data);
  // if (data.length === 0) await getAllData();
  if (filters.length === 0) return data.photographers;
  const list = [];
  const filtersLength = filters.length;
  data.photographers.forEach((photographer) => {
    for (let i = 0; i < filtersLength; i++) {
      if (photographer.tags.indexOf(filters[i]) >= 0) list.push(photographer);
    }
  });
  return [...new Set(list)];
}

async function getPhotographerData(photographerId) {
  if (data === undefined) await getAllData();
  let photographerInfo = "";
  data.photographers.forEach((photographer) => {
    // console.log(photographer.id);
    if (photographer.id === photographerId) {
      photographerInfo = photographer;
    }
  });
  return photographerInfo;
}

function getPhotographerMedia(photographerId, filter) {
  const list = [];
  data.media.forEach((media) => {
    if (media.photographerId === photographerId) {
      list.push(media);
    }
  });
  return sortList(list, filter);
}

function getMediaTitle(photographerId, filter, id) {
  const mediaList = getPhotographerMedia(photographerId, filter);
  console.log(mediaList);
  if (data.media.id === id) return data.media.title;
}

/**
 * [sortList description]
 *
 * @param   {Array}  list   [list description]
 * @param   {("Popularité" | "Date" | "Titre")}  index  [index description]
 *
 * @return  {Array}         [return description]
 */
function sortList(list, index) {
  let method;
  switch (index) {
    case "Popularité":
      method = (a, b) => {
        return a.likes - b.likes;
      };
      break;
    case "Date":
      method = (a, b) => {
        const da = new Date(a.date);
        const db = new Date(b.date);
        // @ts-ignore
        return da - db;
      };
      break;
    default:
      method = (a, b) => {
        const fa = a.title.toLowerCase();
        const fb = b.title.toLowerCase();
        if (fa < fb) return -1;
        if (fa > fb) return 1;
        return 0;
      };
      break;
  }
  return list.sort(method);
}

<<<<<<< HEAD
function getMedia(id){
  const max = data.media.length;
  for(let i=0; i<max; i++){
    if (data.media[i].id === id) return {
      prevId : data.media[i-1].id,
      nextId : data.media[i+1].id,
      media : data.media[i]
    }
  }
  console.error("media",id,"non trouvé");
=======
/**
     * get source of the media with the id photographer
     *
    //  * @return  {String} 
     */
function getSource(photographerId) {
  // console.log(this.photographerId);
  switch (photographerId) {
    case 82:
      return "../images/Tracy/";
    case 195:
      return "../images/Marcel/";
    case 243:
      return "../images/Mimi/";
    case 527:
      return "../images/Nabeel/";
    case 925:
      return "../images/Rhode/";
    case 930:
      return "../images/Ellie_Rose/";

    default:
      const err = "Impossible de trouver la source du media";
      console.log(err);
      break;
  }
>>>>>>> preprod
}

export {
  initDataManagerSource,
  getAllData,
  getPhotographersTags,
  getPhotographers,
  getPhotographerData,
  getPhotographerMedia,
<<<<<<< HEAD
  getMedia
=======
  getSource,
  getMediaTitle
>>>>>>> preprod
};
