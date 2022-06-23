function flatten(obj, prefix, ans) {
  for (var x in obj) {
      var key;
      if (prefix != '')
        key = prefix + '.' + x;
      else
        key = x;
      if (typeof obj[x] === 'object') {
          flatten(obj[x], key, ans);
       } else {
          ans[key] = obj[x];
       }
    }
}
var ans = {};
var dict = {'key1':1,'key2':{'key3':2,'key4':3,'key5':{'key6':4}}};
flatten(dict, "", ans)
console.log(ans)

//output
// {key1: 1, key2.key3: 2, key2.key4: 3, key2.key5.key6: 4}
