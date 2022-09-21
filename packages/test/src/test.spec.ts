import { normalizePluginPath } from '@nrwl/webpack';

describe('@nrwl/webpack normalizePluginPath', () => {
  it('should return a defined value', async () => {
    expect(normalizePluginPath("test", "test")).toBeDefined();
  });
});
