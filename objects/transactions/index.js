const glob = require( 'glob' )
const path = require( 'path' );

const exports = {}

glob.sync( './*.js' ).forEach( function( file ) {
  const name = file.replace('.js', '');
  if(name !== 'index'){
    exports[name] = require(path.resolve(file));
  }
});

module.exports = exports