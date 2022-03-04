package net.javaguides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.javaguides.springboot.repository.AddressRepository;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Address;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test/addresses")
public class AddressController {

  @Autowired
  private AddressRepository addressRepository;

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/user/{id}")
  // @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
  public List<Address> getAllAddresses(@PathVariable Long id) {
    return addressRepository.findByUserId(id);
  }

  // @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
  @GetMapping("/edit/{id}")
  public ResponseEntity<Address> getAddressById(@PathVariable Long id) {
    Address address = addressRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
    return ResponseEntity.ok().body(address);
  }

  // @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
  @PostMapping("/add/{id}")
  public ResponseEntity<Address> createAddress(@PathVariable Long id, @RequestBody Address addressDetails) {
    Address newAddress = userRepository.findById(id).map(user -> {
      addressDetails.setUser(user);
      return addressRepository.save(addressDetails);
    }).orElseThrow(() -> new ResourceNotFoundException("Not found User with id = " + id));
    return ResponseEntity.ok(newAddress);
  }

  // @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
  @PutMapping("/edit/{id}")
  public ResponseEntity<Address> updateAddress(@PathVariable Long id, @RequestBody Address addressDetails) {
    Address updateAddress = addressRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
    updateAddress.setAddressLine1(addressDetails.getAddressLine1());
    updateAddress.setAddressLine2(addressDetails.getAddressLine2());
    updateAddress.setPostalCode(addressDetails.getPostalCode());
    addressRepository.save(updateAddress);
    return ResponseEntity.ok(updateAddress);
  }

  // @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
  @DeleteMapping("/delete/{id}")
  public ResponseEntity<HttpStatus> deleteAddress(@PathVariable Long id) {
    Address address = addressRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Address does not exist with id: " + id));
    addressRepository.delete(address);
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

}
