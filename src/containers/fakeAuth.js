/* A fake authentication function */
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};
export default fakeAuth;

// export const MapComponent = () => { ...whatever }
// import { MapComponent } from './map'
