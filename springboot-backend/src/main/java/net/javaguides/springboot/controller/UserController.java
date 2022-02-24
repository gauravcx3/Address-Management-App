package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.User;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

  @Autowired
  private UserRepository userRepository;

  @GetMapping
  public List<User> getAllUsers() {
    return userRepository.findAll();
  }

  @PostMapping
  public User createUser(@RequestBody User user) {
    return userRepository.save(user);
  }

  // @GetMapping("{email}")
  // public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
  //   User user = userRepository.findByEmail(email);
  //       // .orElseThrow(() -> new ResourceNotFoundException("User does not exist with email: " + email));
  //   return ResponseEntity.ok().body(user);
  // }

  // @PutMapping("{id}")
  // public ResponseEntity<Address> updateAddress(@PathVariable Long id, @RequestBody Address addressDetails) {
  //   Address updateAddress = addressRepository.findById(id)
  //       .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
  //   updateAddress.setAddressLine1(addressDetails.getAddressLine1());
  //   updateAddress.setAddressLine2(addressDetails.getAddressLine2());
  //   updateAddress.setPostalCode(addressDetails.getPostalCode());
  //   addressRepository.save(updateAddress);
  //   return ResponseEntity.ok(updateAddress);
  // }

  // @DeleteMapping("{id}")
  // public ResponseEntity<HttpStatus> deleteAddress(@PathVariable Long id){
  //   Address address = addressRepository.findById(id)
  //   .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
  //   addressRepository.delete(address);
  //   return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  // }

}
