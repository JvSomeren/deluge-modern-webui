import store from '../store/index'

export function AuthGuard( to, from, next ) {
  if ( store.state.authenticated )
    next();
  else
    next( { name: 'login' } );
}

export function LoginGuard( to, from, next ) {
  if ( store.state.authenticated )
    next( { name: 'home' } );
  else
    next();
}

export function TorrentGuard( to, from, next ) {
  if ( store.state.torrents.hasOwnProperty( to.params.hash ) )
    next();
  else
    next( { name: 'home' } );
}
