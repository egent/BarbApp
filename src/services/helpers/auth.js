function toFormatUserTypeOptions(arr, selectedId) {
  const res = [];
  for (const [key, value] of Object.entries(arr)) {
    res.push({
      id: key,
      name: value,
      checked: key === selectedId ? true : false,
    });
  }
  return res;
}

function toFormatCityOptions(elements, selectedId) {
  const res = [];
  elements.map(function(item){
    res.push({
      id: item.id,
      name: item.name,
      checked: item.id === selectedId ? true : false,
    });
  });
  return res;
}

function emailValidation(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export {
  toFormatUserTypeOptions,
  toFormatCityOptions,
  emailValidation,
};
