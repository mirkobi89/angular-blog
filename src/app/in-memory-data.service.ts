import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const posts = [
        {id: 0, titolo:'Post 0', autore:'Admin', data: Date.now(), contenuto: 'post0' },
        {id: 1, titolo:'Post 1', autore:'Admin', data: Date.now(), contenuto: 'post1' },
        {id: 2, titolo:'Post 2', autore:'Admin', data: Date.now(), contenuto: 'post2' },
        {id: 3, titolo:'Post 3', autore:'Admin', data: Date.now(), contenuto: 'post3' },
        {id: 4, titolo:'Post 4', autore:'Admin', data: Date.now(), contenuto: 'post4' },
        {id: 5, titolo:'Post 5', autore:'Admin', data: Date.now(), contenuto: 'post5' },
      ];
    return {posts};
  }
}