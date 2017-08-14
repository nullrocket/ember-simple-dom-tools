

export default function nonnative_slice( item, start ) {
  start = ~~start;
  let  len = item.length
  let i
  let newArray = new Array(len - start);

  for ( i = start; i < len; i++ ) {
    newArray[ i - start ] = item[ i ];
  }

  return newArray;
}