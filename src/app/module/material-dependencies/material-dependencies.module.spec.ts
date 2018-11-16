import { MaterialDependenciesModule } from './material-dependencies.module';

describe('MaterialDependenciesModule', () => {
  let materialDependenciesModule: MaterialDependenciesModule;

  beforeEach(() => {
    materialDependenciesModule = new MaterialDependenciesModule();
  });

  it('should create an instance', () => {
    expect(materialDependenciesModule).toBeTruthy();
  });
});
