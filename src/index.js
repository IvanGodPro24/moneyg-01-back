import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import { initializeCategories } from './services/categories/categoriesService.js';

const bootstrap = async () => {
  await initMongoConnection();
  await initializeCategories();
  setupServer();
};

bootstrap();
