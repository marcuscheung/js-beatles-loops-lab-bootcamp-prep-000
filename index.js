function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var newfacts = [];
  let i = 0;
  while (i < facts.length){
    newfacts.push(facts[i] + '!!!');
  }
  return newfacts;
}

