package com.cgi.library.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "accounts")
public class Account {
    @Id
    private String username;
    private String firstName;
    private String lastName;
    @OneToMany
    private Set<Book> favorites;

    @ColumnDefault("false")
    private boolean admin;

    @OneToMany
    private Set<CheckOut> checkouts;
}
