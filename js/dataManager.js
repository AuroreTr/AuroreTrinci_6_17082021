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
  let photographerInfo = '';
  data.photographers.forEach((photographer) => {
    // console.log(photographer.id);
    if (photographer.id === photographerId) {
      photographerInfo = photographer;
    } 

  });
  return photographerInfo;

}

function getPhotographerMedia(photographerId) {
  const list = [];
  data.media.forEach((media) => {
    if (media.photographerId === photographerId) {
      list.push(media);
    }
  });
  return list;
}

/**
 * [sortList description]
 *
 * @param   {Array}  list   [list description]
 * @param   {String}  index  [index description]
 *
 * @return  {Array}         [return description]
 */
function sortList(list, index) {
  return list;
}

export {
  initDataManagerSource,
  getAllData,
  getPhotographersTags,
  getPhotographers,
  getPhotographerData,
  getPhotographerMedia,
  sortList
};
