import ScrollShow from './ScrollShow';


export default class Homepage {
  constructor() {
    let scrollShow = new ScrollShow({
      query: '.portfolio-entries--home .portfolio-entries__project',
      inViewClass: 'portfolio-entries__project--in-view',
      debug: true,
      fireOnce: true

    });
  }
}