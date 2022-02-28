package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Address;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
  
  List<Address> findByUserId(Long userId);

  @Transactional
  void deleteByUserId(Long userId);
  
}
  

