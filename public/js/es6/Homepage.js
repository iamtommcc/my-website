import ScrollShow from './ScrollShow';


export default class Homepage {
  constructor() {
    let scrollShow = new ScrollShow({
      query: '.portfolio-entries--home',
      inViewClass: 'portfolio-entries--in-view',
      fireOnce: true
    });
  }
}