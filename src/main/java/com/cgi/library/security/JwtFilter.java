package com.cgi.library.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
public class JwtFilter extends BasicAuthenticationFilter {
    public JwtFilter(@Lazy AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
        String token = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (token != null && token.startsWith("Bearer ")) {
            token = token.replace("Bearer ", "");

            String security = "9j1guhInbR6amGtnEVlaRplTTP/cQIMmF3T3+9Pim6x1ynBnwmbBq5+K0YH1mVU4F/fay74Tz1aiCXuVzXdhpw==";
            SecretKey signingKey = Keys.hmacShaKeyFor(Decoders.BASE64.decode(security));

            Claims claims = Jwts.parser()
                    .verifyWith(signingKey)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();

            String username = claims.get("username").toString();
            boolean admin = claims.get("admin").equals("true");

            List<GrantedAuthority> authorities = new ArrayList<>();
            if (admin) {
                GrantedAuthority authority = new SimpleGrantedAuthority("admin");
                authorities.add(authority);
            }

            Authentication auth = new UsernamePasswordAuthenticationToken(username, authorities);
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        super.doFilterInternal(request, response, chain);
        // chain.doFilter(request, response);
    }
}
