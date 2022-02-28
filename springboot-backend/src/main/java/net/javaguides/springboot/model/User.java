package net.javaguides.springboot.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user", uniqueConstraints = {
    @UniqueConstraint(columnNames = { "username" }),
    @UniqueConstraint(columnNames = { "email" })
})
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @NotBlank
  @Size(max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  @NotBlank
  @Size(max = 120)
  private String password;

  @ManyToMany(fetch = FetchType.LAZY)
  @JoinTable(name = "user_roles", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
  private Set<Role> roles = new HashSet<>();

  // @OneToMany(fetch = FetchType.LAZY)
  // @JoinColumn(name = "user_address_key", referencedColumnName = "id")
  // private List<Address> addresses = new ArrayList<>();

  public User() {

  }

  public User(String username, String email, String password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<Role> getRoles() {
    return roles;
  }

  public void setRoles(Set<Role> roles) {
    this.roles = roles;
  }

}

// package net.javaguides.springboot.model;

// import java.util.ArrayList;
// import java.util.List;

// import javax.persistence.CascadeType;
// import javax.persistence.Column;
// import javax.persistence.Entity;

// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.JoinColumn;

// import javax.persistence.OneToMany;
// import javax.persistence.Table;
// import javax.persistence.UniqueConstraint;

// import lombok.AllArgsConstructor;
// import lombok.Getter;
// import lombok.NoArgsConstructor;
// import lombok.Setter;

// @Getter
// @Setter
// @NoArgsConstructor
// @AllArgsConstructor
// @Entity
// @Table(name = "user", uniqueConstraints = @UniqueConstraint(columnNames =
// "email"))
// public class User {
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// @Column(name = "id")
// private Long id;

// @Column(name = "email")
// private String email;

// private String password;

// @OneToMany(cascade = CascadeType.ALL)
// @JoinColumn(name = "user_address_key", referencedColumnName = "id")
// List<Address> addresses = new ArrayList<>();
// }