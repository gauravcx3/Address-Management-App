package net.javaguides.springboot.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import net.javaguides.springboot.model.ERole;
import net.javaguides.springboot.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {

  Optional<Role> findByName(ERole name);


}
  

