import ConfigProvider from './config.provider';
import ConfigService from './config.service';

ngDescribe({
  name: 'shopping.services.config: ConfigProvider',
  tests: function(deps) {
    it('should register configuration', testConfigRegistration);
    it('should return a config service instance', testInstantiateConfigService);

    function testConfigRegistration() {
      // Given
      let config = {plip: 'plop'};
      let configurationProvider = new ConfigProvider();

      // When
      configurationProvider.register(config, 'test');

      // Then
      expect(configurationProvider.configs.test).toEqual(config);
    }

    function testInstantiateConfigService() {
      // Given
      let configurationProvider = new ConfigProvider();

      // When
      let configService = configurationProvider.$get();

      // Then
      expect(configService instanceof ConfigService).toBe(true);
    }
  }
});