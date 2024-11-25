package com.cgi.library.service;

import com.cgi.library.entity.Account;
import com.cgi.library.model.Token;
import com.cgi.library.repository.AccountRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
public class AuthService {

    @Autowired
    private AccountRepository accountRepository;

    public Token getToken(Account account) {
        Date expirationDate = new Date((new Date()).getTime() + 2 * 3600*1000);
        Map<String, String> claims = new HashMap<>();
        claims.put("username", account.getUsername());
        claims.put("admin", String.valueOf(account.isAdmin()));

        String security = "9j1guhInbR6amGtnEVlaRplTTP/cQIMmF3T3+9Pim6x1ynBnwmbBq5+K0YH1mVU4F/fay74Tz1aiCXuVzXdhpw==";
        SecretKey signingKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(security));

        String jwtToken = Jwts.builder()
                .expiration(expirationDate)
                .claims(claims)
                .signWith(signingKey)
                .compact();

        Token token = new Token();
        token.setToken(jwtToken);
        token.setExpiration(new Date());
        return token;
    }

    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    public void saveFavorite() {

    }

    public void removeFavorite() {

    }
}
