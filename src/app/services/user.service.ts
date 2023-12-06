import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [
    { name: 'DS User', email: 'amal', password: 'amal', role: 'DS' },
    { name: 'DE User', email: 'asma', password: 'asma', role: 'DE' }
  ];

  constructor(private router: Router) { }

  login(email: string, password: string): void {
    console.log('Entered email:', email);
    console.log('Entered password:', password);
  
    const user = this.users.find(u => u.email === email && u.password === password);
  
    if (user) {
      console.log('User found:', user);
  
      if (this.isDSUser(user)) {
        console.log('DS User');
        this.router.navigate(['/dashDS']);
      } else if (this.isDEUser(user)) {
        console.log('DE User');
        this.router.navigate(['/dashDE']);
      }
    } else {
      console.log('Invalid login credentials');
    }
  }
  
  

  getUserByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  isDSUser(user: User): boolean {
    return user.role === 'DS';
  }

  isDEUser(user: User): boolean {
    return user.role === 'DE';
  }
}
