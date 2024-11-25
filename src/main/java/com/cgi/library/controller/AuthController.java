package com.cgi.library.controller;

import com.cgi.library.entity.Account;
import com.cgi.library.model.AccountDTO;
import com.cgi.library.repository.AccountRepository;
import com.cgi.library.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthController {

    @Autowired
    AuthService authService;
    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("signup")
    public Account signup(@RequestBody Account account) {
        return this.authService.saveAccount(account);
    }

    @GetMapping("accounts")
    public List<Account> getAccounts() {
        return accountRepository.findAll();
    }

    @PostMapping("login")
    public Account login(@RequestBody AccountDTO accountDTO) {
        return accountRepository.findById(accountDTO.getUsername()).orElseThrow();
    }

    @GetMapping("admin")
    public boolean isAdmin() {
        GrantedAuthority authority = new SimpleGrantedAuthority("admin");
        return SecurityContextHolder.getContext().getAuthentication().getAuthorities().contains(authority);
    }
}
