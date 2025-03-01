import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ReferencesService {
  getReferences() {
    return [
      { name: 'Darwin B. Magana', address: '2813 Shobe Lane, Mancos, CO.', phone: '+1-970-533-3393', email: 'darwin@example.com' },
      { name: 'Jane Doe', address: '914 Ivy Street, Centennial, CO.', phone: '+1-908-987-5103', email: 'jane@example.com' }
    ];
  }
}
