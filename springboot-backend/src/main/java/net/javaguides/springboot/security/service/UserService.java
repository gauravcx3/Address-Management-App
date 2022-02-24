// package net.javaguides.springboot.service;

// import java.util.ArrayList;

// import org.springframework.security.core.userdetails.User;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
// import org.springframework.stereotype.Service;

// import net.javaguides.springboot.Custom.CustomUserDetails;
// // import net.javaguides.springboot.model.User;
// import net.javaguides.springboot.repository.UserRepository;

// @Service
// public class UserService implements UserDetailsService {

//   @Autowired
//   private UserRepository userRepository;

//   @Override
//   public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    
//     // User user = userRepository.findByUsername(username);

//     // if (user == null) {
//     //   throw new UsernameNotFoundException("User not found with username: " + username);
//     // }

//     return new User("admin", "password", new ArrayList<>());
//   }

// }
  

